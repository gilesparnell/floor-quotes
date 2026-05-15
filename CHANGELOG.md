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

## [0.1.0] - 2026-05-16 AEST

### What's new
- The Floor Quotes concept now has a simple public webpage explaining the product motivation and linking to the written and visual artifacts.
- Visitors can open the one-pager, technical architecture, competitive scan, architecture map, desktop mockups, and mobile mockups from one place.

### Under the hood
- Added a Vite static site with build-time version display in `src/version.js`.
- Added `scripts/verify-site.mjs` to verify artifact links, required copy, version metadata, and changelog structure before deployment.
