const VERSION_HEADING_RE = /\[([^\]]+)\]/
const VERSION_RE = /\d+\.\d+\.\d+/g

export function parseChangelog(markdown) {
  if (!markdown || typeof markdown !== 'string') return []

  const blocks = []
  const lines = markdown.split('\n')
  let currentList = null

  const closeList = () => {
    currentList = null
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd()

    if (line.startsWith('# ')) {
      closeList()
      blocks.push({ type: 'h1', text: line.slice(2).trim() })
    } else if (line.startsWith('## ')) {
      closeList()
      blocks.push({ type: 'h2', text: line.slice(3).trim() })
    } else if (line.startsWith('### ')) {
      closeList()
      blocks.push({ type: 'h3', text: line.slice(4).trim() })
    } else if (line.trim() === '---') {
      closeList()
      blocks.push({ type: 'hr' })
    } else if (line.startsWith('- ')) {
      if (!currentList) {
        currentList = { type: 'ul', items: [] }
        blocks.push(currentList)
      }
      currentList.items.push(line.slice(2).trim())
    } else if (line.trim() === '') {
      closeList()
    } else {
      closeList()
      blocks.push({ type: 'p', text: line.trim() })
    }
  }

  return blocks
}

export function extractVersionSlug(heading) {
  if (!heading || typeof heading !== 'string') return null
  const bracketMatch = VERSION_HEADING_RE.exec(heading)
  if (!bracketMatch) return null
  const versions = bracketMatch[1].match(VERSION_RE)
  return versions?.length ? versions[versions.length - 1] : null
}

export function annotateChangelogBlocks(blocks) {
  if (!Array.isArray(blocks)) return []

  let dim = false
  return blocks.map((block) => {
    if (block.type === 'h2' || block.type === 'hr') {
      dim = false
    } else if (block.type === 'h3') {
      dim = /under\s*the\s*hood|dev\s*notes|technical/i.test(block.text || '')
    }

    return { ...block, dim }
  })
}

export function splitConventionsBlocks(blocks) {
  if (!Array.isArray(blocks)) {
    return { before: [], conventions: [], after: [] }
  }

  const startIndex = blocks.findIndex((block) =>
    block.type === 'h2' && /^conventions$/i.test((block.text || '').trim())
  )

  if (startIndex === -1) {
    return { before: [], conventions: [], after: blocks.slice() }
  }

  let endIndex = blocks.length
  for (let index = startIndex + 1; index < blocks.length; index += 1) {
    const block = blocks[index]
    if (block.type === 'hr' || block.type === 'h2') {
      endIndex = index
      break
    }
  }

  return {
    before: blocks.slice(0, startIndex),
    conventions: blocks.slice(startIndex, endIndex),
    after: blocks.slice(endIndex),
  }
}
