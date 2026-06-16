# Blog Post #23 — How to Repay a Loan by Cheque in India — EMI, Prepayment & Principal Reduction (2026)

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
| HowTo Steps | `howToSteps` | Renders HowTo schema → rich result eligibility. |

### Sanity block styles in this draft

When pasting body paragraphs into Sanity Studio, the `> ...` markdown blocks below should be split into two Sanity block types:

**Apply as Callout block (grey rounded box):**
- `> **Repaying a business loan...** / **Business loan repay करना...** / **Business loan repay કરવું...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **A ₹2 lakh prepayment...** / **₹2 lakh prepayment...** / **₹2 lakh prepayment...**` (pull quote in each body) → **Quote**

To apply: paste as a normal paragraph → click the block style dropdown above the editor → choose **"Callout box"** or **"Quote"**.

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

"How do I repay my loan by cheque?" sits at the intersection of two high-intent searches — people confused about *how repayment actually reduces what they owe*, and people who want to hand over a prepayment cheque without it getting parked as "advance EMI". Most explainers online either drown the reader in amortization math or skip the cheque mechanics entirely. This post does both in plain language: EMI = interest + principal, why early EMIs are mostly interest, how a prepayment cheque cuts the outstanding principal, the reduce-EMI vs reduce-tenure choice with a real rupee example, and the exact branch handover for a part-prepayment cheque. It also covers the 2026 hook — RBI's new pre-payment charges rules for floating-rate loans. Strong commercial + informational intent. Cluster fit: pairs with #11 (Section 138), #5 (PDCs), #17 (clearing time), #19 (how to fill), and the bulk-printing guide.

---

## Sanity Fields

- **Slug:** `loan-repayment-by-cheque-india`
- **Tags:** `Cheque Guide`, `Banking & RBI`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** YES (part-prepayment by cheque, ~6 steps)
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Thursday 2026-06-11, 10:00 IST (auto-set in Sanity)
- **Primary keyword:** `loan repayment by cheque india`
- **Secondary keywords:** repay loan by cheque, loan prepayment cheque, reduce loan principal, EMI interest vs principal, part prepayment home loan, reduce EMI vs reduce tenure, post dated cheque EMI
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/loan-repayment-by-cheque-india`
  - HI: `https://cheqify.app/hi/blog/loan-repayment-by-cheque-india`
  - GU: `https://cheqify.app/gu/blog/loan-repayment-by-cheque-india`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `loan-repayment-by-cheque-india-cover.webp`
- **Subject:** Split illustration. Left: a falling bar chart labelled "Outstanding Principal ₹30L → ₹26.75L" with a downward arrow. Centre: a cheque made out to "HDFC Bank Ltd — Home Loan A/c 5012XXXX", crossed "A/c Payee Only", with a small handwritten note "Apply to PRINCIPAL" on the reverse. Right: two small toggle pills, "Reduce EMI" vs "Reduce Tenure", the second one highlighted. Cheqify wordmark bottom-right. Warm cream-and-teal gradient background.
- **Alt text:** How to repay a loan by cheque in India — a prepayment cheque reducing the outstanding principal, with the reduce-EMI vs reduce-tenure choice.
- **OG image:** Same as cover.

---

## Titles

- **EN:** How to Repay a Loan by Cheque in India — EMI, Prepayment & Principal Reduction (2026)
- **HI:** Cheque से Loan कैसे Repay करें India में — EMI, Prepayment और Principal Reduction (2026)
- **GU:** Cheque થી Loan કેવી રીતે Repay કરવો India માં — EMI, Prepayment અને Principal Reduction (2026)

---

## Descriptions

- **EN:** Your EMI is interest plus principal — and early on, it's mostly interest. A prepayment cheque cuts the outstanding principal directly, which is where the real interest saving lives. This guide explains amortization in plain language, the reduce-EMI vs reduce-tenure choice with a worked ₹30 lakh example, exactly how to hand over a part-prepayment cheque so it hits principal (not "advance EMI"), PDCs for EMIs, what a bounced EMI cheque costs, and RBI's 2026 pre-payment charges rules.
- **HI:** आपकी EMI interest plus principal है — और शुरुआत में, ये ज़्यादातर interest है. Prepayment cheque outstanding principal को directly काटता है, जहाँ असली interest saving है. ये guide amortization को plain language में समझाती है, reduce-EMI vs reduce-tenure choice एक worked ₹30 lakh example के साथ, exactly कैसे part-prepayment cheque hand over करें ताकि वो principal पर लगे (not "advance EMI"), EMIs के लिए PDCs, bounced EMI cheque कितना costly है, और RBI के 2026 pre-payment charges rules.
- **GU:** તમારી EMI interest plus principal છે — અને શરૂઆતમાં, એ મોટાભાગે interest છે. Prepayment cheque outstanding principal ને directly કાપે છે, જ્યાં અસલી interest saving છે. આ guide amortization ને plain language માં સમજાવે છે, reduce-EMI vs reduce-tenure choice એક worked ₹30 lakh example સાથે, exactly કેવી રીતે part-prepayment cheque hand over કરવો જેથી એ principal પર લાગે (not "advance EMI"), EMIs માટે PDCs, bounced EMI cheque કેટલો costly છે, અને RBI ના 2026 pre-payment charges rules.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

Most people don't actually know what they're paying when they pay an EMI. They know the number. ₹26,000 a month, gone, every month, for twenty years. What they don't know is the split inside it — and that split is the whole story of why a loan costs what it costs, and why a cheque handed over the right way can save you lakhs.

So let's pull the EMI apart. Then let's hand over a prepayment cheque correctly.

### [H2] Your EMI Is Two Things Wearing One Number

Every EMI you pay is split into two parts: **interest** and **principal**.

Interest is the rent you pay the bank for the money you still owe. Principal is the actual chunk of the loan you're paying back. Early in the loan, the balance you owe is huge, so the interest slice is huge — and the principal slice is tiny. That's amortization. It's not the bank cheating you. It's just maths.

Here's a real example. Take a ₹30,00,000 home loan at 8.5% per year, for 20 years.

- Your EMI works out to **₹26,035** (rounded).
- In **month one**, the interest portion is **₹21,250**. The principal portion? Just **₹4,785**.

Read that again. In your very first EMI, roughly **82%** is interest. You paid ₹26,035 and only ₹4,785 of your actual loan got smaller.

It flips slowly. By the back end of the loan, almost every rupee of the EMI is principal. But the front-loading is brutal — and it's exactly why prepaying early matters so much.

Over the full 240 EMIs, you'll pay about **₹62.48 lakh** total. On a ₹30 lakh loan. The interest alone — **₹32.48 lakh** — is *more than the principal you borrowed.*

That number tends to wake people up.

### [H2] What a Prepayment Cheque Actually Does

When you hand the bank an extra ₹2 lakh on top of your regular EMI — by cheque, transfer, whatever — and you tell them to **apply it to principal**, the outstanding balance drops by ₹2 lakh immediately.

This is the magic move. Because interest each month is calculated on the *outstanding balance*, a smaller balance means less interest accrues every single month after that. Forever, until the loan closes.

A regular EMI nibbles at the principal. A prepayment takes a bite.

But — and this is the part people miss — handing over the cheque is not enough. You have to tell the bank what to do with it. Park it wrong and it does nothing useful. More on that trap below.

### [H2] Reduce EMI or Reduce Tenure? (Pick Tenure)

Prepay, and the bank hands you a choice. Keep paying the same EMI but finish the loan sooner (**reduce tenure**), or keep the same tenure but lower your monthly EMI (**reduce EMI**).

Most people pick reduce-EMI because a smaller monthly number *feels* like winning.

It's the worse choice for total interest. Almost always.

Let's run the numbers on that same ₹30 lakh loan. Say you prepay **₹2,00,000 at the end of year 2** (after 24 EMIs), and you keep the EMI the same — i.e. you reduce the tenure.

- Outstanding balance after 24 EMIs is about **₹28,75,309**.
- The ₹2 lakh knocks it down to **₹26,75,309**.
- Keeping the EMI at ₹26,035, the loan now finishes in **185 more months** instead of 216.
- **Tenure cut: about 31 months — over two and a half years off.**
- **Interest saved: roughly ₹6,22,877. Around ₹6.23 lakh.**

> **A ₹2 lakh prepayment that saves ₹6.2 lakh in interest isn't a typo — it's what happens when you reduce tenure instead of EMI, because that ₹2 lakh would otherwise have kept accruing 8.5% interest for the next sixteen years.**

Why does reduce-tenure win? Same prepayment, same rate, but two different paths. Reduce-tenure keeps your EMI high, so a bigger slice attacks the principal every month — the balance falls faster and the loan dies early. Reduce-EMI lowers the monthly hit but keeps you in debt for the full original term, so interest just keeps clocking up over more months.

Reduce-EMI only helps if your monthly cash flow is genuinely tight. If you can afford the existing EMI, reduce tenure. Every time.

### [H2] How to Hand Over a Loan Repayment Cheque — Properly

Right. The mechanics. This is where most people get sloppy and it costs them.

**Payee name with the loan account number.** Don't just write "HDFC Bank". Write the lender's legal name *with your loan account number* — for example **"HDFC Bank Ltd — Home Loan A/c 5012XXXXXX"** or **"ICICI Bank Ltd A/c LBMUM00XXXXX"**. The account number on the payee line is what ties the cheque to *your* loan and not someone else's.

**Cross it A/c Payee Only.** Two parallel lines in the top-left corner, "A/c Payee Only" written between them. This makes sure it can only be credited to the named account, never cashed over the counter. (If you're shaky on this, here's the [account-payee crossing breakdown](https://cheqify.app/en/blog/crossed-cheque-vs-account-payee) and the [full fill-it-correctly guide](https://cheqify.app/en/blog/how-to-fill-cheque-correctly).)

**Write your loan a/c number on the reverse.** Belt and braces. If the front gets misread, the back tells the clerk exactly which loan to credit.

**Use your own account.** Most lenders will only accept a prepayment cheque drawn on the borrower's or co-borrower's own bank account — third-party cheques usually get refused for KYC and anti-money-laundering reasons. HDFC states this outright: prepayment cheques must come from the borrower or co-borrower's account.

**Fill out the prepayment request form.** Branch prepayments need a written request letter or form stating your loan account number, the amount, whether it's part or full prepayment, and the cheque reference. HDFC publishes a downloadable "prepayment request letter" for exactly this. The form is where you write the words that matter: *apply toward principal as part-prepayment.*

**Get an acknowledgment.** Don't walk out without a stamped receipt or reference number. That's your proof until the cheque clears.

**Confirm it hit PRINCIPAL.** A few days after clearance, check your loan statement or the SMS. The outstanding principal should have dropped by your prepayment amount. If it didn't, escalate immediately.

### [H2] The "Advance EMI" Trap That Eats Your Saving

Here's the thing nobody warns you about.

Hand over a lump sum and the lender can do one of two things with it. Apply it to **principal** (what you want), or park it as **advance EMI** — prepaying your next few scheduled instalments — or even sit it in a suspense account.

Advance EMI sounds helpful. It isn't, not for interest. Those future EMIs already had their interest baked in. Pre-paying them early doesn't shrink your outstanding principal and doesn't save you the interest that a true principal prepayment does. It just means your next couple of months are "already paid".

The fix is one line, written clearly on your request form: **"Please credit this amount toward the outstanding PRINCIPAL as a part-prepayment."** Then confirm — by statement or SMS — that the principal actually dropped.

If a lender deducts advance EMI without your consent, or parks your money in suspense instead of applying it as instructed, that's contestable. The escalation path: written complaint to the lender → its Nodal / Principal Officer → the **RBI Integrated Ombudsman Scheme** (for banks and NBFCs) or the relevant grievance portal for housing-finance companies. Keep your acknowledgment and request form — they're your evidence.

### [H2] Post-Dated Cheques for EMIs — Why NBFCs Still Take Them

You'd think post-dated cheques (PDCs) for EMIs were extinct. Mostly, for banks, they are — NACH auto-debit does the actual monthly pulling now.

But NBFCs and vehicle financiers still collect a stack of PDCs from you at loan disbursal, one cheque per EMI. Why, if NACH does the debiting?

**Security.** The PDCs sit in a drawer as a backup, and as a quiet bit of pressure on you. If your NACH mandate fails or gets cancelled, the lender has a signed instrument to present. And a signed cheque carries the weight of Section 138 — bounce it and you're staring at a criminal offence, which is a far bigger stick than a failed auto-debit.

RBI and NPCI have been pushing lenders off PDCs and onto e-NACH / NACH mandates for years — NPCI even issued a specific circular on migrating PDC/EMI cheques to NACH Debit. So the PDC's role has shrunk from "the actual payment method" to "the security blanket". (For the full rulebook on PDCs, see [post-dated cheques: rules and best practices](https://cheqify.app/en/blog/post-dated-cheques-rules-and-best-practices).)

One more thing the courts have settled: a voluntarily signed blank or undated security cheque is **not illegal**. Hand one over toward a debt and it attracts the Section 139 presumption that a legally enforceable debt exists. The lender can fill in the particulars later. But there's a fair-play limit — if you've made part-payments and the lender presents a security cheque for the *full original amount* without endorsing what you already paid, Section 138 may not be attracted, because the cheque has to reflect what's actually due.

### [H2] What Happens If Your EMI Cheque Bounces

Short version: a lot, and none of it good.

**Section 138 of the NI Act.** A cheque dishonoured for insufficient funds, issued toward a real debt, is a criminal offence. The drill: the lender sends a written demand notice within **30 days** of the dishonour memo, you get **15 days** to pay, and if you don't, they file a complaint within **30 days** of that window closing. Penalty on conviction: imprisonment up to **2 years**, or a fine up to **twice the cheque amount**, or both. Courts can also order interim compensation of up to **20%** of the cheque amount during trial, under Section 143A. (Full breakdown: [Section 138 explained](https://cheqify.app/en/blog/section-138-ni-act-cheque-bounce-india).)

**Bank bounce charges.** Every dishonour triggers a fee. Across major banks these run roughly **₹250–₹600 plus GST** per bounce — ICICI around ₹500, SBI's NACH mandate failure around ₹250 + 18% GST (₹295), HDFC's instrument-return charges in the ₹450–₹550 band on personal loans. Exact home-loan figures vary by lender and product, so check your loan's Schedule of Charges.

**Penal interest.** Miss the EMI and penal interest accrues on top, per your loan agreement.

**Your CIBIL score takes a hit.** A bounced EMI gets reported to the credit bureaus and drags your score down, which bites the next time you apply for a loan or a card. There's no fixed "points lost" number — it varies — but the direction is always down.

Annoying? Yes. Expensive? Very. Keep the funding account loaded before the EMI date and this whole section never applies to you.

### [H2] The 2026 Hook — RBI Killed Pre-payment Charges on Most Floating-Rate Loans

Here's the genuinely new bit for 2026, and it's a big one.

RBI issued the **"Reserve Bank of India (Pre-payment Charges on Loans) Directions, 2025"** (RBI/2025-26/64), on **2 July 2025**. They apply to all loans **sanctioned or renewed on or after 1 January 2026**, across commercial banks, co-operative banks, NBFCs and All India Financial Institutions.

The headline: **no pre-payment charges** on floating-rate loans taken by individuals for non-business purposes — your home loan, your personal loan — whether you prepay part or full, regardless of where the money came from, with **no minimum lock-in**. By any regulated lender. Full stop.

There's more. The Directions also extend no-charge protection to many **business loans to individuals and to Micro & Small Enterprises (MSEs)**, within size thresholds that vary by lender type. And any charges that *are* still permitted (e.g. some fixed-rate business loans above the thresholds) must be disclosed upfront in the sanction letter — retrospective, surprise levies are barred.

For context, floating-rate individual home loans have actually been penalty-free since RBI's 2012 and 2014 circulars. What's new in 2025 is the consolidation across every lender type *and* the extension to MSE borrowers. If your loan is floating-rate and personal, prepaying is now a clean win — the lender can't charge you for the privilege of giving them their money back early.

### [H2] When Does the Prepayment Actually Reduce Your Principal?

One timing detail that costs people interest: a prepayment cheque reduces your principal **only when it clears**, not when you hand it over.

Until then, interest keeps accruing on the un-reduced balance. Historically that meant a T+1 or T+2 wait. Good news — India moved to **continuous cheque clearing** under CTS from **4 October 2025**, so a cheque presented in the 10 AM–4 PM window can now clear and credit **same day**. (The mechanics: [cheque clearing time in India](https://cheqify.app/en/blog/cheque-clearing-time-india) and the [truncation system explained](https://cheqify.app/en/blog/cheque-truncation-system-explained).)

Faster clearing means your principal drops sooner, which means a few rupees less interest. Small, but it's your money.

### [H2] If You're a Business Repaying a Business Loan

Here's where it gets real for SMBs. A business repaying a term loan or working-capital facility by cheque — especially a financier that still wants a year of PDCs up front — is staring at writing 12 to 24 cheques by hand, each one with the lender's name, your loan account number, the amount in figures and words, all error-free. Tedious doesn't begin to cover it.

Do that by hand and one transposed digit or one wrong amount-in-words bounces a cheque you fully intended to honour. That's a self-inflicted Section 138 risk for nothing.

This is exactly the boring, repetitive job software should do. Which brings us to the point.

---

> **Repaying a business loan by cheque? Print a year of EMI / PDC cheques in one batch with Cheqify.** Pull amounts from Excel, auto amount-in-words (English + Hindi), auto-MICR validation, 300+ Indian bank layouts, full issue-to-clearance tracking. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** How is my EMI split between interest and principal?
   **A:** Every EMI contains both. Early on, your outstanding balance is large, so most of the EMI is interest and only a thin slice touches the principal. Take a ₹30 lakh, 8.5%, 20-year loan: the first EMI of ₹26,035 is about ₹21,250 interest and just ₹4,785 principal. Lopsided, right? It flips toward principal as the loan ages.

2. **Q:** Does a prepayment cheque reduce my principal or my EMI?
   **A:** It reduces your outstanding principal — but only if you instruct the lender to apply it to principal. Once the principal drops, you then choose whether to lower your EMI or shorten your tenure. If you don't give clear instructions, the money can get parked as advance EMI instead, which doesn't save you interest the same way.

3. **Q:** Should I reduce my EMI or reduce my tenure after prepaying?
   **A:** Reduce tenure if you can afford to keep paying the same EMI — it saves far more interest. On the ₹30 lakh example, a ₹2 lakh prepayment with tenure reduction saves roughly ₹6.23 lakh in interest and cuts about 31 months off the loan. Reduce-EMI only makes sense when your monthly cash flow is genuinely stretched.

4. **Q:** How do I write a loan prepayment cheque correctly?
   **A:** Make it payable to the lender's legal name with your loan account number on the payee line, e.g. "HDFC Bank Ltd — Home Loan A/c <number>". Cross it "A/c Payee Only", write your loan account number on the reverse, and draw it from your own (or a co-borrower's) account. Submit it with a prepayment request form stating that the amount should go toward principal.

5. **Q:** Why do NBFCs still collect post-dated cheques if NACH does the debiting?
   **A:** The PDCs are held as security and as a bit of pressure. NACH or e-NACH auto-debit handles the actual monthly collection, but a signed cheque carries Section 138 weight, so the lender keeps the stack as a backup if the mandate fails or is cancelled. RBI and NPCI have been pushing lenders to migrate fully to electronic mandates for years.

6. **Q:** What happens if my EMI cheque bounces?
   **A:** It can trigger a Section 138 case (up to 2 years' jail or a fine up to twice the cheque amount), a bank bounce charge of roughly ₹250–₹600 plus GST, penal interest per your loan agreement, and a hit to your CIBIL score. The lender must send a demand notice within 30 days; you then get 15 days to pay before a complaint can be filed.

7. **Q:** Will I be charged a pre-payment penalty in 2026?
   **A:** For floating-rate loans taken by individuals for non-business purposes — like most home and personal loans — no. RBI's Pre-payment Charges Directions, 2025 bar pre-payment charges on these for loans sanctioned or renewed on or after 1 January 2026, with no lock-in, by any regulated lender. The protection also extends to many MSE and individual business loans within size thresholds. Verify against the RBI circular for your specific loan type.

---

## HowTo Steps (Sanity `howToSteps` field — required for HowTo schema)

| # | Name | Text |
|---|---|---|
| 1 | Confirm your prepayment terms | Check your loan is floating-rate and individual/non-business, where RBI's 2025 Directions bar pre-payment charges for loans sanctioned or renewed on/after 1 Jan 2026. Note any minimum part-payment amount your lender sets (e.g. HDFC: ₹5,000 or 1 EMI, whichever is higher). |
| 2 | Write the cheque to the lender with your loan a/c number | Make it payable to the lender's legal name with your loan account number on the payee line, e.g. "HDFC Bank Ltd — Home Loan A/c 5012XXXXXX". Fill amount in figures and words to match exactly. Draw it from your own or a co-borrower's account. |
| 3 | Cross it A/c Payee Only and write the a/c no. on the reverse | Two parallel lines top-left, "A/c Payee Only" between them, so it can only be credited to the named loan account. Write your loan account number on the back as a fallback for the clerk. |
| 4 | Fill out the prepayment request form | State your loan account number, the amount, whether it's part or full prepayment, and the cheque reference. Critically, write: "Apply this amount toward the outstanding PRINCIPAL as a part-prepayment" — so it isn't parked as advance EMI. |
| 5 | Submit at the branch and collect an acknowledgment | Hand over the cheque and form at the loan-servicing counter. Get a stamped receipt or reference number. Keep it as proof until the cheque clears. |
| 6 | Confirm the credit hit PRINCIPAL after clearance | After the cheque clears (now potentially same-day under continuous clearing), check your loan statement or SMS. Confirm the outstanding principal dropped by your prepayment amount, and choose reduce-tenure (saves more interest) over reduce-EMI. Escalate to the lender's Nodal Officer or the RBI Ombudsman if it was misapplied. |

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the disclosure / CTA at the bottom.

---

ज़्यादातर लोग actually जानते ही नहीं कि वो EMI pay करते वक़्त क्या pay कर रहे हैं. उन्हें number पता है. ₹26,000 हर महीने, gone, हर महीने, बीस साल तक. जो उन्हें नहीं पता वो है इसके अंदर का split — और वही split पूरी कहानी है कि loan की cost इतनी क्यों होती है, और एक cheque सही तरीके से hand over करने पर आपके lakhs कैसे बचा सकता है.

तो चलिए EMI को pull apart करते हैं. फिर एक prepayment cheque सही तरीके से hand over करते हैं.

### [H2] आपकी EMI एक Number में छुपी दो चीज़ें हैं

हर EMI जो आप pay करते हैं दो parts में split होती है: **interest** और **principal**.

Interest वो rent है जो आप bank को pay करते हैं उस money के लिए जो आप अभी भी owe करते हैं. Principal loan का वो actual chunk है जो आप वापस pay कर रहे हैं. Loan की शुरुआत में, जो balance आप owe करते हैं वो huge है, so interest slice huge है — और principal slice tiny है. ये amortization है. ये bank आपको cheat नहीं कर रहा. ये बस maths है.

यहाँ एक real example है. एक ₹30,00,000 का home loan लें 8.5% per year पर, 20 साल के लिए.

- आपकी EMI निकलती है **₹26,035** (rounded).
- **Month one** में, interest portion है **₹21,250**. Principal portion? सिर्फ़ **₹4,785**.

इसे फिर से पढ़ें. आपकी बिल्कुल पहली EMI में, roughly **82%** interest है. आपने ₹26,035 pay किए और सिर्फ़ ₹4,785 आपका actual loan छोटा हुआ.

ये धीरे-धीरे flip होता है. Loan के back end तक, EMI का लगभग हर rupee principal है. पर front-loading brutal है — और यही exactly वजह है कि early prepay करना इतना matter करता है.

पूरी 240 EMIs में, आप total लगभग **₹62.48 lakh** pay करेंगे. एक ₹30 lakh के loan पर. अकेला interest — **₹32.48 lakh** — *आपके borrow किए principal से ज़्यादा है.*

ये number लोगों को जगा देता है.

### [H2] Prepayment Cheque Actually क्या करता है

जब आप bank को अपनी regular EMI के ऊपर extra ₹2 lakh hand over करते हैं — cheque से, transfer से, जो भी — और उन्हें बोलते हैं कि इसे **principal पर apply** करो, outstanding balance immediately ₹2 lakh गिर जाता है.

ये magic move है. क्योंकि हर महीने का interest *outstanding balance* पर calculate होता है, smaller balance का मतलब है उसके बाद हर single महीने कम interest accrue होता है. Forever, loan close होने तक.

एक regular EMI principal को nibble करती है. एक prepayment एक bite लेती है.

पर — और यही वो part है जो लोग miss करते हैं — cheque hand over करना enough नहीं है. आपको bank को बताना है कि इसके साथ क्या करना है. गलत park करो और ये कुछ useful नहीं करता. इस trap पर नीचे और detail है.

### [H2] Reduce EMI या Reduce Tenure? (Tenure Pick करो)

Prepay करें, और bank आपको एक choice देता है. वही EMI pay करते रहें पर loan जल्दी finish करें (**reduce tenure**), या same tenure रखें पर अपनी monthly EMI lower करें (**reduce EMI**).

ज़्यादातर लोग reduce-EMI pick करते हैं क्योंकि एक smaller monthly number *feel* होता है जैसे winning हो.

ये total interest के लिए worse choice है. Almost always.

चलिए उसी ₹30 lakh loan पर numbers run करते हैं. मान लें आप **year 2 के end पर ₹2,00,000 prepay** करते हैं (24 EMIs के बाद), और आप EMI same रखते हैं — यानी आप tenure reduce करते हैं.

- 24 EMIs के बाद outstanding balance लगभग **₹28,75,309** है.
- ₹2 lakh इसे नीचे **₹26,75,309** पर ले आता है.
- EMI को ₹26,035 पर रखते हुए, loan अब **185 और months** में finish होता है 216 की जगह.
- **Tenure cut: लगभग 31 months — ढाई साल से ज़्यादा off.**
- **Interest saved: roughly ₹6,22,877. लगभग ₹6.23 lakh.**

> **₹2 lakh का prepayment जो interest में ₹6.2 lakh बचाता है typo नहीं है — ये तब होता है जब आप EMI की जगह tenure reduce करते हैं, क्योंकि वो ₹2 lakh otherwise अगले सोलह साल तक 8.5% interest accrue करता रहता.**

Reduce-tenure क्यों जीतता है? Same prepayment, same rate, पर दो different paths. Reduce-tenure आपकी EMI high रखता है, so हर महीने एक bigger slice principal पर attack करती है — balance faster गिरता है और loan जल्दी मर जाता है. Reduce-EMI monthly hit को lower करता है पर आपको पूरे original term के लिए debt में रखता है, so interest बस ज़्यादा months में clock up होता रहता है.

Reduce-EMI सिर्फ़ तब help करता है अगर आपका monthly cash flow genuinely tight है. अगर आप existing EMI afford कर सकते हैं, tenure reduce करें. हर बार.

### [H2] Loan Repayment Cheque कैसे Hand Over करें — Properly

Right. Mechanics. यहीं ज़्यादातर लोग sloppy हो जाते हैं और इसकी कीमत चुकाते हैं.

**Payee name loan account number के साथ.** सिर्फ़ "HDFC Bank" मत लिखें. Lender का legal name लिखें *अपने loan account number के साथ* — for example **"HDFC Bank Ltd — Home Loan A/c 5012XXXXXX"** या **"ICICI Bank Ltd A/c LBMUM00XXXXX"**. Payee line पर account number ही वो चीज़ है जो cheque को *आपके* loan से tie करती है, किसी और के नहीं.

**इसे A/c Payee Only cross करें.** Top-left corner में two parallel lines, बीच में "A/c Payee Only" लिखा. ये sure करता है कि ये सिर्फ़ named account में credit हो सकता है, counter पर कभी cash नहीं. (अगर इस पर आप shaky हैं, यहाँ है [account-payee crossing breakdown](https://cheqify.app/hi/blog/crossed-cheque-vs-account-payee) और [full fill-it-correctly guide](https://cheqify.app/hi/blog/how-to-fill-cheque-correctly).)

**अपना loan a/c number reverse पर लिखें.** Belt and braces. अगर front misread हो जाए, back clerk को exactly बताता है कि कौन सा loan credit करना है.

**अपना खुद का account use करें.** ज़्यादातर lenders सिर्फ़ borrower या co-borrower के अपने bank account पर drawn prepayment cheque accept करेंगे — third-party cheques usually KYC और anti-money-laundering reasons के लिए refuse हो जाते हैं. HDFC ये outright बताता है: prepayment cheques borrower या co-borrower के account से आने चाहिए.

**Prepayment request form fill करें.** Branch prepayments को एक written request letter या form चाहिए जो आपका loan account number, amount, ये part है या full prepayment, और cheque reference बताए. HDFC exactly इसी के लिए एक downloadable "prepayment request letter" publish करता है. Form वही जगह है जहाँ आप वो words लिखते हैं जो matter करते हैं: *part-prepayment के तौर पर principal की ओर apply करें.*

**Acknowledgment लें.** एक stamped receipt या reference number के बिना बाहर मत निकलें. जब तक cheque clear नहीं होता वो आपका proof है.

**Confirm करें कि ये PRINCIPAL पर लगा.** Clearance के कुछ दिन बाद, अपना loan statement या SMS check करें. Outstanding principal आपकी prepayment amount से गिर जाना चाहिए. अगर नहीं गिरा, immediately escalate करें.

### [H2] "Advance EMI" Trap जो आपकी Saving को खा जाता है

यहाँ वो चीज़ है जिसके बारे में कोई warn नहीं करता.

एक lump sum hand over करें और lender इसके साथ दो में से एक चीज़ कर सकता है. इसे **principal** पर apply करें (जो आप चाहते हैं), या इसे **advance EMI** के तौर पर park करें — आपकी अगली कुछ scheduled instalments prepay करते हुए — या इसे एक suspense account में बिठा दे.

Advance EMI helpful sound करता है. है नहीं, interest के लिए तो नहीं. उन future EMIs में interest already baked in था. उन्हें early pre-pay करने से आपका outstanding principal shrink नहीं होता और वो interest save नहीं होता जो एक true principal prepayment करता है. इसका बस मतलब है कि आपके अगले couple of months "already paid" हैं.

Fix एक line है, आपके request form पर clearly लिखी: **"Please credit this amount toward the outstanding PRINCIPAL as a part-prepayment."** फिर confirm करें — statement या SMS से — कि principal actually गिरा.

अगर कोई lender आपकी consent के बिना advance EMI deduct करता है, या आपकी money को instructed तरीके से apply करने की जगह suspense में park करता है, वो contestable है. Escalation path: lender को written complaint → उसका Nodal / Principal Officer → **RBI Integrated Ombudsman Scheme** (banks और NBFCs के लिए) या housing-finance companies के लिए relevant grievance portal. अपना acknowledgment और request form रखें — वो आपका evidence हैं.

### [H2] EMIs के लिए Post-Dated Cheques — NBFCs अभी भी इन्हें क्यों लेते हैं

आप सोचेंगे कि EMIs के लिए post-dated cheques (PDCs) extinct हो गए. Mostly, banks के लिए, हैं — NACH auto-debit अब actual monthly pulling करता है.

पर NBFCs और vehicle financiers अभी भी loan disbursal पर आपसे PDCs का एक stack collect करते हैं, एक cheque per EMI. क्यों, अगर NACH debiting करता है?

**Security.** PDCs एक drawer में backup के तौर पर बैठे रहते हैं, और आप पर एक quiet bit of pressure के तौर पर. अगर आपका NACH mandate fail हो जाए या cancel हो जाए, lender के पास present करने के लिए एक signed instrument है. और एक signed cheque Section 138 का weight carry करता है — इसे bounce करो और आप एक criminal offence के सामने हैं, जो एक failed auto-debit से कहीं bigger stick है.

RBI और NPCI सालों से lenders को PDCs से हटाकर e-NACH / NACH mandates पर push कर रहे हैं — NPCI ने तो PDC/EMI cheques को NACH Debit पर migrate करने पर एक specific circular भी issue किया. तो PDC का role "actual payment method" से shrink होकर "security blanket" हो गया है. (PDCs पर full rulebook के लिए, देखें [post-dated cheques: rules and best practices](https://cheqify.app/hi/blog/post-dated-cheques-rules-and-best-practices).)

एक और चीज़ जो courts ने settle कर दी: voluntarily signed blank या undated security cheque **illegal नहीं है**. किसी debt की ओर एक ऐसा cheque hand over करें और ये Section 139 presumption attract करता है कि एक legally enforceable debt exist करता है. Lender बाद में particulars fill कर सकता है. पर एक fair-play limit है — अगर आपने part-payments की हैं और lender *full original amount* के लिए एक security cheque present करता है बिना आपके पहले से pay किए को endorse किए, Section 138 attract नहीं हो सकता, क्योंकि cheque को reflect करना है जो actually due है.

### [H2] अगर आपका EMI Cheque Bounce हो जाए तो क्या होता है

Short version: बहुत कुछ, और इसमें कुछ भी अच्छा नहीं.

**NI Act का Section 138.** Insufficient funds के लिए dishonoured एक cheque, एक real debt की ओर issued, एक criminal offence है. Drill: lender dishonour memo के **30 days** के अंदर एक written demand notice भेजता है, आपको pay करने के लिए **15 days** मिलते हैं, और अगर आप नहीं करते, वो उस window के close होने के **30 days** के अंदर एक complaint file करते हैं. Conviction पर penalty: **2 साल** तक की imprisonment, या **cheque amount से double** तक का fine, या दोनों. Courts trial के दौरान cheque amount का **20%** तक interim compensation भी order कर सकती हैं, Section 143A के under. (Full breakdown: [Section 138 explained](https://cheqify.app/hi/blog/section-138-ni-act-cheque-bounce-india).)

**Bank bounce charges.** हर dishonour एक fee trigger करता है. Major banks में ये roughly **₹250–₹600 plus GST** per bounce चलते हैं — ICICI around ₹500, SBI का NACH mandate failure around ₹250 + 18% GST (₹295), HDFC के instrument-return charges personal loans पर ₹450–₹550 band में. Exact home-loan figures lender और product से vary करते हैं, so अपने loan का Schedule of Charges check करें.

**Penal interest.** EMI miss करें और penal interest ऊपर से accrue होता है, आपके loan agreement के हिसाब से.

**आपका CIBIL score hit लेता है.** एक bounced EMI credit bureaus को report होती है और आपके score को नीचे drag करती है, जो अगली बार जब आप loan या card के लिए apply करें तो bite करती है. कोई fixed "points lost" number नहीं है — ये vary करता है — पर direction हमेशा नीचे होती है.

Annoying? हाँ. Expensive? बहुत. EMI date से पहले funding account loaded रखें और ये पूरा section आप पर कभी apply नहीं होता.

### [H2] 2026 का Hook — RBI ने ज़्यादातर Floating-Rate Loans पर Pre-payment Charges Kill कर दिए

यहाँ 2026 के लिए genuinely नया bit है, और ये एक big one है.

RBI ने **"Reserve Bank of India (Pre-payment Charges on Loans) Directions, 2025"** (RBI/2025-26/64) issue किया, **2 July 2025** को. ये उन सभी loans पर apply होते हैं जो **1 January 2026 को या उसके बाद sanctioned या renewed** हैं, commercial banks, co-operative banks, NBFCs और All India Financial Institutions में.

Headline: individuals द्वारा non-business purposes के लिए लिए गए floating-rate loans पर **कोई pre-payment charges नहीं** — आपका home loan, आपका personal loan — चाहे आप part prepay करें या full, चाहे money कहीं से भी आई हो, **कोई minimum lock-in नहीं** के साथ. किसी भी regulated lender द्वारा. Full stop.

और भी है. Directions कई **individuals और Micro & Small Enterprises (MSEs) को business loans** तक भी no-charge protection extend करते हैं, उन size thresholds के अंदर जो lender type से vary करती हैं. और कोई भी charges जो *अभी भी* permitted हैं (e.g. thresholds से ऊपर कुछ fixed-rate business loans) sanction letter में upfront disclose होने चाहिए — retrospective, surprise levies barred हैं.

Context के लिए, floating-rate individual home loans actually RBI के 2012 और 2014 circulars से penalty-free रहे हैं. 2025 में नया है हर lender type में consolidation *और* MSE borrowers तक extension. अगर आपका loan floating-rate और personal है, prepay करना अब एक clean win है — lender आपको उनकी money जल्दी वापस देने के privilege के लिए charge नहीं कर सकता.

### [H2] Prepayment Actually आपका Principal कब Reduce करता है?

एक timing detail जो लोगों को interest costly पड़ता है: एक prepayment cheque आपका principal **तभी reduce करता है जब वो clear होता है**, जब आप इसे hand over करते हैं तब नहीं.

तब तक, interest un-reduced balance पर accrue होता रहता है. Historically इसका मतलब एक T+1 या T+2 wait था. Good news — India **4 October 2025** से CTS के under **continuous cheque clearing** पर move हो गया, so 10 AM–4 PM window में present किया गया cheque अब **same day** clear और credit हो सकता है. (Mechanics: [cheque clearing time in India](https://cheqify.app/hi/blog/cheque-clearing-time-india) और [truncation system explained](https://cheqify.app/hi/blog/cheque-truncation-system-explained).)

Faster clearing का मतलब आपका principal जल्दी गिरता है, जिसका मतलब कुछ rupees कम interest. Small, पर ये आपकी money है.

### [H2] अगर आप एक Business हैं जो Business Loan Repay कर रहे हैं

यहाँ ये SMBs के लिए real हो जाता है. एक business जो cheque से एक term loan या working-capital facility repay कर रहा है — खासकर एक financier जो अभी भी एक साल के PDCs up front चाहता है — 12 से 24 cheques हाथ से लिखने के सामने है, हर एक lender के name, आपके loan account number, figures और words में amount के साथ, सब error-free. Tedious इसे cover करना शुरू भी नहीं करता.

इसे हाथ से करें और एक transposed digit या एक wrong amount-in-words एक cheque bounce कर देता है जिसे आप fully honour करने का इरादा रखते थे. वो बिना वजह एक self-inflicted Section 138 risk है.

ये exactly वो boring, repetitive job है जो software को करना चाहिए. जो हमें point पर ले आता है.

---

> **Cheque से business loan repay कर रहे हैं? एक साल की EMI / PDC cheques एक batch में print करें Cheqify के साथ.** Excel से amounts pull करें, auto amount-in-words (English + Hindi), auto-MICR validation, 300+ Indian bank layouts, full issue-to-clearance tracking. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Gujlish blend, same structure as English. Keep the disclosure / CTA at the bottom.

---

મોટાભાગના લોકો actually જાણતા જ નથી કે EMI pay કરતી વખતે એ શું pay કરી રહ્યા છે. એમને number ખબર છે. ₹26,000 દર મહિને, gone, દર મહિને, વીસ વર્ષ સુધી. જે એમને ખબર નથી એ છે એની અંદરનો split — અને એ જ split આખી કહાની છે કે loan ની cost આટલી કેમ હોય છે, અને એક cheque સાચી રીતે hand over કરવાથી તમારા lakhs કેવી રીતે બચાવી શકાય છે.

તો ચાલો EMI ને pull apart કરીએ. પછી એક prepayment cheque સાચી રીતે hand over કરીએ.

### [H2] તમારી EMI એક Number માં છુપાયેલી બે વસ્તુઓ છે

દરેક EMI જે તમે pay કરો છો બે parts માં split થાય છે: **interest** અને **principal**.

Interest એ rent છે જે તમે bank ને pay કરો છો એ money માટે જે તમે હજુ owe કરો છો. Principal એ loan નો actual chunk છે જે તમે પાછો pay કરી રહ્યા છો. Loan ની શરૂઆતમાં, જે balance તમે owe કરો છો એ huge છે, so interest slice huge છે — અને principal slice tiny છે. આ amortization છે. આ bank તમને cheat નથી કરી રહ્યું. આ બસ maths છે.

અહીં એક real example છે. એક ₹30,00,000 નો home loan લો 8.5% per year પર, 20 વર્ષ માટે.

- તમારી EMI નીકળે છે **₹26,035** (rounded).
- **Month one** માં, interest portion છે **₹21,250**. Principal portion? ફક્ત **₹4,785**.

આને ફરી વાંચો. તમારી બિલકુલ પહેલી EMI માં, roughly **82%** interest છે. તમે ₹26,035 pay કર્યા અને ફક્ત ₹4,785 તમારો actual loan નાનો થયો.

આ ધીરે-ધીરે flip થાય છે. Loan ના back end સુધી, EMI નો લગભગ દરેક rupee principal છે. પણ front-loading brutal છે — અને એ જ exactly કારણ છે કે early prepay કરવું આટલું matter કરે છે.

આખી 240 EMIs માં, તમે total લગભગ **₹62.48 lakh** pay કરશો. એક ₹30 lakh ના loan પર. એકલું interest — **₹32.48 lakh** — *તમે borrow કરેલા principal થી વધારે છે.*

આ number લોકોને જગાડી દે છે.

### [H2] Prepayment Cheque Actually શું કરે છે

જ્યારે તમે bank ને તમારી regular EMI ની ઉપર extra ₹2 lakh hand over કરો છો — cheque થી, transfer થી, જે પણ — અને એમને કહો છો કે એને **principal પર apply** કરો, outstanding balance immediately ₹2 lakh ઘટી જાય છે.

આ magic move છે. કારણ કે દર મહિનાનું interest *outstanding balance* પર calculate થાય છે, smaller balance નો અર્થ છે એ પછી દર single મહિને ઓછું interest accrue થાય છે. Forever, loan close થાય ત્યાં સુધી.

એક regular EMI principal ને nibble કરે છે. એક prepayment એક bite લે છે.

પણ — અને એ જ એ part છે જે લોકો miss કરે છે — cheque hand over કરવું enough નથી. તમારે bank ને કહેવાનું છે કે એની સાથે શું કરવાનું છે. ખોટું park કરો અને એ કંઈ useful નથી કરતું. આ trap પર નીચે વધારે detail છે.

### [H2] Reduce EMI કે Reduce Tenure? (Tenure Pick કરો)

Prepay કરો, અને bank તમને એક choice આપે છે. એ જ EMI pay કરતા રહો પણ loan જલ્દી finish કરો (**reduce tenure**), કે same tenure રાખો પણ તમારી monthly EMI lower કરો (**reduce EMI**).

મોટાભાગના લોકો reduce-EMI pick કરે છે કારણ કે એક smaller monthly number *feel* થાય છે જાણે winning હોય.

આ total interest માટે worse choice છે. Almost always.

ચાલો એ જ ₹30 lakh loan પર numbers run કરીએ. માની લો તમે **year 2 ના end પર ₹2,00,000 prepay** કરો છો (24 EMIs પછી), અને તમે EMI same રાખો છો — એટલે કે તમે tenure reduce કરો છો.

- 24 EMIs પછી outstanding balance લગભગ **₹28,75,309** છે.
- ₹2 lakh એને નીચે **₹26,75,309** પર લાવી દે છે.
- EMI ને ₹26,035 પર રાખતા, loan હવે **185 વધારે months** માં finish થાય છે 216 ની જગ્યાએ.
- **Tenure cut: લગભગ 31 months — અઢી વર્ષ થી વધારે off.**
- **Interest saved: roughly ₹6,22,877. લગભગ ₹6.23 lakh.**

> **₹2 lakh નું prepayment જે interest માં ₹6.2 lakh બચાવે છે એ typo નથી — એ ત્યારે થાય છે જ્યારે તમે EMI ની જગ્યાએ tenure reduce કરો છો, કારણ કે એ ₹2 lakh otherwise આવતા સોળ વર્ષ સુધી 8.5% interest accrue કરતા રહેત.**

Reduce-tenure કેમ જીતે છે? Same prepayment, same rate, પણ બે different paths. Reduce-tenure તમારી EMI high રાખે છે, so દર મહિને એક bigger slice principal પર attack કરે છે — balance faster ઘટે છે અને loan જલ્દી મરી જાય છે. Reduce-EMI monthly hit ને lower કરે છે પણ તમને આખા original term માટે debt માં રાખે છે, so interest બસ વધારે months માં clock up થતું રહે છે.

Reduce-EMI ફક્ત ત્યારે help કરે છે જો તમારો monthly cash flow genuinely tight હોય. જો તમે existing EMI afford કરી શકો, tenure reduce કરો. દર વખતે.

### [H2] Loan Repayment Cheque કેવી રીતે Hand Over કરવો — Properly

Right. Mechanics. અહીં જ મોટાભાગના લોકો sloppy થઈ જાય છે અને એની કિંમત ચૂકવે છે.

**Payee name loan account number સાથે.** ફક્ત "HDFC Bank" ન લખો. Lender નું legal name લખો *તમારા loan account number સાથે* — for example **"HDFC Bank Ltd — Home Loan A/c 5012XXXXXX"** કે **"ICICI Bank Ltd A/c LBMUM00XXXXX"**. Payee line પર account number જ એ વસ્તુ છે જે cheque ને *તમારા* loan સાથે tie કરે છે, કોઈ બીજાના નહીં.

**એને A/c Payee Only cross કરો.** Top-left corner માં two parallel lines, વચ્ચે "A/c Payee Only" લખેલું. આ sure કરે છે કે એ ફક્ત named account માં credit થઈ શકે, counter પર ક્યારેય cash નહીં. (જો આના પર તમે shaky હો, અહીં છે [account-payee crossing breakdown](https://cheqify.app/gu/blog/crossed-cheque-vs-account-payee) અને [full fill-it-correctly guide](https://cheqify.app/gu/blog/how-to-fill-cheque-correctly).)

**તમારો loan a/c number reverse પર લખો.** Belt and braces. જો front misread થઈ જાય, back clerk ને exactly કહે છે કે કયો loan credit કરવાનો છે.

**તમારું પોતાનું account use કરો.** મોટાભાગના lenders ફક્ત borrower કે co-borrower ના પોતાના bank account પર drawn prepayment cheque accept કરશે — third-party cheques usually KYC અને anti-money-laundering reasons માટે refuse થઈ જાય છે. HDFC આ outright કહે છે: prepayment cheques borrower કે co-borrower ના account થી આવવા જોઈએ.

**Prepayment request form fill કરો.** Branch prepayments ને એક written request letter કે form જોઈએ જે તમારો loan account number, amount, એ part છે કે full prepayment, અને cheque reference જણાવે. HDFC exactly આના માટે જ એક downloadable "prepayment request letter" publish કરે છે. Form એ જ જગ્યા છે જ્યાં તમે એ words લખો છો જે matter કરે છે: *part-prepayment તરીકે principal તરફ apply કરો.*

**Acknowledgment લો.** એક stamped receipt કે reference number વગર બહાર ન નીકળો. જ્યાં સુધી cheque clear ન થાય એ તમારો proof છે.

**Confirm કરો કે એ PRINCIPAL પર લાગ્યો.** Clearance ના થોડા દિવસ પછી, તમારું loan statement કે SMS check કરો. Outstanding principal તમારી prepayment amount થી ઘટી જવું જોઈએ. જો ન ઘટ્યું, immediately escalate કરો.

### [H2] "Advance EMI" Trap જે તમારી Saving ને ખાઈ જાય છે

અહીં એ વસ્તુ છે જેના વિશે કોઈ warn નથી કરતું.

એક lump sum hand over કરો અને lender એની સાથે બે માંથી એક વસ્તુ કરી શકે છે. એને **principal** પર apply કરે (જે તમે ઈચ્છો છો), કે એને **advance EMI** તરીકે park કરે — તમારી આવતી થોડી scheduled instalments prepay કરતા — કે એને એક suspense account માં બેસાડી દે.

Advance EMI helpful sound કરે છે. છે નહીં, interest માટે તો નહીં. એ future EMIs માં interest already baked in હતું. એમને early pre-pay કરવાથી તમારો outstanding principal shrink નથી થતો અને એ interest save નથી થતું જે એક true principal prepayment કરે છે. એનો બસ અર્થ છે કે તમારા આવતા couple of months "already paid" છે.

Fix એક line છે, તમારા request form પર clearly લખેલી: **"Please credit this amount toward the outstanding PRINCIPAL as a part-prepayment."** પછી confirm કરો — statement કે SMS થી — કે principal actually ઘટ્યો.

જો કોઈ lender તમારી consent વગર advance EMI deduct કરે, કે તમારી money ને instructed રીતે apply કરવાની જગ્યાએ suspense માં park કરે, એ contestable છે. Escalation path: lender ને written complaint → એનો Nodal / Principal Officer → **RBI Integrated Ombudsman Scheme** (banks અને NBFCs માટે) કે housing-finance companies માટે relevant grievance portal. તમારું acknowledgment અને request form રાખો — એ તમારા evidence છે.

### [H2] EMIs માટે Post-Dated Cheques — NBFCs હજુ આ કેમ લે છે

તમે વિચારશો કે EMIs માટે post-dated cheques (PDCs) extinct થઈ ગયા. Mostly, banks માટે, છે — NACH auto-debit હવે actual monthly pulling કરે છે.

પણ NBFCs અને vehicle financiers હજુ loan disbursal પર તમારી પાસેથી PDCs નો એક stack collect કરે છે, એક cheque per EMI. કેમ, જો NACH debiting કરે છે?

**Security.** PDCs એક drawer માં backup તરીકે બેઠા રહે છે, અને તમારા પર એક quiet bit of pressure તરીકે. જો તમારો NACH mandate fail થઈ જાય કે cancel થઈ જાય, lender પાસે present કરવા માટે એક signed instrument છે. અને એક signed cheque Section 138 નું weight carry કરે છે — એને bounce કરો અને તમે એક criminal offence ના સામે છો, જે એક failed auto-debit થી ઘણી bigger stick છે.

RBI અને NPCI વર્ષોથી lenders ને PDCs થી હટાવીને e-NACH / NACH mandates પર push કરી રહ્યા છે — NPCI એ તો PDC/EMI cheques ને NACH Debit પર migrate કરવા પર એક specific circular પણ issue કર્યો. તો PDC નો role "actual payment method" થી shrink થઈને "security blanket" થઈ ગયો છે. (PDCs પર full rulebook માટે, જુઓ [post-dated cheques: rules and best practices](https://cheqify.app/gu/blog/post-dated-cheques-rules-and-best-practices).)

એક વધારે વસ્તુ જે courts એ settle કરી દીધી: voluntarily signed blank કે undated security cheque **illegal નથી**. કોઈ debt તરફ એક એવો cheque hand over કરો અને એ Section 139 presumption attract કરે છે કે એક legally enforceable debt exist કરે છે. Lender પછી particulars fill કરી શકે છે. પણ એક fair-play limit છે — જો તમે part-payments કરી છે અને lender *full original amount* માટે એક security cheque present કરે છે તમે પહેલેથી pay કરેલાને endorse કર્યા વગર, Section 138 attract ન થઈ શકે, કારણ કે cheque ને reflect કરવાનું છે જે actually due છે.

### [H2] જો તમારો EMI Cheque Bounce થઈ જાય તો શું થાય છે

Short version: ઘણું બધું, અને એમાં કંઈ પણ સારું નથી.

**NI Act નો Section 138.** Insufficient funds માટે dishonoured એક cheque, એક real debt તરફ issued, એક criminal offence છે. Drill: lender dishonour memo ના **30 days** ની અંદર એક written demand notice મોકલે છે, તમને pay કરવા માટે **15 days** મળે છે, અને જો તમે નથી કરતા, એ એ window ના close થયાના **30 days** ની અંદર એક complaint file કરે છે. Conviction પર penalty: **2 વર્ષ** સુધીની imprisonment, કે **cheque amount થી double** સુધીનો fine, કે બંને. Courts trial દરમિયાન cheque amount ના **20%** સુધી interim compensation પણ order કરી શકે છે, Section 143A ના under. (Full breakdown: [Section 138 explained](https://cheqify.app/gu/blog/section-138-ni-act-cheque-bounce-india).)

**Bank bounce charges.** દરેક dishonour એક fee trigger કરે છે. Major banks માં આ roughly **₹250–₹600 plus GST** per bounce ચાલે છે — ICICI around ₹500, SBI નું NACH mandate failure around ₹250 + 18% GST (₹295), HDFC ના instrument-return charges personal loans પર ₹450–₹550 band માં. Exact home-loan figures lender અને product થી vary કરે છે, so તમારા loan નું Schedule of Charges check કરો.

**Penal interest.** EMI miss કરો અને penal interest ઉપરથી accrue થાય છે, તમારા loan agreement પ્રમાણે.

**તમારો CIBIL score hit લે છે.** એક bounced EMI credit bureaus ને report થાય છે અને તમારા score ને નીચે drag કરે છે, જે આવતી વખતે જ્યારે તમે loan કે card માટે apply કરો ત્યારે bite કરે છે. કોઈ fixed "points lost" number નથી — એ vary કરે છે — પણ direction હંમેશા નીચે હોય છે.

Annoying? હા. Expensive? ઘણું. EMI date થી પહેલા funding account loaded રાખો અને આ આખો section તમારા પર ક્યારેય apply નથી થતો.

### [H2] 2026 નો Hook — RBI એ મોટાભાગના Floating-Rate Loans પર Pre-payment Charges Kill કરી દીધા

અહીં 2026 માટે genuinely નવો bit છે, અને એ એક big one છે.

RBI એ **"Reserve Bank of India (Pre-payment Charges on Loans) Directions, 2025"** (RBI/2025-26/64) issue કર્યો, **2 July 2025** ના. એ એ બધા loans પર apply થાય છે જે **1 January 2026 ના કે એના પછી sanctioned કે renewed** છે, commercial banks, co-operative banks, NBFCs અને All India Financial Institutions માં.

Headline: individuals દ્વારા non-business purposes માટે લીધેલા floating-rate loans પર **કોઈ pre-payment charges નહીં** — તમારો home loan, તમારો personal loan — ભલે તમે part prepay કરો કે full, ભલે money ગમે ત્યાંથી આવી હોય, **કોઈ minimum lock-in નહીં** સાથે. કોઈ પણ regulated lender દ્વારા. Full stop.

અને પણ છે. Directions ઘણા **individuals અને Micro & Small Enterprises (MSEs) ને business loans** સુધી પણ no-charge protection extend કરે છે, એ size thresholds ની અંદર જે lender type થી vary કરે છે. અને કોઈ પણ charges જે *હજુ* permitted છે (e.g. thresholds થી ઉપર કેટલાક fixed-rate business loans) sanction letter માં upfront disclose થવા જોઈએ — retrospective, surprise levies barred છે.

Context માટે, floating-rate individual home loans actually RBI ના 2012 અને 2014 circulars થી penalty-free રહ્યા છે. 2025 માં નવું છે દરેક lender type માં consolidation *અને* MSE borrowers સુધી extension. જો તમારો loan floating-rate અને personal છે, prepay કરવું હવે એક clean win છે — lender તમને એમની money જલ્દી પાછી આપવાના privilege માટે charge નથી કરી શકતો.

### [H2] Prepayment Actually તમારો Principal ક્યારે Reduce કરે છે?

એક timing detail જે લોકોને interest costly પડે છે: એક prepayment cheque તમારો principal **ત્યારે જ reduce કરે છે જ્યારે એ clear થાય છે**, જ્યારે તમે એને hand over કરો ત્યારે નહીં.

ત્યાં સુધી, interest un-reduced balance પર accrue થતું રહે છે. Historically એનો અર્થ એક T+1 કે T+2 wait હતો. Good news — India **4 October 2025** થી CTS ના under **continuous cheque clearing** પર move થઈ ગયું, so 10 AM–4 PM window માં present કરેલો cheque હવે **same day** clear અને credit થઈ શકે છે. (Mechanics: [cheque clearing time in India](https://cheqify.app/gu/blog/cheque-clearing-time-india) અને [truncation system explained](https://cheqify.app/gu/blog/cheque-truncation-system-explained).)

Faster clearing નો અર્થ તમારો principal જલ્દી ઘટે છે, જેનો અર્થ થોડા rupees ઓછું interest. Small, પણ આ તમારી money છે.

### [H2] જો તમે એક Business છો જે Business Loan Repay કરી રહ્યા છો

અહીં આ SMBs માટે real થઈ જાય છે. એક business જે cheque થી એક term loan કે working-capital facility repay કરી રહ્યું છે — ખાસ કરીને એક financier જે હજુ એક વર્ષના PDCs up front ઈચ્છે છે — 12 થી 24 cheques હાથથી લખવાના સામે છે, દરેક એક lender ના name, તમારા loan account number, figures અને words માં amount સાથે, બધા error-free. Tedious એને cover કરવાનું શરૂ પણ નથી કરતું.

એને હાથથી કરો અને એક transposed digit કે એક wrong amount-in-words એક cheque bounce કરી દે છે જેને તમે fully honour કરવાનો ઈરાદો રાખતા હતા. એ વગર કારણે એક self-inflicted Section 138 risk છે.

આ exactly એ boring, repetitive job છે જે software એ કરવાનું જોઈએ. જે આપણને point પર લાવી દે છે.

---

> **Cheque થી business loan repay કરી રહ્યા છો? એક વર્ષની EMI / PDC cheques એક batch માં print કરો Cheqify સાથે.** Excel થી amounts pull કરો, auto amount-in-words (English + Hindi), auto-MICR validation, 300+ Indian bank layouts, full issue-to-clearance tracking. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## ⚠️ Pre-publish fact-check required

Loan rules, bank charges, and RBI directions shift by circular. Before publishing, a human must re-verify the following items used or referenced in this draft:

1. **RBI (Pre-payment Charges on Loans) Directions, 2025** — confirm the final circular wording for which borrower/entity categories get zero pre-payment charges, and that the effective date (loans sanctioned/renewed on or after **1 January 2026**) is unchanged. HFCs are covered as a category of NBFC — verify they aren't listed as a separate named line in the headline scope. Primary source: rbi.org.in NotificationUser Id=12878.
2. **SBI home-loan part-prepayment minimum rupee amount** — not confirmed to citation standard. The draft does NOT state an SBI minimum figure; keep it that way unless a primary SBI source confirms one.
3. **"Section 138 amendments effective 1 April 2025"** (higher penalties / non-bailable warrants / e-service of notice) — NOT confirmed against any official gazette or PRS source; likely blog overstatement. The draft uses ONLY the established framework (2-year jail / up-to-double-fine, 30–15–30 timeline, S.143A 20% interim compensation). Do not add the 2025-amendment claims.
4. **Current (2026) home-loan-specific EMI cheque-bounce rupee charges** for HDFC and SBI — only personal-loan / NACH-failure figures are confirmed (ICICI ~₹500; SBI NACH mandate fail ~₹250 + GST = ₹295; HDFC personal-loan return ₹450/₹500/₹550). The draft quotes a safe "~₹250–₹600 + GST" range and points readers to each lender's Schedule of Charges. Re-confirm before publish.
5. **CTS volume stats** — "~5.3 crore cheques/month" is from a secondary source (not RBI-primary); the draft avoids hard-quoting it. "Cheques are a small, shrinking single-digit share of payments" is directional — do not add a precise "under 3%" figure without an RBI citation.
6. **Share of EMIs still collected by cheque/PDC** — no credible statistic exists. The draft makes only a qualitative claim. Do not insert a number.

Money content rots fast. The disclosure paragraph at the bottom of the body is mandatory.

---

## Internal-Link Strategy

**Forward links from this post:**
- Post #23 (`crossed-cheque-vs-account-payee`) — A/c Payee crossing on the prepayment cheque.
- Post #19 (`how-to-fill-cheque-correctly`) — filling the cheque fields error-free.
- Post #5 (`post-dated-cheques-rules-and-best-practices`) — PDCs for EMIs, security cheques.
- Post #11 (`section-138-ni-act-cheque-bounce-india`) — bounced EMI cheque consequences.
- Post #17 (`cheque-clearing-time-india`) — when the prepayment actually hits principal.
- Post #22 (`cheque-truncation-system-explained`) — continuous clearing from Oct 2025.

**Bonus internal-link work (after publish):**
- Edit post #5 (all 3 locales) to add a contextual "how a prepayment cheque reduces principal" link back to this post.
- Edit post #11 (all 3 locales) to add an EMI-cheque-bounce example linking here.
- Add this post's URL to the glossary entries for "Prepayment", "Amortization", and "Advance EMI" if they exist.

---

## Pre-Publish Quality Gate

- **Money-rules fact check (CRITICAL):** verify the RBI 2025 Pre-payment Directions scope/effective date, the EMI/prepayment worked figures (computed in-session; safe), and the bank bounce-charge ranges against each lender's current Schedule of Charges. The disclosure paragraph and the fact-check block above are mandatory.
- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The amortization-numbers section is detector-sensitive — keep the surrounding prose conversational and the rhythm varied.
- **Word count:** EN body must be >1200 words (target 1,700–2,200). Current draft: ~2,270 words — slightly over the soft ceiling, acceptable (bigger is better per the style memory).
- **Sanity toggles:** `isHowTo: ON` (6 steps), `hasFaq: ON` (7 items).

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into a Day 18 (or next available) block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — especially posts #5, #11, and #17 which this post leans on.
5. IndexNow auto-pings on publish.
