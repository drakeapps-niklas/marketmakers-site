# Market Makers – Site

A simple one-page marketing website for Market Makers, one of Sweden's largest finance podcasts. No build tools, no frameworks – plain HTML, CSS, and JavaScript.

## Stack

- `index.html` – single page, all sections in one file
- `style.css` – all styles, with CSS custom properties and responsive breakpoints
- `script.js` – scroll reveal (IntersectionObserver), stat counter animation, nav scroll effect
- `images/` – static assets (logo, team photos, sponsor logos, podcast cover)

## Language

Content is in **Swedish**.

## Design

- Dark background (`#08080c`)
- Accent: orange-to-red gradient (`#ff7a2f` → `#e8443a`), used via `--gradient` and `--accent`
- Fonts: **Space Grotesk** (headings, UI) and **Inter** (body) via Google Fonts
- Grain overlay via CSS `body::after`
- Responsive: breakpoints at 900px and 600px

## Sections (in order)

1. **Nav** – fixed, becomes opaque on scroll
2. **Hero** – headline, podcast cover image, scroll hint
3. **Stats** – animated counters (4M lyssningar, 15K lyssnare/avsnitt, 15K+ följare på X)
4. **Om** – about the podcast
5. **Team** – Fabian Franzén, Magnus Skoog, Niklas Aldén
6. **Lyssnarprofil** – audience demographics
7. **Sponsorformat** – three sponsorship tiers (Huvudsponsor, Mid-roll, Intervju)
8. **Sponsorer** – previous sponsors logo image
9. **Kontakt** – email CTA (kontakt@marketmakers.se)
10. **Footer**

## Conventions

- CSS variables are defined in `:root` in `style.css` – always use them, don't hardcode colors
- Scroll-reveal uses `.reveal` class + `.visible` toggled by JS; add `.reveal` to new animated elements
- Keep everything in the existing three files – no new files unless truly necessary
