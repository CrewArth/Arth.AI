# AGENTS.md

## Purpose

This file defines how any AI coding agent must work on the **Arth.AI - Complete AI / Web Solution** website project.

The goal is to ensure every implementation task follows the same product requirements, technical direction, architecture, and design standards.

---

# Mandatory First Step for Every AI Agent

Before making **any code change**, the AI agent must read all project documentation files listed below.

This is required **every time a new task starts**, even if the agent has worked on the project before.

The agent must read:

```text
AGENTS.md
PRD.md
TECH_STACK.md
SYSTEM_DESIGN.md
arth-ai-business-website-prompt.md
```

If any of these files are missing, the agent should continue with the available documentation and clearly mention which documentation file is missing.

Do not rely only on previous conversation context or memory.

Always re-read the current documentation because project requirements may have changed.

---

# Required Agent Workflow

For every task:

1. Read all mandatory documentation files.
2. Inspect the existing project structure.
3. Identify the exact files related to the task.
4. Understand the current implementation before editing.
5. Reuse existing components, utilities, and styling patterns where possible.
6. Make the smallest clean change needed.
7. Do not introduce unnecessary dependencies.
8. Verify responsive behavior.
9. Verify there are no console or TypeScript errors.
10. Run lint/build/tests where available.
11. Fix issues caused by the implementation.
12. Summarize what changed.

---

# Source of Truth Priority

If instructions conflict, use this priority:

```text
1. Latest user instruction
2. AGENTS.md
3. PRD.md
4. SYSTEM_DESIGN.md
5. TECH_STACK.md
6. arth-ai-business-website-prompt.md
7. Existing code
```

Existing code should be preserved unless it conflicts with the current documented requirements.

---

# Project Overview

Project:

```text
Arth.AI - Complete AI / Web Solution
```

Business focus:

- Custom Web Development
- Android App Development
- CRM / Business Software
- AI / Machine Learning
- Computer Vision
- NLP
- AI Agents
- Custom Software Development

The website should represent Arth.AI as a modern, premium, technical software business.

---

# Design Principles

Every implementation decision should support these qualities:

- Minimal
- Modern
- Sleek
- Premium
- Fast
- Technical
- Clean
- Responsive
- Professional

Avoid:

- clutter
- excessive gradients
- over-animation
- giant UI libraries
- generic template layouts
- unnecessary cards
- excessive rounded corners
- fake statistics
- fake testimonials
- fake client logos

---

# Dependency Policy

The project should use the minimum possible number of dependencies.

Before installing a dependency:

1. Check whether the requirement can be handled with existing dependencies.
2. Check whether it can be implemented with browser APIs or CSS.
3. Only install a package if it clearly improves maintainability or functionality.

Preferred native tools:

- CSS transitions
- CSS keyframes
- CSS transforms
- IntersectionObserver
- requestAnimationFrame
- browser event APIs

For 3D:

Prefer lightweight CSS 3D.

If actual WebGL is required, `three` is acceptable.

Avoid adding multiple animation libraries.

---

# Code Quality Rules

Use:

- reusable components
- clear naming
- small focused components
- typed interfaces where applicable
- centralized project/service/technology data
- semantic HTML
- accessible markup

Avoid:

- duplicated markup
- inline styling without need
- magic values scattered throughout the code
- large monolithic components
- excessive state
- unnecessary context providers
- unused imports
- console logs in production code

---

# Styling Rules

Maintain a consistent design system.

Use design tokens for:

- colors
- spacing
- borders
- radii
- typography
- shadows
- transitions

Animations should primarily use:

```css
transform
opacity
```

Avoid layout-heavy animations involving:

```text
width
height
top
left
```

unless necessary.

---

# Responsive Requirements

Every feature must be checked at:

```text
Desktop
Laptop
Tablet
Mobile
```

The implementation must not create horizontal overflow.

Mobile interactions must remain usable with touch.

The mobile version may simplify or reduce non-essential 3D effects.

---

# Accessibility Requirements

Maintain:

- semantic structure
- logical heading hierarchy
- alt text
- keyboard navigation
- visible focus states
- accessible controls
- sufficient color contrast

Always support:

```css
@media (prefers-reduced-motion: reduce)
```

Animation-heavy behavior should be disabled or reduced.

---

# Performance Rules

Prioritize performance.

Do not add:

- background videos
- large animation packages
- heavy particle engines
- unnecessary render loops
- oversized image assets

Use:

- lazy loading
- efficient images
- CSS transforms
- code splitting if needed
- reduced rendering on mobile
- requestAnimationFrame only when necessary

---

# Content Rules

Never invent:

- client names
- project URLs
- testimonials
- awards
- customer counts
- revenue numbers
- performance metrics
- case study results
- GitHub links
- pricing

Use only content explicitly defined in the project documentation.

---

# Featured Project

The current featured project is:

```text
Neuvera 1.0
```

Use the exact project data from the project documentation unless the user provides an update.

Do not rename the project or invent additional functionality.

---

# Contact

Primary contact email:

```text
arthvala@gmail.com
```

Do not replace this unless the user explicitly changes it.

---

# AI Agent Completion Checklist

Before considering a task complete, confirm:

```text
[ ] Documentation read
[ ] Existing implementation inspected
[ ] No unnecessary dependencies added
[ ] Design matches project direction
[ ] Responsive behavior checked
[ ] Accessibility considered
[ ] Reduced-motion handled where needed
[ ] No console errors
[ ] No TypeScript errors
[ ] Build works
[ ] No horizontal overflow
[ ] No fake content introduced
[ ] Code remains maintainable
```

---

# Final Rule

Every AI agent working on this project must treat these documentation files as active project requirements rather than optional reference material.

**Always read the documentation before coding.**
