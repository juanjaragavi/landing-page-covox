# CLAUDE.MD - COVOX AI Landing Page

## Project Identity

**Product:** COVOX AI — Conversational AI SaaS platform
**Purpose:** Spanish-language marketing landing page with multi-variant architecture
**Domain:** covox.io
**Company:** COVOX AI
**Market:** Latin America (Spanish)
**Organization:** TopNetworks, Inc. (parent)

---

## Tech Stack

| Layer      | Technology                              | Version       |
| ---------- | --------------------------------------- | ------------- |
| Framework  | Next.js (App Router)                    | 15.5.12       |
| UI         | React                                   | 19.0.0        |
| Language   | TypeScript (strict)                     | 5.7.3         |
| Styling    | Tailwind CSS v4 beta                    | 4.0.0-beta.3  |
| Animation  | motion (`motion/react`)                 | 12.0.1        |
| Icons      | @remixicon/react, @tabler/icons-react   | 4.6.0, 3.30.0 |
| Components | tailwind-variants, @radix-ui/react-slot | 0.3.1, 1.1.1  |
| Email      | nodemailer                              | 6.10.0        |
| Content    | @next/mdx, remark-gfm, gray-matter      | —             |
| Font       | Geist Sans (geist package)              | 1.3.1         |
| Deploy     | Vercel                                  | —             |

**Package manager:** pnpm (strictly enforced via `engine-strict=true`). Never use npm or yarn.

---

## Commands

```bash
pnpm dev          # Dev server (localhost:3000)
pnpm build        # Production build
pnpm start        # Production server
pnpm lint         # ESLint
```

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Main homepage (server component)
│   ├── cobranzas/page.tsx          # Collections variant
│   ├── agendavisitas/page.tsx      # Appointment-scheduling variant
│   ├── multicanal/page.tsx         # Multi-channel sales variant
│   ├── blog/                       # Blog listing + [slug] posts
│   ├── api/contact/route.ts        # Lead capture POST endpoint
│   ├── layout.tsx                  # Root layout (GTM, Hotjar, FB Pixel)
│   ├── globals.css                 # Tailwind v4 @theme config + keyframes
│   └── siteConfig.ts               # Centralized site metadata
├── components/
│   ├── ui/                         # Section-level components (Hero, Pricing, FAQ, etc.)
│   │   └── ComoFunciona/           # How-it-works section
│   ├── wrappers/                   # Hero variant wrappers (HomeHero, CobranzasHero, etc.)
│   ├── Fade.tsx, Entry.tsx, Scale.tsx  # Animation primitives
│   └── Button.tsx                  # TV-based variant button
└── lib/
    ├── utils.ts                    # cx() utility (clsx + tailwind-merge)
    ├── countryData.ts              # Phone codes (default: Colombia +57)
    └── useScroll.ts                # Custom scroll tracking hook
```

---

## Architecture Patterns

### Landing Variant Pattern

Each landing page variant shares the same section layout but swaps Hero and StatsSection:

1. **Page file** (`src/app/<slug>/page.tsx`) — Server component composing sections
2. **Hero wrapper** (`src/components/wrappers/<Name>Hero.tsx`) — Passes variant-specific `title` and `description` (JSX `ReactNode`) to the shared `Hero` component
3. **Stats section** (`src/components/ui/<Name>StatsSection.tsx`) — Variant-specific stats
4. **Shared sections** — LaSolucion, ComoFunciona, Pricing, FAQ, Testimonial, CallToAction reused across all variants

**Active variants:** `home`, `cobranzas`, `agendavisitas`, `multicanal`

### Adding a New Landing Variant

1. Create `src/app/<slug>/page.tsx` (copy from `src/app/cobranzas/page.tsx`)
2. Create `src/components/wrappers/<Name>Hero.tsx`
3. Create `src/components/ui/<Name>StatsSection.tsx` if stats differ
4. Update `Hero.tsx` `getSimplifiedPageSlug()` for form tracking

### Animation Primitives

Three reusable wrappers in `src/components/`:

- **Fade** — `FadeContainer`, `FadeDiv`, `FadeSpan` (opacity + translateY, staggered children)
- **Entry** — `EntryContainer`, `EntryDiv`, `EntrySpan` (opacity + blur + translateY)
- **Scale** — `ScaleContainer`, `ScaleDiv`, `ScaleSpan` (opacity + scale)

All use spring transitions with `type: "spring" as const` for TypeScript safety.

### Contact Form Flow

1. Hero form collects: name, email, phone (with country code), reason, message
2. Posts `FormData` to `/api/contact`
3. Also sends to Make.com webhook for CRM automation
4. Email delivery hierarchy: Gmail > SMTP > Ethereal > Sendmail
5. Default destination: `camilo@covox.io`

---

## Styling Rules

- **Tailwind v4 beta** — Config in `globals.css` via `@theme` directive (NOT `tailwind.config.js`)
- **Brand color:** `#77FF00` (lime green) — use arbitrary values: `bg-[#77FF00]`, `text-[#77FF00]`
- **Dark theme only:** `html.dark` class, `bg-gray-900` base, light text on dark
- **Class utility:** Always use `cx()` from `@/lib/utils` for conditional classes
- **Button variants:** Use `tailwind-variants` (`tv()`) — `primary`, `secondary`, `light`, `ghost`, `destructive`
- **Prettier:** Double quotes, no semicolons, trailing commas, 80 char width, tailwind function sorting for `tv` and `cx`

---

## Code Conventions

- **Language:** User-facing copy in **Spanish** (Latin American). Code, variables, comments in English.
- **Path alias:** `@/*` maps to `./src/*` — always use `@/components/...`, `@/lib/...`, `@/app/...`
- **`"use client"`:** Required on components using hooks, motion, or browser APIs. Page files are server components.
- **Animations:** Use `motion/react` for new code (NOT `framer-motion`). Both packages installed; migration is ongoing.
- **Lazy loading:** Navbar, Footer, BackToTop are `React.lazy()` + `Suspense` in root layout.
- **No `console.log()`:** Follow TopNetworks logging standards.
- **TypeScript strict:** `noUnusedLocals`, `noUnusedParameters` enabled. No `any` without justification.
- **File naming:** Section components use `PascalCase.tsx`. Utility/config files use `camelCase.ts`.
- **Import order:** React > Next.js > third-party > local (`@/` alias)

---

## Analytics (Hardcoded in Layout)

| Service            | ID                 |
| ------------------ | ------------------ |
| Google Tag Manager | `GTM-TQS67W5F`     |
| Facebook Pixel     | `1293950901708265` |
| Hotjar             | `5353129`          |

Form submissions include `page` slug (`home`, `cobranzas`, `agendavisitas`, `multicanal`) and `source: formulario_landing_page_hero`.

---

## Environment Variables

```bash
# Email (required for contact form)
EMAIL_USER=               # Gmail address
EMAIL_PASSWORD=           # Gmail app password
DESTINATION_EMAIL=        # Recipient (default: camilo@covox.io)

# SMTP fallback (optional)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
SMTP_SECURE=
```

---

## Key Dependencies

- **motion** (`motion/react`) — Preferred animation library for new code
- **framer-motion** — Legacy, still used in some components (do not add new imports)
- **tailwind-variants** — Button and component variant system
- **@remixicon/react** — Primary icon library
- **@tabler/icons-react** — Secondary icon library
- **nodemailer** — Email delivery for contact form
- **@next/mdx + remark-gfm** — MDX support for blog content
- **gray-matter** — Frontmatter parsing
- **geist** — Font package (Geist Sans)

---

## Deployment

- **Platform:** Vercel
- **Build:** `pnpm build`
- **Install:** `pnpm install`
- **Node:** >=18.0.0
- **pnpm:** >=8.0.0

---

## Git

- **Current branch:** `feature/multicanal-landing`
- **Main branch:** `feature/landing-pages-fixes`
- **Convention:** Conventional commits (`feat:`, `fix:`, `chore:`, etc.)

---

## Common Gotchas

1. **Tailwind v4 beta** — No `tailwind.config.js`. All theme config lives in `globals.css` `@theme` block.
2. **Motion imports** — Use `import { motion } from "motion/react"`, not `"framer-motion"`.
3. **Spring type assertion** — Always write `type: "spring" as const` in transition objects.
4. **Country selector** — Defaults to Colombia (+57). Data in `src/lib/countryData.ts`.
5. **Blog posts** — Currently JSX pages in `src/app/blog/`, not MDX files (despite MDX being configured).
6. **SVG logos** — Live as `.tsx` components in `public/` (`CovoxAIMark.tsx`, `CovoxAILogo.tsx`).
7. **Make.com webhook** — Hardcoded URL in Hero.tsx for lead routing to CRM.
8. **MDX overrides** — Custom component map in `mdx-components.tsx` at project root.
