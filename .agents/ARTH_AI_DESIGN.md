# ARTH.AI — Style Reference
> Darkroom product editorial. A lone object floating in warm darkness, cream typography the only decoration.

**Theme:** dark

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

The Arth.AI visual system treats each digital solution like a museum artifact: full-bleed warm-dark canvas, cream typography floating in generous negative space, and zero UI chrome competing with the form. Every text element is uppercase at weight 500, with the sole exception of body copy at 29px/400 which is the system's only conversational voice. A single vivid orange appears only for credit lines and the studio link — never for buttons or CTAs — earning its rarity. The layout alternates between two modes: photographic hero (the product in context with tools and materials) and void-mode reveal (the product isolated on warm dark), connected by hairline dashed dividers and pill-shaped controls.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Warm Cream | `#ffedd7` | `--color-warm-cream` | Light text on dark surfaces, inverse labels, and high-contrast captions. |
| Walnut Shadow | `#100904` | `--color-walnut-shadow` | Page canvas and deepest background — warm near-black, not pure black. The void behind every solution reveal |
| Bark Brown | `#382416` | `--color-bark-brown` | Elevated surface and filled button background — the one chromatic step above the canvas, used for the single solid CTA |
| Cork Border | `#40372e` | `--color-cork-border` | Hairline dividers, dashed section separators, subtle container borders — warmer than the canvas by one step |
| Driftwood | `#6c5f51` | `--color-driftwood` | Mid-tone warm gray for secondary dividers and muted structural elements — the bridge between Bark and Cream |
| Ember Accent | `#dc5000` | `--color-ember-accent` | Orange text accent for links, tags, and emphasized short phrases. |
| Pure Black | `#000000` | `--color-pure-black` | SVG icon fills and decorative vector elements only — never used as a background or text color |

## Tokens — Typography

### halyard-display-variable — The only typeface. Weight 500 at 51px drives display headlines with extreme uppercase confidence; the same family at weight 400 / 29px becomes the system's sole mixed-case body voice. Letter-spacing stays normal — the geometric forms do the work without tightening. Substitute: 'Inter', 'Söhne', or 'Neue Haas Grotesk' for close structural match. · `--font-halyard-display-variable`
- **Substitute:** Inter or Söhne
- **Weights:** 400, 500
- **Sizes:** 8, 10, 12, 14, 15, 18, 24, 29, 41, 51px
- **Line height:** 0.90–1.26
- **Letter spacing:** normal across all sizes — no negative tracking even at display scale, the font's geometry handles visual weight without compression
- **OpenType features:** `"ss01" on`
- **Role:** The only typeface. Weight 500 at 51px drives display headlines with extreme uppercase confidence; the same family at weight 400 / 29px becomes the system's sole mixed-case body voice. Letter-spacing stays normal — the geometric forms do the work without tightening. Substitute: 'Inter', 'Söhne', or 'Neue Haas Grotesk' for close structural match.

### Arial — System fallback for micro-legal labels (8px uppercase credits like "* ADOBE ILLUSTRATOR"). Not a design choice — a necessity for system-rendered disclaimers. · `--font-arial`
- **Substitute:** system-ui
- **Weights:** 400, 500
- **Sizes:** 8px
- **Line height:** 1.20
- **Role:** System fallback for micro-legal labels (8px uppercase credits like "* ADOBE ILLUSTRATOR"). Not a design choice — a necessity for system-rendered disclaimers.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| subheading | — | — | 18px | 1 | 0px | `--text-subheading` |
| heading-sm | — | — | 24px | 1.09 | 0px | `--text-heading-sm` |
| body | — | — | 29px | 1.26 | 0px | `--text-body` |
| heading | — | — | 41px | 0.9 | 0px | `--text-heading` |
| display | — | — | 51px | 0.9 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 6 | 6px | `--spacing-6` |
| 8 | 8px | `--spacing-8` |
| 9 | 9px | `--spacing-9` |
| 10 | 10px | `--spacing-10` |
| 12 | 12px | `--spacing-12` |
| 14 | 14px | `--spacing-14` |
| 18 | 18px | `--spacing-18` |
| 24 | 24px | `--spacing-24` |
| 31 | 31px | `--spacing-31` |
| 41 | 41px | `--spacing-41` |
| 45 | 45px | `--spacing-45` |
| 68 | 68px | `--spacing-68` |
| 204 | 204px | `--spacing-204` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 12px |
| inputs | 0px |
| full-round | 9999px |
| buttons-pill | 36px |
| buttons-outlined | 22.5px |

### Layout

Full-bleed throughout — no max-width container, every section spans 100vw. Hero: full-viewport warm-dark composition with a massive ARTH.AI wordmark (51px+) in the upper-left, tagline above, fixed minimal nav upper-right, vertical sidebar label running down the right edge, semi-transparent info card lower-left, and a small project/visual preview lower-right. The center/right visual should feature a premium abstract 3D representation of AI, software architecture, or connected systems. Subsequent sections: full-viewport Walnut Shadow canvas with a centered 3D digital object or project artifact flanked by left-aligned heading and right-aligned body copy — a three-column grid (text / object / text) with generous 18px gutters. Section transitions are seamless dark-on-dark; the only breaks are hairline dashed dividers. Navigation is fixed, transparent, and 4 items max. No sidebar, no footer chrome, no cards-within-cards — every screen is a single statement.

## Typography Voice

The system has exactly two typographic modes:

1. UPPERCASE WEIGHT 500 — the default for everything: nav, headings, labels, links, button text, legal. The voice is declarative, confident, museum-label. Sizes range from 8px (legal) to 51px (display). Line-height tightens with size: 1.2 at caption, 1.0 at body-sm, 0.9 at display. No letter-spacing adjustment — the font's geometry is tight enough at every scale.

2. MIXED CASE WEIGHT 400 — the exception, used only at 29px for the descriptive body copy that explains the product. This is the system's only conversational voice: "Built around real workflows, clear operations, and practical automation. Arth.AI turns business requirements into focused digital products." The weight drop and case change are the signal — when the text shifts from 500/UPPER to 400/mixed, the user knows they are reading description, not label.

The bold signature: line-height 0.9 at 41–51px display sizes. This is unusually tight — most editorial sites use 1.0–1.1. At 0.9, the uppercase letterforms overlap their line-height bounds, creating a sculptural block effect. The display type doesn't sit in lines; it stacks as solid form.

## Agent Prompt Guide

## Quick Color Reference
- text: #ffedd7 (Warm Cream)
- background: #100904 (Walnut Shadow)
- surface: #382416 (Bark Brown)
- border: #40372e (Cork Border)
- accent: #dc5000 (Ember)
- primary action: no distinct CTA color

## 3-5 Example Component Prompts

1. **Hero Lockup:** Full-bleed Walnut Shadow (#100904) canvas. ARTH.AI wordmark at 51px Halyard Display Variable weight 500 uppercase, line-height 0.9, color #ffedd7, positioned upper-left with 24px margin. Tagline "CUSTOM SOFTWARE • AI • WEB" at 12px weight 500 uppercase above the wordmark, also #ffedd7.

No distinct primary action color was observed; use the extracted neutral button treatments instead of inventing a filled CTA color.

3. **Ghost Outline Button:** Transparent background, 1px Warm Cream (#ffedd7) border, 22.5px border-radius, 7.5px vertical padding, Warm Cream text at 12px weight 500 uppercase. The secondary action vocabulary.

4. **Solution Reveal Section:** Full-viewport (100vh) Walnut Shadow (#100904) background. Centered 3D product render occupying the middle 40% of width. Left column: heading "ISN'T JUST SOFTWARE." at 41px weight 500 uppercase, line-height 0.9, #ffedd7, left-aligned. Right column: body copy at 29px weight 400 mixed-case, line-height 1.26, #ffedd7, left-aligned within the column. 18px gutter between the centered object and each text column.

5. **Top Navigation:** Fixed position, transparent background, full-width. Left: ARTH.AI wordmark at 12px Halyard weight 500 uppercase #ffedd7. Right: four nav items (INTRO, FEATURES, PRODUCT, CONTACT) at 12px weight 500 uppercase #ffedd7, with a 1px dashed #40372e underline beneath the active item.

## Similar Brands

- **Lusion (the studio credited in the design)** — Same warm-dark editorial canvas, single-product hero treatment, pill-button controls, and 3D product renders as the visual centerpiece
- **Active Theory** — Full-bleed dark mode with a single interactive 3D object commanding the viewport, minimal UI chrome, and oversized uppercase type
- **Resn** — Editorial product-showcase sites with top-down craft photography, warm grading, and typography that steps back to let the object speak
- **Tool of North America** — Studio portfolio sites that treat a single concept object with museum-presentation gravity — dark void, cream labels, generous negative space
- **Buck (studio)** — Work-reveal layouts that alternate between photographic context and isolated product renders against near-black backgrounds

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-warm-cream: #ffedd7;
  --color-walnut-shadow: #100904;
  --color-bark-brown: #382416;
  --color-cork-border: #40372e;
  --color-driftwood: #6c5f51;
  --color-ember-accent: #dc5000;
  --color-pure-black: #000000;

  /* Typography — Font Families */
  --font-halyard-display-variable: 'halyard-display-variable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-subheading: 18px;
  --leading-subheading: 1;
  --tracking-subheading: 0px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.09;
  --tracking-heading-sm: 0px;
  --text-body: 29px;
  --leading-body: 1.26;
  --tracking-body: 0px;
  --text-heading: 41px;
  --leading-heading: 0.9;
  --tracking-heading: 0px;
  --text-display: 51px;
  --leading-display: 0.9;
  --tracking-display: 0px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;

  /* Spacing */
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-31: 31px;
  --spacing-41: 41px;
  --spacing-45: 45px;
  --spacing-68: 68px;
  --spacing-204: 204px;

  /* Layout */
  --card-padding: 24px;
  --element-gap: 18px;

  /* Border Radius */
  --radius-xl: 12px;
  --radius-2xl: 22.5px;
  --radius-3xl: 36px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-cards: 12px;
  --radius-inputs: 0px;
  --radius-full-round: 9999px;
  --radius-buttons-pill: 36px;
  --radius-buttons-outlined: 22.5px;

  /* Surfaces */
  --surface-walnut-shadow: #100904;
  --surface-bark-brown: #382416;
  --surface-cork-border: #40372;
  --surface-warm-cream: #ffedd7;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-warm-cream: #ffedd7;
  --color-walnut-shadow: #100904;
  --color-bark-brown: #382416;
  --color-cork-border: #40372e;
  --color-driftwood: #6c5f51;
  --color-ember-accent: #dc5000;
  --color-pure-black: #000000;

  /* Typography */
  --font-halyard-display-variable: 'halyard-display-variable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-subheading: 18px;
  --leading-subheading: 1;
  --tracking-subheading: 0px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.09;
  --tracking-heading-sm: 0px;
  --text-body: 29px;
  --leading-body: 1.26;
  --tracking-body: 0px;
  --text-heading: 41px;
  --leading-heading: 0.9;
  --tracking-heading: 0px;
  --text-display: 51px;
  --leading-display: 0.9;
  --tracking-display: 0px;

  /* Spacing */
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-31: 31px;
  --spacing-41: 41px;
  --spacing-45: 45px;
  --spacing-68: 68px;
  --spacing-204: 204px;

  /* Border Radius */
  --radius-xl: 12px;
  --radius-2xl: 22.5px;
  --radius-3xl: 36px;
  --radius-full: 9999px;
}
```

---

## Arth.AI Content Mapping

Use the visual system above **without changing its design language**. Only the content changes.

### Brand
- **Wordmark:** ARTH.AI
- **Business Name:** Arth.AI - Complete AI / Web Solution
- **Hero Eyebrow:** CUSTOM SOFTWARE • AI • WEB
- **Hero Heading:** WE BUILD INTELLIGENT DIGITAL PRODUCTS.
- **Hero Supporting Copy:** Custom web applications, Android apps, CRM platforms and AI-powered solutions designed around real business requirements.
- **Primary Contact:** arthvala@gmail.com

### Navigation
- INTRO
- SERVICES
- PROJECTS
- CONTACT

### Services
Keep the same editorial presentation style; do not turn this into a generic card-heavy SaaS section.

1. **WEB DEVELOPMENT**  
   Modern, scalable and responsive websites and web applications built for performance, usability and long-term growth.

2. **ANDROID APPS**  
   Custom Android applications connected to reliable backend systems and real business workflows.

3. **SOFTWARE & CRM**  
   Customized CRM and operational software designed around the exact processes a business uses every day.

4. **AI / ML**  
   AI-powered systems for automation, machine learning, NLP, computer vision and intelligent agents.

### Featured Project
**NEUVERA 1.0**

Short description:  
A fully end-to-end hotel CRM for managing bookings, payments, invoices, and customizable hotel operations from one platform.

Long description:  
Neuvera 1.0 is a comprehensive hotel CRM that streamlines the full booking lifecycle, including reservations, payments, and dynamic invoice generation. It supports customizable hotel configurations and separates responsibilities across super admin, hotel admin, and admin roles for clear operational control.

Technology tags:
- Reactjs
- Nodejs
- MongoDB
- Expressjs
- Redis

Project image:
`/images/projects/guest-house.png`

### Technology Expertise
Present these with the same restrained museum-label typography and spacing:

- MERN
- AI / ML
- COMPUTER VISION
- NLP
- AI AGENTS
- MEAN STACK
- RELATIONAL DATABASES
- NON-RELATIONAL DATABASES

### Custom Software Message
**YOUR BUSINESS IS UNIQUE. YOUR SOFTWARE SHOULD BE TOO.**

Body copy:  
We build customized software around your processes instead of forcing your business into a generic off-the-shelf system.

### Contact Statement
**HAVE AN IDEA THAT NEEDS TO BECOME SOFTWARE?**

Body copy:  
Let's turn your business requirement into a practical, scalable digital product.

Email action:
`mailto:arthvala@gmail.com`

### Hero 3D Object Direction
Keep the same centered-object museum presentation from this style reference, but reinterpret the object as one of:

- a warm-lit AI neural orb
- a rotating software architecture core
- a connected node sphere
- a geometric data object
- a floating abstract digital system

The object must remain singular, sculptural, and visually dominant. Avoid multiple floating cards, dashboards, or generic SaaS illustrations.

### Neuvera Visual Direction
For the featured project reveal, use the Neuvera screenshot or interface mockup as the "artifact" in the same centered product-reveal composition.

- left: uppercase project statement
- center: Neuvera visual / browser mockup
- right: mixed-case descriptive body copy

Do not convert the reference design into a conventional portfolio grid.

### Strict Preservation Rule
Do **not** alter the following from the reference design unless explicitly requested:

- color palette
- warm cream text
- walnut background
- ember accent behavior
- typography scale
- uppercase/mixed-case usage rules
- spacing system
- border radii
- dashed separators
- full-viewport section rhythm
- fixed navigation behavior
- three-column reveal layout
- no-shadow rule
- single-object visual composition
- editorial / museum-artifact aesthetic

The goal is an **Arth.AI website using this exact design language**, not a redesign inspired by it.
