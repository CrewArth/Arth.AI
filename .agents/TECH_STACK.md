# TECH_STACK.md

# Arth.AI Website — Technical Stack

## Objective

Use a modern but lightweight frontend stack for the Arth.AI business website.

The website should be visually premium while keeping:

- bundle size low
- dependencies minimal
- performance high
- architecture simple
- maintenance easy

---

# Primary Frontend Stack

## React

Use:

```text
React 18+
```

Purpose:

- component-based UI
- reusable sections
- maintainable code
- simple state management

This is a mostly static business website, so avoid introducing unnecessary application complexity.

---

## Vite

Use:

```text
Vite
```

Purpose:

- fast local development
- modern build tooling
- optimized production output
- minimal configuration

---

## TypeScript

Preferred:

```text
TypeScript
```

Use TypeScript for:

- project data
- service definitions
- technology data
- component props
- utility functions

Avoid unnecessary generic abstractions.

---

# Styling

Preferred options:

```text
CSS Modules
SCSS
or structured global CSS
```

If the existing project already has Tailwind CSS, it may be used.

Do not add Tailwind solely for this project unless there is a strong reason.

---

# CSS Features to Prefer

Use native CSS for most visual work:

- CSS Grid
- Flexbox
- custom properties
- gradients
- filters
- backdrop-filter
- transforms
- transitions
- keyframes
- media queries
- clamp()
- min()
- max()
- aspect-ratio

---

# Animation Stack

Primary animation tools:

```text
CSS transitions
CSS keyframes
IntersectionObserver
requestAnimationFrame
```

Use animation libraries only if required.

Avoid:

```text
Framer Motion
GSAP
Anime.js
heavy particle libraries
```

unless a documented requirement cannot reasonably be achieved without them.

---

# 3D / WebGL

Preferred order:

```text
1. CSS 3D
2. Canvas
3. Three.js
```

If actual WebGL is needed, use:

```text
three
```

Avoid React Three Fiber unless the 3D experience becomes complex enough to justify it.

The hero animation should remain lightweight.

---

# Routing

No router is required for the initial version.

The website is a single-page business website.

Navigation should use anchor sections:

```text
#services
#projects
#technologies
#contact
```

Add React Router only if future requirements introduce actual pages.

---

# State Management

Do not add:

```text
Redux
Zustand
MobX
Context-heavy global state
```

for the initial website.

Local React state is sufficient for:

- mobile navigation
- simple form controls
- interaction state

---

# Forms

Initial contact can use:

```text
mailto:
```

or a frontend form prepared for future API integration.

Do not create a fake success flow without a backend.

Future backend options may include:

- Node.js
- Express.js
- serverless functions
- transactional email service

These are not required for version 1.

---

# Icons

Preferred order:

```text
1. Inline SVG
2. CSS icons
3. Existing icon library already installed
```

Avoid installing a large icon package for only a few icons.

---

# Images

Recommended formats:

```text
WebP
AVIF
SVG
PNG only where necessary
```

Use:

```html
loading="lazy"
```

for below-the-fold images.

Hero-critical images should not be lazily loaded if they are immediately visible.

---

# Fonts

Preferred:

```text
System font stack
```

Example:

```css
font-family:
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

If an external font is used:

- use one font family
- keep weights limited
- preload only if necessary

---

# SEO

Use:

- title
- meta description
- Open Graph tags
- theme-color
- favicon
- semantic structure

Suggested title:

```text
Arth.AI | Custom Web, CRM & AI Solutions
```

Suggested meta description:

```text
Arth.AI builds custom web applications, Android apps, CRM software and AI-powered solutions designed around real business requirements.
```

---

# Testing

Minimum checks:

```text
npm run build
npm run lint
```

If tests exist:

```text
npm test
```

Manual browser checks:

- Chrome
- Edge
- Firefox
- Safari where available

Viewport checks:

```text
1440px
1280px
1024px
768px
480px
375px
```

---

# Performance Goals

Aim for:

- fast first render
- minimal JavaScript
- no layout shifts
- smooth scrolling
- responsive interactions
- GPU-friendly animation
- limited WebGL complexity

Do not sacrifice performance for decorative effects.

---

# Browser APIs

Prefer native APIs:

```text
IntersectionObserver
ResizeObserver
matchMedia
requestAnimationFrame
Page Visibility API
```

For 3D animation:

Use the Page Visibility API to pause unnecessary animation when the browser tab is hidden.

---

# Recommended Folder Structure

```text
src/
│
├── components/
├── sections/
├── data/
├── hooks/
├── styles/
├── assets/
├── App.tsx
└── main.tsx
```

Suggested data files:

```text
src/data/projects.ts
src/data/services.ts
src/data/technologies.ts
```

---

# Deployment

The static frontend should be deployable to:

- Vercel
- Netlify
- AWS S3 + CloudFront
- Cloudflare Pages
- traditional Nginx hosting

No deployment provider should be hardcoded into the application.

---

# Version 1 Technology Summary

```text
Frontend: React + Vite + TypeScript
Styling: CSS / SCSS / CSS Modules
Animation: CSS + IntersectionObserver
3D: CSS 3D or Three.js only if needed
Routing: Anchor navigation
State: Local React state
Backend: None required initially
Database: None required
Hosting: Static hosting
```

The core principle is:

**Use the simplest technology that produces a polished result.**
