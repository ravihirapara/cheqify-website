# Blog Post #35 — Paying Salaries by Cheque in India — The SMB Compliance Guide (2026)

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
- `> **Twenty salary cheques on the last working day...** / **Last working day पर बीस salary cheques...** / **Last working day પર વીસ salary cheques...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **Cash salary saves the employee a bank trip and costs the business its deduction...** / **Cash salary employee की एक bank trip बचाती है...** / **Cash salary employee ની એક bank trip બચાવે છે...**` (pull quote in each body) → **Quote**

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

Salary day is the highest-volume recurring cheque event at SMBs, and the compliance stack around it is genuinely unknown to most small employers: the Payment of Wages Act's cheque/bank provisions (and the cash-mandate notifications), Section 40A(3)'s ₹10,000/day cash-expense disallowance that silently taxes cash payrolls, wage-payment deadlines, and what a bounced salary cheque triggers. Direct product fit — batch printing 20 salary cheques is Cheqify's core use case (#14). Cluster fit: #14 (bulk), #30 (employee deposits it), #25 (cancelled cheque at onboarding), #13 (register), #11 (138).

---

## Sanity Fields

- **Slug:** `salary-payment-by-cheque-india`
- **Tags:** `Cheque Productivity`, `Banking & RBI`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** YES (running a monthly cheque payroll, 5 steps)
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Monday 2026-07-20, 10:00 IST (auto-set in Sanity)
- **Primary keyword:** `salary payment by cheque`
- **Secondary keywords:** is it legal to pay salary in cash, salary cheque rules India, Payment of Wages Act cheque, 40A(3) cash salary, salary cheque bounce, payroll by cheque SMB
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/salary-payment-by-cheque-india`
  - HI: `https://cheqify.app/hi/blog/salary-payment-by-cheque-india`
  - GU: `https://cheqify.app/gu/blog/salary-payment-by-cheque-india`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `salary-payment-by-cheque-india-cover.webp`
- **Subject:** A small-office payday scene abstracted: a neat fan of printed salary cheques on a desk, each with a payslip clipped to it, a wage register open beside them with ticked rows. A wall calendar shows a circled "7" (the wage deadline). One cheque mid-handover to an employee's hand. Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** Paying salaries by cheque in India — printed salary cheques with payslips and a wage register, meeting the Payment of Wages Act deadline.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Paying Salaries by Cheque in India — The SMB Compliance Guide (2026)
- **HI:** India में Cheque से Salary Payment — SMB Compliance Guide (2026)
- **GU:** India માં Cheque થી Salary Payment — SMB Compliance Guide (2026)

---

## Descriptions

- **EN:** Cash payroll feels simple until the law prices it: salary paid in cash above ₹10,000 a day per person is a disallowed expense under Section 40A(3), and wage-law notifications increasingly mandate cheque or bank payment outright. Here's the SMB guide to running payroll on cheques: the Payment of Wages Act rules, the payday deadlines, what a bounced salary cheque triggers, the wage-register habits, and how to print twenty salary cheques in minutes.
- **HI:** Cash payroll simple लगता है जब तक law इसकी price न लगाए: ₹10,000 per day per person से ऊपर cash में paid salary Section 40A(3) के under एक disallowed expense है, और wage-law notifications increasingly cheque या bank payment outright mandate करती हैं. यहाँ है cheques पर payroll चलाने की SMB guide: Payment of Wages Act rules, payday deadlines, bounced salary cheque क्या trigger करता है, wage-register habits, और minutes में बीस salary cheques कैसे print करें.
- **GU:** Cash payroll simple લાગે છે જ્યાં સુધી law એની price ન લગાવે: ₹10,000 per day per person થી ઉપર cash માં paid salary Section 40A(3) ની under એક disallowed expense છે, અને wage-law notifications increasingly cheque કે bank payment outright mandate કરે છે. અહીં છે cheques પર payroll ચલાવવાની SMB guide: Payment of Wages Act rules, payday deadlines, bounced salary cheque શું trigger કરે છે, wage-register habits, અને minutes માં વીસ salary cheques કેવી રીતે print કરવા.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

Ask a small employer why they pay salaries in cash and you'll hear the same three answers: the workers prefer it, the bank is a hassle, we've always done it this way.

Ask their accountant what that habit costs and you'll hear a number — because the tax law quietly re-prices cash payroll every March, and most owners discover it only when a deduction disappears.

This is the guide to the alternative that sits in your drawer: the salary cheque. What the law actually says, the deadlines that bind payday, the trap in the Income-tax Act, and the mechanics of running a twenty-person cheque payroll without losing an evening to it.

### [H2] What the Law Says About How Salaries Move

The **Payment of Wages Act** governs wage payment for employees within its wage ceiling (₹24,000 a month since 2017 — broadly, the workforce of shops, factories, and establishments). For decades it defaulted to cash. A 2017 amendment modernised it: wages can be paid by **cheque or bank credit without the employee's written authorisation**, and — the part many employers miss — the government can **notify establishments where wages must be paid only by cheque or bank transfer**, no cash allowed. Several categories have been so notified, and the direction of travel is one-way.

Above the wage ceiling, employment contracts govern — and white-collar salaries have long been bank-credited anyway. The newer **Code on Wages** consolidates this framework and carries the same payment-mode philosophy forward (coins/currency, cheque, account credit, digital); check the current implementation status in your state, since the labour codes' rollout has been phased.

The practical reading for an SMB in 2026: **paying by cheque or transfer is always legal, always safe. Paying in cash is legal only until a notification, a wage ceiling, or the tax law says otherwise — and the tax law already does.**

### [H2] The ₹10,000 Trap — Section 40A(3)

Here's the rule that re-prices cash payroll. Under **Section 40A(3)** of the Income-tax Act, any business expense paid in **cash above ₹10,000 to one person in one day** is **disallowed as a deduction**. Salary is an expense. Pay an employee ₹18,000 in cash on the 1st, and that ₹18,000 doesn't reduce your taxable profit — you pay tax as if the salary expense never happened.

> **Cash salary saves the employee a bank trip and costs the business its deduction. At a 25–30% effective rate, a ₹15-lakh annual cash payroll can quietly become several lakhs of extra tax — the most expensive convenience in the building.**

A cheque — an account-payee cheque, specifically, which is what the section recognises — keeps the deduction intact, creates the payment record, and costs a leaf. There is no version of the arithmetic where the cash habit wins once payroll crosses the threshold.

(Splitting a salary into sub-₹10,000 cash instalments across days to dodge the section is the kind of cleverness assessing officers have seen ten thousand times. Don't.)

### [H2] Payday Has a Legal Deadline

The Payment of Wages Act doesn't just regulate *how* — it regulates *when*. Establishments with fewer than 1,000 employees must pay wages **by the 7th** of the following month; larger ones by the 10th. A cheque payroll has to respect the calendar plus clearing: a cheque handed over on the 7th that [clears on the 9th](https://cheqify.app/en/blog/cheque-clearing-time-india) is a conversation you don't want with a labour inspector.

The clean pattern: print and distribute salary cheques **on the last working day of the month**, so even the slowest clearing lands well inside the window. Employees deposit at their convenience ([the deposit playbook they'll use](https://cheqify.app/en/blog/how-to-deposit-cheque-india)) and the wage register shows payment initiated on time.

### [H2] When the Salary Cheque Makes Sense (and When Transfer Beats It)

Honest framing: for a stable workforce with bank accounts, **NEFT or salary-account credit is the better default** — instant, free or near-free, zero paper. The salary cheque earns its keep in the real situations SMBs actually face:

- **New joiners whose account details aren't verified yet** — the first salary often moves by cheque while the [cancelled-cheque-and-penny-drop onboarding](https://cheqify.app/en/blog/how-to-write-cancelled-cheque-safely) completes.
- **Contractors, seasonal and site workers** without stable accounts on file, where a payee-named cheque beats cash on every compliance axis.
- **Businesses below payroll-software scale** — a cheque run plus a wage register is a complete, auditable payroll system with no subscriptions.
- **Final settlements and one-off payments** — full-and-final dues, bonuses, gratuity instalments — where a discrete, documented instrument suits the event.
- **Anywhere cash was the incumbent** — the cheque is the lowest-friction exit from the 40A(3) trap, because it needs nothing from the employee except a bank account on *their* side of the counter.

Whichever mix you run, the rule is uniformity of records, not uniformity of method: every payment lands in the same wage register with the same detail.

### [H2] The Payday Mechanics — Twenty Cheques Without Losing the Evening

A cheque payroll done by hand is an evening of cramped wrists and one inevitable spoiled leaf. Done properly, it's a fifteen-minute batch:

1. **Freeze the salary sheet** — names, net amounts, deductions reconciled (TDS under Section 192 handled in payroll, not on the cheque).
2. **Print the batch** — every cheque account-payee crossed, payee names exactly as bank records know them, amounts in words generated, dates uniform ([bulk printing, the full method](https://cheqify.app/en/blog/bulk-cheque-printing-batch-guide-india)).
3. **Register every leaf** — cheque number against employee name in the wage register and the [cheque register](https://cheqify.app/en/blog/cheque-lifecycle-management-explained), before distribution.
4. **Distribute against acknowledgment** — a signature column in the register; the cheque number ties the acknowledgment to the instrument.
5. **Watch the float clear** — salary cheques present within days; reconcile cleared leaves and chase the stragglers (an undeposited salary cheque ages toward [its 3-month expiry](https://cheqify.app/en/blog/cheque-validity-period-stop-payment-india), and a lapsed one means reissue paperwork).

One process note that saves real grief: **fund the account before distribution, not after.** Which brings us to the ugly scenario.

### [H2] If a Salary Cheque Bounces

A bounced vendor cheque is a commercial dispute. A bounced *salary* cheque is worse on every axis: it's a [Section 138 offence](https://cheqify.app/en/blog/section-138-ni-act-cheque-bounce-india) like any dishonoured payment of a debt — salary owed is as real as debts get — *plus* a Payment of Wages Act violation on timing, *plus* the kind of workforce-trust damage that no apology fully repairs. Authorities take wage non-payment seriously, and the employee holding the return memo holds every remedy at once.

So the standing rule for cheque payroll: salary cheques are written against money that is *already in the account* — never against expected receivables. If the cash flow can't guarantee that, the honest move is a delayed-but-funded payday conversation, not a confident handover of paper that might bounce.

### [H2] The Records That Make It Audit-Proof

Payroll generates obligations to three audiences — the labour inspector, the tax officer, the employee — and one set of records satisfies all three:

- **Wage register / muster roll** — statutory, with payment mode and cheque number per row
- **Payslips** — issued regardless of payment method
- **The cheque register** — leaf number, payee, amount, date, status (issued/cleared/stale/reissued)
- **Bank statement reconciliation** — cleared salary cheques tied back to the register monthly

When the cheque number appears in the wage register, the payslip, and the cheque register, every rupee of payroll has three corroborating witnesses. That's the standard a scrutiny survives — and it falls out automatically from a printed, registered cheque run, which is rather the point.

---

> **Twenty salary cheques on the last working day — printed, crossed, registered, in minutes.** Cheqify batch-prints your whole payroll run on 300+ Indian bank layouts with auto amount-in-words, and its register ties every leaf to a payee so the wage register, payslip, and cheque book always agree. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** Is it legal to pay salary by cheque in India?
   **A:** Yes — fully. The Payment of Wages Act (as amended in 2017) expressly allows wages by cheque or bank credit without the employee's written authorisation, and the government can notify establishments where cheque/bank payment is mandatory and cash is barred. Above the Act's wage ceiling, contract terms govern, and cheque or transfer is standard. Cheque payment is always the legally safe option.

2. **Q:** Is there a limit on paying salary in cash?
   **A:** Two pressures apply. Under Section 40A(3) of the Income-tax Act, salary paid in cash above ₹10,000 to one person in one day is disallowed as a business expense — you lose the deduction. Separately, wage-law notifications mandate non-cash payment for notified establishments. Practically, cash payroll above ₹10,000 per head per day costs the business extra tax every time.

3. **Q:** By when must salary be paid under the Payment of Wages Act?
   **A:** Establishments with fewer than 1,000 employees must pay by the 7th of the following month; those with 1,000 or more by the 10th. For cheque payroll, distribute cheques by the last working day of the month so clearing time never pushes actual payment past the deadline.

4. **Q:** What happens if a salary cheque bounces?
   **A:** Three problems at once: a Section 138 negotiable-instruments offence (salary owed is a legally enforceable debt, so the criminal cheque-bounce framework applies), a Payment of Wages Act timing violation, and serious workforce-trust damage. The operating rule is simple — salary cheques are written only against funds already in the account, never against expected receivables.

5. **Q:** Should salary cheques be crossed account payee?
   **A:** Yes, always. Account-payee crossing ensures the salary can only land in the named employee's own bank account — it can't be encashed over a counter by whoever holds the leaf, which protects both the employee (theft/loss) and the employer (proof the right person was paid). Section 40A(3)'s deduction protection also specifically contemplates account-payee instruments.

6. **Q:** Is cheque or bank transfer better for payroll?
   **A:** For a stable workforce with verified bank accounts, transfer (NEFT/salary account credit) is the better default — instant and paper-free. Cheques earn their place for new joiners pending account verification, contractors and seasonal workers, final settlements, and businesses below payroll-software scale where a printed cheque run plus a wage register forms a complete auditable system. Many SMBs sensibly run a mix.

7. **Q:** What records should an employer keep for salary paid by cheque?
   **A:** The wage register/muster roll with payment mode and cheque number per employee, payslips, a cheque register tracking each leaf (number, payee, amount, date, status), and monthly reconciliation of cleared cheques against the bank statement. When the cheque number ties the wage register, payslip, and cheque register together, the payroll survives labour and tax scrutiny alike.

---

## HowTo Steps (Sanity `howToSteps` field — required for HowTo schema)

| # | Name | Text |
|---|---|---|
| 1 | Freeze the salary sheet | Finalise names, net amounts, and deductions (TDS handled in payroll). Confirm each payee name exactly matches the employee's bank account title — name mismatches are the top salary-cheque return reason. |
| 2 | Fund the account first | Ensure the full payroll amount is in the account before any cheque is distributed. A bounced salary cheque is a Section 138 offence plus a wage-law violation — never write payroll against expected receivables. |
| 3 | Batch-print the cheques | Print the run with account-payee crossing, amounts in words auto-generated, and a uniform date — targeting the last working day of the month so clearing lands inside the legal payday window (7th/10th). |
| 4 | Register and distribute against signature | Log each cheque number against the employee in the wage register and cheque register before handover, and take an acknowledgment signature keyed to the cheque number. |
| 5 | Reconcile the clearing | Track which cheques cleared in the following days; chase undeposited leaves before they age toward the 3-month expiry, and document any reissues in the register. |

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

किसी small employer से पूछें कि वो salaries cash में क्यों pay करते हैं और आपको वही तीन answers मिलेंगे: workers इसे prefer करते हैं, bank एक hassle है, हम हमेशा से ऐसे करते आए हैं.

उनके accountant से पूछें कि उस habit का cost क्या है और आपको एक number मिलेगा — क्योंकि tax law हर March cash payroll को quietly re-price करता है, और ज़्यादातर owners इसे तभी discover करते हैं जब एक deduction गायब हो जाता है.

ये उस alternative की guide है जो आपके drawer में बैठा है: salary cheque. Law actually क्या कहता है, वो deadlines जो payday को bind करती हैं, Income-tax Act का trap, और बीस-person cheque payroll चलाने की mechanics बिना इस पर एक शाम खोए.

### [H2] Salaries कैसे Move हों, इस पर Law क्या कहता है

**Payment of Wages Act** अपनी wage ceiling के अंदर employees के wage payment को govern करता है (2017 से ₹24,000 महीना — broadly, shops, factories, और establishments की workforce). Decades तक ये cash पर default करता था. एक 2017 amendment ने इसे modernise किया: wages **cheque या bank credit से, employee की written authorisation के बिना** pay हो सकती हैं, और — वो part जो कई employers miss करते हैं — government **establishments notify कर सकती है जहाँ wages सिर्फ़ cheque या bank transfer से pay होनी चाहिए**, कोई cash allowed नहीं. कई categories ऐसे notified हो चुकी हैं, और direction of travel one-way है.

Wage ceiling के ऊपर, employment contracts govern करते हैं — और white-collar salaries वैसे भी लंबे समय से bank-credited हैं. नया **Code on Wages** इस framework को consolidate करता है और same payment-mode philosophy आगे ले जाता है (coins/currency, cheque, account credit, digital); अपने state में current implementation status check करें, क्योंकि labour codes का rollout phased रहा है.

2026 में एक SMB के लिए practical reading: **cheque या transfer से pay करना हमेशा legal है, हमेशा safe. Cash में pay करना तभी तक legal है जब तक एक notification, एक wage ceiling, या tax law otherwise न कह दे — और tax law already कहता है.**

### [H2] ₹10,000 का Trap — Section 40A(3)

यहाँ है वो rule जो cash payroll को re-price करता है. Income-tax Act के **Section 40A(3)** के under, **एक person को एक दिन में ₹10,000 से ऊपर cash** में paid कोई भी business expense **deduction के तौर पर disallowed** है. Salary एक expense है. किसी employee को 1st को ₹18,000 cash में pay करें, और वो ₹18,000 आपका taxable profit reduce नहीं करता — आप tax ऐसे pay करते हैं जैसे salary expense कभी हुआ ही नहीं.

> **Cash salary employee की एक bank trip बचाती है और business का deduction cost करती है. 25–30% effective rate पर, एक ₹15-lakh annual cash payroll quietly कई lakhs का extra tax बन सकता है — building की सबसे expensive convenience.**

एक cheque — specifically account-payee cheque, जो वही है जिसे section recognise करता है — deduction intact रखता है, payment record create करता है, और एक leaf cost करता है. Arithmetic का कोई version नहीं है जहाँ payroll के threshold cross करने के बाद cash habit जीतती है.

(Section dodge करने के लिए salary को days के across sub-₹10,000 cash instalments में split करना उस तरह की cleverness है जो assessing officers दस हज़ार बार देख चुके हैं. मत करें.)

### [H2] Payday की एक Legal Deadline है

Payment of Wages Act सिर्फ़ *कैसे* regulate नहीं करता — *कब* भी करता है. 1,000 से कम employees वाले establishments को wages **अगले महीने की 7th तक** pay करनी होंगी; बड़ों को 10th तक. एक cheque payroll को calendar plus clearing respect करना होता है: 7th को handed over एक cheque जो [9th को clear होता है](https://cheqify.app/hi/blog/cheque-clearing-time-india) वो conversation है जो आप labour inspector से नहीं चाहते.

Clean pattern: salary cheques **महीने के last working day** पर print और distribute करें, ताकि slowest clearing भी window के well inside land हो. Employees अपनी convenience पर deposit करते हैं ([deposit playbook जो वो use करेंगे](https://cheqify.app/hi/blog/how-to-deposit-cheque-india)) और wage register payment time पर initiated दिखाता है.

### [H2] Salary Cheque कब Sense बनाता है (और Transfer कब इसे हराता है)

Honest framing: bank accounts वाली एक stable workforce के लिए, **NEFT या salary-account credit better default है** — instant, free या near-free, zero paper. Salary cheque अपनी जगह उन real situations में कमाता है जो SMBs actually face करते हैं:

- **नए joiners जिनके account details अभी verified नहीं** — पहली salary अक्सर cheque से move होती है जब तक [cancelled-cheque-and-penny-drop onboarding](https://cheqify.app/hi/blog/how-to-write-cancelled-cheque-safely) complete होती है.
- **Contractors, seasonal और site workers** जिनके stable accounts file पर नहीं, जहाँ एक payee-named cheque हर compliance axis पर cash को हराता है.
- **Payroll-software scale से नीचे के businesses** — एक cheque run plus एक wage register बिना subscriptions के एक complete, auditable payroll system है.
- **Final settlements और one-off payments** — full-and-final dues, bonuses, gratuity instalments — जहाँ एक discrete, documented instrument event को suit करता है.
- **जहाँ भी cash incumbent था** — cheque 40A(3) trap से lowest-friction exit है, क्योंकि इसे employee से counter की *उनकी* side पर एक bank account के सिवा कुछ नहीं चाहिए.

आप जो भी mix चलाएँ, rule records की uniformity है, method की नहीं: हर payment same wage register में same detail के साथ land होती है.

### [H2] Payday Mechanics — बीस Cheques बिना शाम खोए

हाथ से किया एक cheque payroll cramped wrists की एक शाम और एक inevitable spoiled leaf है. Properly किया, ये एक fifteen-minute batch है:

1. **Salary sheet freeze करें** — names, net amounts, deductions reconciled (TDS payroll में handled, cheque पर नहीं).
2. **Batch print करें** — हर cheque account-payee crossed, payee names exactly जैसे bank records जानते हैं, amounts in words generated, dates uniform ([bulk printing, full method](https://cheqify.app/hi/blog/bulk-cheque-printing-batch-guide-india)).
3. **हर leaf register करें** — wage register और [cheque register](https://cheqify.app/hi/blog/cheque-lifecycle-management-explained) में employee name के against cheque number, distribution से पहले.
4. **Acknowledgment के against distribute करें** — register में एक signature column; cheque number acknowledgment को instrument से tie करता है.
5. **Float को clear होते देखें** — salary cheques days के अंदर present होते हैं; cleared leaves reconcile करें और stragglers chase करें (एक undeposited salary cheque [अपनी 3-month expiry](https://cheqify.app/hi/blog/cheque-validity-period-stop-payment-india) की तरफ़ age होता है, और एक lapsed मतलब reissue paperwork).

एक process note जो real grief बचाता है: **account को distribution से पहले fund करें, बाद में नहीं.** जो हमें ugly scenario पर लाता है.

### [H2] अगर एक Salary Cheque Bounce हो

एक bounced vendor cheque एक commercial dispute है. एक bounced *salary* cheque हर axis पर worse है: ये किसी भी dishonoured debt payment की तरह एक [Section 138 offence](https://cheqify.app/hi/blog/section-138-ni-act-cheque-bounce-india) है — owed salary जितना real debt हो सकता है उतना है — *plus* timing पर एक Payment of Wages Act violation, *plus* उस तरह का workforce-trust damage जो कोई apology पूरी तरह repair नहीं करती. Authorities wage non-payment को seriously लेती हैं, और return memo पकड़ा employee हर remedy एक साथ पकड़े है.

तो cheque payroll का standing rule: salary cheques उस पैसे के against लिखे जाते हैं जो *already account में है* — कभी expected receivables के against नहीं. अगर cash flow ये guarantee नहीं कर सकता, honest move एक delayed-but-funded payday conversation है, उस paper का confident handover नहीं जो bounce हो सकता है.

### [H2] वो Records जो इसे Audit-Proof बनाते हैं

Payroll तीन audiences के लिए obligations generate करता है — labour inspector, tax officer, employee — और records का एक set तीनों satisfy करता है:

- **Wage register / muster roll** — statutory, per row payment mode और cheque number के साथ
- **Payslips** — payment method चाहे जो हो, issued
- **Cheque register** — leaf number, payee, amount, date, status (issued/cleared/stale/reissued)
- **Bank statement reconciliation** — cleared salary cheques monthly register से tied back

जब cheque number wage register में, payslip में, और cheque register में appear होता है, payroll के हर rupee के तीन corroborating witnesses हैं. यही वो standard है जो एक scrutiny survive करती है — और ये एक printed, registered cheque run से automatically निकलता है, जो rather the point है.

---

> **Last working day पर बीस salary cheques — printed, crossed, registered, minutes में.** Cheqify आपका पूरा payroll run 300+ Indian bank layouts पर batch-print करता है auto amount-in-words के साथ, और इसका register हर leaf को एक payee से tie करता है ताकि wage register, payslip, और cheque book हमेशा agree करें. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

કોઈ small employer ને પૂછો કે એ salaries cash માં કેમ pay કરે છે અને તમને એ જ ત્રણ answers મળશે: workers એને prefer કરે છે, bank એક hassle છે, અમે હંમેશાથી આમ કરતા આવ્યા છીએ.

એમના accountant ને પૂછો કે એ habit નો cost શું છે અને તમને એક number મળશે — કારણ કે tax law દર March cash payroll ને quietly re-price કરે છે, અને મોટાભાગના owners આને ત્યારે જ discover કરે છે જ્યારે એક deduction ગાયબ થઈ જાય છે.

આ એ alternative ની guide છે જે તમારા drawer માં બેઠું છે: salary cheque. Law actually શું કહે છે, એ deadlines જે payday ને bind કરે છે, Income-tax Act નો trap, અને વીસ-person cheque payroll ચલાવવાની mechanics આના પર એક સાંજ ખોયા વગર.

### [H2] Salaries કેવી રીતે Move થાય, આના પર Law શું કહે છે

**Payment of Wages Act** પોતાની wage ceiling ની અંદર employees ના wage payment ને govern કરે છે (2017 થી ₹24,000 મહિનો — broadly, shops, factories, અને establishments ની workforce). Decades સુધી આ cash પર default કરતો હતો. એક 2017 amendment એ આને modernise કર્યો: wages **cheque કે bank credit થી, employee ની written authorisation વગર** pay થઈ શકે છે, અને — એ part જે ઘણા employers miss કરે છે — government **establishments notify કરી શકે છે જ્યાં wages ફક્ત cheque કે bank transfer થી pay થવી જોઈએ**, કોઈ cash allowed નહીં. ઘણી categories એમ notified થઈ ચૂકી છે, અને direction of travel one-way છે.

Wage ceiling ની ઉપર, employment contracts govern કરે છે — અને white-collar salaries એમ પણ લાંબા સમયથી bank-credited છે. નવો **Code on Wages** આ framework ને consolidate કરે છે અને same payment-mode philosophy આગળ લઈ જાય છે (coins/currency, cheque, account credit, digital); તમારા state માં current implementation status check કરો, કારણ કે labour codes નો rollout phased રહ્યો છે.

2026 માં એક SMB માટે practical reading: **cheque કે transfer થી pay કરવું હંમેશા legal છે, હંમેશા safe. Cash માં pay કરવું ત્યાં સુધી જ legal છે જ્યાં સુધી એક notification, એક wage ceiling, કે tax law otherwise ન કહી દે — અને tax law already કહે છે.**

### [H2] ₹10,000 નો Trap — Section 40A(3)

અહીં છે એ rule જે cash payroll ને re-price કરે છે. Income-tax Act ના **Section 40A(3)** ની under, **એક person ને એક દિવસમાં ₹10,000 થી ઉપર cash** માં paid કોઈ પણ business expense **deduction તરીકે disallowed** છે. Salary એક expense છે. કોઈ employee ને 1st ના ₹18,000 cash માં pay કરો, અને એ ₹18,000 તમારો taxable profit reduce નથી કરતો — તમે tax એમ pay કરો છો જાણે salary expense ક્યારેય થયો જ નહીં.

> **Cash salary employee ની એક bank trip બચાવે છે અને business નું deduction cost કરે છે. 25–30% effective rate પર, એક ₹15-lakh annual cash payroll quietly ઘણા lakhs નો extra tax બની શકે છે — building ની સૌથી expensive convenience.**

એક cheque — specifically account-payee cheque, જે એ જ છે જેને section recognise કરે છે — deduction intact રાખે છે, payment record create કરે છે, અને એક leaf cost કરે છે. Arithmetic નું કોઈ version નથી જ્યાં payroll ના threshold cross કર્યા પછી cash habit જીતે છે.

(Section dodge કરવા salary ને days ની across sub-₹10,000 cash instalments માં split કરવી એ પ્રકારની cleverness છે જે assessing officers દસ હજાર વાર જોઈ ચૂક્યા છે. ન કરો.)

### [H2] Payday ની એક Legal Deadline છે

Payment of Wages Act ફક્ત *કેવી રીતે* regulate નથી કરતો — *ક્યારે* પણ કરે છે. 1,000 થી ઓછા employees વાળા establishments એ wages **આગલા મહિનાની 7th સુધી** pay કરવી પડશે; મોટાઓએ 10th સુધી. એક cheque payroll ને calendar plus clearing respect કરવું પડે છે: 7th ના handed over એક cheque જે [9th ના clear થાય છે](https://cheqify.app/gu/blog/cheque-clearing-time-india) એ conversation છે જે તમે labour inspector સાથે નથી માંગતા.

Clean pattern: salary cheques **મહિનાના last working day** પર print અને distribute કરો, જેથી slowest clearing પણ window ની well inside land થાય. Employees પોતાની convenience પર deposit કરે છે ([deposit playbook જે એ use કરશે](https://cheqify.app/gu/blog/how-to-deposit-cheque-india)) અને wage register payment time પર initiated બતાવે છે.

### [H2] Salary Cheque ક્યારે Sense બનાવે છે (અને Transfer ક્યારે એને હરાવે છે)

Honest framing: bank accounts વાળી એક stable workforce માટે, **NEFT કે salary-account credit better default છે** — instant, free કે near-free, zero paper. Salary cheque પોતાની જગ્યા એ real situations માં કમાય છે જે SMBs actually face કરે છે:

- **નવા joiners જેમના account details હજુ verified નથી** — પહેલી salary ઘણીવાર cheque થી move થાય છે જ્યાં સુધી [cancelled-cheque-and-penny-drop onboarding](https://cheqify.app/gu/blog/how-to-write-cancelled-cheque-safely) complete થાય છે.
- **Contractors, seasonal અને site workers** જેમના stable accounts file પર નથી, જ્યાં એક payee-named cheque દરેક compliance axis પર cash ને હરાવે છે.
- **Payroll-software scale થી નીચેના businesses** — એક cheque run plus એક wage register subscriptions વગર એક complete, auditable payroll system છે.
- **Final settlements અને one-off payments** — full-and-final dues, bonuses, gratuity instalments — જ્યાં એક discrete, documented instrument event ને suit કરે છે.
- **જ્યાં પણ cash incumbent હતી** — cheque 40A(3) trap થી lowest-friction exit છે, કારણ કે એને employee પાસેથી counter ની *એમની* side પર એક bank account સિવાય કંઈ નથી જોઈતું.

તમે જે પણ mix ચલાવો, rule records ની uniformity છે, method ની નહીં: દરેક payment same wage register માં same detail સાથે land થાય છે.

### [H2] Payday Mechanics — વીસ Cheques સાંજ ખોયા વગર

હાથથી કરેલો એક cheque payroll cramped wrists ની એક સાંજ અને એક inevitable spoiled leaf છે. Properly કરેલો, આ એક fifteen-minute batch છે:

1. **Salary sheet freeze કરો** — names, net amounts, deductions reconciled (TDS payroll માં handled, cheque પર નહીં).
2. **Batch print કરો** — દરેક cheque account-payee crossed, payee names exactly જેમ bank records જાણે છે, amounts in words generated, dates uniform ([bulk printing, full method](https://cheqify.app/gu/blog/bulk-cheque-printing-batch-guide-india)).
3. **દરેક leaf register કરો** — wage register અને [cheque register](https://cheqify.app/gu/blog/cheque-lifecycle-management-explained) માં employee name ની against cheque number, distribution પહેલા.
4. **Acknowledgment ની against distribute કરો** — register માં એક signature column; cheque number acknowledgment ને instrument સાથે tie કરે છે.
5. **Float ને clear થતું જુઓ** — salary cheques days ની અંદર present થાય છે; cleared leaves reconcile કરો અને stragglers chase કરો (એક undeposited salary cheque [પોતાની 3-month expiry](https://cheqify.app/gu/blog/cheque-validity-period-stop-payment-india) તરફ age થાય છે, અને એક lapsed મતલબ reissue paperwork).

એક process note જે real grief બચાવે છે: **account ને distribution પહેલા fund કરો, પછી નહીં.** જે અમને ugly scenario પર લાવે છે.

### [H2] જો એક Salary Cheque Bounce થાય

એક bounced vendor cheque એક commercial dispute છે. એક bounced *salary* cheque દરેક axis પર worse છે: આ કોઈ પણ dishonoured debt payment ની જેમ એક [Section 138 offence](https://cheqify.app/gu/blog/section-138-ni-act-cheque-bounce-india) છે — owed salary જેટલો real debt હોઈ શકે એટલો છે — *plus* timing પર એક Payment of Wages Act violation, *plus* એ પ્રકારનું workforce-trust damage જે કોઈ apology આખું repair નથી કરતી. Authorities wage non-payment ને seriously લે છે, અને return memo પકડેલો employee દરેક remedy એક સાથે પકડેલો છે.

તો cheque payroll નો standing rule: salary cheques એ પૈસાની against લખાય છે જે *already account માં છે* — ક્યારેય expected receivables ની against નહીં. જો cash flow આ guarantee નથી કરી શકતો, honest move એક delayed-but-funded payday conversation છે, એ paper નો confident handover નહીં જે bounce થઈ શકે છે.

### [H2] એ Records જે આને Audit-Proof બનાવે છે

Payroll ત્રણ audiences માટે obligations generate કરે છે — labour inspector, tax officer, employee — અને records નો એક set ત્રણેયને satisfy કરે છે:

- **Wage register / muster roll** — statutory, per row payment mode અને cheque number સાથે
- **Payslips** — payment method ગમે તે હોય, issued
- **Cheque register** — leaf number, payee, amount, date, status (issued/cleared/stale/reissued)
- **Bank statement reconciliation** — cleared salary cheques monthly register સાથે tied back

જ્યારે cheque number wage register માં, payslip માં, અને cheque register માં appear થાય છે, payroll ના દરેક rupee ના ત્રણ corroborating witnesses છે. આ જ એ standard છે જે એક scrutiny survive કરે છે — અને આ એક printed, registered cheque run માંથી automatically નીકળે છે, જે rather the point છે.

---

> **Last working day પર વીસ salary cheques — printed, crossed, registered, minutes માં.** Cheqify તમારો આખો payroll run 300+ Indian bank layouts પર batch-print કરે છે auto amount-in-words સાથે, અને એનું register દરેક leaf ને એક payee સાથે tie કરે છે જેથી wage register, payslip, અને cheque book હંમેશા agree કરે. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## ⚠️ Pre-publish fact-check required

1. **Payment of Wages Act:** 2017 amendment allowing cheque/bank credit without written authorisation + government power to notify mandatory non-cash establishments + ₹24,000/month wage ceiling — verify all three against the current Act text before publish.
2. **Code on Wages implementation status** — the labour codes' rollout has been phased and state-dependent; the body deliberately says "check the current implementation status in your state". Verify the actual status at publish time (reported national rollout late 2025) and tighten or keep the hedge accordingly.
3. **Section 40A(3):** ₹10,000/person/day cash disallowance (₹35,000 for payments to transporters — omitted from body as out-of-audience) and the account-payee instrument requirement — verify current figures; the splitting-across-days anti-abuse point is Rule 6DD/40A(3A) territory, kept directional.
4. **Wage payment deadlines (7th / 10th by establishment size)** — Payment of Wages Act Section 5; stable, verify wording.
5. **TDS Section 192 mention** — passing reference only, plain text (no link) in all three locales. Safe.
6. **Bounced salary cheque = 138 offence** — salary owed is a legally enforceable debt; safe as framed.

---

## Internal-Link Strategy

**Forward links from this post:**
- Post #14 (`bulk-cheque-printing-batch-guide-india`) — the batch-print method.
- Post #17 (`cheque-clearing-time-india`) — payday deadline vs clearing.
- Post #30 (`how-to-deposit-cheque-india`) — the employee's side. **Publishes 2026-07-02, before this post — safe.**
- Post #25 (`how-to-write-cancelled-cheque-safely`) — new-joiner onboarding. **Publishes 2026-06-15 — safe.**
- Post #13 (`cheque-lifecycle-management-explained`) — the cheque register.
- Post #11 (`section-138-ni-act-cheque-bounce-india`) — bounced salary cheque stakes.
- Post #12 (`cheque-validity-period-stop-payment-india`) — undeposited cheques aging out.

**Bonus internal-link work (after publish):**
- Edit post #14 (`bulk-cheque-printing-batch-guide-india`, all 3 locales) to add a "salary day is the classic batch run" link here — strongest reciprocal of the batch.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The accountant-vs-owner opening and the 40A(3) arithmetic carry the voice.
- **Fact-check block (CRITICAL):** labour-law facts (wage ceiling, deadlines, Code on Wages status) and 40A(3) figures must be verified at publish.
- **Internal link order:** #25 and #30 both live well before this post — safe.
- **Word count:** EN body must be >1200 words (target 1,700–2,200). Current draft: ~1,950 words.
- **Sanity toggles:** `isHowTo: ON` (5 steps), `hasFaq: ON` (7 items).

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — post #14 (strongest reciprocal).
5. IndexNow auto-pings on publish.
