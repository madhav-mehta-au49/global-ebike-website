# VoltRide E-Bikes

An electric bike showroom website for Bhavnagar and Talaja, built with Next.js 16, next-intl, Tailwind CSS 4 and Framer Motion. The visual theme is reused from the Global Solar 2.0 project — navy, gold and green, glass cards, sun/photon motion — with all content replaced for an e-bike showroom.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The default locale is Gujarati (`/gu`); English is available at `/en`.

## Build

```bash
npm run build
npm run start
```

## Where to Customize

- `src/lib/siteConfig.ts` — brand name, phone numbers, email, address, showroom hours, offers and finance constants.
- `src/content/prices.json` — e-bike models, specs, MRP, offer price and booking/payment terms.
- `src/content/content.json` — delivered bikes gallery, rider testimonials, award/showroom assets and component list.
- `src/content/faq.json` — English and Gujarati FAQs.
- `src/messages/en.json` and `src/messages/gu.json` — every UI string in both languages.
- `public/images/` — SVG artwork for the logo, hero, bike models, components, founders and showroom/award scenes. Replace these with real showroom photographs when available.
- `src/app/sitemap.ts` — public routes, including the two local showroom pages.

## Notes

- Phone numbers and email in `siteConfig.ts` are placeholders. Update them before going live.
- `next.config.ts` enables local SVG images for `next/image`.
- All images under `public/images` are custom SVGs, so no external image hosting is required.
