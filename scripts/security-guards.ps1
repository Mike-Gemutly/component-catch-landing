# Security Guard Script for CVE-2025-55182 and CVE-2025-66478
# PowerShell version for Windows environments
# Prevents accidental introduction of vulnerable React Server Components patterns

param(
    [switch]$Verbose
)

$ErrorActionPreference = "Continue"

Write-Host "🔒 Running Security Guards for RSC CVE Protection" -ForegroundColor Yellow
Write-Host ""

# Track if any violations were found
$violationsFound = $false

# Function to check for forbidden patterns in files
function Check-Pattern {
    param(
        [string]$Pattern,
        [string]$Description,
        [string]$Severity
    )

    $files = Get-ChildItem -Path "src" -Filter "*.ts","*.tsx","*.js","*.jsx" -Recurse -ErrorAction SilentlyContinue | Where-Object {
        $_.FullName -notmatch "node_modules" -and $_.FullName -notmatch ".next"
    }

    foreach ($file in $files) {
        $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
        if ($content -and $content -match $Pattern) {
            Write-Host "❌ $Severity`: $Description" -ForegroundColor Red
            Write-Host "   Found: $Pattern" -ForegroundColor Red
            Write-Host "   File: $($file.FullName)" -ForegroundColor Red
            $script:violationsFound = $true
        }
    }
}

# Check 1: Server Actions directive (CVE-2025-66478)
Write-Host "Checking for Server Actions..."
Check-Pattern -Pattern "'use server'" -Description "Server Actions detected" -Severity "CRITICAL"
Check-Pattern -Pattern '"use server"' -Description "Server Actions detected" -Severity "CRITICAL"

# Check 2: React Server Components imports (CVE-2025-55182)
Write-Host "Checking for RSC imports..."
Check-Pattern -Pattern "from ['\"]react-server" -Description "React Server Components imports" -Severity "CRITICAL"
Check-Pattern -Pattern "from ['\"]react-server-dom" -Description "RSC Flight protocol packages" -Severity "CRITICAL"

# Check 3: Next.js API routes
Write-Host "Checking for API routes..."
$apiPath = "src\app\api"
if (Test-Path $apiPath) {
    Write-Host "⚠️  WARNING: API routes detected in src/app/api/" -ForegroundColor Yellow
    Write-Host "   Ensure these routes don't use Server Actions or process sensitive data" -ForegroundColor Yellow
    Write-Host ""
}

# Check 4: React 19 specific APIs
Write-Host "Checking for React 19 features..."
Check-Pattern -Pattern "use.*Server" -Description "Server hooks (React 19+)" -Severity "HIGH"

# Summary
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if (-not $violationsFound) {
    Write-Host "✅ No RSC vulnerabilities detected" -ForegroundColor Green
    Write-Host ""
    Write-Host "The codebase is compliant with CVE mitigation requirements:"
    Write-Host "  • No Server Actions (CVE-2025-66478 protection)"
    Write-Host "  • No React Server Components (CVE-2025-55182 protection)"
    Write-Host "  • Static export mode compatible"
    Write-Host ""
    exit 0
} else {
    Write-Host "❌ Security violations detected!" -ForegroundColor Red
    Write-Host ""
    Write-Host "❌ CRITICAL: Vulnerable patterns found that could expose the application to:"
    Write-Host "   • CVE-2025-55182 (React2Shell - Remote Code Execution)"
    Write-Host "   • CVE-2025-66478 (Next.js Server Actions RCE)"
    Write-Host ""
    Write-Host "See: https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components"
    Write-Host ""
    exit 1
}
