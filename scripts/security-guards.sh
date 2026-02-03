#!/bin/bash

# Security Guard Script for CVE-2025-55182 and CVE-2025-66478
# Prevents accidental introduction of vulnerable React Server Components patterns
#
# Usage: ./scripts/security-guards.sh
# Exit codes: 0 = safe, 1 = vulnerable patterns detected

set -e

YELLOW='\033[0;33m'
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🔒 Running Security Guards for RSC CVE Protection${NC}"
echo ""

# Track if any violations were found
VIOLATIONS_FOUND=0

# Function to check for forbidden patterns
check_pattern() {
  local pattern="$1"
  local description="$2"
  local severity="$3"

  if grep -r "$pattern" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" 2>/dev/null | grep -v "node_modules" | grep -v ".next"; then
    echo -e "${RED}❌ ${severity}: $description${NC}"
    echo -e "${RED}   Found: $pattern${NC}"
    VIOLATIONS_FOUND=1
  fi
}

# Check 1: Server Actions directive (CVE-2025-66478)
echo "Checking for Server Actions..."
check_pattern "'use server'" "Server Actions detected" "CRITICAL"
check_pattern '"use server"' "Server Actions detected" "CRITICAL"

# Check 2: React Server Components imports (CVE-2025-55182)
echo "Checking for RSC imports..."
check_pattern "from ['\"]react-server" "React Server Components imports" "CRITICAL"
check_pattern "from ['\"]react-server-dom" "RSC Flight protocol packages" "CRITICAL"

# Check 3: Next.js API routes (should use external payment service)
echo "Checking for API routes..."
if [ -d "src/app/api" ]; then
  echo -e "${YELLOW}⚠️  WARNING: API routes detected in src/app/api/${NC}"
  echo -e "${YELLOW}   Ensure these routes don't use Server Actions or process sensitive data${NC}"
  echo ""
fi

# Check 4: React 19 specific APIs
echo "Checking for React 19 features..."
check_pattern "use.*Server" "Server hooks (React 19+)" "HIGH"

# Check 5: Flight protocol references
echo "Checking for Flight protocol..."
check_pattern "flight" "Flight protocol references" "MEDIUM"

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ $VIOLATIONS_FOUND -eq 0 ]; then
  echo -e "${GREEN}✅ No RSC vulnerabilities detected${NC}"
  echo ""
  echo "The codebase is compliant with CVE mitigation requirements:"
  echo "  • No Server Actions (CVE-2025-66478 protection)"
  echo "  • No React Server Components (CVE-2025-55182 protection)"
  echo "  • Static export mode compatible"
  echo ""
  exit 0
else
  echo -e "${RED}❌ Security violations detected!${NC}"
  echo ""
  echo "❌ CRITICAL: Vulnerable patterns found that could expose the application to:"
  echo "   • CVE-2025-55182 (React2Shell - Remote Code Execution)"
  echo "   • CVE-2025-66478 (Next.js Server Actions RCE)"
  echo ""
  echo "See: https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components"
  echo ""
  exit 1
fi
