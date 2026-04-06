# Story 6.2: Individual Blog Post Page

Status: done

## Story

As a visitor,
I want to read a full blog article,
so that I can learn about cheque management topics.

## Acceptance Criteria

1. **Given** the visitor clicks on a blog card, **When** the blog post page loads, **Then** the full article renders from markdown with proper formatting
2. **Given** the post is rendered, **When** the visitor views it, **Then** title, date, author, and tags are displayed
3. **Given** the post is rendered, **When** the visitor reads it, **Then** an in-article "Start Free" CTA is displayed
4. **Given** the post is rendered, **When** the visitor wants to go back, **Then** navigation back to blog listing is available

## Dev Notes

- Render markdown with remark + remark-html
- Dynamic route: `src/app/[locale]/blog/[slug]/page.tsx`
- generateStaticParams from content files
- In-article CTA using common.cta.startFree translation

## Dev Agent Record
### Agent Model Used
### Completion Notes List
### File List
