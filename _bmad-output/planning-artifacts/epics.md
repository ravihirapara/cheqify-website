---
stepsCompleted: [step-01-validate-prerequisites, step-02-design-epics, step-03-create-stories, step-04-final-validation]
status: 'complete'
completedAt: '2026-04-03'
inputDocuments:
  - "_bmad-output/planning-artifacts/prd.md"
  - "_bmad-output/planning-artifacts/architecture.md"
  - "_bmad-output/planning-artifacts/ux-design-specification.md"
---

# Cheqify.app - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for Cheqify.app, decomposing the requirements from the PRD, UX Design, and Architecture into implementable stories.

## Requirements Inventory

### Functional Requirements

FR1: Visitor can navigate between all pages via a persistent sticky header
FR2: Visitor can access "Start Free" CTA from any page without scrolling
FR3: Visitor can access "Login" from the header on any page
FR4: Visitor can switch between English, Hindi, and Gujarati languages
FR5: Visitor can toggle between light and dark mode
FR6: Visitor can navigate to key pages via the footer
FR7: System preserves user's language and theme preferences across sessions
FR8: Visitor can read the hero headline and understand the product value within 5 seconds
FR9: Visitor can watch a demo video from the homepage
FR10: Visitor can see supported bank logos to confirm compatibility
FR11: Visitor can view trust signals (security, bank count, device support, free tier)
FR12: Visitor can understand the product workflow via a "How it Works" section
FR13: Visitor can explore features via tabbed content (Cheque Printing, Lifecycle Tracking, Owner Dashboard)
FR14: Visitor can see social proof statistics (cheques printed, users, banks supported)
FR15: Visitor can read user testimonials
FR16: Visitor can click a final CTA section to sign up
FR17: Visitor can explore detailed feature breakdowns organized by product pillars via tabs
FR18: Visitor can view product screenshots for each feature area
FR19: Visitor can understand capabilities of Cheque Printing, Lifecycle Tracking, and Owner Dashboard individually
FR20: Visitor can view all pricing plans with clear free tier prominence
FR21: Visitor can compare features across plans via a comparison table
FR22: Visitor can sign up for any plan via per-plan CTA buttons
FR23: Visitor can see "No credit card required" messaging
FR24: Visitor can browse blog articles in a card-based listing layout
FR25: Visitor can read individual blog articles
FR26: Visitor can discover blog content in all 3 supported languages
FR27: System renders blog articles from static markdown files (MVP) with Sanity.io migration path
FR28: Visitor can see in-article CTAs to sign up for Cheqify
FR29: Visitor can submit a contact inquiry via a form (name, email, subject, message)
FR30: System sends form submissions to Formspree for processing
FR31: Visitor can view support email addresses and contact information
FR32: Visitor can see average response time information
FR33: Visitor can read the company story and mission
FR34: Visitor can view team information
FR35: Visitor can understand why Cheqify was built
FR36: Visitor can read the full privacy policy covering data collection, usage, and rights
FR37: Visitor can understand what data is collected via contact form, analytics, and chat
FR38: Visitor can find contact information for privacy-related inquiries
FR39: Visitor can accept or decline tracking cookies via a consent banner
FR40: System loads Google Analytics and Tawk.to only after cookie consent is granted
FR41: System remembers cookie consent preference across sessions
FR42: Visitor can initiate a live chat conversation from any page via Tawk.to widget
FR43: System loads Tawk.to widget asynchronously without blocking page render
FR44: System generates XML sitemap covering all pages and blog posts in all languages
FR45: System renders proper meta tags (title, description, Open Graph, Twitter Card) per page per language
FR46: System includes hreflang tags linking language variants of each page
FR47: System includes JSON-LD structured data (Organization, WebSite, BlogPosting)
FR48: System generates robots.txt with proper crawl directives
FR49: All 7 pages render fully in English, Hindi, and Gujarati
FR50: Blog articles are available in all 3 languages
FR51: System serves language-specific URLs (e.g., /hi/features, /gu/pricing)
FR52: Language switching preserves the current page context

### NonFunctional Requirements

NFR1: Lighthouse Performance score 90+
NFR2: LCP under 2.5 seconds on mobile 3G
NFR3: FID under 100ms
NFR4: CLS under 0.1
NFR5: Time to Interactive under 3 seconds on mobile
NFR6: Per-page JavaScript bundle under 150KB
NFR7: Images optimized with lazy loading for below-fold content
NFR8: Third-party scripts (Tawk.to, GA4) load asynchronously, never blocking page render
NFR9: Font loading uses font-display: swap
NFR10: All pages served over HTTPS
NFR11: No tracking scripts load before explicit cookie consent
NFR12: Contact form protected against spam (Formspree built-in)
NFR13: No sensitive data stored on the website
NFR14: Content Security Policy headers configured
NFR15: No inline scripts — all JavaScript from trusted sources only
NFR16: Static site on CDN supports unlimited concurrent visitors without server scaling
NFR17: Site fully functional under 10x expected traffic
NFR18: WCAG AA compliance — Lighthouse Accessibility score 90+
NFR19: Minimum 16px body text on all devices
NFR20: Minimum 44x44px touch targets on mobile
NFR21: Color contrast 4.5:1 for body text, 3:1 for large text
NFR22: All interactive elements keyboard-accessible with visible focus indicators
NFR23: Screen reader compatible — semantic HTML, ARIA labels, skip-to-content link
NFR24: Animations respect prefers-reduced-motion
NFR25: Hindi and Gujarati text renders with appropriate line-height
NFR26: Formspree submission completes within 3 seconds with user feedback
NFR27: Tawk.to loads within 5 seconds of page render (after consent) without layout shift
NFR28: GA4 tracks page views and CTA clicks accurately across all languages
NFR29: All third-party integrations degrade gracefully — site usable if any integration fails
NFR30: Lighthouse SEO score 95+
NFR31: All pages indexed by Google within 30 days of launch
NFR32: XML sitemap auto-updates when blog posts are added
NFR33: Page titles under 60 chars, meta descriptions under 160 chars across all languages
NFR34: Structured data validates without errors in Google Rich Results Test

### Additional Requirements

**From Architecture:**
- Starter template: Extend existing create-next-app with shadcn/ui init (impacts Epic 1 Story 1)
- Dependencies to install: next-themes, next-intl, gray-matter, remark, remark-html, @formspree/react
- i18n: next-intl with SSG, generateStaticParams for all locale variants, URL prefixes /en/, /hi/, /gu/
- Theming: next-themes with ThemeProvider, CSS variables for light/dark tokens
- Blog: Static markdown files in content/blog/{lang}/{slug}.md, parsed with gray-matter + remark
- Cookie consent: Custom component + localStorage, gates GA4 and Tawk.to
- CSP security headers in next.config.ts
- CI/CD: Vercel auto-deploy + GitHub Actions for lint/type-check/build on PRs
- Playwright E2E testing for page renders, navigation, language switching, theme toggle
- Environment variables: .env.local for Formspree ID, GA4 ID, Tawk.to property ID

**From UX Design:**
- Design system: shadcn/ui with Cheqify brand tokens (teal #00b4a6, navy #0d2137)
- Typography: Inter font, self-hosted, 16px minimum body
- Icons: Lucide Icons, 24px default, 1.5px stroke
- Component customization: Rounded buttons, subtle card borders, underline tabs with teal active indicator
- Sticky header with "Start Free" always visible
- Static hero (no carousel), tabbed features, trust bar, bank logos strip
- Stitch design export available for all 7 pages as visual reference

### FR Coverage Map

FR1: Epic 2 - Sticky header navigation
FR2: Epic 2 - "Start Free" CTA always visible
FR3: Epic 2 - "Login" in header
FR4: Epic 1 - Language switching infrastructure
FR5: Epic 1 - Dark/light mode toggle
FR6: Epic 2 - Footer navigation
FR7: Epic 1 - Preference persistence (language + theme)
FR8: Epic 3 - Hero headline clarity
FR9: Epic 3 - Demo video embed
FR10: Epic 3 - Bank logos strip
FR11: Epic 3 - Trust signals bar
FR12: Epic 3 - How it Works section
FR13: Epic 3 - Tabbed features section
FR14: Epic 3 - Social proof stats
FR15: Epic 3 - Testimonials
FR16: Epic 3 - Final CTA section
FR17: Epic 4 - Feature breakdowns via tabs
FR18: Epic 4 - Product screenshots per feature
FR19: Epic 4 - Individual pillar understanding
FR20: Epic 5 - Pricing plans display
FR21: Epic 5 - Feature comparison table
FR22: Epic 5 - Per-plan CTA buttons
FR23: Epic 5 - "No credit card required" messaging
FR24: Epic 6 - Blog listing layout
FR25: Epic 6 - Individual blog articles
FR26: Epic 6 - Blog in all 3 languages
FR27: Epic 6 - Markdown blog rendering
FR28: Epic 6 - In-article CTAs
FR29: Epic 7 - Contact form submission
FR30: Epic 7 - Formspree processing
FR31: Epic 7 - Support contact info
FR32: Epic 7 - Response time info
FR33: Epic 8 - Company story and mission
FR34: Epic 8 - Team information
FR35: Epic 8 - Why Cheqify was built
FR36: Epic 8 - Privacy policy content
FR37: Epic 8 - Data collection disclosure
FR38: Epic 8 - Privacy contact info
FR39: Epic 9 - Cookie consent banner
FR40: Epic 9 - Consent-gated script loading
FR41: Epic 9 - Consent preference persistence
FR42: Epic 7 - Tawk.to live chat widget
FR43: Epic 7 - Async Tawk.to loading
FR44: Epic 10 - XML sitemap generation
FR45: Epic 10 - Per-page per-language meta tags
FR46: Epic 10 - hreflang tags
FR47: Epic 10 - JSON-LD structured data
FR48: Epic 10 - robots.txt
FR49: Epic 10 - All pages in 3 languages
FR50: Epic 10 - Blog in 3 languages
FR51: Epic 10 - Language-specific URLs
FR52: Epic 10 - Language switching preserves page

## Epic List

### Epic 1: Project Foundation & Design System
Users can view a professionally styled website with consistent branding, dark/light mode, and multi-language support infrastructure.
**FRs covered:** FR4, FR5, FR7

### Epic 2: Site Navigation & Layout
Visitors can navigate between all pages via sticky header, footer, and mobile menu with "Start Free" and "Login" always accessible.
**FRs covered:** FR1, FR2, FR3, FR6

### Epic 3: Homepage
Visitors can land on the homepage, instantly understand Cheqify's value, watch a demo, see bank compatibility, explore features via tabs, and click "Start Free" to sign up.
**FRs covered:** FR8, FR9, FR10, FR11, FR12, FR13, FR14, FR15, FR16

### Epic 4: Features Page
Visitors can explore detailed feature breakdowns of Cheque Printing, Lifecycle Tracking, and Owner Dashboard via tabbed sections with product screenshots.
**FRs covered:** FR17, FR18, FR19

### Epic 5: Pricing Page
Visitors can view all pricing plans, compare features across plans, and sign up for any plan with clear free tier prominence.
**FRs covered:** FR20, FR21, FR22, FR23

### Epic 6: Blog
Visitors can browse blog articles, read individual posts, and discover content in all 3 languages, with in-article CTAs driving sign-ups.
**FRs covered:** FR24, FR25, FR26, FR27, FR28

### Epic 7: Contact Page & Live Chat
Visitors can submit contact inquiries via Formspree and initiate live chat via Tawk.to from any page.
**FRs covered:** FR29, FR30, FR31, FR32, FR42, FR43

### Epic 8: About Us & Privacy Policy Pages
Visitors can read the company story, view team info, and access the full privacy policy.
**FRs covered:** FR33, FR34, FR35, FR36, FR37, FR38

### Epic 9: Cookie Consent & Analytics
Visitors can accept/decline cookies (gating GA4 and Tawk.to), with PostHog product analytics (session replay, heatmaps, exceptions, custom events) running as first-party analytics with input masking, and preferences persisted across sessions.
**FRs covered:** FR39, FR40, FR41

### Epic 10: SEO & Multi-Language Content
All pages render in 3 languages with proper SEO (sitemap, meta tags, hreflang, structured data, robots.txt).
**FRs covered:** FR44, FR45, FR46, FR47, FR48, FR49, FR50, FR51, FR52

## Epic 1: Project Foundation & Design System

Establish the project foundation with shadcn/ui, theming, i18n infrastructure, and brand design tokens so that all subsequent pages render with consistent styling, dark/light mode, and multi-language support.

### Story 1.1: Initialize shadcn/ui and Brand Design Tokens

As a developer,
I want the project initialized with shadcn/ui and Cheqify brand tokens configured,
So that all components use consistent brand colors and styling.

**Acceptance Criteria:**

**Given** the existing Next.js project
**When** shadcn/ui is initialized and brand tokens are configured
**Then** CSS variables are defined for light mode (primary teal #00b4a6, background white, foreground navy #0d2137, card #f8fafb)
**And** CSS variables are defined for dark mode (primary teal #00b4a6, background navy #0d2137, foreground off-white #f1f5f9, card #132d46)
**And** Inter font is self-hosted with font-display: swap
**And** Lucide Icons package is installed
**And** cn() utility is available at ~/lib/utils
**And** base shadcn/ui components are added (Button, Card, Tabs, NavigationMenu, Sheet, DropdownMenu, Badge, Input)

### Story 1.2: Dark/Light Mode Theme Switching

As a visitor,
I want to toggle between dark and light mode,
So that I can view the website in my preferred visual style.

**Acceptance Criteria:**

**Given** the visitor is on any page
**When** they click the theme toggle
**Then** the entire site switches between light and dark mode instantly
**And** the preference is persisted in localStorage
**And** on first visit, system preference (prefers-color-scheme) is detected
**And** no flash of wrong theme occurs on page load

### Story 1.3: Internationalization Infrastructure

As a visitor,
I want the website to support English, Hindi, and Gujarati,
So that I can browse in my preferred language.

**Acceptance Criteria:**

**Given** next-intl is configured with App Router
**When** the visitor navigates to /en/, /hi/, or /gu/ URL prefixes
**Then** the page renders in the corresponding language
**And** translation files exist at messages/en.json, messages/hi.json, messages/gu.json
**And** generateStaticParams pre-renders all pages in all 3 locales at build time
**And** the default locale (English) is accessible at the root URL /
**And** language preference is persisted in localStorage

## Epic 2: Site Navigation & Layout

Visitors can navigate between all pages via a sticky header, footer, and mobile-responsive menu with "Start Free" and "Login" always accessible.

### Story 2.1: Sticky Header with Navigation

As a visitor,
I want a sticky header with navigation links,
So that I can easily move between pages from anywhere on the site.

**Acceptance Criteria:**

**Given** the visitor is on any page
**When** they scroll down the page
**Then** the header remains visible at the top (sticky)
**And** navigation links are displayed: Home, Features, Pricing, Blog, Contact, About
**And** the Cheqify logo links to the homepage
**And** the header includes the language switcher and theme toggle
**And** "Login" button (ghost style) links to https://app.cheqify.app/login
**And** "Start Free" button (teal, prominent) links to https://app.cheqify.app/register

### Story 2.2: Mobile Navigation Menu

As a mobile visitor,
I want a hamburger menu for navigation,
So that I can access all pages on smaller screens.

**Acceptance Criteria:**

**Given** the visitor is on a mobile device (< 1024px)
**When** they tap the hamburger icon
**Then** a Sheet (slide-out menu) opens with all navigation links
**And** "Start Free" and "Login" buttons are visible in the mobile menu
**And** language switcher and theme toggle are accessible in the mobile menu
**And** tapping a link closes the menu and navigates to the page
**And** tapping outside the menu closes it

### Story 2.3: Site Footer

As a visitor,
I want a clean footer with essential links,
So that I can find important pages and information.

**Acceptance Criteria:**

**Given** the visitor scrolls to the bottom of any page
**When** the footer is visible
**Then** it displays the Cheqify logo and brief tagline
**And** links are organized in columns: Product (Features, Pricing), Resources (Blog), Company (About, Contact), Legal (Privacy)
**And** copyright notice with current year is displayed
**And** all footer links work correctly in all 3 languages

## Epic 3: Homepage

Visitors can land on the homepage, instantly understand Cheqify's value, watch a demo, see bank compatibility, explore features, and click "Start Free."

### Story 3.1: Hero Section

As a visitor,
I want to see a clear hero section when I land on the homepage,
So that I instantly understand what Cheqify does and can take action.

**Acceptance Criteria:**

**Given** the visitor lands on the homepage
**When** the page loads
**Then** the hero displays headline "Print Error-Free Cheques in Under 2 Minutes"
**And** subheadline explains the product value
**And** "Start Free" (teal button) links to app.cheqify.app/register
**And** "Watch Demo" (outline button with play icon) is visible
**And** "No credit card required. Free forever for basic use." text appears below CTAs
**And** a product screenshot or demo video thumbnail is displayed on the right (desktop) or below (mobile)
**And** the hero section matches the Stitch design layout

### Story 3.2: Trust Bar and Bank Logos

As a visitor,
I want to see trust signals and supported bank logos,
So that I feel confident Cheqify is reliable and works with my bank.

**Acceptance Criteria:**

**Given** the visitor scrolls past the hero section
**When** the trust bar is visible
**Then** it displays: Bank-Grade Security, 300+ Indian Banks, Works on Any Device, Free Forever
**And** below the trust bar, bank logos are displayed: SBI, HDFC, ICICI, Axis, PNB, Kotak, BOB, Yes Bank, IndusInd + "300+ more"
**And** logos are displayed in a clean horizontal strip

### Story 3.3: How it Works Section

As a visitor,
I want to understand how Cheqify works in simple steps,
So that I can see how easy it is to get started.

**Acceptance Criteria:**

**Given** the visitor scrolls to the How it Works section
**When** the section is visible
**Then** it displays 3 steps: Sign Up → Set Up Your Cheque → Print
**And** each step has an icon and brief description
**And** the section has a clear heading

### Story 3.4: Features Tabs Section

As a visitor,
I want to explore Cheqify's features organized by category,
So that I can understand what the product offers without scrolling endlessly.

**Acceptance Criteria:**

**Given** the visitor scrolls to the features section on the homepage
**When** they see the tabbed interface
**Then** 3 tabs are displayed: Cheque Printing, Lifecycle Tracking, Owner Dashboard
**And** each tab shows relevant content and a product screenshot
**And** clicking a tab switches content smoothly
**And** the default tab (Cheque Printing) is active on load

### Story 3.5: Social Proof, Testimonials, and Final CTA

As a visitor,
I want to see social proof and testimonials,
So that I trust that real users find Cheqify valuable.

**Acceptance Criteria:**

**Given** the visitor scrolls past the features section
**When** the social proof section is visible
**Then** stats bar displays: cheques printed count, user count, banks supported count
**And** testimonial cards display user quotes with name, business type, and location
**And** a final CTA section appears before the footer with "Start Free" and secondary action
**And** the CTA section has compelling messaging about getting started

### Story 3.6: Demo Video Embed

As a visitor,
I want to watch a demo video on the homepage,
So that I can see how easy Cheqify is to use before signing up.

**Acceptance Criteria:**

**Given** the visitor clicks "Watch Demo" or scrolls to the video section
**When** the video player is visible
**Then** the demo video plays within the page (embedded)
**And** the video does not autoplay
**And** the video is lazy-loaded (not blocking page render)
**And** a play button overlay is shown on the video thumbnail

## Epic 4: Features Page

Visitors can explore detailed feature breakdowns of all three product pillars.

### Story 4.1: Features Page with Detailed Tabs

As a visitor,
I want a dedicated features page with detailed breakdowns,
So that I can deeply understand what Cheqify offers before signing up.

**Acceptance Criteria:**

**Given** the visitor navigates to /features
**When** the page loads
**Then** a hero section with features page headline is displayed
**And** tabbed content shows 3 tabs: Cheque Printing, Lifecycle Tracking, Owner Dashboard
**And** each tab includes detailed feature descriptions, bullet points, and product screenshots
**And** the page includes feature highlight cards with icons
**And** a CTA section at the bottom drives sign-ups
**And** the page matches the Stitch features design

## Epic 5: Pricing Page

Visitors can view pricing plans, compare features, and sign up.

### Story 5.1: Pricing Plans Display

As a visitor,
I want to see all pricing plans clearly,
So that I can choose the right plan for my needs.

**Acceptance Criteria:**

**Given** the visitor navigates to /pricing
**When** the page loads
**Then** pricing plans are displayed (Free, Professional, Team) with prices
**And** the Free plan is highlighted as "Recommended"
**And** each plan lists included features
**And** each plan has a "Start Free" CTA button
**And** "No credit card required" messaging is visible

### Story 5.2: Feature Comparison Table

As a visitor,
I want to compare features across plans side by side,
So that I can make an informed decision about upgrading.

**Acceptance Criteria:**

**Given** the visitor scrolls below the pricing cards
**When** the comparison table is visible
**Then** a detailed feature comparison table shows all features across all plans
**And** features are grouped by category (Management, Analytics, etc.)
**And** checkmarks/values indicate feature availability per plan
**And** the table is responsive on mobile (horizontal scroll or stacked layout)

## Epic 6: Blog

Visitors can browse and read blog articles in all 3 languages.

### Story 6.1: Blog Listing Page

As a visitor,
I want to browse a list of blog articles,
So that I can find useful content about cheque management.

**Acceptance Criteria:**

**Given** the visitor navigates to /blog
**When** the page loads
**Then** blog articles are displayed in a card-based grid layout
**And** each card shows title, description, date, author, and featured image
**And** a featured/latest post is highlighted at the top
**And** articles are filtered by the current language

### Story 6.2: Individual Blog Post Page

As a visitor,
I want to read a full blog article,
So that I can learn about cheque management topics.

**Acceptance Criteria:**

**Given** the visitor clicks on a blog card
**When** the blog post page loads
**Then** the full article renders from markdown with proper formatting (headings, lists, code, images)
**And** the post displays title, date, author, and tags
**And** an in-article "Start Free" CTA is displayed
**And** navigation back to blog listing is available

### Story 6.3: Blog Seed Content

As a visitor,
I want useful blog content available at launch,
So that I can discover Cheqify through SEO search results.

**Acceptance Criteria:**

**Given** the blog is live
**When** a visitor browses the blog
**Then** at least 6 seed articles are available in all 3 languages:
**And** Article 1: "Cheqify vs Manual Cheque Writing"
**And** Article 2: "Cheque Bounce: Reasons and Solutions"
**And** Article 3: "Post-Dated Cheques: Rules and Best Practices"
**And** Article 4: "How to Print a Cheque at Home"
**And** Article 5: "How to Avoid Cheque Fraud in India"
**And** Article 6: "What is MICR Code on a Cheque?"
**And** each article has proper frontmatter (title, description, date, author, slug, lang, tags, image)
**And** articles use SEO-friendly tag categories: Cheque Guide, Banking & RBI, Cheque Security, Software Comparison, Cheque Productivity
**And** blog listing supports tag-based filtering with clickable pills
**And** blog posts include prev/next navigation

## Epic 7: Contact Page & Live Chat

Visitors can submit inquiries and start live chat conversations.

### Story 7.1: Contact Page with Formspree Form

As a visitor,
I want to submit a contact inquiry,
So that I can get help or ask about enterprise needs.

**Acceptance Criteria:**

**Given** the visitor navigates to /contact
**When** the page loads
**Then** a contact form is displayed with fields: Full Name, Email, Subject (dropdown), Message
**And** support contact information is displayed (email addresses)
**And** average response time is shown
**And** the form submits to Formspree
**And** form shows success message after submission
**And** form shows error message if submission fails
**And** form validates required fields before submission
**And** the page matches the Stitch contact design

### Story 7.2: Tawk.to Live Chat Integration

As a visitor,
I want to start a live chat,
So that I can get real-time help while browsing.

**Acceptance Criteria:**

**Given** the visitor has accepted cookie consent
**When** the Tawk.to widget loads
**Then** a chat icon appears in the bottom-right corner
**And** clicking the icon opens the chat window
**And** the widget loads asynchronously without blocking page render
**And** the widget does not cause layout shift (CLS < 0.1)
**And** if cookie consent is not given, Tawk.to does not load

## Epic 8: About Us & Privacy Policy Pages

Visitors can learn about the company and read the privacy policy.

### Story 8.1: About Us Page

As a visitor,
I want to learn about the company behind Cheqify,
So that I can trust the product and understand its mission.

**Acceptance Criteria:**

**Given** the visitor navigates to /about
**When** the page loads
**Then** the company story and mission are displayed
**And** "Why we built Cheqify" section explains the problem being solved
**And** team information is displayed with names and roles
**And** company values are presented
**And** a CTA section drives sign-ups
**And** the page matches the Stitch about design

### Story 8.2: Privacy Policy Page

As a visitor,
I want to read the privacy policy,
So that I understand how my data is handled.

**Acceptance Criteria:**

**Given** the visitor navigates to /privacy
**When** the page loads
**Then** the privacy policy is displayed with numbered sections
**And** it covers: Information Collection, How We Use Data, Data Security, Your Privacy Rights
**And** it discloses data collected via: contact form (Formspree), analytics (GA4), live chat (Tawk.to), cookies
**And** contact information for privacy inquiries is provided
**And** the last updated date is displayed

## Epic 9: Cookie Consent & Analytics

Visitors can manage cookie preferences, with analytics loading only after consent.

### Story 9.1: Cookie Consent Banner

As a visitor,
I want to accept or decline tracking cookies,
So that I control what data is collected about me.

**Acceptance Criteria:**

**Given** the visitor arrives on the site for the first time
**When** the page loads
**Then** a cookie consent banner appears (non-intrusive, bottom of screen)
**And** the banner explains what cookies are used for
**And** "Accept" and "Decline" buttons are clearly visible
**And** after accepting, GA4 and Tawk.to scripts load
**And** after declining, no tracking scripts load
**And** the preference is saved in localStorage
**And** on subsequent visits, the banner does not reappear

### Story 9.2: Google Analytics 4 Integration

As a product owner,
I want GA4 tracking on the website,
So that I can measure traffic, conversions, and user behavior.

**Acceptance Criteria:**

**Given** the visitor has accepted cookie consent
**When** GA4 scripts load
**Then** page views are tracked across all pages and languages
**And** "Start Free" CTA clicks are tracked as conversion events
**And** GA4 loads asynchronously without blocking page render
**And** if consent is not given, GA4 does not load
**And** the GA4 measurement ID is configured via environment variable

### Story 9.3: PostHog Product Analytics

As a product owner,
I want comprehensive product analytics via PostHog,
So that I can understand visitor behavior, replay sessions, and optimize conversion.

**Acceptance Criteria:**

**Given** a visitor lands on any page
**When** PostHog initializes via `posthog-provider.tsx`
**Then** autocapture records every click, form submission, and input change
**And** session replay is recorded with input values masked by default
**And** heatmaps and rageclick detection are enabled
**And** client-side exceptions are captured automatically
**And** a cross-subdomain cookie keeps the visitor's `distinct_id` consistent across cheqify.app and app.cheqify.app
**And** custom conversion events fire for: `cta_login_clicked`, `cta_signup_clicked`, `language_changed`, `cookie_consent`
**And** the PostHog project token and host are configured via `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` env vars
**And** website and app.cheqify.app both report into the same PostHog project for end-to-end funnel analysis

## Epic 10: SEO & Multi-Language Content

All pages render with complete SEO optimization in all 3 languages.

### Story 10.1: Per-Page SEO Metadata

As a search engine,
I want proper meta tags on every page,
So that pages are correctly indexed and displayed in search results.

**Acceptance Criteria:**

**Given** any page is rendered
**When** the HTML is generated
**Then** each page has a unique title (< 60 chars) and description (< 160 chars) per language
**And** Open Graph tags (og:title, og:description, og:image, og:url) are present
**And** Twitter Card tags are present
**And** hreflang tags link all 3 language variants
**And** canonical URL is set

### Story 10.2: Structured Data & Sitemap

As a search engine,
I want structured data and a sitemap,
So that I can understand the site content and discover all pages.

**Acceptance Criteria:**

**Given** the site is built
**When** the build completes
**Then** XML sitemap is generated covering all pages and blog posts in all 3 languages
**And** robots.txt is generated with proper crawl directives and sitemap reference
**And** JSON-LD structured data is present: Organization, WebSite schemas on homepage
**And** BlogPosting schema is present on each blog post
**And** structured data validates in Google Rich Results Test

### Story 10.3: Multi-Language Content Population

As a Hindi or Gujarati speaking visitor,
I want all pages fully translated in my language,
So that I can understand the entire website without switching to English.

**Acceptance Criteria:**

**Given** translation files exist for en, hi, and gu
**When** a visitor navigates to /hi/ or /gu/ URLs
**Then** all 7 pages render completely in the selected language
**And** no English text remains as fallback on translated pages
**And** language-specific URLs work correctly (/hi/features, /gu/pricing, etc.)
**And** language switching preserves the current page (e.g., /en/pricing → /hi/pricing)
**And** blog articles are available in all 3 languages
