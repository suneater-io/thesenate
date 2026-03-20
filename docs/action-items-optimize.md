# Action Items — `/optimize`

Performance improvements.

---

## ~~M4 · Canvas rAF loops run on backgrounded tabs~~ ✓ Fixed
**Files:** All 7 pages with canvas animations

Added `visibilitychange` listener to every canvas IIFE. Pattern applied:

```javascript
let rafId;
function tick() {
  // ... existing tick logic ...
  rafId = requestAnimationFrame(tick);
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) cancelAnimationFrame(rafId);
  else tick();
});
```

Notes:
- Creative has two IIFEs (displacement warp + rain) — each got its own `rafId` and `visibilitychange` listener
- Blog's `flash()` function uses a one-shot rAF chain — left unchanged (not a continuous loop)
- Blog's `scheduleFlash()` uses `setTimeout` — left unchanged

---

## ~~M7 · First blog post image loads with `loading="lazy"`~~ ✓ Fixed
**File:** `blog/index.html`

Fixed in the harden pass — first post now uses `loading="eager"`. No further action needed.

---

## M9 · Phosphor Icons loaded from unpkg without SRI hash
**Files:** `index.html`, `professional/index.html`, `creative/index.html`, `contact/index.html`, `projects/index.html`

```html
<!-- Current — no version pin, no SRI -->
<script src="https://unpkg.com/@phosphor-icons/web"></script>
```

**Options (decision required):**
1. Pin to a specific version and add SRI hash
2. Self-host: `npm install @phosphor-icons/web` and serve locally from `assets/`
3. Import only the icons used (reduces load from ~2MB → a few KB)

---

## ~~Dead CSS removal — Landing page (`index.html`)~~ ✓ Fixed
**File:** `index.html`

Removed the following orphaned classes (no HTML references):
- `.orb-4`
- `.hero-eyebrow` and its `::before`/`::after` pseudo-elements
- `.hero-ctas`
- `.btn`, `.btn-blue`, `.btn-outline` (and all hover/focus/active states)
- `.index-section`, `.index-inner`, `.index-name`, `.index-role`
- `.index-toc`, `.toc-row`, `.toc-label`
- `.index-section.reveal` (in scroll reveal block)
- `.index-section { padding: 60px 24px; }` (in 960px media query)
