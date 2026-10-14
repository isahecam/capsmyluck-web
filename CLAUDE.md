# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Proyecto

**Caps My Luck** es el sitio web de una tienda de gorras, con entregas en Rafael Lara Grajales, Puebla (fuente: `metadata` en `app/layout.tsx`).

Todo el proyecto está en **español de México** (`<html lang="es-MX">`): contenido visible, metadatos, textos de UI y mensajes de commit. Escribe el contenido nuevo en ese idioma.

## Commands

Package manager is **pnpm** (pinned via `packageManager`).

- `pnpm dev` — dev server (Turbopack) at http://localhost:3000
- `pnpm build` / `pnpm start` — production build / serve
- `pnpm lint` / `pnpm lint:fix` — oxlint (not ESLint)
- `pnpm fmt` / `pnpm fmt:check` — oxfmt (not Prettier); also sorts imports and Tailwind classes
- `pnpm typecheck` — `next typegen && tsc --noEmit` (typegen generates route types such as the global `LayoutProps<"/">`)
- `pnpm knip` — unused files/exports/deps

There is no test runner configured yet.

## Stack

Next.js 16 App Router + React 19, TypeScript strict, Tailwind CSS v4, shadcn/ui (`base-sera` style, built on `@base-ui/react`, not Radix), lucide icons. Path alias `@/*` → repo root.

`next.config.ts` enables `cacheComponents`, `partialPrefetching`, `reactCompiler` (so avoid manual `useMemo`/`useCallback` memoization) and wires Tailwind through `@tailwindcss/turbopack` as a Turbopack CSS loader — there is no PostCSS config. Check `node_modules/next/dist/docs/` before using Next APIs (see AGENTS.md).

## Styling rules (enforced by lint)

The `@shadcn/lint` oxlint plugin errors on raw colors, inline styles, arbitrary values, and dynamic class strings (`shadcn/require-static-classes`); restyling shadcn components (`shadcn/no-restyle`) is only a warning. Use the theme tokens from `app/globals.css` (`bg-card`, `text-primary`, etc.) instead of ad-hoc colors. Compose classes with `cn` from `@/lib/utils` (re-exported from the `cn` package), which merges conflicting Tailwind classes.

Theme lives entirely in `app/globals.css` as oklch CSS variables (`:root` and `.dark`). Fonts are set in `app/layout.tsx` via `next/font` CSS variables: `--font-sans` (Barlow Condensed), `--font-heading` (Pirata One), `--font-geist-mono`.

`components/ui/` holds shadcn-generated components (add with `pnpm dlx shadcn add <name>`); it is excluded from both oxlint and oxfmt, so don't hand-reformat it. Keep these files exactly as shadcn generates them so a reinstall (`--overwrite`) loses nothing: don't add variants for one-off designs; style the component through `className` where it's used instead.

## Git hooks & commits (lefthook)

- **pre-commit**: oxlint `--fix` + oxfmt on staged files, re-staged automatically.
- **commit-msg**: commitlint — Conventional Commits, header ≤ 72 chars, lower-case scope, subject ≥ 3 chars, breaking changes need both `!` and a `BREAKING CHANGE:` footer. See `commitlint.config.ts`.
- **pre-push**: `pnpm typecheck` then `pnpm knip` (sequential on purpose — parallel hangs on Windows).
