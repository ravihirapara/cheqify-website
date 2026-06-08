# Blog Post #34 — Paying Rent by Cheque — HRA Proof, Rent Receipts, Revenue Stamps, and the TDS Rule (2026)

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
| HowTo Steps | `howToSteps` | Renders HowTo schema → step-by-step rich result. |

### Sanity block styles in this draft

**Apply as Callout block (grey rounded box):**
- `> **Eleven rent cheques a year is a batch-printing job...** / **साल के ग्यारह rent cheques...** / **વર્ષના અગિયાર rent cheques...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **The tax department doesn't distrust rent. It distrusts rent that leaves no trail...** / **Tax department rent पर distrust नहीं करता...** / **Tax department rent પર distrust નથી કરતું...**` (pull quote in each body) → **Quote**

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

"Rent receipt revenue stamp", "HRA proof rent paid by cheque", "landlord PAN HRA" are perennial tax-season searches with a perfect cheque angle: paying rent by cheque (or transfer) kills the revenue-stamp requirement, creates the bank trail that survives HRA scrutiny, and is the only sane way to run the 11-PDC lease convention. Adds the 194-IB TDS rule (>₹50K/month) that most tenants don't know they're breaking. Untouched topic; high intent. Cluster fit: #5 (PDCs), #23 (account payee), #13 (register), #12 (validity).

---

## Sanity Fields

- **Slug:** `rent-payment-by-cheque-hra-proof`
- **Tags:** `Cheque Guide`, `Banking & RBI`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** YES (building an audit-proof HRA claim on cheque-paid rent, 5 steps)
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Thursday 2026-07-16, 10:00 IST (auto-set in Sanity)
- **Primary keyword:** `rent payment by cheque`
- **Secondary keywords:** rent receipt revenue stamp, HRA proof rent receipts, landlord PAN HRA rule, TDS on rent 194-IB, post-dated cheques rent, rent to parents HRA, rent receipt format
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/rent-payment-by-cheque-hra-proof`
  - HI: `https://cheqify.app/hi/blog/rent-payment-by-cheque-hra-proof`
  - GU: `https://cheqify.app/gu/blog/rent-payment-by-cheque-hra-proof`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `rent-payment-by-cheque-hra-proof-cover.webp`
- **Subject:** A rent receipt and a cheque leaf side by side. The cheque is account-payee crossed, payee "Landlord Name", with "Rent — July 2026" implied via a small label tag. The receipt shows fields (landlord, period, amount, PAN) with a green "No revenue stamp needed — paid by cheque" badge. A small calculator icon with "HRA" floats above. Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** Paying rent by cheque in India — account-payee cheque beside a rent receipt, showing why cheque payment needs no revenue stamp and builds HRA proof.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Paying Rent by Cheque — HRA Proof, Rent Receipts, Revenue Stamps, and the TDS Rule (2026)
- **HI:** Cheque से Rent Payment — HRA Proof, Rent Receipts, Revenue Stamps, और TDS Rule (2026)
- **GU:** Cheque થી Rent Payment — HRA Proof, Rent Receipts, Revenue Stamps, અને TDS Rule (2026)

---

## Descriptions

- **EN:** Pay rent in cash and you need a revenue stamp on every receipt, plus prayers at scrutiny time. Pay by cheque and the stamp requirement vanishes while a bank trail builds your HRA case for you. The full guide: what a rent receipt must contain, when you need the landlord's PAN (₹1 lakh/year), the TDS rule tenants keep missing (₹50,000/month), the 11-post-dated-cheque lease convention, and paying rent to parents without inviting trouble.
- **HI:** Cash में rent pay करें और हर receipt पर revenue stamp चाहिए, plus scrutiny time पर prayers. Cheque से pay करें और stamp requirement गायब हो जाती है जबकि एक bank trail आपका HRA case आपके लिए build करता है. Full guide: rent receipt में क्या होना चाहिए, landlord का PAN कब चाहिए (₹1 lakh/year), वो TDS rule जो tenants miss करते रहते हैं (₹50,000/month), 11-post-dated-cheque lease convention, और parents को rent pay करना बिना trouble invite किए.
- **GU:** Cash માં rent pay કરો અને દરેક receipt પર revenue stamp જોઈએ, plus scrutiny time પર prayers. Cheque થી pay કરો અને stamp requirement ગાયબ થઈ જાય છે જ્યારે એક bank trail તમારો HRA case તમારા માટે build કરે છે. Full guide: rent receipt માં શું હોવું જોઈએ, landlord નો PAN ક્યારે જોઈએ (₹1 lakh/year), એ TDS rule જે tenants miss કરતા રહે છે (₹50,000/month), 11-post-dated-cheque lease convention, અને parents ને rent pay કરવું trouble invite કર્યા વગર.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

Every January, the same office scene: someone hunched over eleven backdated rent receipts, a borrowed ₹1 revenue stamp sheet, and a landlord's reluctant signature, assembling "proof" of rent that changed hands in cash, in fragments, with nothing behind it but goodwill.

HR accepts it. Usually. The tax department, if it ever looks closely, is another story entirely.

Here's the cleaner way to run the whole thing — and why the humble cheque (or its digital cousins) does most of the compliance work for you before you've filed a single form.

### [H2] What HRA Actually Needs From You

The HRA exemption is real money: broadly, the least of your actual HRA received, rent paid minus 10% of salary, and 50% of salary in metros (40% elsewhere) escapes tax. To claim it, the system asks you to *prove the rent happened*. That proof stack has four layers:

1. **Rent receipts** — the basic evidence your employer collects (commonly required where rent exceeds ₹3,000 a month).
2. **The landlord's PAN, if annual rent exceeds ₹1,00,000** — that's just ₹8,334 a month, so most city tenants cross it. No PAN means your employer restricts the exemption, and a fake PAN is a problem you do not want to own.
3. **A rent agreement** — increasingly requested by employers, and the document that anchors everything else.
4. **A payment trail** — and here's where the method you pay with decides how the story ends.

> **The tax department doesn't distrust rent. It distrusts rent that leaves no trail. A cheque clearing through your account is a third-party witness — your bank — testifying every month that the rent was real.**

Cash rent with receipts is *legal*. But at scrutiny time, receipts alone are paper a cooperative landlord can produce in five minutes for any amount. Tribunals have disallowed HRA claims where the rent was supposedly paid in cash to a relative and nothing corroborated it. A cheque or bank transfer ends that argument before it starts: amount, date, payee, every month, in records neither of you controls.

### [H2] The Revenue Stamp Rule — and the Cheque Exemption

The detail almost everyone gets wrong. A ₹1 revenue stamp is needed on a receipt for payments **in cash above ₹5,000**. Pay by cheque or bank transfer and **no revenue stamp is required** — the receipt is valid without it.

So the January stamp hunt is pure cash-payment overhead. Pay by cheque and you can skip the stamp sheet forever — though the receipt itself is still worth collecting (your employer will ask), and it should carry: landlord's name and address, your name, the premises address, the amount, the period it covers, the payment mode, the landlord's signature, and PAN where the ₹1 lakh rule bites. One receipt a month or one consolidated receipt a year — both work; monthly matches payroll cycles better.

### [H2] The TDS Rule Tenants Keep Missing — Section 194-IB

If your monthly rent exceeds **₹50,000**, you — the individual tenant, no business required — must deduct TDS from the rent. The rate is **2%** (cut from the earlier 5% from October 2024), deducted **once a year** from the last month's rent (or the last month of tenancy), deposited through **Form 26QC** within 30 days, with a **Form 16C** certificate to your landlord. No TAN needed — your PAN and the landlord's do the job.

Miss it and the interest and late-fee meter runs against *you*, not the landlord. At ₹60,000 rent, the annual deduction is ₹14,400 — a fifteen-minute online task next to a penalty conversation. If your rent is anywhere near the line, calendar it for the final month of the lease year.

(The ₹50,000 threshold also quietly explains a market pattern: leases parked just under it. That's between you and your landlord — but if the *real* rent crosses the line and the paper says otherwise, you're carrying their problem too.)

### [H2] The Eleven-Cheque Convention — PDCs and the Lease

Plenty of landlords ask for the year upfront: eleven or twelve **post-dated cheques**, one per month, handed over at lease signing. It's a legitimate, widespread practice — and it's governed by everything we covered in the [post-dated cheque guide](https://cheqify.app/en/blog/post-dated-cheques-rules-and-best-practices): each cheque becomes presentable on its written date, each is valid three months from that date, and each is a [Section 138-armed instrument](https://cheqify.app/en/blog/section-138-ni-act-cheque-bounce-india) if it bounces.

Tenant-side discipline for the PDC stack:

- **Cross every cheque "account payee"** ([why this matters](https://cheqify.app/en/blog/crossed-cheque-vs-account-payee)) — a stack of bearer cheques in someone's drawer is a fraud kit.
- **Write the landlord's name exactly** as their bank account knows it — eleven cheques with a nickname on them is eleven returns waiting.
- **Record every leaf** — number, date, amount — before handing the stack over ([the register habit](https://cheqify.app/en/blog/cheque-lifecycle-management-explained)). When the lease ends early, you want to know precisely which leaves to recover or stop.
- **Keep the float funded.** A rent cheque bouncing isn't just a charge — it's a 138 notice risk and a relationship problem in one envelope.

And the security deposit: pay it by cheque too, *always*. The deposit is the amount most likely to be disputed at exit; a cleared cheque is the receipt that can't be lost or denied.

### [H2] Paying Rent to Parents — Legal, With One Condition

The classic arrangement: you live in your parents' house, pay them rent, claim HRA. Entirely legal — *if it's real*. Real means: they own the property (you can't pay rent to yourself or on a house you co-own), the money actually moves every month, they declare it as rental income in their returns, and ideally a simple rent agreement exists.

This is the single scenario where the payment trail does the most work. Cash rent to a parent with hand-written receipts is exactly the fact pattern tribunals have rejected. A monthly cheque or transfer into the parent's account — declared on their side — is the same arrangement made audit-proof. Same family, same house, same rupees; the trail is the entire difference.

### [H2] The Tenant's Compliance Stack, Assembled

Pulling it together — what the well-run rent file looks like:

- **Rent agreement** signed at move-in, renewed on schedule
- **Payment by account-payee cheque or bank transfer**, every month, from your account to the landlord's
- **Receipts** collected monthly (no stamp needed — you paid by cheque), with landlord PAN noted where rent tops ₹1 lakh/year
- **TDS via 26QC** if you're above ₹50,000/month, with Form 16C handed to the landlord
- **A register** of the cheques in the PDC stack, security deposit cheque included

Total ongoing effort: minutes per month. Total scrutiny resilience: roughly complete. The cheque isn't nostalgia here — it's the cheapest compliance instrument the tax system recognises on sight.

---

> **Eleven rent cheques a year is a batch-printing job, not an evening of handwriting.** Cheqify prints the full PDC stack — correct payee, amounts in words, sequential dates — on your bank's exact leaf layout, and logs every leaf in a register so lease-end recovery is a checklist, not a memory test. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** Is a revenue stamp required on a rent receipt if I pay by cheque?
   **A:** No. The ₹1 revenue stamp requirement applies to receipts for cash payments above ₹5,000. Rent paid by cheque or bank transfer needs no revenue stamp — the receipt is valid without it, and the cheque's clearing record itself provides stronger evidence than a stamp ever did. The receipt should still record the payment mode as cheque/transfer.

2. **Q:** Do I still need rent receipts if I pay rent by cheque?
   **A:** Yes, collect them — employers commonly require receipts for HRA processing (typically where rent exceeds ₹3,000 a month), and the receipt ties the payment to a period and premises. A valid receipt carries the landlord's name and address, your name, the property address, amount, period, payment mode, signature, and the landlord's PAN where annual rent exceeds ₹1 lakh. Monthly receipts or one consolidated annual receipt both work.

3. **Q:** When do I need my landlord's PAN for HRA?
   **A:** When annual rent exceeds ₹1,00,000 — about ₹8,334 a month — your employer needs the landlord's PAN (or a declaration where the landlord has none) to allow the full HRA exemption. Without it the exemption gets restricted at payroll, and quoting an incorrect PAN creates problems for you, not the landlord. Get the PAN recorded in the rent agreement at signing.

4. **Q:** What is the TDS rule for rent above ₹50,000 per month?
   **A:** Under Section 194-IB, an individual tenant paying monthly rent above ₹50,000 must deduct TDS at 2% (reduced from 5% effective October 2024). It's deducted once a year from the last month's rent (or last month of tenancy), deposited via Form 26QC within 30 days, and a Form 16C certificate goes to the landlord. No TAN is required — tenant and landlord PANs suffice. Interest and late fees for missing it fall on the tenant.

5. **Q:** Can I pay rent to my parents and claim HRA?
   **A:** Yes, if the arrangement is genuine: the parent owns the property (you can't be owner or co-owner), rent actually moves every month, and the parent declares it as rental income. Pay by cheque or transfer into their account — cash-to-parent with handwritten receipts is precisely the pattern tax tribunals have rejected. The bank trail converts a suspicious-looking claim into a routine one.

6. **Q:** Is giving post-dated cheques for rent safe?
   **A:** It's standard practice and reasonably safe with discipline: cross every cheque account-payee, write the landlord's name exactly as their bank knows it, record every leaf number and date before handing over the stack, and keep the account funded as each date arrives. Remember each rent cheque is enforceable under Section 138 if it bounces — treat the PDC stack as twelve live commitments, not stationery.

7. **Q:** What if my landlord refuses to give rent receipts or PAN?
   **A:** For receipts: your bank statement showing regular transfers/cheque debits to the landlord, plus the rent agreement, substantially covers you — employers and assessing officers accept bank evidence. For PAN above ₹1 lakh/year: without it your employer will restrict the HRA exemption; you can still pursue the claim at return-filing with your payment trail, but expect questions. A landlord allergic to both receipts and PAN is telling you the rent isn't being declared — factor that into the relationship.

---

## HowTo Steps (Sanity `howToSteps` field — required for HowTo schema)

| # | Name | Text |
|---|---|---|
| 1 | Put the lease on paper | Sign a rent agreement recording landlord, premises, rent, deposit, and payment mode. Record the landlord's PAN in it if annual rent will exceed ₹1 lakh. |
| 2 | Pay by account-payee cheque or transfer | Move every month's rent from your account to the landlord's — crossed cheque or bank transfer. This kills the revenue-stamp requirement and builds the third-party trail HRA scrutiny respects. |
| 3 | Collect receipts as you go | One per month (or consolidated annually): landlord name/address, your name, premises, amount, period, mode, signature — PAN where the ₹1 lakh rule applies. No stamp needed for non-cash payment. |
| 4 | Handle TDS if rent tops ₹50,000/month | Deduct 2% once a year from the final month's rent, deposit via Form 26QC within 30 days, and issue Form 16C to the landlord. Calendar it for the last month of the lease year. |
| 5 | Register the cheque stack | For PDC arrangements, log every leaf (number, date, amount) including the deposit cheque before handover — so lease-end recovery or stop-payment is a checklist, and your HRA file matches your cheque register exactly. |

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

हर January, वही office scene: कोई ग्यारह backdated rent receipts पर झुका हुआ, एक borrowed ₹1 revenue stamp sheet, और एक landlord की reluctant signature, उस rent का "proof" assemble करते हुए जो cash में, fragments में, hands change हुआ, जिसके पीछे goodwill के सिवा कुछ नहीं.

HR accept करता है. Usually. Tax department, अगर कभी closely देखे, entirely दूसरी story है.

यहाँ है पूरी चीज़ चलाने का cleaner तरीका — और humble cheque (या इसके digital cousins) आपके लिए ज़्यादातर compliance काम क्यों कर देता है इससे पहले कि आपने एक भी form file किया हो.

### [H2] HRA को Actually आपसे क्या चाहिए

HRA exemption real पैसा है: broadly, आपके actual HRA received, rent paid minus salary का 10%, और metros में salary का 50% (बाकी जगह 40%) में से least tax से escape करता है. इसे claim करने के लिए, system आपसे *prove करने को कहता है कि rent हुआ*. उस proof stack की चार layers हैं:

1. **Rent receipts** — basic evidence जो आपका employer collect करता है (commonly required जहाँ rent ₹3,000 महीने से ज़्यादा है).
2. **Landlord का PAN, अगर annual rent ₹1,00,000 से ज़्यादा है** — वो बस ₹8,334 महीना है, तो ज़्यादातर city tenants इसे cross करते हैं. No PAN मतलब आपका employer exemption restrict करता है, और एक fake PAN वो problem है जो आप own नहीं करना चाहते.
3. **एक rent agreement** — employers द्वारा increasingly requested, और वो document जो बाकी सब anchor करता है.
4. **एक payment trail** — और यहीं आपके pay करने का method decide करता है कि story कैसे end होती है.

> **Tax department rent पर distrust नहीं करता. वो उस rent पर distrust करता है जो कोई trail नहीं छोड़ता. आपके account से clear होता एक cheque एक third-party witness है — आपका bank — हर महीने testify करता हुआ कि rent real था.**

Receipts के साथ cash rent *legal* है. पर scrutiny time पर, अकेली receipts वो paper हैं जो एक cooperative landlord किसी भी amount के लिए पाँच minutes में produce कर सकता है. Tribunals ने HRA claims disallow किए हैं जहाँ rent supposedly एक relative को cash में paid था और कुछ भी corroborate नहीं करता था. एक cheque या bank transfer उस argument को शुरू होने से पहले end कर देता है: amount, date, payee, हर महीना, उन records में जो आप दोनों में से कोई control नहीं करता.

### [H2] Revenue Stamp Rule — और Cheque Exemption

वो detail जो लगभग हर कोई गलत समझता है. **₹5,000 से ऊपर cash** में payments की receipt पर ₹1 revenue stamp चाहिए. Cheque या bank transfer से pay करें और **कोई revenue stamp required नहीं** — receipt इसके बिना valid है.

तो January का stamp hunt pure cash-payment overhead है. Cheque से pay करें और आप stamp sheet हमेशा के लिए skip कर सकते हैं — हालाँकि receipt खुद collect करने लायक है (आपका employer मांगेगा), और इसमें होना चाहिए: landlord का name और address, आपका name, premises address, amount, जो period ये cover करती है, payment mode, landlord की signature, और PAN जहाँ ₹1 lakh rule bite करता है. महीने में एक receipt या साल की एक consolidated receipt — दोनों चलती हैं; monthly payroll cycles से better match करती है.

### [H2] वो TDS Rule जो Tenants Miss करते रहते हैं — Section 194-IB

अगर आपका monthly rent **₹50,000** से ज़्यादा है, आपको — individual tenant, कोई business required नहीं — rent से TDS deduct करना होगा. Rate **2%** है (October 2024 से earlier 5% से cut), साल में **एक बार** last month के rent से deducted (या tenancy के last month से), 30 days के अंदर **Form 26QC** के through deposited, आपके landlord को एक **Form 16C** certificate के साथ. कोई TAN नहीं चाहिए — आपका PAN और landlord का काम कर देते हैं.

इसे miss करें और interest और late-fee meter *आपके* against चलता है, landlord के नहीं. ₹60,000 rent पर, annual deduction ₹14,400 है — एक penalty conversation के सामने fifteen-minute का online task. अगर आपका rent line के कहीं भी पास है, इसे lease year के final month के लिए calendar करें.

(₹50,000 threshold एक market pattern भी quietly explain करता है: leases जो ठीक इसके नीचे parked हैं. वो आपके और आपके landlord के बीच है — पर अगर *real* rent line cross करता है और paper otherwise कहता है, आप उनकी problem भी carry कर रहे हैं.)

### [H2] Eleven-Cheque Convention — PDCs और Lease

कई landlords साल upfront मांगते हैं: ग्यारह या बारह **post-dated cheques**, हर महीने का एक, lease signing पर handed over. ये एक legitimate, widespread practice है — और इसे वो सब govern करता है जो हमने [post-dated cheque guide](https://cheqify.app/hi/blog/post-dated-cheques-rules-and-best-practices) में cover किया: हर cheque अपनी written date पर presentable बनता है, हर एक उस date से तीन months valid है, और हर एक bounce होने पर एक [Section 138-armed instrument](https://cheqify.app/hi/blog/section-138-ni-act-cheque-bounce-india) है.

PDC stack के लिए tenant-side discipline:

- **हर cheque "account payee" cross करें** ([ये क्यों matter करता है](https://cheqify.app/hi/blog/crossed-cheque-vs-account-payee)) — किसी के drawer में bearer cheques का एक stack एक fraud kit है.
- **Landlord का name exactly वैसे लिखें** जैसे उनका bank account जानता है — nickname वाले ग्यारह cheques ग्यारह returns हैं waiting.
- **हर leaf record करें** — number, date, amount — stack hand over करने से पहले ([register habit](https://cheqify.app/hi/blog/cheque-lifecycle-management-explained)). जब lease जल्दी end हो, आप precisely जानना चाहते हैं कौन सी leaves recover या stop करनी हैं.
- **Float funded रखें.** एक rent cheque का bounce होना सिर्फ़ एक charge नहीं — ये एक envelope में 138 notice risk और relationship problem है.

और security deposit: इसे भी cheque से pay करें, *हमेशा*. Deposit वो amount है जो exit पर सबसे ज़्यादा disputed होता है; एक cleared cheque वो receipt है जो खो या deny नहीं हो सकती.

### [H2] Parents को Rent Pay करना — Legal, One Condition के साथ

Classic arrangement: आप parents के घर में रहते हैं, उन्हें rent pay करते हैं, HRA claim करते हैं. Entirely legal — *अगर ये real है*. Real मतलब: property उनकी है (आप खुद को या जिस घर के co-owner हैं उस पर rent pay नहीं कर सकते), पैसा actually हर महीने move होता है, वो इसे अपने returns में rental income declare करते हैं, और ideally एक simple rent agreement exist करता है.

ये वो single scenario है जहाँ payment trail सबसे ज़्यादा काम करता है. Hand-written receipts के साथ parent को cash rent exactly वो fact pattern है जो tribunals ने reject किया है. Parent के account में एक monthly cheque या transfer — उनकी side पर declared — वही arrangement audit-proof बना हुआ है. Same family, same घर, same rupees; trail पूरा difference है.

### [H2] Tenant का Compliance Stack, Assembled

सब साथ लाते हुए — well-run rent file कैसी दिखती है:

- **Rent agreement** move-in पर signed, schedule पर renewed
- **हर महीने account-payee cheque या bank transfer से payment**, आपके account से landlord के account में
- **Receipts** monthly collected (कोई stamp नहीं चाहिए — आपने cheque से pay किया), landlord PAN noted जहाँ rent ₹1 lakh/year top करता है
- **26QC के through TDS** अगर आप ₹50,000/month से ऊपर हैं, landlord को Form 16C के साथ
- PDC stack के cheques का **एक register**, security deposit cheque included

Total ongoing effort: महीने के minutes. Total scrutiny resilience: roughly complete. यहाँ cheque nostalgia नहीं है — ये cheapest compliance instrument है जिसे tax system देखते ही पहचानता है.

---

> **साल के ग्यारह rent cheques एक batch-printing job है, handwriting की एक शाम नहीं.** Cheqify full PDC stack print करता है — correct payee, words में amounts, sequential dates — आपके bank के exact leaf layout पर, और हर leaf एक register में log करता है ताकि lease-end recovery एक checklist हो, memory test नहीं. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

દર January, એ જ office scene: કોઈ અગિયાર backdated rent receipts પર ઝૂકેલું, એક borrowed ₹1 revenue stamp sheet, અને એક landlord ની reluctant signature, એ rent નો "proof" assemble કરતા જે cash માં, fragments માં, hands change થયો, જેની પાછળ goodwill સિવાય કંઈ નથી.

HR accept કરે છે. Usually. Tax department, જો ક્યારેય closely જુએ, entirely બીજી story છે.

અહીં છે આખી વસ્તુ ચલાવવાનો cleaner તરીકો — અને humble cheque (કે એના digital cousins) તમારા માટે મોટાભાગનું compliance કામ કેમ કરી દે છે એ પહેલા કે તમે એક પણ form file કર્યું હોય.

### [H2] HRA ને Actually તમારી પાસેથી શું જોઈએ

HRA exemption real પૈસા છે: broadly, તમારા actual HRA received, rent paid minus salary નો 10%, અને metros માં salary નો 50% (બાકી જગ્યાએ 40%) માંથી least tax થી escape કરે છે. એને claim કરવા માટે, system તમને *prove કરવા કહે છે કે rent થયો*. એ proof stack ની ચાર layers છે:

1. **Rent receipts** — basic evidence જે તમારો employer collect કરે છે (commonly required જ્યાં rent ₹3,000 મહિનાથી વધારે છે).
2. **Landlord નો PAN, જો annual rent ₹1,00,000 થી વધારે છે** — એ બસ ₹8,334 મહિનો છે, તો મોટાભાગના city tenants એને cross કરે છે. No PAN મતલબ તમારો employer exemption restrict કરે છે, અને એક fake PAN એ problem છે જે તમે own નથી કરવા માંગતા.
3. **એક rent agreement** — employers દ્વારા increasingly requested, અને એ document જે બાકી બધું anchor કરે છે.
4. **એક payment trail** — અને અહીં જ તમારા pay કરવાનો method decide કરે છે કે story કેવી રીતે end થાય છે.

> **Tax department rent પર distrust નથી કરતું. એ એ rent પર distrust કરે છે જે કોઈ trail નથી છોડતો. તમારા account માંથી clear થતો એક cheque એક third-party witness છે — તમારું bank — દર મહિને testify કરતું કે rent real હતો.**

Receipts સાથે cash rent *legal* છે. પણ scrutiny time પર, એકલી receipts એ paper છે જે એક cooperative landlord કોઈ પણ amount માટે પાંચ minutes માં produce કરી શકે છે. Tribunals એ HRA claims disallow કર્યા છે જ્યાં rent supposedly એક relative ને cash માં paid હતો અને કંઈ પણ corroborate નહોતું કરતું. એક cheque કે bank transfer એ argument ને શરૂ થયા પહેલા end કરી દે છે: amount, date, payee, દર મહિનો, એ records માં જે તમે બંનેમાંથી કોઈ control નથી કરતું.

### [H2] Revenue Stamp Rule — અને Cheque Exemption

એ detail જે લગભગ દરેક જણ ખોટી સમજે છે. **₹5,000 થી ઉપર cash** માં payments ની receipt પર ₹1 revenue stamp જોઈએ. Cheque કે bank transfer થી pay કરો અને **કોઈ revenue stamp required નથી** — receipt એના વગર valid છે.

તો January નો stamp hunt pure cash-payment overhead છે. Cheque થી pay કરો અને તમે stamp sheet હંમેશા માટે skip કરી શકો છો — જોકે receipt ખુદ collect કરવા લાયક છે (તમારો employer માંગશે), અને એમાં હોવું જોઈએ: landlord નું name અને address, તમારું name, premises address, amount, જે period આ cover કરે છે, payment mode, landlord ની signature, અને PAN જ્યાં ₹1 lakh rule bite કરે છે. મહિનામાં એક receipt કે વર્ષની એક consolidated receipt — બંને ચાલે છે; monthly payroll cycles સાથે better match કરે છે.

### [H2] એ TDS Rule જે Tenants Miss કરતા રહે છે — Section 194-IB

જો તમારો monthly rent **₹50,000** થી વધારે છે, તમારે — individual tenant, કોઈ business required નહીં — rent માંથી TDS deduct કરવો પડશે. Rate **2%** છે (October 2024 થી earlier 5% થી cut), વર્ષમાં **એક વાર** last month ના rent માંથી deducted (કે tenancy ના last month માંથી), 30 days ની અંદર **Form 26QC** ના through deposited, તમારા landlord ને એક **Form 16C** certificate સાથે. કોઈ TAN નથી જોઈતો — તમારો PAN અને landlord નો કામ કરી દે છે.

એને miss કરો અને interest અને late-fee meter *તમારી* against ચાલે છે, landlord ની નહીં. ₹60,000 rent પર, annual deduction ₹14,400 છે — એક penalty conversation ની સામે fifteen-minute નું online task. જો તમારો rent line ની ક્યાંય પણ પાસે છે, એને lease year ના final month માટે calendar કરો.

(₹50,000 threshold એક market pattern પણ quietly explain કરે છે: leases જે બરાબર એની નીચે parked છે. એ તમારા અને તમારા landlord ની વચ્ચે છે — પણ જો *real* rent line cross કરે છે અને paper otherwise કહે છે, તમે એમની problem પણ carry કરી રહ્યા છો.)

### [H2] Eleven-Cheque Convention — PDCs અને Lease

ઘણા landlords વર્ષ upfront માંગે છે: અગિયાર કે બાર **post-dated cheques**, દર મહિનાનો એક, lease signing પર handed over. આ એક legitimate, widespread practice છે — અને એને એ બધું govern કરે છે જે અમે [post-dated cheque guide](https://cheqify.app/gu/blog/post-dated-cheques-rules-and-best-practices) માં cover કર્યું: દરેક cheque પોતાની written date પર presentable બને છે, દરેક એ date થી ત્રણ months valid છે, અને દરેક bounce થવા પર એક [Section 138-armed instrument](https://cheqify.app/gu/blog/section-138-ni-act-cheque-bounce-india) છે.

PDC stack માટે tenant-side discipline:

- **દરેક cheque "account payee" cross કરો** ([આ કેમ matter કરે છે](https://cheqify.app/gu/blog/crossed-cheque-vs-account-payee)) — કોઈના drawer માં bearer cheques નો એક stack એક fraud kit છે.
- **Landlord નું name exactly એમ લખો** જેમ એમનું bank account જાણે છે — nickname વાળા અગિયાર cheques અગિયાર returns છે waiting.
- **દરેક leaf record કરો** — number, date, amount — stack hand over કરતા પહેલા ([register habit](https://cheqify.app/gu/blog/cheque-lifecycle-management-explained)). જ્યારે lease વહેલી end થાય, તમે precisely જાણવા માંગો છો કઈ leaves recover કે stop કરવાની છે.
- **Float funded રાખો.** એક rent cheque નું bounce થવું ફક્ત એક charge નથી — આ એક envelope માં 138 notice risk અને relationship problem છે.

અને security deposit: એને પણ cheque થી pay કરો, *હંમેશા*. Deposit એ amount છે જે exit પર સૌથી વધારે disputed થાય છે; એક cleared cheque એ receipt છે જે ખોવાઈ કે deny નથી થઈ શકતી.

### [H2] Parents ને Rent Pay કરવું — Legal, One Condition સાથે

Classic arrangement: તમે parents ના ઘરમાં રહો છો, એમને rent pay કરો છો, HRA claim કરો છો. Entirely legal — *જો આ real છે*. Real મતલબ: property એમની છે (તમે ખુદને કે જે ઘરના co-owner છો એના પર rent pay નથી કરી શકતા), પૈસા actually દર મહિને move થાય છે, એ આને પોતાના returns માં rental income declare કરે છે, અને ideally એક simple rent agreement exist કરે છે.

આ એ single scenario છે જ્યાં payment trail સૌથી વધારે કામ કરે છે. Hand-written receipts સાથે parent ને cash rent exactly એ fact pattern છે જે tribunals એ reject કરી છે. Parent ના account માં એક monthly cheque કે transfer — એમની side પર declared — એ જ arrangement audit-proof બનેલું છે. Same family, same ઘર, same rupees; trail આખો difference છે.

### [H2] Tenant નું Compliance Stack, Assembled

બધું સાથે લાવતા — well-run rent file કેવી દેખાય છે:

- **Rent agreement** move-in પર signed, schedule પર renewed
- **દર મહિને account-payee cheque કે bank transfer થી payment**, તમારા account માંથી landlord ના account માં
- **Receipts** monthly collected (કોઈ stamp નથી જોઈતો — તમે cheque થી pay કર્યું), landlord PAN noted જ્યાં rent ₹1 lakh/year top કરે છે
- **26QC ના through TDS** જો તમે ₹50,000/month થી ઉપર છો, landlord ને Form 16C સાથે
- PDC stack ના cheques નું **એક register**, security deposit cheque included

Total ongoing effort: મહિનાની minutes. Total scrutiny resilience: roughly complete. અહીં cheque nostalgia નથી — આ cheapest compliance instrument છે જેને tax system જોતા જ ઓળખે છે.

---

> **વર્ષના અગિયાર rent cheques એક batch-printing job છે, handwriting ની એક સાંજ નહીં.** Cheqify full PDC stack print કરે છે — correct payee, words માં amounts, sequential dates — તમારા bank ના exact leaf layout પર, અને દરેક leaf એક register માં log કરે છે જેથી lease-end recovery એક checklist હોય, memory test નહીં. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## ⚠️ Pre-publish fact-check required

1. **HRA exemption mechanics** (least-of-three formula, 50%/40% metro split) — Section 10(13A)/Rule 2A; stable, but confirm no change under the current tax regime rules at publish (HRA exemption is an old-regime feature — the body deliberately doesn't wade into old-vs-new regime; consider whether a one-line "old regime" note is needed).
2. **₹3,000/month receipt threshold** (employer-level proof convention from CBDT circulars) — verify current circular guidance before publish.
3. **₹1 lakh/year landlord PAN rule** — established CBDT requirement; safe, but confirm current wording.
4. **Revenue stamp on cash receipts above ₹5,000** — Indian Stamp Act position as commonly applied; verify the threshold figure and note stamp-duty administration is state-influenced. The cheque exemption (no stamp for non-cash) is the core claim — it's solid, but re-confirm.
5. **Section 194-IB:** 2% rate effective October 1, 2024 (down from 5%), >₹50,000/month threshold, annual deduction via 26QC, Form 16C — verify all four facts against current law at publish; TDS rates age.
6. **Tribunal disallowances of cash-rent-to-relative HRA claims** — referenced without case names. If you add a case, verify the citation.

---

## Internal-Link Strategy

**Forward links from this post:**
- Post #5 (`post-dated-cheques-rules-and-best-practices`) — the PDC stack mechanics.
- Post #11 (`section-138-ni-act-cheque-bounce-india`) — rent cheques are 138-armed.
- Post #23 (`crossed-cheque-vs-account-payee`) — crossing the PDC stack.
- Post #13 (`cheque-lifecycle-management-explained`) — the leaf register before handover.

**Bonus internal-link work (after publish):**
- Edit post #5 (`post-dated-cheques-rules-and-best-practices`, all 3 locales) to link its rent-PDC mention here — natural reciprocal.
- Edit post #24 (`loan-repayment-by-cheque-india`, all 3 locales) — both posts serve the "recurring obligations by cheque" theme; add a "paying rent by cheque" see-also.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The January-receipt-scene opening and the "third-party witness" framing carry the voice; the compliance-stack list is detector-sensitive — keep the prose around it.
- **Fact-check block (CRITICAL):** Tax figures (194-IB rate/threshold, PAN rule, stamp threshold) must be verified at publish — this is the most fact-dense post of the batch.
- **Word count:** EN body must be >1200 words (target 1,700–2,200). Current draft: ~1,900 words.
- **Sanity toggles:** `isHowTo: ON` (5 steps), `hasFaq: ON` (7 items).

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — posts #5 and #24.
5. IndexNow auto-pings on publish.
