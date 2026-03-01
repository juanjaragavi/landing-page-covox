# Copilot Instructions — COVOX AI Landing Page

## Project Overview

Spanish-language marketing landing page for COVOX AI, a conversational AI SaaS platform. Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4 (beta)**, and **Framer Motion / Motion**. Deployed on **Vercel**. Uses **pnpm** exclusively — never use npm or yarn.

## Architecture

### Route Structure

- `/` — Main homepage (`src/app/page.tsx`)
- `/cobranzas` — Collections-focused landing variant
- `/agendavisitas` — Appointment-scheduling landing variant
- `/blog/*` — Static blog posts (JSX pages, not MDX at runtime)
- `/api/contact` — POST endpoint for lead capture form (nodemailer → Gmail/SMTP)

Each landing variant (`cobranzas`, `agendavisitas`) replicates the homepage section layout but swaps the **Hero wrapper** and **StatsSection** for industry-specific versions. Shared sections (LaSolucion, ComoFunciona, Pricing, FAQ, etc.) are reused across all variants.

### Component Organization

- `src/components/ui/` — Section-level UI components (Hero, Pricing, FAQ, Navbar, Footer, etc.)
- `src/components/wrappers/` — **Hero wrapper pattern**: `HomeHero`, `CobranzasHero`, `AgendaVisitasHero` each pass variant-specific `title` and `description` (as JSX `ReactNode`) to the shared `Hero` component
- `src/components/` — Reusable animation primitives (`Fade`, `Entry`, `Scale`) and base UI (`Button`, `Divider`, `Table`)
- `public/` — SVG logo components as `.tsx` files (`CovoxAIMark.tsx`, `CovoxAILogo.tsx`) and static images

### Animation Pattern

Three reusable animation wrappers export Container + element pairs using Motion variants:

- `Fade` → `FadeContainer`, `FadeDiv`, `FadeSpan` (opacity + translate Y)
- `Entry` → `EntryContainer`, `EntryDiv`, `EntrySpan` (opacity + blur + translate Y)
- `Scale` → `ScaleContainer`, `ScaleDiv`, `ScaleSpan` (opacity + scale)

All use `motion/react` (not `framer-motion`) for the animation library. Some older components still import from `framer-motion` — both packages are installed. Use `motion/react` for new code. Spring transitions require `type: "spring" as const` for TypeScript compatibility.

### Styling Conventions

- **Tailwind CSS v4 beta** via `@tailwindcss/postcss` — config is in `globals.css` using `@theme` directive (not `tailwind.config.js`)
- Brand color: `#77FF00` (lime green) — used consistently via direct hex in classes (`bg-[#77FF00]`, `text-[#77FF00]`)
- Dark theme only: `html.dark`, `bg-gray-900` body, light text on dark backgrounds
- `cx()` utility from `src/lib/utils.ts` wraps `clsx` + `tailwind-merge` — always use this for conditional classes
- `Button` component uses `tailwind-variants` (`tv()`) with variants: `primary`, `secondary`, `light`, `ghost`, `destructive`

## Key Conventions

- **Language**: All user-facing copy is **Spanish** (Latin American). Code, comments, and variable names are in English.
- **Path alias**: `@/*` maps to `./src/*` — always use `@/components/...`, `@/lib/...`, `@/app/...`
- **"use client"** directive: Required on all components using hooks, motion, or browser APIs. Section components in `ui/` are typically client components; page files are server components that compose them.
- **Lazy loading in layout**: Navbar, Footer, BackToTop are `lazy()` loaded with `Suspense` in the root layout.
- **Contact form**: Hero contains an inline lead-capture form that posts to `/api/contact` as `FormData`. Country phone code selector defaults to Colombia (`+57`).
- **Analytics**: GTM (`GTM-TQS67W5F`), Facebook Pixel, and Hotjar are inline scripts in the root layout `<head>`.
- **MDX**: Configured via `@next/mdx` with `remark-gfm`. Custom MDX component overrides in `mdx-components.tsx` at project root. Blog posts currently use plain JSX pages, not MDX files.
- **Site config**: Centralized metadata in `src/app/siteConfig.ts` — use this for site name, URL, description.
- **TypeScript strict mode** with `noUnusedLocals` and `noUnusedParameters` enabled.

## Commands

```bash
pnpm dev          # Start dev server (Next.js)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # ESLint
```

## When Adding a New Landing Variant

1. Create `src/app/<slug>/page.tsx` — copy structure from `src/app/cobranzas/page.tsx`
2. Create `src/components/wrappers/<Name>Hero.tsx` — pass variant-specific title/description JSX to `<Hero>`
3. Create `src/components/ui/<Name>StatsSection.tsx` if stats differ from default
4. Update `Hero.tsx`'s `getSimplifiedPageSlug()` if the new slug needs form-routing logic
