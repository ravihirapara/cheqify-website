# Cheqify.app SEO Plan

**Date:** 2026-04-13
**Current Score:** 8.5/10 — Foundation is excellent, needs tactical improvements

---

## Phase 1: Quick Wins (This Week)

| # | Task | Impact | Effort | Status |
|---|------|--------|--------|--------|
| 1 | Add HSTS header in `netlify.toml` — `Strict-Transport-Security: max-age=31536000` | Security + SEO trust signal | 2 min | Done |
| 2 | Optimize OG image — current `og-cheqify.jpg` is 560KB, should be <200KB | Faster social sharing | 5 min | Done |
| 3 | Add font preload — Inter font not preloaded, causes flash of unstyled text | Core Web Vitals (CLS) | 5 min | Done |
| 4 | Request indexing for top 6 English pages in Search Console | Get indexed faster | 10 min | Manual |
| 5 | Submit sitemap in Search Console if not already done | Crawl discovery | 2 min | Manual |

---

## Phase 2: Technical SEO Fixes (This Week / Next Week)

| # | Task | Impact | Effort | Status |
|---|------|--------|--------|--------|
| 6 | Enable image optimization — `unoptimized: true` in `next.config.ts` disables all Next.js image optimization (resizing, WebP/AVIF serving, compression). Evaluate if Netlify supports it or switch to a loader. | Page speed, bandwidth | 30 min | Done |
| 7 | Add page-specific OG images — all pages share one generic image. At minimum, blog posts should have their cover image as OG image. | Social CTR | 1 hr | Done |
| 8 | Add Content-Security-Policy header in `netlify.toml` | Security | 30 min | Done |
| 9 | Add more structured data — Contact page (ContactPoint schema), Features page (Product schema), About page (Organization with team) | Rich snippets | 1 hr | Done |

---

## Phase 3: Content & On-Page SEO (Next 2 Weeks)

| # | Task | Impact | Effort | Status |
|---|------|--------|--------|--------|
| 10 | Add "Related Posts" section to blog post pages — increases internal linking and session duration | Internal linking, engagement | 2 hr | Done |
| 11 | Add reading time to blog posts | User experience | 30 min | Done |
| 12 | Create tag/category archive pages for blog (e.g., `/blog/tag/cheque-fraud`) | New indexable pages, long-tail keywords | 3 hr | Done |
| 13 | Write more blog content — target 2 posts/week on Indian cheque-related keywords | Organic traffic | Ongoing | Ongoing |
| 14 | Add FAQ section to Features page with FAQPage schema (like already on Pricing page) | Featured snippets | 1 hr | Done |

---

## Phase 4: Off-Page & Growth (Ongoing)

| # | Task | Impact | Effort | Status |
|---|------|--------|--------|--------|
| 15 | Build backlinks — submit to Indian SaaS directories, startup listings (ProductHunt, BetaList, SaaSHub) | Domain authority | Ongoing | Manual |
| 16 | Google Business Profile — create if not exists, helps with "cheque printing software India" searches | Local SEO | 30 min | Manual |
| 17 | Social signals — share blog posts on LinkedIn, Twitter, relevant Indian finance forums | Traffic + crawl signals | Ongoing | Manual |
| 18 | Monitor Search Console weekly — track which pages get indexed, which queries drive impressions | Data-driven decisions | Ongoing | Manual |

---

## Phase 5: Keyword Ranking Strategy — Cheque-Related Searches (Next 4 Weeks)

**Goal:** Rank on page 1 for "cheque printing software", "cheque print", "cheque printing app india" and related keywords.

### 5A. Keyword Research & Tools

| # | Task | Tool/Method | Status |
|---|------|-------------|--------|
| 19 | Set up Google Keyword Planner (free with Google Ads account) — find search volumes for "cheque printing", "cheque print software", "cheque printing app" | Google Keyword Planner | Pending |
| 20 | Use AnswerThePublic — find questions people ask about cheques (e.g., "how to print cheque", "what is MICR code") | AnswerThePublic (free) | Pending |
| 21 | Use Ubersuggest — keyword ideas + competitor keyword analysis | Ubersuggest (free tier) | Pending |
| 22 | Use Google Trends — compare "cheque printing" vs "check printing" vs "cheque software" in India | Google Trends | Pending |
| 23 | Analyze Search Console data — find keywords where Cheqify ranks #10-#20 (quick wins to push to page 1) | Google Search Console | Pending |

### 5B. Blog Content Targeting High-Intent Keywords

Write keyword-targeted blog posts via Sanity CMS. Target: 2 posts/week.

| # | Target Keyword | Blog Post Idea | Priority | Status |
|---|---------------|----------------|----------|--------|
| 24 | "how to print cheque in india" | Step-by-step guide with screenshots using Cheqify | High | Next Week |
| 25 | "cheque printing software free" | Why Cheqify is the best free cheque printing solution | High | Next Week |
| 26 | "MICR code cheque printing" | What is MICR code and why it matters for cheque printing | High | Pending |
| 27 | "bulk cheque printing for business" | Guide to batch printing cheques for SMBs | Medium | Pending |
| 28 | "cheque bounce reasons india" | Common cheque errors and how Cheqify prevents them | Medium | Pending |
| 29 | "CTS 2010 cheque format" | CTS 2010 compliance explained — what businesses need to know | Medium | Pending |
| 30 | "cheque vs digital payment india" | When cheques are still necessary for Indian businesses | Medium | Pending |
| 31 | "how to fill cheque correctly" | Common cheque-filling mistakes and how to avoid them | Low | Pending |
| 32 | "cheque lifecycle management" | End-to-end cheque tracking explained | Low | Pending |
| 33 | "chequepot alternative free" | Detailed comparison — Cheqify vs ChequePot vs others | High | Pending |

### 5B-1. Blog Post #24 — Ready for Sanity (Week of 2026-04-21)

**Slug:** `how-to-print-cheque-in-india`
**Tags:** `cheque-printing`, `cheque-guide`, `how-to`
**Author:** Cheqify Team
**Is HowTo:** Yes (enable toggle in Sanity)

**Title (English):** How to Print a Cheque in India — Step-by-Step Guide (2026)
**Title (Hindi):** भारत में चेक कैसे प्रिंट करें — स्टेप-बाय-स्टेप गाइड (2026)
**Title (Gujarati):** ભારતમાં ચેક કેવી રીતે છાપવો — સ્ટેપ-બાય-સ્ટેપ ગાઈડ (2026)

**Description (English):** Learn how to print cheques in India using Cheqify — free cheque printing software with 300+ bank formats. Step-by-step guide with MICR validation and CTS 2010 compliance.
**Description (Hindi):** Cheqify का उपयोग करके भारत में चेक कैसे प्रिंट करें — 300+ बैंक फॉर्मेट के साथ मुफ्त चेक प्रिंटिंग सॉफ्टवेयर। MICR सत्यापन और CTS 2010 अनुपालन के साथ स्टेप-बाय-स्टेप गाइड।
**Description (Gujarati):** Cheqify નો ઉપયોગ કરીને ભારતમાં ચેક કેવી રીતે છાપવો — 300+ બેંક ફોર્મેટ સાથે મફત ચેક પ્રિન્ટિંગ સોફ્ટવેર। MICR ચકાસણી અને CTS 2010 અનુપાલન સાથે સ્ટેપ-બાય-સ્ટેપ ગાઈડ.

**HowTo Steps (fill in Sanity):**
1. **Sign up for Cheqify** — Create a free account at app.cheqify.app. No credit card required.
2. **Add your company** — Enter your business name and details to get started.
3. **Select your bank** — Choose from 300+ pre-loaded Indian bank layouts (SBI, HDFC, ICICI, etc.).
4. **Enter cheque details** — Fill in payee name, amount, and date. Cheqify auto-fills amount in words.
5. **Verify MICR code** — Cheqify automatically validates the MICR code for your selected bank and branch.
6. **Preview and print** — Review the cheque preview, then print directly on your blank cheque leaf using any printer.

**Body outline (English):**
- Introduction: Why printed cheques are better than handwritten (fewer errors, professional, CTS compliant)
- Prerequisites: A computer/phone, a printer, blank cheque leaves, a free Cheqify account
- Step-by-step walkthrough (expand each HowTo step with screenshots)
- What is MICR and why Cheqify validates it automatically
- What is CTS 2010 and why your cheques must comply
- Common mistakes when printing cheques (wrong alignment, ink issues, overwriting)
- Tips for batch printing multiple cheques
- FAQ:
  - "Is it legal to print cheques in India?" — Yes, RBI allows it under CTS 2010
  - "Which printers work for cheque printing?" — Any inkjet or laser printer
  - "Can I print on pre-printed cheque leaves?" — Yes, Cheqify aligns to your bank's layout
  - "What if MICR validation fails?" — Cheqify alerts you before printing

**Target Keywords:** how to print cheque, cheque printing software india, print cheque online, cheque print kaise kare, how to print cheque in india

---

### 5B-2. Blog Post #25 — Ready for Sanity (Week of 2026-04-21)

**Slug:** `best-free-cheque-printing-software-india`
**Tags:** `cheque-printing`, `comparison`, `free-software`
**Author:** Cheqify Team
**Is HowTo:** No

**Title (English):** Best Free Cheque Printing Software in India (2026) — Cheqify vs ChequePot
**Title (Hindi):** भारत में सबसे अच्छा मुफ्त चेक प्रिंटिंग सॉफ्टवेयर (2026) — Cheqify vs ChequePot
**Title (Gujarati):** ભારતમાં શ્રેષ્ઠ મફત ચેક પ્રિન્ટિંગ સોફ્ટવેર (2026) — Cheqify vs ChequePot

**Description (English):** Compare the best free cheque printing software in India. Cheqify vs ChequePot — features, pricing, bank support, and why Cheqify wins with 300+ formats at zero cost.
**Description (Hindi):** भारत में सबसे अच्छे मुफ्त चेक प्रिंटिंग सॉफ्टवेयर की तुलना करें। Cheqify vs ChequePot — सुविधाएँ, कीमत, बैंक सपोर्ट, और 300+ फॉर्मेट के साथ Cheqify शून्य लागत पर क्यों जीतता है।
**Description (Gujarati):** ભારતમાં શ્રેષ્ઠ મફત ચેક પ્રિન્ટિંગ સોફ્ટવેરની સરખામણી કરો. Cheqify vs ChequePot — સુવિધાઓ, કિંમત, બેંક સપોર્ટ, અને 300+ ફોર્મેટ સાથે Cheqify શૂન્ય ખર્ચે કેમ જીતે છે.

**Body outline (English):**
- Introduction: Why Indian businesses need dedicated cheque printing software
- What to look for in cheque printing software (bank support, MICR, batch printing, price, security)
- Feature comparison table:

| Feature | Cheqify | ChequePot |
|---------|---------|-----------|
| Price | 100% Free | Paid |
| Bank Formats | 300+ | Limited |
| MICR Validation | Automatic | Manual |
| Batch Printing | Yes (Excel/CSV) | Limited |
| Lifecycle Tracking | Full (Issue → Clearance) | No |
| Multi-User | Yes, role-based | No |
| Mobile/Tablet | Yes (responsive web) | Desktop only |
| Languages | English, Hindi, Gujarati | English only |
| CTS 2010 Compliance | Yes | Partial |
| Amount in Words | Auto-generated | Manual |

- Detailed breakdown of each feature advantage
- Pricing: Cheqify is free forever — strongest USP
- User testimonials / use cases
- Verdict: Why Cheqify is the clear winner
- FAQ:
  - "Is Cheqify really free?" — Yes, 100% free with all features
  - "Can I switch from ChequePot to Cheqify?" — Yes, just sign up and start
  - "Does Cheqify work on mobile?" — Yes, works on any device with a browser
  - "How many cheques can I print?" — Unlimited

**Target Keywords:** cheque printing software free, free cheque printing app, chequepot alternative, best cheque printing software india, cheque printing software comparison

---

### 5C. On-Page SEO Enhancements

| # | Task | Impact | Effort | Status |
|---|------|--------|--------|--------|
| 34 | Add FAQ schema to homepage — target "People Also Ask" box in Google | Featured snippets | 1 hr | Done |
| 35 | Add HowTo schema on step-by-step blog posts — Sanity CMS fields + JSON-LD rendering | Rich snippets in search results | 30 min/post | Done |
| 36 | Create glossary page (`/[locale]/glossary`) — 20 cheque-related terms with DefinedTermSet schema | Captures informational queries | 3 hr | Done |
| 37 | Strengthen internal linking — every blog post must link to relevant pages (features, pricing, other posts) | Link equity distribution | Ongoing | Pending |
| 38 | Add "People Also Ask" style FAQ sections in blog posts | Increases content depth + featured snippet chances | 30 min/post | Pending |

---

## Phase 6: Off-Page & Authority Building (Ongoing)

### 6A. SaaS Directory Submissions

| # | Directory | Type | Status |
|---|-----------|------|--------|
| 39 | Product Hunt | Global SaaS launch platform | Pending |
| 40 | AlternativeTo | "Alternative to ChequePot" listing | Pending |
| 41 | G2 | Software review platform | Pending |
| 42 | Capterra | Software comparison platform | Pending |
| 43 | SaaSHub | SaaS discovery platform | Pending |
| 44 | GetApp | Software listing | Pending |
| 45 | Software Suggest | Indian SaaS directory | Pending |

### 6B. Indian Startup & Business Directories

| # | Directory | Type | Status |
|---|-----------|------|--------|
| 46 | StartupIndia | Government startup registry | Pending |
| 47 | YourStory | Indian startup media listing | Pending |
| 48 | Inc42 | Indian tech/startup media | Pending |
| 49 | IndiaMART | Business product listing | Pending |
| 50 | Justdial | Local business listing | Pending |

### 6C. Backlink Strategies

| # | Strategy | Details | Status |
|---|----------|---------|--------|
| 51 | Guest posting on fintech/banking blogs | Write articles about cheque management on Indian finance blogs | Pending |
| 52 | Get listed on "best cheque printing software" listicles | Reach out to bloggers who write software roundup articles | Pending |
| 53 | Create linkable assets — infographics, cheque templates, guides | Content others want to link to | Pending |
| 54 | Answer Quora questions about cheque printing in India | Link back to relevant blog posts | Pending |

### 6D. Local SEO (India-Focused)

| # | Task | Impact | Status |
|---|------|--------|--------|
| 55 | Google Business Profile — create listing for Cheqify | "cheque printing software near me" searches | Pending |
| 56 | Hindi & Gujarati content advantage — few competitors offer multi-language | Captures non-English searchers | In Progress |
| 57 | Add IndiaStack/banking context in blog content | Captures related Indian banking searches | Pending |

### 6E. Competitor Monitoring

| # | Task | Details | Status |
|---|------|---------|--------|
| 58 | Search "cheque printing software india" weekly | Track who ranks and what content they have | Pending |
| 59 | Analyze top 5 competitors' backlinks via Ahrefs/Ubersuggest | Find link opportunities they have that Cheqify doesn't | Pending |
| 60 | Create more comparison pages if other competitors exist | e.g., "Cheqify vs [Competitor]" pages | Pending |

---

## Recommended SEO Tools Summary

| Tool | Cost | Primary Use |
|------|------|-------------|
| Google Search Console | Free | Track rankings, indexing, click-through rates |
| Google Keyword Planner | Free (with Google Ads account) | Search volume data for target keywords |
| Google Trends | Free | Keyword trend comparison in India |
| Ahrefs | Paid | Backlink analysis, site audit, competitor research |
| Ubersuggest | Free tier available | Keyword ideas, competitor keyword analysis |
| AnswerThePublic | Free (limited) | Discover questions people ask about cheques |
| Google PageSpeed Insights | Free | Core Web Vitals monitoring |
| Screaming Frog | Free (up to 500 URLs) | Technical SEO crawl audit |

---

## Current SEO Audit — What's Already Excellent

### Metadata
- Centralized `buildSeoMetadata()` function ensures consistency across all pages
- Title, description, Open Graph, Twitter Card set on every page
- Canonical URLs properly configured per locale
- Hreflang alternate links for all 3 locales (en, hi, gu)
- Google Bot directives: max-video-preview, max-image-preview: large

### Structured Data (JSON-LD)
- Organization schema (homepage)
- WebSite schema (homepage)
- SoftwareApplication schema (homepage)
- BreadcrumbList schema (all pages)
- BlogPosting schema (blog posts with author, publisher, dates)
- FAQPage schema (Pricing page — 5 FAQs, Comparison page — 3 FAQs)

### Accessibility
- Semantic HTML: header, nav, main, footer, section, article used correctly
- Skip-to-content link with sr-only class
- 21 ARIA implementations (aria-label, aria-current, etc.)
- Language attribute on html element (locale-aware)

### Technical
- Robots.txt allows all, disallows /studio, points to sitemap
- Sitemap.xml with all 48+ URLs (27 static + blog posts across 3 locales)
- Custom 404 page with helpful navigation links
- PWA manifest configured
- Self-hosted Inter font with font-display: swap
- Netlify caching headers (1yr static assets, 30d images, no-cache HTML)
- Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy

### Internal Linking
- Footer with comprehensive links (Product, Resources, Company, Legal)
- Blog prev/next navigation
- Breadcrumb trails on all pages
- Header navigation covers all major pages

---

## Google Search Console — Current Status (2026-04-13)

| Status | Count | Details |
|--------|-------|---------|
| Indexed | 11 | Pages Google has crawled and added to search results |
| Not Indexed | 40 | Pages discovered but not yet indexed |

### Not-Indexed Breakdown

| Reason | Pages | Action |
|--------|-------|--------|
| Discovered – currently not indexed | 35 | Normal for new site. Wait 2-4 weeks + request indexing manually |
| Crawled – currently not indexed | 3 | Check for thin content or Sanity Studio pages |
| Page with redirect | 1 | Root `/` redirects to `/en` — expected, no fix needed |
| Duplicate, Google chose different canonical | 1 | Monitor — may resolve with hreflang tags already in place |

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/lib/seo.ts` | Centralized SEO metadata builder |
| `src/app/sitemap.ts` | Dynamic sitemap generation |
| `src/app/robots.ts` | Robots.txt configuration |
| `src/app/layout.tsx` | Root layout with base metadata |
| `src/app/[locale]/layout.tsx` | Locale layout with language config |
| `netlify.toml` | Headers, caching, security |
| `next.config.ts` | Next.js config (image optimization flag) |
| `public/manifest.json` | PWA manifest |
