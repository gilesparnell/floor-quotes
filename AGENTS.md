# Floor Quotes Project Instructions

## Versioning

This project is deployed as a Vite frontend and must display a visible version in the page footer.

- Bump `package.json` for every production-shipping PR.
- Update `CHANGELOG.md` in the same change.
- Keep the footer format as `vX.Y.Z (sha7)`.

## Verification

Before claiming the site is ready or deployed, run:

```bash
npm run verify
npm run build
```

After Vercel deployment, fetch the live page and confirm it contains the expected product copy, artifact links, and version footer.
