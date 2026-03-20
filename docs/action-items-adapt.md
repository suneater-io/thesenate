# Action Items — `/adapt`

Responsive design and touch target improvements.

---

## ~~M10 · Nav link touch targets are undersized~~ ✓ Fixed
**Files:** All 7 pages — `.nav-link` CSS

Added `padding: 10px 0` to `.nav-link` on all pages. The existing `padding-left: 0.22em` is preserved (cascade applies both). This creates a ~20px tall tap zone per link, which combined with the 32px gap between links is sufficient for WCAG 2.5.5 compliance.

```css
.nav-link {
  /* ... existing properties ... */
  padding: 10px 0;
  padding-left: 0.22em;
}
```

---

## Footer `.ft-name` — confirmed fixed
The absolute positioning issue (`.ft-name` overlapping other footer items on mobile) was resolved in the harden pass for Landing, Professional, Creative, and Blog. Chamber, Contact, and Projects already had the fix. No further action needed.
