# Florence Kaneng Review — Final Cinematic Polish

This is the Prompt 3 upgraded version of **Florence Kaneng Review**.

It includes:

- Premium cinematic polish across the site
- Shared `Navbar`, `Footer`, `DisclaimerNote`, `VisualPanel`, `PageHero`, `SectionHeader`, and `ArticleCard` components
- Improved navigation consistency
- Improved mobile navigation wrapping
- Stronger focus states and accessibility basics
- Refined article readability and pull-quote styling
- Consistent footer credibility layer
- Static-only architecture: no backend, no CMS, no authentication, no database
- Build script preserved as `next build --webpack` for Termux/Android compatibility

## Main routes

- `/`
- `/issue-one`
- `/articles`
- `/articles/[slug]`
- `/about`
- `/institute`
- `/support`
- `/care-letter`

## Termux setup

```bash
cd ~/projects
mkdir -p florence-kaneng-review-prompt3
unzip florence-kaneng-review-final-cinematic-polish.zip -d florence-kaneng-review-prompt3
cd florence-kaneng-review-prompt3
npm config set registry https://registry.npmjs.org/
npm install --registry=https://registry.npmjs.org/ --no-audit --no-fund
npm run build
```

## GitHub push

```bash
git init
git branch -M main
git add .
git commit -m "Final cinematic polish"
git remote add origin https://github.com/godwillmakeaday/florence-kaneng-review.git
git push -u origin main --force
```

If `origin` already exists:

```bash
git remote remove origin
git remote add origin https://github.com/godwillmakeaday/florence-kaneng-review.git
git push -u origin main --force
```

## Notes

`package-lock.json` and `node_modules` are intentionally excluded from the zip so Termux can generate a clean lockfile from the public npm registry.
