# GSC Indexing Queue — All Sitemap URLs

**Generated:** 2026-05-06 (sitemap snapshot after merge `9552ebc`)
**Last updated:** 2026-05-15 — promoted posts #15 + #16 from Future → Day 12; refreshed Future section with #17 + #18
**Total live URLs:** 99 (3 locales × 33 routes; +6 for posts #15/#16)
**GSC daily quota:** ~7 URL Inspection submissions per property per day (observed); 10/day observed on 2026-05-07
**Estimated days to clear:** 12-13 days at observed quota

> Submit each URL via **GSC → URL Inspection → "Request Indexing"**. Bing/Yandex/DuckDuckGo are auto-pinged via IndexNow on every Sanity publish, so this list is Google-only.

---

## How to use this file

1. Pick the next un-checked Day block.
2. Paste each URL one at a time into GSC's URL Inspection bar.
3. Click "Request Indexing" → wait ~30 sec → next URL.
4. Mark the day complete (`[x]`) below.
5. If quota hits mid-day, stop and resume tomorrow.

## Quota reality check

Quota observed on 2026-05-06: **7 URLs/day** (not the 10-12 in Google's docs). Plan is rebalanced to 7/day across 11 days. If your quota is higher one day, do extras and pull from the next day's block — just don't double-submit URLs already requested.

---

## ⚡ PRIORITY — GSC validation-failure fix (2026-05-11)

Two GSC failures (Page with redirect × 2, Crawled-not-indexed × 1) addressed by the fix shipped on 2026-05-11.

### Action 1 — Page with redirect (NO indexing submission needed, just Validate Fix)

After Netlify deploy completes, verify the root no longer 301s:

```
curl -I https://cheqify.app/    →  HTTP/2 200  (was 301 before)
```

Then in GSC:
- Page indexing → "Page with redirect" → **Validate Fix**
- Google re-tests `https://cheqify.app/` and `http://cheqify.app/` over 2-7 days
- Validation should pass because `https://cheqify.app/` now returns 200, not 301

⚠ DO NOT submit `https://cheqify.app/` via URL Inspection → Request Indexing. The canonical is `/en`, so Google should keep indexing `/en` (not `/`).

### Action 2 — Crawled - currently not indexed (HI reconcile-cheques)

After the expanded Hindi body (from `_bmad-output/blog-content/post-08-how-to-reconcile-cheques-HI-expansion.md`) is pasted into Sanity AND Netlify redeploy completes:

```
https://cheqify.app/hi/blog/how-to-reconcile-cheques-with-bank-statements
```

Submit via GSC → URL Inspection → **Request Indexing** (counts against daily quota).

⚠ This URL is already listed under Day 8 below — leave the Day 8 entry as-is; this priority submission supersedes it. Strike through the Day 8 line once submitted here.

Then in GSC:
- Page indexing → "Crawled - currently not indexed" → **Validate Fix**

- [x] Confirmed `https://cheqify.app/` returns 200 after deploy
- [x] "Validate Fix" clicked on "Page with redirect" (2026-05-15)
- [ ] HI reconcile-cheques body pasted into Sanity
- [ ] HI reconcile-cheques URL submitted for re-indexing
- [ ] "Validate Fix" clicked on "Crawled - currently not indexed"

---

## ⚡ PRIORITY — /demo watch page (Video Indexing fix)

These 3 URLs unlock the GSC Video Indexing validation fix (the "Video isn't on a watch page" failure on en/hi/gu home URLs). Submit on the next day after the master deploy goes green and the new sitemap entries are live.

**Pre-flight:** verify https://cheqify.app/sitemap.xml shows the three `/demo` URLs before submitting — if not, the deploy hasn't completed yet.

```
https://cheqify.app/en/demo
https://cheqify.app/hi/demo
https://cheqify.app/gu/demo
```

After submitting all 3: open GSC → Video indexing report → "Validate Fix" on the failing item. Google recrawls homepage, sees the VideoObject schema is gone, and clears the failure for the 3 affected home URLs.

- [ ] /demo URLs submitted to GSC
- [ ] "Validate Fix" clicked in Video Indexing report

---

## Day 1 — HI/GU SEO landing pages (7 of 12 submitted, quota hit) — Done

✅ Submitted on 2026-05-06 before quota cap:
```
✓ https://cheqify.app/hi/amount-in-words-tool
✓ https://cheqify.app/gu/amount-in-words-tool
✓ https://cheqify.app/hi/online-cheque-printing
✓ https://cheqify.app/gu/online-cheque-printing
✓ https://cheqify.app/hi/cheque-printing-excel-format
✓ https://cheqify.app/gu/cheque-printing-excel-format
✓ https://cheqify.app/hi/cheque-printing-word-format
```

⏭ Quota hit at this URL — moved to Day 2:
```
https://cheqify.app/gu/cheque-printing-word-format
https://cheqify.app/hi/cheqify-vs-moneyflex
https://cheqify.app/gu/cheqify-vs-moneyflex
https://cheqify.app/hi/cheqify-vs-chrysanth
https://cheqify.app/gu/cheqify-vs-chrysanth
```

- [x] Day 1 done (7 submitted, 5 deferred)

---

## Day 2 — Carry-over HI/GU landing pages + EN SEO landing + bulk-cheque clean slug (7 URLs) — Done

- ~~https://cheqify.app/gu/cheque-printing-word-format~~
- ~~https://cheqify.app/hi/cheqify-vs-moneyflex~~
- ~~https://cheqify.app/gu/cheqify-vs-moneyflex~~
- ~~https://cheqify.app/hi/cheqify-vs-chrysanth~~
- ~~https://cheqify.app/gu/cheqify-vs-chrysanth~~
- ~~https://cheqify.app/en/amount-in-words-tool~~
- ~~https://cheqify.app/en/online-cheque-printing~~

- [x] Day 2 done

---

## Day 3 — EN SEO landing pages + bulk-cheque clean slug (7 URLs) — Done

- ~~https://cheqify.app/en/cheque-printing-excel-format~~
- ~~https://cheqify.app/en/cheque-printing-word-format~~
- ~~https://cheqify.app/en/cheqify-vs-moneyflex~~
- ~~https://cheqify.app/en/cheqify-vs-chrysanth~~
- ~~https://cheqify.app/en/blog/bulk-cheque-printing-batch-guide-india~~
- ~~https://cheqify.app/hi/blog/bulk-cheque-printing-batch-guide-india~~
- ~~https://cheqify.app/gu/blog/bulk-cheque-printing-batch-guide-india~~

- [x] Day 3 done

---

## Day 4 — Lifecycle blog (3 locales) + money-page locales (7 URLs) — Done

- ~~https://cheqify.app/en/blog/cheque-lifecycle-management-explained~~
- ~~https://cheqify.app/hi/blog/cheque-lifecycle-management-explained~~
- ~~https://cheqify.app/gu/blog/cheque-lifecycle-management-explained~~
- ~~https://cheqify.app/en/features~~
- ~~https://cheqify.app/hi/features~~
- ~~https://cheqify.app/gu/features~~
- ~~https://cheqify.app/en/pricing~~

- [x] Day 4 done

---

## Day 5 — Money pages (pricing/comparison) + homepages (7 URLs) — Done

- ~~https://cheqify.app/hi/pricing~~
- ~~https://cheqify.app/gu/pricing~~
- ~~https://cheqify.app/en/comparison~~
- ~~https://cheqify.app/hi/comparison~~
- ~~https://cheqify.app/gu/comparison~~
- ~~https://cheqify.app/en~~
- ~~https://cheqify.app/hi~~

- [x] Day 5 done

---

## Day 6 — Homepage GU + about/contact (7 URLs) — Done

- ~~https://cheqify.app/gu~~
- ~~https://cheqify.app/en/about~~
- ~~https://cheqify.app/hi/about~~
- ~~https://cheqify.app/gu/about~~
- ~~https://cheqify.app/en/contact~~
- ~~https://cheqify.app/hi/contact~~
- ~~https://cheqify.app/gu/contact~~

- [x] Day 6 done

---

## Day 7 — Glossary + blog index (7 URLs) — Done

- ~~https://cheqify.app/en/glossary~~
- ~~https://cheqify.app/hi/glossary~~
- ~~https://cheqify.app/gu/glossary~~
- ~~https://cheqify.app/en/blog~~
- ~~https://cheqify.app/hi/blog~~
- ~~https://cheqify.app/gu/blog~~
- ~~https://cheqify.app/hi/blog/cheqify-vs-manual-cheque-writing~~

- [x] Day 7 done

---

## Day 8 — HI blog posts (7 URLs) — Done

- ~~https://cheqify.app/hi/blog/cheque-bounce-reasons-and-solutions~~
- ~~https://cheqify.app/hi/blog/how-to-avoid-cheque-fraud-in-india~~
- ~~https://cheqify.app/hi/blog/how-to-print-cheque-at-home~~
- ~~https://cheqify.app/hi/blog/post-dated-cheques-rules-and-best-practices~~
- ~~https://cheqify.app/hi/blog/what-is-micr-code-on-cheque~~
- ~~https://cheqify.app/hi/blog/how-to-print-cheque-in-india~~
- ~~https://cheqify.app/hi/blog/how-to-reconcile-cheques-with-bank-statements~~

- [x] Day 8 done

---

## Day 9 — Remaining HI blogs + GU blog posts start (7 URLs) — Partial (6 of 7 done)

✅ Submitted (per Ravi 2026-05-15):

- ~~https://cheqify.app/hi/blog/cheque-printing-mistakes-indian-businesses~~
- ~~https://cheqify.app/hi/blog/best-free-cheque-printing-software-india~~
- ~~https://cheqify.app/hi/blog/section-138-ni-act-cheque-bounce-india~~
- ~~https://cheqify.app/hi/blog/cheque-validity-period-stop-payment-india~~
- ~~https://cheqify.app/gu/blog/cheqify-vs-manual-cheque-writing~~
- ~~https://cheqify.app/gu/blog/cheque-bounce-reasons-and-solutions~~

⏭ Still pending (rolled forward — submit on the next available slot, before Day 10):

```
https://cheqify.app/gu/blog/how-to-avoid-cheque-fraud-in-india
```

- [ ] Day 9 — final URL only

---

## Day 10 — GU blog posts (7 URLs)

```
https://cheqify.app/gu/blog/how-to-print-cheque-at-home
https://cheqify.app/gu/blog/post-dated-cheques-rules-and-best-practices
https://cheqify.app/gu/blog/what-is-micr-code-on-cheque
https://cheqify.app/gu/blog/how-to-print-cheque-in-india
https://cheqify.app/gu/blog/how-to-reconcile-cheques-with-bank-statements
https://cheqify.app/gu/blog/cheque-printing-mistakes-indian-businesses
https://cheqify.app/gu/blog/best-free-cheque-printing-software-india
```

- [ ] Day 10

---

## Day 11 — Remaining GU blogs + privacy/terms (final batch, 8 URLs)

If quota holds at 7, defer the 8th to a Day 12 cleanup; if you get a bonus slot, finish today.

```
https://cheqify.app/gu/blog/section-138-ni-act-cheque-bounce-india
https://cheqify.app/gu/blog/cheque-validity-period-stop-payment-india
https://cheqify.app/en/privacy
https://cheqify.app/hi/privacy
https://cheqify.app/gu/privacy
https://cheqify.app/en/terms
https://cheqify.app/hi/terms
https://cheqify.app/gu/terms
```

- [ ] Day 11

---

## Day 12 — Posts #15 + #16 (6 URLs)

Posts went live in Sanity 2026-05-14. Submit after Netlify rebuild has them in the sitemap (per [[project_static_export_sitemap_gotcha]]).

**Pre-flight:** `curl -I https://cheqify.app/sitemap.xml | grep -q 200` then confirm the new slugs appear in https://cheqify.app/sitemap.xml.

```
https://cheqify.app/en/blog/cheque-number-in-cheque-book-explained
https://cheqify.app/hi/blog/cheque-number-in-cheque-book-explained
https://cheqify.app/gu/blog/cheque-number-in-cheque-book-explained
https://cheqify.app/en/blog/cts-2010-cheque-format-compliance-india
https://cheqify.app/hi/blog/cts-2010-cheque-format-compliance-india
https://cheqify.app/gu/blog/cts-2010-cheque-format-compliance-india
```

- [ ] Day 12

---

## Already submitted on 2026-04-30 (skip unless needed)

Per `_bmad-output/seo/rank-page-1-steps.md`, these EN URLs were submitted on 2026-04-30 and may already be indexed. Re-submit only if GSC still reports them as not indexed.

```
https://cheqify.app/en/blog/best-free-cheque-printing-software-india
https://cheqify.app/en/blog/cheqify-vs-manual-cheque-writing
https://cheqify.app/en/blog/cheque-bounce-reasons-and-solutions
https://cheqify.app/en/blog/cheque-printing-mistakes-indian-businesses
https://cheqify.app/en/blog/cheque-validity-period-stop-payment-india
https://cheqify.app/en/blog/how-to-avoid-cheque-fraud-in-india
https://cheqify.app/en/blog/how-to-print-cheque-at-home
https://cheqify.app/en/blog/how-to-print-cheque-in-india
https://cheqify.app/en/blog/how-to-reconcile-cheques-with-bank-statements
https://cheqify.app/en/blog/post-dated-cheques-rules-and-best-practices
https://cheqify.app/en/blog/section-138-ni-act-cheque-bounce-india
https://cheqify.app/en/blog/what-is-micr-code-on-cheque
```

---

## Future (queue for later)

Add to a future day after these go live (both scheduled in Sanity 2026-05-15):

```
# After post-17 publishes (Mon 2026-05-18)
https://cheqify.app/en/blog/cheque-clearing-time-india
https://cheqify.app/hi/blog/cheque-clearing-time-india
https://cheqify.app/gu/blog/cheque-clearing-time-india

# After post-18 publishes (Thu 2026-05-21)
https://cheqify.app/en/blog/cheque-types-india
https://cheqify.app/hi/blog/cheque-types-india
https://cheqify.app/gu/blog/cheque-types-india
```

---

## Pre-flight before each day

1. Verify each URL returns **200** by clicking it in your browser (or run `curl -I`).
2. Check the page renders correctly (especially HI/GU pages with translated content).
3. If any URL 404s, **don't submit it** — find the cause first.

---

## Bulk-cheque slug rename (2026-05-06) — already done

The old `bulk-cheque-printing-batch-guide-india-cheqify` URLs (3 locales) are now 301-redirected to the clean slug. **Do NOT submit the `-cheqify` URLs to GSC** — they will be canonicalised away from the redirect, which is the correct behaviour. Only submit the new clean URLs in Day 2 above.
