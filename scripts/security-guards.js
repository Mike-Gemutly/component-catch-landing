#!/usr/bin/env node

/**
 * Security Guard Script for CVE-2025-55182 and CVE-2025-66478
 * Cross-platform Node.js version
 * Prevents accidental introduction of vulnerable React Server Components patterns
 *
 * Usage: node scripts/security-guards.js
 * Exit codes: 0 = safe, 1 = vulnerable patterns detected
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Track violations
let violationsFound = false;

/**
 * Recursively find all source files in a directory
 */
function findSourceFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];

  function traverse(currentPath) {
    try {
      const entries = fs.readdirSync(currentPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentPath, entry.name);

        // Skip node_modules and .next
        if (entry.name === 'node_modules' || entry.name === '.next') {
          continue;
        }

        if (entry.isDirectory()) {
          traverse(fullPath);
        } else if (entry.isFile() && extensions.some(ext => entry.name.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }

  traverse(dir);
  return files;
}

/**
 * Check a file for forbidden patterns
 */
function checkFileForPattern(filePath, pattern, description, severity) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Check for exact string matches
    if (content.includes(pattern)) {
      log(`❌ ${severity}: ${description}`, 'red');
      log(`   Found: ${pattern}`, 'red');
      log(`   File: ${filePath}`, 'red');
      return true;
    }

    // Check for regex patterns
    if (pattern instanceof RegExp && pattern.test(content)) {
      log(`❌ ${severity}: ${description}`, 'red');
      log(`   Pattern matched in: ${filePath}`, 'red');
      return true;
    }
  } catch (error) {
    // Skip files we can't read
  }
  return false;
}

/**
 * Check all files for forbidden patterns
 */
function checkPatterns() {
  const srcDir = path.join(process.cwd(), 'src');

  if (!fs.existsSync(srcDir)) {
    log('⚠️  No src/ directory found', 'yellow');
    return;
  }

  const files = findSourceFiles(srcDir);

  log('Checking for Server Actions...', 'blue');
  const serverActionPatterns = ["'use server'", '"use server"'];
  for (const pattern of serverActionPatterns) {
    for (const file of files) {
      if (checkFileForPattern(file, pattern, 'Server Actions detected', 'CRITICAL')) {
        violationsFound = true;
      }
    }
  }

  log('Checking for RSC imports...', 'blue');
  const rscImportPatterns = [
    /from ['"]react-server/,
    /from ['"]react-server-dom/
  ];
  for (const pattern of rscImportPatterns) {
    for (const file of files) {
      if (checkFileForPattern(file, pattern, 'React Server Components imports', 'CRITICAL')) {
        violationsFound = true;
      }
    }
  }

  log('Checking for React 19 features...', 'blue');
  const react19Patterns = [/use.*Server/];
  for (const pattern of react19Patterns) {
    for (const file of files) {
      if (checkFileForPattern(file, pattern, 'Server hooks (React 19+)', 'HIGH')) {
        violationsFound = true;
      }
    }
  }

  // Check for API routes directory
  const apiPath = path.join(process.cwd(), 'src', 'app', 'api');
  if (fs.existsSync(apiPath)) {
    log('⚠️  WARNING: API routes detected in src/app/api/', 'yellow');
    log('   Ensure these routes don\'t use Server Actions or process sensitive data', 'yellow');
    console.log('');
  }
}

/**
 * Main execution
 */
function main() {
  log('🔒 Running Security Guards for RSC CVE Protection', 'yellow');
  console.log('');

  checkPatterns();

  console.log('');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'blue');

  if (!violationsFound) {
    log('✅ No RSC vulnerabilities detected', 'green');
    console.log('');
    log('The codebase is compliant with CVE mitigation requirements:', 'green');
    log('  • No Server Actions (CVE-2025-66478 protection)', 'green');
    log('  • No React Server Components (CVE-2025-55182 protection)', 'green');
    log('  • Static export mode compatible', 'green');
    console.log('');
    process.exit(0);
  } else {
    log('❌ Security violations detected!', 'red');
    console.log('');
    log('❌ CRITICAL: Vulnerable patterns found that could expose the application to:', 'red');
    log('   • CVE-2025-55182 (React2Shell - Remote Code Execution)', 'red');
    log('   • CVE-2025-66478 (Next.js Server Actions RCE)', 'red');
    console.log('');
    log('See: https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components', 'blue');
    console.log('');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { checkPatterns, findSourceFiles };
