const semver = typeof __APP_SEMVER__ === 'string' ? __APP_SEMVER__ : '0.0.0'
const fullSha = typeof __APP_VERSION__ === 'string' ? __APP_VERSION__ : 'local'

export const APP_DISPLAY_VERSION = `v${semver} (${fullSha.slice(0, 7)})`
