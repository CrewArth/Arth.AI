# Arth.AI — Business Website Implementation Prompt

## Project Overview

Build a **minimal, modern, sleek, premium business website** for:

**Business Name:** `Arth.AI - Complete AI/ Web Solution`

The website should position Arth.AI as a technology-focused software development business that provides customized web, mobile, CRM, AI, and machine learning solutions.

The overall experience should feel:

- Modern
- Premium
- Minimal
- Clean
- Technical
- Trustworthy
- Fast
- Smooth
- Professional
- Futuristic without being overly flashy

Avoid clutter, excessive gradients, unnecessary illustrations, large dependency-heavy animation libraries, or template-like layouts.

The website should feel like a modern AI/software studio.

---

# Primary Goal

The website should clearly communicate that Arth.AI builds **custom software solutions based on business requirements**.

Primary services:

- Web Development
- Android App Development
- Software / CRM Development
- AI / Machine Learning Solutions

The website should also showcase selected projects, technology expertise, and provide a simple contact path.

---

# Recommended Tech Stack

Use:

- React.js
- Vite
- TypeScript preferred
- CSS Modules, SCSS, or clean global CSS
- Minimal third-party libraries

If the existing project already uses Tailwind CSS, Tailwind may be used. Otherwise, do not install it only for this website.

## Animation Requirement

Use minimal external animation dependencies.

Preferred:

- CSS transitions
- CSS keyframes
- CSS transforms
- requestAnimationFrame where needed
- IntersectionObserver for scroll reveal effects

For the hero 3D visual:

Prefer a lightweight CSS/WebGL implementation.

If true 3D is required, use only:

- `three`

Do **not** use multiple animation libraries together.

Avoid unless absolutely necessary:

- Framer Motion
- GSAP
- React Three Fiber
- large UI frameworks
- Bootstrap
- Material UI

The goal is to keep the website lightweight.

---

# Website Structure

Create this as a polished **single-page business website**.

Main sections:

1. Navigation
2. Hero Section
3. What We Do
4. Featured Project
5. Technologies We Work With
6. Custom Software CTA
7. Contact Us
8. Footer

Keep the number of sections limited and purposeful.

---

# Design Direction

## Theme

Use a dark premium theme.

Suggested base palette:

```css
--background: #08090c;
--surface: #101218;
--surface-light: #151821;
--text-primary: #f7f8fa;
--text-secondary: #9ca3af;
--border: rgba(255,255,255,0.08);
--accent: #7c6cff;
--accent-secondary: #3fd7ff;
```

The exact colors may be adjusted slightly for better visual balance.

Do not make every element purple or blue.

Use accent colors sparingly.

---

# Typography

Use modern system fonts whenever possible.

Preferred font stack:

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

If using an external font, use only one font family and load it efficiently.

Typography should use:

- Large bold hero heading
- Strong section headings
- Comfortable body text
- Generous whitespace
- Good hierarchy

---

# Navigation

Create a clean fixed/sticky navigation bar.

Left:

`Arth.AI`

Optional small secondary text:

`AI / Web Solutions`

Right navigation links:

- Services
- Projects
- Technologies
- Contact

Add one highlighted button:

`Let's Build`

The CTA should scroll to the contact section.

## Navbar Behavior

At the top:

- transparent / near-transparent
- subtle backdrop blur

After scrolling:

- slightly darker background
- thin bottom border
- smooth transition

On mobile:

Use a simple minimal hamburger menu.

Do not use an external navbar library.

---

# Hero Section

Create **one main Hero Section**.

It should occupy approximately `85vh - 100vh`.

## Hero Content

Suggested eyebrow:

`CUSTOM SOFTWARE • AI • WEB`

Main heading:

```text
We build intelligent
digital products.
```

Highlight one portion subtly using the accent.

Alternative wording can include the brand:

```text
Building software
that moves businesses forward.
```

Supporting text:

```text
Arth.AI creates customized web applications, Android apps,
CRM platforms and AI-powered solutions designed around
real business requirements.
```

Primary CTA:

`Start a Project`

Secondary CTA:

`View Our Work`

Primary CTA scrolls to contact.

Secondary CTA scrolls to projects.

---

# Hero 3D Animation

Add a subtle 3D visual on the right side of the hero on desktop.

Possible visual direction:

- floating abstract sphere
- AI neural network orb
- rotating wireframe globe
- interconnected particles
- floating glass cubes
- geometric mesh
- animated technology nodes

The 3D object should feel premium and futuristic.

## Important Rules

The animation must:

- move slowly
- respond slightly to pointer movement
- have gentle rotation
- not interfere with readability
- not consume excessive CPU
- pause/reduce animation when browser tab is hidden
- respect `prefers-reduced-motion`
- scale down appropriately on mobile

If WebGL is unavailable, provide a CSS-based visual fallback.

Use glow effects carefully.

No loud rainbow animation.

---

# Optional Hero Background Effects

Use a very subtle:

- radial glow
- grid
- dotted technical pattern
- moving ambient gradient

Example concept:

```text
Dark canvas
+
soft purple glow behind 3D object
+
very faint grid
+
occasional floating dots
```

Keep opacity low.

---

# What We Do Section

Section ID:

`services`

Heading:

```text
What We Do
```

Supporting line:

```text
Custom technology solutions built around your workflow,
your users and your business.
```

Create 4 service cards.

---

## 1. Web Development

Title:

`Web Development`

Description:

```text
Modern, scalable and responsive websites and web applications
built for performance, usability and long-term growth.
```

Optional features:

- Business Websites
- Admin Panels
- SaaS Applications
- Internal Portals
- APIs & Integrations

---

## 2. Android App Development

Title:

`Android Apps`

Description:

```text
Custom Android applications with clean interfaces,
reliable backend integration and business-focused workflows.
```

Optional features:

- Business Apps
- Operational Apps
- Booking Apps
- Dashboard Apps
- API-connected Mobile Applications

---

## 3. Software / CRM

Title:

`Software & CRM`

Description:

```text
Customized CRM and operational software designed around
the exact processes your business uses every day.
```

Optional features:

- Hotel CRM
- Booking Systems
- Billing
- Inventory
- Reports
- Workflow Automation
- Role-based Administration

---

## 4. AI / Machine Learning

Title:

`AI / ML`

Description:

```text
AI-powered solutions that automate repetitive work,
understand data and create smarter digital experiences.
```

Optional capabilities:

- AI Agents
- Machine Learning
- NLP
- Computer Vision
- Intelligent Automation
- AI-powered APIs

---

# Service Card Design

Cards should be minimalist.

Use:

- small line icon or custom CSS icon
- thin border
- dark surface
- subtle hover glow
- subtle lift on hover

Avoid large colorful icons.

Desktop layout:

`4 columns`

Tablet:

`2 columns`

Mobile:

`1 column`

---

# Projects Section

Section ID:

`projects`

Heading:

```text
Selected Work
```

Subtitle:

```text
Solutions designed to solve real operational problems.
```

For now, showcase:

## Neuvera 1.0

Use this project object as the source of truth:

```js
{
  id: "guest-house-booking",
  title: "Neuvera 1.0",
  description:
    "A fully end-to-end hotel CRM for managing bookings, payments, invoices, and customizable hotel operations from one platform.",
  longDescription:
    "Neuvera 1.0 is a comprehensive hotel CRM that streamlines the full booking lifecycle, including reservations, payments, and dynamic invoice generation. It supports customizable hotel configurations and separates responsibilities across super admin, hotel admin, and admin roles for clear operational control.",
  image: "/images/projects/guest-house.png",
  tags: ["Reactjs", "Nodejs", "MongoDB", "Expressjs", "Redis"]
}
```

---

# Neuvera Project Presentation

Create a premium featured-project layout.

Desktop:

```text
Project Image / Mockup  |  Project Information
```

Alternate layout is acceptable if visually stronger.

Include:

- small label: `FEATURED PROJECT`
- title: `Neuvera 1.0`
- short description
- long description
- technology tags
- project image

Do not add a fake "Live Demo" or "GitHub" URL if no URL was provided.

---

# Neuvera Supporting Details

You may communicate these features visually:

- Hotel Booking Management
- Payments
- Dynamic Invoices
- Hotel Configuration
- Role-based Management
- Operational CRM
- Reporting
- Multi-level Administration

These should be presented concisely.

Do not make claims that were not provided.

---

# Project Image

Use:

```text
/images/projects/guest-house.png
```

Display inside:

- browser-style mockup frame
- slightly rounded container
- subtle shadow
- minimal border

On hover:

- very slight scale
- tiny perspective effect

No excessive animation.

---

# Technologies Section

Section ID:

`technologies`

Heading:

```text
Technologies We Work With
```

Subtitle:

```text
Modern technologies selected based on the problem,
not just the trend.
```

Technologies:

```text
MERN
AI / ML
Computer Vision
NLP
AI Agents
MEAN Stack
Relational Databases
Non-Relational Databases
```

---

# Technology Display

Do not use a giant logo wall.

Instead create elegant text-based technology pills or cards.

Example:

```text
MERN
MongoDB • Express • React • Node
```

```text
AI / ML
Prediction • Classification • Automation
```

```text
Computer Vision
Image & Visual Intelligence
```

```text
NLP
Language Processing
```

```text
AI Agents
Task-Oriented Intelligent Systems
```

```text
MEAN Stack
MongoDB • Express • Angular • Node
```

```text
Relational DB
SQL-based Data Systems
```

```text
Non-Relational DB
Document & Flexible Data Systems
```

Use a responsive grid.

---

# Animated Technology Element

Add a subtle moving technology ticker OR orbit.

Option A:

Slow horizontal technology marquee.

Option B:

Circular orbit around an AI core.

Option C:

Floating technology pills with slow parallax.

Prefer the simplest performant solution.

Pause animation on hover.

Respect reduced-motion accessibility settings.

---

# Custom Software Section

This should reinforce the main business proposition.

Large statement:

```text
Your business is unique.
Your software should be too.
```

Supporting copy:

```text
We build customized software around your processes instead
of forcing your business into a generic off-the-shelf system.
```

Add 3 simple principles:

### Built Around Your Workflow

Software should follow the way your business operates.

### Scalable Architecture

Solutions should be structured to evolve as the business grows.

### Practical Automation

Use technology and AI where it meaningfully reduces manual work.

---

# CTA Banner

Create a minimal premium CTA before contact.

Heading:

```text
Have an idea that needs to become software?
```

Text:

```text
Let's turn your business requirement into a practical,
scalable digital product.
```

Button:

`Discuss Your Project`

Scroll to contact.

---

# Contact Section

Section ID:

`contact`

Heading:

```text
Let's Build Something
```

Supporting copy:

```text
Tell us what you want to build and we can discuss
the right technical approach.
```

Contact email:

```text
arthvala@gmail.com
```

Show email prominently.

CTA:

`Email Arth.AI`

Use:

```text
mailto:arthvala@gmail.com
```

---

# Optional Contact Form

A contact form may be added visually, but do not create a fake backend.

Fields:

- Name
- Email
- Company / Business
- Project Type
- Message

Project Type options:

- Website
- Web Application
- Android App
- CRM / Business Software
- AI / ML
- Other

Submit button:

`Send Inquiry`

If no backend/email service exists:

Either:

1. use `mailto:` fallback, or
2. leave form ready for API integration with a clear TODO in code

Do not pretend a submission succeeded if there is no backend.

---

# Footer

Minimal footer.

Left:

```text
Arth.AI
Complete AI / Web Solution
```

Center or right:

```text
Web • Android • CRM • AI
```

Contact:

```text
arthvala@gmail.com
```

Bottom:

```text
© {currentYear} Arth.AI. All rights reserved.
```

Use current year dynamically.

---

# UI Interaction Details

Add subtle microinteractions throughout.

Examples:

### Buttons

Default:
- border / accent background
- slightly rounded

Hover:
- translateY(-2px)
- small glow
- smooth 200ms transition

### Cards

Hover:
- border becomes slightly brighter
- transform translateY(-4px)
- very soft glow

### Navigation Links

Hover:
- opacity change
- animated underline

### Project Image

Hover:
- scale `1.01 - 1.02`
- slight perspective tilt

Keep effects understated.

---

# Scroll Animations

Elements may reveal as they enter the viewport.

Use IntersectionObserver.

Animation:

```text
opacity: 0 → 1
translateY: 20px → 0
duration: 500-700ms
```

Stagger card animations slightly.

Do not animate every single element excessively.

---

# Cursor Interaction

Desktop only.

The hero 3D object may respond subtly to cursor position.

Example:

```text
pointer X → rotateY
pointer Y → rotateX
```

Maximum rotation should stay low.

Example:

```text
±5 degrees
```

Do not create a custom cursor unless it genuinely improves the design.

---

# Responsive Design

The website must work perfectly across:

- large desktop
- laptop
- tablet
- mobile

Breakpoints can be chosen logically.

## Mobile Requirements

Hero:

- text first
- visual below
- reduce heading size
- simplify 3D animation
- avoid horizontal overflow

Navbar:

- hamburger menu

Services:

- single column

Project:

- image first
- details second

Technology:

- 2-column or single-column depending on width

Buttons:

- large enough for touch

---

# Accessibility

Must include:

- semantic HTML
- meaningful heading hierarchy
- keyboard navigation
- visible focus states
- accessible buttons
- alt text on images
- sufficient contrast
- `aria-label` where necessary

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Disable or reduce:

- scrolling animations
- 3D rotation
- floating movement
- marquee animation

---

# Performance

Performance is important.

Requirements:

- lazy load project images
- minimize JavaScript
- avoid unnecessary re-renders
- optimize animations
- avoid giant background videos
- no heavy particle packages
- no unnecessary dependencies
- use modern image formats where possible
- preconnect only when required
- keep animations GPU-friendly

Animations should primarily use:

```css
transform
opacity
```

Avoid animating:

```text
width
height
top
left
```

where possible.

---

# SEO

Add appropriate SEO metadata.

Suggested title:

```text
Arth.AI | Custom Web, CRM & AI Solutions
```

Meta description:

```text
Arth.AI builds custom web applications, Android apps,
CRM software and AI-powered solutions designed around
real business requirements.
```

Add:

- OpenGraph metadata
- favicon placeholder
- theme-color
- semantic page structure

---

# Suggested Component Structure

```text
src/
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── HeroVisual.tsx
│   ├── SectionHeading.tsx
│   ├── ServiceCard.tsx
│   ├── ProjectCard.tsx
│   ├── TechnologyCard.tsx
│   ├── CTA.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
│
├── sections/
│   ├── Services.tsx
│   ├── Projects.tsx
│   └── Technologies.tsx
│
├── data/
│   ├── projects.ts
│   ├── services.ts
│   └── technologies.ts
│
├── hooks/
│   ├── useIntersectionObserver.ts
│   └── useReducedMotion.ts
│
├── styles/
│   ├── global.css
│   └── variables.css
│
├── App.tsx
└── main.tsx
```

Keep architecture simple.

Do not over-engineer.

---

# Data Structure

## Projects

Store projects separately:

```ts
export const projects = [
  {
    id: "guest-house-booking",
    title: "Neuvera 1.0",
    description:
      "A fully end-to-end hotel CRM for managing bookings, payments, invoices, and customizable hotel operations from one platform.",
    longDescription:
      "Neuvera 1.0 is a comprehensive hotel CRM that streamlines the full booking lifecycle, including reservations, payments, and dynamic invoice generation. It supports customizable hotel configurations and separates responsibilities across super admin, hotel admin, and admin roles for clear operational control.",
    image: "/images/projects/guest-house.png",
    tags: ["Reactjs", "Nodejs", "MongoDB", "Expressjs", "Redis"]
  }
];
```

---

# Services Data

```ts
export const services = [
  {
    title: "Web Development",
    description:
      "Modern, scalable and responsive websites and web applications built for performance and growth."
  },
  {
    title: "Android Apps",
    description:
      "Custom Android applications connected to reliable backend systems and business workflows."
  },
  {
    title: "Software & CRM",
    description:
      "Customized CRM and operational platforms designed around real business processes."
  },
  {
    title: "AI / ML",
    description:
      "AI-powered systems for automation, intelligence, language understanding and computer vision."
  }
];
```

---

# Technology Data

```ts
export const technologies = [
  "MERN",
  "AI / ML",
  "Computer Vision",
  "NLP",
  "AI Agents",
  "MEAN Stack",
  "Relational Databases",
  "Non-Relational Databases"
];
```

---

# Visual Composition

The page should roughly follow this rhythm:

```text
Navbar

------------------------------------------------

Hero
Large headline
Supporting statement
CTA buttons                  Animated 3D Object

------------------------------------------------

What We Do

[ Web ] [ Android ] [ CRM ] [ AI ]

------------------------------------------------

Selected Work

Neuvera Screenshot      Neuvera 1.0
                        Description
                        Tags
                        Features

------------------------------------------------

Technologies We Work With

MERN      AI/ML       Computer Vision
NLP       AI Agents   MEAN
SQL       NoSQL

------------------------------------------------

Custom Software

"Your business is unique.
 Your software should be too."

------------------------------------------------

CTA

"Have an idea that needs to become software?"

------------------------------------------------

Contact

arthvala@gmail.com

------------------------------------------------

Footer
```

---

# Visual Quality Requirements

The site must NOT look like:

- a generic bootstrap template
- a colorful SaaS landing page template
- an AI-generated page full of gradients
- a crypto landing page
- an overly animated portfolio
- a giant collection of cards

It SHOULD feel like:

- a boutique software studio
- a modern AI engineering company
- a premium technology consultancy
- a focused product development business

Use whitespace intentionally.

---

# Content Tone

Writing should be:

- clear
- confident
- technical but understandable
- concise
- professional

Avoid exaggerated marketing language such as:

```text
Revolutionary
World's Best
Game Changing
Unmatched
Industry Leading
```

unless there is evidence supporting the claim.

---

# Branding

Primary logo text:

```text
Arth.AI
```

Optional lockup:

```text
Arth.AI
Complete AI / Web Solution
```

Use typography as the main logo.

Do not create an overly complex logo.

Optional subtle visual mark:

```text
A.
```

or

```text
<A/>
```

only if it integrates naturally.

---

# Hero Animation Concept

Recommended implementation:

Create an abstract AI orb using Three.js.

Structure:

```text
Scene
 └── Rotating wireframe sphere
      ├── vertex particles
      ├── faint connecting lines
      └── soft glow
```

Interaction:

```text
Mouse movement
    ↓
small rotation offset
    ↓
smooth interpolation
```

Idle:

```text
slow continuous rotation
```

Use a single canvas.

No physics engine.

No external particle package.

Target smooth `60fps` on modern desktop hardware.

Reduce particle count on mobile.

---

# Fallback CSS 3D Concept

If Three.js is not used, create a CSS 3D composition with:

```text
core circle
+
3 orbit rings
+
floating nodes
+
blurred radial glow
```

Use:

```css
transform-style: preserve-3d;
perspective: 1000px;
```

Animate rings slowly with CSS keyframes.

This is preferred if it achieves the desired visual quality with less JavaScript.

---

# Code Quality

Requirements:

- reusable components
- meaningful names
- no duplicate markup
- avoid unnecessary state
- TypeScript interfaces where appropriate
- no console errors
- no unused imports
- no giant component containing the full website
- no inline CSS unless necessary for computed animation values

Keep comments only where implementation needs explanation.

---

# Browser Support

Support recent versions of:

- Chrome
- Edge
- Firefox
- Safari

Gracefully handle browsers without WebGL.

---

# Final Implementation Requirements

When implementing this website:

1. First inspect the existing project structure.
2. Reuse the existing stack wherever practical.
3. Do not replace working project configuration unnecessarily.
4. Install the minimum possible dependencies.
5. Build reusable components.
6. Implement responsive design from the beginning.
7. Add hero 3D animation.
8. Add subtle scroll reveal animations.
9. Add all required website sections.
10. Add the Neuvera 1.0 project using the exact supplied project data.
11. Add technology expertise.
12. Add contact email `arthvala@gmail.com`.
13. Make all navigation links work.
14. Ensure mobile navigation works.
15. Test for horizontal overflow.
16. Verify accessibility.
17. Verify reduced-motion behavior.
18. Optimize animations and images.
19. Run lint/build and fix issues.
20. Ensure the final output looks polished at desktop and mobile widths.

---

# Important Constraints

Do not:

- use excessive dependencies
- add random services
- invent project statistics
- invent customer counts
- invent testimonials
- invent partner logos
- invent awards
- invent project URLs
- invent GitHub links
- add pricing packages unless requested
- add authentication
- add a backend unless required for contact functionality
- use huge video backgrounds
- add heavy animation libraries unnecessarily

---

# Final Goal

The completed website should immediately communicate:

```text
Arth.AI builds custom modern software,
web applications, Android apps, CRM platforms,
and AI-powered solutions.
```

The strongest impressions should be:

**Minimal. Technical. Premium. Modern. Reliable.**

The website should balance futuristic AI visuals with the credibility of a serious software engineering business.

---

# Final Prompt to the Coding Agent

Implement the website completely based on this specification.

Do not only generate a mockup.

Create production-quality React components, responsive styles, animations, project data, navigation, SEO metadata, accessibility support, and the complete page.

Work section-by-section and verify each section before moving to the next.

Recommended implementation order:

```text
1. Global design system
2. Navbar
3. Hero + 3D visual
4. Services
5. Neuvera project showcase
6. Technologies
7. Custom software section
8. CTA
9. Contact
10. Footer
11. Responsive refinement
12. Animations
13. Accessibility
14. Performance optimization
15. Final build/lint verification
```

At the end, review the full website for visual consistency and remove anything that feels unnecessary, cluttered, generic, or overly animated.
