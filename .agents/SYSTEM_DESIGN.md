# SYSTEM_DESIGN.md

# Arth.AI Website — System Design

## 1. System Overview

The Arth.AI website is a lightweight single-page marketing and business presentation website.

Primary purpose:

- explain Arth.AI services
- showcase selected software work
- communicate technical capabilities
- generate business inquiries

This is not initially designed as a full SaaS platform.

---

# 2. High-Level Architecture

```text
User Browser
     |
     v
Static Hosting / CDN
     |
     v
React Application
     |
     +----------------------+
     |                      |
     v                      v
Static Content         Local Assets
Services               Project Images
Projects               Icons
Technologies           Fonts
Contact
```

Version 1 should work without a backend.

---

# 3. Application Architecture

```text
App
│
├── Navbar
├── Hero
│   └── HeroVisual
├── Services
│   └── ServiceCard
├── Projects
│   └── ProjectCard
├── Technologies
│   └── TechnologyCard
├── CustomSoftwareSection
├── CTA
├── Contact
└── Footer
```

Each major page section should remain independent and reusable.

---

# 4. Data Architecture

Static business data should be separated from presentation components.

Example:

```text
src/data/
├── projects.ts
├── services.ts
└── technologies.ts
```

Benefits:

- easier future updates
- easier addition of more projects
- clean components
- less duplicated content
- easier migration to CMS/API later

---

# 5. Project Data Flow

```text
projects.ts
    |
    v
Projects Section
    |
    v
ProjectCard
    |
    v
Rendered UI
```

The initial featured project:

```text
Neuvera 1.0
```

No network request is required.

---

# 6. Navigation Design

The application is a single-page website.

Navigation uses section anchors:

```text
/
├── #services
├── #projects
├── #technologies
└── #contact
```

Navigation behavior:

- smooth scroll
- sticky/fixed header
- responsive mobile navigation

No router is needed initially.

---

# 7. Hero Animation Architecture

Preferred implementation:

```text
Hero
│
├── HeroContent
└── HeroVisual
```

`HeroVisual` must remain isolated from the main content rendering.

Possible implementations:

```text
CSS 3D
```

or:

```text
Three.js Canvas
```

If using Three.js:

```text
HeroVisual
    |
    +-- Scene
    +-- Camera
    +-- Geometry
    +-- Particle / Line system
    +-- Animation loop
```

The render loop must:

- run only when needed
- pause when tab is hidden
- reduce work on mobile
- stop or simplify for reduced-motion users

---

# 8. Scroll Reveal Architecture

Use a reusable hook:

```text
useIntersectionObserver
```

Flow:

```text
Section Element
      |
      v
IntersectionObserver
      |
      v
CSS Class Toggle
      |
      v
Reveal Animation
```

This prevents dependency-heavy scroll animation libraries.

---

# 9. Responsive Architecture

Use CSS breakpoints and fluid typography.

Recommended layout model:

```text
Desktop:
Hero = 2 columns
Services = 4 columns
Project = 2 columns
Technologies = 3-4 columns

Tablet:
Hero = 2 columns or stacked
Services = 2 columns
Project = stacked
Technologies = 2 columns

Mobile:
All main content = single column
```

Use:

```css
clamp()
```

for typography and spacing where appropriate.

---

# 10. Contact Architecture

Version 1:

```text
User
  |
  v
Email CTA
  |
  v
mailto:arthvala@gmail.com
```

Optional frontend contact form:

```text
Contact Form
    |
    v
Client Validation
    |
    v
Future API Integration
```

Do not simulate successful server submission without an actual API.

---

# 11. Future Backend Expansion

If contact/API functionality is added later:

```text
Browser
   |
   v
Frontend
   |
   v
API Layer
   |
   +----------------+
   |                |
   v                v
Email Service    Database
```

Possible backend:

```text
Node.js + Express
```

Possible data storage:

```text
MongoDB
PostgreSQL
```

depending on future requirements.

No backend should be introduced until required.

---

# 12. Future CMS Expansion

If projects and services become dynamic:

```text
Admin / CMS
    |
    v
Content API
    |
    v
Frontend
```

Potential options:

- custom admin
- headless CMS
- Git-based CMS

Keep version 1 static to reduce complexity.

---

# 13. Performance Architecture

All content should be CDN-friendly.

Prefer:

```text
Static HTML shell
Bundled JS
Optimized CSS
Compressed assets
```

Avoid unnecessary runtime fetching.

Project images should use optimized image formats.

---

# 14. SEO Architecture

The single-page structure should remain semantically meaningful.

Example:

```html
<header>
<nav>

<main>
  <section id="hero">
  <section id="services">
  <section id="projects">
  <section id="technologies">
  <section id="contact">
</main>

<footer>
```

Heading order:

```text
H1 → Hero only
H2 → Major sections
H3 → Cards / subsections
```

---

# 15. Security Considerations

Version 1 has minimal security exposure because it has no backend.

Still follow:

- no secrets in frontend code
- no API keys committed to repository
- no hidden credentials in environment files
- validate future form input
- sanitize future dynamic content

If future APIs are introduced, secrets must live server-side.

---

# 16. Accessibility Architecture

Accessibility should be built into components.

Reusable UI components must support:

- keyboard focus
- semantic elements
- aria labels where necessary
- reduced motion
- readable contrast

Do not treat accessibility as a final patch.

---

# 17. Failure Handling

If WebGL fails:

```text
Three.js Visual
      |
      X
      |
      v
CSS 3D Fallback
```

If animation is disabled:

```text
Static visual representation
```

If project image fails:

- provide meaningful alt text
- avoid breaking layout

---

# 18. Recommended Build Flow

```text
Source
   |
   v
Vite
   |
   v
Production Build
   |
   v
Static Assets
   |
   v
CDN / Hosting
```

---

# 19. Deployment Architecture

Example:

```text
Git Repository
      |
      v
CI / Hosting Build
      |
      v
Static Deployment
      |
      v
CDN
      |
      v
Users
```

Suitable platforms:

- Vercel
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Nginx

---

# 20. System Design Principles

Use these principles for every implementation decision:

```text
Simple over complex
Static over dynamic unless needed
Native APIs over dependencies
Reusable over duplicated
Fast over decorative
Accessible over flashy
Maintainable over clever
```
