# Velora Bay Resort & Spa

A world-class luxury beach resort website built with Next.js 15, TypeScript,
Tailwind CSS, Framer Motion, and GSAP.

## Getting Started

Requires Node.js 18.18+ (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build for production

```bash
npm run build
npm run start
```

> Note: `next/font/google` fetches Fraunces and Inter from Google Fonts at
> build time, so an internet connection is required during `npm run build`.

## Project structure

```
app/                Next.js App Router pages, layout, SEO routes (robots, sitemap)
components/         All homepage sections (Hero, Accommodations, Gallery, Booking, etc.)
lib/data.ts         Content: rooms, amenities, gallery images, experiences, testimonials, map zones
public/images/      Resort photography used throughout the site
public/manifest.json, sw.js, icons/   PWA assets
```

## What's included

- Cinematic parallax hero (GSAP) with animated headline (Framer Motion)
- Resort overview with animated stat counters
- Room cards for all 5 accommodation types with pricing and amenities
- Interactive amenity grid with hover reveals
- Filterable masonry gallery with a fullscreen lightbox
- Experience cards (sunset cruise, diving, weddings, corporate retreats, etc.)
- AI concierge section with a scripted sample conversation
- Testimonial carousel with ratings and video-testimonial callouts
- Interactive resort map with clickable zone markers
- Booking form with live estimated-cost calculation
- Contact section with a map embed, contact form, and call/message/social links
- SEO metadata, `robots.ts`, `sitemap.ts`, and a PWA manifest + service worker

## Notes on production readiness

- **Video hero**: the brief asked for cinematic beach video; no video asset was
  provided, so the hero uses a high-resolution aerial photo with a GSAP parallax/zoom
  effect instead. Swap in a `<video>` element in `components/Hero.tsx` if you have footage.
- **AI concierge**: the concierge panel plays a scripted example conversation to
  demonstrate the UX. Wire the input form in `components/Concierge.tsx` to your LLM
  API of choice to make it live.
- **Booking & contact forms**: both are fully functional on the front end (validation,
  live pricing) but submit locally (no backend). Connect them to your reservations
  system or an API route under `app/api/`.
- **Map**: `components/Contact.tsx` uses a generic Google Maps embed (no API key
  required). Replace the query in the iframe `src` with your resort's real address.
