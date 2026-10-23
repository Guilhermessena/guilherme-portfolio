# Guilherme Portfolio

A multilingual portfolio for a mobile software engineer, built with Next.js, React, TypeScript, and Tailwind CSS 4.

## Routes

- `/` redirects to `/en`.
- `/en`, `/pt`, and `/de` render the English, Portuguese, and German portfolio.

## Architecture

- `app/[lang]` validates route locales, loads translated copy, and defines localized metadata.
- `i18n` owns the supported locale list and locale validation.
- `components/navigation` contains the interactive language selector.
- `components/portfolio` contains the portfolio page composition and its sections.
- `app/globals.css` contains the shared visual system and responsive styles.

## Development

```bash
npm run dev
npm run lint
npm run build
npm run start
```