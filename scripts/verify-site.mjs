import { readFileSync, existsSync } from 'node:fs'

const expectedVersion = '0.1.3'
const requiredFiles = [
  'package.json',
  'CHANGELOG.md',
  'index.html',
  'src/main.js',
  'src/site.js',
  'src/styles.css',
  'src/changelog.js',
  'src/version.js',
  'scripts/prerender-site.mjs',
  'scripts/verify-dist.mjs',
  'vercel.json',
  'public/artifacts/flooring-quote-system-one-pager.html',
  'public/artifacts/technical-architecture.html',
  'public/artifacts/competitive-scan.html',
  'public/artifacts/flooring-quote-architecture.html',
  'public/artifacts/flooring-quote-app-mockups.html',
  'public/artifacts/flooring-quote-mobile-mockups.html',
  'public/artifacts/artifact.css',
]

const missing = requiredFiles.filter((file) => !existsSync(file))
if (missing.length > 0) {
  throw new Error(`Missing required files: ${missing.join(', ')}`)
}

const pkg = JSON.parse(readFileSync('package.json', 'utf8'))
if (!pkg.version || pkg.version !== expectedVersion) {
  throw new Error(`Expected package version ${expectedVersion}, received ${pkg.version || 'none'}`)
}

const index = readFileSync('index.html', 'utf8')
if (!index.includes('id="app"')) {
  throw new Error('index.html must expose the Vite app mount')
}

const source = `${readFileSync('src/main.js', 'utf8')}\n${readFileSync('src/site.js', 'utf8')}`
const requiredCopy = [
  'Quote-ready spatial commerce for flooring installers',
  'flooring-quote-system-one-pager.html',
  'technical-architecture.html',
  'competitive-scan.html',
  'flooring-quote-architecture.html',
  'flooring-quote-app-mockups.html',
  'flooring-quote-mobile-mockups.html',
  'APP_DISPLAY_VERSION',
  '/changelog#0.1.3',
  'renderHomeContent',
  'renderChangelogContent',
]

const missingCopy = requiredCopy.filter((text) => !source.includes(text))
if (missingCopy.length > 0) {
  throw new Error(`Landing page is missing required content: ${missingCopy.join(', ')}`)
}

const forbiddenCopy = [
  'flooring-quote-system-one-pager.md',
  'technical-architecture.md',
  'competitive-scan.md',
  'Flooring%20Quote%20Automation%20System.docx',
]

const presentForbiddenCopy = forbiddenCopy.filter((text) => source.includes(text))
if (presentForbiddenCopy.length > 0) {
  throw new Error(`Landing page still links non-HTML or duplicate artifacts: ${presentForbiddenCopy.join(', ')}`)
}

const forbiddenPublicFiles = [
  'public/artifacts/flooring-quote-system-one-pager.md',
  'public/artifacts/technical-architecture.md',
  'public/artifacts/competitive-scan.md',
  'public/artifacts/Flooring Quote Automation System.docx',
]

const presentForbiddenFiles = forbiddenPublicFiles.filter((file) => existsSync(file))
if (presentForbiddenFiles.length > 0) {
  throw new Error(`Public artifacts still include non-HTML or duplicate files: ${presentForbiddenFiles.join(', ')}`)
}

const changelog = readFileSync('CHANGELOG.md', 'utf8')
for (const heading of ["What's new", 'Under the hood']) {
  if (!changelog.includes(heading)) {
    throw new Error(`CHANGELOG.md missing ${heading}`)
  }
}

for (const text of ['[0.1.1 -> 0.1.3]', 'changelog page', 'versions are linkable', 'AI review tools']) {
  if (!changelog.includes(text)) {
    throw new Error(`CHANGELOG.md missing ${text}`)
  }
}

const vercelConfig = readFileSync('vercel.json', 'utf8')
for (const redirect of [
  'flooring-quote-system-one-pager.md',
  'technical-architecture.md',
  'competitive-scan.md',
  'Flooring%20Quote%20Automation%20System.docx',
]) {
  if (!vercelConfig.includes(redirect)) {
    throw new Error(`vercel.json missing redirect for ${redirect}`)
  }
}

if (!vercelConfig.includes('"source": "/changelog"') || !vercelConfig.includes('"destination": "/changelog/index.html"')) {
  throw new Error('vercel.json missing /changelog prerender rewrite')
}

for (const file of requiredFiles.filter((file) => file.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8')
  if (!html.includes('<!DOCTYPE html>')) {
    throw new Error(`${file} is not an HTML document`)
  }
  const isStyledArtifact = file.includes('one-pager')
    || file.includes('technical-architecture')
    || file.includes('competitive-scan')
  if (isStyledArtifact && !html.includes('artifact.css')) {
    throw new Error(`${file} does not use the shared artifact stylesheet`)
  }
}

console.log('site verification passed')
