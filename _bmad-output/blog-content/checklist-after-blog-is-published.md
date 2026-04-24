# Checklist After Blog Is Published

Every new blog post on Cheqify.app needs these steps after going live on Sanity. Takes ~15 minutes per post but directly determines how fast Google indexes it and how high it ranks.

---

> ⚠️ **Critical reminder — the site is a static export.**
>
> The sitemap.xml is baked in at build time. When you publish a new blog in Sanity, the post itself appears via Sanity's fetch — **but the sitemap will NOT include the new URL until you rebuild and redeploy.** Every step below (especially Google indexing) depends on the sitemap being current, so this must happen FIRST.

---

## Per-Post SEO Workflow (run immediately after publish)

### 0. Rebuild and verify sitemap contains the new URL

This step is mandatory before doing anything else. Without a rebuild, GSC will never discover the new post via the sitemap.

- Either:
  - Run `npm run build` locally → upload `out/` folder to Netlify (manual deploy), OR
  - If the Sanity → Netlify build hook is wired up, just confirm a fresh deploy triggered automatically after publishing in Sanity Studio.
- After the deploy finishes, open `https://cheqify.app/sitemap.xml` and confirm all 3 new locale URLs are listed:
  - `https://cheqify.app/en/blog/<slug>`
  - `https://cheqify.app/hi/blog/<slug>`
  - `https://cheqify.app/gu/blog/<slug>`
- If any are missing, the build hit a cache or the Sanity fetch failed — re-run `npm run build` and redeploy before continuing.

### 1. Verify the post is live and indexable

- Open all 3 locale URLs in an incognito window:
  - `https://cheqify.app/en/blog/<slug>`
  - `https://cheqify.app/hi/blog/<slug>`
  - `https://cheqify.app/gu/blog/<slug>`
- View page source (Ctrl+U) → confirm:
  - `<title>` matches your Sanity title
  - `<meta name="description">` matches your Sanity description
  - `<link rel="canonical">` points to the correct locale URL
  - `hrefLang` tags exist for `en`, `hi`, `gu`, and `x-default`
  - JSON-LD schema block renders (look for `"@type":"Article"`, and `"FAQPage"` if FAQ is on)

### 2. Force Google to discover it immediately

**Google Search Console → URL Inspection → paste URL → Request Indexing.** Do this for all 3 locale URLs. Without this, Google may take 1–4 weeks to find the post on its own.

### 3. Re-submit the sitemap

GSC → Sitemaps → click your existing sitemap → **Resubmit**. This triggers Google to re-crawl your sitemap and notice the new URLs faster.

### 4. Internal links FROM existing posts TO the new post

**This is the single biggest SEO win people skip.** Open your top-traffic existing blog posts in Sanity Studio and add a contextual link pointing to the new post.

Example — if you publish Post #11 (Section 138), go edit the existing `cheque-bounce-reasons-and-solutions` post and add a sentence like:

> *"For the legal side of what happens when a cheque bounces, see [our full guide to Section 138](/en/blog/section-138-ni-act-cheque-bounce-india)."*

Do this in all 3 languages, using locale-matching URLs.

### 5. Submit to Bing Webmaster Tools

Not just Google. Sign in to [Bing Webmaster Tools](https://www.bing.com/webmasters) → URL Inspection → Submit URL. Bing now powers ChatGPT / Copilot results too, so this matters more than it used to.

### 6. Social distribution (drives crawl signals)

- **LinkedIn:** post using the social copy in each blog's brief doc. Tag 2–3 relevant contacts.
- **Twitter/X:** short version with the URL.
- **1 relevant community:** Indian CA Telegram group, MSME forum, or subreddit if the topic fits.

Google uses social signals + referral traffic as an indirect ranking hint. A post that gets 20 clicks from LinkedIn in its first week ranks noticeably faster than one that doesn't.

### 7. Monitor performance after 7 days

GSC → Performance → Filter by new URL. Check:

- **Impressions appearing?** Good — you're indexed.
- **Zero impressions after 14 days?** → re-check for `noindex` tag, canonical issues, or thin-content flag.
- **Impressions but no clicks?** → title / meta description needs rewriting.
- **What queries you rank for** — often surprising. Add those keywords naturally into the body if you rank on page 2 for them.

### 8. Monitor performance after 30 days

- **Still not ranking?** → add 2–3 more internal links from higher-authority pages (homepage, `/features`, `/pricing`) pointing to the new post.
- **Ranking on page 2 (positions 11–20)?** → refresh the post with an extra 200–300 words on the weakest-covered sub-topic. This is usually enough to push to page 1.

---

## Recurring Weekly Ritual (not per-post)

Every Monday, 10 minutes:

1. **GSC → Performance → last 7 days** — note your top 3 gaining queries. If you're ranking on page 2 for a query, your next blog should target that query.
2. **GSC → Pages → "Not indexed" count** — if rising, investigate (usually canonical or duplicate content).
3. **GSC → Core Web Vitals** — check for any "needs improvement" URLs.
4. **Bing Webmaster Tools → URL Inspection** — spot-check 1 new URL.

---

## One-Time Setup (do once, saves work forever)

- [ ] **Google Search Console** — verified ✓
- [ ] **Bing Webmaster Tools** — verified?
- [ ] **IndexNow protocol** — free, pings Bing/Yandex automatically on new publishes. Netlify supports it via a plugin. Takes ~10 min to set up, saves manual Bing submissions forever.
- [ ] **RSS feed** — does your blog expose an RSS feed at `/rss.xml` or `/feed.xml`? If not, aggregators (Feedly, newsletter tools) can't pull your posts.

---

## Quick Copy-Paste Checklist (per post)

```
[ ] Rebuild triggered (npm run build + redeploy, or auto-deploy via Sanity webhook)
[ ] Confirmed all 3 new URLs appear in https://cheqify.app/sitemap.xml
[ ] Verified all 3 locale URLs render correctly
[ ] Checked title, description, canonical, hreflang, JSON-LD in source
[ ] GSC: Requested indexing for /en URL
[ ] GSC: Requested indexing for /hi URL
[ ] GSC: Requested indexing for /gu URL
[ ] GSC: Sitemap resubmitted
[ ] Added internal links FROM 2+ existing posts TO the new post (all 3 languages)
[ ] Bing Webmaster: URL submitted
[ ] Posted on LinkedIn with social copy
[ ] Shared in 1 relevant community
[ ] Calendar reminder set: check GSC at Day 7
[ ] Calendar reminder set: check GSC at Day 30
```
