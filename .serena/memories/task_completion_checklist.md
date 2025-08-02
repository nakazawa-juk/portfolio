# Task Completion Checklist

When completing any development task on this portfolio project, always run these commands in order:

## 1. Code Formatting

```bash
npm run format
```

Formats all code according to Prettier configuration.

## 2. Linting

```bash
npm run lint
```

Checks for ESLint issues and ensures code quality standards.

## 3. Build Verification

```bash
npm run build
```

Ensures the static export build works correctly. This is critical since the site uses static generation.

## 4. Optional: Format Check

```bash
npm run format:check
```

Verifies that formatting is consistent (can be used in CI/CD).

## Important Notes

- **Always run build**: Since this is a static site (`output: 'export'`), the build must succeed
- **Fix lint issues**: Don't ignore ESLint warnings/errors
- **Verify static export**: Check that pages render correctly in static mode
- **Test responsive design**: Portfolio should work on mobile and desktop

## Deployment Notes

- Site uses static export for hosting on platforms like Vercel, Netlify
- Images are unoptimized for static builds
- Trailing slashes are enabled for proper static routing
