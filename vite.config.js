import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'))
const sha = process.env.VERCEL_GIT_COMMIT_SHA || localGitSha()

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

export default defineConfig({
  define: {
    __APP_SEMVER__: JSON.stringify(pkg.version),
    __APP_VERSION__: JSON.stringify(sha),
  },
})
