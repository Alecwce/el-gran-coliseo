---
name: Gladiator Digitalis
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#ccffb4'
  on-secondary: '#0b3900'
  secondary-container: '#4af403'
  on-secondary-container: '#1b6a00'
  tertiary: '#bfcdff'
  on-tertiary: '#002b75'
  tertiary-container: '#96b1ff'
  on-tertiary-container: '#003ea1'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#7bff51'
  secondary-fixed-dim: '#44e400'
  on-secondary-fixed: '#042100'
  on-secondary-fixed-variant: '#135200'
  tertiary-fixed: '#dae1ff'
  tertiary-fixed-dim: '#b3c5ff'
  on-tertiary-fixed: '#001849'
  on-tertiary-fixed-variant: '#003fa4'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 8px
  container-margin: 24px
  gutter: 16px
  section-gap: 64px
---

## Brand & Style

This design system blends the epic, historical grandeur of the Roman Coliseum with the high-energy, neon-infused world of modern live streaming. It is designed to evoke feelings of authority, competition, and cinematic excitement. The aesthetic is **High-Contrast Bold** with a **Tactile** edge, utilizing metallic textures and deep shadows to create a sense of physical weight, while vibrant "Kick green" and "1xBet blue" maintain a digital-first, broadcast-ready energy.

The interface prioritizes dramatic presentation—large-scale typography, gold-framed containers, and high-fidelity textures—to make every tournament entry feel like an arena event. It targets a gaming audience that values both the prestige of professional esports and the raw energy of community streaming.

## Colors

The palette is anchored by a deep **#0A0A0A Black** to provide maximum contrast for metallic and neon elements. 

- **Metallic Gold (#D4AF37):** Used for borders, headlines, and accents to signify prestige, championship, and the classic "Coliseum" theme.
- **Kick Green (#53FC18):** Reserved exclusively for primary Call-to-Action (CTA) buttons and active "Live" indicators, ensuring they "pop" against the dark background.
- **1xBet Blue (#0066FF):** A secondary accent used for secondary information, specific brand partnerships, or interactive links to provide a cooler balance to the gold.
- **White (#FFFFFF):** Used strictly for high-legibility body text and data within tables.

## Typography

The typography strategy employs a "History meets Modernity" approach. 

**Newsreader** is utilized for headlines, bringing a classic, serif authority that echoes stone inscriptions and traditional sporting prestige. These should often be presented in uppercase with slight tracking (letter spacing) to enhance the "monumental" feel.

**Inter** serves as the functional workhorse. Its neutral, geometric profile ensures that complex data—like schedules, scores, and streaming stats—remain perfectly readable on all screen sizes, maintaining the "streaming vibe" of the brand profile.

## Layout & Spacing

The layout follows a **Fixed Grid** system for desktop to maintain the centered, theatrical focus of a "Coliseum." 

- Use a 12-column grid with a maximum container width of 1280px.
- **Symmetry** is key; main tournament brackets and headers should always be centered.
- **Bento-style** tiling is used for the schedule table, where each cell is a defined "stone block" separated by 1px gold borders.
- Vertical rhythm is generous (64px+) between sections to allow the metallic assets and background textures room to breathe.

## Elevation & Depth

This design system eschews modern soft shadows in favor of **Tonal Layers** and **Gold Outlines**.

- **Level 0:** The #0A0A0A background.
- **Level 1:** Containers use #191B1F (from the brand profile) with a 1px solid Gold (#D4AF37) border to create a "framed" effect.
- **Level 2:** Hover states on cards utilize a "Gold Glow"—a subtle outer shadow of #D4AF37 at 30% opacity to simulate light reflecting off metal.
- **Depth through Texture:** Use subtle parchment or stone textures (low opacity) behind main headers to reinforce the "Gladiator" theme.

## Shapes

The shape language is strictly **Sharp (0px)**. To reflect the "stone-cut" nature of the Coliseum and the aggressive nature of gaming competition, all buttons, cards, and table cells feature hard 90-degree angles. 

The only exception is the "EN VIVO" badge and the tournament logo, which may use circular or organic shapes to draw the eye as distinct focal points.

## Components

### Buttons
- **Primary:** Background #53FC18, text #0A0A0A, bold Inter font, sharp corners. High-impact for "JOIN" or "SUBSCRIBE."
- **Secondary:** Transparent background, 2px border #D4AF37, text #D4AF37. Used for navigation or "VIEW REPLAY."

### Team Card
- A vertical block with a 1px Gold border. Top section contains a logo placeholder (square), bottom section contains the team name in Inter Bold. On hover, the border thickness increases to 3px.

### "EN VIVO" Badge
- A compact rectangle with a #53FC18 background and black text. Includes a pulsing dot animation to signify a live stream.

### Schedule/Calendar Table
- A grid of square cells. Header cells use Gold text. Date cells use white text. Empty cells feature the "Benjaz" pattern (as seen in reference images) in dark grey to maintain visual density without clutter.

### Tournament Header
- A full-width component featuring the "El Gran Coliseo" logo centered. The background should utilize a subtle radial gradient from #191B1F to #0A0A0A to draw focus to the center. Use Newsreader for the "GRUPO A/B" sub-headlines.