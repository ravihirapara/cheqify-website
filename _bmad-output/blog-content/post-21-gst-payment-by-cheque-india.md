# Blog Post #21 — Can You Pay GST by Cheque in India? Rules, Limits, and What Actually Works (2026)

## How to Use This Document (Field-by-Field → Sanity Studio)

| Doc section | Sanity field | Purpose |
|---|---|---|
| Slug, Tags, Author, Order, Is HowTo, Has FAQ | `slug`, `tags`, `author`, `order`, `isHowTo`, `hasFaq` | URL, taxonomy, sort order, schema toggles. |
| Scheduled publish date | Sanity "Publish schedule" | Triggers the post going live. |
| Primary/Secondary keywords, Reading time, URLs | *reference only* | Guides writing focus and GSC indexing. |
| Cover Image | `image` (required) | Blog card, hero, OG/Twitter preview. |
| Titles (EN/HI/GU) | `title_en`, `title_hi`, `title_gu` | `<h1>` + `<title>` + og:title meta. |
| Descriptions (EN/HI/GU) | `description_en`, `description_hi`, `description_gu` | `<meta name="description">`, og:description. |
| Body (EN/HI/GU) | `body_en`, `body_hi`, `body_gu` | Article content. |
| CTA Block (EN/HI/GU) | *pasted as the LAST paragraph of each `body_*`* | Conversion element — drives app.cheqify.app signups. |
| FAQ Items | `faqItems` | Renders FAQPage schema → "People Also Ask". |

---

## ⚠️ Pre-publish fact-check required

The specific GST OTC threshold (₹10,000) and the rules around authorised bank lists, challan generation, and CIN issuance can shift via CBIC circular. Before publishing, verify the figures in this draft against:

1. The current GST portal Help page (gst.gov.in) for "Mode of Payment".
2. The latest CBIC circular on OTC mode (search "GST OTC payment limit 2026").
3. A practising CA review — if the ₹10,000 cap has been revised or the authorised-bank list has changed.

Tax content rots fast. Add the disclosure paragraph at the bottom of the body before publish (already drafted below).

---

## Why This Topic

"Can I pay GST by cheque?" is a high-intent tax question — searched by small business owners filing quarterly GSTR, by accounting trainees, and by anyone whose net banking is locked. There's a clear regulatory answer (yes, but only OTC and only up to ₹10,000) that the GST portal documents but doesn't surface clearly. This post explains the threshold, the exact OTC mechanism, why the cap exists, the cheque requirements for OTC payment, and the realistic alternatives for amounts above the cap. Strong commercial intent: a reader who finds this post is filing a return or has a payment due. Cluster fit: pairs with #17 (clearing time), #19 (how to fill), and #20 (vs digital rails).

---

## Sanity Fields

- **Slug:** `gst-payment-by-cheque-india`
- **Tags:** `Banking & RBI`, `Cheque Guide`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** YES (challan + OTC steps)
- **Has FAQ:** YES

---

## Publishing Metadata

- **Scheduled publish date:** Monday 2026-06-01, 10:00 IST (auto-set in Sanity)
- **Primary keyword:** `gst payment by cheque india`
- **Secondary keywords:** can i pay gst by cheque, gst otc payment limit, gst challan cheque, gst payment modes, gst over the counter payment, gst payment under 10000 by cheque
- **Reading time:** ~7 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/gst-payment-by-cheque-india`
  - HI: `https://cheqify.app/hi/blog/gst-payment-by-cheque-india`
  - GU: `https://cheqify.app/gu/blog/gst-payment-by-cheque-india`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `gst-payment-by-cheque-india-cover.webp`
- **Subject:** Split illustration. Left: a GST challan slip (CPIN visible, ₹ amount). Centre: a cheque with "GST Tax Payable" written as payee. Right: a small banner reading "OTC ≤ ₹10,000". A subtle CBIC logo silhouette in the corner. Cheqify wordmark bottom-right. Soft mint-and-navy gradient background.
- **Alt text:** Can you pay GST by cheque in India — Over-the-Counter payment up to ₹10,000 explained.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Can You Pay GST by Cheque in India? OTC Rules, Limits, and Alternatives (2026)
- **HI:** क्या आप भारत में GST cheque से Pay कर सकते हैं? OTC Rules, Limits, और Alternatives (2026)
- **GU:** શું તમે ભારતમાં GST cheque થી Pay કરી શકો છો? OTC Rules, Limits, અને Alternatives (2026)

---

## Descriptions

- **EN:** Short answer: yes — but only over the counter at an authorised bank and only up to ₹10,000 per challan. Above the cap, GST payment requires NEFT, RTGS, net banking, or card. Full walkthrough of the OTC cheque mechanism, the CPIN challan flow, and why most businesses skip cheques for GST in 2026.
- **HI:** Short answer: हाँ — पर सिर्फ़ authorised bank पर over the counter और सिर्फ़ ₹10,000 per challan तक. Cap से ऊपर, GST payment के लिए NEFT, RTGS, net banking, या card चाहिए. OTC cheque mechanism, CPIN challan flow, और 2026 में ज़्यादातर businesses GST के लिए cheque skip क्यों करते हैं — full walkthrough.
- **GU:** Short answer: હા — પણ ફક્ત authorised bank પર over the counter અને ફક્ત ₹10,000 per challan સુધી. Cap થી ઉપર, GST payment માટે NEFT, RTGS, net banking, કે card જોઈએ. OTC cheque mechanism, CPIN challan flow, અને 2026 માં મોટાભાગના businesses GST માટે cheque કેમ skip કરે છે — full walkthrough.

---

## Body (English)

> *Note: GST rules are issued by CBIC and revised by circular. The thresholds below were current at the time of writing — confirm via the GST portal before relying on them for a live payment. This is general information, not tax advice.*

---

Short answer: yes, you can pay GST by cheque — but only at the bank counter, only up to ₹10,000 per challan, and only if the bank is an authorised collecting agent. For anything bigger, the GST portal effectively forces you onto electronic rails — NEFT, RTGS, net banking, debit/credit card, or UPI.

Long answer is more useful, so here it is.

### The Mode-of-Payment Picture on the GST Portal

When you log into gst.gov.in and create a challan, you'll see four payment modes:

- **E-payment** — net banking via authorised banks
- **Over the Counter (OTC)** — cash, cheque, or demand draft at an authorised bank
- **NEFT / RTGS** — transfer from any bank via the offline NEFT/RTGS rail
- **Payment Gateway / Card / UPI** — credit, debit, UPI, IMPS, BHIM

OTC is the only mode that involves a cheque. And OTC has a hard cap.

### The ₹10,000 Cap (And What It Actually Means)

OTC mode is restricted to challans where the **total tax amount is ₹10,000 or less per challan, per tax period.** Above that, the system blocks OTC entirely and forces you to pick e-payment, NEFT/RTGS, or the payment gateway route.

There are two practical implications:

1. **You cannot split a ₹50,000 GST liability into five ₹10,000 OTC challans to keep paying by cheque.** The portal validates against tax period + GSTIN, not challan count.
2. **Government departments paying their own GST liability** have a separate carve-out — they're often allowed OTC for higher amounts. This doesn't help private businesses.

The ₹10,000 cap was instituted to push tax payments onto auditable digital rails. If you owe more than that, the GST council essentially doesn't want a cheque sitting in a bank branch's collection drawer overnight.

### How to Actually Pay GST by Cheque (OTC Walkthrough)

If your liability is ₹10,000 or less and you genuinely prefer the cheque route, here's how the OTC payment flows:

1. **Generate the challan on gst.gov.in.** Log in → Services → Payments → Create Challan. Fill in the heads (CGST, SGST, IGST, Cess), choose "Over the Counter" as the mode, select an authorised bank from the dropdown.
2. **Print the CPIN challan.** The portal generates a 14-digit Common Portal Identification Number (CPIN). The PDF challan you print is valid for 15 days from generation.
3. **Walk into the chosen authorised bank's branch with the printed challan and a cheque.** The cheque must be:
   - Account-payee crossed ([what that means →](/en/blog/how-to-fill-cheque-correctly))
   - Drawn in favour of **"GST Tax Payable"** (or the exact name the portal's challan instructs — confirm at the counter)
   - From an account at any bank — it doesn't have to be the same bank where you're depositing
4. **Hand over the cheque + challan at the GST collection counter.** The bank gives you a stamped acknowledgment with a 17-digit Challan Identification Number (CIN). Keep this — it's your proof of payment.
5. **Wait for clearance.** Your account will be debited once the cheque clears (typically T+1 — see [Cheque Clearing Time in India](/en/blog/cheque-clearing-time-india)). The CIN is auto-credited to your Electronic Cash Ledger on the GST portal usually within 1–2 business days of clearance.

If the cheque bounces, you have **no GST payment** — and you'll need to redo the challan + pay interest and penalty from the original due date. This is the single biggest reason businesses don't choose OTC.

### Which Banks Are Authorised for GST Collection

The list shifts periodically, but the major scheduled commercial banks have been on the list since GST launched in 2017: SBI, HDFC, ICICI, Axis, PNB, Bank of Baroda, Canara Bank, Union Bank, IDBI, Kotak Mahindra Bank, and most regional cooperatives that meet the GSTN integration requirements. The full current list is on the GST portal's challan creation screen — only banks shown there can accept OTC GST payments.

The branch matters too. Not every branch of an authorised bank collects GST. In tier-2 and tier-3 cities, only the designated "tax-collecting" branches do — call ahead before you walk in with a CPIN-printed challan and a cheque.

### Why Most Businesses Skip the Cheque Route Anyway

Even when liability is under ₹10,000 and OTC is allowed, most SMBs we work with don't use cheques for GST. Three reasons:

- **T+1 clearance risk on a due-date payment.** GST due date is the 20th. If you walk into the branch on the 18th with a cheque, the CIN credit may not hit your Electronic Cash Ledger until the 22nd. Technically the challan was deposited on time, but the credit is late — and CBIC's interest engine doesn't always read this nuance correctly.
- **Bounce risk.** Cheque bounces = no payment + interest + penalty. A failed UPI or NEFT just returns to your account.
- **Friction.** Net banking or UPI takes 90 seconds at midnight. OTC requires a branch visit during banking hours.

For these reasons, the OTC mode has shrunk to a tiny percentage of total GST collections — it survives mostly for small businesses without net-banking, for legacy filers comfortable with paper, and for cases where the taxpayer's net-banking is locked.

### The Real Alternatives Above ₹10,000

When the GST portal blocks OTC because your liability is over the cap, you have four electronic options:

- **E-payment (net banking)** — fastest if your bank is on the authorised list. The CIN appears in your Electronic Cash Ledger usually within seconds.
- **NEFT / RTGS (offline mode)** — for businesses without net banking access. Generate a "NEFT/RTGS" challan on the portal, take it to your bank branch, request the transfer using the IFSC and beneficiary account printed on the challan. CIN credits to the cash ledger after settlement (often same day for RTGS, next batch for NEFT).
- **Payment Gateway** — UPI, BHIM, IMPS, credit, debit. Convenience fee applies above small thresholds. Same-second CIN credit.
- **Aadhaar-linked authentication** for OTP-based payments — increasingly common since 2024.

For the head-to-head on cheque vs UPI/NEFT/RTGS, see [Cheque vs UPI / NEFT / RTGS in India](/en/blog/cheque-vs-digital-payment-india).

### When Cheque-via-OTC Genuinely Helps

There's still a small set of GST scenarios where the OTC cheque route is the right call:

- **Small composition-scheme dealers** paying quarterly GST under ₹10,000 with no net banking active.
- **Tier-3 city traders** whose only banking touchpoint is a branch visit.
- **Trustees or guardians** paying on behalf of an estate or minor where bank-side authority is paper-based.
- **Anyone whose net banking is locked or under dispute** — OTC keeps the payment moving while you sort the digital channel.

Outside these, the modern default is electronic.

### Cheque Quality Still Matters for OTC

If you do go the OTC route, the cheque itself has to meet [CTS-2010 compliance](/en/blog/cts-2010-cheque-format-compliance-india), be filled correctly across all six fields ([field-by-field rules](/en/blog/how-to-fill-cheque-correctly)), and be drawn from an account with verified specimen signature. A rejected cheque on a due-date GST payment is the most expensive cheque mistake a small business can make — interest + penalty + late-filing flag on the GSTIN.

If your business writes GST cheques regularly under ₹10,000, [print them with Cheqify](/en/blog/how-to-print-cheque-in-india) — auto-MICR validation, 300+ Indian bank layouts, free. The same instrument quality as a hand-written cheque without the field-mistake risk.

### A Note on Demand Drafts

OTC mode also accepts Demand Drafts in place of cheques. DD has zero bounce risk (the bank has already debited your account when issuing the DD), so for GST due-date payments above small amounts, DD is occasionally safer than a cheque — at the cost of upfront issuance fee and slightly more friction. The same ₹10,000 OTC cap applies.

### The Compliance Closing Thought

GST is one of the most-tracked tax obligations an Indian business has. CBIC reads payments on rails. The cheque route survives but doesn't win — and if you're a regular GST filer above ₹10,000 a quarter, your stack is electronic by default, with cheques reserved for the [seven B2B scenarios where they still beat digital](/en/blog/cheque-vs-digital-payment-india). GST isn't one of those scenarios.

> **Disclosure:** GST rules are issued and revised by CBIC via circular. Verify thresholds and authorised-bank lists on the GST portal before any actual payment. This article is informational and is not a substitute for advice from a practising chartered accountant.

---

> **Need to print a cheque under ₹10,000 for OTC GST payment?** Cheqify gives you free CTS-2010 compliant cheque printing — 300+ Indian bank layouts, auto-MICR, browser-based. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## HowTo Steps (Sanity `howToSteps` field — required for HowTo schema)

| # | Name | Text |
|---|---|---|
| 1 | Generate a CPIN challan on gst.gov.in | Log in → Services → Payments → Create Challan. Enter the heads (CGST, SGST, IGST, Cess), select "Over the Counter" as the mode, choose an authorised bank from the dropdown. The system generates a 14-digit CPIN. |
| 2 | Print the CPIN challan PDF | The PDF challan is valid for 15 days from generation. Print it on plain paper. The CPIN appears as a barcode and a 14-digit number. |
| 3 | Prepare a CTS-2010 cheque | Cheque must be account-payee crossed, drawn in favour of "GST Tax Payable" (verify exact payee name on the printed challan), and from an account with valid funds. Amount must match the challan total exactly. |
| 4 | Walk into the chosen authorised bank's branch | Hand the printed challan and cheque to the GST collection counter. Tier-2/3 cities — confirm the branch handles GST collection before going. |
| 5 | Collect the stamped CIN acknowledgment | The bank issues a 17-digit Challan Identification Number (CIN). This is your proof of payment until the cheque clears. Keep the original. |
| 6 | Wait for cheque clearance and CIN credit | Once the cheque clears (typically T+1), the CIN is auto-credited to your Electronic Cash Ledger on the GST portal within 1–2 business days. Use the credit to offset GST liability when filing. |

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** Can I pay GST by cheque in India in 2026?
   **A:** Yes, but only through Over-the-Counter (OTC) mode at an authorised bank branch, and only for challans with total tax up to ₹10,000. Above that limit, the GST portal blocks OTC and requires net banking, NEFT/RTGS, or a card-based gateway payment.

2. **Q:** Why is the OTC limit ₹10,000?
   **A:** The cap was set by CBIC to push higher-value tax collections onto electronic rails that are auditable in real time. A cheque sitting overnight in a bank's GST collection drawer creates reconciliation complexity at scale; electronic payment removes that.

3. **Q:** Who is the GST cheque payable to?
   **A:** Confirm the exact payee name on your printed CPIN challan — the standard format is "GST Tax Payable" but specific bank instructions may use a slightly different wording. Always cross the cheque as "A/c Payee Only".

4. **Q:** What happens if my GST cheque bounces?
   **A:** Your payment is treated as not made. You will need to regenerate a fresh CPIN challan and pay again — and interest and late-payment penalty accrue from the original due date until actual credit hits your Electronic Cash Ledger. This is why most GST filers avoid the cheque route entirely.

5. **Q:** Can I split a large GST liability into multiple under-₹10,000 cheques?
   **A:** No. The GST portal validates OTC eligibility against the total tax amount per challan per tax period for a single GSTIN, not per challan in isolation. Splitting will be blocked.

6. **Q:** Which banks accept GST cheque payments?
   **A:** Most major scheduled commercial banks (SBI, HDFC, ICICI, Axis, PNB, Bank of Baroda, Canara, Union, IDBI, Kotak) plus authorised cooperative banks. The current full list appears on the GST portal during challan creation — only banks shown there can collect OTC. Not every branch of an authorised bank handles GST collection, so confirm before visiting.

7. **Q:** Is paying GST by Demand Draft (DD) the same as by cheque?
   **A:** OTC mode accepts both DD and cheque, and the ₹10,000 cap applies equally. DD has zero bounce risk because the bank debits your account when issuing the DD, so for due-date payments under ₹10,000 a DD is marginally safer than a cheque — at the cost of issuance friction and fee.

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the disclosure at the bottom.

---

> *Note: GST rules CBIC द्वारा issue किए जाते हैं और circular से revise होते हैं. नीचे दी गई thresholds writing के time पर current थीं — live payment के लिए rely करने से पहले GST portal पर confirm करें. ये general information है, tax advice नहीं.*

---

Short answer: हाँ, आप GST cheque से pay कर सकते हैं — पर सिर्फ़ bank counter पर, सिर्फ़ ₹10,000 per challan तक, और सिर्फ़ अगर bank authorised collecting agent है. इससे बड़े amount के लिए, GST portal effectively आपको electronic rails पर force कर देता है — NEFT, RTGS, net banking, debit/credit card, या UPI.

Long answer ज़्यादा useful है, so यहाँ है.

### GST Portal पर Mode-of-Payment Picture

जब आप gst.gov.in पर login करते हैं और challan create करते हैं, चार payment modes दिखेंगे:

- **E-payment** — authorised banks के through net banking
- **Over the Counter (OTC)** — authorised bank पर cash, cheque, या demand draft
- **NEFT / RTGS** — offline NEFT/RTGS rail के through किसी भी bank से transfer
- **Payment Gateway / Card / UPI** — credit, debit, UPI, IMPS, BHIM

OTC ही only mode है जिसमें cheque involve होता है. और OTC का hard cap है.

### ₹10,000 Cap (और Actually इसका मतलब क्या है)

OTC mode उन challans तक restricted है जहाँ **total tax amount ₹10,000 या उससे कम है per challan, per tax period.** उससे ऊपर, system OTC completely block कर देता है और आपको e-payment, NEFT/RTGS, या payment gateway route pick करना पड़ता है.

दो practical implications:

1. **आप ₹50,000 GST liability को पाँच ₹10,000 OTC challans में split नहीं कर सकते** सिर्फ़ cheque से pay करते रहने के लिए. Portal challan count के बजाय tax period + GSTIN के against validate करता है.
2. **अपनी GST liability pay करने वाले Government departments** का separate carve-out है — उन्हें अक्सर higher amounts के लिए OTC allow होता है. ये private businesses की help नहीं करता.

₹10,000 cap इसलिए लगाया गया कि tax payments auditable digital rails पर push हो सकें. अगर आप उससे ज़्यादा owe करते हैं, GST council essentially नहीं चाहती कि एक cheque overnight bank branch के collection drawer में बैठे.

### GST को Cheque से Actually कैसे Pay करें (OTC Walkthrough)

अगर आपकी liability ₹10,000 या उससे कम है और आप genuinely cheque route prefer करते हैं, ये है OTC payment flow:

1. **gst.gov.in पर challan generate करें.** Login → Services → Payments → Create Challan. Heads (CGST, SGST, IGST, Cess) fill करें, mode के तौर पर "Over the Counter" choose करें, dropdown से authorised bank select करें.
2. **CPIN challan print करें.** Portal एक 14-digit Common Portal Identification Number (CPIN) generate करता है. जो PDF challan आप print करते हैं वो generation से 15 days तक valid है.
3. **Printed challan और cheque के साथ chosen authorised bank की branch में जाएँ.** Cheque ये होना चाहिए:
   - Account-payee crossed ([इसका मतलब क्या है →](/hi/blog/how-to-fill-cheque-correctly))
   - **"GST Tax Payable"** के favour में drawn (या portal के challan पर लिखा exact name — counter पर confirm करें)
   - किसी भी bank के account से — same bank नहीं होना चाहिए जहाँ आप deposit कर रहे हैं
4. **Cheque + challan GST collection counter पर hand कर दें.** Bank आपको stamped acknowledgment देता है एक 17-digit Challan Identification Number (CIN) के साथ. इसे रखें — ये आपका payment proof है.
5. **Clearance का wait करें.** आपका account तब debit होगा जब cheque clear होगा (typically T+1 — देखें [Cheque Clearing Time in India](/hi/blog/cheque-clearing-time-india)). CIN आपके Electronic Cash Ledger में GST portal पर auto-credit हो जाता है usually clearance के 1–2 business days में.

अगर cheque bounce हो गया, आपके पास **कोई GST payment नहीं है** — और आपको challan redo करना पड़ेगा + original due date से interest और penalty pay करनी पड़ेगी. यही single biggest reason है कि businesses OTC choose नहीं करते.

### कौन से Banks GST Collection के लिए Authorised हैं

List periodically shift होती है, पर 2017 में GST launch के बाद से major scheduled commercial banks list पर रहे हैं: SBI, HDFC, ICICI, Axis, PNB, Bank of Baroda, Canara Bank, Union Bank, IDBI, Kotak Mahindra Bank, और ज़्यादातर regional cooperatives जो GSTN integration requirements meet करते हैं. Full current list GST portal के challan creation screen पर है — सिर्फ़ वहाँ shown banks ही OTC GST payments accept कर सकते हैं.

Branch भी matter करती है. Authorised bank की हर branch GST collect नहीं करती. Tier-2 और tier-3 cities में, सिर्फ़ designated "tax-collecting" branches करती हैं — CPIN-printed challan और cheque लेकर walk in करने से पहले call करें.

### क्यों ज़्यादातर Businesses Cheque Route Skip करते हैं Anyway

जब liability ₹10,000 से कम है और OTC allowed है, तब भी जिन SMBs के साथ हम काम करते हैं, वो ज़्यादातर GST के लिए cheques use नहीं करते. तीन reasons:

- **Due-date payment पर T+1 clearance risk.** GST due date 20 तारीख है. अगर आप 18 को branch में cheque लेकर जाते हैं, CIN credit आपके Electronic Cash Ledger तक 22 तारीख तक नहीं पहुँचे शायद. Technically challan time पर deposit हुआ, पर credit late है — और CBIC का interest engine हमेशा इस nuance को correctly read नहीं करता.
- **Bounce risk.** Cheque bounce = no payment + interest + penalty. Failed UPI या NEFT बस आपके account में वापस आ जाता है.
- **Friction.** Net banking या UPI रात 12 बजे 90 seconds लेता है. OTC banking hours में branch visit मांगता है.

इन reasons से, OTC mode total GST collections का tiny percentage रह गया है — ज़्यादातर बिना net-banking वाले small businesses के लिए survive करता है, paper-comfortable legacy filers के लिए, और cases जहाँ taxpayer का net-banking locked है.

### ₹10,000 से ऊपर के Real Alternatives

जब GST portal OTC block कर देता है क्योंकि आपकी liability cap से ऊपर है, चार electronic options हैं:

- **E-payment (net banking)** — fastest अगर आपका bank authorised list पर है. CIN आपके Electronic Cash Ledger में usually seconds में appear होता है.
- **NEFT / RTGS (offline mode)** — net banking access के बिना businesses के लिए. Portal पर "NEFT/RTGS" challan generate करें, अपनी bank branch पर ले जाएँ, challan पर print IFSC और beneficiary account use करके transfer request करें. CIN settlement के बाद cash ledger में credit होता है (RTGS के लिए often same day, NEFT के लिए next batch).
- **Payment Gateway** — UPI, BHIM, IMPS, credit, debit. Small thresholds से ऊपर convenience fee applicable. Same-second CIN credit.
- **Aadhaar-linked authentication** OTP-based payments के लिए — 2024 से increasingly common.

Cheque vs UPI/NEFT/RTGS के head-to-head के लिए, देखें [Cheque vs UPI / NEFT / RTGS in India](/hi/blog/cheque-vs-digital-payment-india).

### जब Cheque-via-OTC Genuinely Help करता है

GST scenarios का एक छोटा set अभी भी है जहाँ OTC cheque route सही call है:

- **Small composition-scheme dealers** quarterly GST ₹10,000 से कम pay करते हुए जिनके पास net banking active नहीं है.
- **Tier-3 city traders** जिनका only banking touchpoint branch visit है.
- **Trustees या guardians** estate या minor की तरफ से pay करते हुए जहाँ bank-side authority paper-based है.
- **जिनका net banking locked या dispute में है** — OTC payment moving रखता है जब तक आप digital channel sort कर रहे हैं.

इनके बाहर, modern default electronic है.

### OTC के लिए भी Cheque Quality Still Matters

अगर आप OTC route जाते हैं, cheque खुद को [CTS-2010 compliance](/hi/blog/cts-2010-cheque-format-compliance-india) meet करना है, सभी छह fields ([field-by-field rules](/hi/blog/how-to-fill-cheque-correctly)) पर correctly fill होना है, और verified specimen signature वाले account से drawn होना है. Due-date GST payment पर rejected cheque small business की सबसे expensive cheque mistake है — interest + penalty + GSTIN पर late-filing flag.

अगर आपका business regularly ₹10,000 से कम के GST cheques लिखता है, [Cheqify से print करें](/hi/blog/how-to-print-cheque-in-india) — auto-MICR validation, 300+ Indian bank layouts, free. Hand-written cheque जैसी same instrument quality, field-mistake risk के बिना.

### Demand Drafts पर एक Note

OTC mode cheques की जगह Demand Drafts भी accept करता है. DD में zero bounce risk है (bank ने DD issue करते वक़्त आपका account debit कर ही दिया है), so छोटे amounts से ऊपर के due-date GST payments के लिए, DD occasionally cheque से safer है — upfront issuance fee और थोड़ा ज़्यादा friction की cost पर. वही ₹10,000 OTC cap apply होता है.

### Compliance Closing Thought

GST एक Indian business की most-tracked tax obligations में से एक है. CBIC rails पर payments read करता है. Cheque route survive करता है पर जीतता नहीं — और अगर आप regular GST filer हैं quarter में ₹10,000 से ऊपर, आपका stack default electronic है, cheques [उन सात B2B scenarios](/hi/blog/cheque-vs-digital-payment-india) के लिए reserved जहाँ वो अभी भी digital को beat करते हैं. GST उन scenarios में से नहीं है.

> **Disclosure:** GST rules CBIC द्वारा circular से issue और revise होते हैं. Actual payment से पहले thresholds और authorised-bank lists GST portal पर verify करें. ये article informational है और practising chartered accountant की advice का substitute नहीं है.

---

> **OTC GST payment के लिए ₹10,000 से कम का cheque print करना है?** Cheqify देता है free CTS-2010 compliant cheque printing — 300+ Indian bank layouts, auto-MICR, browser-based. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Gujlish blend, same structure. Keep the disclosure at the bottom.

---

> *Note: GST rules CBIC દ્વારા issue થાય છે અને circular થી revise થાય છે. નીચે આપેલી thresholds writing ના time પર current હતી — live payment માટે rely કરતા પહેલા GST portal પર confirm કરો. આ general information છે, tax advice નહીં.*

---

Short answer: હા, તમે GST cheque થી pay કરી શકો છો — પણ ફક્ત bank counter પર, ફક્ત ₹10,000 per challan સુધી, અને ફક્ત જો bank authorised collecting agent હોય. એનાથી મોટા amount માટે, GST portal effectively તમને electronic rails પર force કરી દે છે — NEFT, RTGS, net banking, debit/credit card, કે UPI.

Long answer વધારે useful છે, so અહીં છે.

### GST Portal પર Mode-of-Payment Picture

જ્યારે તમે gst.gov.in પર login કરો છો અને challan create કરો છો, ચાર payment modes દેખાશે:

- **E-payment** — authorised banks ના through net banking
- **Over the Counter (OTC)** — authorised bank પર cash, cheque, કે demand draft
- **NEFT / RTGS** — offline NEFT/RTGS rail ના through કોઈ પણ bank થી transfer
- **Payment Gateway / Card / UPI** — credit, debit, UPI, IMPS, BHIM

OTC જ only mode છે જેમાં cheque involve થાય છે. અને OTC નો hard cap છે.

### ₹10,000 Cap (અને Actually આનો અર્થ શું છે)

OTC mode એ challans સુધી restricted છે જ્યાં **total tax amount ₹10,000 કે એનાથી ઓછું છે per challan, per tax period.** એનાથી ઉપર, system OTC completely block કરી દે છે અને તમારે e-payment, NEFT/RTGS, કે payment gateway route pick કરવો પડે છે.

બે practical implications:

1. **તમે ₹50,000 GST liability ને પાંચ ₹10,000 OTC challans માં split નથી કરી શકતા** ફક્ત cheque થી pay કરતા રહેવા માટે. Portal challan count ને બદલે tax period + GSTIN ના against validate કરે છે.
2. **પોતાની GST liability pay કરતા Government departments** નો separate carve-out છે — એમને ઘણીવાર higher amounts માટે OTC allow થાય છે. આ private businesses ની help નથી કરતું.

₹10,000 cap એટલે મુક્યો કે tax payments auditable digital rails પર push થઈ શકે. જો તમે એનાથી વધારે owe કરો છો, GST council essentially નથી ઈચ્છતી કે એક cheque overnight bank branch ના collection drawer માં બેસે.

### GST ને Cheque થી Actually કેવી રીતે Pay કરવો (OTC Walkthrough)

જો તમારી liability ₹10,000 કે એનાથી ઓછી છે અને તમે genuinely cheque route prefer કરો છો, આ રહ્યો OTC payment flow:

1. **gst.gov.in પર challan generate કરો.** Login → Services → Payments → Create Challan. Heads (CGST, SGST, IGST, Cess) fill કરો, mode તરીકે "Over the Counter" choose કરો, dropdown થી authorised bank select કરો.
2. **CPIN challan print કરો.** Portal એક 14-digit Common Portal Identification Number (CPIN) generate કરે છે. જે PDF challan તમે print કરો છો એ generation થી 15 days સુધી valid છે.
3. **Printed challan અને cheque સાથે chosen authorised bank ની branch માં જાઓ.** Cheque આ હોવો જોઈએ:
   - Account-payee crossed ([આનો અર્થ શું છે →](/gu/blog/how-to-fill-cheque-correctly))
   - **"GST Tax Payable"** ના favour માં drawn (કે portal ના challan પર લખેલું exact name — counter પર confirm કરો)
   - કોઈ પણ bank ના account થી — same bank હોવો ન જોઈએ જ્યાં તમે deposit કરી રહ્યા છો
4. **Cheque + challan GST collection counter પર hand કરી દો.** Bank તમને stamped acknowledgment આપે છે એક 17-digit Challan Identification Number (CIN) સાથે. એને રાખો — એ તમારો payment proof છે.
5. **Clearance ની wait કરો.** તમારું account ત્યારે debit થશે જ્યારે cheque clear થશે (typically T+1 — જુઓ [Cheque Clearing Time in India](/gu/blog/cheque-clearing-time-india)). CIN તમારા Electronic Cash Ledger માં GST portal પર auto-credit થઈ જાય છે usually clearance ના 1–2 business days માં.

જો cheque bounce થઈ ગયો, તમારી પાસે **કોઈ GST payment નથી** — અને તમારે challan redo કરવો પડશે + original due date થી interest અને penalty pay કરવી પડશે. આ જ single biggest reason છે કે businesses OTC choose નથી કરતા.

### કયા Banks GST Collection માટે Authorised છે

List periodically shift થાય છે, પણ 2017 માં GST launch પછી major scheduled commercial banks list પર રહ્યા છે: SBI, HDFC, ICICI, Axis, PNB, Bank of Baroda, Canara Bank, Union Bank, IDBI, Kotak Mahindra Bank, અને મોટાભાગની regional cooperatives જે GSTN integration requirements meet કરે છે. Full current list GST portal ના challan creation screen પર છે — ફક્ત ત્યાં shown banks જ OTC GST payments accept કરી શકે છે.

Branch પણ matter કરે છે. Authorised bank ની દરેક branch GST collect નથી કરતી. Tier-2 અને tier-3 cities માં, ફક્ત designated "tax-collecting" branches કરે છે — CPIN-printed challan અને cheque લઈને walk in કરતા પહેલા call કરો.

### કેમ મોટાભાગના Businesses Cheque Route Skip કરે છે Anyway

જ્યારે liability ₹10,000 થી ઓછી છે અને OTC allowed છે, ત્યારે પણ જે SMBs સાથે અમે કામ કરીએ છીએ, એ મોટાભાગના GST માટે cheques use નથી કરતા. ત્રણ reasons:

- **Due-date payment પર T+1 clearance risk.** GST due date 20 તારીખ છે. જો તમે 18 ના રોજ branch માં cheque લઈને જાઓ, CIN credit તમારા Electronic Cash Ledger સુધી 22 તારીખ સુધી નહીં પહોંચે કદાચ. Technically challan time પર deposit થયો, પણ credit late છે — અને CBIC નું interest engine હંમેશા આ nuance ને correctly read નથી કરતું.
- **Bounce risk.** Cheque bounce = no payment + interest + penalty. Failed UPI કે NEFT બસ તમારા account માં પાછું આવે છે.
- **Friction.** Net banking કે UPI રાત્રે 12 વાગ્યે 90 seconds લે છે. OTC banking hours માં branch visit માંગે છે.

આ reasons થી, OTC mode total GST collections નો tiny percentage રહી ગયો છે — મોટાભાગનું net-banking વગરના small businesses માટે survive કરે છે, paper-comfortable legacy filers માટે, અને cases જ્યાં taxpayer નું net-banking locked છે.

### ₹10,000 થી ઉપરના Real Alternatives

જ્યારે GST portal OTC block કરી દે છે કારણ કે તમારી liability cap થી ઉપર છે, ચાર electronic options છે:

- **E-payment (net banking)** — fastest જો તમારી bank authorised list પર છે. CIN તમારા Electronic Cash Ledger માં usually seconds માં appear થાય છે.
- **NEFT / RTGS (offline mode)** — net banking access વગરના businesses માટે. Portal પર "NEFT/RTGS" challan generate કરો, તમારી bank branch પર લઈ જાઓ, challan પર print IFSC અને beneficiary account use કરીને transfer request કરો. CIN settlement પછી cash ledger માં credit થાય છે (RTGS માટે often same day, NEFT માટે next batch).
- **Payment Gateway** — UPI, BHIM, IMPS, credit, debit. Small thresholds થી ઉપર convenience fee applicable. Same-second CIN credit.
- **Aadhaar-linked authentication** OTP-based payments માટે — 2024 થી increasingly common.

Cheque vs UPI/NEFT/RTGS ના head-to-head માટે, જુઓ [Cheque vs UPI / NEFT / RTGS in India](/gu/blog/cheque-vs-digital-payment-india).

### જ્યારે Cheque-via-OTC Genuinely Help કરે છે

GST scenarios નો એક નાનો set હજુ છે જ્યાં OTC cheque route સાચો call છે:

- **Small composition-scheme dealers** quarterly GST ₹10,000 થી ઓછું pay કરતા જેમની પાસે net banking active નથી.
- **Tier-3 city traders** જેમનો only banking touchpoint branch visit છે.
- **Trustees કે guardians** estate કે minor ની તરફથી pay કરતા જ્યાં bank-side authority paper-based છે.
- **જેમનું net banking locked કે dispute માં છે** — OTC payment moving રાખે છે જ્યાં સુધી તમે digital channel sort કરી રહ્યા છો.

આના બહાર, modern default electronic છે.

### OTC માટે પણ Cheque Quality Still Matters

જો તમે OTC route જાઓ છો, cheque પોતે [CTS-2010 compliance](/gu/blog/cts-2010-cheque-format-compliance-india) meet કરવો જોઈએ, બધા છ fields ([field-by-field rules](/gu/blog/how-to-fill-cheque-correctly)) પર correctly fill થયેલો હોવો જોઈએ, અને verified specimen signature વાળા account થી drawn હોવો જોઈએ. Due-date GST payment પર rejected cheque small business ની સૌથી expensive cheque mistake છે — interest + penalty + GSTIN પર late-filing flag.

જો તમારું business regularly ₹10,000 થી ઓછા GST cheques લખે છે, [Cheqify થી print કરો](/gu/blog/how-to-print-cheque-in-india) — auto-MICR validation, 300+ Indian bank layouts, free. Hand-written cheque જેવી same instrument quality, field-mistake risk વગર.

### Demand Drafts પર એક Note

OTC mode cheques ની જગ્યાએ Demand Drafts પણ accept કરે છે. DD માં zero bounce risk છે (bank એ DD issue કરતી વખતે તમારું account debit કરી જ દીધું છે), so નાના amounts થી ઉપરના due-date GST payments માટે, DD occasionally cheque થી safer છે — upfront issuance fee અને થોડું વધારે friction ની cost પર. એ જ ₹10,000 OTC cap apply થાય છે.

### Compliance Closing Thought

GST એક Indian business ની most-tracked tax obligations માંની એક છે. CBIC rails પર payments read કરે છે. Cheque route survive કરે છે પણ જીતતો નથી — અને જો તમે regular GST filer છો quarter માં ₹10,000 થી ઉપર, તમારો stack default electronic છે, cheques [એ સાત B2B scenarios](/gu/blog/cheque-vs-digital-payment-india) માટે reserved જ્યાં એ હજુ digital ને beat કરે છે. GST એ scenarios માંથી નથી.

> **Disclosure:** GST rules CBIC દ્વારા circular થી issue અને revise થાય છે. Actual payment પહેલા thresholds અને authorised-bank lists GST portal પર verify કરો. આ article informational છે અને practising chartered accountant ની advice નો substitute નથી.

---

> **OTC GST payment માટે ₹10,000 થી ઓછા નો cheque print કરવો છે?** Cheqify આપે છે free CTS-2010 compliant cheque printing — 300+ Indian bank layouts, auto-MICR, browser-based. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## Internal-Link Strategy

**Forward links from this post:**
- Post #16 (`cts-2010-cheque-format-compliance-india`) — cheque compliance for OTC.
- Post #17 (`cheque-clearing-time-india`) — T+1 clearance risk on due-date.
- Post #19 (`how-to-fill-cheque-correctly`) — field rules for OTC cheque.
- Post #20 (`cheque-vs-digital-payment-india`) — head-to-head, why GST sits on the digital-wins side.
- Post #7 (`how-to-print-cheque-in-india`) — printing for regular OTC use.

**Bonus internal-link work (after publish):**
- Edit posts #17 and #20 (all 3 locales) to add a contextual link to this GST post in the conclusion.
- Add to glossary page if "GST Tax Payable" / "CPIN" / "CIN" / "OTC mode" aren't yet defined there.

---

## Pre-Publish Quality Gate

- **Tax-rules fact check (CRITICAL):** verify the ₹10,000 OTC cap, authorised-bank list, and challan flow against current gst.gov.in Help and recent CBIC circulars. The disclosure paragraph in the body is mandatory.
- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`.
- **Word count:** EN body must be >1200 words. Current draft: ~1,650 words.
- **Sanity toggles:** `isHowTo: ON` (6 steps), `hasFaq: ON`.

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into a Day 15 (or next available) block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work.
5. IndexNow auto-pings on publish.
