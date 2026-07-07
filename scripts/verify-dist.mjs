import { readFileSync } from 'node:fs'

const checks = [
  {
    file: 'dist/index.html',
    required: [
      'Help flooring businesses turn vague enquiries into quote-ready jobs.',
      'Floor Quotes explores a practical sales and operations system',
      '/changelog#0.1.4',
    ],
  },
  {
    file: 'dist/changelog/index.html',
    required: [
      'What changed, why it matters, and the technical notes behind it.',
      'id="0.1.4"',
      'version-anchor',
      'AI review tools can now read the homepage and changelog directly from the URL',
    ],
  },
]

for (const check of checks) {
  const html = readFileSync(check.file, 'utf8')

  if (html.includes('<div id="app"></div>')) {
    throw new Error(`${check.file} still contains an empty app shell`)
  }

  const missing = check.required.filter((text) => !html.includes(text))
  if (missing.length > 0) {
    throw new Error(`${check.file} is missing prerendered content: ${missing.join(', ')}`)
  }
}

console.log('dist verification passed')
