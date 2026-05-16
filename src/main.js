import './styles.css'
import changelogText from '../CHANGELOG.md?raw'
import { renderChangelogContent, renderHomeContent } from './site.js'
import { APP_DISPLAY_VERSION } from './version.js'

const app = document.querySelector('#app')

if (window.location.pathname === '/changelog') {
  app.innerHTML = renderChangelogContent(changelogText, APP_DISPLAY_VERSION)

  const hash = window.location.hash.replace(/^#/, '')
  if (hash) {
    window.requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }
} else {
  app.innerHTML = renderHomeContent(APP_DISPLAY_VERSION)
}
