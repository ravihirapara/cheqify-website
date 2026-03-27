---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
inputDocuments:
  - "_bmad-output/planning-artifacts/product-brief-cheqify-app-2026-03-26.md"
---

# UX Design Specification Cheqify.app

**Author:** Ravi
**Date:** 2026-03-27

---

<!-- UX design content will be appended sequentially through collaborative workflow steps -->

## Executive Summary

### Project Vision

A modern, fast, SEO-optimized marketing website for Cheqify.app — an already-live cheque printing and lifecycle management PWA. The website serves as the primary acquisition channel, converting visitors into free sign-ups at app.cheqify.app. It must outclass the dated competitor (ChequePot) with clean, modern design that matches Cheqify's existing product aesthetic.

### Target Users

- **All cheque users globally** — no segment exclusions
- Ranges from enterprise finance teams to individual bill-payers
- Tech-savviness varies widely — design must be simple and intuitive
- Primary devices: mobile and desktop (PWA works everywhere)
- Discovery: SEO, ads, social media, referrals, word of mouth
- Languages: English, Hindi, Gujarati

### Key Design Challenges

- **Broad audience accessibility** — The website must feel approachable to a shopkeeper printing one cheque AND a finance head managing thousands. Clean, simple design with no unnecessary complexity.
- **Trust building for financial product** — Cheque management involves money. The website needs to convey reliability and security through professional design, social proof, and clear product demonstrations.
- **Multi-language UX consistency** — Hindi and Gujarati text is typically longer than English. Layout must accommodate all three languages without breaking design patterns.
- **Beating a dated competitor** — ChequePot looks like a 2016 Bootstrap template. Cheqify needs to look unmistakably modern to instantly signal "this is the better product."

### Design Opportunities

- **Visual continuity with the app** — The dark navy sidebar, teal accents, and card-based layout from the live product create a ready-made design language. The website can feel like a natural extension of the product.
- **Demo-first storytelling** — Unlike ChequePot (no video), Cheqify can lead with a demo video showing how fast and easy cheque printing is — this is a massive conversion advantage.
- **"Start Free" as a trust signal** — Free tier messaging eliminates price hesitation. Make it the dominant CTA everywhere, unlike ChequePot which hides pricing.
- **Light/dark mode** — A differentiator that signals modern, thoughtful design. No competitor offers this.
- **Tabbed content sections** — Use tabs for organizing feature details (e.g., Cheque Printing | Lifecycle Tracking | Owner Dashboard), allowing users to explore without scrolling through everything. Cleaner than ChequePot's implementation — modern tab design with smooth transitions.

### Brand Direction

- **Colors:** Dark navy (`~#0d2137`), teal/cyan (`~#00b4a6`), white — matching the existing app
- **Typography:** Clean, minimal sans-serif — no fancy fonts
- **Feel:** Modern, techy, trustworthy — simple + fast over over-designed
- **Logo:** Printer icon with cheque + "Cheqify.app" wordmark (navy + teal)

## Core User Experience

### Defining Experience

The website's core experience is **conversion through clarity**. Every page must make Cheqify's value instantly obvious and guide visitors toward action. The primary action is clicking "Start Free", but secondary actions are equally important for understanding visitor intent:

- **Primary:** "Start Free" sign-up → app.cheqify.app/register
- **Secondary:** Watch demo video, initiate live chat, submit contact form, read blog content
- **Returning users:** "Login" → app.cheqify.app/login

Each action provides insight into what visitors need and where they are in their decision journey.

### Platform Strategy

- **Web-first, responsive** — Next.js (App Router) with Tailwind CSS
- **Mobile-optimized** — Many target users (shopkeepers, individuals) will visit from phones
- **No offline requirement** — Pure marketing site, always connected
- **Fast load times** — Critical for SEO and bounce rate; target under 3 seconds on mobile
- **Light/dark mode** — User toggle with system preference detection
- **3 languages at launch** — English (default), Hindi, Gujarati with layout accommodation for varying text lengths

### Effortless Interactions

- **Instant comprehension** — Visitor understands what Cheqify does within 5 seconds of landing on any page
- **One-click conversion** — "Start Free" button visible at all times (sticky header), no extra steps before redirect to app
- **Language switching** — Seamless toggle without page reload or loss of position
- **Feature exploration** — Tabbed content lets users self-select what interests them (Printing | Tracking | Dashboard) without endless scrolling
- **Live chat access** — Always available, never intrusive
- **Dark/light mode** — Instant toggle, remembers preference

### Critical Success Moments

1. **The 5-second hook (make-or-break)** — Hero section must immediately communicate: "Print cheques error-free in 2 minutes. Free to start." Clean, modern design that signals trust. If this fails, visitor bounces.
2. **The "this is easy" moment** — Watching the demo video and realizing Cheqify requires zero training, works on any device, and just needs a printer connection
3. **The "this is better" moment** — Seeing Cheqify's modern UI vs remembering ChequePot's dated look. The design itself communicates superiority.
4. **The "why not try" moment** — Seeing "Start Free" with no credit card required removes all friction. Nothing to lose.
5. **The trust confirmation** — Social proof (user count, testimonials, screenshots of real product) validates the decision to sign up

### Experience Principles

1. **Clarity over cleverness** — Simple, direct messaging. No jargon, no marketing fluff. If a shopkeeper in Gujarat can understand it, the copy is right.
2. **Show, don't tell** — Demo video, product screenshots, and real UI over feature bullet lists. The product is live — let it speak for itself.
3. **Every page converts** — "Start Free" CTA present on every page. No dead-end pages. Every scroll leads toward action.
4. **Modern = trustworthy** — Clean design, smooth animations, dark/light mode, responsive layout — these signal a product that's actively maintained and reliable.
5. **Understand the visitor** — Multiple action paths (demo, chat, contact, blog) help us learn what visitors need, not just push them toward sign-up.

## Desired Emotional Response

### Primary Emotional Goals

- **Trust & professionalism** — "This looks reliable. My money is safe with this tool."
- **Simplicity & confidence** — "This is so simple, even I can use it without any help."
- **Modern superiority** — "This is way better than anything else I've seen for cheque management."
- **Zero-risk comfort** — "It's free to start — why not try it?"

### Emotional Journey Mapping

| Stage | Desired Feeling |
|-------|----------------|
| **Landing on website** | "This looks professional and trustworthy. Clean and modern." |
| **Reading hero section** | "I instantly understand what this does. No confusion." |
| **Watching demo video** | "This is so easy! No training needed. Works on my phone too." |
| **Browsing features** | "This does everything I need — printing, tracking, dashboard." |
| **Seeing "Start Free"** | "Nothing to lose. Let me try it right now." |
| **Telling a friend** | "You have to check this out — it's free and super easy." |
| **Returning to website** | "Let me just login — I already trust this." |

### Micro-Emotions

**Must cultivate:**
- **Confidence over confusion** — Every element must be self-explanatory. Non-tech users and older users should never feel lost.
- **Trust over skepticism** — Professional design, real product screenshots, social proof numbers build credibility.
- **Accomplishment over frustration** — Finding information, switching languages, reaching "Start Free" should feel effortless.
- **Delight over mere satisfaction** — Modern animations, dark/light mode toggle, smooth transitions create moments of "this is nice."

**Must avoid:**
- **Confusion** — Complex language, unclear navigation, too much information at once
- **Distrust** — Cheap-looking design, missing information, broken elements
- **Overwhelm** — Too many options, too much text, cluttered layouts
- **Price anxiety** — Hidden costs, unclear pricing, feeling pushed to pay before trying

### Design Implications

| Emotion | UX Design Approach |
|---------|-------------------|
| **Trust** | Professional color palette (navy/teal/white), consistent typography, real product screenshots, social proof stats prominently displayed |
| **Simplicity** | Large clear headings, short paragraphs, generous whitespace, obvious navigation, no jargon |
| **Accessibility for non-tech/older users** | Large tap targets on mobile, readable font sizes (16px+ body), high contrast, clear button labels ("Start Free" not "Get Started"), simple language |
| **Mobile confidence** | Mobile-first responsive design, thumb-friendly navigation, fast load, no horizontal scrolling, full functionality on small screens |
| **Zero-risk comfort** | "Start Free" prominent everywhere, "No credit card required" messaging, free tier highlighted before paid plans |
| **Modern superiority** | Smooth animations, dark/light mode, tabbed content, clean card-based layouts — everything ChequePot doesn't have |

### Emotional Design Principles

1. **If grandma can't understand it, simplify it** — Design for the least technical user. If a non-tech older person can navigate the site on their phone without help, the UX is right.
2. **Trust is earned in pixels** — Every design choice (color, spacing, typography, imagery) either builds or erodes trust. No shortcuts.
3. **Free removes fear** — "Start Free" messaging must eliminate all pricing anxiety before it even forms. Lead with free, explain paid later.
4. **Mobile isn't secondary** — Many target users (shopkeepers, individuals) will only ever see the website on their phone. Mobile experience must be equal to or better than desktop.
5. **Modern design is the message** — The website's look alone should communicate "this product is better" without reading a single word.

## UX Pattern Analysis & Inspiration

### Inspiring Products Analysis

**1. Razorpay (razorpay.com)**
- Clean, modern hero with clear value proposition and single CTA
- Dark/light aesthetic with bold brand colors (blue)
- Product screenshots and animations that show the product in action
- Simple navigation with sticky header
- Mobile-first responsive design
- Trust signals: customer logos, stats, testimonials
- **What to learn:** Conversion-focused homepage design, bold visual identity, product-led storytelling

**2. Zoho (zoho.com)**
- Multi-product platform with clean information architecture
- Feature pages with tabbed content and detailed breakdowns
- Freemium messaging front and center ("Free plan available")
- Multi-language support across Indian and global languages
- Professional yet approachable tone
- **What to learn:** Feature page organization with tabs, multi-language UX, freemium positioning, clean information hierarchy

**3. ChequePot (chequepot.com) — "Do it better" reference**
- Features section with tabbed content — adopt but modernize
- Testimonials with real names and locations — adopt with better design
- Social proof stats (users, cheques printed, banks) — adopt with better visual presentation
- **What to improve on:** Dated visual design, auto-rotating carousel, hidden pricing, no demo video, overwhelming footer, generic CTAs

### Transferable UX Patterns

**Navigation Patterns:**
- **Sticky header with CTA** (Razorpay) — "Start Free" always visible as user scrolls, never more than one click away
- **Clean top nav with 5-7 items** (Zoho) — Home, Features, Pricing, Blog, Contact, About Us + Login/Start Free as distinct buttons

**Interaction Patterns:**
- **Tabbed feature sections** (ChequePot + Zoho) — Organize features into Cheque Printing | Lifecycle Tracking | Owner Dashboard tabs with screenshots per tab
- **Animated product showcases** (Razorpay) — Instead of static screenshots, use subtle animations or transitions to show the product in action
- **Language switcher in header** (Zoho) — Clean dropdown or toggle for English/Hindi/Gujarati

**Visual Patterns:**
- **Stats bar with social proof** (Razorpay + ChequePot) — "X cheques printed | Y users | Z banks supported" with clean icons and numbers
- **Testimonial cards with photos** (ChequePot improved) — Real user quotes with name, business type, and location
- **Hero section with product screenshot** (Razorpay) — Static hero (no carousel), clear headline, one CTA, product screenshot or demo video

**Content Patterns:**
- **"How it works" 3-step section** (common SaaS) — Sign Up → Set Up Your Cheque → Print. Simple visual flow.
- **Feature cards with icons** (Zoho) — Clean grid of feature highlights with icons before the detailed tabbed section

### Anti-Patterns to Avoid

- **Auto-rotating hero carousel** (ChequePot) — Users miss slides 2-3. Use a static hero with one strong message.
- **Hidden pricing** (ChequePot) — SaaS visitors expect to see pricing. Don't hide it behind a separate page with no homepage mention.
- **Multiple competing CTAs** (ChequePot) — "Get Started" vs "Register Now" vs "Learn More" creates decision paralysis. One primary CTA: "Start Free."
- **Blog on external subdomain** (ChequePot uses tawk.help) — Kills SEO value. Blog must be on the main domain.
- **Overwhelming footer with 40+ links** (ChequePot) — Keep footer clean with essential links only.
- **Dead social links** (ChequePot has Google+) — Only show active social channels.
- **Generic button copy** — "Get Started" is vague. "Start Free" communicates value instantly.

### Design Inspiration Strategy

**What to Adopt:**
- Razorpay's sticky header with prominent CTA button
- Razorpay's static hero with product screenshot and single clear headline
- Zoho's tabbed feature organization
- Zoho's multi-language switcher pattern
- ChequePot's social proof stats bar (redesigned modern)
- ChequePot's real-user testimonials (redesigned modern)
- Common SaaS "How it works" 3-step section

**What to Adapt:**
- Razorpay's dark aesthetic → adapt to Cheqify's navy/teal palette with light/dark mode toggle
- Zoho's feature page depth → simplify for non-tech users with larger text, more visuals, less copy
- ChequePot's feature tabs → modernize with smooth transitions, product screenshots per tab

**What to Avoid:**
- ChequePot's carousel, hidden pricing, external blog, cluttered footer
- Over-designed animations that slow page load on mobile
- Enterprise-heavy language that alienates individual users

## Design System Foundation

### Design System Choice

**shadcn/ui** — A Tailwind CSS-based component library built on Radix UI primitives, designed for Next.js applications. Components are copied into the project (not installed as a dependency), giving full ownership and customization control.

### Rationale for Selection

- **Tech stack alignment** — Built specifically for Next.js + Tailwind CSS, the exact stack Cheqify uses
- **Dark/light mode native** — Built-in theme switching via CSS variables, matching our light/dark mode requirement
- **Accessibility first** — Built on Radix UI primitives with WCAG compliance, critical for non-tech and older users
- **Full customization** — Components are owned code, not locked dependencies. Easy to match Cheqify's navy/teal brand palette
- **Performance** — No external runtime dependency, minimal bundle size, fast page loads for SEO and mobile
- **Community & ecosystem** — Widely adopted in Next.js community, excellent documentation, active maintenance
- **Pre-built patterns we need** — Tabs, navigation menus, cards, buttons, dialogs, dropdowns, sheets (mobile menus) — all available out of the box

### Implementation Approach

- Install shadcn/ui CLI and initialize with Tailwind CSS config
- Configure CSS variables for Cheqify brand colors (navy, teal, white) in both light and dark themes
- Copy required components as needed: Button, Card, Tabs, NavigationMenu, Sheet, Dialog, DropdownMenu, Badge
- Extend with custom components for: hero section, testimonial cards, stats bar, feature showcase, language switcher
- Use `next-themes` for dark/light mode toggle with system preference detection

### Customization Strategy

**Brand Token Mapping:**

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| Primary | Teal (`~#00b4a6`) | Teal (`~#00b4a6`) |
| Background | White (`#ffffff`) | Dark navy (`~#0d2137`) |
| Foreground | Dark navy (`~#0d2137`) | White (`#ffffff`) |
| Card | Light gray (`~#f8fafb`) | Navy (`~#132d46`) |
| Accent | Teal light (`~#e0f7f5`) | Teal dark (`~#0a3d38`) |
| Muted | Gray (`~#6b7280`) | Gray (`~#9ca3af`) |
| Border | Gray (`~#e5e7eb`) | Navy light (`~#1e3a5f`) |

**Typography:**
- Clean sans-serif (Inter or system font stack)
- Body: 16px minimum for readability
- Headings: Bold weight, clear hierarchy

**Component Customization:**
- Buttons: Rounded, teal primary with navy text
- Cards: Subtle borders, clean shadows matching the app's card style
- Tabs: Underline style with teal active indicator
- Navigation: Sticky header, clean spacing, "Start Free" as a distinct teal button

## Defining Core Experience

### Defining Experience

**"Understand the value and click Start Free in under 60 seconds"**

The website's defining experience is conversion through instant clarity. A visitor must go from "What is this?" to "I want to try this" faster than any competitor. The product's defining experience (print a cheque in 2 minutes) is communicated through the website, but the website's own core interaction is the decision to sign up.

### User Mental Model

**How visitors think:**
- They search Google for cheque-related problems, open 2-3 results, spend 10-30 seconds on each
- First impression decides everything — modern design = trustworthy, dated design = skip
- They compare on 3 factors: trust, cost, and bank compatibility
- Mobile users (40-60%) decide in 5-10 seconds
- The first site that looks modern + free + easy wins — they rarely go back to compare

**Three questions every visitor asks (in this order):**
1. "What is this?" → Hero headline must answer instantly
2. "Is it free?" → CTA and subtext must confirm
3. "Does it work with my bank?" → Bank logos must be visible immediately

### Success Criteria

- Visitor understands product value within 5 seconds of landing
- "Start Free" CTA is visible without scrolling on any device
- Bank compatibility is confirmed above the fold (logos)
- Trust is established through design quality, security badges, and social proof
- Demo video is one click away from the hero
- No confusion about pricing — "Free forever for basic use" is explicit

### Hero Section Specification

**Layout:** Split — text left, product visual right (desktop). Stacked — text top, visual below (mobile).

**Content:**
- **Headline:** "Print Error-Free Cheques in Under 2 Minutes"
- **Subheadline:** "Print, track, and manage cheques from any device. Works with 300+ Indian banks. No training needed — just sign up and print."
- **Primary CTA:** "Start Free" (teal button) → app.cheqify.app/register
- **Secondary CTA:** "Watch Demo" (outline button with ▶ icon)
- **Below CTA:** "No credit card required. Free forever for basic use."
- **Visual:** Product screenshot or demo video thumbnail with play button

**Trust Bar (below hero):**
- 🔒 Bank-Grade Security | 🏦 300+ Indian Banks | 📱 Works on Any Device | ✨ Free Forever

**Bank Logos Strip (below trust bar):**
- SBI, HDFC, ICICI, Axis, PNB, Kotak, BOB, Yes Bank, IndusInd + "300+ more"

### Addressing User Hesitations

| Hesitation | Website Response |
|-----------|-----------------|
| **Trust & security** | "Bank-grade security" badge, "256-bit SSL encrypted", professional design quality, "Your data never leaves India" |
| **Bank compatibility** | Bank logos grid above the fold, "Works with all Indian banks", "Can't find your bank? We'll add it in 24 hours" |
| **Pricing confusion** | "Start Free" (not "Free Trial"), "No credit card required", "Free forever for basic use", clear pricing page |

### Novel UX Patterns

The website uses **established SaaS marketing patterns** — no novel interactions needed. The innovation is in execution quality:

- **Static hero** (proven) over carousel (anti-pattern) — but with higher-quality visuals than competitors
- **Tabbed features** (proven) — but with real product screenshots per tab, not generic illustrations
- **Trust bar** (proven) — but with India-specific trust signals (bank logos, data residency)
- **"How it works" 3-step** (proven) — but with Cheqify-specific copy that emphasizes speed and simplicity

The unique twist: combining all these established patterns with a modern dark/light aesthetic and mobile-first design that no competitor in the Indian cheque space offers.

## Visual Design Foundation

### Color System

**Primary Palette (derived from Cheqify.app product):**

| Role | Light Mode | Dark Mode | Usage |
|------|-----------|-----------|-------|
| **Primary** | `#00b4a6` (Teal) | `#00b4a6` (Teal) | CTAs, links, active states, brand accents |
| **Primary Hover** | `#009e92` | `#00c8b8` | Button hover, link hover |
| **Background** | `#ffffff` (White) | `#0d2137` (Dark Navy) | Page background |
| **Surface/Card** | `#f8fafb` (Light Gray) | `#132d46` (Navy) | Cards, sections, elevated surfaces |
| **Foreground** | `#0d2137` (Dark Navy) | `#f1f5f9` (Off-white) | Primary text |
| **Muted Text** | `#6b7280` (Gray) | `#9ca3af` (Light Gray) | Secondary text, descriptions |
| **Border** | `#e5e7eb` (Light Border) | `#1e3a5f` (Navy Border) | Dividers, card borders |
| **Accent** | `#e0f7f5` (Teal Tint) | `#0a3d38` (Teal Dark) | Badges, highlights, selected states |

**Semantic Colors:**

| Role | Color | Usage |
|------|-------|-------|
| **Success** | `#22c55e` (Green) | Cleared cheques, positive states |
| **Warning** | `#f59e0b` (Amber) | Pending clearance, attention needed |
| **Error** | `#ef4444` (Red) | Returned cheques, errors, bounced |
| **Info** | `#3b82f6` (Blue) | Informational badges, tooltips |

**Contrast Ratios (WCAG AA compliance):**
- Primary text on background: 12.5:1 (light), 13.2:1 (dark) — passes AAA
- Muted text on background: 4.8:1 (light), 4.6:1 (dark) — passes AA
- Primary teal on white: 3.2:1 — use only for large text/buttons, not small body text
- Primary teal on dark navy: 5.1:1 — passes AA

### Typography System

**Font Family:** Inter (Google Fonts) — clean, modern, excellent readability at all sizes. Fallback: system sans-serif stack.

**Why Inter:**
- Designed specifically for screens
- Excellent support for Latin + Devanagari (Hindi) script rendering
- Used by Vercel, Linear, Stripe — signals "modern tech product"
- Free, open-source, fast to load via Google Fonts or self-hosted

**Type Scale (based on 16px base):**

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| **Display** | 48px / 3rem | 700 (Bold) | 1.1 | Hero headline only |
| **H1** | 36px / 2.25rem | 700 (Bold) | 1.2 | Page titles |
| **H2** | 28px / 1.75rem | 600 (Semibold) | 1.3 | Section headings |
| **H3** | 22px / 1.375rem | 600 (Semibold) | 1.4 | Sub-section headings |
| **H4** | 18px / 1.125rem | 600 (Semibold) | 1.4 | Card titles, feature names |
| **Body** | 16px / 1rem | 400 (Regular) | 1.6 | Paragraphs, descriptions |
| **Body Large** | 18px / 1.125rem | 400 (Regular) | 1.6 | Hero subheadline, intros |
| **Small** | 14px / 0.875rem | 400 (Regular) | 1.5 | Captions, metadata, badges |
| **Tiny** | 12px / 0.75rem | 500 (Medium) | 1.4 | Labels, tags |

**Mobile Adjustments:**
- Display: 32px (scaled down from 48px)
- H1: 28px (scaled down from 36px)
- H2: 22px (scaled down from 28px)
- Body remains 16px — never smaller for readability

### Spacing & Layout Foundation

**Base Unit:** 4px — all spacing is a multiple of 4px for visual consistency.

**Spacing Scale:**

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight inline spacing, icon gaps |
| `sm` | 8px | Between related elements, inner padding |
| `md` | 16px | Component padding, form fields |
| `lg` | 24px | Between components, card padding |
| `xl` | 32px | Section internal padding |
| `2xl` | 48px | Between sections (mobile) |
| `3xl` | 64px | Between sections (desktop) |
| `4xl` | 96px | Major section breaks, hero spacing |

**Layout Grid:**
- **Desktop:** 12-column grid, max-width 1280px, centered, 32px gutters
- **Tablet:** 8-column grid, 24px gutters
- **Mobile:** 4-column grid, 16px side padding

**Layout Principles:**
1. **Airy and spacious** — Generous whitespace between sections (64-96px desktop). This builds trust and feels premium, aligning with fintech expectations.
2. **Content width constraint** — Text lines never exceed 70 characters for readability. Content sections use max-width 768px for prose.
3. **Visual rhythm** — Consistent vertical spacing creates predictable, scannable pages. Same spacing between similar elements throughout.
4. **Mobile breathing room** — Even on mobile, maintain 48px between sections. Never let content feel cramped.

**Icon System:**
- **Lucide Icons** — Clean line icons, consistent 24px default size, same style as shadcn/ui defaults
- Used for: feature cards, trust bar, navigation, social links
- Style: 1.5px stroke weight, rounded caps — matches Inter font's clean feel
- Colors: inherit from text color (foreground in light, off-white in dark)

### Accessibility Considerations

- **Minimum font size:** 16px body text — critical for older and non-tech users
- **Touch targets:** Minimum 44x44px on mobile (WCAG 2.5.5)
- **Color contrast:** All text meets WCAG AA (4.5:1 for body, 3:1 for large text)
- **Focus indicators:** Visible teal outline ring (2px) on all interactive elements for keyboard navigation
- **Motion:** Respect `prefers-reduced-motion` — disable animations for users who request it
- **Language:** Hindi and Gujarati text may require slightly larger line-height (1.7) due to character height
- **Dark mode:** Not just inverted colors — carefully tuned surface hierarchy so content remains scannable
- **Screen readers:** Proper semantic HTML, ARIA labels on icons, skip-to-content link
