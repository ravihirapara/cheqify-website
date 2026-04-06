# Story 6.1: Blog Listing Page

Status: done

## Story

As a visitor,
I want to browse a list of blog articles,
so that I can find useful content about cheque management.

## Acceptance Criteria

1. **Given** the visitor navigates to /blog, **When** the page loads, **Then** blog articles are displayed in a card-based grid layout
2. **Given** each blog card is rendered, **When** the visitor views it, **Then** it shows title, description, date, author, and featured image placeholder
3. **Given** the blog listing is rendered, **When** the visitor views the top, **Then** a featured/latest post is highlighted at the top
4. **Given** the visitor is on any locale, **When** the page renders, **Then** articles are filtered by the current language

## Dev Notes

- Blog files at `content/blog/{lang}/{slug}.md` — parsed with gray-matter + remark
- Frontmatter: title, description, date, author, slug, lang, tags, image
- Layout from Stitch: featured post bento card + grid of post cards
- Content from product brief: cheque management topics for Indian market

## Dev Agent Record
### Agent Model Used
### Completion Notes List
### File List
