# SENATE — Brand Guidelines
*Last updated: 2026-05-20*

---

## 1. Brand Identity

**The Senate** is the personal brand of Grant Hansen — Solution Architect, drummer, father, Detroit obsessive. It is not a single-discipline portfolio. It is the conglomerate: every interest, discipline, and obsession, all at full volume.

The brand operates across two registers simultaneously:

- **Personal** — raw, dark, rooted in metal and industrial aesthetics. The logo, the visual weight, the darkness.
- **Professional** — precise, architectural, systems-minded. Clear hierarchy, earned credibility, no noise.

These are not in conflict. The tension between them *is* the brand.

**Core tagline:** *Everything. At full volume.*

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
| `--text-3` | `#3D5A70` | Disabled/ghost text |

### Page Accent Colors

Each page has a distinct accent held in the `--blue` token (named for its default; value varies per page). Derived tokens `--blue-dim` (rgba at 0.07) and `--blue-glow` (rgba at 0.14) are used for glow effects and tag backgrounds — always use these tokens, never hardcode rgba values.

| Page | Accent Name | Hex | Character |
|---|---|---|---|
| Landing | Steel Blue | `#7AAEC8` | Neutral anchor, ties all pages together |
| Creative | Cold Steel | `#6FB5CC` | Icy, industrial, the music |
| Professional | Cold Steel | `#6FB5CC` | Matches Creative — both personal and professional share the same teal |
| Contact | Slate | `#8AAEBB` | Open, receptive, calm |
| Blog | Slate Blue | `#7090A8` | Considered, measured, editorial |
| Projects | Burnt Orange | `#C86A28` | Drive, construction, output |

**Rules:**
- Never substitute default Tailwind palette colors (indigo-500, blue-600, etc.)
- Red (`#CC0000–#FF0000`) is reserved for the band logo accent variant only — it does not appear in web UI
- All gradients move within the cool/dark range
- Never use white or light backgrounds in any context

### Glow & Atmospheric Treatment

- Accent glow: `var(--blue-glow)` (rgba at 0.14 of page accent) — used for card hover states and ambient orbs
- Accent dim: `var(--blue-dim)` (rgba at 0.07 of page accent) — used for tag backgrounds, subtle fills
- Orbs: large blurred radial gradients at very low opacity (4–8%) positioned at hero corners; tint must match page accent, not be purple/green/red
- Grain overlay: fixed SVG fractalNoise at `opacity: 0.11` on `body::after` — present on **all** pages — do not deviate
- Hero radial tint: matches the page accent color at ≤0.05 opacity — never use purple, green, or red tints

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
- Line height: `1.8` on paragraph text
- Base size: `15px`

### Space Mono — Labels / Nav
- Used for: navigation, eyebrow labels, stat numbers, technical data
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

### Nav Link Pattern

All nav links use the opacity-transition approach (not color-transition):

```css
.nav-link {
  color: var(--text-1);
  opacity: 0.75;
  transition: opacity 0.2s ease;
  font-weight: 700;
}
.nav-link:hover { opacity: 1; }
.nav-link.active { opacity: 1; color: var(--blue); }
.nav-link:focus-visible { opacity: 1; outline: 2px solid var(--blue); outline-offset: 4px; }
.nav-logo:focus-visible { outline: 2px solid var(--blue); outline-offset: 4px; }
```

### Nav Order

Site-wide nav links appear in this order: **Professional → Projects → Everything → Contact Me**

**Layout principles:**
- Full-width hero sections, content at bottom-left of hero
- Hero: `height: 100vh/100dvh`, `justify-content: flex-end`, `padding: 0 52px 72px`
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
- All canvas rAF loops must pause on `visibilitychange` (document.hidden) and resume on reveal

---

## 7. Page-Level Hero Effects

Each page has a distinct ambient canvas effect that reflects its character:

| Page | Effect | Character |
|---|---|---|
| Landing | Snow particles (subtle) | Cold, atmospheric, breathing |
| Creative | Displacement warp + rain streaks | Industrial, distorted, rain through a fence |
| Professional | Falling hex data stream | Technical, systematic, infrastructure |
| Contact | Constellation drift | Network, connection, signals forming |
| Blog | Storm rain + lightning | Writing under pressure, thought in motion |
| Projects | Crane warning lights + rain | Construction site, work in progress |

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

Each sub-page under The Senate has its own accent colour and hero treatment, but they all share the same base typography, spacing, grain overlay, and dark background.

| Page | URL | Accent | Hero Treatment |
|---|---|---|---|
| Landing | `/` | Steel Blue `#7AAEC8` | Full-bleed forest photo, floating logo |
| Creative (Everything) | `/creative/` | Cold Steel `#6FB5CC` | Chain-link fence at night; password-gated |
| Professional | `/professional/` | Cold Steel `#6FB5CC` | Hex data stream canvas overlay |
| Contact | `/contact/` | Slate `#8AAEBB` | Dark ambient, constellation drift |
| Blog | `/blog/` | Slate Blue `#7090A8` | Storm rain with lightning |
| Projects | `/projects/` | Burnt Orange `#C86A28` | Crane warning lights + rain |

### Creative (Everything) Page Structure

Password-gated (`senate`). Once unlocked, four text-only sections — no photos, no sidebar nav:

1. **01 // Metal / Meshuggah** — not a music preference, an operating system. Polyrhythmic complexity, the same brain that does solution design. Drumming lives here.
2. **02 // Detroit** — Australian guy who bleeds Detroit. Red Wings + Pistons. Identity you choose vs identity you inherit.
3. **03 // Counter-Strike** — the strategic mind. IGL thinking, reading the map, resourcing the problem.
4. **04 // Father** — the wildness and the groundedness are the same thing.

### Professional Page Structure

Structured like a consulting brief, not a resume. Sections:

1. **Hero** — full-height, "Professional" title + "Solution Architect" role bar, hex data stream canvas
2. **Intro** — spec statement + CTA buttons + 4 stat badges (WCC Expert / 20+ Years / 4K+ Handsets / 1K+ Duress)
3. **01 // Focus Areas** — 3-column grid: AI Contact Centre, Healthcare Integration, Wireless Infrastructure
4. **02 // Projects** — 4 named outcome cards with metric, area, project name, description
5. **03 // Experience** — timeline list: ArchiTech + prior roles
6. **04 // Skills** — 2-column: technology categories (left) + certifications (right)

---

## 10. What This Brand Is Not

- Not a standard developer portfolio (no light mode, no clean white cards)
- Not gothic-romantic (no ornate flourishes, candles, Victorian details)
- Not cyberpunk (no neon, no circuit-board motifs as decoration)
- Not corporate dark mode (no smooth rounded cards as the primary design language)
- Not a simple band website — the music is one part of the whole, not the whole room
- Not performative — the darkness is not aesthetic posturing, it is the natural environment
