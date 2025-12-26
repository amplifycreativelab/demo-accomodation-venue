Here is the fully enhanced, professionally structured design prompt. You can use this as a master brief for a developer, an AI coding assistant, or as the foundational documentation for your project.

🏨 Project Brief: "Lumina Stay" Boutique Demo
Framework: Astro 5.x (Static-First)

Concept: "Quiet Luxury" — A high-conversion, editorial-style accommodation demo focusing on bespoke enquiries over automated booking engines.

1. Brand Identity & Visual Language
The goal is to move away from "SaaS-style" layouts and toward a Digital Concierge experience.

Design Vibe: Calm, airy, aspirational, and "Slow Travel."

Color Palette:

Foundation: #F9F7F2 (Alabaster/Warm Off-White) – Primary Background.

Typography: #2C2E30 (Graphite) – For high readability without the harshness of black.

Accents: #7D8471 (Muted Sage) & #B8926A (Soft Bronze) – Used for icons, dividers, and secondary buttons.

CTA: #1B3022 (Deep Forest Green) – Trustworthy and confident.

Typography Hierarchy:

Headings: Playfair Display (Serif) – Elegant, editorial, hospitality-focused.

Body: Inter or Montserrat (Sans-Serif) – Clean, modern, light weights.

UI Labels: Small-caps with 2px letter-spacing for a "hotel stationery" feel.

2. Site Architecture & Page Flow
A. Home (The "Lobby")
Hero Section: Full-screen landscape imagery. Text is minimal: Property Name + 1-sentence value proposition.

Primary CTA: "Check Availability" (Anchors to Enquiry Form).

Secondary CTA: "Discover the Suites" (Link to /rooms).

The Narrative: A centered, narrow-column text block. Focus on the feeling of the stay (e.g., "Where the Swan River meets refined stillness").

Curated Room Preview: Three asymmetrical cards. Each features a high-quality image, room name, and "From $[Price]" starting rate.

Amenities Snapshot: A 2x2 or 3x2 grid using fine-line icons. No borders—just plenty of whitespace.

Testimonials: "Guest Notes" – Short, italicized quotes that feel like entries from a physical guestbook.

B. The Suites (/rooms)
Layout: A Z-pattern layout (Image Left / Text Right, then swap).

Data Points per Room: * Occupancy (e.g., "Suited for 2")

Bed Configuration (e.g., "California King")

Unique Feature (e.g., "Private Terrace")

Conversion: Every room has a direct "Inquire about this Suite" button.

C. The Experience (/amenities & /location)
Amenities: Grouped by In-Room (Linens, Coffee, Tech) and Property (Pool, Concierge).

Location: An editorial "Guide to Perth." Instead of a generic list, provide a "Perfect 24 Hours" itinerary featuring Kings Park and Elizabeth Quay.

D. The Enquiry Flow (/contact)
Form Philosophy: High-touch, not high-tech.

Fields: Name, Email, Dates (Check-in/out), Guest Count, Room Selection (Dropdown), and "Special Requests."

UX Note: A "Thank You" message that reinforces the premium service: "Our concierge will review your dates and contact you within 4 hours."

3. Technical Implementation (Astro 5.x)
Component Strategy
RoomCard.astro: Reusable card with hover-scale effects on images.

GlassHeader.astro: A sticky navigation bar that blurs the background as the user scrolls.

FeatureList.astro: A flexible grid for amenities and local highlights.

BookingForm.vue/React/Svelte: (Optional) For a smooth, reactive form experience within the static page.

Data Schema (/src/data/rooms.json)
JSON

[
  {
    "id": "garden-suite",
    "name": "The Garden Suite",
    "slug": "garden-suite",
    "priceRange": "$280 - $350",
    "sleeps": 2,
    "features": ["Rain Shower", "Private Garden", "King Bed"],
    "image": "/images/garden-suite.webp"
  }
]
4. SEO & Performance Targets
Local SEO: Target keywords like "Boutique Stay Perth," "Luxury Short-term Rental WA," and "Luxury Accommodation near Kings Park."

Technical SEO: Valid LodgingBusiness Schema Markup (JSON-LD) including price ranges and geo-coordinates.

Performance: * Images served in WebP/AVIF via Astro's <Image /> component.

Lighthouse score > 95 for Performance, Accessibility, and Best Practices.

Responsive-first: Mobile booking flow must be seamless.

5. Success Criteria
The demo is successful if a user feels they are interacting with a premium service rather than a booking database. The design must feel "quiet," expensive, and easy to navigate.