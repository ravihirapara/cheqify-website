# Story 10.2: Structured Data & Sitemap

Status: ready-for-dev

## Story

As a search engine,
I want structured data and a sitemap,
so that I can understand the site content and discover all pages.

## Acceptance Criteria

1. **Given** the site is built, **When** the build completes, **Then** XML sitemap is generated covering all pages and blog posts in all 3 languages
2. **Given** the site is built, **When** the build completes, **Then** robots.txt is generated with proper crawl directives and sitemap reference
3. **Given** the homepage is rendered, **When** HTML is generated, **Then** JSON-LD Organization and WebSite schemas are present
4. **Given** a blog post is rendered, **When** HTML is generated, **Then** BlogPosting JSON-LD schema is present

## Tasks / Subtasks

- [ ] Task 1: Configure sitemap generation in next.config or app/sitemap.ts (AC: #1)
  - [ ] 1.1: Create src/app/sitemap.ts that generates all page URLs in all 3 locales
  - [ ] 1.2: Include blog post URLs dynamically from content/blog
- [ ] Task 2: Create robots.txt (AC: #2)
  - [ ] 2.1: Create src/app/robots.ts with Allow all + sitemap reference
- [ ] Task 3: Add JSON-LD structured data to homepage (AC: #3)
  - [ ] 3.1: Add Organization schema (name, url, logo)
  - [ ] 3.2: Add WebSite schema (name, url, searchAction if applicable)
- [ ] Task 4: Add BlogPosting JSON-LD to blog post pages (AC: #4)
  - [ ] 4.1: Add BlogPosting schema with headline, datePublished, author, description
- [ ] Task 5: Build and lint verification

## Dev Notes

### Implementation Approach
- Next.js App Router supports `sitemap.ts` and `robots.ts` as special route handlers
- JSON-LD via `<script type="application/ld+json">` in page components
- Sitemap must cover: 8 pages × 3 locales = 24 static URLs + blog posts × 3 locales
- Base URL: https://cheqify.app

### References
- [Source: _bmad-output/planning-artifacts/epics.md#Epic 10 > Story 10.2]
- [Source: _bmad-output/planning-artifacts/prd.md — FR44, FR47, FR48]

## Dev Agent Record
### Agent Model Used
### Completion Notes List
### File List
