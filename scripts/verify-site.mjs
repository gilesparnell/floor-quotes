import { readFileSync, existsSync } from 'node:fs'

const requiredFiles = [
  'package.json',
  'CHANGELOG.md',
  'index.html',
  'src/main.js',
  'src/styles.css',
  'src/version.js',
  'public/artifacts/flooring-quote-system-one-pager.md',
  'public/artifacts/technical-architecture.md',
  'public/artifacts/competitive-scan.md',
  'public/artifacts/flooring-quote-architecture.html',
  'public/artifacts/flooring-quote-app-mockups.html',
  'public/artifacts/flooring-quote-mobile-mockups.html',
]

const missing = requiredFiles.filter((file) => !existsSync(file))
if (missing.length > 0) {
  throw new Error(`Missing required files: ${missing.join(', ')}`)
}

const pkg = JSON.parse(readFileSync('package.json', 'utf8'))
if (!pkg.version || pkg.version !== '0.1.0') {
  throw new Error(`Expected package version 0.1.0, received ${pkg.version || 'none'}`)
}

const index = readFileSync('index.html', 'utf8')
if (!index.includes('id="app"')) {
  throw new Error('index.html must expose the Vite app mount')
}

const source = readFileSync('src/main.js', 'utf8')
const requiredCopy = [
  'Quote-ready spatial commerce for flooring installers',
  'flooring-quote-system-one-pager.md',
  'technical-architecture.md',
  'competitive-scan.md',
  'flooring-quote-architecture.html',
  'flooring-quote-app-mockups.html',
  'flooring-quote-mobile-mockups.html',
  'APP_DISPLAY_VERSION',
]

const missingCopy = requiredCopy.filter((text) => !source.includes(text))
if (missingCopy.length > 0) {
  throw new Error(`Landing page is missing required content: ${missingCopy.join(', ')}`)
}

const changelog = readFileSync('CHANGELOG.md', 'utf8')
for (const heading of ["What's new", 'Under the hood']) {
  if (!changelog.includes(heading)) {
    throw new Error(`CHANGELOG.md missing ${heading}`)
  }
}

console.log('site verification passed')
