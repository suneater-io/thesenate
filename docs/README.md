# SENATE — Docs

Post-audit action item tracker. Each file maps to a specific skill or category of work.

| File | Skill | Items |
|---|---|---|
| [action-items-normalize.md](./action-items-normalize.md) | `/normalize` | Off-brand colors, token misuse, grain inconsistency |
| [action-items-optimize.md](./action-items-optimize.md) | `/optimize` | Canvas rAF pause, dead CSS removal, Phosphor CDN |
| [action-items-adapt.md](./action-items-adapt.md) | `/adapt` | Nav touch targets |
| [action-items-content.md](./action-items-content.md) | Manual | Real social links, placeholder images |

## What was already fixed (harden pass — 2026-03-20)

| Issue | Files |
|---|---|
| Duplicate `id` on Landing hero | `index.html` |
| `closeSenatorModal()` undefined call | `index.html` |
| Dead responsive CSS block | `index.html` |
| Mobile hamburger + drawer missing | `chamber/`, `blog/`, `projects/` |
| Skip link missing | `chamber/`, `blog/`, `projects/` |
| `prefers-reduced-motion` guard missing from canvas | `chamber/`, `blog/`, `projects/` |
| `aria-hidden` missing from canvas elements | `chamber/`, `blog/`, `projects/` |
| `.ft-name` mobile overlap | `index.html`, `professional/`, `creative/`, `blog/` |
| Mobile drawer focus trap missing | All 7 pages |
| Mobile drawer `role="dialog"` + `aria-modal` missing | All 7 pages |
| `what-title` / `work-title` non-semantic divs | `professional/` |
| Valhalla overlay missing dialog semantics + focus management | `index.html`, `chamber/` |
| XSS in blog post `innerHTML` injection | `blog/` |
| First blog post image using `loading="lazy"` | `blog/` |
