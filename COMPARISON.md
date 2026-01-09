# Portfolio Comparison Matrix

Generated on: 2026-01-09

## Overview

| Portfolio | Style | Animation | Layout | Content | Typography |
|-----------|-------|-----------|--------|---------|------------|
| warm-terminal | Warm Dark | Rich | Multi-page | Full | Monospace |
| cold-minimal | Ultra-Minimal | Minimal | Multi-page | Standard | Sans-serif |
| editorial-light | Light Clean | Moderate | Hybrid | Full | Sans-serif |
| cool-sleek | Cool Dark | Moderate | Multi-page | Standard | Monospace |

---

## Detailed Comparison

### 1. warm-terminal
**Code:** `WRM+RCH+MLP+FUL+MNO`

| Aspect | Implementation |
|--------|----------------|
| **Background** | Dark (#1a1512) with warm undertones |
| **Accent Colors** | Amber (#f59e0b), Coral (#fb7185), Orange (#fb923c) |
| **Typography** | JetBrains Mono |
| **Animations** | Typing effects, staggered lists, cursor blink, hover transforms |
| **UI Elements** | Terminal windows, command prompts, ASCII-style headers |
| **Sections** | Home, About, Projects, Blog, Experience, Skills |
| **Vibe** | Cozy hacker aesthetic, inviting warmth |

### 2. cold-minimal
**Code:** `MIN+MNL+MLP+STD+SAN`

| Aspect | Implementation |
|--------|----------------|
| **Background** | Pure dark (#0a0a0a) |
| **Accent Colors** | None - pure grayscale with underline links |
| **Typography** | Inter |
| **Animations** | Hover underlines only |
| **UI Elements** | No cards, no borders, pure typography |
| **Sections** | Home, Projects, Blog |
| **Vibe** | Stark, content-focused, almost brutalist in simplicity |

### 3. editorial-light
**Code:** `LGT+MOD+HYB+FUL+SAN`

| Aspect | Implementation |
|--------|----------------|
| **Background** | Light (#ffffff) with subtle gray (#f9fafb) |
| **Accent Colors** | Blue (#2563eb) |
| **Typography** | Inter |
| **Animations** | Smooth transitions, card hover lift, fade-up |
| **UI Elements** | Cards with shadows, buttons, badges |
| **Sections** | Home, About, Projects, Blog, Experience, Skills |
| **Vibe** | Professional, readable, magazine-style |

### 4. cool-sleek
**Code:** `COL+MOD+MLP+STD+MNO`

| Aspect | Implementation |
|--------|----------------|
| **Background** | Deep blue-black (#0c0e14) |
| **Accent Colors** | Cyan (#22d3ee), Blue (#3b82f6), Purple (#a78bfa) |
| **Typography** | JetBrains Mono |
| **Animations** | Glow effects on hover, gradient text, smooth transitions |
| **UI Elements** | Cards with glow borders, gradient text headers |
| **Sections** | Home, Projects, Blog |
| **Vibe** | Futuristic, sleek, neon cyberpunk |

---

## Visual Contrasts

### Temperature
| Warm | Cold |
|------|------|
| warm-terminal (amber/coral) | cold-minimal (grayscale) |
| editorial-light (neutral) | cool-sleek (cyan/blue) |

### Decoration Level
| Minimal | Rich |
|---------|------|
| cold-minimal | warm-terminal |
| - | editorial-light |
| - | cool-sleek |

### Theme
| Dark | Light |
|------|-------|
| warm-terminal | editorial-light |
| cold-minimal | - |
| cool-sleek | - |

---

## Running the Portfolios

```bash
# Install dependencies
pnpm install

# Run a specific portfolio
cd packages/portfolio-warm-terminal && pnpm dev
cd packages/portfolio-cold-minimal && pnpm dev
cd packages/portfolio-editorial-light && pnpm dev
cd packages/portfolio-cool-sleek && pnpm dev

# Build all portfolios
pnpm -r build
```

---

## Customization Guide

### Changing Identity
Edit `app/data/config.ts` in each portfolio:
```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  social: {
    github: "https://github.com/you",
    twitter: "https://twitter.com/you",
    linkedin: "https://linkedin.com/in/you",
  },
};
```

### Changing Colors
Edit `app/app.css` - look for the `@theme` block with CSS custom properties.

### Adding Content
- **Projects:** Edit `app/data/projects.ts`
- **Experience:** Edit `app/data/experience.ts` (if applicable)
- **Skills:** Edit `app/data/skills.ts` (if applicable)
- **Blog Posts:** Modify the `posts` object in blog route files

---

## Tech Stack (All Portfolios)

- React Router v7 (Framework Mode with SSR)
- TailwindCSS v4
- TypeScript
- Vite
