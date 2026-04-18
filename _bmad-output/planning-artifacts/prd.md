---
stepsCompleted: [step-01-init, step-02-discovery, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - "_bmad-output/planning-artifacts/product-brief-cheqify-app-2026-03-26.md"
  - "_bmad-output/planning-artifacts/ux-design-specification.md"
  - "_bmad-output/designs/stitch/cheqify_precision/DESIGN.md"
workflowType: 'prd'
classification:
  projectType: web_app
  domain: fintech
  complexity: high
  projectContext: greenfield
---

# Product Requirements Document - Cheqify.app

**Author:** Ravi
**Date:** 2026-04-03

## Executive Summary

Cheqify.app is a cheque printing and lifecycle management PWA already live at app.cheqify.app. This PRD defines the requirements for its **marketing website** — the primary acquisition channel that explains the product, builds trust, and drives free sign-ups.

**Product:** Multi-page, SEO-optimized marketing website (7 pages, 3 languages)
**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui
**Target Users:** All cheque users in India — enterprises, SMBs, traders, shopkeepers, individuals
**Primary Action:** "Start Free" → app.cheqify.app/register
**Key Differentiator:** Modern, premium design that instantly outclasses the dated competitor (ChequePot), combined with clear "free to start" messaging and multi-language support (English, Hindi, Gujarati)

**Design Reference:** Stitch design export with 7 page designs (HTML + screenshots) at `_bmad-output/designs/stitch/`

## Success Criteria

### User Success

- Visitors understand what Cheqify does within 5-10 seconds of landing on any page
- Visitors can find and watch the demo video within one click from the hero section
- Visitor goes from homepage to "Start Free" sign-up in under 2 minutes
- Hindi and Gujarati users experience full content parity — no missing sections or broken layouts
- Non-technical users (shopkeepers, individuals) can navigate the entire site without confusion
- Users visit multiple pages per session — homepage, features, pricing as a natural flow

### Business Success

| Timeframe | Goal |
|-----------|------|
| 3 months | Website live, SEO-optimized, 500+ monthly visitors, 50+ sign-ups/month |
| 6 months | 2,000+ monthly visitors, 200+ sign-ups/month, top 10 Google ranking for key terms |
| 12 months | 5,000+ monthly visitors, 500+ sign-ups/month, established as go-to cheque management brand |

### Technical Success

- Page load under 3 seconds on mobile (3G connection)
- Lighthouse score 90+ across Performance, Accessibility, Best Practices, SEO
- Core Web Vitals passing (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- All pages responsive across mobile, tablet, desktop
- Light/dark mode functioning with persisted preference
- Language switching without page reload or layout breakage

### Measurable Outcomes

| KPI | Target | Measurement |
|-----|--------|-------------|
| Website → Sign-up conversion | 10%+ | Google Analytics |
| Organic search traffic | 50% of total by month 6 | Google Search Console |
| Bounce rate | Below 50% | Google Analytics |
| Average session duration | 2+ minutes | Google Analytics |
| Pages per session | 2.5+ | Google Analytics |
| Blog traffic growth | 20% month-over-month | Google Analytics |
| Top keyword rankings | Top 10 for 5+ cheque terms | SEO tool |
| Multi-language traffic | 15%+ from Hindi/Gujarati | Google Analytics |
| Demo video play rate | 30%+ of homepage visitors | Video analytics |

## Product Scope

### MVP (Phase 1)

**MVP Approach:** Experience MVP — the website must look and feel premium from day one. The Stitch designs set the visual bar; we match it fully at launch.

**Resource:** Solo developer (Ravi) with AI-assisted development (Claude Code). Design decisions pre-made via Stitch export and UX spec.

**Must-Have Capabilities:**

| Capability | Justification |
|-----------|---------------|
| **7 pages** (Homepage, Features, Pricing, Blog, Contact, About Us, Privacy Policy) | Complete website — every journey needs multiple pages |
| **3 languages** (English, Hindi, Gujarati) | Target audience includes non-English speakers — critical for SEO and reach |
| **Light/dark mode** | Key differentiator vs ChequePot, signals modern product |
| **Responsive design** | 40-60% visitors on mobile — non-negotiable |
| **"Start Free" CTA → app.cheqify.app/register** | Primary conversion action |
| **"Login" → app.cheqify.app/login** | Returning user journey |
| **Demo video embed** | #1 conversion driver per UX spec |
| **Bank logos strip** | Answers "does it work with my bank?" — top-3 visitor question |
| **Tabbed features section** | Organizes 3 product pillars without overwhelming scroll |
| **Pricing comparison table** | Priya/Sunita journeys depend on clear pricing |
| **Contact form (Formspree)** | Enterprise inquiry path (Sunita journey) |
| **Tawk.to live chat** | Real-time support, enterprise evaluation |
| **Cookie consent banner** | DPDP Act / GDPR compliance |
| **SEO fundamentals** | Meta tags, structured data, sitemap, hreflang |
| **Google Analytics 4** | Conversion tracking from day one |
| **PostHog product analytics** | Session replay, heatmaps, exception tracking, custom conversion events |
| **Blog with 3-5 seed articles** | SEO entry point (Amit journey), content in all 3 languages |
| **Product screenshots** | Show, don't tell — throughout site |

### Growth (Phase 2)

- Competitor comparison pages ("Cheqify vs ChequePot")
- Sanity.io CMS integration for blog management
- Additional blog content (20+ articles across 3 languages)
- Customer testimonials and case studies
- Knowledge base / Help center
- Additional Indian languages based on traffic data

### Vision (Phase 3)

- Interactive in-browser product demo (no sign-up needed)
- Referral program page
- Partner/CA program page
- API documentation page
- Integrations page
- User community / forum

### Risk Mitigation

| Risk Type | Risk | Mitigation |
|-----------|------|-----------|
| **Technical** | Multi-language triples content/testing effort | JSON translation files with shared component structure — change once, renders in all languages |
| **Technical** | Performance degradation from chat widget + analytics | Load Tawk.to and GA4 asynchronously after consent; PostHog loads async with input-masking to minimize CPU/network overhead |
| **Content** | Blog articles needed in 3 languages at launch | Create 3-5 seed articles focused on top search keywords, translated to all 3 languages |
| **Content** | Product screenshots not yet available | Use placeholder screenshots initially, replace with real screenshots when ready |
| **Market** | Low organic traffic initially | Seed blog with high-intent keywords, ensure technical SEO is perfect from day one |
| **Resource** | Solo developer managing full website | Stitch designs eliminate design decisions; shadcn/ui reduces UI dev time; AI-assisted development |

## User Journeys

### Journey 1: Ramesh — Small Business Owner (Primary - Success Path)

**Opening Scene:** Ramesh runs a trading business in Ahmedabad. He writes 30-50 cheques monthly to vendors. Last week, a cheque bounced because his accountant misspelled a vendor's name — the bank rejected it, he paid a penalty, and the vendor was upset. Frustrated, he opens Google on his phone and searches "cheque printing software India."

**Rising Action:** Cheqify.app appears in the results. He taps through and lands on the homepage. Within 5 seconds, he reads "Print Error-Free Cheques in Under 2 Minutes" — this is exactly what he needs. He sees the bank logos strip — SBI, HDFC, ICICI — his bank (Axis) is right there. He notices "Free Forever" and "No credit card required." He taps "Watch Demo" and sees how simple the process is — just type details and print. No training, works on his phone.

**Climax:** He scrolls to the features tab and clicks "Lifecycle Tracking" — he realizes he can also track which cheques have cleared and which are pending. This solves his other headache — constantly asking his accountant "did vendor X deposit the cheque?" He switches to "Owner Dashboard" tab and sees he can monitor everything from his phone without bothering anyone.

**Resolution:** He taps "Start Free" and is redirected to app.cheqify.app/register. Within 2 minutes, he's printed his first error-free cheque. He tells his CA friend about Cheqify the next day.

### Journey 2: Priya — Accounts Staff (Primary - Different Entry Point)

**Opening Scene:** Priya works in the accounts department of a mid-size manufacturing company in Surat. She prepares 15-20 cheques daily and lives in constant fear of making a mistake — one wrong digit could mean a bounced cheque and her boss questioning her competence. Her boss Sunita has asked her to find a better solution than their current manual process.

**Rising Action:** Priya's colleague mentions Cheqify. She visits cheqify.app on her office desktop. The clean, modern design immediately feels trustworthy — unlike the dated ChequePot site she checked earlier. She clicks "Features" in the navigation. The tabbed section shows her exactly what she needs — Cheque Printing with error prevention, bank format support, and batch printing. She switches to Hindi using the language toggle to understand some details better.

**Climax:** She browses the Pricing page and sees the Free plan — up to 3 active projects, standard analytics. The Professional plan at the right price point covers everything her company needs. She takes a screenshot of the pricing comparison table to show her boss.

**Resolution:** She shares the website link with Sunita (her boss). Sunita glances at the homepage on her phone, sees the professional design and "Start Free" — she tells Priya "try it." Priya clicks "Start Free" and registers.

### Journey 3: Amit — Individual User (Primary - Minimal Intent)

**Opening Scene:** Amit is a salaried professional in Mumbai. He needs to write a cheque for his daughter's school fees — something he does 2-3 times a year. His handwriting is bad and he always worries about getting the amount in words wrong. He googles "how to print cheque at home."

**Rising Action:** He lands on a Cheqify blog article titled "How to Print a Cheque at Home — Step by Step Guide." The article is clear, helpful, and mentions Cheqify as a tool. A "Start Free" CTA sits within the article. Curious, he clicks to the homepage. He sees it works on any device — he can just use his laptop and home printer. No software to install, no complex setup.

**Climax:** He sees "Free forever for basic use" — for someone who prints 2-3 cheques a year, this is perfect. Zero cost, zero commitment.

**Resolution:** He clicks "Start Free", registers, and prints his school fee cheque in under 2 minutes. He bookmarks the site for next time.

### Journey 4: Sunita — Enterprise Finance Head (Primary - Evaluation Path)

**Opening Scene:** Sunita is the finance head at a large manufacturing company in Pune. Her team processes hundreds of cheques monthly using ChequePot, which costs them significantly and the software feels outdated. Her CEO has asked her to find a modern, cost-effective alternative.

**Rising Action:** She searches "ChequePot alternative India" and finds Cheqify. She lands on the homepage — the modern design immediately signals this is a serious product. She navigates directly to Features, spending time on all three tabs. She's particularly interested in the Owner Dashboard — something ChequePot doesn't offer well. She then goes to Pricing to compare the Team plan against what they're paying ChequePot.

**Climax:** She opens the Contact page and submits an inquiry about enterprise needs. She also starts a live chat to ask about bulk pricing and data migration from ChequePot.

**Resolution:** After getting a quick response via chat, she's convinced. She clicks "Start Free" to test with a small team before committing the whole company.

### Journey 5: CA/Accountant — Referral Source (Secondary)

**Opening Scene:** Rajesh is a Chartered Accountant in Rajkot who manages accounts for 15+ small businesses. Three of his clients have complained about cheque errors this quarter. He searches "cheque management solution for small business."

**Rising Action:** He finds Cheqify and browses the website. The Features page convinces him this solves his clients' problems. He checks Pricing — the free tier means his clients have nothing to lose. He reads the About Us page to understand who's behind the product.

**Climax:** He finds the blog has useful content about cheque management best practices that he can share with clients.

**Resolution:** He shares the Cheqify website link with 5 of his clients via WhatsApp, saying "try this for your cheque printing — it's free." Three of them sign up within a week.

### Journey 6: Returning User (Secondary - Login Path)

**Opening Scene:** Ramesh has been using Cheqify for a month. He's on his phone at a vendor's office and needs to quickly log in to check if a cheque he issued last week has cleared.

**Rising Action:** He visits cheqify.app. The "Login" button is immediately visible in the header — no hunting around.

**Resolution:** He clicks "Login", is redirected to app.cheqify.app/login, and checks his dashboard in seconds.

### Journey Requirements Summary

| Journey | Key Capabilities Revealed |
|---------|--------------------------|
| **Ramesh (SMB Owner)** | Hero clarity, bank logos visibility, demo video, feature tabs, mobile-first CTA |
| **Priya (Accounts Staff)** | Features page depth, pricing comparison table, language switching, shareable pages |
| **Amit (Individual)** | Blog as SEO entry point, in-content CTAs, simple messaging, free tier prominence |
| **Sunita (Enterprise)** | Professional design quality, feature comparison, contact form, live chat |
| **Rajesh (CA/Referrer)** | About Us credibility, blog content value, shareable URLs, free tier messaging |
| **Returning User** | Login button visibility in header, fast load, no friction to reach app |

## Domain-Specific Requirements

### Compliance & Regulatory

- **Cookie Consent Banner** — GDPR/India DPDP Act compliant consent banner before loading analytics or tracking cookies
- **Privacy Policy** — Must disclose: data collected via contact form (name, email, subject, message), analytics tracking (Google Analytics), live chat data (Tawk.to), cookie usage, Formspree as data processor
- **Accessibility** — WCAG AA compliance across all pages
- **Terms of Service** — Standard website terms (can be added to Privacy Policy page or as a separate page later)

### Technical Constraints

- **No sensitive data on website** — The website does not process payments, store bank information, or handle KYC. All financial operations happen at app.cheqify.app
- **SSL/HTTPS** — Required on all pages (standard with Vercel deployment)
- **Contact form via Formspree** — Third-party form processing
- **Analytics** — Google Analytics 4 with cookie consent gating — do not load tracking scripts until user consents
- **Product analytics** — PostHog (session replay with input masking, heatmaps, exception capture, custom conversion events); shares a single project with app.cheqify.app via cross-subdomain cookie
- **Live chat** — Tawk.to widget; must be disclosed in Privacy Policy

### Integration Requirements

- **Formspree** (formspree.io) — Contact form submission handling
- **Google Analytics 4** — Traffic and conversion tracking
- **PostHog** — Product analytics: session replay, heatmaps, exception autocapture, custom events; shared project with app.cheqify.app for end-to-end funnel analysis
- **Tawk.to** — Real-time live chat support
- **Google Search Console** — SEO monitoring
- **Sanity.io** — Blog CMS integration (live as of Apr 2026)

### Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| Trust deficit (fintech domain) | Professional design, security badges, bank logos, real product screenshots |
| Cookie compliance violation | Implement consent banner before any tracking loads |
| Form data exposure | Use Formspree (handles data securely), disclose in Privacy Policy |
| SEO penalty from poor performance | Target Lighthouse 90+, Core Web Vitals passing |
| Accessibility compliance | WCAG AA, semantic HTML, proper ARIA labels |

## Web App Technical Requirements

### Rendering & Architecture

Statically generated multi-page application (MPA) built with Next.js App Router. Pages pre-rendered at build time (SSG) for maximum performance and SEO. Client-side navigation provides smooth transitions without full reloads.

### Browser & Device Matrix

| Platform | Browsers | Versions |
|----------|----------|----------|
| **Desktop (Windows/Mac/Linux)** | Chrome, Firefox, Safari, Edge | Latest 2 versions |
| **Android Mobile/Tablet** | Chrome, Samsung Internet, Firefox | Latest 2 versions |
| **iOS/iPadOS (iPhone/iPad)** | Safari, Chrome | Latest 2 versions |

### Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile | 0 - 639px | Phones (portrait) |
| Tablet | 640px - 1023px | Tablets, phones (landscape) |
| Desktop | 1024px - 1279px | Laptops, small desktops |
| Wide | 1280px+ | Large desktops (max-width container: 1280px) |

### SEO Strategy

**Technical SEO:**
- Static HTML generation — search engines see fully rendered pages
- Semantic HTML5 structure (header, nav, main, section, article, footer)
- XML sitemap auto-generated for all pages and blog posts
- robots.txt with proper crawl directives
- Canonical URLs on all pages to prevent duplicate content
- Open Graph and Twitter Card meta tags for social sharing
- JSON-LD structured data (Organization, WebSite, FAQPage, BlogPosting, Product)

**Multi-Language SEO:**
- `hreflang` tags on all pages linking English, Hindi, Gujarati versions
- URL structure: `/en/`, `/hi/`, `/gu/` prefixes (or `/` for English default)
- Each language version is a separate pre-rendered page for full indexability
- Language-specific meta titles and descriptions

**Content SEO:**
- Blog targeting long-tail cheque-related keywords in all 3 languages
- H1-H6 heading hierarchy on every page
- Alt text on all images
- Internal linking between pages (features → pricing, blog → features, etc.)
- Page titles under 60 characters, meta descriptions under 160 characters

**Target Keywords (Primary):**
- "cheque printing software" / "cheque printing app"
- "print cheque online" / "how to print cheque"
- "cheque management software"
- "cheque bounce solution"
- "ChequePot alternative"

### Implementation Stack

- **Rendering:** Next.js SSG with `generateStaticParams` for language routes
- **Styling:** Tailwind CSS with shadcn/ui components configured with Cheqify brand tokens
- **Theming:** `next-themes` for dark/light mode with system preference detection and localStorage persistence
- **i18n:** Next.js internationalization routing with JSON translation files per language
- **Blog:** Static markdown files at MVP, Sanity.io CMS integration in Phase 2
- **Forms:** Formspree integration for contact form
- **Analytics:** Google Analytics 4 loaded conditionally after cookie consent
- **Product Analytics:** PostHog (posthog-js) initialized on page load — session replay, heatmaps, rageclick detection, exception capture, cross-subdomain cookie
- **Live Chat:** Tawk.to loaded asynchronously after cookie consent
- **Deployment:** Netlify (automatic SSG, CDN, HTTPS)

## Functional Requirements

### Navigation & Global Layout

- **FR1:** Visitor can navigate between all pages via a persistent sticky header
- **FR2:** Visitor can access "Start Free" CTA from any page without scrolling
- **FR3:** Visitor can access "Login" from the header on any page
- **FR4:** Visitor can switch between English, Hindi, and Gujarati languages
- **FR5:** Visitor can toggle between light and dark mode
- **FR6:** Visitor can navigate to key pages via the footer
- **FR7:** System preserves user's language and theme preferences across sessions

### Homepage Experience

- **FR8:** Visitor can read the hero headline and understand the product value within 5 seconds
- **FR9:** Visitor can watch a demo video from the homepage
- **FR10:** Visitor can see supported bank logos to confirm compatibility
- **FR11:** Visitor can view trust signals (security, bank count, device support, free tier)
- **FR12:** Visitor can understand the product workflow via a "How it Works" section
- **FR13:** Visitor can explore features via tabbed content (Cheque Printing, Lifecycle Tracking, Owner Dashboard)
- **FR14:** Visitor can see social proof statistics (cheques printed, users, banks supported)
- **FR15:** Visitor can read user testimonials
- **FR16:** Visitor can click a final CTA section to sign up

### Features Page

- **FR17:** Visitor can explore detailed feature breakdowns organized by product pillars via tabs
- **FR18:** Visitor can view product screenshots for each feature area
- **FR19:** Visitor can understand capabilities of Cheque Printing, Lifecycle Tracking, and Owner Dashboard individually

### Pricing Page

- **FR20:** Visitor can view all pricing plans with clear free tier prominence
- **FR21:** Visitor can compare features across plans via a comparison table
- **FR22:** Visitor can sign up for any plan via per-plan CTA buttons
- **FR23:** Visitor can see "No credit card required" messaging

### Blog

- **FR24:** Visitor can browse blog articles in a card-based listing layout
- **FR25:** Visitor can read individual blog articles
- **FR26:** Visitor can discover blog content in all 3 supported languages
- **FR27:** System renders blog articles from static markdown files (MVP) with Sanity.io migration path
- **FR28:** Visitor can navigate between blog posts using prev/next navigation
- **FR53:** Visitor can filter blog articles by tag categories (Cheque Guide, Banking & RBI, Cheque Security, Software Comparison, Cheque Productivity)
- **FR54:** Blog includes 6 seed articles covering cheque printing, bounce prevention, fraud, MICR, PDC rules, and software comparison

### Contact Page

- **FR29:** Visitor can submit a contact inquiry via a form (name, email, subject, message)
- **FR30:** System sends form submissions to Formspree for processing
- **FR31:** Visitor can view support email addresses and contact information
- **FR32:** Visitor can see average response time information

### About Us Page

- **FR33:** Visitor can read the company story and mission
- **FR34:** Visitor can view team information
- **FR35:** Visitor can understand why Cheqify was built

### Privacy Policy Page

- **FR36:** Visitor can read the full privacy policy covering data collection, usage, and rights
- **FR37:** Visitor can understand what data is collected via contact form, analytics (GA4 + PostHog), and chat
- **FR38:** Visitor can find contact information for privacy-related inquiries

### Cookie Consent & Compliance

- **FR39:** Visitor can accept or decline tracking cookies via a consent banner
- **FR40:** System loads Google Analytics and Tawk.to only after cookie consent is granted
- **FR41:** System remembers cookie consent preference across sessions

### Live Chat

- **FR42:** Visitor can initiate a live chat conversation from any page via Tawk.to widget
- **FR43:** System loads Tawk.to widget asynchronously without blocking page render

### Product Analytics (PostHog)

- **FR43a:** System captures autocapture events (clicks, form submissions, input changes) for every visitor
- **FR43b:** System records session replays with input values masked by default; sensitive elements can opt in via `data-ph-mask` attribute
- **FR43c:** System captures custom conversion events: `cta_login_clicked`, `cta_signup_clicked`, `language_changed`, `cookie_consent`
- **FR43d:** System captures client-side exceptions for observability
- **FR43e:** System uses a cross-subdomain cookie so visitor identity persists from cheqify.app → app.cheqify.app for funnel analysis
- **FR43f:** System renders click/scroll heatmaps and detects rageclicks per page

### SEO & Discoverability

- **FR44:** System generates XML sitemap covering all pages and blog posts in all languages
- **FR45:** System renders proper meta tags (title, description, Open Graph, Twitter Card) per page per language
- **FR46:** System includes hreflang tags linking language variants of each page
- **FR47:** System includes JSON-LD structured data (Organization, WebSite, BlogPosting)
- **FR48:** System generates robots.txt with proper crawl directives

### Multi-Language Content

- **FR49:** All 7 pages render fully in English, Hindi, and Gujarati
- **FR50:** Blog articles are available in all 3 languages
- **FR51:** System serves language-specific URLs (e.g., `/hi/features`, `/gu/pricing`)
- **FR52:** Language switching preserves the current page context

## Non-Functional Requirements

### Performance

- **NFR1:** Lighthouse Performance score 90+
- **NFR2:** LCP under 2.5 seconds on mobile 3G
- **NFR3:** FID under 100ms
- **NFR4:** CLS under 0.1
- **NFR5:** Time to Interactive under 3 seconds on mobile
- **NFR6:** Per-page JavaScript bundle under 150KB
- **NFR7:** Images optimized with lazy loading for below-fold content
- **NFR8:** Third-party scripts (Tawk.to, GA4, PostHog) load asynchronously, never blocking page render
- **NFR9:** Font loading uses `font-display: swap`

### Security

- **NFR10:** All pages served over HTTPS
- **NFR11:** GA4 and Tawk.to do not load before explicit cookie consent. PostHog initializes on page load as first-party product analytics with input values masked in session recordings; this is disclosed in the Privacy Policy
- **NFR12:** Contact form protected against spam (Formspree built-in)
- **NFR13:** No sensitive data stored on the website
- **NFR14:** Content Security Policy headers configured
- **NFR15:** No inline scripts — all JavaScript from trusted sources only

### Scalability

- **NFR16:** Static site on CDN supports unlimited concurrent visitors without server scaling
- **NFR17:** Site fully functional under 10x expected traffic

### Accessibility

- **NFR18:** WCAG AA compliance — Lighthouse Accessibility score 90+
- **NFR19:** Minimum 16px body text on all devices
- **NFR20:** Minimum 44x44px touch targets on mobile
- **NFR21:** Color contrast 4.5:1 for body text, 3:1 for large text
- **NFR22:** All interactive elements keyboard-accessible with visible focus indicators
- **NFR23:** Screen reader compatible — semantic HTML, ARIA labels, skip-to-content link
- **NFR24:** Animations respect `prefers-reduced-motion`
- **NFR25:** Hindi and Gujarati text renders with appropriate line-height

### Integration

- **NFR26:** Formspree submission completes within 3 seconds with user feedback
- **NFR27:** Tawk.to loads within 5 seconds of page render (after consent) without layout shift
- **NFR28:** GA4 tracks page views and CTA clicks accurately across all languages; PostHog captures autocapture events, custom conversion events, session replays, and exceptions across all languages
- **NFR29:** All third-party integrations degrade gracefully — site usable if any integration fails

### SEO

- **NFR30:** Lighthouse SEO score 95+
- **NFR31:** All pages indexed by Google within 30 days of launch
- **NFR32:** XML sitemap auto-updates when blog posts are added
- **NFR33:** Page titles under 60 chars, meta descriptions under 160 chars across all languages
- **NFR34:** Structured data validates without errors in Google Rich Results Test
