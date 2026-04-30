# Rank #1 for "Cheque Print" Searches — Action Plan

**Saved:** 2026-04-30
**Goal:** Cheqify.app on page 1 of Google for cheque-printing keywords (India)
**Current state:** Technical SEO 9/10 (per SEO-PLAN.md). Blockers = content depth, backlinks, indexing.

---

## Step 1 — Get every page indexed (this week, manual)

- Open Google Search Console → "URL Inspection → Request Indexing" for the 6 main English pages + every published blog post.
- Confirm `sitemap.xml` is submitted in GSC.
- Current: 11/51 indexed. The other 40 can't rank until Google crawls them.

## Step 2 — Validate target keywords (this week, manual)

**Status:** Step 2A complete (2026-04-30) — see `_bmad-output/seo/step-2-keyword-research-results.md` for full analysis.

**Headline finding:** "free cheque printing software" / "cheque printing software free" are the #1 + #2 most-searched terms in India and growing +70% YoY. Cheqify's free positioning is the perfect product–market fit. MoneyFlex (incumbent) is declining -40% — direct comparison post is a high-leverage win.

**Step 2B (still pending):** GSC → Performance → Date: Last 3 months → Filter: Position > 8 AND Position < 20 → Sort by Impressions desc → export top 20 rows as CSV → save at `_bmad-output/seo/step-2-gsc-quickwins.csv`.

## Step 3 — Publish content on a 2/week cadence

- Publish drafts #13 (Bulk Cheque Printing, 2026-05-04) and #14 (Cheque Lifecycle Management, 2026-05-07) into Sanity.
- Then work through tasks #24–#33 in `SEO-PLAN.md`:
  - "how to print cheque in india"
  - "cheque printing software free"
  - "MICR code cheque printing"
  - "bulk cheque printing for business"
  - "cheque bounce reasons india"
  - "CTS 2010 cheque format"
  - "cheque vs digital payment india"
  - "how to fill cheque correctly"
  - "cheque lifecycle management"
  - "chequepot alternative free"
- **After every publish:** `npm run build` + redeploy (sitemap is baked at build time), then Request Indexing in GSC.

## Step 4 — Build backlinks (biggest remaining gap)

This is what moves the site from page 2 → page 1. All manual; all pending in Phase 6.

**SaaS directories:**
- Product Hunt
- AlternativeTo (list as "ChequePot alternative")
- G2
- Capterra
- SaaSHub
- GetApp
- SoftwareSuggest

**Indian startup directories:**
- StartupIndia
- YourStory
- Inc42

**Active link-building:**
- Answer Quora questions about cheque printing in India, link to relevant blog posts.
- Pitch guest posts to Indian fintech / banking blogs.
- Reach out to bloggers who write "best cheque printing software" listicles.

## Step 5 — Monitor + iterate (weekly, ongoing)

- Search "cheque printing software india" in incognito every Monday — note who ranks above and what content they have.
- GSC weekly review:
  - Which queries gained impressions?
  - Which pages got indexed?
  - Update titles/meta on pages stuck at #11–#20.

---

## Realistic timeline

- Page 1 for medium-competition keywords (e.g., "cheque printing software free"): **8–12 weeks** with consistent execution.
- Page 1 for the head term "cheque printing software": longer — depends on backlink growth.

## Non-negotiables

1. **Publish weekly** (2 posts/week target).
2. **Submit to 5+ directories per month.**
3. **Rebuild + Request Indexing** after every Sanity publish.

---

## GSC Error (logged 2026-04-30)

**Error:** `FAQ — Missing field 'text' (in 'mainEntity.acceptedAnswer')`
**Affected URLs (3):**
- `https://cheqify.app/en/blog/section-138-ni-act-cheque-bounce-india`
- `https://cheqify.app/hi/blog/section-138-ni-act-cheque-bounce-india`
- `https://cheqify.app/gu/blog/section-138-ni-act-cheque-bounce-india`

**Root cause:** One or more `faqItems` rows on this post in Sanity has an empty `answer` field. `faqItems` is shared across all 3 locales, so all 3 URLs report the error.

**Fix applied (code, 2026-04-30):**
- `src/app/[locale]/blog/[slug]/page.tsx` — JSON-LD generator and visible FAQ accordion now filter out items with empty `question` or `answer`. An incomplete row can no longer ship invalid schema.

**Manual follow-up (Sanity):**
1. Open the `section-138-ni-act-cheque-bounce-india` post in Sanity Studio.
2. Open the FAQ Items array — confirm all 4 Q&As have both Question and Answer filled. Reference: `_bmad-output/blog-content/post-11-section-138-ni-act.md` lines 357–373.
3. Republish.
4. Rebuild + redeploy (sitemap/static pages need it).
5. In GSC → FAQ report → click **VALIDATE FIX**.
