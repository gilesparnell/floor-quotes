# Changelog

All notable changes. Bumped on every PR that ships to production.

## Conventions
- patch (0.0.x) - bug fixes, copy tweaks, dependency bumps
- minor (0.x.0) - new features, new pages, new tracked events
- major (x.0.0) - breaking changes

Each entry is split into:
- **What's new** - customer-facing outcomes
- **Under the hood** - technical detail

---

## [0.1.1 -> 0.1.3] - 2026-05-16 AEST

### What's new
- The footer version now links to a dedicated changelog page.
- Changelog versions are linkable, so a specific release can be opened directly with a URL hash.
- AI review tools can now read the homepage and changelog directly from the URL because the pages are pre-rendered as HTML.

### Under the hood
- Added a lightweight changelog parser and renderer based on the Whole Life Challenge changelog pattern.
- Added parser tests for headings, bullets, version-range anchors, and lower-contrast technical sections.
- Updated the production verification contract to require the changelog route and footer link.
- Added post-build prerendering for `/` and `/changelog`, plus a dist verification step that fails if the raw HTML falls back to an empty Vite shell.

---

## [0.1.0 -> 0.1.1] - 2026-05-16 AEST

### What's new
- The Floor Quotes concept now has a simple public webpage explaining the product motivation and linking to the written and visual artifacts.
- Visitors can open the one-pager, technical architecture, competitive scan, architecture map, desktop mockups, and mobile mockups from one place.
- The written artifacts now open as styled webpages instead of raw Markdown or a separate Word document export.

### Under the hood
- Added a Vite static site with build-time version display in `src/version.js`.
- Added `scripts/verify-site.mjs` to verify artifact links, required copy, version metadata, and changelog structure before deployment.
- Replaced public Markdown and Word artifact links with HTML artifact pages that share a consistent visual system.
