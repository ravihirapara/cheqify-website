# Blog Post #38 — Paying Income Tax by Cheque in India — The Challan 280 Walkthrough (2026)

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
- `> **The one cheque of the quarter that cannot afford a mistake...** / **Quarter का वो एक cheque जो mistake afford नहीं कर सकता...** / **Quarter નો એ એક cheque જે mistake afford નથી કરી શકતો...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **A tax cheque handed over on the 15th and cleared on the 18th...** / **15th को handed over और 18th को cleared एक tax cheque...** / **15th ના handed over અને 18th ના cleared એક tax cheque...**` (pull quote in each body) → **Quote**

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

Advance tax is the one deadline that recurs four times a year for every proprietor and SMB above the ₹10,000 liability line, and the cheque-specific trap inside it — that the *realisation* date of the cheque, not the handover date, is what the challan records as the payment date — is genuinely unknown to most cheque-paying taxpayers until interest under 234B/234C teaches it to them. The over-the-counter cheque/DD route through e-Pay Tax's "Pay at Bank Counter" flow still exists in 2026 but is hedged with bank-by-bank and category-by-category exceptions, which makes an honest walkthrough valuable and rare. Direct product fit — a tax cheque is the highest-stakes single leaf an SMB writes each quarter, and printing it error-free with a register entry is exactly Cheqify's job. Cluster fit: #21 (GST by cheque — the indirect-tax sibling), #23 (loan/EMI cheques — the same clearing-buffer discipline).

---

## Sanity Fields

- **Slug:** `income-tax-payment-by-cheque-india`
- **Tags:** `Banking & RBI`, `Cheque Guide`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** YES (paying income tax by cheque at the bank counter, 5 steps)
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Ravi-managed — no fixed date
- **Primary keyword:** `income tax payment by cheque`
- **Secondary keywords:** challan 280 cheque payment, advance tax by cheque, pay income tax at bank counter, ITNS 280 walkthrough, advance tax due dates 2026, self assessment tax by cheque, CIN challan identification number
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/income-tax-payment-by-cheque-india`
  - HI: `https://cheqify.app/hi/blog/income-tax-payment-by-cheque-india`
  - GU: `https://cheqify.app/gu/blog/income-tax-payment-by-cheque-india`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `income-tax-payment-by-cheque-india-cover.webp`
- **Subject:** A tax-payment desk scene abstracted: a printed Challan ITNS 280 with a cheque clipped to it, a bank's round stamp half-visible on the counterfoil, a wall calendar with "15 MAR" circled in red, and a small clock face suggesting clearing time in transit. Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** Paying income tax by cheque in India — a printed Challan 280 with a cheque clipped to it and the advance-tax deadline circled on a calendar.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Paying Income Tax by Cheque in India — The Challan 280 Walkthrough (2026)
- **HI:** India में Cheque से Income Tax Payment — Challan 280 Walkthrough (2026)
- **GU:** India માં Cheque થી Income Tax Payment — Challan 280 Walkthrough (2026)

---

## Descriptions

- **EN:** A tax cheque handed over on the 15th and cleared on the 18th was paid on the 18th — and that three-day gap is where advance-tax interest lives. Here's the honest 2026 guide to paying income tax by cheque: what Challan ITNS 280 actually is, how the e-Pay Tax "Pay at Bank Counter" route works, the four advance-tax dates, the realisation-date rule that makes early deposit non-negotiable, and the counterfoil habits that survive scrutiny.
- **HI:** 15th को handed over और 18th को cleared एक tax cheque 18th को paid हुआ — और वो three-day gap वहीं है जहाँ advance-tax interest रहता है. यहाँ है cheque से income tax pay करने की honest 2026 guide: Challan ITNS 280 actually क्या है, e-Pay Tax का "Pay at Bank Counter" route कैसे काम करता है, चार advance-tax dates, वो realisation-date rule जो early deposit को non-negotiable बनाता है, और counterfoil habits जो scrutiny survive करती हैं.
- **GU:** 15th ના handed over અને 18th ના cleared એક tax cheque 18th ના paid થયો — અને એ three-day gap ત્યાં જ છે જ્યાં advance-tax interest રહે છે. અહીં છે cheque થી income tax pay કરવાની honest 2026 guide: Challan ITNS 280 actually શું છે, e-Pay Tax નો "Pay at Bank Counter" route કેવી રીતે કામ કરે છે, ચાર advance-tax dates, એ realisation-date rule જે early deposit ને non-negotiable બનાવે છે, અને counterfoil habits જે scrutiny survive કરે છે.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

Every March, somewhere in India, a business owner walks into a bank branch on the 15th with a cheque for the final advance-tax instalment, hands it over with an hour to spare, and drives home certain the deadline is met.

The cheque clears on the 18th. And in the department's books, the 18th is when the tax was paid.

That three-day gap — invisible on the day, expensive at assessment — is the reason this guide exists. What follows is the corner of income-tax payment where cheques still live in 2026: Challan ITNS 280, the counter at the authorised bank, the four advance-tax dates, and the one rule that decides whether your carefully written cheque landed on time or three days late.

### [H2] Challan 280 — One Form, Three Taxes

**Challan ITNS 280** is the income-tax deposit form: the document that tells the government whose money is arriving, for which year, and why. Whether you pay online or over a counter, the payment routes through its fields, and three kinds of tax travel on it:

- **Advance tax** — instalments paid during the financial year against that same year's income.
- **Self-assessment tax** — the balance you settle just before filing the return, after TDS and advance tax are counted.
- **Tax on regular assessment** — a demand the department raises after processing or assessing your return.

Each has its own minor head on the challan (advance tax, self-assessment, and regular assessment are separate codes), and a major head above them says *who* is paying — one code for companies, another for everyone else. None of this is trivia. Tick the wrong head or the wrong assessment year and the money reaches the government but sits in the wrong bucket: recoverable, yes, but only through a challan-correction request that costs weeks of follow-up. The heads are stable from year to year, but confirm them on the portal screen at payment time rather than from memory — including this article's.

### [H2] How Tax Is Actually Paid in 2026 — and Where the Cheque Fits

Truth first: most income-tax payment today happens online. The e-filing portal's **e-Pay Tax** service takes net banking, UPI, debit cards, RTGS/NEFT, and payment-gateway routes, and if you have working net banking on a listed bank, that is the fastest path — this article won't pretend otherwise.

But the counter hasn't closed. Inside e-Pay Tax sits a **"Pay at Bank Counter"** option: you generate the challan on the portal — it issues a **CRN**, a Challan Reference Number — print it, and carry it with a **cheque or demand draft** to an authorised branch of the bank you selected. The generated challan stays valid for a limited window (around fifteen days — check the expiry printed on it), after which the CRN lapses and you start again.

Two caveats keep this route honest. First, not every bank offers the counter option, and the portal's list of authorised banks shifts — verify your bank appears *and* accepts cheques over the counter before you plan a branch trip. Second, some taxpayers can't use it at all: companies and businesses subject to tax audit have been required to pay electronically since 2008, so the counter is effectively the territory of individuals, proprietors, and smaller firms outside the audit net. If that's you, the cheque's role here will feel familiar — it's the same shrinking-but-real role it plays in [GST payment over the counter](https://cheqify.app/en/blog/gst-payment-by-cheque-india), and roughly the same population keeps both alive: proprietors who run the business on cheques anyway, taxpayers whose net-banking transaction limits won't cover a large instalment, and anyone paying from an account that isn't wired into the portal's payment rails.

### [H2] The Realisation-Date Rule — Why Tax Cheques Go In Early

Here is the cheque-specific heart of the matter. When you pay over the counter by cheque, the bank does not credit the government the moment you hand over the leaf. The challan is *realised* when the cheque clears — and the payment date the system records rides on that realisation, not on your visit to the branch.

> **A tax cheque handed over on the 15th and cleared on the 18th was — in the only calendar that matters — paid on the 18th.**

For self-assessment tax with a comfortable gap before the filing date, a few days of clearing float is an annoyance. For an advance-tax instalment due *on* the 15th, it's the whole game: a cheque that realises after the due date makes the instalment late, and lateness here isn't a warning letter — it's interest, computed mechanically, no discretion involved.

The operating rule, then, is a buffer. Deposit the cheque at least three to four working days before the due date — longer if a weekend or holiday sits in between, shorter only if you're paying by a cheque drawn on the same bank that's receiving it, which typically realises faster. It's the same clearing-buffer discipline that keeps [an EMI cheque from slipping past its presentation date](https://cheqify.app/en/blog/loan-repayment-by-cheque-india): the instrument goes in early, and the deadline you plan against is the *clearing* date, not the handover date. (The legal history of tender-date versus realisation-date has its nuances — courts have sometimes related an honoured cheque back to its tender — but the safe operating assumption, and the one your challan stamp will reflect, is that realisation governs. The fact-check block below pins this down before publish.)

### [H2] Advance Tax — The Four Dates the Cheque Must Beat

If your total tax liability for the year, after TDS, crosses ₹10,000, advance tax applies — salaried or not, business or profession. The instalments are cumulative percentages of the year's estimated tax:

- **15 June** — 15% paid
- **15 September** — 45% paid
- **15 December** — 75% paid
- **15 March** — 100% paid

Presumptive-scheme taxpayers (Sections 44AD and 44ADA) get a concession: a single instalment, the whole amount, by 15 March. Miss or short-pay an instalment and interest under Sections 234B and 234C starts accruing — modest per month, relentless in aggregate, and calculated by software that has never once been talked out of it.

For a cheque payer, each of those four dates is really *a date minus clearing time*. The 15th of June is, for planning purposes, the 10th or 11th. Write that arithmetic into your calendar once and the realisation-date rule stops being a trap and becomes a habit.

### [H2] The Counter Walkthrough — Five Steps, One Stamped Counterfoil

The full over-the-counter run, from estimate to proof:

1. **Compute and classify.** Estimate the instalment (or the self-assessment balance), and note the assessment year and the correct heads — advance tax versus self-assessment versus regular assessment. Five minutes of care here saves a challan-correction saga later.
2. **Generate the challan on e-Pay Tax.** Log in to the e-filing portal, choose "Pay at Bank Counter" as the mode, select cheque, pick your authorised bank, and print the challan form the portal issues — CRN and all. Note the validity window printed on it.
3. **Write — or print — the cheque exactly.** Payee precisely as the challan or the receiving bank directs (banks generally want the cheque drawn in their own favour for credit to the government account — follow the printed instruction, not folklore), account-payee crossed, amount in words matching the figure to the rupee, dated the day of submission. A tax cheque returned for a correctable error is a deadline lost to penmanship.
4. **Submit early, at the right branch.** The authorised branch of the bank you selected, with the clearing buffer already built in — three to four working days before the due date at minimum.
5. **Collect the acknowledgment, then the counterfoil.** The counter gives you a stamped acknowledgment on the spot; the challan is realised when the cheque clears, and that's when the **CIN** exists. Verify it on the portal and in your Form 26AS/AIS within a week.

### [H2] The Counterfoil and the CIN — Your Only Proof

The **CIN** — Challan Identification Number — is three facts fused together: the BSR code of the receiving branch, the date of deposit, and the challan serial number. It is the government's receipt, the number your return quotes against the tax paid, and the single identifier that lets a payment be traced years later.

So the paper discipline is short and absolute. Keep the stamped counterfoil until the assessment for that year is closed — not until filing, until *closure*. Verify the CIN appears in your Form 26AS or AIS within a few days of realisation; a payment that cleared your bank but hasn't surfaced in 26AS is a follow-up you want to start immediately, not discover at filing time. And when you file, quote the CIN exactly — a challan the return can't point to is, procedurally, tax the department hasn't seen.

### [H2] When the Cheque Bounces or a Detail Is Wrong

Two failure modes, two different clean-ups.

**The cheque bounces.** Then no payment happened — not late payment, *no* payment. The challan is never realised, the CRN eventually lapses, interest keeps running against the instalment as if you'd never visited the branch, and your bank adds a return charge for the insult. The prevention is the same standing rule every serious cheque payer already runs: a tax cheque is written only against funds already sitting in the account, never against a receivable that's "definitely coming Tuesday."

**A detail is wrong.** Wrong assessment year, wrong major or minor head — the money arrived but landed in the wrong bucket. There's a correction mechanism: banks can fix certain fields within a short window after deposit, and beyond that the request goes to your jurisdictional assessing officer or through the portal's challan-correction service. It works, but it's measured in weeks, which returns us to step one of the walkthrough: the cheapest challan correction is the one you never file.

---

> **The one cheque of the quarter that cannot afford a mistake — printed right the first time.** Cheqify prints your tax cheque on 300+ Indian bank layouts with the amount in words auto-generated and every leaf logged in a register, so the instalment, the counterfoil, and the cheque book all tell the same story at assessment time. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** Can I still pay income tax by cheque in 2026?
   **A:** Yes, for many taxpayers. The e-filing portal's e-Pay Tax service includes a "Pay at Bank Counter" option: generate the challan (with its CRN) on the portal, print it, and submit it with a cheque or demand draft at an authorised branch of the selected bank. Verify that your bank offers the counter option before visiting — the authorised list changes — and note that companies and audit-case businesses must pay electronically and cannot use this route.

2. **Q:** What is Challan ITNS 280?
   **A:** Challan 280 is the income-tax deposit form used for advance tax, self-assessment tax, and tax on regular assessment. Its fields identify the taxpayer (PAN), the assessment year, the major head (company or non-company), and the minor head (which type of tax). Whether you pay online or over a bank counter, the payment travels on this challan, and errors in its heads or year require a formal challan-correction request to fix.

3. **Q:** What are the advance tax due dates?
   **A:** Four cumulative instalments: 15% of the year's estimated tax by 15 June, 45% by 15 September, 75% by 15 December, and 100% by 15 March. Presumptive-scheme taxpayers under Sections 44AD/44ADA pay the entire amount in one instalment by 15 March. Advance tax applies when total liability after TDS exceeds ₹10,000 for the year; shortfalls attract interest under Sections 234B and 234C.

4. **Q:** If I pay advance tax by cheque, which date counts as the payment date?
   **A:** Plan around the realisation date — the date the cheque clears — not the date you hand it over at the counter. The challan is realised on clearing, and that is the date the system records against your instalment. A cheque submitted on the due date that clears three days later makes the instalment late and triggers interest. Deposit at least 3–4 working days before the deadline, longer around holidays.

5. **Q:** What is the CIN and why should I keep the challan counterfoil?
   **A:** The CIN (Challan Identification Number) combines the receiving branch's BSR code, the deposit date, and the challan serial number — it is the official proof your tax reached the government and the number your return quotes. Keep the stamped counterfoil until the year's assessment is closed, and verify the CIN appears in your Form 26AS/AIS within a few days of the cheque clearing.

6. **Q:** What happens if my tax cheque bounces?
   **A:** The payment simply never happens: the challan is not realised, the CRN eventually lapses, and interest continues to accrue against the unpaid instalment as if no cheque was ever written — plus your bank levies a return charge. There is no grace for a bounced tax cheque, so write it only against funds already in the account, never against expected receipts.

7. **Q:** Who cannot pay income tax by cheque at the bank counter?
   **A:** Companies, and businesses or professionals whose accounts are subject to tax audit, have been required to pay taxes electronically since 2008 — the over-the-counter route is not available to them. In practice the counter serves individuals, proprietors, and smaller firms outside the audit net, and even then only at banks that offer the Pay at Bank Counter option under e-Pay Tax.

---

## HowTo Steps (Sanity `howToSteps` field — required for HowTo schema)

| # | Name | Text |
|---|---|---|
| 1 | Compute and classify the tax | Estimate the instalment or self-assessment balance, and note the correct assessment year, major head (company/non-company), and minor head (advance tax / self-assessment / regular assessment). Errors here need a weeks-long challan correction to undo. |
| 2 | Generate the challan on e-Pay Tax | On the e-filing portal's e-Pay Tax service, choose "Pay at Bank Counter", select cheque as the instrument and an authorised bank, and print the challan with its CRN. Note the validity window printed on the form — the CRN lapses after it. |
| 3 | Write or print the cheque exactly | Payee exactly as the challan or receiving bank directs, account-payee crossed, amount in words matching the figures to the rupee, dated the day of submission. A cheque returned for a fixable error is a deadline lost to penmanship. |
| 4 | Submit early at the authorised branch | Hand over the challan and cheque at least 3–4 working days before the due date — the payment date is the cheque's realisation date, not the handover date, and holidays stretch clearing time. |
| 5 | Collect proof and verify the CIN | Take the stamped acknowledgment at the counter; after the cheque clears, confirm the CIN on the portal and in Form 26AS/AIS within a week, quote it in the return, and keep the counterfoil until the assessment closes. |

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

हर March, India में कहीं, एक business owner 15th को final advance-tax instalment के cheque के साथ bank branch में जाता है, एक घंटा spare रखकर hand over करता है, और घर drive करता है इस certainty के साथ कि deadline meet हो गई.

Cheque 18th को clear होता है. और department की books में, 18th वो दिन है जब tax paid हुआ.

वो three-day gap — उस दिन invisible, assessment पर expensive — इस guide के exist करने की वजह है. आगे जो है वो income-tax payment का वो corner है जहाँ 2026 में cheques अभी भी रहते हैं: Challan ITNS 280, authorised bank का counter, चार advance-tax dates, और वो एक rule जो decide करता है कि आपका carefully written cheque time पर land हुआ या तीन दिन late.

### [H2] Challan 280 — एक Form, तीन Taxes

**Challan ITNS 280** income-tax का deposit form है: वो document जो government को बताता है कि किसका पैसा आ रहा है, किस year के लिए, और क्यों. आप online pay करें या counter पर, payment इसके fields से route होती है, और तीन तरह के tax इस पर travel करते हैं:

- **Advance tax** — financial year के दौरान उसी year की income के against paid instalments.
- **Self-assessment tax** — वो balance जो आप return file करने से ठीक पहले settle करते हैं, TDS और advance tax count होने के बाद.
- **Tax on regular assessment** — वो demand जो department आपके return को process या assess करने के बाद raise करता है.

हर एक का challan पर अपना minor head है (advance tax, self-assessment, और regular assessment अलग codes हैं), और उनके ऊपर एक major head कहता है कि pay *कौन* कर रहा है — companies के लिए एक code, बाकी सबके लिए दूसरा. इसमें से कुछ भी trivia नहीं है. गलत head या गलत assessment year tick करें और पैसा government तक पहुँचता है लेकिन गलत bucket में बैठता है: recoverable, हाँ, लेकिन सिर्फ़ एक challan-correction request के through जो weeks का follow-up cost करती है. Heads year to year stable हैं, लेकिन payment time पर उन्हें portal screen से confirm करें, memory से नहीं — इस article की memory से भी नहीं.

### [H2] 2026 में Tax Actually कैसे Pay होता है — और Cheque कहाँ Fit होता है

पहले truth: आज ज़्यादातर income-tax payment online होती है. e-filing portal की **e-Pay Tax** service net banking, UPI, debit cards, RTGS/NEFT, और payment-gateway routes लेती है, और अगर आपके पास listed bank पर working net banking है, वही fastest path है — ये article otherwise pretend नहीं करेगा.

लेकिन counter बंद नहीं हुआ. e-Pay Tax के अंदर एक **"Pay at Bank Counter"** option बैठा है: आप portal पर challan generate करते हैं — ये एक **CRN** issue करता है, Challan Reference Number — print करते हैं, और उसे एक **cheque या demand draft** के साथ selected bank की authorised branch ले जाते हैं. Generated challan एक limited window तक valid रहता है (लगभग पंद्रह दिन — उस पर printed expiry check करें), जिसके बाद CRN lapse होता है और आप फिर से शुरू करते हैं.

दो caveats इस route को honest रखते हैं. पहला, हर bank counter option offer नहीं करता, और portal की authorised banks की list shift होती है — branch trip plan करने से पहले verify करें कि आपका bank appear होता है *और* counter पर cheques accept करता है. दूसरा, कुछ taxpayers इसे बिल्कुल use नहीं कर सकते: companies और tax audit के under businesses 2008 से electronically pay करने के लिए required हैं, तो counter effectively individuals, proprietors, और audit net के बाहर की smaller firms का territory है. अगर वो आप हैं, cheque का यहाँ role familiar लगेगा — ये वही shrinking-but-real role है जो ये [counter पर GST payment](https://cheqify.app/hi/blog/gst-payment-by-cheque-india) में play करता है, और roughly वही population दोनों को alive रखती है: proprietors जो business वैसे भी cheques पर चलाते हैं, taxpayers जिनकी net-banking transaction limits एक बड़ा instalment cover नहीं करतीं, और कोई भी जो ऐसे account से pay कर रहा है जो portal की payment rails में wired नहीं है.

### [H2] Realisation-Date Rule — Tax Cheques जल्दी अंदर क्यों जाते हैं

यहाँ है matter का cheque-specific heart. जब आप counter पर cheque से pay करते हैं, bank उस moment government को credit नहीं करता जब आप leaf hand over करते हैं. Challan तब *realise* होता है जब cheque clear होता है — और system जो payment date record करता है वो उस realisation पर ride करती है, branch पर आपकी visit पर नहीं.

> **15th को handed over और 18th को cleared एक tax cheque — उस अकेले calendar में जो matter करता है — 18th को paid हुआ.**

Filing date से पहले comfortable gap वाले self-assessment tax के लिए, clearing float के कुछ दिन एक annoyance हैं. 15th *को* due एक advance-tax instalment के लिए, यही पूरा game है: due date के बाद realise होने वाला cheque instalment को late बनाता है, और यहाँ lateness एक warning letter नहीं है — ये interest है, mechanically computed, कोई discretion involved नहीं.

Operating rule, फिर, एक buffer है. Cheque को due date से कम से कम तीन से चार working days पहले deposit करें — बीच में weekend या holiday हो तो और पहले, कम सिर्फ़ तब जब आप उसी bank पर drawn cheque से pay कर रहे हों जो receive कर रहा है, जो typically तेज़ realise होता है. ये वही clearing-buffer discipline है जो [एक EMI cheque को उसकी presentation date से slip होने](https://cheqify.app/hi/blog/loan-repayment-by-cheque-india) से बचाती है: instrument जल्दी अंदर जाता है, और आप जिस deadline के against plan करते हैं वो *clearing* date है, handover date नहीं. (Tender-date versus realisation-date की legal history की अपनी nuances हैं — courts ने कभी-कभी एक honoured cheque को उसके tender से relate back किया है — लेकिन safe operating assumption, और वो जो आपके challan stamp पर reflect होगी, ये है कि realisation govern करता है. नीचे का fact-check block इसे publish से पहले pin down करता है.)

### [H2] Advance Tax — चार Dates जिन्हें Cheque को हराना है

अगर आपकी year की total tax liability, TDS के बाद, ₹10,000 cross करती है, advance tax apply होता है — salaried हों या नहीं, business हो या profession. Instalments year के estimated tax के cumulative percentages हैं:

- **15 June** — 15% paid
- **15 September** — 45% paid
- **15 December** — 75% paid
- **15 March** — 100% paid

Presumptive-scheme taxpayers (Sections 44AD और 44ADA) को एक concession मिलती है: एक single instalment, पूरा amount, 15 March तक. एक instalment miss या short-pay करें और Sections 234B और 234C के under interest accrue होने लगता है — per month modest, aggregate में relentless, और ऐसे software से calculated जिसे आज तक कोई talk out नहीं कर पाया.

एक cheque payer के लिए, उन चार dates में से हर एक actually *एक date minus clearing time* है. 15 June, planning purposes के लिए, 10th या 11th है. वो arithmetic अपने calendar में एक बार लिख लें और realisation-date rule एक trap होना बंद करके एक habit बन जाता है.

### [H2] Counter Walkthrough — पाँच Steps, एक Stamped Counterfoil

Estimate से proof तक, पूरा over-the-counter run:

1. **Compute और classify करें.** Instalment (या self-assessment balance) estimate करें, और assessment year और correct heads note करें — advance tax versus self-assessment versus regular assessment. यहाँ पाँच minutes की care बाद में एक challan-correction saga बचाती है.
2. **e-Pay Tax पर challan generate करें.** e-filing portal पर log in करें, mode के तौर पर "Pay at Bank Counter" choose करें, cheque select करें, अपना authorised bank pick करें, और portal जो challan form issue करता है उसे print करें — CRN समेत. उस पर printed validity window note करें.
3. **Cheque exactly लिखें — या print करें.** Payee ठीक वैसे जैसे challan या receiving bank direct करती है (banks generally चाहती हैं कि cheque government account में credit के लिए उन्हीं के favour में drawn हो — printed instruction follow करें, folklore नहीं), account-payee crossed, amount in words figure से rupee तक matching, submission के दिन की date. Correctable error के लिए return हुआ एक tax cheque penmanship से हारी हुई deadline है.
4. **जल्दी submit करें, सही branch पर.** आपके selected bank की authorised branch, clearing buffer already built in के साथ — due date से minimum तीन से चार working days पहले.
5. **Acknowledgment collect करें, फिर counterfoil.** Counter आपको on the spot एक stamped acknowledgment देता है; challan तब realise होता है जब cheque clear होता है, और तभी **CIN** exist करता है. एक week के अंदर इसे portal और अपने Form 26AS/AIS में verify करें.

### [H2] Counterfoil और CIN — आपका Only Proof

**CIN** — Challan Identification Number — तीन facts का fusion है: receiving branch का BSR code, deposit की date, और challan serial number. ये government की receipt है, वो number जो आपका return paid tax के against quote करता है, और वो single identifier जो एक payment को years बाद trace होने देता है.

तो paper discipline short और absolute है. Stamped counterfoil तब तक रखें जब तक उस year का assessment closed न हो — filing तक नहीं, *closure* तक. Verify करें कि CIN realisation के कुछ दिनों के अंदर आपके Form 26AS या AIS में appear होता है; एक payment जो आपके bank से clear हुई लेकिन 26AS में surface नहीं हुई एक ऐसा follow-up है जो आप immediately शुरू करना चाहते हैं, filing time पर discover नहीं. और जब आप file करें, CIN exactly quote करें — एक challan जिसकी तरफ़ return point नहीं कर सकता, procedurally, वो tax है जो department ने देखा ही नहीं.

### [H2] जब Cheque Bounce हो या कोई Detail गलत हो

दो failure modes, दो अलग clean-ups.

**Cheque bounce होता है.** तब कोई payment हुई ही नहीं — late payment नहीं, *no* payment. Challan कभी realise नहीं होता, CRN eventually lapse होता है, interest instalment के against ऐसे run करता रहता है जैसे आप branch गए ही नहीं, और आपका bank insult के लिए एक return charge add करता है. Prevention वही standing rule है जो हर serious cheque payer already चलाता है: एक tax cheque सिर्फ़ उन funds के against लिखा जाता है जो already account में बैठे हैं, कभी उस receivable के against नहीं जो "Tuesday को पक्का आ रहा है."

**कोई detail गलत है.** गलत assessment year, गलत major या minor head — पैसा पहुँचा लेकिन गलत bucket में land हुआ. एक correction mechanism है: banks deposit के बाद एक short window में certain fields fix कर सकती हैं, और उसके beyond request आपके jurisdictional assessing officer या portal की challan-correction service के through जाती है. ये काम करता है, लेकिन weeks में measure होता है, जो हमें walkthrough के step one पर वापस लाता है: सबसे सस्ता challan correction वो है जो आप कभी file नहीं करते.

---

> **Quarter का वो एक cheque जो mistake afford नहीं कर सकता — पहली बार में ही सही printed.** Cheqify आपका tax cheque 300+ Indian bank layouts पर print करता है auto-generated amount in words के साथ और हर leaf एक register में logged, ताकि instalment, counterfoil, और cheque book assessment time पर एक ही story बताएँ. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

દર March, India માં ક્યાંક, એક business owner 15th ના final advance-tax instalment ના cheque સાથે bank branch માં જાય છે, એક કલાક spare રાખીને hand over કરે છે, અને ઘરે drive કરે છે એ certainty સાથે કે deadline meet થઈ ગઈ.

Cheque 18th ના clear થાય છે. અને department ની books માં, 18th એ દિવસ છે જ્યારે tax paid થયો.

એ three-day gap — એ દિવસે invisible, assessment પર expensive — આ guide ના exist કરવાનું કારણ છે. આગળ જે છે એ income-tax payment નો એ corner છે જ્યાં 2026 માં cheques હજુ પણ રહે છે: Challan ITNS 280, authorised bank નું counter, ચાર advance-tax dates, અને એ એક rule જે decide કરે છે કે તમારો carefully written cheque time પર land થયો કે ત્રણ દિવસ late.

### [H2] Challan 280 — એક Form, ત્રણ Taxes

**Challan ITNS 280** income-tax નું deposit form છે: એ document જે government ને કહે છે કે કોના પૈસા આવી રહ્યા છે, કયા year માટે, અને કેમ. તમે online pay કરો કે counter પર, payment એના fields માંથી route થાય છે, અને ત્રણ પ્રકારના tax આના પર travel કરે છે:

- **Advance tax** — financial year દરમિયાન એ જ year ની income ની against paid instalments.
- **Self-assessment tax** — એ balance જે તમે return file કરતા પહેલા settle કરો છો, TDS અને advance tax count થયા પછી.
- **Tax on regular assessment** — એ demand જે department તમારા return ને process કે assess કર્યા પછી raise કરે છે.

દરેકનું challan પર પોતાનું minor head છે (advance tax, self-assessment, અને regular assessment અલગ codes છે), અને એમની ઉપર એક major head કહે છે કે pay *કોણ* કરી રહ્યું છે — companies માટે એક code, બાકી બધા માટે બીજો. આમાંથી કંઈ પણ trivia નથી. ખોટું head કે ખોટું assessment year tick કરો અને પૈસા government સુધી પહોંચે છે પણ ખોટા bucket માં બેસે છે: recoverable, હા, પણ ફક્ત એક challan-correction request ના through જે weeks નું follow-up cost કરે છે. Heads year to year stable છે, પણ payment time પર એમને portal screen થી confirm કરો, memory થી નહીં — આ article ની memory થી પણ નહીં.

### [H2] 2026 માં Tax Actually કેવી રીતે Pay થાય છે — અને Cheque ક્યાં Fit થાય છે

પહેલા truth: આજે મોટાભાગની income-tax payment online થાય છે. e-filing portal ની **e-Pay Tax** service net banking, UPI, debit cards, RTGS/NEFT, અને payment-gateway routes લે છે, અને જો તમારી પાસે listed bank પર working net banking છે, એ જ fastest path છે — આ article otherwise pretend નહીં કરે.

પણ counter બંધ નથી થયું. e-Pay Tax ની અંદર એક **"Pay at Bank Counter"** option બેઠો છે: તમે portal પર challan generate કરો છો — એ એક **CRN** issue કરે છે, Challan Reference Number — print કરો છો, અને એને એક **cheque કે demand draft** સાથે selected bank ની authorised branch લઈ જાઓ છો. Generated challan એક limited window સુધી valid રહે છે (લગભગ પંદર દિવસ — એના પર printed expiry check કરો), જેના પછી CRN lapse થાય છે અને તમે ફરીથી શરૂ કરો છો.

બે caveats આ route ને honest રાખે છે. પહેલું, દરેક bank counter option offer નથી કરતી, અને portal ની authorised banks ની list shift થાય છે — branch trip plan કરતા પહેલા verify કરો કે તમારી bank appear થાય છે *અને* counter પર cheques accept કરે છે. બીજું, કેટલાક taxpayers આને બિલકુલ use નથી કરી શકતા: companies અને tax audit ની under businesses 2008 થી electronically pay કરવા required છે, તો counter effectively individuals, proprietors, અને audit net ની બહારની smaller firms નું territory છે. જો એ તમે છો, cheque નો અહીં role familiar લાગશે — આ એ જ shrinking-but-real role છે જે એ [counter પર GST payment](https://cheqify.app/gu/blog/gst-payment-by-cheque-india) માં play કરે છે, અને roughly એ જ population બંનેને alive રાખે છે: proprietors જે business એમ પણ cheques પર ચલાવે છે, taxpayers જેમની net-banking transaction limits એક મોટો instalment cover નથી કરતી, અને કોઈ પણ જે એવા account થી pay કરી રહ્યું છે જે portal ની payment rails માં wired નથી.

### [H2] Realisation-Date Rule — Tax Cheques વહેલા અંદર કેમ જાય છે

અહીં છે matter નું cheque-specific heart. જ્યારે તમે counter પર cheque થી pay કરો છો, bank એ moment government ને credit નથી કરતી જ્યારે તમે leaf hand over કરો છો. Challan ત્યારે *realise* થાય છે જ્યારે cheque clear થાય છે — અને system જે payment date record કરે છે એ એ realisation પર ride કરે છે, branch પર તમારી visit પર નહીં.

> **15th ના handed over અને 18th ના cleared એક tax cheque — એ એકલા calendar માં જે matter કરે છે — 18th ના paid થયો.**

Filing date પહેલા comfortable gap વાળા self-assessment tax માટે, clearing float ના થોડા દિવસ એક annoyance છે. 15th *ના* due એક advance-tax instalment માટે, આ જ આખો game છે: due date પછી realise થતો cheque instalment ને late બનાવે છે, અને અહીં lateness એક warning letter નથી — આ interest છે, mechanically computed, કોઈ discretion involved નહીં.

Operating rule, પછી, એક buffer છે. Cheque ને due date થી ઓછામાં ઓછા ત્રણ થી ચાર working days પહેલા deposit કરો — વચ્ચે weekend કે holiday હોય તો વધુ પહેલા, ઓછું ફક્ત ત્યારે જ્યારે તમે એ જ bank પર drawn cheque થી pay કરી રહ્યા હો જે receive કરી રહી છે, જે typically ઝડપી realise થાય છે. આ એ જ clearing-buffer discipline છે જે [એક EMI cheque ને એની presentation date થી slip થવા](https://cheqify.app/gu/blog/loan-repayment-by-cheque-india) થી બચાવે છે: instrument વહેલું અંદર જાય છે, અને તમે જે deadline ની against plan કરો છો એ *clearing* date છે, handover date નહીં. (Tender-date versus realisation-date ની legal history ની પોતાની nuances છે — courts એ ક્યારેક એક honoured cheque ને એના tender થી relate back કર્યો છે — પણ safe operating assumption, અને એ જે તમારા challan stamp પર reflect થશે, આ છે કે realisation govern કરે છે. નીચેનો fact-check block આને publish પહેલા pin down કરે છે.)

### [H2] Advance Tax — ચાર Dates જેમને Cheque એ હરાવવાની છે

જો તમારી year ની total tax liability, TDS પછી, ₹10,000 cross કરે છે, advance tax apply થાય છે — salaried હો કે નહીં, business હોય કે profession. Instalments year ના estimated tax ના cumulative percentages છે:

- **15 June** — 15% paid
- **15 September** — 45% paid
- **15 December** — 75% paid
- **15 March** — 100% paid

Presumptive-scheme taxpayers (Sections 44AD અને 44ADA) ને એક concession મળે છે: એક single instalment, આખો amount, 15 March સુધી. એક instalment miss કે short-pay કરો અને Sections 234B અને 234C ની under interest accrue થવા લાગે છે — per month modest, aggregate માં relentless, અને એવા software થી calculated જેને આજ સુધી કોઈ talk out નથી કરી શક્યું.

એક cheque payer માટે, એ ચાર dates માંથી દરેક actually *એક date minus clearing time* છે. 15 June, planning purposes માટે, 10th કે 11th છે. એ arithmetic તમારા calendar માં એક વાર લખી લો અને realisation-date rule એક trap હોવાનું બંધ કરીને એક habit બની જાય છે.

### [H2] Counter Walkthrough — પાંચ Steps, એક Stamped Counterfoil

Estimate થી proof સુધી, આખો over-the-counter run:

1. **Compute અને classify કરો.** Instalment (કે self-assessment balance) estimate કરો, અને assessment year અને correct heads note કરો — advance tax versus self-assessment versus regular assessment. અહીં પાંચ minutes ની care પછીથી એક challan-correction saga બચાવે છે.
2. **e-Pay Tax પર challan generate કરો.** e-filing portal પર log in કરો, mode તરીકે "Pay at Bank Counter" choose કરો, cheque select કરો, તમારી authorised bank pick કરો, અને portal જે challan form issue કરે છે એને print કરો — CRN સહિત. એના પર printed validity window note કરો.
3. **Cheque exactly લખો — કે print કરો.** Payee બરાબર એમ જેમ challan કે receiving bank direct કરે છે (banks generally ચાહે છે કે cheque government account માં credit માટે એમના જ favour માં drawn હોય — printed instruction follow કરો, folklore નહીં), account-payee crossed, amount in words figure સાથે rupee સુધી matching, submission ના દિવસની date. Correctable error માટે return થયેલો એક tax cheque penmanship થી હારેલી deadline છે.
4. **વહેલા submit કરો, સાચી branch પર.** તમારી selected bank ની authorised branch, clearing buffer already built in સાથે — due date થી minimum ત્રણ થી ચાર working days પહેલા.
5. **Acknowledgment collect કરો, પછી counterfoil.** Counter તમને on the spot એક stamped acknowledgment આપે છે; challan ત્યારે realise થાય છે જ્યારે cheque clear થાય છે, અને ત્યારે જ **CIN** exist કરે છે. એક week ની અંદર આને portal અને તમારા Form 26AS/AIS માં verify કરો.

### [H2] Counterfoil અને CIN — તમારો Only Proof

**CIN** — Challan Identification Number — ત્રણ facts નું fusion છે: receiving branch નો BSR code, deposit ની date, અને challan serial number. આ government ની receipt છે, એ number જે તમારો return paid tax ની against quote કરે છે, અને એ single identifier જે એક payment ને years પછી trace થવા દે છે.

તો paper discipline short અને absolute છે. Stamped counterfoil ત્યાં સુધી રાખો જ્યાં સુધી એ year નું assessment closed ન હોય — filing સુધી નહીં, *closure* સુધી. Verify કરો કે CIN realisation ના થોડા દિવસોની અંદર તમારા Form 26AS કે AIS માં appear થાય છે; એક payment જે તમારી bank થી clear થઈ પણ 26AS માં surface નથી થઈ એ એવો follow-up છે જે તમે immediately શરૂ કરવા માંગો છો, filing time પર discover નહીં. અને જ્યારે તમે file કરો, CIN exactly quote કરો — એક challan જેની તરફ return point નથી કરી શકતો, procedurally, એ tax છે જે department એ જોયો જ નથી.

### [H2] જ્યારે Cheque Bounce થાય કે કોઈ Detail ખોટી હોય

બે failure modes, બે અલગ clean-ups.

**Cheque bounce થાય છે.** ત્યારે કોઈ payment થઈ જ નહીં — late payment નહીં, *no* payment. Challan ક્યારેય realise નથી થતું, CRN eventually lapse થાય છે, interest instalment ની against એમ run કરતું રહે છે જાણે તમે branch ગયા જ નહીં, અને તમારી bank insult માટે એક return charge add કરે છે. Prevention એ જ standing rule છે જે દરેક serious cheque payer already ચલાવે છે: એક tax cheque ફક્ત એ funds ની against લખાય છે જે already account માં બેઠા છે, ક્યારેય એ receivable ની against નહીં જે "Tuesday ના પાક્કું આવી રહ્યું છે."

**કોઈ detail ખોટી છે.** ખોટું assessment year, ખોટું major કે minor head — પૈસા પહોંચ્યા પણ ખોટા bucket માં land થયા. એક correction mechanism છે: banks deposit પછી એક short window માં certain fields fix કરી શકે છે, અને એની beyond request તમારા jurisdictional assessing officer કે portal ની challan-correction service ના through જાય છે. આ કામ કરે છે, પણ weeks માં measure થાય છે, જે અમને walkthrough ના step one પર પાછા લાવે છે: સૌથી સસ્તું challan correction એ છે જે તમે ક્યારેય file નથી કરતા.

---

> **Quarter નો એ એક cheque જે mistake afford નથી કરી શકતો — પહેલી વારમાં જ સાચો printed.** Cheqify તમારો tax cheque 300+ Indian bank layouts પર print કરે છે auto-generated amount in words સાથે અને દરેક leaf એક register માં logged, જેથી instalment, counterfoil, અને cheque book assessment time પર એક જ story કહે. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## ⚠️ Pre-publish fact-check required

**This block is CRITICAL for this post — tax procedures and portal flows age fast. Verify every item against the live e-filing portal and current law at publish time.**

1. **"Pay at Bank Counter" cheque/DD option** — confirm the e-Pay Tax service still offers over-the-counter payment by cheque/DD, which banks are currently authorised for it, and the CRN/challan validity window (body says "around fifteen days — check the expiry printed on it"; tighten if the current window differs). If the counter option has been narrowed or withdrawn since drafting, the "cheque still has a role" framing must be re-hedged before publish.
2. **Electronic-payment mandate** — verify that companies and audit-case taxpayers (Section 44AB) remain barred from over-the-counter payment (mandate in force since 2008). Confirm no newer notification extends the bar to more categories.
3. **Realisation-date = payment-date rule** — the body's central claim: for cheque payment of taxes, the challan/payment date follows the cheque's realisation, not tender. Verify against current challan/counterfoil practice and any governing rule or circular (tender-date case law exists — K. Saraswathy line — but the operational stamp follows realisation). The body deliberately hedges with "safe operating assumption"; keep or tighten based on findings.
4. **Advance-tax instalments** — 15 Jun / 15 Sep / 15 Dec / 15 Mar at 15% / 45% / 75% / 100% cumulative; ₹10,000 annual liability threshold; 44AD/44ADA single instalment by 15 Mar; interest under 234B/234C. Stable for years, but verify no Finance Act change.
5. **Challan 280 heads** — major heads (0020 company / 0021 non-company) and minor heads (100 advance / 300 self-assessment / 400 regular assessment) are deliberately described without code numbers in the body; if you add codes anywhere, verify them on the live portal first.
6. **Cheque payee instruction** — body says banks "generally want the cheque drawn in their own favour for credit to the government account" and defers to the printed challan instruction. Verify this matches current OTC challan wording for at least one major authorised bank.
7. **Challan-correction mechanism** — bank-window corrections for certain fields plus AO/portal route beyond it; kept directional in the body. Verify the current correction service on the e-filing portal.
8. **CIN composition** — BSR code + deposit date + challan serial number; stable, verify wording.

---

## Internal-Link Strategy

**Forward links from this post (LIVE targets only):**
- Post #21 (`gst-payment-by-cheque-india`) — the indirect-tax sibling; linked in the "where the cheque fits" section. **Live — safe.**
- Post #23 (`loan-repayment-by-cheque-india`) — the same clearing-buffer discipline; linked in the realisation-date section. **Live — safe.**

**Bonus internal-link work (after publish):**
- Edit post #21 (`gst-payment-by-cheque-india`, all 3 locales) to add a "the direct-tax counterpart — income tax by cheque" link here — strongest reciprocal.
- Edit post #23 (`loan-repayment-by-cheque-india`, all 3 locales) to reference the advance-tax clearing-buffer parallel.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The March-15th opening scene and the realisation-date arithmetic carry the voice.
- **Fact-check block (CRITICAL):** portal flows (Pay at Bank Counter, CRN validity), the realisation-date rule, and advance-tax figures must be verified at publish — this post ages faster than most.
- **Internal link order:** both targets (#21, #23) are already live — safe.
- **Word count:** EN body must be >1200 words (target 1,700–2,100). Current draft: ~1,720 words.
- **Sanity toggles:** `isHowTo: ON` (5 steps), `hasFaq: ON` (7 items).
- **Slug check:** after publish, confirm the slug reads exactly `income-tax-payment-by-cheque-india` in Sanity (no stray characters — see slug-corruption gotcha).

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — posts #21 and #23 (both live).
5. IndexNow auto-pings on publish.
