# Development Tasks - Demo (Boutique Accommodation)

Source docs:

- `docs/global prompt.md`
- `boutique-accomodation/boutique-accomodation.md`

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; sections later in the file may depend on earlier setup tasks.

## Phase 0 - Project Decisions

- [x] Confirm demo name + positioning (e.g., "Lumina Stay" / "Quiet Luxury").
- [x] Confirm primary conversion goal: high-touch enquiries (not an automated booking engine).
- [x] Confirm pages to build:
  - [x] Home (`/`)
  - [x] Rooms (`/rooms/`)
  - [x] Amenities (`/amenities/`)
  - [x] Location (`/location/`)
  - [x] Contact (`/contact/`) (core conversion page)
- [x] Confirm required pages from base prompt:
  - [x] About (`/about/`)
  - [x] Services (e.g., `/services/` as "Concierge & Experiences")
  - [x] Privacy (`/privacy/`)
- [x] Confirm CTA labels used site-wide:
  - [x] "Check Availability" (anchors to enquiry form)
  - [x] "Discover the Suites" (to `/rooms/`)
  - [x] "Inquire about this Suite" (per-room CTA)
- [x] Choose styling approach: Tailwind OR CSS modules + tokens (pick one and stick to it).
- [x] Choose fonts (max 2): Playfair Display (or similar serif) + Inter/Montserrat (or similar sans).
- [x] Confirm brand colors:
  - [x] Background `#F9F7F2`
  - [x] Text `#2C2E30`
  - [x] Accents `#7D8471` (sage) + `#B8926A` (bronze)
  - [x] CTA `#1B3022` (deep forest green)
- [x] Confirm room inventory for the demo (3 minimum), price ranges, and key features per room.
- [x] Decide whether the enquiry form is Astro-only OR uses a small island (React/Svelte/Vue) for a smoother UX.

## Phase 1 - Astro Setup (Static + GitHub Pages)

- [x] Create a new Astro project (static output).
- [x] Configure `astro.config.mjs` with `site: "https://github.com/amplifycreativelab"` and `base: "/<repo>/"`.
- [x] Ensure all internal links and asset URLs work under the base path (no hard-coded absolute `/` paths).
- [x] Add/verify npm scripts: `dev`, `build`, `preview`.
- [x] Add `src/assets/images/` placeholder images (home hero, room images, amenities, location, OG image).

## Phase 2 - Design System ("Quiet Luxury")

- [ ] Define spacing scale (4/8/12/16/24/32/48/64).
- [ ] Define typography scale:
  - [ ] Editorial serif headings
  - [ ] Light/clean sans body text
  - [ ] UI labels small-caps with ~2px letter spacing
- [ ] Define layout rules: max width 1200-1280px; generous vertical spacing; subtle radii (6-12px); no visible heavy shadows.
- [ ] Define icon style: fine-line icons, minimal dividers, whitespace-first layouts.
- [ ] Implement focus-visible styles for links/buttons/inputs.
- [ ] Implement reduced motion support (`prefers-reduced-motion`).

If using Tailwind:

- [x] Install/configure Tailwind for Astro.
- [x] Add Tailwind theme tokens (colors, font families, spacing, radii, shadows).

If using CSS modules + tokens:

- [ ] Create `src/styles/tokens.css` (colors, font families, spacing, radii, shadows).
- [ ] Create base/global styles (typography defaults, container widths, utilities).

## Phase 3 - Core Layout & Shared Components

- [ ] Create `src/layouts/BaseLayout.astro` with:
  - [ ] Skip link
  - [ ] Header/nav
  - [ ] Footer with NAP + hours + service area mentions
  - [ ] Title/meta slots
  - [ ] OG/Twitter meta placeholders
- [x] Create `GlassHeader.astro`:
  - [x] Sticky header with background blur (`backdrop-filter`) and graceful fallback
  - [x] Persistent "Check Availability" CTA
- [x] Build demo components:
  - [x] `RoomCard.astro` (image + name + price range; subtle hover scale on image)
  - [x] `FeatureList.astro` (flexible grid for amenities + local highlights)
  - [x] `TestimonialCard.astro` ("Guest Notes" styling; short italic quote)
  - [x] `AvailabilityCTA.astro` (anchor link to enquiry section)
  - [x] `EnquiryForm.astro` (or `BookingForm.*` island if chosen)

## Phase 4 - Content & Data Layer

- [x] Create `src/data/rooms.json`:
  - [x] Fields: `id`, `name`, `slug`, `priceRange`, `sleeps`, `features`, `image`
  - [x] Include: bed configuration + unique feature (either fields or within `features`)
- [x] Add amenities content grouped into:
  - [x] In-room (linens, coffee, tech)
  - [x] Property (pool, concierge, accessibility, parking)
- [x] Add testimonial content (3-5 quotes) with name + stay type.
- [x] Add location editorial copy:
  - [x] "Perfect 24 Hours" itinerary including Kings Park + Elizabeth Quay
- [x] Add business placeholders (NAP, hours, response-time promise for enquiries).

## Phase 5 - Pages (IA + Required Pages)

### Home (`src/pages/index.astro`)

- [x] Full-screen hero imagery (minimal text: property name + 1-sentence value prop).
- [x] Primary CTA: "Check Availability" (anchors to enquiry form section).
- [x] Secondary CTA: "Discover the Suites" (to `/rooms/`).
- [x] "The Narrative" narrow-column editorial text block (quiet luxury / slow travel tone).
- [x] Curated room preview: 3 asymmetrical room cards pulled from `rooms.json`.
- [x] Amenities snapshot: 2x2 or 3x2 icon grid with whitespace (no heavy borders).
- [x] Testimonials: "Guest Notes" section with italicized quotes.

### Rooms (`src/pages/rooms/index.astro`)

- [x] Z-pattern room sections (image left/text right, then swap).
- [x] Per-room data points displayed:
  - [x] Sleeps/occupancy
  - [x] Bed configuration
  - [x] Unique feature
- [x] Per-room CTA: "Inquire about this Suite" (links to contact with room preselected if possible).

### Amenities (`src/pages/amenities/index.astro`)

- [x] Render grouped amenities (In-room vs Property) using `FeatureList.astro`.

### Location (`src/pages/location/index.astro`)

- [x] Editorial "Guide to Perth" layout (not a generic list).
- [x] "Perfect 24 Hours" itinerary section (Kings Park, Elizabeth Quay).
- [x] Map placeholder section (no embed required).

### Contact (`src/pages/contact/index.astro`) (CORE)

- [x] Enquiry form fields:
  - [x] Name
  - [x] Email
  - [x] Dates (check-in/out)
  - [x] Guest count
  - [x] Room selection (dropdown)
  - [x] Special requests
- [x] Form UX rules:
  - [x] Clear labels (no placeholders-only)
  - [x] Required fields marked
  - [x] Success state message (e.g., "Our concierge will contact you within 4 hours.")
  - [x] Spam-safe honeypot/hidden field
- [x] Supporting content: address area, contact details, operating hours.

### Required pages from base prompt

- [x] About (`src/pages/about.astro`) - brand story + quiet luxury positioning.
- [x] Services (`src/pages/services.astro` or equivalent) - concierge, experiences, special requests.
- [x] Privacy (`src/pages/privacy.astro`) - simple legal page.

## Phase 6 - SEO & GEO (Perth)

- [x] Page titles follow a consistent template (per-page + brand).
- [x] Meta description per page (unique, enquiry-focused).
- [x] Canonical URLs set correctly (respecting `site` + `base`).
- [x] OpenGraph: title/description + placeholder OG image.
- [x] Twitter card meta.
- [x] Add JSON-LD schema (LodgingBusiness) including:
  - [x] Address in Perth, WA + geo-coordinates
  - [x] Price ranges where appropriate
  - [x] `sameAs` placeholders
- [x] Add local SEO copy naturally:
  - [x] "Boutique Stay Perth"
  - [x] "Luxury Short-term Rental WA"
  - [x] "Luxury Accommodation near Kings Park"
- [x] Add `robots.txt`.
- [x] Add sitemap (if straightforward) and verify it works with the configured `site`.
- [x] Internal linking: Home -> Rooms -> Contact (and back) with clear CTAs.

## Phase 7 - Accessibility & UX Checks

- [x] Accessibility audit:
  - [x] Contrast ratios (text vs background).
  - [x] Focus states for keyboard navigation.
  - [x] Screen reader labels (`aria-label`) on icon buttons.
- [x] Mobile responsiveness:
  - [x] Hamburger menu functions correctly.
  - [x] No horizontal overflow.
  - [x] Touch targets are adequate (44px+).
- [x] One H1 per page; heading order is logical.
- [x] Skip link works and is visible on focus.
- [x] Keyboard navigation works across header, CTAs, and form controls.
- [x] Implement reduced motion support (`prefers-reduced-motion`).

## Phase 8 - Performance

- [x] Image optimization (use Astro `<Image />` or optimized WebP assets).
- [x] Minimal client-side JS (ensure hydration only happens where needed).
- [x] Lighthouse check (aim for 95+ in Performance, Accessibility, SEO).
- [ ] Use `astro:assets` for images where possible (WebP/AVIF, responsive sizes, lazy loading below the fold).
- [ ] Avoid layout shift (set image dimensions / aspect ratios).
- [ ] Keep JS minimal (only for the form if needed).

## Phase 9 - Deployment & Handoff

- [x] Add build/run instructions (README or `/docs/`):
  - [x] `npm install`
  - [x] Build command verification (`npm run build`).
- [x] Check `dist/` folder outputs.
- [x] Create `README.md` with demo instructions.
- [x] Commit and push to repository.
- [x] Verify the built site works under the GitHub Pages base path (no broken links/assets).
- [x] Quick QA pass:
  - [x] Header blur/fallback works and remains readable
  - [x] All CTAs route correctly (availability anchor + rooms + contact)
  - [x] Room CTA preselect (if implemented) works
  - [x] Form labels + required markers + success state
  - [x] Basic SEO meta presence (view-source)

## Optional / Bonus

- [ ] Add a dedicated room detail route (`/rooms/<slug>/`) if desired (data-driven).
- [ ] Prefill contact form via query params (e.g., `?room=garden-suite`).
- [ ] Add a small image gallery section (editorial grid; no lightbox required).

