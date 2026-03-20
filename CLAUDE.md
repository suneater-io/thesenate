# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

---

## Design Context

### Users
thesenate.io is personal expression first — no target conversion, no optimized persona. Visitors arrive through curiosity. The job is to reward that curiosity without packaging anything. The range of identities (architect, drummer, collector, Detroit, CS) should land as genuinely surprising. Nothing is pre-digested for the visitor's comfort. Desired outcome: they walk away wanting to know more.

### Brand Personality
**Three words: earned, heavy, precise.**

Grant Hansen. Two registers simultaneously — raw, dark, metal-adjacent AND systematic, architectural, competence-driven. The tension between them *is* the identity, not a contradiction to resolve.

Voice: terse, declarative, real. Short sentences. No fluff. No exclamation marks. No "passionate about" language.

Tagline: *Everything. At full volume.*

### Aesthetic Direction
**Visual world**: Heavy music / metal aesthetics. The SENATE wordmark is a death metal illustration — organic dripping letterforms, blade-like spikes, curved horns. The site lives in the same territory: industrial weight, darkness as natural environment (not a style choice), typographic precision alongside raw graphic force.

**Theme**: Dark only. Near-black deep navy (`#060810`). Never pure black. Never light mode. No white surfaces.

**Not**:
- Cyberpunk (no neon, no circuit-board motifs)
- Gothic-romantic (no ornate flourishes)
- Corporate dark mode (no smooth rounded-card design language)
- A standard portfolio — the structure itself should feel unexpected

### Design Principles

1. **Restraint over decoration.** The darkness is the environment, not the effect. Space, weight, and type carry hierarchy. Add only what earns its place.

2. **Tension as a feature.** Industrial metal weight and architectural precision coexist. Don't resolve the friction — use it.

3. **Reveal, don't explain.** Layer content behind exploration. The range of identities creates cognitive surprise — never package it into a tidy narrative.

4. **Every element has a job.** Nothing decorative that doesn't serve atmosphere or structure. No filler copy. Icons only where they clarify function.

5. **Atmosphere is ambient, content is primary.** Canvas effects, grain, orbs, gradients set the mood. The moment a visitor notices an effect, reduce its opacity until it disappears, then bring it back 30%.

### Token Quick Reference
```
--bg:        #060810   page background
--surface:   #090D18   elevated panels
--surface-2: #0C1220   nested surfaces
--border:    rgba(120,175,210,0.10)
--border-hi: rgba(120,175,210,0.24)
--text-1:    #D8EDF5   primary text
--text-2:    #4A6878   secondary/muted
--text-3:    #243545   ghost/disabled
--blue:      per-page accent (see brand_assets/BRAND_GUIDELINES.md §3)
--blue-dim:  rgba(--blue, 0.07)   tag bg, subtle fills
--blue-glow: rgba(--blue, 0.14)   glow, hover states
```

### Font Stack
```
Barlow Condensed — display / headings
Chakra Petch     — body / UI
Space Mono       — labels / nav / mono data
```

### Hard Anti-Patterns
- Default Tailwind palette (indigo-500, blue-600, slate-300)
- `transition-all` — only animate `transform` and `opacity`
- Light or white backgrounds in any context
- Purple, green, or red hero tints (must match page `--blue`)
- Cards nested inside cards
- Identical card grids everywhere (icon + heading + text, repeated)
- Gradient text or glassmorphism
- Hero metric / big-number layouts as decoration
- System fonts, Inter, Roboto, Arial