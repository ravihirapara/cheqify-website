# Rank #1 for "Cheque Print" Searches — Action Plan

**Saved:** 2026-04-30 (last updated 2026-05-05)
**Goal:** Cheqify.app on page 1 of Google for cheque-printing keywords (India)
**Current state:** Technical SEO 9/10 (per SEO-PLAN.md). Blockers = content depth, backlinks, indexing.

---

## Status Snapshot — 2026-05-05 (end of session)

### ✅ Completed today
- **Ahrefs site audit cleanup** — trimmed oversized titles + meta descriptions across en/hi/gu (commit `ff062d9`). All titles now ≤55 chars; descriptions in 110–160 sweet spot for features, pricing, comparison, glossary.
- **6 new SEO landing pages built** (EN content live; hi/gu use EN placeholders pending translation):
  - `/amount-in-words-tool` — interactive INR rupees-to-words widget (lakh/crore/paise) with how-to guide and FAQ. Targets ~3,470 vol cluster: "amt in words", "how to write amount in words", "100000/200000/15 lakh in words for cheque".
  - `/online-cheque-printing` — targets ~2,360 vol cluster: "online cheque printing", "cheque print online", "print cheque online", "cheque printing online".
  - `/cheque-printing-excel-format` — targets ~2,560 vol cluster: "cheque printing excel format", "cheque print format in excel", "cheque printing template excel", "free cheque printing software in excel".
  - `/cheque-printing-word-format` — targets ~1,560 vol cluster: "cheque print format in word", "cheque printing format in word", "cheque printing template word".
  - `/cheqify-vs-moneyflex` — targets ~2,860 vol cluster: "moneyflex cheque printing software", "money flex check printing software", "money flex check print".
  - `/cheqify-vs-chrysanth` — targets ~980 vol cluster: "chrysanth cheque writer", "chrysanth cheque writer free for india", "chrysanth cheque writer free download".
- **Tier-1 keyword density** — wove "cheque writer software", "cheque writing software", "cheque print software" into existing home and features FAQ copy (commit `42225fa`).
- **Footer reorganized** — added Solutions and Compare columns linking to all 6 new pages so they're crawlable from every page.
- **Sitemap updated** — 16 static routes × 3 locales (was 10 × 3).
- **Reusable components** — extracted `LandingFaq` and `LandingCta`, refactored `comparison-*` and `excel-format-*` to take a namespace prop so the same components serve multiple landing pages.

### ⏳ Pending (next session)
1. **Translate hi/gu content** for the 6 new pages (currently EN placeholders). High priority for the comparison pages (MoneyFlex, Chrysanth) since competitor brand searches happen in Hindi/Gujarati too.
2. **Rebuild + GSC Request Indexing** for all 18 new URLs (6 pages × 3 locales) once Netlify deploys.
3. **Backlink push** to make the new comparison pages rank — the comparison cluster is the highest commercial-intent and easiest to win.
4. **Investigate the 3 new 404s** flagged in Ahrefs (still pending — needs URL list export).

### 🚫 Known limitation (unchanged)
- Cheqify is still invisible to Google for head terms. The new pages need backlinks to rank. **Step 4 (backlinks) remains the unlock.**

---

## Keyword Cluster Map (2026-05-05)

| Cluster | Volume | Page | Status |
|---|---:|---|---|
| amt in words / amount in words / 100000/200000/15 lakh in words | ~3,470 | `/amount-in-words-tool` | ✅ live |
| online cheque printing variants | ~2,360 | `/online-cheque-printing` | ✅ live |
| cheque printing excel format / template / software in excel | ~2,560 | `/cheque-printing-excel-format` | ✅ live |
| cheque printing word format / template variants | ~1,560 | `/cheque-printing-word-format` | ✅ live |
| moneyflex cheque printing software variants | ~2,860 | `/cheqify-vs-moneyflex` | ✅ live |
| chrysanth cheque writer variants | ~980 | `/cheqify-vs-chrysanth` | ✅ live |
| cheque printing software / cheque print | 3,600 | `/` + `/features` | density injection done |
| cheque writer / cheque writing | 1,300 each | `/` FAQ | density injection done |
| cheque printing software free / free cheque printing software | 1,300 + 1,000 | `/pricing` | already covered |

**Total new addressable volume:** ~14,000 monthly searches across the 6 new pages.

---

## Status Snapshot — 2026-04-30 (previous session)

### ✅ Completed
- **Step 1** — Indexing requests submitted in GSC for top English pages + all 12 published blog posts. Hit daily quota mid-list. Sitemap confirmed submitted.
- **Step 2A** — Keyword research done: Trends + Ubersuggest + Keyword Surfer + AnswerThePublic. Findings in `step-2-keyword-research-results.md`. Headline: `cheque printing software free` is #1 query (interest 100, +70% YoY).
- **Step 2B** — GSC quick-wins exported. Found 7 query variants on positions 8–13, all hitting post-12 (`cheque-validity-period-stop-payment-india`). Raw export in `keyword-data/gsc-performance-2026-04-30/`.
- **Step 4 prep** — Directory submission checklist drafted at `step-4-directory-submissions.md` (18 directories, 6-week cadence, copy-paste fields ready).
- **Code/SEO ship** — all pushed, all on `master`, deployed by Netlify:
  - GSC FAQ error fixed (commit `ef69e5a`) — defensive filter drops empty Q&A from JSON-LD.
  - VideoObject JSON-LD added to homepage (commits `04c9856` + `daaf5ea`) — addresses GSC "Video isn't on a watch page" error.
  - Title/meta rewrites for `/features`, `/pricing`, `/comparison` across en/hi/gu (commit `5c27a59`) — front-load "Free Cheque Printing Software" + value props to fix CTR (was 0% on /comparison @ 44 imps, /features @ 21 imps).
- **Post-12 quick-win FAQs drafted** — 7 new Q&As (Q5–Q11) appended to `post-12-cheque-validity-stop-payment.md` matching exact GSC quick-win queries (commit `5682122`).

### ⏳ Pending (manual — Ravi to do)
1. **Sanity Studio → post-12** — paste Q5–Q11 into FAQ Items array → Publish.
2. **Trigger Netlify rebuild** after Sanity publish (push any commit, or use Netlify dashboard "Trigger deploy").
3. **GSC Request Indexing** for these 12 URLs after deploy goes green:
   - `/en/features`, `/en/pricing`, `/en/comparison`
   - `/hi/features`, `/hi/pricing`, `/hi/comparison`
   - `/gu/features`, `/gu/pricing`, `/gu/comparison`
   - `/en/blog/cheque-validity-period-stop-payment-india`
   - `/hi/blog/cheque-validity-period-stop-payment-india`
   - `/gu/blog/cheque-validity-period-stop-payment-india`
4. **GSC Validate Fix**:
   - FAQ → "Missing field 'text'" (after Sanity republish + rebuild)
   - Videos → "Video isn't on a watch page" (already validating since 29/04, will re-evaluate with new schema)
5. **Step 3 content backlog** — 4 high-priority new posts identified:
   - `cheqify-vs-moneyflex` (high commercial intent, declining incumbent)
   - `cheqify-vs-chrysanth-cheque-writer` (same logic)
   - `excel-cheque-printing-template-vs-cheqify` (Excel-using SMBs)
   - `cheque-number-in-cheque-book-explained` (2,400 mo searches, low competition)
6. **Step 4 directory submissions** — start at 3–4/week per cadence in `step-4-directory-submissions.md`. Week 1 picks: Product Hunt prep, AlternativeTo, SaaSHub.

### 🚫 Known limitation
- Cheqify is currently invisible to Google for head terms (`cheque printing software free`, etc.) — not even in top 100. Content + on-page work alone won't move these. **Step 4 (backlinks) is the actual unlock.** Don't expect head-term ranking shifts without it.

---

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
