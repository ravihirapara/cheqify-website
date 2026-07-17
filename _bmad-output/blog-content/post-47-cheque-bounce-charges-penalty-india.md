# Blog Post #47 — Cheque Bounce Charges & Penalties in India — The Full Cost, Layer by Layer (2026)

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

### Sanity block styles in this draft

**Apply as Callout block (grey rounded box):**
- `> **A bounce starts as a bookkeeping failure...** / **एक bounce एक bookkeeping failure...** / **એક bounce એક bookkeeping failure...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **The return charge is the cheapest line on the invoice...** / **Return charge invoice की सबसे सस्ती line है...** / **Return charge invoice ની સૌથી સસ્તી line છે...**` (pull quote in each body) → **Quote**

**Paste as Sanity Table block (`@sanity/table`):**
- The **illustrative bank-charges table** under "The First Debit" heading — in **all three bodies**. Rebuild it row-by-row in the Sanity Table editor; do NOT paste as plain text. Keep the "illustrative — verify current schedule of charges" line as a normal paragraph immediately below the table.

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

"Cheque bounce charges" is one of the highest-intent panic searches in the cheque space — someone just got a return memo and wants to know what it will cost them. No live post prices the bounce end to end: post #2 covers *why* cheques bounce, post #11 covers the Section 138 court process, but nothing stacks the layers — bank return charges (drawer and depositor sides), the RBI repeated-dishonour consequences, and the criminal ceiling — into one invoice. Strong product fit: Cheqify's register and status tracking is exactly the "know your float before you write" habit that keeps the meter at zero. Cluster fit: #2 (reasons), #11 (Section 138), and it becomes the natural money-anchor both can link back to.

---

## Sanity Fields

- **Slug:** `cheque-bounce-charges-penalty-india`
- **Tags:** `Banking & RBI`, `Cheque Guide`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** NO
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Ravi-managed — no fixed date
- **Primary keyword:** `cheque bounce charges`
- **Secondary keywords:** cheque bounce penalty India, cheque return charges SBI HDFC ICICI Axis, cheque dishonour charges, Section 138 punishment, cheque bounce fine, repeated cheque bounce RBI rule
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/cheque-bounce-charges-penalty-india`
  - HI: `https://cheqify.app/hi/blog/cheque-bounce-charges-penalty-india`
  - GU: `https://cheqify.app/gu/blog/cheque-bounce-charges-penalty-india`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `cheque-bounce-charges-penalty-india-cover.webp`
- **Subject:** A cheque return memo clipped to a bounced cheque, stamped "RETURNED — INSUFFICIENT FUNDS", with a receipt-style strip of stacked charges unrolling beside it (bank charge, GST, penalty lines) and, faint in the background, the outline of a court gavel — the escalation implied, not dramatised. Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** Cheque bounce charges and penalties in India — a return memo with bank charges stacking up and Section 138 consequences looming.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Cheque Bounce Charges & Penalties in India — The Full Cost, Layer by Layer (2026)
- **HI:** India में Cheque Bounce Charges और Penalties — पूरा Cost, Layer by Layer (2026)
- **GU:** India માં Cheque Bounce Charges અને Penalties — આખો Cost, Layer by Layer (2026)

---

## Descriptions

- **EN:** A bounced cheque never sends one bill. Your bank debits a return charge (typically a few hundred rupees plus GST), the depositor's bank charges them too, repeated dishonour can cost you the cheque book itself, and Section 138 prices the worst case at up to twice the cheque amount — or two years. Here's the full invoice, bank by bank and layer by layer, and how to keep it at zero.
- **HI:** एक bounced cheque कभी एक bill नहीं भेजता. आपका bank एक return charge debit करता है (typically कुछ सौ rupees plus GST), depositor का bank उन्हें भी charge करता है, repeated dishonour आपसे cheque book ही छीन सकता है, और Section 138 worst case की price cheque amount के दोगुने तक — या दो साल — लगाता है. यहाँ है पूरा invoice, bank by bank और layer by layer, और इसे zero पर कैसे रखें.
- **GU:** એક bounced cheque ક્યારેય એક bill નથી મોકલતો. તમારો bank એક return charge debit કરે છે (typically થોડાક સો rupees plus GST), depositor નો bank એમને પણ charge કરે છે, repeated dishonour તમારી પાસેથી cheque book જ છીનવી શકે છે, અને Section 138 worst case ની price cheque amount ના બમણા સુધી — કે બે વર્ષ — લગાવે છે. અહીં છે આખું invoice, bank by bank અને layer by layer, અને એને zero પર કેવી રીતે રાખવું.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

A cheque bounce never sends one bill. It sends four — spaced just far enough apart that most people never add them up.

The first arrives before you've finished reading the return memo: your bank debits its return charge the same day, quietly, the way banks do. The second lands on the other side of the counter — the person who deposited your cheque gets charged by *their* bank for the privilege of receiving bad paper. The third is slower and worse: bounce often enough and the bank starts treating your cheque book as a risk to be managed, not a facility to be renewed. And the fourth, if the payee decides to escalate, is the Negotiable Instruments Act — which prices a dishonoured cheque at up to twice its face value, with a courtroom attached.

This is the full invoice, layer by layer. What each layer actually costs in 2026, where the numbers come from, and the two habits that keep the meter at zero.

### [H2] The First Debit — What Your Own Bank Charges You

When a cheque you issued returns unpaid — insufficient funds is the classic, though [the return-reason list runs much longer](https://cheqify.app/en/blog/cheque-bounce-reasons-and-solutions) — your bank levies a **cheque return charge** on your account, usually the same working day. Three things about this charge are worth knowing before the table:

- **It's per instrument, per presentation.** If the payee re-presents the same cheque and it bounces again, you're charged again. Two presentations, two debits.
- **GST rides on top.** Bank charges attract GST at 18%, so a "₹500 charge" leaves your account as ₹590.
- **Repeat offenders pay more.** Several banks price the second and third return in a month or quarter higher than the first — the schedule of charges is written to discourage the pattern, not just the event.

The exact figure moves with each bank's schedule of charges, but the honest range for a funds-related return at a major bank in 2026 is **a few hundred rupees per bounce — roughly ₹300 to ₹750, plus GST**. Here's the representative picture:

| Bank | Cheque you issued, returned (insufficient funds) | Cheque you deposited, returned |
|---|---|---|
| SBI | ≈ ₹500 + GST | ≈ ₹150–₹250 + GST |
| HDFC Bank | ≈ ₹350–₹750 + GST (higher for repeat returns in a quarter) | ≈ ₹100–₹225 + GST |
| ICICI Bank | ≈ ₹500 first return, ≈ ₹550 from the second in a month, + GST | ≈ ₹100–₹225 + GST |
| Axis Bank | ≈ ₹500 + GST | ≈ ₹100–₹250 + GST |

*Illustrative figures only — bank charge schedules change without ceremony and vary by account type. Verify your bank's current schedule of charges before quoting any number.*

One nuance the schedules bury: the *reason* for the return matters. Funds-related returns (insufficient funds, "exceeds arrangement") sit at the top of the charge sheet. Technical returns — a signature mismatch, a date problem, a correction the bank didn't like — are often charged lower, or charged to the depositor instead. The bank's pricing quietly tells you what it considers your fault.

And don't confuse the return charge with the stop-payment fee. Instructing your bank to stop a cheque is a separate, smaller charge you pay *deliberately* — and when the stopped cheque is later presented and returned, that return can be charged too. Two fees for one leaf, both self-inflicted, both cheaper than the alternative you were stopping.

### [H2] The Other Side of the Counter — When You're the Depositor

Here's the part that surprises people: the person holding the bounced cheque pays too. Deposit a cheque that returns, and your bank debits a **cheque return charge on the deposit side** — smaller than the drawer's charge, typically ₹100 to ₹250 plus GST, but real.

It feels unjust — you did nothing wrong — and the banks' answer is that the charge covers the processing of the return, not the blame. Either way, the practical lesson for a business that *receives* cheques is the same one the drawer should learn: a bounce costs both parties money on day one, before anyone has even argued about the underlying payment. The depositor also carries the cost nobody invoices — the money they planned around that didn't arrive.

### [H2] The Pattern Penalty — What Repeated Bounces Trigger

Banks don't just charge for bounces. They *count* them.

The RBI's guidance to banks is explicit at the top end: where a cheque of **₹1 crore or more** is returned for insufficient funds **four times or more in a financial year**, the bank may consider **withdrawing the cheque book facility** — and, for a current account, even closing the account — after due notice. That's the headline rule, and most banks have written the same philosophy into their own board-approved policies at much smaller thresholds: repeated funds-related returns get your account flagged, your cheque book renewal reviewed, and your relationship manager suddenly formal.

The pattern follows you beyond the branch, too. A bounced cheque that was servicing a loan EMI is reported into the credit bureaus as a missed payment — and a missed payment on a credit report outlives the apology by years.

Run the numbers on even a modest pattern and the pricing logic becomes obvious. Three bounces in a quarter at ₹590 each is ₹1,770 in pure charges — annoying, survivable. But those same three bounces, sitting in the bank's records when your working-capital limit comes up for renewal, are the difference between a routine sanction and a meeting where you explain your cash-flow discipline to someone taking notes.

> **The return charge is the cheapest line on the invoice. Everything after it is priced in trust — the bank's, the payee's, and eventually a magistrate's.**

### [H2] The Criminal Layer — Section 138 and the Real Ceiling

Everything above is commerce. This layer is criminal law.

Under **Section 138 of the Negotiable Instruments Act**, a cheque that bounces for insufficient funds (or because it "exceeds arrangement") — when it was issued against a legally enforceable debt — is a criminal offence. The penalty ceiling: **a fine of up to twice the cheque amount, imprisonment of up to two years, or both.** A ₹5-lakh cheque carries a theoretical ₹10-lakh fine. That is the number that turns a bookkeeping failure into a life event.

The law gives the drawer one structured exit, and it runs on a clock:

1. The cheque must have been presented within its **3-month validity**.
2. On dishonour, the payee sends a **written demand notice within 30 days** of receiving the return memo.
3. The drawer then has **15 days from receiving the notice** to pay the cheque amount in full.
4. Pay within those 15 days and the offence never crystallises. Miss them, and the payee can **file a criminal complaint within one month** — and courts can additionally order interim compensation of up to 20% of the cheque amount while the case runs.

Two mercies soften the ceiling in practice. Section 138 is a compoundable offence — the parties can settle at any stage, and courts actively push cheque-bounce cases toward settlement because the dockets are drowning in them. And the penalty is a ceiling, not a schedule: actual outcomes depend on the amount, the conduct, and how early the drawer makes good. But "usually settles" is a description of other people's cases, not a plan for yours.

[The full Section 138 process — notice drafting, court stages, defences — is its own guide.](https://cheqify.app/en/blog/section-138-ni-act-cheque-bounce-india) The point here is narrower: the 15-day window after the notice is the last moment a bounce can be fixed with money alone. Every day after that, it's fixed with lawyers.

### [H2] The Costs Nobody Itemises

Stack the official layers and you still haven't priced the whole event. The quiet costs:

- **The credit footprint.** EMI and loan-repayment cheques that bounce land on your CIBIL report as missed payments. The bounce charge is ₹500; the higher interest rate on your next loan is not.
- **Lender penalties on top of bank charges.** When the bounced cheque was paying a lender, you pay twice — your bank's return charge *plus* the lender's bounce penalty and penal interest on the delayed EMI.
- **The vendor maths.** A supplier who has eaten one bounced cheque re-prices you: advance payment terms, smaller credit windows, or simply "UPI only, please." That costs more than any charge schedule.
- **The admin tax.** Reissuing the cheque, reconciling the reversed entry, the apologetic phone call, the re-presentation float — an hour of unglamorous work per bounce that never appears on any statement.

### [H2] Keeping the Meter at Zero

Every layer above has the same off-switch, and it's boring: **cheques are written against money that is already in the account** — never against a receivable you're expecting, a transfer that's "definitely coming," or a customer's promise.

Two habits make that rule survivable in a real business:

- **Know your float.** The cheques you've issued that haven't been presented yet are a silent claim on your balance. A [cheque register that tracks every leaf and its status](https://cheqify.app/en/blog/cheque-bounce-reasons-and-solutions) — issued, presented, cleared — turns "I think there's enough" into a number you can actually check before writing the next cheque.
- **Respect the post-dated calendar.** A post-dated cheque you issued in January is a debit that fires in March. If it isn't on a calendar with an alert before the date, it's a bounce with a delay timer.

A third habit, for businesses that can afford it: keep a standing buffer in the cheque-issuing account — a month's worth of typical cheque outflow that nothing else is allowed to touch. It converts the occasional timing accident (a customer's payment landing a day late) from a bounce into a non-event.

The arithmetic is lopsided in prevention's favour. The habit costs minutes a week. The bounce costs a few hundred rupees on the good days — and on the bad ones, twice the cheque amount and a court date.

---

> **A bounce starts as a bookkeeping failure — a cheque you forgot you'd written.** Cheqify's register tracks every cheque you print — payee, amount, date, status from issued to cleared — so your float is a number, not a guess, and no leaf fires against an empty account. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** What are the cheque bounce charges in India?
   **A:** When a cheque you issued returns for insufficient funds, your bank levies a return charge of roughly ₹300–₹750 plus 18% GST, depending on the bank and your account type — SBI, HDFC, ICICI, and Axis all sit around the ₹350–₹750 band. The charge applies per presentation, so a re-presented cheque that bounces again is charged again, and several banks price repeat returns higher. Always verify your bank's current schedule of charges.

2. **Q:** Who pays cheque bounce charges — the person who wrote the cheque or the one who deposited it?
   **A:** Both, separately. The drawer (writer) pays the larger charge — typically a few hundred rupees plus GST — debited by their own bank. The depositor also pays a smaller return charge, usually ₹100–₹250 plus GST, to their bank for processing the returned instrument. For technical returns like a signature mismatch, some banks shift or reduce charges, but a funds-related bounce costs both sides money on day one.

3. **Q:** What is the maximum penalty for cheque bounce under Section 138?
   **A:** If the bounced cheque was issued against a legally enforceable debt, Section 138 of the Negotiable Instruments Act makes the dishonour a criminal offence punishable with a fine of up to twice the cheque amount, imprisonment of up to two years, or both. Courts can also order interim compensation of up to 20% of the cheque amount while the case is pending. Paying the full amount within 15 days of the payee's demand notice prevents the offence from crystallising.

4. **Q:** Can a bank stop my cheque book or close my account for repeated bounces?
   **A:** Yes. RBI guidance lets banks consider withdrawing the cheque book facility — and even closing current accounts — where cheques of ₹1 crore and above bounce four or more times in a financial year for insufficient funds, after due notice. Most banks extend the same philosophy through their own policies at smaller amounts: repeated funds-related returns flag the account, trigger reviews, and can end the cheque facility.

5. **Q:** What is the RBI rule about cheques of ₹1 crore bouncing four times?
   **A:** RBI has advised banks that where a cheque valued at ₹1 crore or more is returned four times or more in a financial year for want of funds, the bank may consider withdrawing the cheque book facility and, in the case of current accounts, closing the account after serving due notice. It's the regulatory ceiling of the repeated-dishonour framework — banks apply stricter internal versions below it. Verify the current circular text before relying on exact thresholds.

6. **Q:** Does a cheque bounce affect my CIBIL score?
   **A:** A bounce by itself isn't reported to credit bureaus — but a bounced cheque that was servicing a loan EMI or credit-card payment is reported by the lender as a missed or late payment, which does damage your CIBIL score. You also pay the lender's bounce penalty and penal interest on top of the bank's return charge. Business-to-business cheque bounces don't hit CIBIL directly but destroy vendor credit terms, which is its own kind of score.

7. **Q:** How do I avoid cheque bounce charges entirely?
   **A:** One rule and two habits. The rule: write cheques only against money already in the account, never against expected receipts. The habits: track your float — every issued-but-unpresented cheque is a pending debit, so keep a register with each leaf's status — and calendar every post-dated cheque with an alert before its date. Prevention costs minutes a week; a single bounce costs a few hundred rupees at best and a Section 138 case at worst.

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout. Rebuild the charges table as a Sanity Table.

---

एक cheque bounce कभी एक bill नहीं भेजता. वो चार भेजता है — बस इतनी दूर-दूर spaced कि ज़्यादातर लोग इन्हें कभी जोड़ते ही नहीं.

पहला आपके return memo पढ़ने से पहले पहुँच जाता है: आपका bank उसी दिन अपना return charge debit कर देता है, quietly, जैसे banks करते हैं. दूसरा counter की दूसरी side पर land होता है — जिसने आपका cheque deposit किया, उसे *उसका* bank bad paper receive करने के privilege के लिए charge करता है. तीसरा slower और worse है: बार-बार bounce करें और bank आपकी cheque book को renew की जाने वाली facility नहीं, manage किया जाने वाला risk समझने लगता है. और चौथा, अगर payee escalate करने का decide करे, तो Negotiable Instruments Act है — जो एक dishonoured cheque की price उसकी face value के दोगुने तक लगाता है, courtroom attached.

ये है पूरा invoice, layer by layer. 2026 में हर layer actually क्या cost करती है, numbers कहाँ से आते हैं, और वो दो habits जो meter को zero पर रखती हैं.

### [H2] पहला Debit — आपका अपना Bank आपसे क्या Charge करता है

जब आपका issued किया हुआ cheque unpaid return होता है — insufficient funds classic है, हालाँकि [return-reason list काफ़ी लंबी चलती है](https://cheqify.app/hi/blog/cheque-bounce-reasons-and-solutions) — आपका bank आपके account पर एक **cheque return charge** लगाता है, usually उसी working day. Table से पहले इस charge की तीन बातें जानने लायक हैं:

- **ये per instrument, per presentation है.** अगर payee same cheque फिर present करे और वो फिर bounce हो, आप फिर charged होते हैं. दो presentations, दो debits.
- **GST ऊपर चढ़ता है.** Bank charges पर 18% GST लगता है, तो एक "₹500 charge" आपके account से ₹590 के तौर पर निकलता है.
- **Repeat offenders ज़्यादा pay करते हैं.** कई banks एक month या quarter में दूसरे और तीसरे return की price पहले से ज़्यादा रखते हैं — schedule of charges pattern को discourage करने के लिए लिखा गया है, सिर्फ़ event को नहीं.

Exact figure हर bank की schedule of charges के साथ move करता है, पर 2026 में एक major bank पर funds-related return की honest range है **per bounce कुछ सौ rupees — roughly ₹300 से ₹750, plus GST**. यहाँ है representative picture:

| Bank | आपका issued cheque, returned (insufficient funds) | आपका deposited cheque, returned |
|---|---|---|
| SBI | ≈ ₹500 + GST | ≈ ₹150–₹250 + GST |
| HDFC Bank | ≈ ₹350–₹750 + GST (quarter में repeat returns पर ज़्यादा) | ≈ ₹100–₹225 + GST |
| ICICI Bank | ≈ ₹500 पहला return, ≈ ₹550 month में दूसरे से, + GST | ≈ ₹100–₹225 + GST |
| Axis Bank | ≈ ₹500 + GST | ≈ ₹100–₹250 + GST |

*Illustrative figures only — bank charge schedules बिना ceremony के change होती हैं और account type से vary करती हैं. कोई भी number quote करने से पहले अपने bank की current schedule of charges verify करें.*

एक nuance जो schedules छुपा देती हैं: return का *reason* matter करता है. Funds-related returns (insufficient funds, "exceeds arrangement") charge sheet के top पर बैठते हैं. Technical returns — एक signature mismatch, एक date problem, एक correction जो bank को पसंद नहीं आया — अक्सर lower charged होते हैं, या depositor को charge होते हैं. Bank की pricing quietly आपको बताती है कि वो किसे आपकी fault मानता है.

### [H2] Counter की दूसरी Side — जब आप Depositor हैं

यहाँ है वो part जो लोगों को surprise करता है: bounced cheque पकड़ा हुआ person भी pay करता है. ऐसा cheque deposit करें जो return हो, और आपका bank **deposit side पर एक cheque return charge** debit करता है — drawer के charge से छोटा, typically ₹100 से ₹250 plus GST, पर real.

ये unjust लगता है — आपने कुछ ग़लत नहीं किया — और banks का answer है कि charge return की processing cover करता है, blame नहीं. Either way, cheques *receive* करने वाले business के लिए practical lesson वही है जो drawer को सीखना चाहिए: एक bounce day one पर दोनों parties को पैसा cost करता है, underlying payment पर बहस शुरू होने से भी पहले. Depositor वो cost भी उठाता है जो कोई invoice नहीं करता — वो पैसा जिसके around उन्होंने plan किया था और जो आया नहीं.

### [H2] Pattern Penalty — Repeated Bounces क्या Trigger करते हैं

Banks bounces के लिए सिर्फ़ charge नहीं करते. वो इन्हें *गिनते* हैं.

Top end पर RBI की banks को guidance explicit है: जहाँ **₹1 crore या उससे ऊपर** का cheque एक financial year में **चार बार या उससे ज़्यादा** insufficient funds के लिए return हो, bank due notice के बाद **cheque book facility withdraw करने** — और current account के case में, account close करने तक — का consider कर सकता है. ये headline rule है, और ज़्यादातर banks ने same philosophy अपनी board-approved policies में काफ़ी छोटे thresholds पर लिख रखी है: repeated funds-related returns आपका account flag करवाते हैं, cheque book renewal review करवाते हैं, और relationship manager अचानक formal हो जाता है.

Pattern branch के बाहर भी आपका पीछा करता है. एक bounced cheque जो loan EMI service कर रहा था, credit bureaus में missed payment के तौर पर report होता है — और credit report पर एक missed payment apology से सालों ज़्यादा जीता है.

> **Return charge invoice की सबसे सस्ती line है. उसके बाद का सब कुछ trust में priced है — bank का, payee का, और eventually एक magistrate का.**

### [H2] Criminal Layer — Section 138 और असली Ceiling

ऊपर का सब commerce है. ये layer criminal law है.

**Negotiable Instruments Act के Section 138** के under, insufficient funds (या "exceeds arrangement") के लिए bounce हुआ cheque — जब वो एक legally enforceable debt के against issued था — एक criminal offence है. Penalty ceiling: **cheque amount के दोगुने तक fine, दो साल तक imprisonment, या दोनों.** एक ₹5-lakh cheque theoretical ₹10-lakh fine carry करता है. यही वो number है जो एक bookkeeping failure को एक life event बना देता है.

Law drawer को एक structured exit देता है, और वो एक clock पर चलता है:

1. Cheque अपनी **3-month validity** के अंदर presented होना चाहिए.
2. Dishonour पर, payee return memo मिलने के **30 days के अंदर एक written demand notice** भेजता है.
3. फिर drawer के पास notice मिलने से **15 days** हैं cheque amount पूरा pay करने के.
4. उन 15 days के अंदर pay करें और offence कभी crystallise नहीं होता. Miss करें, और payee **एक month के अंदर criminal complaint file** कर सकता है — और courts case चलते हुए cheque amount के 20% तक की interim compensation additionally order कर सकती हैं.

[पूरा Section 138 process — notice drafting, court stages, defences — अपनी अलग guide है.](https://cheqify.app/hi/blog/section-138-ni-act-cheque-bounce-india) यहाँ point narrower है: notice के बाद की 15-day window आख़िरी moment है जब एक bounce सिर्फ़ पैसे से fix हो सकता है. उसके बाद का हर दिन, वो lawyers से fix होता है.

### [H2] वो Costs जो कोई Itemise नहीं करता

Official layers stack करें और आपने अभी भी पूरे event की price नहीं लगाई. Quiet costs:

- **Credit footprint.** EMI और loan-repayment cheques जो bounce होते हैं, आपकी CIBIL report पर missed payments के तौर पर land होते हैं. Bounce charge ₹500 है; आपके अगले loan पर higher interest rate नहीं.
- **Bank charges के ऊपर lender penalties.** जब bounced cheque एक lender को pay कर रहा था, आप दो बार pay करते हैं — अपने bank का return charge *plus* lender की bounce penalty और delayed EMI पर penal interest.
- **Vendor maths.** एक supplier जिसने एक bounced cheque खाया है, आपको re-price करता है: advance payment terms, छोटी credit windows, या simply "UPI only, please." ये किसी भी charge schedule से ज़्यादा cost करता है.
- **Admin tax.** Cheque reissue करना, reversed entry reconcile करनी, apologetic phone call, re-presentation float — per bounce एक घंटे का unglamorous काम जो किसी statement पर कभी नहीं दिखता.

### [H2] Meter को Zero पर रखना

ऊपर की हर layer का same off-switch है, और वो boring है: **cheques उस पैसे के against लिखे जाते हैं जो already account में है** — कभी उस receivable के against नहीं जो आप expect कर रहे हैं, वो transfer जो "definitely आ रहा है," या किसी customer का promise.

दो habits इस rule को एक real business में survivable बनाती हैं:

- **अपना float जानें.** आपके issued cheques जो अभी presented नहीं हुए, आपके balance पर एक silent claim हैं. एक [cheque register जो हर leaf और उसका status track करता है](https://cheqify.app/hi/blog/cheque-bounce-reasons-and-solutions) — issued, presented, cleared — "मुझे लगता है काफ़ी है" को एक ऐसे number में बदलता है जो आप अगला cheque लिखने से पहले actually check कर सकते हैं.
- **Post-dated calendar की respect करें.** January में issued एक post-dated cheque एक debit है जो March में fire होता है. अगर वो date से पहले alert वाले calendar पर नहीं है, तो वो delay timer वाला एक bounce है.

Arithmetic prevention के favour में lopsided है. Habit हफ़्ते के कुछ minutes cost करती है. Bounce अच्छे दिनों पर कुछ सौ rupees cost करता है — और बुरे दिनों पर, cheque amount का दोगुना और एक court date.

---

> **एक bounce एक bookkeeping failure के तौर पर शुरू होता है — एक cheque जो आप भूल गए कि लिखा था.** Cheqify का register आपके print किए हर cheque को track करता है — payee, amount, date, status issued से cleared तक — ताकि आपका float एक number हो, guess नहीं, और कोई leaf empty account के against fire न हो. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Gujlish blend, same structure as English. Keep the pull-quote and CTA callout. Rebuild the charges table as a Sanity Table.

---

એક cheque bounce ક્યારેય એક bill નથી મોકલતો. એ ચાર મોકલે છે — બસ એટલા દૂર-દૂર spaced કે મોટાભાગના લોકો એમને ક્યારેય જોડતા જ નથી.

પહેલો તમારા return memo વાંચતા પહેલા પહોંચી જાય છે: તમારો bank એ જ દિવસે પોતાનો return charge debit કરી દે છે, quietly, જેમ banks કરે છે. બીજો counter ની બીજી side પર land થાય છે — જેણે તમારો cheque deposit કર્યો, એને *એનો* bank bad paper receive કરવાના privilege માટે charge કરે છે. ત્રીજો slower અને worse છે: વારંવાર bounce કરો અને bank તમારી cheque book ને renew કરવાની facility નહીં, manage કરવાનો risk સમજવા લાગે છે. અને ચોથો, જો payee escalate કરવાનું decide કરે, તો Negotiable Instruments Act છે — જે એક dishonoured cheque ની price એની face value ના બમણા સુધી લગાવે છે, courtroom attached.

આ છે આખું invoice, layer by layer. 2026 માં દરેક layer actually શું cost કરે છે, numbers ક્યાંથી આવે છે, અને એ બે habits જે meter ને zero પર રાખે છે.

### [H2] પહેલો Debit — તમારો પોતાનો Bank તમારી પાસેથી શું Charge કરે છે

જ્યારે તમારો issued કરેલો cheque unpaid return થાય છે — insufficient funds classic છે, જોકે [return-reason list ઘણી લાંબી ચાલે છે](https://cheqify.app/gu/blog/cheque-bounce-reasons-and-solutions) — તમારો bank તમારા account પર એક **cheque return charge** લગાવે છે, usually એ જ working day. Table પહેલા આ charge ની ત્રણ વાતો જાણવા જેવી છે:

- **આ per instrument, per presentation છે.** જો payee same cheque ફરી present કરે અને એ ફરી bounce થાય, તમે ફરી charged થાઓ છો. બે presentations, બે debits.
- **GST ઉપર ચઢે છે.** Bank charges પર 18% GST લાગે છે, તો એક "₹500 charge" તમારા account માંથી ₹590 તરીકે નીકળે છે.
- **Repeat offenders વધારે pay કરે છે.** ઘણા banks એક month કે quarter માં બીજા અને ત્રીજા return ની price પહેલા કરતાં વધારે રાખે છે — schedule of charges pattern ને discourage કરવા લખાઈ છે, ફક્ત event ને નહીં.

Exact figure દરેક bank ની schedule of charges સાથે move કરે છે, પણ 2026 માં એક major bank પર funds-related return ની honest range છે **per bounce થોડાક સો rupees — roughly ₹300 થી ₹750, plus GST**. અહીં છે representative picture:

| Bank | તમારો issued cheque, returned (insufficient funds) | તમારો deposited cheque, returned |
|---|---|---|
| SBI | ≈ ₹500 + GST | ≈ ₹150–₹250 + GST |
| HDFC Bank | ≈ ₹350–₹750 + GST (quarter માં repeat returns પર વધારે) | ≈ ₹100–₹225 + GST |
| ICICI Bank | ≈ ₹500 પહેલો return, ≈ ₹550 month માં બીજાથી, + GST | ≈ ₹100–₹225 + GST |
| Axis Bank | ≈ ₹500 + GST | ≈ ₹100–₹250 + GST |

*Illustrative figures only — bank charge schedules ceremony વગર change થાય છે અને account type થી vary કરે છે. કોઈ પણ number quote કરતા પહેલા તમારા bank ની current schedule of charges verify કરો.*

એક nuance જે schedules છુપાવી દે છે: return નું *reason* matter કરે છે. Funds-related returns (insufficient funds, "exceeds arrangement") charge sheet ના top પર બેસે છે. Technical returns — એક signature mismatch, એક date problem, એક correction જે bank ને ન ગમ્યું — ઘણીવાર lower charged થાય છે, કે depositor ને charge થાય છે. Bank ની pricing quietly તમને કહે છે કે એ કોને તમારી fault માને છે.

### [H2] Counter ની બીજી Side — જ્યારે તમે Depositor છો

અહીં છે એ part જે લોકોને surprise કરે છે: bounced cheque પકડેલો person પણ pay કરે છે. એવો cheque deposit કરો જે return થાય, અને તમારો bank **deposit side પર એક cheque return charge** debit કરે છે — drawer ના charge થી નાનો, typically ₹100 થી ₹250 plus GST, પણ real.

આ unjust લાગે છે — તમે કંઈ ખોટું નથી કર્યું — અને banks નો answer છે કે charge return ની processing cover કરે છે, blame નહીં. Either way, cheques *receive* કરતા business માટે practical lesson એ જ છે જે drawer એ શીખવો જોઈએ: એક bounce day one પર બંને parties ને પૈસા cost કરે છે, underlying payment પર બહસ શરૂ થતાં પહેલા પણ. Depositor એ cost પણ ઉઠાવે છે જે કોઈ invoice નથી કરતું — એ પૈસા જેની around એમણે plan કર્યું હતું અને જે આવ્યા નહીં.

### [H2] Pattern Penalty — Repeated Bounces શું Trigger કરે છે

Banks bounces માટે ફક્ત charge નથી કરતા. એ એમને *ગણે* છે.

Top end પર RBI ની banks ને guidance explicit છે: જ્યાં **₹1 crore કે એથી ઉપર** નો cheque એક financial year માં **ચાર વાર કે એથી વધારે** insufficient funds માટે return થાય, bank due notice પછી **cheque book facility withdraw કરવાનું** — અને current account ના case માં, account close કરવા સુધીનું — consider કરી શકે છે. આ headline rule છે, અને મોટાભાગના banks એ same philosophy પોતાની board-approved policies માં ઘણા નાના thresholds પર લખી રાખી છે: repeated funds-related returns તમારો account flag કરાવે છે, cheque book renewal review કરાવે છે, અને relationship manager અચાનક formal થઈ જાય છે.

Pattern branch ની બહાર પણ તમારો પીછો કરે છે. એક bounced cheque જે loan EMI service કરી રહ્યો હતો, credit bureaus માં missed payment તરીકે report થાય છે — અને credit report પર એક missed payment apology થી વર્ષો વધારે જીવે છે.

> **Return charge invoice ની સૌથી સસ્તી line છે. એના પછીનું બધું trust માં priced છે — bank નો, payee નો, અને eventually એક magistrate નો.**

### [H2] Criminal Layer — Section 138 અને અસલી Ceiling

ઉપરનું બધું commerce છે. આ layer criminal law છે.

**Negotiable Instruments Act ના Section 138** ની under, insufficient funds (કે "exceeds arrangement") માટે bounce થયેલો cheque — જ્યારે એ એક legally enforceable debt ની against issued હતો — એક criminal offence છે. Penalty ceiling: **cheque amount ના બમણા સુધી fine, બે વર્ષ સુધી imprisonment, કે બંને.** એક ₹5-lakh cheque theoretical ₹10-lakh fine carry કરે છે. આ જ એ number છે જે એક bookkeeping failure ને એક life event બનાવી દે છે.

Law drawer ને એક structured exit આપે છે, અને એ એક clock પર ચાલે છે:

1. Cheque પોતાની **3-month validity** ની અંદર presented હોવો જોઈએ.
2. Dishonour પર, payee return memo મળ્યાના **30 days ની અંદર એક written demand notice** મોકલે છે.
3. પછી drawer પાસે notice મળ્યાથી **15 days** છે cheque amount આખો pay કરવાના.
4. એ 15 days ની અંદર pay કરો અને offence ક્યારેય crystallise નથી થતો. Miss કરો, અને payee **એક month ની અંદર criminal complaint file** કરી શકે છે — અને courts case ચાલતા cheque amount ના 20% સુધીની interim compensation additionally order કરી શકે છે.

[આખો Section 138 process — notice drafting, court stages, defences — પોતાની અલગ guide છે.](https://cheqify.app/gu/blog/section-138-ni-act-cheque-bounce-india) અહીં point narrower છે: notice પછીની 15-day window છેલ્લી moment છે જ્યારે એક bounce ફક્ત પૈસાથી fix થઈ શકે છે. એના પછીનો દરેક દિવસ, એ lawyers થી fix થાય છે.

### [H2] એ Costs જે કોઈ Itemise નથી કરતું

Official layers stack કરો અને તમે હજુ પણ આખા event ની price નથી લગાવી. Quiet costs:

- **Credit footprint.** EMI અને loan-repayment cheques જે bounce થાય છે, તમારી CIBIL report પર missed payments તરીકે land થાય છે. Bounce charge ₹500 છે; તમારા આગલા loan પર higher interest rate નહીં.
- **Bank charges ની ઉપર lender penalties.** જ્યારે bounced cheque એક lender ને pay કરી રહ્યો હતો, તમે બે વાર pay કરો છો — તમારા bank નો return charge *plus* lender ની bounce penalty અને delayed EMI પર penal interest.
- **Vendor maths.** એક supplier જેણે એક bounced cheque ખાધો છે, તમને re-price કરે છે: advance payment terms, નાની credit windows, કે simply "UPI only, please." આ કોઈ પણ charge schedule થી વધારે cost કરે છે.
- **Admin tax.** Cheque reissue કરવો, reversed entry reconcile કરવી, apologetic phone call, re-presentation float — per bounce એક કલાકનું unglamorous કામ જે કોઈ statement પર ક્યારેય નથી દેખાતું.

### [H2] Meter ને Zero પર રાખવું

ઉપરની દરેક layer નો same off-switch છે, અને એ boring છે: **cheques એ પૈસાની against લખાય છે જે already account માં છે** — ક્યારેય એ receivable ની against નહીં જે તમે expect કરી રહ્યા છો, એ transfer જે "definitely આવી રહ્યો છે," કે કોઈ customer નું promise.

બે habits આ rule ને એક real business માં survivable બનાવે છે:

- **તમારો float જાણો.** તમારા issued cheques જે હજુ presented નથી થયા, તમારા balance પર એક silent claim છે. એક [cheque register જે દરેક leaf અને એનો status track કરે છે](https://cheqify.app/gu/blog/cheque-bounce-reasons-and-solutions) — issued, presented, cleared — "મને લાગે છે પૂરતું છે" ને એક એવા number માં બદલે છે જે તમે આગલો cheque લખતા પહેલા actually check કરી શકો.
- **Post-dated calendar ની respect કરો.** January માં issued એક post-dated cheque એક debit છે જે March માં fire થાય છે. જો એ date પહેલા alert વાળા calendar પર નથી, તો એ delay timer વાળો એક bounce છે.

Arithmetic prevention ના favour માં lopsided છે. Habit અઠવાડિયાની થોડીક minutes cost કરે છે. Bounce સારા દિવસોમાં થોડાક સો rupees cost કરે છે — અને ખરાબ દિવસોમાં, cheque amount નું બમણું અને એક court date.

---

> **એક bounce એક bookkeeping failure તરીકે શરૂ થાય છે — એક cheque જે તમે ભૂલી ગયા કે લખ્યો હતો.** Cheqify નું register તમારા print કરેલા દરેક cheque ને track કરે છે — payee, amount, date, status issued થી cleared સુધી — જેથી તમારો float એક number હોય, guess નહીં, અને કોઈ leaf empty account ની against fire ન થાય. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## ⚠️ Pre-publish fact-check required

Figures in this post age fast — verify ALL of the following against primary sources at publish time; body language is deliberately hedged ("≈", "roughly", "typically") and must stay hedged unless verified:

1. **Per-bank return charges (the table — all three bodies):** SBI ≈₹500, HDFC ≈₹350–₹750 (repeat slabs), ICICI ≈₹500/₹550, Axis ≈₹500 for outward returns; ₹100–₹250 depositor-side — check each bank's CURRENT published schedule of charges (service-charge PDFs on bank sites). Adjust the table and the "₹300 to ₹750" range sentence if schedules have moved. The "illustrative — verify" caption must survive editing.
2. **GST 18% on bank charges** — confirm the current rate applied to bank service charges.
3. **RBI ₹1 crore / 4-times rule:** cheques of ₹1 crore and above returned 4+ times in a financial year for insufficient funds → bank may consider withdrawing cheque book facility / closing current account after due notice. Verify against the current RBI circular text (dishonour of cheques — discipline framework) before publish; keep "may consider" phrasing.
4. **Section 138 penalty limits:** fine up to TWICE the cheque amount, imprisonment up to 2 years, or both — verify current NI Act text (no amendment has changed these).
5. **Section 138 timeline:** presentation within 3-month validity → demand notice within 30 days of return memo → drawer's 15 days to pay → complaint within 1 month thereafter. Verify each step's wording.
6. **Section 143A interim compensation up to 20%** — verify it is discretionary ("courts can") and the current ceiling.
7. **CIBIL mechanics** — bounce itself is not bureau-reported; the resulting missed EMI/loan payment is. Framing is safe but confirm no change in bureau reporting norms.

---

## Internal-Link Strategy

**Forward links from this post (LIVE targets only):**
- Post #2 (`cheque-bounce-reasons-and-solutions`) — linked twice: the return-reason list (First Debit section) and the register habit (Keeping the Meter at Zero).
- Post #11 (`section-138-ni-act-cheque-bounce-india`) — the full court-process guide (Criminal Layer section).

**Bonus internal-link work (after publish):**
- Edit post #2 (`cheque-bounce-reasons-and-solutions`, all 3 locales) to add a "what a bounce actually costs" link here — strongest reciprocal.
- Edit post #11 (`section-138-ni-act-cheque-bounce-india`, all 3 locales) to link here from its penalties/consequences section.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The four-bills opening, the "banks *count* them" beat, and the lopsided-arithmetic close carry the voice.
- **Fact-check block (CRITICAL):** per-bank charges, the RBI ₹1cr/4-times rule, and 138 penalty limits MUST be verified at publish — see the ⚠️ section above.
- **Table:** must be pasted as a Sanity Table block in all three bodies, with the "illustrative" caption paragraph kept below it.
- **Internal link order:** both targets (#2, #11) are LIVE — safe.
- **Word count:** EN body must be >1200 words (target 1,700–2,100). Current draft: ~1,780 words.
- **Sanity toggles:** `isHowTo: OFF`, `hasFaq: ON` (7 items).

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild (sanity-check the slug field — no stray tags, per the slug-corruption gotcha).
4. Bonus reciprocal-link work — posts #2 and #11 (both locales' strongest reciprocals).
5. IndexNow auto-pings on publish.
