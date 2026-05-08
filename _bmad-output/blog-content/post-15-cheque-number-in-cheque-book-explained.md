# Blog Post #15 — Cheque Number in Cheque Book Explained

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

## Why This Topic

"What is the cheque number on a cheque book" is one of the highest-volume, lowest-competition cheque queries in India — roughly 2,400/mo searches with weak existing answers. Most ranking results are bank help pages that confuse the cheque number with the MICR code, IFSC, or account number. A clean, India-specific explainer with side-by-side disambiguation is a textbook page-1 candidate. The post also feeds the existing cluster: MICR (post #6), printing (post #7), reconciliation (post #8), validity (post #12), lifecycle (post #13) — all topics where the cheque number is implicitly used but never properly defined.

---

## Sanity Fields

- **Slug:** `cheque-number-in-cheque-book-explained`
- **Tags:** `Cheque Guide`, `Banking & RBI`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** NO (definitional / explainer)
- **Has FAQ:** YES

---

## Publishing Metadata

- **Scheduled publish date:** Monday 2026-05-11, 10:00 IST
- **Primary keyword:** `cheque number in cheque book`
- **Secondary keywords:** what is cheque number, cheque serial number, where is cheque number, cheque number vs MICR, cheque book number meaning
- **Reading time:** ~6 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/cheque-number-in-cheque-book-explained`
  - HI: `https://cheqify.app/hi/blog/cheque-number-in-cheque-book-explained`
  - GU: `https://cheqify.app/gu/blog/cheque-number-in-cheque-book-explained`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `cheque-number-explained-cover.webp`
- **Subject:** Close-up of an Indian bank cheque with the **6-digit cheque serial number** in the top-left corner highlighted with a yellow circle and a callout label "Cheque Number". Faint MICR band visible at the bottom for visual contrast. Cheqify wordmark bottom-right.
- **Alt text:** Cheque number location on an Indian bank cheque — top-left serial number explained.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Cheque Number in a Cheque Book Explained — Where It Is, What It Means, Why It Matters (2026)
- **HI:** Cheque Book में Cheque Number समझाया गया — कहाँ होता है, क्या मतलब है, क्यों ज़रूरी है (2026)
- **GU:** Cheque Book માં Cheque Number સમજાવ્યો — ક્યાં હોય છે, શો અર્થ છે, કેમ જરૂરી છે (2026)

---

## Descriptions

- **EN:** What the cheque number on an Indian cheque actually means, where to find it, how it differs from MICR / IFSC / account number, and where it shows up in tracking, reconciliation, and stop-payment. Plain-English explainer with examples.
- **HI:** भारतीय cheque पर cheque number का असली मतलब क्या है, कहाँ मिलता है, MICR / IFSC / account number से कैसे अलग है, और tracking, reconciliation, और stop-payment में कहाँ काम आता है. Plain-English explainer with examples.
- **GU:** ભારતીય cheque પરના cheque number નો સાચો અર્થ શું છે, ક્યાં મળે છે, MICR / IFSC / account number થી કેવી રીતે અલગ છે, અને tracking, reconciliation, અને stop-payment માં ક્યાં કામ આવે છે. સાદી ભાષામાં explainer with examples.

---

## Body (English)

Paste the following into Sanity's Body (English) rich text editor. Use heading buttons for H2/H3.

---

### [H2] What "Cheque Number" Actually Means

Pull out a cheque from your HDFC or SBI cheque book. Look at the top-left corner. That little 6-digit number? That's your cheque number.

Most people never give it a second glance.

Then a vendor in Surat calls saying the payment never arrived, or a stop-payment goes wrong, or an auditor wants the supporting cheque from three years ago. Suddenly that little number is the only thing that matters on the page.

The cheque number is a unique serial. One per cheque. It identifies exactly one cheque on your account, and no other. Your bank uses it. The receiving bank uses it. The clearing house uses it. Your books should use it too, but most SMBs we talk to don't bother tracking it. We'll get to why that's a problem.

If you've got a 50-leaf cheque book, the numbers run straight through. Say your book opens at `008473`. The next leaf is `008474`, then `008475`, and so on, all the way to `008522` on leaf number 50. When the book finishes, the bank issues you a fresh book starting at `008523`. The numbering never resets. You'll never see `008473` again on that account, ever.

That's the rule. One number, one cheque, forever.

### [H2] Where Exactly Is the Cheque Number Printed?

Two places. Look once at the top-left of any Indian bank cheque — HDFC, ICICI, Axis, Kotak, doesn't matter. You'll see the cheque number there in regular ink. Sometimes it's bare 6 digits. Sometimes the bank adds a 3-digit series prefix and prints it as `001 008473`. Same number, just dressed up.

Now flip your eyes to the bottom of the cheque. See that thin band of weird-looking digits? That's the MICR band. The cheque number is printed there too — but in a special font that machines can read. It's the first field in that band, before the city code, bank code, and account-type code.

Why two places? Because two different readers need it. The top-left version is for you and the teller and the payee. The MICR band version is for the high-speed sorting machines at the clearing centre that process millions of cheques a night.

We've covered the [MICR code in detail in a separate guide](https://cheqify.app/en/blog/what-is-micr-code-on-cheque) if you want to dig into how that band works. For now, just know: cheque number sits in both spots, and both versions are identical.

### [H2] What Format Does the Cheque Number Follow?

In India, every standard retail or current-account cheque book uses a **6-digit serial**. Pretty much across the board. HDFC, SBI, Axis, Yes Bank, Bank of Baroda, all of them.

Some banks slap a 3-digit prefix on top as a series indicator, which is why you'll occasionally see `001 008473` printed on the cheque. The 6-digit part is what counts.

Two things you should know:

**Sequential inside the book.** Open your cheque book to the first leaf. Note the number. Now flip to the last leaf. The numbers should run unbroken between them. If you see a gap, something's wrong. Either a leaf got torn out, or your book has a printing defect — and either way, call your branch.

**Unique forever, per account.** A cheque number doesn't reset when the book runs out. Your next book picks up where the old one ended. If your last book ended at `008522`, your new book starts at `008523`. There is no `008473` happening twice on your account, period.

That's actually pretty useful. It means a cheque number, all on its own, is enough to look up exactly one cheque. You don't need the date. You don't need the amount. You don't need the payee name. Six digits, and the bank can pull the record.

### [H2] Cheque Number vs MICR vs IFSC vs Account Number — The Side-by-Side

This is where 9 out of 10 people get confused. All four numbers live on the same piece of paper. They mean completely different things.

| Number | What it identifies | Where on the cheque | Length |
|---|---|---|---|
| **Cheque number** | This specific cheque leaf | Top-left + start of MICR band | 6 digits |
| **MICR code** | The branch (city + bank + branch routing) | MICR band, after the cheque number | 9 digits |
| **IFSC code** | The branch (used for NEFT / RTGS / IMPS, not clearing) | Top of cheque, near branch name | 11 alphanumeric |
| **Account number** | Your account at that branch | Pre-printed on the cheque, usually below the payee line | 9–18 digits |

If someone ever asks you to explain it, here's the cheat code: cheque number = the cheque itself. MICR = the branch (for clearing). IFSC = the branch (for digital transfers like NEFT). Account number = you, the customer.

Four numbers, four jobs. Different jobs. Don't mix them up.

### [H2] How Banks Actually Use the Cheque Number

Every step of a cheque's life inside the banking system runs on the cheque number. It's the field the bank's systems hash on. Honestly, calling it the "primary key" of a cheque is the most accurate way to think about it.

**Clearing.** When the receiving bank deposits your cheque, the MICR sorter reads the cheque number first. It uses that number to find your account, check the balance, and either honour or return the cheque. If your cheque clears, your books should reflect it on the same number.

**Stop-payment.** Say you wrote cheque `008473` to a vendor and now want to stop it. You walk into the branch, fill the form, write `008473`. The bank flags that exact number. If you accidentally write `008374` — easy mistake, similar digits — the bank stops the wrong cheque. The right one keeps going. Verify your number twice before submitting a stop-payment request. We've covered this end-to-end in our [stop-payment guide](https://cheqify.app/en/blog/cheque-validity-period-stop-payment-india).

**Bounce records.** When a cheque bounces, the bank logs it against its number. If the vendor sues you under [Section 138 of the NI Act](https://cheqify.app/en/blog/section-138-ni-act-cheque-bounce-india), the demand notice and the eventual case papers reference the cheque number, the amount, and the date. Of those three, the cheque number is the most important. The amount can be disputed. The date can be argued. The cheque number cannot.

**Audit and reconciliation.** Your bank statement comes in. It says `ChqNo 008473 cleared 12/05/2026 ₹47,500`. You match that against your books on the cheque number. Tally? Done. Mismatch? You've got a reconciliation problem to investigate. We've written about [the full reconciliation flow](https://cheqify.app/en/blog/how-to-reconcile-cheques-with-bank-statements) for SMBs who want to get this right.

The bank doesn't care about your internal voucher numbers. It cares about the cheque number. Match on that, or you're going to spend hours every month doing manual reconciliation that should take minutes.

### [H2] When the Cheque Number Suddenly Becomes Critical

You're not going to think about cheque numbers most days. Then a Tuesday morning rolls around and one of these happens.

**A cheque goes missing.** You wrote `008473` to a Pune vendor on the 12th. It's the 19th and they're calling, payment hasn't shown up. You're not sure if you posted it, gave it to a peon, or left it in your drawer. The bank's first question, every time: "What's the cheque number?" If you can't answer, no stop-payment instruction, no investigation, no nothing.

**A vendor claims they never got paid.** "Sir, payment kahan hai?" If your books only say "₹47,500 paid to Suresh Textiles, 12 April" — without the cheque number — how do you prove which cheque, whether it was cashed, or whether it's still floating? You can't. You're stuck calling the bank, asking them to dig through your statement, hoping to spot the right one.

**An auditor pulls a sample.** Three years after the fact, the CA shows up. "I want supporting documents for this payment voucher." The reverse lookup runs on the cheque number. No cheque number? Half your evidence is missing. Auditors notice this. So do tax assessing officers under Section 133(6) inquiries.

**Cheque fraud surfaces.** When fraud kicks in — a duplicate cheque, a forged signature, an unauthorized issue — every conversation reduces to numbers. Which cheque was issued? Who authorized it? When did it print? When did it clear? Without numbers, fraud becomes impossible to prove. We wrote the [cheque fraud playbook](https://cheqify.app/en/blog/how-to-avoid-cheque-fraud-in-india) on this.

Bottom line: the moment something goes wrong, the cheque number is the only thing the bank, the auditor, the lawyer, and the police care about.

### [H2] How Cheqify Handles Cheque Numbers

We built Cheqify around this exact pain point. Tracking cheque numbers in spreadsheets is how SMBs lose them.

Here's how the product handles it.

**Auto-increment when you start a new book.** When your old book runs out and you grab a new one, you tell Cheqify the starting number once. Every cheque after that increments automatically. No skipping. No duplicates. No "wait, what was the last number I used?" moments.

**Searchable register, instantly.** Type `008473` into the search bar. The full record pops up — payee, amount, date, status, who authorized it, when it was printed. Three years from now, when an auditor asks for that cheque, this is a 5-second lookup, not a 30-minute hunt through a steel almirah.

**Status pipeline.** Every cheque number lives in a status: drafted, printed, dispatched, presented, cleared, bounced, stopped. You update the status as life happens. This is the [end-to-end cheque lifecycle](https://cheqify.app/en/blog/cheque-lifecycle-management-explained) approach we believe makes cheque ops sane.

**Auto-match against bank statements.** Upload your statement, Cheqify matches each line against your issued register on cheque number. What used to take half a Saturday now takes 30 seconds.

**Audit-ready exports.** When the CA asks, you export. Done.

If you've been doing this in a Tally column, an Excel sheet, or a paper register, switching to Cheqify is a small change. The pay-off shows up the day something goes wrong, which inevitably it will.

### [H2] Common Myths About the Cheque Number (And the Truth)

We hear these over and over. Let's clear them up.

**"Cheque number and MICR code are the same."** No, completely different. MICR is a 9-digit branch identifier. Cheque number is a 6-digit cheque identifier. They sit next to each other in the MICR band at the bottom, which is why so many people mix them up.

**"You can reuse a cheque number after some time."** Nope. Within a single account, every cheque number is permanent. The bank never recycles a number. If your book ended at `008522`, your next book starts at `008523`. The number `008473` exists for one cheque on your account, ever.

**"If I lose the carbon copy, I've lost the number."** Only if you lost the cheque book too. The unused leaves still sitting in your book carry the next-up cheque numbers. By looking at the book, you can usually figure out which numbers got issued and which didn't. Pro tip: write the cheque number in your accounting software the moment you write the cheque, not later. Memory is unreliable.

**"The bank can't trace a cheque without the date and amount."** Yes, they can. The cheque number is enough. Date and amount are useful confirmations, not requirements. We've heard branch staff say "Sir, date toh do" — that's just because dates make their search faster, not because the system needs it.

**"My bank tracks cheque numbers, so I don't need to."** Your bank tracks the cheques that *cleared*. The drafts you started, the cheques you printed but never dispatched, the ones the courier lost — those exist only in your records. The fraud-prone segment of the cheque lifecycle is exactly the segment your bank does NOT see. So if you're not tracking, that segment is invisible.

### [H2] Quick Reference

For when you forget everything else and just need the gist:

- The cheque number is the 6-digit serial in the top-left corner of every cheque, repeated in the MICR band at the bottom. Same number, two places.
- It identifies one specific cheque on your account, forever. Banks never reuse it.
- Don't confuse it with MICR (9-digit branch code), IFSC (11-character branch code for digital transfers), or your account number (9-18 digits).
- Banks use the cheque number as the primary key for everything: clearing, stop-payment, bounces, audit trail, fraud investigation.
- Capturing it in your own books — not just on the cheque — is the difference between a 5-minute fix and a 5-hour forensic exercise when something goes wrong.
- Cheqify auto-captures and auto-increments cheque numbers across the [full cheque lifecycle](https://cheqify.app/en/blog/cheque-lifecycle-management-explained), so you stop having to remember.

---

## Body (Hindi)

Paste the following into Sanity's Body (Hindi) rich text editor:

---

### [H2] "Cheque Number" का असल मतलब क्या है

अपनी HDFC या SBI cheque book निकालिए. Top-left corner देखिए. वो छोटा सा 6-digit number? वही आपका cheque number है.

ज़्यादातर लोग कभी दूसरी नज़र से नहीं देखते इसे.

फिर एक दिन Surat का vendor call करता है कि payment पहुँचा नहीं, या stop-payment गलत हो जाता है, या तीन साल पहले का cheque auditor माँगने लगता है. अचानक वही छोटा number page पर सबसे important चीज़ बन जाता है.

Cheque number एक unique serial है. एक cheque पर एक. आपके account का बस वही एक cheque identify करता है, और कोई नहीं. आपका bank use करता है. Receiving bank use करता है. Clearing house use करता है. आपकी books को भी use करना चाहिए, पर ज़्यादातर SMBs जिनसे हम बात करते हैं वो track नहीं करते. क्यों ये problem है, बताते हैं आगे.

50-leaf cheque book है? Numbers seedhe sequence में चलते हैं. मान लीजिए book `008473` से खुलती है. अगली leaf `008474`, फिर `008475`, और ऐसे leaf number 50 तक `008522`. जब book खत्म होती है, bank नई book देता है `008523` से शुरू. Numbering कभी reset नहीं होती. आप उस account पर `008473` फिर कभी नहीं देखेंगे, ever.

बस यही rule है. एक number, एक cheque, हमेशा के लिए.

### [H2] Cheque Number Cheque पर असल में कहाँ Print होता है?

दो जगह. किसी भी भारतीय bank का cheque उठाइए — HDFC, ICICI, Axis, Kotak, कोई भी. Top-left corner में regular ink से cheque number दिखेगा. कभी सिर्फ 6 digits. कभी bank उसके आगे 3-digit series prefix लगा देता है, तो `001 008473` जैसा दिखता है. Same number, बस सजाया हुआ.

अब cheque के bottom पर देखिए. वो थिन सी band जिसमें weird-looking digits हैं? वो MICR band है. Cheque number वहाँ भी print है — पर एक special font में जो machines पढ़ती हैं. वो उस band का पहला field है, city code, bank code, और account-type code से पहले.

दो जगह क्यों? क्योंकि दो अलग readers को चाहिए. Top-left version आपके लिए, teller के लिए, payee के लिए. MICR band version clearing centre की उन high-speed sorting machines के लिए जो रात भर लाखों cheques process करती हैं.

हमने [MICR code पर अलग detailed guide](https://cheqify.app/hi/blog/what-is-micr-code-on-cheque) लिखी है अगर आप उस band की detail समझना चाहें. अभी के लिए बस इतना: cheque number दोनों जगह बैठा है, और दोनों versions identical हैं.

### [H2] Cheque Number का Format क्या होता है?

भारत में हर standard retail या current-account cheque book **6-digit serial** use करती है. लगभग सब banks में यही पैटर्न है. HDFC, SBI, Axis, Yes Bank, Bank of Baroda, सब.

कुछ banks ऊपर से 3-digit prefix लगा देते हैं series indicator की तरह, इसलिए cheque पर कभी `001 008473` print दिखता है. Count में आता है सिर्फ 6-digit वाला हिस्सा.

दो बातें जो आपको पता होनी चाहिए:

**Book के अंदर sequential.** अपनी cheque book खोलिए. पहली leaf का number देखिए. अब last leaf खोलिए. दोनों के बीच numbers unbroken चलने चाहिए. Gap दिखे तो कुछ गलत है. या तो leaf निकाली गई, या आपकी book में printing defect है — दोनों case में branch को call कीजिए.

**हमेशा के लिए unique, per account.** Cheque number reset नहीं होता जब book खत्म हो जाए. अगली book वहीं से pick up करती है जहाँ पुरानी रुकी थी. पुरानी book `008522` पर खत्म हुई? नई book `008523` से start होगी. आपके account पर `008473` दो बार नहीं होगा, period.

ये actually काम का है. मतलब cheque number, अकेला, exactly एक cheque look up करने के लिए काफी है. Date की ज़रूरत नहीं. Amount की ज़रूरत नहीं. Payee name की ज़रूरत नहीं. Six digits, और bank record निकाल सकता है.

### [H2] Cheque Number vs MICR vs IFSC vs Account Number — Side by Side

यहीं पर 10 में से 9 लोग confuse होते हैं. चारों numbers एक ही paper पर बैठे हैं. मतलब बिल्कुल अलग है.

| Number | क्या identify करता है | Cheque पर कहाँ | Length |
|---|---|---|---|
| **Cheque number** | यही specific cheque leaf | Top-left + MICR band की शुरुआत | 6 digits |
| **MICR code** | Branch (city + bank + branch routing) | MICR band, cheque number के बाद | 9 digits |
| **IFSC code** | Branch (NEFT / RTGS / IMPS के लिए, clearing के लिए नहीं) | Cheque के top पर, branch name के पास | 11 alphanumeric |
| **Account number** | उस branch पर आपका account | Pre-printed, आम तौर पर payee line के नीचे | 9–18 digits |

कोई पूछे तो cheat code: cheque number = cheque खुद. MICR = branch (clearing के लिए). IFSC = branch (digital transfers जैसे NEFT के लिए). Account number = आप, customer.

चार numbers, चार jobs. अलग-अलग jobs. Mix मत कीजिए.

### [H2] Banks Cheque Number को असल में कैसे Use करते हैं

Banking system के अंदर cheque की ज़िंदगी का हर step cheque number पर चलता है. यही वो field है जिस पर bank के systems hash करते हैं. Honestly, इसे cheque की "primary key" कहना सबसे accurate है.

**Clearing.** जब receiving bank आपका cheque deposit करता है, MICR sorter पहले cheque number पढ़ता है. उस number से आपका account ढूंढता है, balance check करता है, और cheque को honour या return करता है. Cheque clear हुआ? आपकी books को उसी number पर reflect करना चाहिए.

**Stop-payment.** मान लीजिए आपने vendor को `008473` cheque लिखा और अब रोकना है. Branch जाते हैं, form भरते हैं, `008473` लिखते हैं. Bank exact वही number flag करता है. गलती से `008374` लिख दिया — easy मिस्टेक, similar digits — bank गलत cheque रोक देता है. सही cheque चलता रहता है. Stop-payment request submit करने से पहले अपना number दो बार verify कीजिए. End-to-end process हमने [stop-payment guide](https://cheqify.app/hi/blog/cheque-validity-period-stop-payment-india) में cover किया है.

**Bounce records.** Cheque bounce होने पर bank उसके number के against log करता है. अगर vendor [Section 138 NI Act](https://cheqify.app/hi/blog/section-138-ni-act-cheque-bounce-india) के तहत case करे, demand notice और case papers में cheque number, amount, और date reference होते हैं. इन तीनों में cheque number सबसे important है. Amount पर dispute हो सकता है. Date पर argue हो सकता है. Cheque number पर नहीं.

**Audit और reconciliation.** Bank statement आता है. लिखा है `ChqNo 008473 cleared 12/05/2026 ₹47,500`. आप cheque number पर अपनी books से match करते हैं. Match हुआ? Done. Mismatch हुआ? Reconciliation problem investigate करनी है. हमने [पूरा reconciliation flow](https://cheqify.app/hi/blog/how-to-reconcile-cheques-with-bank-statements) उन SMBs के लिए लिखा है जो इसे properly करना चाहते हैं.

Bank को आपके internal voucher numbers से कोई मतलब नहीं. उसे cheque number चाहिए. इस पर match कीजिए, या हर महीने वो manual reconciliation करते रहिए जो minutes का काम है पर hours ले लेता है.

### [H2] Cheque Number अचानक Critical कब बन जाता है

ज़्यादातर दिन आप cheque numbers के बारे में नहीं सोचते. फिर एक मंगलवार सुबह आती है और इनमें से एक हो जाता है.

**Cheque खो जाता है.** आपने 12 तारीख को Pune के vendor को `008473` लिखा. आज 19 है और वो call कर रहे हैं, payment नहीं आया. आपको पता नहीं post किया, peon को दिया, या drawer में छूट गया. Bank का पहला सवाल, हर बार: "Cheque number क्या है?" जवाब नहीं? Stop-payment instruction नहीं, investigation नहीं, कुछ नहीं.

**Vendor कहे payment नहीं मिला.** "Sir, payment kahan hai?" आपकी books सिर्फ कहें "₹47,500 paid to Suresh Textiles, 12 April" — cheque number नहीं — तो आप कैसे prove करेंगे कि कौन सा cheque, cash हुआ या नहीं, अब भी floating है? नहीं कर सकते. Bank को call करते रहेंगे, statement में dig करते रहेंगे, सही वाला spot करने की उम्मीद में.

**Auditor sample खींचे.** तीन साल बाद CA आता है. "इस payment voucher का supporting document दिखाओ." Reverse lookup cheque number पर चलता है. Cheque number नहीं? आधा evidence गायब. Auditors notice करते हैं. Section 133(6) inquiries में assessing officers भी.

**Cheque fraud surface पर आता है.** Fraud पता चले तो — duplicate cheque, forged signature, unauthorized issue — हर बातचीत numbers पर आ जाती है. कौन सा cheque issue हुआ? किसने authorize किया? कब print हुआ? कब clear हुआ? Numbers नहीं तो fraud prove करना impossible. हमने इस पर [cheque fraud playbook](https://cheqify.app/hi/blog/how-to-avoid-cheque-fraud-in-india) लिखा है.

Bottom line: कुछ भी गलत होने के moment, cheque number ही वो चीज़ है जिसकी bank, auditor, lawyer, और police को पड़ी होती है.

### [H2] Cheqify Cheque Numbers कैसे Handle करता है

हमने Cheqify इसी pain point के आसपास बनाया है. Spreadsheets में cheque numbers track करना — यही तरीका है जिससे SMBs उन्हें खो देते हैं.

Product यह कैसे handle करता है, ये देखिए.

**नई book शुरू करते समय auto-increment.** पुरानी book खत्म हुई, नई उठाई, Cheqify को starting number एक बार बता दिया. उसके बाद हर cheque automatically increment होता है. Skip नहीं. Duplicate नहीं. "ruko, last number क्या था?" वाले moments नहीं.

**Searchable register, instantly.** Search bar में `008473` type कीजिए. पूरा record सामने — payee, amount, date, status, किसने authorize किया, कब print हुआ. तीन साल बाद, auditor इसी cheque के बारे में पूछे, ये 5-second lookup है, steel almirah में 30 minute का hunt नहीं.

**Status pipeline.** हर cheque number एक status में रहता है: drafted, printed, dispatched, presented, cleared, bounced, stopped. Cheque move होते-होते आप status update करते जाते हैं. यही [end-to-end cheque lifecycle](https://cheqify.app/hi/blog/cheque-lifecycle-management-explained) approach है जिससे cheque ops sane रहते हैं.

**Bank statements के against auto-match.** Statement upload कीजिए, Cheqify हर line को आपके issued register से cheque number पर match कर देता है. आधा Saturday लगता था, अब 30 seconds.

**Audit-ready exports.** CA माँगे, export करिए. Done.

अगर आप ये काम Tally column, Excel sheet, या paper register में कर रहे हैं, Cheqify पर switch छोटा है. Pay-off उस दिन दिखता है जब कुछ गलत हो जाता है. होगा कभी न कभी.

### [H2] Cheque Number के बारे में Common Myths (और Truth)

ये बार-बार सुनते हैं हम. Clear कर देते हैं.

**"Cheque number और MICR code एक ही हैं."** नहीं, बिल्कुल अलग. MICR 9-digit branch identifier है. Cheque number 6-digit cheque identifier है. MICR band में नीचे पास-पास बैठते हैं, इसी कारण इतने लोग mix कर देते हैं.

**"कुछ time बाद cheque number reuse कर सकते हैं."** नहीं. एक account के अंदर हर cheque number permanent है. Bank कभी reuse नहीं करता. आपकी book `008522` पर खत्म हुई? अगली `008523` से शुरू. Number `008473` आपके account के एक cheque के लिए है, हमेशा.

**"Carbon copy खो दी, number भी खो दिया."** सिर्फ अगर cheque book भी खो गई हो. Book में जो unused leaves बची हैं, वो next-up cheque numbers carry करती हैं. Book देखकर आप figure out कर सकते हैं कि कौन से numbers issue हुए और कौन से नहीं. Pro tip: cheque लिखते ही accounting software में cheque number डाल दीजिए, बाद में नहीं. Memory unreliable है.

**"Date और amount के बिना bank cheque trace नहीं कर सकता."** कर सकता है. Cheque number अकेला काफी है. Date और amount useful confirmations हैं, requirements नहीं. Branch staff "Sir, date toh do" इसलिए बोलता है क्योंकि search faster होता है, system को नहीं चाहिए.

**"मेरा bank cheque numbers track करता है, मुझे ज़रूरत नहीं."** आपका bank उन cheques को track करता है जो *clear* हुए. Drafts जो start किए, print किए पर dispatch नहीं — वो सिर्फ आपके records में हैं. Courier वाला खो गया? वो भी सिर्फ आपके records में. Cheque lifecycle का सबसे fraud-prone segment वही है जो bank को नहीं दिखता. Track नहीं किया तो वो segment invisible.

### [H2] Quick Reference

बाकी सब भूल जाओ, बस इतना याद रखो:

- Cheque number हर cheque के top-left corner पर 6-digit serial है, MICR band में नीचे फिर से print. Same number, दो जगह.
- आपके account के एक specific cheque को हमेशा के लिए identify करता है. Banks कभी reuse नहीं करते.
- MICR (9-digit branch code), IFSC (11-character branch code digital transfers के लिए), या account number (9-18 digits) से confuse मत कीजिए.
- Banks cheque number को primary key की तरह use करते हैं हर चीज़ के लिए: clearing, stop-payment, bounces, audit trail, fraud investigation.
- सिर्फ cheque पर नहीं, अपनी books में भी capture करना — कुछ गलत होने पर 5-minute fix और 5-hour forensic exercise के बीच का फर्क है.
- Cheqify [पूरे cheque lifecycle](https://cheqify.app/hi/blog/cheque-lifecycle-management-explained) में cheque numbers auto-capture और auto-increment करता है, ताकि याद रखने की ज़रूरत न पड़े.

---

## Body (Gujarati)

Paste the following into Sanity's Body (Gujarati) rich text editor:

---

### [H2] "Cheque Number" નો સાચો અર્થ શું છે

તમારી HDFC કે SBI cheque book કાઢો. Top-left corner જુઓ. એ નાનો 6-digit number? એ જ તમારો cheque number છે.

મોટાભાગના લોકો બીજી નજરે ક્યારેય જોતા નથી.

પછી એક દિવસ Surat નો vendor call કરે છે કે payment પહોંચ્યું નથી, કે stop-payment ખોટું પડે છે, કે ત્રણ વર્ષ પહેલાંનો cheque auditor માંગવા લાગે છે. અચાનક એ જ નાનો number page પરનો સૌથી મહત્વનો number બની જાય છે.

Cheque number એક unique serial છે. એક cheque પર એક. તમારા account નો ફક્ત એ જ cheque identify કરે, બીજો કોઈ નહીં. તમારી bank use કરે છે. Receiving bank use કરે છે. Clearing house use કરે છે. તમારી books પણ use કરવી જોઈએ, પણ અમે જે SMBs સાથે વાત કરીએ છીએ એમાંથી મોટાભાગના track નથી કરતા. કેમ આ problem છે, એ આગળ સમજાવીશ.

50-leaf cheque book છે? Numbers સીધા sequence માં ચાલે છે. ધારો કે book `008473` થી ખૂલે છે. પછીની leaf `008474`, પછી `008475`, અને એમ leaf number 50 પર `008522` સુધી. Book પૂરી થાય, bank નવી book આપે `008523` થી શરૂ. Numbering ક્યારેય reset નથી થતી. તમે એ account પર `008473` ફરી ક્યારેય નહીં જુઓ, ever.

બસ આ જ rule છે. એક number, એક cheque, હંમેશા માટે.

### [H2] Cheque Number Cheque પર બરાબર ક્યાં Print હોય છે?

બે જગ્યાએ. કોઈપણ ભારતીય bank નો cheque ઉઠાવો — HDFC, ICICI, Axis, Kotak, કોઈ પણ. Top-left corner માં regular ink થી cheque number દેખાશે. ક્યારેક ફક્ત 6 digits. ક્યારેક bank આગળ 3-digit series prefix મૂકે છે, એટલે `001 008473` જેવો દેખાય. Same number, બસ સજાવેલો.

હવે cheque ના bottom પર જુઓ. એ thin band જેમાં weird-looking digits છે? એ MICR band છે. Cheque number ત્યાં પણ print છે — પણ એક special font માં જે machines વાંચે છે. એ એ band નો પહેલો field છે, city code, bank code, અને account-type code પહેલાં.

બે જગ્યાએ કેમ? કેમ કે બે અલગ readers ને જોઈએ. Top-left version તમારા માટે, teller માટે, payee માટે. MICR band version clearing centre ની એ high-speed sorting machines માટે જે રાત આખી લાખો cheques process કરે છે.

અમે [MICR code પર અલગ detailed guide](https://cheqify.app/gu/blog/what-is-micr-code-on-cheque) લખી છે જો તમે એ band ની detail સમજવા માંગો. હાલ માટે બસ આટલું: cheque number બંને જગ્યાએ બેઠો છે, અને બંને versions identical છે.

### [H2] Cheque Number નો Format શો હોય છે?

ભારતમાં દરેક standard retail કે current-account cheque book **6-digit serial** use કરે છે. લગભગ બધી banks માં આ જ pattern. HDFC, SBI, Axis, Yes Bank, Bank of Baroda, બધી.

કેટલીક banks ઉપરથી 3-digit prefix મૂકી દે છે series indicator તરીકે, એટલે cheque પર ક્યારેક `001 008473` print દેખાય. Count માં આવે ફક્ત 6-digit વાળો ભાગ.

બે વાતો જે તમારે જાણવી જોઈએ:

**Book ની અંદર sequential.** તમારી cheque book ખોલો. પહેલી leaf નો number નોંધો. હવે last leaf ખોલો. બંને વચ્ચે numbers unbroken ચાલવા જોઈએ. Gap દેખાય તો કંઈક ખોટું છે. કાં તો leaf કાઢી નાખી, કાં તો તમારી book માં printing defect છે — બંને case માં branch ને call કરો.

**હંમેશા માટે unique, per account.** Cheque number reset નથી થતો જ્યારે book પૂરી થાય. પછીની book ત્યાંથી pick up કરે જ્યાં જૂની અટકી હતી. જૂની book `008522` પર પૂરી થઈ? નવી `008523` થી start થશે. તમારા account પર `008473` બે વાર નહીં, period.

આ actually કામની વાત છે. એટલે કે cheque number, એકલો, exactly એક cheque look up કરવા માટે પૂરતો છે. Date જોઈતી નથી. Amount જોઈતી નથી. Payee name જોઈતો નથી. Six digits, અને bank record કાઢી દે.

### [H2] Cheque Number vs MICR vs IFSC vs Account Number — Side by Side

અહીં જ 10 માંથી 9 લોકો confuse થાય છે. ચારેય numbers એક જ paper પર બેઠા છે. અર્થ બિલકુલ અલગ.

| Number | શું identify કરે છે | Cheque પર ક્યાં | Length |
|---|---|---|---|
| **Cheque number** | આ specific cheque leaf | Top-left + MICR band ની શરૂઆત | 6 digits |
| **MICR code** | Branch (city + bank + branch routing) | MICR band, cheque number પછી | 9 digits |
| **IFSC code** | Branch (NEFT / RTGS / IMPS માટે, clearing માટે નહીં) | Cheque ના top પર, branch name પાસે | 11 alphanumeric |
| **Account number** | એ branch પર તમારું account | Pre-printed, સામાન્ય રીતે payee line ની નીચે | 9–18 digits |

કોઈ પૂછે તો cheat code: cheque number = cheque પોતે. MICR = branch (clearing માટે). IFSC = branch (NEFT જેવા digital transfers માટે). Account number = તમે, customer.

ચાર numbers, ચાર jobs. અલગ-અલગ jobs. Mix નહીં કરો.

### [H2] Banks Cheque Number ને ખરેખર કેવી રીતે Use કરે છે

Banking system ની અંદર cheque ની જિંદગી નું દરેક step cheque number પર ચાલે છે. એ જ field છે જેના પર bank ના systems hash કરે છે. Honestly, એને cheque ની "primary key" કહેવી સૌથી accurate છે.

**Clearing.** જ્યારે receiving bank તમારો cheque deposit કરે, MICR sorter પહેલા cheque number વાંચે. એ number થી તમારું account શોધે, balance check કરે, અને cheque ને honour કે return કરે. Cheque clear થયો? તમારી books એ જ number પર reflect થવી જોઈએ.

**Stop-payment.** ધારો કે તમે vendor ને `008473` cheque લખ્યો અને હવે રોકવો છે. Branch જાઓ, form ભરો, `008473` લખો. Bank exact એ જ number flag કરે છે. ભૂલથી `008374` લખાઈ ગયું — easy mistake, similar digits — bank ખોટો cheque રોકી દે છે. સાચો cheque ચાલ્યો જાય છે. Stop-payment request submit કરતા પહેલાં તમારો number બે વાર verify કરો. End-to-end process અમે [stop-payment guide](https://cheqify.app/gu/blog/cheque-validity-period-stop-payment-india) માં cover કર્યો છે.

**Bounce records.** Cheque bounce થાય ત્યારે bank એના number સામે log કરે. જો vendor [Section 138 NI Act](https://cheqify.app/gu/blog/section-138-ni-act-cheque-bounce-india) હેઠળ case કરે, demand notice અને case papers માં cheque number, amount, અને date reference થાય. ત્રણેમાં cheque number સૌથી important. Amount પર dispute થઈ શકે. Date પર argue થઈ શકે. Cheque number પર નહીં.

**Audit અને reconciliation.** Bank statement આવે. લખ્યું છે `ChqNo 008473 cleared 12/05/2026 ₹47,500`. તમે cheque number પર books થી match કરો. Match? Done. Mismatch? Reconciliation problem investigate કરવાની છે. અમે [પૂરો reconciliation flow](https://cheqify.app/gu/blog/how-to-reconcile-cheques-with-bank-statements) એ SMBs માટે લખ્યો છે જે આ properly કરવા માંગે છે.

Bank ને તમારા internal voucher numbers સાથે કોઈ સંબંધ નથી. એને cheque number જોઈએ. એના પર match કરો, કે દર મહિને એ manual reconciliation કરતા રહો જે minutes નું કામ છે પણ hours લઈ લે છે.

### [H2] Cheque Number અચાનક Critical ક્યારે બને છે

મોટાભાગના દિવસ તમે cheque numbers વિશે વિચારતા નથી. પછી એક મંગળવાર સવાર આવે છે અને આમાંથી એક થાય છે.

**Cheque ગુમ થાય છે.** તમે 12 તારીખે Pune ના vendor ને `008473` લખ્યો. આજે 19 છે અને એ call કરે છે, payment નથી આવ્યું. તમને ખબર નથી post કર્યો, peon ને આપ્યો, કે drawer માં રહી ગયો. Bank નો પહેલો સવાલ, હર વખત: "Cheque number શો છે?" જવાબ નથી? Stop-payment instruction નહીં, investigation નહીં, કંઈ નહીં.

**Vendor કહે payment નથી મળ્યું.** "Sir, payment kahan hai?" તમારી books ફક્ત કહે "₹47,500 paid to Suresh Textiles, 12 April" — cheque number નહીં — તો તમે કેવી રીતે prove કરશો કે ક્યો cheque, cash થયો કે નહીં, હજુ floating છે? નહીં કરી શકો. Bank ને call કરતા રહેશો, statement માં dig કરતા રહેશો, સાચો ઓળખવાની આશા સાથે.

**Auditor sample ખેંચે.** ત્રણ વર્ષ પછી CA આવે. "આ payment voucher નો supporting document બતાવો." Reverse lookup cheque number પર ચાલે. Cheque number નથી? અડધું evidence ગાયબ. Auditors notice કરે છે. Section 133(6) inquiries માં assessing officers પણ.

**Cheque fraud surface પર આવે.** Fraud ખબર પડે — duplicate cheque, forged signature, unauthorized issue — તો દરેક વાતચીત numbers પર આવી જાય. ક્યો cheque issue થયો? કોણે authorize કર્યો? ક્યારે print થયો? ક્યારે clear થયો? Numbers નહીં તો fraud prove કરવો impossible. અમે આ પર [cheque fraud playbook](https://cheqify.app/gu/blog/how-to-avoid-cheque-fraud-in-india) લખ્યો છે.

Bottom line: કંઈ પણ ખોટું થાય તે moment, cheque number જ એ વસ્તુ છે જેની bank, auditor, lawyer, અને police ને પડી હોય છે.

### [H2] Cheqify Cheque Numbers કેવી રીતે Handle કરે છે

અમે Cheqify આ જ pain point ની આસપાસ બનાવ્યું છે. Spreadsheets માં cheque numbers track કરવા — એ જ રીત છે જેમાં SMBs એમને ગુમાવે છે.

Product આ કેવી રીતે handle કરે છે, જુઓ.

**નવી book શરૂ કરતી વખતે auto-increment.** જૂની book પૂરી થઈ, નવી ઉઠાવી, Cheqify ને starting number એક વાર કહી દીધો. પછી દરેક cheque automatically increment થાય. Skip નહીં. Duplicate નહીં. "Wait, છેલ્લો number શો હતો?" વાળા moments નહીં.

**Searchable register, instantly.** Search bar માં `008473` type કરો. પૂરો record સામે — payee, amount, date, status, કોણે authorize કર્યો, ક્યારે print થયો. ત્રણ વર્ષ પછી, auditor એ જ cheque વિશે પૂછે, એ 5-second lookup છે, steel almirah માં 30 minute નો hunt નહીં.

**Status pipeline.** દરેક cheque number એક status માં રહે: drafted, printed, dispatched, presented, cleared, bounced, stopped. Cheque move થતાં તમે status update કરો. આ જ [end-to-end cheque lifecycle](https://cheqify.app/gu/blog/cheque-lifecycle-management-explained) approach છે જેનાથી cheque ops sane રહે છે.

**Bank statements સામે auto-match.** Statement upload કરો, Cheqify દરેક line ને તમારા issued register સાથે cheque number પર match કરી દે. અડધી Saturday લાગતી હતી, હવે 30 seconds.

**Audit-ready exports.** CA માંગે, export કરો. Done.

જો તમે આ કામ Tally column, Excel sheet, કે paper register માં કરી રહ્યા છો, Cheqify પર switch નાનો છે. Pay-off એ દિવસે દેખાય જ્યારે કંઈક ખોટું થાય. થશે ક્યારેક ને ક્યારેક.

### [H2] Cheque Number વિશે Common Myths (અને Truth)

આ વારંવાર સાંભળીએ છીએ. Clear કરી દઈએ.

**"Cheque number અને MICR code એક જ છે."** ના, બિલકુલ અલગ. MICR 9-digit branch identifier છે. Cheque number 6-digit cheque identifier છે. MICR band માં નીચે પાસે-પાસે બેસે છે, એટલે જ આટલા લોકો mix કરી દે છે.

**"થોડા time પછી cheque number reuse કરી શકાય."** ના. એક account ની અંદર દરેક cheque number permanent છે. Bank ક્યારેય reuse નથી કરતું. તમારી book `008522` પર પૂરી થઈ? પછીની `008523` થી શરૂ. Number `008473` તમારા account ના એક cheque માટે છે, હંમેશા.

**"Carbon copy ગુમ થઈ, number પણ ગુમ થયો."** ફક્ત જો cheque book પણ ગુમ થઈ હોય. Book માં જે unused leaves બાકી છે, એ next-up cheque numbers carry કરે છે. Book જોઈને તમે figure out કરી શકો કે ક્યા numbers issue થયા અને ક્યા નહીં. Pro tip: cheque લખતા જ accounting software માં cheque number નાંખી દો, પછી નહીં. Memory unreliable છે.

**"Date અને amount વગર bank cheque trace નથી કરી શકતું."** કરી શકે છે. Cheque number એકલો પૂરતો છે. Date અને amount useful confirmations છે, requirements નથી. Branch staff "Sir, date toh do" એટલા માટે બોલે છે કે search faster થાય, system ને નથી જોઈતું.

**"મારું bank cheque numbers track કરે છે, મને જરૂર નથી."** તમારું bank એ cheques ને track કરે જે *clear* થયા. Drafts જે start કર્યા, print કર્યા પણ dispatch ન કર્યા — એ ફક્ત તમારા records માં છે. Courier વાળો ગુમ થઈ ગયો? એ પણ ફક્ત તમારા records માં. Cheque lifecycle નો સૌથી fraud-prone segment એ જ છે જે bank ને નથી દેખાતો. Track ન કર્યું તો એ segment invisible.

### [H2] Quick Reference

બધું ભૂલી જાવ, બસ આટલું યાદ રાખો:

- Cheque number દરેક cheque ના top-left corner પર 6-digit serial છે, MICR band માં નીચે ફરી print. Same number, બે જગ્યાએ.
- તમારા account ના એક specific cheque ને હંમેશા માટે identify કરે છે. Banks ક્યારેય reuse નથી કરતા.
- MICR (9-digit branch code), IFSC (11-character branch code digital transfers માટે), કે account number (9-18 digits) સાથે confuse નહીં કરો.
- Banks cheque number ને primary key ની જેમ use કરે છે દરેક વસ્તુ માટે: clearing, stop-payment, bounces, audit trail, fraud investigation.
- ફક્ત cheque પર નહીં, તમારી books માં પણ capture કરવો — કંઈ ખોટું થાય ત્યારે 5-minute fix અને 5-hour forensic exercise વચ્ચેનો ફરક છે.
- Cheqify [પૂરા cheque lifecycle](https://cheqify.app/gu/blog/cheque-lifecycle-management-explained) માં cheque numbers auto-capture અને auto-increment કરે છે, જેથી યાદ રાખવાની જરૂર ન પડે.

---

## Internal Links — Insert Inside Body

| Anchor text (EN) | Link target |
|---|---|
| "MICR code in detail in a separate guide" | `/en/blog/what-is-micr-code-on-cheque` |
| "Section 138 process in depth here" | `/en/blog/section-138-ni-act-cheque-bounce-india` |
| "reconciliation mechanics" | `/en/blog/how-to-reconcile-cheques-with-bank-statements` |
| "cheque validity and stop-payment guide" | `/en/blog/cheque-validity-period-stop-payment-india` |
| "cheque fraud playbook" | `/en/blog/how-to-avoid-cheque-fraud-in-india` |
| "end-to-end lifecycle approach" | `/en/blog/cheque-lifecycle-management-explained` |
| "full cheque lifecycle" | `/en/blog/cheque-lifecycle-management-explained` |

> Insert each link the FIRST time the anchor text appears in each language body.

---

## CTA Block (append at end of each language body)

### English
> **Stop tracking cheque numbers in spreadsheets.** Cheqify auto-captures and auto-increments every cheque number as you write or print, with full status, search, and reconciliation built in. Free to start, no card required.
>
> **[Manage your cheque register with Cheqify →](https://app.cheqify.app/register)**

### Hindi
> **Cheque numbers spreadsheets में track करना बंद कीजिए.** Cheqify हर cheque number को auto-capture और auto-increment करता है जैसे आप लिखते या print करते हैं — पूरा status, search, और reconciliation built-in. शुरू करने के लिए मुफ्त, card नहीं चाहिए.
>
> **[Cheqify से अपना cheque register manage करें →](https://app.cheqify.app/register)**

### Gujarati
> **Cheque numbers spreadsheets માં track કરવાનું બંધ કરો.** Cheqify દરેક cheque number ને auto-capture અને auto-increment કરે છે જ્યારે તમે લખો કે print કરો — પૂરો status, search, અને reconciliation built-in. શરૂ કરવા માટે મફત, card જોઈતું નથી.
>
> **[Cheqify થી તમારો cheque register manage કરો →](https://app.cheqify.app/register)**

---

## FAQ Items (fill in Sanity FAQ section)

### Q1
- **Question:** What is the cheque number on a cheque book?
- **Answer:** The cheque number is the unique 6-digit serial printed in the top-left corner of every cheque leaf, and again in the MICR band at the bottom. It uniquely identifies that one specific cheque on your account, forever — banks never reuse cheque numbers within an account.

### Q2
- **Question:** Where exactly is the cheque number printed on an Indian cheque?
- **Answer:** In two places on every Indian bank cheque — the top-left corner in regular ink (sometimes preceded by a 3-digit prefix), and as the first field inside the MICR band at the bottom. Both versions are the same number; one is for humans, one is for the bank's automated cheque sorter.

### Q3
- **Question:** Is the cheque number the same as the MICR code?
- **Answer:** No. The cheque number is a 6-digit serial that identifies a specific cheque. The MICR code is a 9-digit branch identifier (city + bank + branch). They sit next to each other in the MICR band, which is why they often get confused. Both appear on the same cheque but mean very different things.

### Q4
- **Question:** Can two cheques have the same cheque number?
- **Answer:** Not within the same account. Banks issue cheque numbers in unbroken sequences — each new cheque book picks up where the last one ended — so two cheques on your account never share a number, ever. Different account holders at the same bank can have overlapping cheque numbers; uniqueness is only guaranteed within a single account.

### Q5
- **Question:** What happens if I give the wrong cheque number for a stop-payment request?
- **Answer:** The bank will flag the cheque number you supplied, not the one you intended. If you wanted to stop cheque `008473` but wrote `008374`, the wrong cheque gets stopped and the right one still clears. Always verify the cheque number against your register or carbon copy before submitting a stop-payment instruction. Cheqify makes this lookup instant — search the cheque number and confirm payee, date, and amount before stopping.

---

## Post-Publish Checklist

- [ ] Cover image uploaded in Sanity; `hasFaq` toggle ON. (`isHowTo` stays OFF — definitional/explainer.)
- [ ] Scheduled publish confirmed for 2026-05-11 10:00 IST.
- [ ] All internal links to existing posts verified live before publish (especially the lifecycle-management slug, in case the Sanity rename hasn't propagated).
- [ ] After publish: `npm run build` and verify URL in `sitemap.xml`.
- [ ] `npm run blog:index` to refresh PUBLISHED-INDEX.md.
- [ ] Run the post-publish checklist at `_bmad-output/blog-content/checklist-after-blog-is-published.md`.
- [ ] GSC → URL Inspection → Request Indexing for all 3 locale URLs.
- [ ] **Bonus internal-link work** — add a link from posts #6 (MICR), #8 (reconciliation), #12 (validity) to this post on the relevant first mention of "cheque number".
- [ ] LinkedIn post using social copy below.
- [ ] Share in 1 Indian SMB / accounting community.

---

## Social Copy (LinkedIn)

> 9 out of 10 SMBs we talk to know what an IFSC is — and confuse it with the cheque number on the cheque. Different things, different jobs.
>
> We wrote a no-jargon explainer: what the cheque number really is, where to find it, why it matters when something goes wrong, and how it differs from MICR / IFSC / account number — with a side-by-side table.
>
> https://cheqify.app/en/blog/cheque-number-in-cheque-book-explained
>
> #chequemanagement #MSME #India #finance
