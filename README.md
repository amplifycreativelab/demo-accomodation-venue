# Lumina Stay - Boutique Accommodation Demo

A "Quiet Luxury" boutique accommodation website demo built with Astro 5.x and Tailwind CSS v4.
Designed to showcase a high-end, conversion-focused layout for a fictional property in Perth, Western Australia.

## Features

- **Modern Tech Stack**: Astro 5 (Static + Server Islands potential), Tailwind CSS v4 (Vite plugin).
- **Design System**: Custom "Quiet Luxury" theme with muted earth tones, serif typography (Playfair Display), and generous whitespace.
- **Components**:
  - `GlassHeader`: Sticky header with backdrop blur.
  - `RoomCard`: Elegant room previews.
  - `FeatureList`: Flexible amenity grids.
  - `EnquiryForm`: Contact form with validation styling.
- **SEO & Performance**:
  - Configured for GitHub Pages deployment (`/lumina-stay/` base).
  - Pre-configured meta tags, OpenGraph, and JSON-LD Schema (LodgingBusiness).
  - Fast static rendering.

## Project Structure

```
src/
├── components/   # Reusable UI components (Header, Footer, Cards)
├── layouts/      # BaseLayout (<html>, <head>, global styles)
├── pages/        # File-based routing (Home, Rooms, Amenities, etc.)
├── data/         # JSON data for Rooms, Amenities, Testimonials
├── styles/       # Global CSS & Tailwind Theme
└── assets/       # Static assets
```

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Build**:
   ```bash
   npm run preview
   ```

## Design Decisions

- **Color Palette**: Alabaster background (`#F9F7F2`) reduces eye strain compared to pure white, creating a warmer, more inviting feel.
- **Typography**: `Playfair Display` for headings evokes elegance; `Inter` for body text ensures readability.
- **Navigation**: Persistent CTA ("Check Availability") improves conversion.

## License

This project is a demo created by Amplify Creative Lab.
