import { readFileSync } from 'node:fs'
import test from 'node:test'
import assert from 'node:assert/strict'
import { renderChangelogContent, renderHomeContent } from '../src/site.js'

const changelogText = readFileSync('CHANGELOG.md', 'utf8')

test('renders homepage content as a reusable HTML string', () => {
  const html = renderHomeContent('v0.1.3 (local)')

  assert.match(html, /Help flooring businesses turn vague enquiries into quote-ready jobs/)
  assert.match(html, /flooring-quote-system-one-pager\.html/)
  assert.match(html, /\/changelog#0\.1\.3/)
})

test('renders changelog content with linkable version anchors', () => {
  const html = renderChangelogContent(changelogText, 'v0.1.3 (local)')

  assert.match(html, /What changed, why it matters/)
  assert.match(html, /id="0\.1\.3"/)
  assert.match(html, /version-anchor/)
})
