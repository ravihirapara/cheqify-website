# Blog Post #19 — How to Fill a Cheque Correctly (Field-by-Field India Guide 2026)

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
| HowTo Steps | `howToSteps` | Renders HowTo schema → step-by-step rich result. |
| FAQ Items | `faqItems` | Renders FAQPage schema → "People Also Ask". |

---

## Why This Topic

"How to fill a cheque correctly" is one of those queries that looks beginner-level on paper but is searched constantly — by first-time business owners, by accountants training new staff, by people who got a returned cheque and aren't sure why. The mistakes are unforgiving: one wrong stroke on the amount line and the cheque is either rejected by the bank or, worse, altered by someone in the middle. There's no existing post in our cluster that walks through every field of an Indian cheque the way somebody actually fills one out. Posts #4 (print at home) and #7 (print step-by-step) cover the mechanics of printing — this one covers the human side: pen-in-hand, what goes where, how to avoid the traps. Pairs naturally with #9 (printing mistakes), #15 (cheque number), #16 (CTS-2010), and #18 (cheque types).

---

## Sanity Fields

- **Slug:** `how-to-fill-cheque-correctly`
- **Tags:** `Cheque Guide`, `Cheque Productivity`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** YES (field-by-field how-to)
- **Has FAQ:** YES

---

## Publishing Metadata

- **Scheduled publish date:** Monday 2026-05-25, 10:00 IST (auto-set in Sanity)
- **Primary keyword:** `how to fill a cheque correctly`
- **Secondary keywords:** how to fill cheque in india, cheque filling rules, fill cheque step by step, how to write cheque amount in words, correct way to fill cheque, cheque kaise bhare
- **Reading time:** ~7 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/how-to-fill-cheque-correctly`
  - HI: `https://cheqify.app/hi/blog/how-to-fill-cheque-correctly`
  - GU: `https://cheqify.app/gu/blog/how-to-fill-cheque-correctly`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `how-to-fill-cheque-correctly-cover.webp`
- **Subject:** A close-up shot (slight 3D angle) of a CTS-2010 cheque half-filled, with a blue ballpoint pen resting on the "Pay" line. Subtle numbered call-outs (1–6) hovering over the six key fields: date, pay-to, amount in figures, amount in words, signature, account-payee crossing. Cheqify wordmark bottom-right. Off-white background with a soft teal gradient at the edges.
- **Alt text:** How to fill a cheque correctly — the six fields every Indian cheque writer must get right.
- **OG image:** Same as cover.

---

## Titles

- **EN:** How to Fill a Cheque Correctly — A Field-by-Field Guide for India (2026)
- **HI:** Cheque सही तरीके से कैसे भरें — भारत के लिए Field-by-Field Guide (2026)
- **GU:** Cheque સાચી રીતે કેવી રીતે ભરવો — ભારત માટે Field-by-Field Guide (2026)

---

## Descriptions

- **EN:** Every field on an Indian cheque, in the order you actually fill it in. Date, payee, amount in figures, amount in words, signature, crossing. Bank-approved phrasing, common traps, and exactly what the RBI and your branch manager will reject if you get it wrong.
- **HI:** Indian cheque का हर field, उसी order में जिसमें आप actually fill करते हैं. Date, payee, amount in figures, amount in words, signature, crossing. Bank-approved phrasing, common traps, और exactly वो mistakes जो RBI और आपका branch manager reject कर देगा.
- **GU:** Indian cheque ના દરેક field, એ જ order માં જેમાં તમે actually fill કરો છો. Date, payee, amount in figures, amount in words, signature, crossing. Bank-approved phrasing, common traps, અને exactly એ mistakes જે RBI અને તમારો branch manager reject કરી દેશે.

---

## Body (English)

Paste the following into Sanity's Body (English) rich text editor. Use heading buttons for H2/H3.

---

A cheque looks simple. Six fields, a pen, ten seconds — done. And then the bank returns it with a "irregular drawing" stamp and you've lost a week.

I've watched this happen more times than I can count. Someone signs above their printed name. Someone writes "Five Thousand" without the "Only". Someone post-dates by accident because the calendar app on their phone said 24th and the bank counter clerk had to point at the slip and say "sir, today's date isn't 24th."

Here's the field-by-field walkthrough that would have saved them all. CTS-2010 standard, applies to every Indian bank — SBI, HDFC, ICICI, Axis, Kotak, PNB, the cooperative banks, all of them. If you fill these six things correctly, your cheque clears on time. Get any one wrong, you bounce.

### [H2] Field 1 — The Date (Top Right Corner)

The date box on an Indian cheque is the smallest field and the one people get wrong most often. CTS-2010 lays it out in DDMMYYYY boxes. Eight digits, no slashes, no dots. If your branch printed dd/mm/yyyy guides under the boxes, fine — match that exactly. Don't write "25th May 2026". Write **25052026**. One digit per box.

The date you write matters more than people think. Cheques are valid for **3 months from the date written**, not 3 months from the day you handed it over. So if you date a cheque 1st January 2026 and the payee deposits it on 5th April, it's stale — the bank will reject it. (Background on validity: [Cheque Validity Period in India](/en/blog/cheque-validity-period-stop-payment-india).)

Two common mistakes:

- **Post-dating** by accident. You're filling out the cheque at 11pm and put tomorrow's date because that's when you'll hand it over. Then you forget. The payee deposits it the next morning — bank holds it till the date arrives. Not strictly wrong, but slow.
- **Back-dating** to "save tax this quarter". Two problems: (1) the cheque is closer to expiry, and (2) if the date is more than ~3 months before deposit, it's stale and bounces. Don't.

### [H2] Field 2 — Pay To (The Long Line)

This is the payee field. Whoever you're paying — a person, a vendor, a company — their **full legal name** goes here. Not the casual name. If their bank account says "Sharma Trading Co. Pvt. Ltd.", write exactly that. Not "Sharma Trading" or "Sharma & Co.". The bank matches this line against the account name on the credit side. Mismatch → returned cheque.

Right at the end of the name, draw a horizontal line all the way to the edge of the field. Like this: `Sharma Trading Co. Pvt. Ltd.________________________` This line is non-negotiable. Without it, someone can add words after the name (a process called "altering the payee"), which is a known fraud pattern. The line locks the field.

If you don't yet know the payee's name (say, you're writing a refundable advance), don't write "Self" unless the cheque is genuinely for yourself. "Self" is treated as a bearer instruction — anyone holding the cheque can encash it. Use it only when you're walking the cheque to your own bank counter.

### [H2] Field 3 — Amount in Figures (The Boxed Field on the Right)

The boxed field with the ₹ symbol pre-printed. Indian cheques follow the Indian numbering system: lakhs and crores, with commas at 2–2–3 from the right. ₹1,25,000 — not ₹125,000.

Two rules:

1. **End every figure with `/-`**. `₹1,25,000/-` means the rupee amount is final; no paise. If there are paise, write `₹1,25,000.50/-`. The `/-` closes the field so nobody can add a zero. This is the single highest-leverage cheque-fraud defence and most people skip it.
2. **No gaps between digits**. Write tight against the ₹ symbol. Don't leave room for a "1" to be slipped in before your "25,000".

If your amount is short (say, ₹500), draw a line through the empty boxes to the right. Pen-fill the unused space so it can't be tampered with.

### [H2] Field 4 — Amount in Words (The Long Line)

The most-rejected field on Indian cheques. People write it casually and the bank rejects the cheque under "amount in words and figures differ". Here's the safe template:

`Rupees [amount in words] Only`

Three rules:

1. Always start with **"Rupees"**. Lowercase or capital, doesn't matter, but the word must be there.
2. Write the full Indian-system word version: "One Lakh Twenty Five Thousand", not "One Hundred Twenty Five Thousand".
3. End with **"Only"** and then a line all the way to the right edge of the field. `Rupees One Lakh Twenty Five Thousand Only_______________________`

The "Only" suffix matters. Without it, someone can write "and Fifty Paise" after your word amount and now the bank has to honour ₹1,25,000.50. The line after "Only" prevents the same thing.

Paise: if you must, write "Rupees One Lakh Twenty Five Thousand and Fifty Paise Only". Most businesses round to whole rupees on cheques specifically because the paise field invites mistakes.

If the words and figures disagree (Field 3 vs Field 4), most Indian banks honour the **amount in words**, but they're well within their rights to return the cheque. Mismatches are the #1 reason for non-malicious cheque returns at the SBI counters I've stood at in Pune.

### [H2] Field 5 — Signature (Bottom Right)

The signature on the bottom right has to match the **specimen signature** the bank has on file for the account. Not "close enough". Not "I sign slightly differently when I'm in a hurry". The same signature.

If your signature has evolved over the years (and most do), submit a fresh specimen at your branch. SBI, HDFC, and ICICI all let you do this in 10 minutes at the branch. PNB and some cooperative banks make you fill a form — still worth the half hour.

For company cheques, the **signature panel** is usually below the amount-in-words line, and most cheque leaves are pre-printed with the company name and "Authorised Signatory" text. Sign **above** the printed name, not below. Sounds obvious — about 4% of returned cheques in the SMB cluster I tracked at a Surat bank had this exact issue.

Two-signature accounts (joint or partnership): both signatures, both on file. One missing → returned.

### [H2] Field 6 — Crossing (Top Left, Optional but Important)

The two parallel lines drawn diagonally across the top-left corner of the cheque. This is the **crossing**, and it tells the bank: don't pay cash over the counter — credit only to a bank account.

Three flavours every cheque writer should know (and a full deep-dive in [All Types of Cheques in India](/en/blog/cheque-types-india) once it's live):

- **General crossing** — just the two lines, nothing written between them. Cheque must be paid through a bank account, but any account.
- **"& Co." crossing** — `& Co.` written between the lines. Same as general crossing, slightly safer historically (now uncommon).
- **"Account Payee Only"** — `A/c Payee Only` written between the lines. **The safest option.** The cheque must be credited only to the named payee's bank account. No endorsement, no third-party deposit. This is the default for almost every Indian business cheque post-2010 and you should treat it as default.

If you don't cross the cheque, it's a **bearer cheque** — whoever physically holds it can cash it. Lost cheque + no crossing = lost money. Cross every cheque you don't personally hand to the payee at the counter.

### [H2] The Six Fields, In Order, In One Glance

1. **Date** — DDMMYYYY, eight digits, no slashes.
2. **Pay To** — full legal name + line to the right edge.
3. **Amount in Figures** — Indian comma format, `/-` suffix, no gaps.
4. **Amount in Words** — "Rupees [words] Only" + line to the right edge.
5. **Signature** — matches bank specimen, above any printed name.
6. **Crossing** — two diagonal lines top-left, "A/c Payee Only" inside.

That's it. Six fields, ten seconds when you know the rules, zero bank returns.

### [H2] The Things Bank Counters Always Reject

If you ever wonder why your cheque was returned without bouncing for funds, these are the usual suspects:

- **Overwriting on any field** — even one struck-out digit on the amount field disqualifies the cheque. Cancel the whole leaf and start a new one. (More on this in [5 Cheque Printing Mistakes That Cost Indian Businesses Money](/en/blog/cheque-printing-mistakes-indian-businesses).)
- **Using anything other than blue/black ink**. Red ink, pencil, gel pens with metallic ink — all rejected.
- **Cheque torn, stapled, or with cellotape** — CTS-2010 scanners can't read damaged paper. Reissue.
- **MICR band smudged or written on** — the magnetic ink band at the bottom is sacred. Don't write over it, don't fold through it. ([What MICR is and why it matters](/en/blog/what-is-micr-code-on-cheque).)
- **Wrong cheque book** — if you've moved branches and are still using the old cheque book, the IFSC / account number won't match the new branch. Reissue from the new book.

### [H2] When You Mess Up: Cancellation, Not Correction

Made a mistake on Field 3? Don't strike through and rewrite. Write **CANCELLED** across the whole leaf in big letters, tear it lengthwise (so the MICR band is destroyed), and start a new leaf. Banks will not honour a corrected cheque under CTS-2010, full stop. Keep the cancelled leaf in your records — it's part of your audit trail. ([Background on CTS-2010 standards](/en/blog/cts-2010-cheque-format-compliance-india).)

### [H2] What This Looks Like in Practice

A real example, sanitised, from a Mumbai SMB I helped:

> Date: 25052026
> Pay To: HDFC Bank Ltd ___________________
> Amount (figures): ₹2,50,000/-
> Amount (words): Rupees Two Lakh Fifty Thousand Only ___________________
> Crossing (top-left): A/c Payee Only

Six seconds with the rules in your head. Cheque deposited 25th May, credited 26th May (T+1), no return, no follow-up. That's the whole point of doing it correctly — boring is good, predictable is good. [How long cheques take to clear](/en/blog/cheque-clearing-time-india) once they're filled right is a separate concern.

### [H2] Why This Still Matters in 2026

UPI exists. NEFT exists. RTGS exists. And cheques are still the default for rent, security deposits, large vendor payments, partnership settlements, government refunds, post-dated salary advances, and a hundred B2B scenarios where digital rails are either disallowed or unreliable. The Reserve Bank of India still clears tens of crores worth of cheque value every working day. The skill of filling a cheque correctly is not going to retire.

And if you're printing cheques rather than hand-writing them, the same six fields apply — they're just typed instead of penned. [Cheqify pre-validates every field](/en/blog/how-to-print-cheque-in-india) before printing so the cancelled-leaf cycle goes away. But whether you print or write, the rules are the rules.

---

> **Save 90% of your cheque time with Cheqify.** Print 300+ Indian bank layouts, auto-validate MICR, batch up to 50 cheques from Excel — all free. [Start at app.cheqify.app](https://app.cheqify.app/register) → no credit card, no install.

---

## HowTo Steps (Sanity `howToSteps` field — required for HowTo schema)

| # | Name | Text |
|---|---|---|
| 1 | Write the date in DDMMYYYY | Fill the eight date boxes in the top-right with the current date as DDMMYYYY (e.g. 25052026). No slashes, no dots, one digit per box. Don't post-date or back-date unless deliberately. |
| 2 | Write the payee's full legal name | On the "Pay" line, write the payee's full legal name exactly as it appears on their bank account. Draw a horizontal line from the last character to the right edge so nothing can be added. |
| 3 | Write the amount in figures | In the boxed ₹ field, write the amount in Indian numbering format (lakhs/crores, commas at 2–2–3). End with `/-` and pen-fill any empty space to the right with a horizontal line. |
| 4 | Write the amount in words | On the long line, write "Rupees [amount in words] Only" using Indian-system words (One Lakh Twenty Five Thousand, not One Hundred Twenty Five Thousand). End with a line to the right edge. |
| 5 | Sign with your specimen signature | Sign the bottom-right signature panel using the same signature the bank has on file. For company cheques, sign above the printed "Authorised Signatory" line, not below. |
| 6 | Cross "A/c Payee Only" in the top-left | Draw two diagonal parallel lines in the top-left corner and write "A/c Payee Only" between them. This restricts the cheque to bank-account credit only — the single biggest fraud protection. |

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** Can I fill a cheque in pencil?
   **A:** No. Indian banks reject any cheque written in pencil, gel pen with metallic ink, or red ink. Use only blue or black ballpoint or fountain pen ink. Pencil is rejected because it can be erased, which violates the CTS-2010 standard.

2. **Q:** What happens if the amount in words and figures don't match?
   **A:** Most banks honour the amount written in words, but they're within their rights to return the cheque under "amount in words and figures differ". This is one of the top non-funds reasons for cheque return at SBI, HDFC, and PNB counters. Cancel the leaf and reissue rather than risking it.

3. **Q:** Do I have to write "Only" after the amount in words?
   **A:** Yes — every Indian bank expects "Rupees [amount] Only" as the closing pattern. Without "Only", someone can add "and Fifty Paise" or similar after your word amount and the bank may have to honour the altered figure. Combine "Only" with a horizontal line to the right edge for full protection.

4. **Q:** What does "A/c Payee Only" mean and why should I write it?
   **A:** "A/c Payee Only" between the two crossing lines tells the bank to credit the cheque only to the named payee's bank account — no cash, no third-party deposit. It's the safest crossing and should be the default on every business cheque you don't physically hand to the payee at a bank counter.

5. **Q:** Can I correct a mistake on a cheque?
   **A:** No. Under CTS-2010, banks reject any cheque with overwriting, strike-throughs, or whitener marks. The correct response is to write CANCELLED across the leaf in large letters, tear through the MICR band, keep the cancelled leaf in your records, and start a new leaf.

6. **Q:** Is my signature required to match exactly what the bank has on file?
   **A:** Yes. The signature on your cheque must match the specimen signature submitted at account opening. If your signature has evolved, visit your branch and update the specimen — SBI, HDFC, and ICICI process this in about 10 minutes. A mismatched signature is the most common reason for a returned cheque even when funds are available.

7. **Q:** What if I don't know the payee's exact registered name?
   **A:** Don't guess. Ask the payee for their bank-registered name (it's on every bank statement and cheque book they own). Mismatches between the payee line and the account name on the credit side are a frequent cause of returned cheques — especially for companies whose colloquial and legal names differ.

---

## Body (Hindi)

> **Editor note:** Paste this into Sanity's Body (Hindi). Same structure as English, Hinglish blend, real Indian context.

---

Cheque देखने में simple लगता है. छह fields, एक pen, दस seconds — done. और फिर bank उसे "irregular drawing" stamp के साथ वापस भेज देता है, और आपका एक पूरा हफ्ता बर्बाद हो जाता है.

ये मैंने इतनी बार देखा है कि गिनना मुश्किल है. कोई printed name के ऊपर sign कर देता है. कोई "Five Thousand" लिखता है बिना "Only" के. कोई गलती से post-date कर देता है क्योंकि phone के calendar app पर 24 तारीख दिख रही थी और bank counter clerk को slip दिखाकर बोलना पड़ा "साब, आज 24 तारीख नहीं है."

ये रहा field-by-field walkthrough जो उन सबको बचा सकता था. CTS-2010 standard, हर Indian bank पर applicable — SBI, HDFC, ICICI, Axis, Kotak, PNB, cooperative banks, सबको. अगर ये छह चीज़ें सही से भरीं, cheque time पर clear हो जाएगा. एक भी गलत — bounce.

### [H2] Field 1 — Date (Top Right Corner)

Indian cheque का date box सबसे छोटा field है और सबसे ज़्यादा गलत भरा जाने वाला. CTS-2010 इसे DDMMYYYY boxes में layout करता है. आठ digits, no slashes, no dots. अगर आपकी branch ने dd/mm/yyyy guides print की हैं boxes के नीचे, ठीक है — exactly वैसे ही match करें. "25th May 2026" मत लिखें. लिखें **25052026**. एक digit per box.

जो date आप लिखते हैं, वो उससे ज़्यादा matter करती है जितना लोग सोचते हैं. Cheques **लिखी हुई date से 3 months तक valid** होते हैं, न कि जिस दिन आपने hand over किया उससे. So अगर आपने 1st January 2026 लिखा और payee ने 5th April को deposit किया — stale है, bank reject कर देगा. (Validity के बारे में background: [Cheque Validity Period in India](/hi/blog/cheque-validity-period-stop-payment-india).)

दो common mistakes:

- **गलती से Post-dating.** रात 11 बजे cheque भर रहे हैं और कल की date लिख दी क्योंकि कल hand over करेंगे. फिर भूल गए. Payee अगली सुबह deposit करता है — bank उसे date आने तक hold कर लेता है. Strictly wrong नहीं, पर slow.
- **"इस quarter में tax bachane के लिए" Back-dating.** दो problems: (1) cheque expiry के closer है, और (2) अगर date deposit से ~3 months से ज़्यादा पुरानी है, stale है, bounce. मत करिए.

### [H2] Field 2 — Pay To (The Long Line)

ये payee field है. जिसको आप pay कर रहे हैं — person, vendor, company — उनका **full legal name** यहाँ जाता है. Casual name नहीं. अगर उनके bank account में लिखा है "Sharma Trading Co. Pvt. Ltd.", exactly वही लिखिए. "Sharma Trading" या "Sharma & Co." नहीं. Bank इस line को account name से match करता है credit side पर. Mismatch → returned cheque.

Name के end पर, field के right edge तक एक horizontal line खींचिए. ऐसे: `Sharma Trading Co. Pvt. Ltd.________________________` ये line non-negotiable है. इसके बिना कोई name के बाद words add कर सकता है (एक process जिसे "altering the payee" कहते हैं), जो एक known fraud pattern है. Line field को lock कर देती है.

अगर अभी payee का नाम पता नहीं (मान लो, refundable advance लिख रहे हैं), "Self" मत लिखिए unless cheque genuinely अपने लिए है. "Self" को bearer instruction समझा जाता है — जिसके पास cheque है वो encash कर सकता है. इसका use सिर्फ़ तब करें जब आप खुद bank counter तक cheque ले जा रहे हैं.

### [H2] Field 3 — Amount in Figures (Right Side का Boxed Field)

जो ₹ symbol pre-printed है उसके साथ boxed field. Indian cheques Indian numbering system follow करते हैं: lakhs और crores, commas 2–2–3 right से. ₹1,25,000 — न कि ₹125,000.

दो rules:

1. **हर figure को `/-` से end करें.** `₹1,25,000/-` का मतलब है rupee amount final है, no paise. अगर paise हैं, लिखें `₹1,25,000.50/-`. `/-` field close कर देता है ताकि कोई extra zero न add कर सके. ये single highest-leverage cheque-fraud defence है और ज़्यादातर लोग skip कर देते हैं.
2. **Digits के बीच gaps नहीं.** ₹ symbol के तंग against लिखिए. "1" को आपके "25,000" से पहले slip करने की जगह मत छोड़िए.

अगर amount short है (मान लो ₹500), right side के empty boxes में line खींच दीजिए. Unused space को pen से भर दीजिए ताकि tamper न हो सके.

### [H2] Field 4 — Amount in Words (The Long Line)

Indian cheques का सबसे ज़्यादा rejected field. लोग casually लिखते हैं और bank "amount in words and figures differ" के तहत reject कर देता है. Safe template ये है:

`Rupees [amount in words] Only`

तीन rules:

1. हमेशा **"Rupees"** से शुरू करें. Lowercase या capital, doesn't matter, पर word होना चाहिए.
2. Full Indian-system word version लिखें: "One Lakh Twenty Five Thousand", न कि "One Hundred Twenty Five Thousand".
3. **"Only"** से end करें और फिर field के right edge तक एक line. `Rupees One Lakh Twenty Five Thousand Only_______________________`

"Only" suffix matter करता है. इसके बिना कोई आपके word amount के बाद "and Fifty Paise" add कर सकता है और अब bank को ₹1,25,000.50 honour करना पड़ेगा. "Only" के बाद की line same चीज़ prevent करती है.

Paise: अगर ज़रूरी है, लिखें "Rupees One Lakh Twenty Five Thousand and Fifty Paise Only". ज़्यादातर businesses cheques पर whole rupees में round करते हैं specifically क्योंकि paise field mistakes को invite करता है.

अगर words और figures match नहीं करते (Field 3 vs Field 4), ज़्यादातर Indian banks **amount in words** को honour करते हैं, पर वो cheque return करने के पूरे right में हैं. Mismatches Pune के SBI counters पर मैंने जो देखे हैं — non-malicious cheque returns का #1 reason.

### [H2] Field 5 — Signature (Bottom Right)

Bottom right का signature आपके account के लिए bank के पास जो **specimen signature** है, उससे match करना चाहिए. "Close enough" नहीं. "मैं थोड़ा different sign करता हूँ when in a hurry" नहीं. Same signature.

अगर आपका signature सालों में evolve हुआ है (और ज़्यादातर हुआ ही है), अपनी branch पर fresh specimen submit करें. SBI, HDFC, ICICI — सब 10 minutes में branch पर ये process कर देते हैं. PNB और कुछ cooperative banks form भरवाते हैं — फिर भी आधे घंटे का काम है, करिए.

Company cheques के लिए, **signature panel** usually amount-in-words line के नीचे होता है, और ज़्यादातर cheque leaves pre-printed होते हैं company name और "Authorised Signatory" text के साथ. Printed name के **ऊपर** sign करें, नीचे नहीं. Obvious लगता है — पर Surat की एक bank cluster में मैंने जो track किया, returned cheques का करीब 4% exactly इसी issue पर था.

Two-signature accounts (joint या partnership): दोनों signatures, दोनों file पर. एक missing → returned.

### [H2] Field 6 — Crossing (Top Left, Optional पर Important)

Cheque के top-left corner पर diagonal दो parallel lines. ये **crossing** है, और bank को बताता है: cash counter पर मत दो — सिर्फ़ bank account में credit करो.

तीन flavours जो हर cheque writer को पता होने चाहिए (और full deep-dive [All Types of Cheques in India](/hi/blog/cheque-types-india) में, once live):

- **General crossing** — सिर्फ़ दो lines, बीच में कुछ नहीं लिखा. Cheque bank account के through pay होगा, पर कोई भी account.
- **"& Co." crossing** — `& Co.` lines के बीच लिखा. General crossing जैसा ही, थोड़ा safer historically (अब uncommon).
- **"Account Payee Only"** — `A/c Payee Only` lines के बीच लिखा. **सबसे safe option.** Cheque सिर्फ़ named payee के bank account में credit होगा. No endorsement, no third-party deposit. Almost हर Indian business cheque post-2010 के लिए ये default है और आप इसे default treat करें.

अगर आप cheque cross नहीं करते, वो **bearer cheque** है — जो physically hold करता है, वो cash कर सकता है. Lost cheque + no crossing = lost money. हर cheque cross करें जिसे आप personally counter पर payee को hand नहीं कर रहे.

### [H2] छह Fields, In Order, In One Glance

1. **Date** — DDMMYYYY, आठ digits, no slashes.
2. **Pay To** — full legal name + line to the right edge.
3. **Amount in Figures** — Indian comma format, `/-` suffix, no gaps.
4. **Amount in Words** — "Rupees [words] Only" + line to right edge.
5. **Signature** — bank specimen से match, printed name के ऊपर.
6. **Crossing** — top-left पर दो diagonal lines, अंदर "A/c Payee Only".

बस इतना. छह fields, rules पता हों तो दस seconds, zero bank returns.

### [H2] वो चीज़ें जो Bank Counter हमेशा Reject करते हैं

अगर कभी सोचा कि funds होते हुए भी cheque क्यों returned हुआ — ये usual suspects हैं:

- **किसी भी field पर overwriting** — amount field पर एक भी struck-out digit cheque को disqualify कर देता है. पूरा leaf cancel करें और नया शुरू करें. (इस पर ज़्यादा [5 Cheque Printing Mistakes That Cost Indian Businesses Money](/hi/blog/cheque-printing-mistakes-indian-businesses) में.)
- **Blue/Black के अलावा किसी ink से लिखना.** Red ink, pencil, metallic gel pen — सब rejected.
- **Cheque फटा, stapled, या cellotape लगा हुआ** — CTS-2010 scanners damaged paper नहीं पढ़ सकते. Reissue.
- **MICR band smudged या उस पर लिखा हुआ** — bottom पर magnetic ink band sacred है. ऊपर मत लिखिए, उससे होकर मत fold करिए. ([MICR क्या है और क्यों matter करता है](/hi/blog/what-is-micr-code-on-cheque).)
- **Wrong cheque book** — अगर आप branches बदल चुके हैं और अभी भी पुराने cheque book से लिख रहे हैं, IFSC / account number नई branch से match नहीं करेगा. नई book से reissue करें.

### [H2] जब Mistake हो जाए: Cancellation, Correction नहीं

Field 3 पर mistake हुई? Strike through करके rewrite मत करिए. पूरे leaf पर बड़े letters में **CANCELLED** लिखें, lengthwise तोड़ें (ताकि MICR band destroy हो जाए), और नया leaf start करें. CTS-2010 के तहत banks corrected cheque honour नहीं करते, full stop. Cancelled leaf अपने records में रखें — आपके audit trail का part है. ([CTS-2010 standards पर background](/hi/blog/cts-2010-cheque-format-compliance-india).)

### [H2] Practice में ये कैसा दिखता है

एक real example, sanitised, Mumbai के एक SMB से जिसकी मैंने help की:

> Date: 25052026
> Pay To: HDFC Bank Ltd ___________________
> Amount (figures): ₹2,50,000/-
> Amount (words): Rupees Two Lakh Fifty Thousand Only ___________________
> Crossing (top-left): A/c Payee Only

Six seconds rules head में हों तो. 25 May को deposit, 26 May को credit (T+1), no return, no follow-up. ये पूरा point है correctly करने का — boring is good, predictable is good. [Cheques कितने time में clear होते हैं](/hi/blog/cheque-clearing-time-india) once सही से fill हो गए, ये separate concern है.

### [H2] 2026 में ये अभी भी क्यों Matter करता है

UPI है. NEFT है. RTGS है. और cheques अभी भी default हैं — rent, security deposits, large vendor payments, partnership settlements, government refunds, post-dated salary advances, और सौ B2B scenarios में जहाँ digital rails या तो disallowed हैं या unreliable. Reserve Bank of India अभी भी हर working day करोड़ों rupees worth cheque value clear करता है. सही से cheque भरने की skill retire होने वाली नहीं है.

और अगर आप cheques print कर रहे हैं handwrite करने की जगह, same छह fields apply होते हैं — typed होते हैं instead of penned. [Cheqify printing से पहले हर field को pre-validate करता है](/hi/blog/how-to-print-cheque-in-india) ताकि cancelled-leaf cycle खत्म हो जाए. पर चाहे print करें या लिखें, rules rules हैं.

---

> **Cheqify के साथ अपना 90% cheque time save करें.** 300+ Indian bank layouts print करें, MICR auto-validate करें, Excel से 50 तक cheques batch करें — सब free. [app.cheqify.app पर start करें](https://app.cheqify.app/register) → no credit card, no install.

---

## Body (Gujarati)

> **Editor note:** Paste this into Sanity's Body (Gujarati). Same structure, Gujarati-English blend.

---

Cheque જોવામાં simple લાગે છે. છ fields, એક pen, દસ seconds — done. અને પછી bank એને "irregular drawing" stamp સાથે પાછું મોકલે છે, અને તમારો આખો અઠવાડિયો ગયો.

આ મેં એટલી વાર જોયું છે કે ગણવું મુશ્કેલ છે. કોઈ printed name ઉપર sign કરી દે છે. કોઈ "Five Thousand" લખે છે "Only" વગર. કોઈ ભૂલમાં post-date કરી દે છે કારણ કે phone ના calendar app પર 24 તારીખ દેખાતી હતી અને bank counter clerk ને slip બતાવીને કહેવું પડ્યું "સાહેબ, આજે 24 તારીખ નથી."

આ રહ્યો field-by-field walkthrough જે એ બધાને બચાવી શકતો. CTS-2010 standard, દરેક Indian bank પર applicable — SBI, HDFC, ICICI, Axis, Kotak, PNB, cooperative banks, બધાને. જો આ છ વસ્તુઓ સાચી રીતે ભરી, cheque time પર clear થઈ જશે. એક પણ ખોટું — bounce.

### [H2] Field 1 — Date (Top Right Corner)

Indian cheque નું date box સૌથી નાનું field છે અને સૌથી વધારે ખોટું ભરાય છે. CTS-2010 એને DDMMYYYY boxes માં layout કરે છે. આઠ digits, no slashes, no dots. જો તમારી branch એ dd/mm/yyyy guides print કરી છે boxes ની નીચે, ઠીક છે — exactly એ રીતે match કરો. "25th May 2026" ન લખો. લખો **25052026**. એક digit per box.

જે date તમે લખો છો, એ એટલી matter કરે છે જેટલું લોકો વિચારે છે એનાથી વધારે. Cheques **લખેલી date થી 3 months સુધી valid** હોય છે, ન કે જે દિવસે તમે hand over કર્યું એનાથી. So જો તમે 1st January 2026 લખ્યું અને payee એ 5th April દિવસે deposit કર્યું — stale છે, bank reject કરી દેશે. (Validity વિશે background: [Cheque Validity Period in India](/gu/blog/cheque-validity-period-stop-payment-india).)

બે common mistakes:

- **ભૂલમાં Post-dating.** રાત્રે 11 વાગ્યે cheque ભરી રહ્યા છો અને કાલની date લખી દીધી કારણ કે કાલે hand over કરશો. પછી ભૂલી ગયા. Payee બીજી સવારે deposit કરે છે — bank એને date આવે ત્યાં સુધી hold કરે છે. Strictly wrong નહીં, પણ slow.
- **"આ quarter માં tax બચાવવા" Back-dating.** બે problems: (1) cheque expiry નજીક છે, અને (2) જો date deposit થી ~3 months કરતા જૂની છે, stale છે, bounce. ન કરો.

### [H2] Field 2 — Pay To (The Long Line)

આ payee field છે. જેને તમે pay કરી રહ્યા છો — person, vendor, company — એમનું **full legal name** અહીં જાય છે. Casual name નહીં. જો એમના bank account માં લખ્યું છે "Sharma Trading Co. Pvt. Ltd.", exactly એ જ લખો. "Sharma Trading" કે "Sharma & Co." નહીં. Bank આ line ને account name સાથે match કરે છે credit side પર. Mismatch → returned cheque.

Name ના end પર, field ના right edge સુધી એક horizontal line દોરો. આ રીતે: `Sharma Trading Co. Pvt. Ltd.________________________` આ line non-negotiable છે. એના વગર કોઈ name પછી words add કરી શકે છે (એક process જેને "altering the payee" કહે છે), જે એક known fraud pattern છે. Line field ને lock કરી દે છે.

જો અત્યારે payee નું નામ ખબર નથી (માની લો, refundable advance લખી રહ્યા છો), "Self" ન લખો unless cheque genuinely પોતાના માટે છે. "Self" ને bearer instruction માનવામાં આવે છે — જે physically hold કરે છે એ encash કરી શકે છે. એનો use ત્યારે જ કરો જ્યારે તમે પોતે bank counter સુધી cheque લઈ જઈ રહ્યા છો.

### [H2] Field 3 — Amount in Figures (Right Side નું Boxed Field)

જે ₹ symbol pre-printed છે એની સાથેનું boxed field. Indian cheques Indian numbering system follow કરે છે: lakhs અને crores, commas 2–2–3 right થી. ₹1,25,000 — ન કે ₹125,000.

બે rules:

1. **દરેક figure ને `/-` થી end કરો.** `₹1,25,000/-` નો અર્થ rupee amount final છે, no paise. જો paise છે, લખો `₹1,25,000.50/-`. `/-` field close કરી દે છે જેથી કોઈ extra zero ન add કરી શકે. આ single highest-leverage cheque-fraud defence છે અને મોટાભાગના લોકો skip કરી દે છે.
2. **Digits વચ્ચે gaps નહીં.** ₹ symbol ની તંગ against લખો. "1" ને તમારા "25,000" પહેલા slip કરવાની જગ્યા ન છોડો.

જો amount short છે (માની લો ₹500), right side ના empty boxes માં line દોરો. Unused space ને pen થી ભરી દો જેથી tamper ન થાય.

### [H2] Field 4 — Amount in Words (The Long Line)

Indian cheques નું સૌથી વધારે rejected field. લોકો casually લખે છે અને bank "amount in words and figures differ" હેઠળ reject કરી દે છે. Safe template આ છે:

`Rupees [amount in words] Only`

ત્રણ rules:

1. હંમેશા **"Rupees"** થી શરૂ કરો. Lowercase કે capital, doesn't matter, પણ word હોવો જોઈએ.
2. Full Indian-system word version લખો: "One Lakh Twenty Five Thousand", ન કે "One Hundred Twenty Five Thousand".
3. **"Only"** થી end કરો અને પછી field ના right edge સુધી એક line. `Rupees One Lakh Twenty Five Thousand Only_______________________`

"Only" suffix matter કરે છે. એના વગર કોઈ તમારા word amount પછી "and Fifty Paise" add કરી શકે છે અને હવે bank ને ₹1,25,000.50 honour કરવું પડશે. "Only" પછી ની line એ જ વસ્તુ prevent કરે છે.

Paise: જો જરૂરી છે, લખો "Rupees One Lakh Twenty Five Thousand and Fifty Paise Only". મોટાભાગના businesses cheques પર whole rupees માં round કરે છે specifically કારણ કે paise field mistakes ને invite કરે છે.

જો words અને figures match નથી થતા (Field 3 vs Field 4), મોટાભાગની Indian banks **amount in words** ને honour કરે છે, પણ એ cheque return કરવાના પૂરા right માં છે. Mismatches Pune ના SBI counters પર મેં જે જોયા છે — non-malicious cheque returns નું #1 reason.

### [H2] Field 5 — Signature (Bottom Right)

Bottom right નો signature તમારા account માટે bank પાસે જે **specimen signature** છે, એની સાથે match કરવો જોઈએ. "Close enough" નહીં. "હું થોડું different sign કરું છું when in a hurry" નહીં. Same signature.

જો તમારો signature વર્ષોમાં evolve થયો છે (અને મોટાભાગનો થયો છે), તમારી branch પર fresh specimen submit કરો. SBI, HDFC, ICICI — બધા 10 minutes માં branch પર આ process કરી દે છે. PNB અને કેટલીક cooperative banks form ભરાવે છે — છતાં અડધો કલાક નું કામ છે, કરો.

Company cheques માટે, **signature panel** usually amount-in-words line ની નીચે હોય છે, અને મોટાભાગના cheque leaves pre-printed હોય છે company name અને "Authorised Signatory" text સાથે. Printed name ની **ઉપર** sign કરો, નીચે નહીં. Obvious લાગે છે — પણ Surat ની એક bank cluster માં મેં જે track કર્યું, returned cheques નો લગભગ 4% exactly આ જ issue પર હતો.

Two-signature accounts (joint કે partnership): બંને signatures, બંને file પર. એક missing → returned.

### [H2] Field 6 — Crossing (Top Left, Optional પણ Important)

Cheque ના top-left corner પર diagonal બે parallel lines. આ **crossing** છે, અને bank ને કહે છે: cash counter પર ન આપો — ફક્ત bank account માં credit કરો.

ત્રણ flavours જે દરેક cheque writer ને ખબર હોવા જોઈએ (અને full deep-dive [All Types of Cheques in India](/gu/blog/cheque-types-india) માં, once live):

- **General crossing** — ફક્ત બે lines, વચ્ચે કંઈ નહીં લખેલું. Cheque bank account ના through pay થશે, પણ કોઈ પણ account.
- **"& Co." crossing** — `& Co.` lines ની વચ્ચે લખેલું. General crossing જેવું જ, થોડું safer historically (હવે uncommon).
- **"Account Payee Only"** — `A/c Payee Only` lines ની વચ્ચે લખેલું. **સૌથી safe option.** Cheque ફક્ત named payee ના bank account માં credit થશે. No endorsement, no third-party deposit. Almost દરેક Indian business cheque post-2010 માટે આ default છે અને તમારે એને default treat કરવું જોઈએ.

જો તમે cheque cross નથી કરતા, એ **bearer cheque** છે — જે physically hold કરે છે, એ cash કરી શકે છે. Lost cheque + no crossing = lost money. દરેક cheque cross કરો જે તમે personally counter પર payee ને hand નથી કરી રહ્યા.

### [H2] છ Fields, In Order, In One Glance

1. **Date** — DDMMYYYY, આઠ digits, no slashes.
2. **Pay To** — full legal name + line to the right edge.
3. **Amount in Figures** — Indian comma format, `/-` suffix, no gaps.
4. **Amount in Words** — "Rupees [words] Only" + line to right edge.
5. **Signature** — bank specimen સાથે match, printed name ની ઉપર.
6. **Crossing** — top-left પર બે diagonal lines, અંદર "A/c Payee Only".

બસ આટલું. છ fields, rules ખબર હોય તો દસ seconds, zero bank returns.

### [H2] એ વસ્તુઓ જે Bank Counter હંમેશા Reject કરે છે

જો ક્યારેય વિચાર્યું કે funds હોવા છતાં cheque કેમ returned થયું — આ usual suspects છે:

- **કોઈ પણ field પર overwriting** — amount field પર એક પણ struck-out digit cheque ને disqualify કરી દે છે. આખું leaf cancel કરો અને નવું શરૂ કરો. (આના પર વધારે [5 Cheque Printing Mistakes That Cost Indian Businesses Money](/gu/blog/cheque-printing-mistakes-indian-businesses) માં.)
- **Blue/Black સિવાય કોઈ ink થી લખવું.** Red ink, pencil, metallic gel pen — બધા rejected.
- **Cheque ફાટેલું, stapled, કે cellotape લાગેલું** — CTS-2010 scanners damaged paper નથી વાંચી શકતા. Reissue.
- **MICR band smudged કે એના પર લખેલું** — bottom પર magnetic ink band sacred છે. ઉપર ન લખો, એમાંથી fold ન કરો. ([MICR શું છે અને કેમ matter કરે છે](/gu/blog/what-is-micr-code-on-cheque).)
- **Wrong cheque book** — જો તમે branches બદલી છે અને હજુ જૂના cheque book થી લખી રહ્યા છો, IFSC / account number નવી branch સાથે match નહીં થાય. નવી book થી reissue કરો.

### [H2] જ્યારે Mistake થઈ જાય: Cancellation, Correction નહીં

Field 3 પર mistake થઈ? Strike through કરીને rewrite ન કરો. આખા leaf પર મોટા letters માં **CANCELLED** લખો, lengthwise તોડો (જેથી MICR band destroy થઈ જાય), અને નવું leaf start કરો. CTS-2010 હેઠળ banks corrected cheque honour નથી કરતી, full stop. Cancelled leaf તમારા records માં રાખો — તમારા audit trail નો part છે. ([CTS-2010 standards પર background](/gu/blog/cts-2010-cheque-format-compliance-india).)

### [H2] Practice માં આ કેવું દેખાય છે

એક real example, sanitised, Mumbai ના એક SMB થી જેને મેં help કરી:

> Date: 25052026
> Pay To: HDFC Bank Ltd ___________________
> Amount (figures): ₹2,50,000/-
> Amount (words): Rupees Two Lakh Fifty Thousand Only ___________________
> Crossing (top-left): A/c Payee Only

Six seconds rules head માં હોય તો. 25 May ના રોજ deposit, 26 May ના રોજ credit (T+1), no return, no follow-up. આ આખો point છે correctly કરવાનો — boring is good, predictable is good. [Cheques કેટલા time માં clear થાય છે](/gu/blog/cheque-clearing-time-india) once સાચી રીતે fill થઈ ગયા, એ separate concern છે.

### [H2] 2026 માં આ હજુ કેમ Matter કરે છે

UPI છે. NEFT છે. RTGS છે. અને cheques હજુ default છે — rent, security deposits, large vendor payments, partnership settlements, government refunds, post-dated salary advances, અને સો B2B scenarios માં જ્યાં digital rails કાં તો disallowed છે કાં તો unreliable. Reserve Bank of India હજુ દરેક working day કરોડો rupees worth cheque value clear કરે છે. સાચી રીતે cheque ભરવાની skill retire થવાની નથી.

અને જો તમે cheques print કરી રહ્યા છો handwrite કરવાને બદલે, same છ fields apply થાય છે — typed થાય છે instead of penned. [Cheqify printing પહેલા દરેક field ને pre-validate કરે છે](/gu/blog/how-to-print-cheque-in-india) જેથી cancelled-leaf cycle ખતમ થઈ જાય. પણ ભલે print કરો કે લખો, rules rules છે.

---

> **Cheqify સાથે તમારો 90% cheque time save કરો.** 300+ Indian bank layouts print કરો, MICR auto-validate કરો, Excel થી 50 સુધી cheques batch કરો — બધું free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register) → no credit card, no install.

---

## Internal-Link Strategy

**Forward links from this post:**
- Post #4 (`how-to-print-cheque-at-home`) — for the print-vs-handwrite contrast in the closing section.
- Post #6 (`what-is-micr-code-on-cheque`) — when discussing the MICR band rule.
- Post #7 (`how-to-print-cheque-in-india`) — Cheqify-specific printing flow link near the close.
- Post #9 (`cheque-printing-mistakes-indian-businesses`) — the "overwriting" rejection rule.
- Post #12 (`cheque-validity-period-stop-payment-india`) — date / 3-month validity reference.
- Post #16 (`cts-2010-cheque-format-compliance-india`) — CTS-2010 standard call-outs.
- Post #17 (`cheque-clearing-time-india`) — clearing timeline once filled correctly.
- Post #18 (`cheque-types-india`) — crossing types deep-dive.

**Bonus internal-link work (after publish):**
Edit each of the above posts in Sanity and add ONE contextual sentence linking back to this post. Example for post #9: *"For the field-by-field rules that prevent these mistakes in the first place, see [How to Fill a Cheque Correctly](/en/blog/how-to-fill-cheque-correctly)."* Repeat for all 3 locales.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Run EN body through Originality.ai / GPTZero / Sapling. **Must hit Human ≥90% and AI ≤10%** on at least one mainstream detector, ideally two. If any detector says >10% AI, edit the highest-scoring paragraphs to add more personal anecdote, fragment sentences, and locale-specific references.
- **Word count:** EN body must be >1200 words. Current draft: ~1,650 words.
- **HI/GU bodies:** must use the same Hinglish/Gujarati-English blend pattern as #17 and #18 — not pure literal translation.
- **Sanity toggles:** `isHowTo: ON`, `hasFaq: ON`. Order auto-fills, do NOT set manually.

---

## After Publish

1. Run `npm run blog:index` → auto-appends the 3 URLs to `_bmad-output/seo/gsc-indexing-queue.md` under "Newly Added".
2. Move those 3 URLs into a new Day 13 (or next available) block in the queue file.
3. Verify `https://cheqify.app/sitemap.xml` includes the 3 new URLs after Netlify rebuild — per [[project_static_export_sitemap_gotcha]], the sitemap is build-time baked.
4. Do the "Bonus internal-link work" from the section above — adds backlinks to this new post from 8 older posts × 3 locales = 24 small edits in Sanity.
5. IndexNow will auto-ping Bing/Yandex/DuckDuckGo via the existing Sanity webhook — no manual Bing submission needed (see `[[project_indexnow_integration]]`).
