# www.ryscheng.com

The ryscheng Inc. website, built with [Next.js](https://nextjs.org) (App Router) and React, and exported as a static site.

## Structure

```
app/
  layout.tsx          Root layout: fonts, metadata, Google Analytics
  page.tsx            Home page
  page.module.css     Page shell and base typography
  home.css            Home-page global styles
  about/page.tsx      /about
components/
  Hero.tsx            Full-bleed hero with background image
  Newsletter.tsx      Newsletter section with the Substack embed
lib/
  config.ts           Environment configuration
  fonts.ts            Montserrat + Playfair Display via next/font
public/images/        Static image assets
```

Page copy is passed as props from `app/page.tsx`, so text changes happen there.

## Development

```bash
pnpm install
pnpm dev
```

## Configuration

Copy `.env.local.example` to `.env.local` and set:

- `NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY`: Google Analytics measurement ID. Analytics is left out when it is empty.

## Build

```bash
pnpm build
```

This writes the static site to `out/`. `pnpm start` builds and then serves `out/` locally.
