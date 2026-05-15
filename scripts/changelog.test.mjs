import assert from 'node:assert/strict'
import { test } from 'node:test'
import { annotateChangelogBlocks, extractVersionSlug, parseChangelog } from '../src/changelog.js'

test('parseChangelog parses headings, bullets, and horizontal rules', () => {
  const blocks = parseChangelog(`# Changelog

## [0.1.1 -> 0.1.2] - 2026-05-16 AEST

### What's new
- Changelog entries are now linkable.

### Under the hood
- Added parser coverage.

---`)

  assert.deepEqual(blocks.map((block) => block.type), ['h1', 'h2', 'h3', 'ul', 'h3', 'ul', 'hr'])
  assert.equal(blocks[1].text, '[0.1.1 -> 0.1.2] - 2026-05-16 AEST')
  assert.deepEqual(blocks[3].items, ['Changelog entries are now linkable.'])
})

test('extractVersionSlug returns the last version in a range', () => {
  assert.equal(extractVersionSlug('[0.1.0 -> 0.1.2] - 2026-05-16 AEST'), '0.1.2')
  assert.equal(extractVersionSlug('[1.2.3] - 2026-05-16 AEST'), '1.2.3')
  assert.equal(extractVersionSlug('Conventions'), null)
})

test('annotateChangelogBlocks dims under-the-hood content only', () => {
  const blocks = annotateChangelogBlocks([
    { type: 'h2', text: '[0.1.2] - 2026-05-16 AEST' },
    { type: 'h3', text: "What's new" },
    { type: 'ul', items: ['Visible copy'] },
    { type: 'h3', text: 'Under the hood' },
    { type: 'ul', items: ['Technical copy'] },
  ])

  assert.equal(blocks[2].dim, false)
  assert.equal(blocks[4].dim, true)
})
