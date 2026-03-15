# SENATE — Brand Guidelines
*Last updated: 2026-03-15*

---

## 1. Brand Identity

**The Senate** is the personal brand of Grant Hansen — Solution Architect, drummer, collector, Detroit. It is not a single-discipline portfolio. It is the conglomerate: every interest, discipline, and obsession that occupies a seat in the chamber.

The brand operates across two registers simultaneously:

- **Personal** — raw, dark, rooted in metal and industrial aesthetics. The logo, the visual weight, the darkness.
- **Professional** — precise, architectural, systems-minded. Clear hierarchy, earned credibility, no noise.

These are not in conflict. The tension between them *is* the brand.

**Core tagline:** *Everything. At full volume.*

**Identity fragments** (supporting tagline — all four must appear together):
> Architect · Drummer · Collector · Detroit

---

## 2. Logo

The SENATE wordmark is a custom death metal illustration by **SlayThyName**. It features organic dripping letterforms, downward-arching baseline, blade-like spikes, and large curved horns extending from each side. It is an illustration — it cannot be recreated in any font.

### Logo Files

| File | Use Case |
|---|---|
| `senate-logo-white.png` | Dark backgrounds — **primary use across the entire site** |
| `2647_-_SENATE_revision_(n)_black.png` | Light/print contexts only |
| `2647_-_SENATE_revision_(n)_red.png` | Accent/limited edition placements |
| `03_2647-Gradient-Logo.jpg` | Editorial/textured contexts |

### Usage Rules

**Do:**
- Use `senate-logo-white.png` on all dark page backgrounds
- Apply `mix-blend-mode: screen` when placed over photographic backgrounds
- Apply a subtle drop-shadow glow: `drop-shadow(0 0 80px rgba(200,232,250,0.30))`
- Maintain clear space equal to the height of one horn on all sides
- Allow the logo to breathe — it is the primary focal element on the landing page

**Don't:**
- Stretch, skew, rotate, or recolour the logo
- Apply heavy effects beyond the glow treatment above
- Place on busy photographic backgrounds without a dark overlay
- Attempt to approximate the lettering in any font

---

## 3. Color System

The site uses a layered dark-mode palette built on near-black deep navy, not pure black. Each page section has its own accent but shares the same base.

### Global Base

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#060810` | Page background |
| `--surface` | `#090D18` | Cards, elevated panels |
| `--surface-2` | `#0C1220` | Nested surfaces |
| `--surface-3` | `#101929` | Highest elevation |
| `--border` | `rgba(120,175,210,0.10)` | Subtle dividers |
| `--border-hi` | `rgba(120,175,210,0.24)` | Active/hover borders |
| `--text-1` | `#D8EDF5` | Primary text |
| `--text-2` | `#4A6878` | Secondary/muted text |
| `--text-3` | `#243545` | Disabled/ghost text |

### Page Accent Colors

Each sub-page has a distinct accent (`--blue`) that represents its character:

| Page | Accent | Hex | Character |
|---|---|---|---|
| Landing | Steel Blue | `#7AAEC8` | Neutral anchor, ties all pages together |
| Creative | Cold Steel | `#6FB5CC` | Icy, industrial, the music |
| Professional | Amber Copper | `#C4824A` | Warmth of craft, technical precision |
| Contact | Slate | `#8AAEBB` | Open, receptive, calm |

**Rules:**
- Never substitute default Tailwind palette colors (indigo-500, blue-600, etc.)
- Red (`#CC0000–#FF0000`) is reserved for the band logo accent variant only — it does not appear in web UI
- All gradients move within the cool/dark range unless using the Professional amber accent
- Never use white or light backgrounds in any context

### Glow & Atmospheric Treatment

- Accent glow: `rgba(100,160,200,0.14)` — used for card hover states and ambient orbs
- Orbs: large blurred radial gradients at very low opacity (4–8%) positioned at hero corners
- Grain overlay: fixed SVG fractalNoise at `opacity: 0.11` on `body::after` — present on all pages

---

## 4. Typography

Three typefaces. Each has a fixed role. Do not substitute.

| Role | Family | Source |
|---|---|---|
| **Display / Headings** | Barlow Condensed | Google Fonts |
| **Body / UI** | Chakra Petch | Google Fonts |
| **Labels / Mono / Nav** | Space Mono | Google Fonts |

### Barlow Condensed — Display
- Used for: hero taglines, section titles, large callouts
- Style: italic, weight 500–700, all-caps
- Tracking: `0.04–0.08em`
- Size: `clamp(18px, 2vw, 26px)` for taglines; scale up for editorial headers

### Chakra Petch — Body
- Used for: body copy, card text, button labels, general UI
- Style: regular 400–600, mixed case for body; all-caps for labels
- Tracking: `0.14–0.18em` on labels; normal on body
- Line height: `1.6–1.75` on paragraph text

### Space Mono — Labels / Nav
- Used for: navigation, eyebrow labels, identity fragments, stat numbers, technical data
- Style: regular 400 or bold 700, always all-caps
- Tracking: `0.18–0.30em`
- Size: `9–11px` for UI labels; larger only for hero-scale data

### Hierarchy Rules
- All headings: all-caps, tight tracking
- Never use the same font at the same weight/size for two adjacent elements
- Pair Barlow Condensed italic with Space Mono regular for editorial contrast
- Never use system fonts, Inter, Roboto, or Arial anywhere in the UI

---

## 5. Spacing & Layout

The site uses intentional spacing tokens, not arbitrary Tailwind steps.

| Context | Value |
|---|---|
| Section padding (desktop) | `80–120px` vertical |
| Section padding (mobile) | `48–64px` vertical |
| Nav padding | `24px` sides (desktop), collapses on scroll |
| Card internal padding | `24–32px` |
| Button padding | `14px` vertical, `30px` horizontal |
| Gap between nav links | `32px` |

**Layout principles:**
- Full-width hero sections, centered content
- Cards and grids break to single column at `960px`
- Nav collapses (hide links, show hamburger) at `600px`
- Content max-width: `1200px` centered

---

## 6. Motion & Animation

- **Entry animations:** `fadeUp` (translateY 30px → 0, opacity 0 → 1) with spring easing `cubic-bezier(0.16,1,0.3,1)`
- **Stagger delays:** `.a1` through `.a6` at `0.1s` increments for hero elements
- **Hover transitions:** `0.2–0.25s ease` on color/opacity; `0.25s cubic-bezier(0.16,1,0.3,1)` on transforms
- **Float animation:** logo uses `floatY` — 8px vertical drift over 7s, `ease-in-out infinite`
- **Scroll reveal:** `IntersectionObserver` adds `.vis` class; elements animate in when entering viewport

**Rules:**
- Only animate `transform` and `opacity` — never `transition-all`
- Every interactive element must have hover, focus-visible, and active states
- Active state: `translateY(1px)` on buttons
- Canvas effects (data stream, wind, constellations) are ambient only — never obstruct content

---

## 7. Page-Level Hero Effects

Each page has a distinct ambient canvas effect that reflects its character:

| Page | Effect | Character |
|---|---|---|
| Landing | Snow particles (subtle) | Cold, atmospheric, breathing |
| Creative | Displacement warp + rain streaks | Industrial, distorted, rain through a fence |
| Professional | Falling hex data stream | Technical, systematic, infrastructure |
| Contact | Constellation drift | Network, connection, signals forming |

Effects are always `z-index: 0`, `pointer-events: none`, subtle enough to feel atmospheric rather than decorative.

---

## 8. Voice & Tone

- **Terse.** Short sentences. No fluff.
- **Earned.** Language feels like it came from somewhere real.
- **Direct.** Declarations and commands, not invitations.
- **Multi-faceted.** The professional and the creative voice coexist — neither apologises for the other.

**Examples of correct voice:**
> *Solution Architect. Translating what a business needs into systems that work.*
> *Everything. At full volume.*
> *The inbox is open. Use it with intention.*

**Avoid:**
- Buzzword-driven copy ("passionate about", "leveraging synergies")
- Humble-brag framing
- Exclamation marks
- Overly casual or overly corporate tone — aim for the space between

---

## 9. Sub-Page Identity

Each sub-page under The Senate is a distinct chamber with its own accent colour and hero treatment, but they all share the same base typography, spacing, grain overlay, and dark background.

| Page | URL | Accent | Hero Treatment |
|---|---|---|---|
| Landing | `/` | Steel Blue | Full-bleed forest photo, floating logo |
| Creative | `/creative/` | Cold Steel | Chain-link fence at night (Unsplash) |
| Professional | `/professional/` | Amber Copper | Blueprint grid overlay |
| Contact | `/contact/` | Slate | Dark ambient, wind streaks |
| Projects | `/projects/` | Steel Blue | Cards grid |

---

## 10. What This Brand Is Not

- Not a standard developer portfolio (no light mode, no clean white cards)
- Not gothic-romantic (no ornate flourishes, candles, Victorian details)
- Not cyberpunk (no neon, no circuit-board motifs as decoration)
- Not corporate dark mode (no smooth rounded cards as the primary design language)
- Not a simple band website — the music is one seat in the chamber, not the whole room
- Not performative — the darkness is not aesthetic posturing, it is the natural environment
