# Farmgate Café & Co. — Website Template

A production-ready website built with **Next.js 14 (App Router)**, **TypeScript**, and
**Tailwind CSS** for boutique cafés and restaurants. Built for Farmgate Café & Co.
(Clyde, VIC) and designed to be re-skinned for other café/restaurant clients in minutes.

---

## Tech Stack

- Next.js 14 App Router, Server Components + Server Actions
- TypeScript (strict mode)
- Tailwind CSS
- Lucide Icons
- Nodemailer (email architecture, provider-agnostic)

No Bootstrap, no jQuery, no Material UI, no unnecessary dependencies.

---

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in real values (see below)
npm run dev                  # http://localhost:3000
```

To build and run in production mode:

```bash
npm run build
npm start
```

To typecheck and lint:

```bash
npm run typecheck
npm run lint
```

> **Note on fonts:** this project loads Playfair Display and Inter via
> `next/font/google`, which fetches font files from Google at build time.
> A build environment needs outbound access to `fonts.googleapis.com` /
> `fonts.gstatic.com` for `npm run build` to succeed (this is standard for
> any Vercel/CI/local machine with normal internet access).

---

## Environment Variables

See `.env.example`. Required for full functionality:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used in metadata, sitemap, JSON-LD |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET` | Optional Cloudflare Turnstile bot protection on the contact form. The form works fine without these — a honeypot field is always active. |
| `GMAIL_USER` / `GMAIL_APP_PASSWORD` | Outbound email for contact-form confirmations. Without these, the app logs a warning and skips sending — it won't crash. Swap the transport in `lib/email.ts` for any SMTP provider (Resend, Postmark, SES). |
| `OWNER_NOTIFICATION_EMAIL` | Where new-enquiry notifications are sent |

---

## Project Structure

```
app/                  Routes (App Router) — one folder per page
  actions/             Server Actions (newsletter)
  contact/actions.ts   Contact form Server Action
  sitemap.ts           Dynamic sitemap.xml
  robots.ts            Dynamic robots.txt
components/
  layout/              Header, Footer
  home/                Home page sections
  menu/                Menu browsing + cards
  events/              Event cards
  cart/                Cart context, drawer, trigger button (mock ordering)
  contact/             Contact form
  ui/                  Reusable primitives (Button, Container, SectionHeading…)
  seo/                 JSON-LD renderer
lib/
  site-config.ts        ⭐ SINGLE SOURCE OF TRUTH — see below
  schema.ts             Schema.org JSON-LD builders
  email.ts               Nodemailer-ready email sending
  validation.ts          Server-side form validation
  utils.ts                Formatting + misc helpers
types/                  Shared TypeScript types
```

---

## Re-skinning This Template for a New Client

Everything reads from **`lib/site-config.ts`**. To launch this template for a new
café or restaurant, you only need to change:

1. **`lib/site-config.ts`** — business name, contact details, address, opening hours,
   social links, menu items, events, testimonials, SEO copy, brand colours.
2. **`tailwind.config.ts`** — swap the `linen` / `espresso` / `strawberry` / `matcha`
   hex values for the new brand palette (keep the same token *names* so components
   don't need to change).
3. **Fonts** in `app/layout.tsx` — swap `Playfair_Display` / `Inter` for the new
   client's typefaces from `next/font/google`.
4. **Images** — replace the Unsplash placeholder URLs in `site-config.ts` and
   component files with the client's real photography, and add a real
   `/public/og-cover.jpg`, `/public/favicon.ico`, `/public/apple-touch-icon.png`.
5. **`.env.local`** — new site URL, new email credentials.

No page or component code needs to change for a standard re-skin — that's the point.

---

## SEO

- Metadata API on every route (titles, descriptions, canonical URLs, Open Graph, Twitter Cards)
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`
- JSON-LD structured data: `LocalBusiness` (site-wide), `BreadcrumbList`, `Menu`,
  and `Event` (per event) — see `lib/schema.ts`
- Semantic HTML and a logical heading hierarchy throughout

## Security

`next.config.js` sets production headers on every response: CSP, `X-Frame-Options`,
`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and HSTS.
The contact form has server-side validation, a honeypot field, and optional
Cloudflare Turnstile verification.

## Accessibility

WCAG AA target: visible focus states everywhere, labelled form fields, ARIA where
needed (dialog roles on the cart drawer, live regions on dynamic content), a
"Skip to main content" link, and `prefers-reduced-motion` support.

## Ordering (Mock)

The cart (`components/cart/`) is a fully working add/remove/quantity/checkout flow
with an order summary — but it does **not** process payment. Checkout displays a
"Square integration ready" confirmation. Wire up a real Square (or Stripe) checkout
in `components/cart/CartDrawer.tsx` when ready to go live.

---

## Deployment

This template deploys cleanly to Vercel, Netlify, or any Node 18+ host that
supports Next.js Server Actions. Set the environment variables above in your
hosting provider's dashboard before going live.
