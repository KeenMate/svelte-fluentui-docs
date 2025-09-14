# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Sveltepress documentation site built with SvelteKit 2, Svelte 5, and TypeScript. It serves as the documentation and examples site for the `svelte-fluentui` package, which is located at `../svelte-fluentui`. The package repository is at https://github.com/keenmate/svelte-fluentui. The site uses the `@sveltepress/theme-default` theme for content-centered documentation generation.

## Development Commands

- **Start development server**: `pnpm dev` (uses Vite dev server)
- **Build for production**: `pnpm build` (generates static site to `dist/` directory)

## Docker Deployment

- **Build Docker image**: `make docker-build`
- **Run in Docker**: `make docker-run` (serves on http://localhost:8080)
- **Stop Docker container**: `make docker-stop`

## URL Configuration

To generate absolute URLs instead of relative paths:

1. **For subdirectory deployment**: Set `BASE_PATH` environment variable
   ```bash
   BASE_PATH="/docs" pnpm build
   ```

2. **For Docker with absolute URLs**:
   ```bash
   docker build --build-arg BASE_PATH="/your-path" -t svelte-fluentui-docs .
   ```

3. **For root domain deployment**: No configuration needed (default behavior)

## Architecture

- **Framework**: SvelteKit 2 with Svelte 5 and TypeScript
- **Static Site Generator**: Sveltepress with default theme
- **Build Tool**: Vite
- **Package Manager**: pnpm (locked to version 9.15.0)
- **Adapter**: `@sveltejs/adapter-static` for static site generation
- **Output Directory**: `dist/` (configured in svelte.config.js)

## File Structure

- `src/routes/+page.md` - Main homepage content (markdown with frontmatter)
- `src/routes/+layout.svelte` - Root layout component
- `src/routes/+layout.ts` - Enables prerendering for all routes
- `src/app.d.ts` - TypeScript declarations for Sveltepress virtual modules
- `vite.config.ts` - Sveltepress plugin configuration with theme settings
- `svelte.config.js` - SvelteKit configuration with static adapter
- `static/` - Static assets (images, SVGs)

## Configuration Notes

- Prerendering is enabled globally via `src/routes/+layout.ts`
- Svelte config supports both `.svelte` and `.md` file extensions
- Theme configuration in `vite.config.ts` includes navbar, sidebar, and site metadata
- TypeScript is strictly configured with ESNext modules