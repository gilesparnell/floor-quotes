import { execSync } from 'node:child_process'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { renderChangelogContent, renderHomeContent } from '../src/site.js'

const pkg = JSON.parse(readFileSync('package.json', 'utf8'))
const sha = process.env.VERCEL_GIT_COMMIT_SHA || localGitSha()
const displayVersion = `v${pkg.version} (${sha.slice(0, 7)})`
const changelogText = readFileSync('CHANGELOG.md', 'utf8')
const shell = readFileSync('dist/index.html', 'utf8')

function localGitSha() {
  try {
    return execSync('git rev-parse HEAD', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
  } catch {
    return 'local'
  }
}

function renderDocument({ title, content }) {
  return shell
    .replace('<title>Floor Quotes</title>', `<title>${title}</title>`)
    .replace('<div id="app"></div>', `<div id="app">${content}</div>`)
}

writeFileSync(
  'dist/index.html',
  renderDocument({
    title: 'Floor Quotes',
    content: renderHomeContent(displayVersion),
  }),
)

mkdirSync('dist/changelog', { recursive: true })
writeFileSync(
  'dist/changelog/index.html',
  renderDocument({
    title: 'Floor Quotes | Changelog',
    content: renderChangelogContent(changelogText, displayVersion),
  }),
)

console.log('prerendered homepage and changelog')
