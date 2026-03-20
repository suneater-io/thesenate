# Action Items — `/normalize`

Design token and brand consistency fixes. All items below were addressed in the normalize pass on 2026-03-20.

---

## ~~M2 · `project-tag` uses off-brand red colors~~ ✓ Fixed
**File:** `projects/index.html`

Replaced:
```css
.project-tag {
  background: rgba(200, 80, 80, 0.08);
  border: 1px solid rgba(200, 80, 80, 0.15);
}
```
With:
```css
.project-tag {
  background: var(--blue-dim);
  border: 1px solid var(--border);
}
```

Also fixed the hero overlay radial tint from red `rgba(200,80,80,0.05)` → orange-tinted `rgba(200,106,40,0.05)` to match the page's Burnt Orange accent.

---

## ~~M3 · Blog hero overlay contains off-brand purple tint~~ ✓ Fixed
**File:** `blog/index.html`

Replaced:
```css
radial-gradient(ellipse 70% 80% at 25% 45%, rgba(160,122,200,0.05) 0%, transparent 65%)
```
With:
```css
radial-gradient(ellipse 70% 80% at 25% 45%, rgba(100,140,180,0.05) 0%, transparent 65%)
```

---

## ~~M5 · Grain overlay opacity inconsistency~~ ✓ Fixed
**File:** `chamber/index.html`

Changed `body::after { opacity: 0.13; }` → `opacity: 0.11` to match brand spec.

---

## M6 · `--blue` token name misleads on non-blue pages
**Files:** All sub-pages (Professional uses amber, Projects uses orange)

Consider renaming `--blue` → `--accent` in a future full-site refactor. Low priority — internal DX concern, no user impact.

---

## ~~M8 · `btn-blue` hover glow uses hardcoded blue, not token~~ ✓ Fixed
**File:** `index.html`

Replaced:
```css
.btn-blue:hover  { box-shadow: 0 10px 40px rgba(74,130,255,0.3); }
.btn-outline:hover { box-shadow: 0 0 20px rgba(74,130,255,0.08); }
```
With:
```css
.btn-blue:hover  { box-shadow: 0 10px 40px var(--blue-glow); }
.btn-outline:hover { box-shadow: 0 0 20px var(--blue-dim); }
```

---

## ~~Contact hero overlay off-brand green tint~~ ✓ Fixed
**File:** `contact/index.html`

Changed `rgba(122,200,160,0.04)` → `rgba(138,174,187,0.04)` to match Slate accent `#8AAEBB`.

---

## ~~Nav link pattern inconsistency~~ ✓ Fixed
**Files:** `chamber/index.html`, `blog/index.html`, `projects/index.html`

These three pages used `color: var(--text-2); transition: color` approach. Normalized to match all other pages:
```css
.nav-link { color: var(--text-1); opacity: 0.75; transition: opacity 0.2s ease; font-weight: 700; }
.nav-link:hover { opacity: 1; }
.nav-link.active { opacity: 1; color: var(--blue); }
```

---

## ~~Focus-visible missing on nav links and logo~~ ✓ Fixed
**Files:** All 7 pages

Added to all pages:
```css
.nav-link:focus-visible { opacity: 1; outline: 2px solid var(--blue); outline-offset: 4px; }
.nav-logo:focus-visible { outline: 2px solid var(--blue); outline-offset: 4px; }
```
