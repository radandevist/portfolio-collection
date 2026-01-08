# Portfolio Factory

A pnpm workspace for generating and comparing multiple portfolio design variations.

## Structure

```
portfolio-factory/
├── packages/
│   ├── portfolio-warm-terminal/    # Warm dark + terminal effects
│   ├── portfolio-cold-minimal/     # Ultra-minimal design
│   └── ...                         # More variations
├── PORTFOLIO_PROMPT.md             # Interactive prompt for single portfolio
├── MASTER_PROMPT.md                # Orchestrator for multiple variations
├── pnpm-workspace.yaml
└── package.json
```

## Quick Start

```bash
# Install pnpm if needed
npm install -g pnpm

# Install all packages
pnpm install

# Run a specific portfolio
pnpm --filter @portfolio/warm-terminal dev

# Build all portfolios
pnpm build
```

## Available Portfolios

| Package | Style | Status |
|---------|-------|--------|
| @portfolio/warm-terminal | Warm dark + ASCII/terminal | ✅ Ready |

## Creating New Variations

1. Copy the **PORTFOLIO_PROMPT.md** to your AI assistant
2. Answer the interactive questions
3. The AI will generate a new package in `packages/`

Or use **MASTER_PROMPT.md** to generate multiple variations at once.

## Tech Stack (All Variations)

- React Router v7 (framework mode)
- TailwindCSS v4
- mdx-bundler
- TypeScript

## Commands

```bash
# Development
pnpm --filter <package-name> dev

# Build specific
pnpm --filter <package-name> build

# Build all
pnpm build

# Clean all
pnpm clean
```
