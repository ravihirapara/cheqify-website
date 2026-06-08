# Blog Post #25 — How to Write a Cancelled Cheque Safely — and Why Everyone Keeps Asking for One (2026)

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

When pasting body paragraphs into Sanity Studio, the `> ...` markdown blocks below should be split into two Sanity block types:

**Apply as Callout block (grey rounded box):**
- `> **Track every leaf you cancel with Cheqify...** / **Cheqify के साथ...** / **Cheqify સાથે...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **An unsigned cheque with "CANCELLED" across it...** / **"CANCELLED" लिखा unsigned cheque...** / **"CANCELLED" લખેલો unsigned cheque...**` (pull quote in each body) → **Quote**

To apply: paste as a normal paragraph → click the block style dropdown above the editor → choose **"Callout box"** or **"Quote"**.

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

"How to write a cancelled cheque" is one of the highest-volume practical banking searches in India — people hit it the moment a bank, employer, mutual fund, or insurer asks for one, and most have no idea what it proves or how to do it without exposing themselves. There's a clear, answerable need: the mechanics (two lines, "CANCELLED", don't sign), the long list of places that demand one, and the genuine safety question nobody answers honestly — *what can a fraudster actually do with this?* This post covers all three, plus the modern reality that EPFO dropped the requirement in 2025 and penny-drop is quietly replacing the cheque everywhere. Strong informational + transactional intent. Cluster fit: pairs with #19 (how to fill), #2 (cheque fraud), #24 (loan repayment / EMI auto-debit setup), and #13 (cheque lifecycle).

---

## Sanity Fields

- **Slug:** `how-to-write-cancelled-cheque-safely`
- **Tags:** `Cheque Guide`, `Banking & RBI`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** YES (writing a cancelled cheque correctly, 5 steps)
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Monday 2026-06-15, 10:00 IST (auto-set in Sanity)
- **Primary keyword:** `how to write a cancelled cheque`
- **Secondary keywords:** cancelled cheque meaning, what is a cancelled cheque used for, do you sign a cancelled cheque, cancelled cheque for bank verification, cancelled cheque safety, alternatives to cancelled cheque
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/how-to-write-cancelled-cheque-safely`
  - HI: `https://cheqify.app/hi/blog/how-to-write-cancelled-cheque-safely`
  - GU: `https://cheqify.app/gu/blog/how-to-write-cancelled-cheque-safely`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `how-to-write-cancelled-cheque-safely-cover.webp`
- **Subject:** A single cheque leaf shown face-up, close. Two clean parallel lines run diagonally across the face from top-left to bottom-right, with the word "CANCELLED" in bold capitals written between them in blue ink. The MICR band at the bottom, the account number, and the IFSC are all left clearly visible (not crossed out). A small red "no-sign" circle-slash badge sits over the signature box with the label "Don't sign". Cheqify wordmark bottom-right. Clean off-white background.
- **Alt text:** How to write a cancelled cheque safely in India — two lines, "CANCELLED" in capitals, MICR and account details visible, signature box left blank.
- **OG image:** Same as cover.

---

## Titles

- **EN:** How to Write a Cancelled Cheque Safely — and Why Everyone Keeps Asking for One (2026)
- **HI:** Cancelled Cheque कैसे Safely लिखें — और हर कोई एक क्यों मांगता रहता है (2026)
- **GU:** Cancelled Cheque કેવી રીતે Safely લખવો — અને દરેક જણ એક કેમ માંગતું રહે છે (2026)

---

## Descriptions

- **EN:** A cancelled cheque proves your name, account number, IFSC and MICR — nothing more. Here's exactly how to write one safely: two lines across the face, "CANCELLED" in capitals, and do NOT sign it. Plus every place that demands one (NACH, salary account, EPF, demat, FASTag), what a fraudster can and can't do with it, and the penny-drop alternatives when you'd rather not hand one over.
- **HI:** Cancelled cheque आपका name, account number, IFSC और MICR prove करता है — इससे ज़्यादा कुछ नहीं. यहाँ है इसे safely लिखने का exact तरीका: face पर two lines, capitals में "CANCELLED", और इसे sign मत करें. साथ में हर वो जगह जो एक मांगती है (NACH, salary account, EPF, demat, FASTag), fraudster इससे क्या कर सकता है और क्या नहीं, और penny-drop alternatives जब आप एक hand नहीं करना चाहें.
- **GU:** Cancelled cheque તમારું name, account number, IFSC અને MICR prove કરે છે — એનાથી વધારે કંઈ નહીં. અહીં છે એને safely લખવાનો exact તરીકો: face પર two lines, capitals માં "CANCELLED", અને એને sign ન કરો. સાથે દરેક એ જગ્યા જે એક માંગે છે (NACH, salary account, EPF, demat, FASTag), fraudster એનાથી શું કરી શકે છે અને શું નહીં, અને penny-drop alternatives જ્યારે તમે એક hand કરવા ન માંગો.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

Someone asks for a cancelled cheque. You tear a leaf out, scribble two lines, write "CANCELLED", and — pause. Do you sign it? Does it matter which pen? What does this little piece of paper even prove, and who exactly is going to see it?

Most people get this slightly wrong. Not dangerously wrong, usually. But wrong in ways that either weaken the proof or — occasionally — hand over more than they meant to.

Let's fix that. Properly.

It's one of the most-demanded documents in Indian banking, and almost nobody bothers to explain what it actually does. So here's the whole thing: what it proves, exactly how to write one, everywhere it gets asked for, what a fraudster can and can't do with it, and the alternatives you can offer when you'd rather not part with a leaf at all.

### [H2] What a Cancelled Cheque Actually Proves (And What It Doesn't)

A cancelled cheque does exactly one job: it proves that a bank account exists, in your name, with a specific account number, at a specific branch. That's the whole job. The recipient reads four printed details off the face:

- **Account holder name** (printed by the bank, or matched against your KYC)
- **Account number**
- **IFSC code** (which branch, which bank)
- **MICR code** (the magnetic band at the bottom)

Nothing else. It's not a payment, it carries no balance information, and it says precisely nothing about how much money you have — it's just a verification token, a way for an employer, insurer, or mutual fund to confirm "yes, this account is real and it belongs to this person" before they credit money to it.

And the reason the whole thing works? Those details are *pre-printed* by your bank. You can't fake them on a genuine leaf. That's the entire value — no more, no less.

### [H2] How to Write One — The Five Things That Matter

Here's the correct way, and it takes about ten seconds.

1. **Take a fresh, unused leaf.** Don't use a leaf you've already started writing on. No errors, no corrections.
2. **Draw two parallel lines across the face.** Usually diagonal, top-left to bottom-right. Two clean lines.
3. **Write "CANCELLED" in capital letters** in the space between the two lines.
4. **Use blue or black ink only.** No gel-pen sparkle, no pencil, no red.
5. **Leave the rest blank.** No payee name. No amount. No date.

And the one everybody gets wrong:

**Do not sign it.**

A cancelled cheque does not need your signature. The pre-printed details do all the verification work. Ujjivan Small Finance Bank puts it about as plainly as a bank ever will: *"Do not sign it: Your signature isn't required."*

One more rule that matters more than people realise: **do not let your lines or your "CANCELLED" obscure the printed details.** The recipient needs to read the account number, the IFSC, and especially the MICR band at the bottom. Scrawl a giant "CANCELLED" across the whole cheque and you've defeated the purpose — they can't verify what they can't read. Keep the lines tidy. Keep the band clean.

### [H2] So Should You EVER Sign One?

Default answer: no. The cheque stays unsigned.

But here's the honest nuance, because there's always one. The signature question splits into two separate things people confuse:

**The NACH/ECS mandate form is a separate, signed document.** When you set up an auto-debit for a loan EMI or a SIP, you sign a *mandate form* — and your signature there has to match bank records. The cancelled cheque is just stapled to that form as proof of account details. So yes, your signature ends up in the envelope — on the form, not on the cheque. Two different pieces of paper, and people blur them constantly.

**A small minority of processes ask for a signed cheque as a cross-check.** Specifically, some mutual-fund and securities account-change flows — the ones where the digital penny-drop verification fails — fall back to asking for a *signed* cancelled cheque, so they can match your signature too. This is the exception, not the rule. If an institution explicitly asks for a signed one, fine. If they don't, leave it unsigned.

> **An unsigned cheque with "CANCELLED" across it cannot be used to withdraw a single rupee. A signed cheque is a different animal — so unless someone explicitly asks for a signature, don't add one.**

### [H2] Everywhere a Cancelled Cheque Gets Demanded in 2026

The list is long, and it's shrinking — but slowly, the way these things always shrink in Indian paperwork. Here's where you'll still get asked:

- **NACH/ECS auto-debit mandate** — for loan EMIs and SIPs, paper mandates often want one stapled on. When a bank sets up EMI auto-debit on a new loan, this is usually the first thing they ask for (more on that in our [loan repayment by cheque guide](https://cheqify.app/en/blog/loan-repayment-by-cheque-india)).
- **Salary account / payroll onboarding** — employers verify the account they'll deposit into.
- **Mutual fund SIP registration / redemption** — though penny-drop is now the primary method; the cheque is a fallback.
- **Insurance maturity or surrender payout** — to credit the payout to a verified account.
- **Demat / trading account linking** — for dividends and refunds.
- **IPO applications** — verification for allotment and refunds.
- **FASTag** — *sometimes*, for bank-account-linked FASTags. KYC documents (RC, photo, ID) are the main requirement; a cancelled cheque is not universal here.
- **LPG / gas agency** — to link your bank account for DBT subsidy.
- **Vendor / supplier onboarding** — companies routinely demand one before adding your bank account to their payment system.

And the big one that *dropped* the requirement:

**EPF withdrawal.** In April 2025, as widely reported, EPFO stopped asking for a cancelled-cheque image (or attested passbook) for online PF withdrawal claims — and dropped employer verification of the bank account too. The reasoning was sensible. Your account is already verified the moment your UAN is seeded with your bank during KYC, which made the extra upload pure redundancy. And there was a second, more practical reason: blurry, half-readable cheque-image uploads had become one of the leading causes of claim rejections, which is a maddening way to lose your own money. The catch is the usual one — this applies to UAN/Aadhaar-seeded, KYC-complete members filing online. Non-seeded or offline cases can still ask for one.

That EPFO move is the clearest official signal of where this is all heading. Verification is going digital. The cheque is becoming a fallback.

### [H2] Is a Physical Cancelled Cheque Still Mandatory for NACH? (Mostly No)

This deserves its own answer because it's where most cancelled cheques get used.

NACH mandates can be registered two ways. The old way is a **paper mandate** — signed, often with a cancelled cheque attached, dragging out over 5–10 working days. The new way is an **e-mandate**: you authenticate through net banking, your debit card, or Aadhaar, it's live in roughly 24–48 hours, and **there's no cheque at all.**

For e-mandates, the authentication does everything the cheque used to. Even on paper flows, **penny-drop** is taking over — the bank drops ₹1 into your account, matches the name that bounces back, and where that succeeds the cheque is just dead weight.

Bottom line: a physical cancelled cheque is no longer mandatory for NACH wherever an e-mandate or penny-drop is available. It survives for paper/offline mandates and as a penny-drop fallback. If you're setting up EMI auto-debit and the bank offers e-mandate, take it — no leaf required.

### [H2] The Safety Question Nobody Answers Honestly

Here's where it gets interesting, and where I'll be straight with you instead of fear-mongering.

**What's actually on a cancelled cheque?** Your name, account number, IFSC, MICR, branch. Real data. Not trivial.

**What can a fraudster do with it directly?** Withdraw money? **No.** An unsigned leaf marked "CANCELLED" is not a valid negotiable instrument. No bank will honour it. You cannot cash a cancelled cheque, and neither can anyone who finds yours in a drawer. Direct theft from the cheque alone is not possible.

**So what's the real risk?** It's indirect. Your account number + IFSC + name is raw material. A fraudster who has it can *attempt* to set up a fake auto-debit mandate, or use it to make a social-engineering call more convincing — they already "know" your account details, so the impersonation lands harder. But here's the thing: those attempts still need *additional* authentication to actually succeed. Your approval. Your UPI PIN. A mandate you confirm. The cheque alone doesn't open the vault.

**Now the honest flag.** I went looking for a clean, named Indian news case of a fraud pulled off *specifically* through a leaked cancelled cheque. I didn't find one. Banks and explainer sites describe it as a *risk* — they don't document standalone victims. So I'm not going to pretend cancelled cheques are a fraud epidemic. They're not.

What *is* real and well-documented is the surge in **UPI and auto-debit mandate fraud** — phishing links dressed up as "KYC update" or "courier" or "prize" messages that trick people into approving a recurring auto-debit. The first debit is often tiny (₹1–₹10) so victims notice late. There've been reported cases of subscription apps charging ₹149–₹699 recurring after "free trials" without clear consent, and NPCI has been tightening its mandate-approval rules in response.

But — and this matters — those cases turned on someone approving a mandate with their UPI PIN. Not on a leaked cheque. The cancelled cheque is a *plausible feeder* into that broader mandate-fraud world, not a documented standalone weapon. Treat it with sensible care, not panic.

### [H2] The Real Safety Rules

So, practically:

- **Never hand over a loose blank cheque leaf.** That's the genuinely dangerous one — blank, signable, fillable. A cancelled cheque is near-harmless by comparison.
- **Always write "CANCELLED" before it leaves your hands.** Not after. Before.
- **Don't sign it** unless explicitly asked.
- **Keep your MICR band readable but don't volunteer extra cheques.** One is enough. Don't let a vendor "keep a couple on file".

And your real backstop: under RBI's customer-protection rules, if an unauthorised electronic transaction ever does happen and you report it within **3 working days**, your liability is **zero**. Report within 4–7 working days and liability is capped. The number to call is **1930** (National Cyber Crime helpline), or file at cybercrime.gov.in. Know that number. It's the most useful thing in this whole post.

### [H2] What to Offer Instead — The Penny-Drop Alternatives

You don't always have to hand over a cheque. When you'd rather not, these are widely accepted:

- **Penny-drop verification.** ₹1 credit + name match. This is the leading digital replacement and it's what SEBI-regulated entities, NPS, and most modern KYC flows use. If the requester supports it, you give them nothing physical at all.
- **Passbook front-page copy.** Shows name, account number, IFSC, branch. Accepted almost everywhere a cheque is.
- **Bank statement.** Often must be ≤3 months old. Accepted by many insurers, PF processes, and mutual funds.
- **Bank verification letter** on the branch's letterhead. Your bank issues this on request.

One caveat: acceptance varies by institution. Always ask the specific party what they'll take *before* you tear a leaf. Half the time they'll accept a passbook copy and you've saved a cheque.

### [H2] Why "Saving a Cheque" Is a Real Thing

This sounds petty until you do the math.

Cheque leaves cost money once your free quota runs out. **SBI savings accounts** get 10 free leaves per financial year — after that it's ₹40 + GST for a 10-leaf book, ₹75 + GST for a 25-leaf book. That's roughly ₹3–4 a leaf. HDFC and ICICI give up to around 25 free leaves a year, then charge in a similar ₹2–₹4-per-leaf range (confirm current figures on each bank's service-charge page).

Now think about how many leaves people burn on cancelled-cheque requests that a penny-drop or a passbook photo would have satisfied. Every salary onboarding, every SIP, every vendor form — that's a leaf gone. The "don't waste a leaf" instinct isn't stinginess. A cheque leaf has a real, quantifiable cost, and most cancelled-cheque demands have a free digital alternative sitting right there.

### [H2] The Common Mistakes That Actually Cost You

A short list of things people do wrong:

**Signing it "to be safe."** This is the big one, and it's exactly backwards. Signing a cancelled cheque makes it *less* safe, not more. An unsigned cheque is near-harmless; a signed one looks closer to a real instrument. Leave it blank.

**Using a leaf with an error on it.** If you've written and scratched out a payee name or amount, don't repurpose that leaf as a cancelled cheque. A leaf with corrections looks tampered. Tear a clean one.

**Obscuring the MICR band or account number.** Your giant "CANCELLED" should sit *between* two neat lines — not smear across the bottom band. If the recipient can't read the MICR, IFSC, or account number, the cheque is useless and they'll ask for another.

**Handing over loose blank leaves "for later."** Never. A vendor asking to "keep a couple of blank cheques on file" is a hard no. Blank signed leaves are the genuinely dangerous document — that's the one fraud is built on, not the cancelled one. (This is exactly the kind of habit our [cheque fraud prevention guide](https://cheqify.app/en/blog/how-to-avoid-cheque-fraud-in-india) warns against.)

**Forgetting which leaves you cancelled.** When your cheque book audit trail is messy, a cancelled leaf looks like a missing one — and a missing leaf is the thing that triggers awkward bank conversations. Tracking what you issued, what cleared, and what you voided keeps the story clean ([more on cheque lifecycle](https://cheqify.app/en/blog/cheque-lifecycle-management-explained)).

### [H2] A Final Practical Note

A cancelled cheque is a small, low-drama document. Two lines. "CANCELLED" in caps. Blue or black ink. Don't sign it. Keep the printed details readable. That's the entire skill.

The bigger shift is that India is quietly retiring the thing. EPFO already pulled the plug, and penny-drop is steadily eating its lunch across mutual funds, NPS, and most of modern KYC. So the smart move in 2026 isn't really about knowing how to write one. It's knowing when you can hand over a passbook copy instead and keep your leaf in the book — and on the rare occasion you do write a cheque, making sure the MICR is right and the leaf is accounted for ([what the MICR code actually is](https://cheqify.app/en/blog/what-is-micr-code-on-cheque)).

Keep it boring. Boring is safe.

---

> **Track every leaf you cancel with Cheqify — and never lose the audit trail.** Full cheque lifecycle tracking knows which leaves you issued, cleared, or voided, so a cancelled leaf never looks like a missing one. 300+ Indian bank layouts, auto-MICR validation, batch printing for EMI cheques, 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** How do I write a cancelled cheque correctly?
   **A:** Take a fresh, unused leaf and draw two parallel lines across the face, usually diagonally from top-left to bottom-right. Write "CANCELLED" in capitals between those two lines, in blue or black ink. Don't fill in the payee, amount, or date. And keep your lines tidy — they must not cover the account number, IFSC, or MICR band at the bottom, because that's exactly what the recipient needs to read.

2. **Q:** Do I need to sign a cancelled cheque?
   **A:** No. A cancelled cheque doesn't need a signature — the pre-printed account number, IFSC, and MICR do all the verification work. In fact, signing it is generally advised against, because an unsigned cheque is near-harmless while a signed one looks closer to a real instrument. The only exceptions are a few mutual-fund or securities account-change flows that specifically ask for a signed one as a cross-check.

3. **Q:** What does a cancelled cheque actually prove?
   **A:** It proves that a bank account exists in your name, with a specific account number, IFSC, and MICR code, at a named branch. That's all. It carries no balance information and is not a payment — it's purely a verification token so an employer, insurer, or mutual fund can confirm the account is real before crediting money to it.

4. **Q:** Can someone misuse my cancelled cheque?
   **A:** They cannot withdraw money with it — an unsigned cheque marked "CANCELLED" is not a valid negotiable instrument and no bank will honour it. The indirect risk is that your account number, IFSC, and name could be used to attempt a fake auto-debit mandate or make a scam call more convincing, but those attempts still need your separate approval or UPI PIN to succeed. No documented standalone fraud cases from leaked cancelled cheques exist in Indian media — the real risk lives in UPI mandate approvals, not the cheque itself.

5. **Q:** Is a cancelled cheque still required for EPF withdrawal?
   **A:** No, not for most online claims. In April 2025, as widely reported, EPFO stopped requiring a cancelled-cheque image or passbook for online PF withdrawal claims, because the bank account is already verified when your UAN is seeded with your bank. A cheque or passbook may still be requested for non-seeded accounts or offline/manual cases.

6. **Q:** What can I give instead of a cancelled cheque?
   **A:** Penny-drop verification (a ₹1 credit plus name match) is the leading digital replacement and needs no physical document at all. A passbook front-page copy, a recent bank statement (often ≤3 months old), or a bank verification letter on letterhead are all widely accepted too. Always ask the requesting party what they'll take before tearing a leaf — many accept a passbook copy.

7. **Q:** Why do banks keep asking for a cancelled cheque if it's optional now?
   **A:** Habit and paper workflows, mostly. There's no specific RBI or NPCI circular that mandates the cancelled cheque itself — it's an industry-convention document for bank-account verification, and regulators are steadily steering toward digital methods like penny-drop and e-mandates. Many institutions still ask out of routine even when a passbook copy or penny-drop would do the job.

---

## HowTo Steps (Sanity `howToSteps` field — required for HowTo schema)

| # | Name | Text |
|---|---|---|
| 1 | Take a fresh, unused cheque leaf | Tear out a clean leaf from your cheque book — one with no writing, corrections, or scratch-outs on it. A leaf with errors looks tampered and may be rejected. |
| 2 | Draw two parallel lines across the face | Draw two clean parallel lines across the front of the cheque, usually diagonally from the top-left corner to the bottom-right. Keep them tidy. |
| 3 | Write "CANCELLED" in capitals between the lines | In the space between the two lines, write the word "CANCELLED" in capital letters. This marks the cheque void so it can never be presented for payment. |
| 4 | Use blue or black ink and leave the rest blank | Use only blue or black ink. Do not fill in the payee name, amount, or date — and do NOT sign it unless the institution has explicitly asked for a signed cheque. |
| 5 | Keep the printed details readable | Make sure your lines and the word "CANCELLED" do not cover the account holder name, account number, IFSC code, or the MICR band at the bottom. The recipient must be able to read all four to verify the account. |

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

कोई cancelled cheque मांगता है. आप एक leaf निकालते हैं, दो lines खींचते हैं, "CANCELLED" लिखते हैं, और — रुक जाते हैं. क्या इसे sign करना है? कौन सा pen matter करता है? ये छोटा सा कागज़ का टुकड़ा actually prove क्या करता है, और इसे exactly कौन देखने वाला है?

ज़्यादातर लोग इसे थोड़ा गलत करते हैं. Dangerously गलत नहीं, usually. पर ऐसे तरीकों से गलत जो या तो proof को weak करते हैं या — कभी-कभी — जितना मतलब था उससे ज़्यादा hand over कर देते हैं.

चलिए इसे fix करते हैं. Properly.

ये Indian banking में सबसे ज़्यादा demand होने वाले documents में से एक है, और लगभग कोई explain नहीं करता कि ये actually करता क्या है. तो यहाँ है पूरी बात: ये क्या prove करता है, इसे exactly कैसे लिखना है, हर जगह जहाँ ये मांगा जाता है, fraudster इससे क्या कर सकता है और क्या नहीं, और वो alternatives जो आप offer कर सकते हैं जब आप एक leaf बिल्कुल part नहीं करना चाहें.

### [H2] Cancelled Cheque Actually क्या Prove करता है (और क्या नहीं)

Cancelled cheque exactly एक काम करता है: ये prove करता है कि एक bank account exist करता है, आपके name में, एक specific account number के साथ, एक specific branch पर. बस यही पूरा काम है. Recipient face से चार printed details पढ़ता है:

- **Account holder name** (bank द्वारा printed, या आपके KYC के against matched)
- **Account number**
- **IFSC code** (कौन सी branch, कौन सा bank)
- **MICR code** (नीचे का magnetic band)

और कुछ नहीं. ये payment नहीं है, इसमें कोई balance information नहीं होती, और ये precisely कुछ नहीं बताता कि आपके पास कितना पैसा है — ये बस एक verification token है, employer, insurer, या mutual fund के लिए "हाँ, ये account real है और इस person का है" confirm करने का तरीका, इससे पहले कि वो इसमें पैसा credit करें.

और ये पूरी चीज़ काम क्यों करती है? वो details आपके bank द्वारा *pre-printed* हैं. आप genuine leaf पर इन्हें fake नहीं कर सकते. यही पूरी value है — इससे ज़्यादा नहीं, कम नहीं.

### [H2] एक कैसे लिखें — पाँच चीज़ें जो Matter करती हैं

यहाँ है correct तरीका, और इसमें लगभग दस seconds लगते हैं.

1. **एक fresh, unused leaf लें.** ऐसी leaf use मत करें जिस पर आपने पहले से लिखना शुरू कर दिया है. कोई errors नहीं, कोई corrections नहीं.
2. **Face पर दो parallel lines खींचें.** Usually diagonal, top-left से bottom-right. दो clean lines.
3. **दो lines के बीच की space में capital letters में "CANCELLED" लिखें.**
4. **सिर्फ़ blue या black ink use करें.** कोई gel-pen sparkle नहीं, कोई pencil नहीं, कोई red नहीं.
5. **बाकी सब blank छोड़ दें.** कोई payee name नहीं. कोई amount नहीं. कोई date नहीं.

और वो एक जो हर कोई गलत करता है:

**इसे sign मत करें.**

Cancelled cheque को आपकी signature की ज़रूरत नहीं है. Pre-printed details सारा verification काम करती हैं. Ujjivan Small Finance Bank इसे जितना plainly कोई bank कह सकता है उतना plainly कहता है: *"Do not sign it: Your signature isn't required."*

एक और rule जो लोगों के realise करने से ज़्यादा matter करता है: **अपनी lines या अपने "CANCELLED" को printed details obscure मत करने दें.** Recipient को account number, IFSC, और खासकर नीचे का MICR band पढ़ना है. पूरे cheque पर एक giant "CANCELLED" scrawl कर दें और आपने purpose defeat कर दिया — जो वो पढ़ नहीं सकते उसे verify नहीं कर सकते. Lines tidy रखें. Band clean रखें.

### [H2] तो क्या आपको EVER एक Sign करना चाहिए?

Default answer: नहीं. Cheque unsigned रहता है.

पर यहाँ है honest nuance, क्योंकि हमेशा एक होता है. Signature question दो अलग चीज़ों में split होता है जिन्हें लोग confuse करते हैं:

**NACH/ECS mandate form एक separate, signed document है.** जब आप loan EMI या SIP के लिए auto-debit set up करते हैं, आप एक *mandate form* sign करते हैं — और वहाँ आपकी signature को bank records से match करना होता है. Cancelled cheque बस account details के proof के तौर पर उस form से stapled होता है. तो हाँ, आपकी signature envelope में end up होती है — form पर, cheque पर नहीं. दो अलग कागज़ के टुकड़े, और लोग इन्हें constantly blur करते हैं.

**Processes की एक small minority cross-check के तौर पर signed cheque मांगती है.** Specifically, कुछ mutual-fund और securities account-change flows — वो जहाँ digital penny-drop verification fail हो जाता है — *signed* cancelled cheque मांगने पर fall back करते हैं, ताकि वो आपकी signature भी match कर सकें. ये exception है, rule नहीं. अगर कोई institution explicitly एक signed मांगे, fine. अगर नहीं मांगते, unsigned छोड़ दें.

> **"CANCELLED" लिखा unsigned cheque एक भी rupee withdraw करने के लिए use नहीं हो सकता. Signed cheque एक अलग animal है — तो जब तक कोई explicitly signature न मांगे, एक add मत करें.**

### [H2] 2026 में हर जगह जहाँ Cancelled Cheque Demand होता है

List लंबी है, और ये shrink हो रही है — पर slowly, उसी तरह जैसे Indian paperwork में ये चीज़ें हमेशा shrink होती हैं. यहाँ है जहाँ आपसे अभी भी पूछा जाएगा:

- **NACH/ECS auto-debit mandate** — loan EMIs और SIPs के लिए, paper mandates अक्सर एक stapled चाहते हैं. जब कोई bank नए loan पर EMI auto-debit set up करता है, ये usually पहली चीज़ है जो वो मांगते हैं (इस पर ज़्यादा हमारी [loan repayment by cheque guide](https://cheqify.app/hi/blog/loan-repayment-by-cheque-india) में).
- **Salary account / payroll onboarding** — employers उस account को verify करते हैं जिसमें वो deposit करेंगे.
- **Mutual fund SIP registration / redemption** — हालाँकि penny-drop अब primary method है; cheque एक fallback है.
- **Insurance maturity या surrender payout** — verified account में payout credit करने के लिए.
- **Demat / trading account linking** — dividends और refunds के लिए.
- **IPO applications** — allotment और refunds के लिए verification.
- **FASTag** — *कभी-कभी*, bank-account-linked FASTags के लिए. KYC documents (RC, photo, ID) main requirement हैं; cancelled cheque यहाँ universal नहीं है.
- **LPG / gas agency** — DBT subsidy के लिए अपना bank account link करने के लिए.
- **Vendor / supplier onboarding** — companies routinely एक मांगती हैं इससे पहले कि वो आपका bank account अपने payment system में add करें.

और वो बड़ा वाला जिसने requirement *drop* कर दी:

**EPF withdrawal.** April 2025 में, as widely reported, EPFO ने online PF withdrawal claims के लिए cancelled-cheque image (या attested passbook) मांगना बंद कर दिया — और bank account का employer verification भी drop कर दिया. Reasoning sensible थी. आपका account उसी moment already verified हो जाता है जब आपका UAN KYC के दौरान आपके bank के साथ seed होता है, जिसने extra upload को pure redundancy बना दिया. और एक दूसरी, ज़्यादा practical reason थी: blurry, आधे-readable cheque-image uploads claim rejections के leading causes में से एक बन गए थे, जो अपना ही पैसा खोने का एक maddening तरीका है. Catch वही usual है — ये UAN/Aadhaar-seeded, KYC-complete members पर apply होता है जो online file करते हैं. Non-seeded या offline cases अभी भी एक मांग सकते हैं.

वो EPFO move clearest official signal है कि ये सब किधर जा रहा है. Verification digital हो रही है. Cheque एक fallback बन रहा है.

### [H2] क्या Physical Cancelled Cheque अभी भी NACH के लिए Mandatory है? (Mostly नहीं)

ये अपना खुद का answer deserve करता है क्योंकि यहीं ज़्यादातर cancelled cheques use होते हैं.

NACH mandates दो तरीकों से register हो सकते हैं. पुराना तरीका एक **paper mandate** है — signed, अक्सर cancelled cheque attached के साथ, 5–10 working days तक खिंचता हुआ. नया तरीका एक **e-mandate** है: आप net banking, अपने debit card, या Aadhaar के through authenticate करते हैं, ये roughly 24–48 hours में live हो जाता है, और **कोई cheque बिल्कुल नहीं.**

E-mandates के लिए, authentication वो सब करता है जो cheque पहले करता था. Paper flows पर भी, **penny-drop** take over कर रहा है — bank आपके account में ₹1 drop करता है, जो name bounce होकर आता है उसे match करता है, और जहाँ ये succeed होता है cheque बस dead weight है.

Bottom line: physical cancelled cheque अब NACH के लिए mandatory नहीं है जहाँ भी e-mandate या penny-drop available है. ये paper/offline mandates के लिए और penny-drop fallback के तौर पर survive करता है. अगर आप EMI auto-debit set up कर रहे हैं और bank e-mandate offer करता है, इसे लें — कोई leaf required नहीं.

### [H2] वो Safety Question जिसका कोई Honestly Answer नहीं देता

यहाँ ये interesting होता है, और यहाँ मैं fear-mongering के बजाय आपके साथ straight रहूँगा.

**Cancelled cheque पर actually क्या होता है?** आपका name, account number, IFSC, MICR, branch. Real data. Trivial नहीं.

**Fraudster इससे directly क्या कर सकता है?** पैसा withdraw करना? **नहीं.** "CANCELLED" marked एक unsigned leaf एक valid negotiable instrument नहीं है. कोई bank इसे honour नहीं करेगा. आप cancelled cheque cash नहीं कर सकते, और न ही कोई जिसे आपका drawer में मिल जाए. अकेले cheque से direct theft possible नहीं है.

**तो real risk क्या है?** ये indirect है. आपका account number + IFSC + name raw material है. एक fraudster जिसके पास ये है वो एक fake auto-debit mandate set up करने का *attempt* कर सकता है, या इसका use एक social-engineering call को ज़्यादा convincing बनाने के लिए कर सकता है — वो already आपके account details "जानते" हैं, तो impersonation ज़्यादा हार्ड lands करता है. पर बात ये है: उन attempts को actually succeed होने के लिए अभी भी *additional* authentication चाहिए. आपकी approval. आपका UPI PIN. एक mandate जो आप confirm करते हैं. अकेला cheque vault नहीं खोलता.

**अब honest flag.** मैं एक clean, named Indian news case ढूँढने गया जहाँ fraud *specifically* एक leaked cancelled cheque के through pull off हुआ हो. मुझे एक भी नहीं मिला. Banks और explainer sites इसे एक *risk* के तौर पर describe करते हैं — वो standalone victims document नहीं करते. तो मैं pretend नहीं करूँगा कि cancelled cheques एक fraud epidemic हैं. वो नहीं हैं.

जो *real* और well-documented है वो है **UPI और auto-debit mandate fraud** में surge — phishing links जो "KYC update" या "courier" या "prize" messages के तौर पर dressed up होते हैं और लोगों को एक recurring auto-debit approve करने में trick करते हैं. पहला debit अक्सर tiny होता है (₹1–₹10) ताकि victims late notice करें. ऐसे reported cases रहे हैं जहाँ subscription apps "free trials" के बाद बिना clear consent के ₹149–₹699 recurring charge करते रहे, और NPCI response में अपने mandate-approval rules tighten करता रहा है.

पर — और ये matter करता है — वो cases किसी के अपने UPI PIN से एक mandate approve करने पर turn हुए. एक leaked cheque पर नहीं. Cancelled cheque उस broader mandate-fraud दुनिया में एक *plausible feeder* है, एक documented standalone weapon नहीं. इसे sensible care से treat करें, panic से नहीं.

### [H2] असली Safety Rules

तो, practically:

- **एक loose blank cheque leaf कभी hand over मत करें.** वही genuinely dangerous वाला है — blank, signable, fillable. इसके comparison में cancelled cheque near-harmless है.
- **हमेशा "CANCELLED" लिखें इससे पहले कि ये आपके हाथ से जाए.** बाद में नहीं. पहले.
- **इसे sign मत करें** जब तक explicitly न पूछा जाए.
- **अपना MICR band readable रखें पर extra cheques volunteer मत करें.** एक काफ़ी है. किसी vendor को "couple file पर keep" मत करने दें.

और आपका real backstop: RBI के customer-protection rules के तहत, अगर कभी कोई unauthorised electronic transaction हो ही जाए और आप इसे **3 working days** के अंदर report करें, आपकी liability **zero** है. 4–7 working days के अंदर report करें और liability capped है. Call करने का number है **1930** (National Cyber Crime helpline), या cybercrime.gov.in पर file करें. वो number जानें. ये इस पूरी post में सबसे useful चीज़ है.

### [H2] इसके बजाय क्या Offer करें — Penny-Drop Alternatives

आपको हमेशा cheque hand over नहीं करना होता. जब आप नहीं चाहें, ये widely accepted हैं:

- **Penny-drop verification.** ₹1 credit + name match. ये leading digital replacement है और यही SEBI-regulated entities, NPS, और ज़्यादातर modern KYC flows use करते हैं. अगर requester इसे support करता है, आप उन्हें physical कुछ भी नहीं देते.
- **Passbook front-page copy.** Name, account number, IFSC, branch दिखाती है. लगभग हर जगह accept होती है जहाँ cheque होता है.
- **Bank statement.** अक्सर ≤3 months पुराना होना चाहिए. कई insurers, PF processes, और mutual funds द्वारा accepted.
- **Bank verification letter** branch के letterhead पर. आपका bank request पर ये issue करता है.

एक caveat: acceptance institution के हिसाब से vary करती है. हमेशा specific party से पूछें कि वो क्या लेंगे *इससे पहले* कि आप एक leaf tear करें. आधे time वो एक passbook copy accept कर लेंगे और आपने एक cheque बचा लिया.

### [H2] "Cheque बचाना" एक Real चीज़ क्यों है

ये petty लगता है जब तक आप math न करें.

Cheque leaves पैसे cost करती हैं एक बार आपका free quota खत्म हो जाए. **SBI savings accounts** को per financial year 10 free leaves मिलती हैं — उसके बाद 10-leaf book के लिए ₹40 + GST, 25-leaf book के लिए ₹75 + GST. ये roughly ₹3–4 per leaf है. HDFC और ICICI साल में around 25 free leaves तक देते हैं, फिर similar ₹2–₹4-per-leaf range में charge करते हैं (current figures हर bank के service-charge page पर confirm करें).

अब सोचें कि लोग कितनी leaves cancelled-cheque requests पर burn करते हैं जिन्हें एक penny-drop या एक passbook photo satisfy कर देता. हर salary onboarding, हर SIP, हर vendor form — वो एक leaf gone. "Leaf waste मत करो" instinct stinginess नहीं है. एक cheque leaf का एक real, quantifiable cost है, और ज़्यादातर cancelled-cheque demands के पास एक free digital alternative ठीक वहीं बैठा है.

### [H2] वो Common Mistakes जो Actually आपको पड़ती हैं

चीज़ों की एक short list जो लोग गलत करते हैं:

**इसे "to be safe" sign करना.** ये बड़ा वाला है, और ये exactly उल्टा है. Cancelled cheque sign करना इसे *कम* safe बनाता है, ज़्यादा नहीं. एक unsigned cheque near-harmless है; एक signed वाला एक real instrument के closer दिखता है. इसे blank छोड़ें.

**एक error वाली leaf use करना.** अगर आपने एक payee name या amount लिखा और scratch out किया, उस leaf को cancelled cheque के तौर पर repurpose मत करें. Corrections वाली leaf tampered दिखती है. एक clean tear करें.

**MICR band या account number obscure करना.** आपका giant "CANCELLED" दो neat lines के *बीच* बैठना चाहिए — नीचे band पर smear नहीं. अगर recipient MICR, IFSC, या account number नहीं पढ़ सकते, cheque useless है और वो एक और मांगेंगे.

**Loose blank leaves "for later" hand over करना.** कभी नहीं. एक vendor जो "couple blank cheques file पर keep" करने को कहे एक hard no है. Blank signed leaves genuinely dangerous document हैं — वही है जिस पर fraud built होता है, cancelled वाला नहीं. (ये exactly वो तरह की habit है जिसके against हमारी [cheque fraud prevention guide](https://cheqify.app/hi/blog/how-to-avoid-cheque-fraud-in-india) warn करती है.)

**भूल जाना कि आपने कौन सी leaves cancel कीं.** जब आपका cheque book audit trail messy होता है, एक cancelled leaf एक missing वाली जैसी दिखती है — और एक missing leaf वही चीज़ है जो awkward bank conversations trigger करती है. Track करना कि आपने क्या issue किया, क्या cleared हुआ, और क्या आपने void किया story को clean रखता है ([cheque lifecycle पर ज़्यादा](https://cheqify.app/hi/blog/cheque-lifecycle-management-explained)).

### [H2] एक Final Practical Note

Cancelled cheque एक small, low-drama document है. दो lines. Caps में "CANCELLED". Blue या black ink. इसे sign मत करें. Printed details readable रखें. यही पूरी skill है.

बड़ा shift ये है कि India quietly इस चीज़ को retire कर रहा है. EPFO पहले ही plug pull कर चुका है, और penny-drop steadily mutual funds, NPS, और ज़्यादातर modern KYC में इसका lunch खा रहा है. तो 2026 में smart move actually एक लिखना जानने के बारे में नहीं है. ये जानने के बारे में है कि आप कब इसके बजाय एक passbook copy hand over कर सकते हैं और अपनी leaf book में रख सकते हैं — और उस rare occasion पर जब आप एक cheque लिखते हैं, ये sure करना कि MICR सही है और leaf accounted for है ([MICR code actually क्या है](https://cheqify.app/hi/blog/what-is-micr-code-on-cheque)).

इसे boring रखें. Boring safe है.

---

> **हर leaf track करें जो आप cancel करते हैं Cheqify के साथ — और audit trail कभी lose मत करें.** Full cheque lifecycle tracking जानता है कि आपने कौन सी leaves issue, clear, या void कीं, ताकि एक cancelled leaf कभी एक missing वाली जैसी न दिखे. 300+ Indian bank layouts, auto-MICR validation, EMI cheques के लिए batch printing, 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

કોઈ cancelled cheque માંગે છે. તમે એક leaf કાઢો છો, બે lines ખેંચો છો, "CANCELLED" લખો છો, અને — અટકી જાઓ છો. એને sign કરવો કે નહીં? કયો pen matter કરે છે? આ કાગળનો નાનો ટુકડો actually prove શું કરે છે, અને એને exactly કોણ જોવાનું છે?

મોટાભાગના લોકો આને થોડું ખોટું કરે છે. Dangerously ખોટું નહીં, usually. પણ એવી રીતે ખોટું જે કાં તો proof ને weak કરે છે કાં તો — ક્યારેક — જેટલું મતલબ હતું એનાથી વધારે hand over કરી દે છે.

ચાલો એને fix કરીએ. Properly.

આ Indian banking માં સૌથી વધારે demand થતા documents માંથી એક છે, અને લગભગ કોઈ explain નથી કરતું કે એ actually કરે છે શું. તો અહીં છે આખી વાત: એ શું prove કરે છે, એને exactly કેવી રીતે લખવો, દરેક જગ્યા જ્યાં એ માંગાય છે, fraudster એનાથી શું કરી શકે છે અને શું નહીં, અને એ alternatives જે તમે offer કરી શકો છો જ્યારે તમે એક leaf બિલકુલ part કરવા ન માંગો.

### [H2] Cancelled Cheque Actually શું Prove કરે છે (અને શું નહીં)

Cancelled cheque exactly એક કામ કરે છે: એ prove કરે છે કે એક bank account exist કરે છે, તમારા name માં, એક specific account number સાથે, એક specific branch પર. બસ આ જ આખું કામ છે. Recipient face પરથી ચાર printed details વાંચે છે:

- **Account holder name** (bank દ્વારા printed, કે તમારા KYC ની against matched)
- **Account number**
- **IFSC code** (કઈ branch, કયું bank)
- **MICR code** (નીચેનો magnetic band)

અને કંઈ નહીં. એ payment નથી, એમાં કોઈ balance information નથી હોતી, અને એ precisely કંઈ નથી કહેતું કે તમારી પાસે કેટલા પૈસા છે — એ બસ એક verification token છે, employer, insurer, કે mutual fund માટે "હા, આ account real છે અને આ person નું છે" confirm કરવાનો તરીકો, એ પહેલા કે એ એમાં પૈસા credit કરે.

અને આ આખી વસ્તુ કેમ કામ કરે છે? એ details તમારા bank દ્વારા *pre-printed* છે. તમે genuine leaf પર એને fake નથી કરી શકતા. આ જ આખી value છે — એનાથી વધારે નહીં, ઓછી નહીં.

### [H2] એક કેવી રીતે લખવો — પાંચ વસ્તુઓ જે Matter કરે છે

અહીં છે correct તરીકો, અને એમાં લગભગ દસ seconds લાગે છે.

1. **એક fresh, unused leaf લો.** એવી leaf use ન કરો જેના પર તમે પહેલેથી લખવાનું શરૂ કરી દીધું હોય. કોઈ errors નહીં, કોઈ corrections નહીં.
2. **Face પર બે parallel lines ખેંચો.** Usually diagonal, top-left થી bottom-right. બે clean lines.
3. **બે lines ની વચ્ચેની space માં capital letters માં "CANCELLED" લખો.**
4. **ફક્ત blue કે black ink use કરો.** કોઈ gel-pen sparkle નહીં, કોઈ pencil નહીં, કોઈ red નહીં.
5. **બાકી બધું blank છોડી દો.** કોઈ payee name નહીં. કોઈ amount નહીં. કોઈ date નહીં.

અને એ એક જે દરેક જણ ખોટું કરે છે:

**એને sign ન કરો.**

Cancelled cheque ને તમારી signature ની જરૂર નથી. Pre-printed details બધું verification કામ કરે છે. Ujjivan Small Finance Bank એને જેટલું plainly કોઈ bank કહી શકે એટલું plainly કહે છે: *"Do not sign it: Your signature isn't required."*

એક બીજો rule જે લોકો ના realise કરવા કરતા વધારે matter કરે છે: **તમારી lines કે તમારા "CANCELLED" ને printed details obscure ન કરવા દો.** Recipient ને account number, IFSC, અને ખાસ કરીને નીચેનો MICR band વાંચવો છે. આખા cheque પર એક giant "CANCELLED" scrawl કરી દો અને તમે purpose defeat કરી દીધો — જે એ વાંચી નથી શકતા એને verify નથી કરી શકતા. Lines tidy રાખો. Band clean રાખો.

### [H2] તો શું તમારે EVER એક Sign કરવો જોઈએ?

Default answer: ના. Cheque unsigned રહે છે.

પણ અહીં છે honest nuance, કારણ કે હંમેશા એક હોય છે. Signature question બે અલગ વસ્તુઓમાં split થાય છે જેને લોકો confuse કરે છે:

**NACH/ECS mandate form એક separate, signed document છે.** જ્યારે તમે loan EMI કે SIP માટે auto-debit set up કરો છો, તમે એક *mandate form* sign કરો છો — અને ત્યાં તમારી signature ને bank records સાથે match કરવી પડે છે. Cancelled cheque બસ account details ના proof તરીકે એ form સાથે stapled હોય છે. તો હા, તમારી signature envelope માં end up થાય છે — form પર, cheque પર નહીં. બે અલગ કાગળના ટુકડા, અને લોકો એને constantly blur કરે છે.

**Processes ની એક small minority cross-check તરીકે signed cheque માંગે છે.** Specifically, કેટલાક mutual-fund અને securities account-change flows — એ જ્યાં digital penny-drop verification fail થઈ જાય છે — *signed* cancelled cheque માંગવા પર fall back કરે છે, જેથી એ તમારી signature પણ match કરી શકે. આ exception છે, rule નહીં. જો કોઈ institution explicitly એક signed માંગે, fine. જો નથી માંગતા, unsigned છોડી દો.

> **"CANCELLED" લખેલો unsigned cheque એક પણ rupee withdraw કરવા માટે use નથી થઈ શકતો. Signed cheque એક અલગ animal છે — તો જ્યાં સુધી કોઈ explicitly signature ન માંગે, એક add ન કરો.**

### [H2] 2026 માં દરેક જગ્યા જ્યાં Cancelled Cheque Demand થાય છે

List લાંબી છે, અને એ shrink થઈ રહી છે — પણ slowly, એ જ રીતે જેમ Indian paperwork માં આ વસ્તુઓ હંમેશા shrink થાય છે. અહીં છે જ્યાં તમને હજુ પણ પૂછાશે:

- **NACH/ECS auto-debit mandate** — loan EMIs અને SIPs માટે, paper mandates ઘણીવાર એક stapled માંગે છે. જ્યારે કોઈ bank નવા loan પર EMI auto-debit set up કરે છે, આ usually પહેલી વસ્તુ છે જે એ માંગે છે (આના પર વધારે અમારી [loan repayment by cheque guide](https://cheqify.app/gu/blog/loan-repayment-by-cheque-india) માં).
- **Salary account / payroll onboarding** — employers એ account ને verify કરે છે જેમાં એ deposit કરશે.
- **Mutual fund SIP registration / redemption** — જોકે penny-drop હવે primary method છે; cheque એક fallback છે.
- **Insurance maturity કે surrender payout** — verified account માં payout credit કરવા માટે.
- **Demat / trading account linking** — dividends અને refunds માટે.
- **IPO applications** — allotment અને refunds માટે verification.
- **FASTag** — *ક્યારેક*, bank-account-linked FASTags માટે. KYC documents (RC, photo, ID) main requirement છે; cancelled cheque અહીં universal નથી.
- **LPG / gas agency** — DBT subsidy માટે તમારું bank account link કરવા માટે.
- **Vendor / supplier onboarding** — companies routinely એક માંગે છે એ પહેલા કે એ તમારું bank account એમની payment system માં add કરે.

અને એ મોટું વાળું જેણે requirement *drop* કરી:

**EPF withdrawal.** April 2025 માં, as widely reported, EPFO એ online PF withdrawal claims માટે cancelled-cheque image (કે attested passbook) માંગવાનું બંધ કરી દીધું — અને bank account નું employer verification પણ drop કરી દીધું. Reasoning sensible હતી. તમારું account એ જ moment already verified થઈ જાય છે જ્યારે તમારું UAN KYC દરમિયાન તમારા bank સાથે seed થાય છે, જેણે extra upload ને pure redundancy બનાવી દીધી. અને એક બીજી, વધારે practical reason હતી: blurry, અડધા-readable cheque-image uploads claim rejections ના leading causes માંથી એક બની ગયા હતા, જે પોતાનો જ પૈસો ગુમાવવાનો એક maddening તરીકો છે. Catch એ જ usual છે — આ UAN/Aadhaar-seeded, KYC-complete members પર apply થાય છે જે online file કરે છે. Non-seeded કે offline cases હજુ પણ એક માંગી શકે છે.

એ EPFO move clearest official signal છે કે આ બધું ક્યાં જઈ રહ્યું છે. Verification digital થઈ રહી છે. Cheque એક fallback બની રહ્યો છે.

### [H2] શું Physical Cancelled Cheque હજુ પણ NACH માટે Mandatory છે? (Mostly ના)

આ પોતાનો ખુદનો answer deserve કરે છે કારણ કે અહીં જ મોટાભાગના cancelled cheques use થાય છે.

NACH mandates બે રીતે register થઈ શકે છે. જૂનો તરીકો એક **paper mandate** છે — signed, ઘણીવાર cancelled cheque attached સાથે, 5–10 working days સુધી ખેંચાતું. નવો તરીકો એક **e-mandate** છે: તમે net banking, તમારા debit card, કે Aadhaar ના through authenticate કરો છો, એ roughly 24–48 hours માં live થઈ જાય છે, અને **કોઈ cheque બિલકુલ નહીં.**

E-mandates માટે, authentication એ બધું કરે છે જે cheque પહેલા કરતો. Paper flows પર પણ, **penny-drop** take over કરી રહ્યું છે — bank તમારા account માં ₹1 drop કરે છે, જે name bounce થઈને આવે છે એને match કરે છે, અને જ્યાં એ succeed થાય છે cheque બસ dead weight છે.

Bottom line: physical cancelled cheque હવે NACH માટે mandatory નથી જ્યાં પણ e-mandate કે penny-drop available છે. એ paper/offline mandates માટે અને penny-drop fallback તરીકે survive કરે છે. જો તમે EMI auto-debit set up કરી રહ્યા છો અને bank e-mandate offer કરે છે, એ લો — કોઈ leaf required નહીં.

### [H2] એ Safety Question જેનો કોઈ Honestly Answer નથી આપતું

અહીં આ interesting થાય છે, અને અહીં હું fear-mongering ને બદલે તમારી સાથે straight રહીશ.

**Cancelled cheque પર actually શું હોય છે?** તમારું name, account number, IFSC, MICR, branch. Real data. Trivial નહીં.

**Fraudster એનાથી directly શું કરી શકે છે?** પૈસા withdraw કરવા? **ના.** "CANCELLED" marked એક unsigned leaf એક valid negotiable instrument નથી. કોઈ bank એને honour નહીં કરે. તમે cancelled cheque cash નથી કરી શકતા, અને ન જ કોઈ જેને તમારો drawer માં મળી જાય. એકલા cheque થી direct theft possible નથી.

**તો real risk શું છે?** એ indirect છે. તમારું account number + IFSC + name raw material છે. એક fraudster જેની પાસે આ છે એ એક fake auto-debit mandate set up કરવાનો *attempt* કરી શકે છે, કે એનો use એક social-engineering call ને વધારે convincing બનાવવા માટે કરી શકે છે — એ already તમારા account details "જાણે" છે, તો impersonation વધારે hard lands કરે છે. પણ વાત આ છે: એ attempts ને actually succeed થવા માટે હજુ પણ *additional* authentication જોઈએ. તમારી approval. તમારો UPI PIN. એક mandate જે તમે confirm કરો છો. એકલો cheque vault નથી ખોલતો.

**હવે honest flag.** મેં એક clean, named Indian news case શોધવા ગયો જ્યાં fraud *specifically* એક leaked cancelled cheque ના through pull off થયો હોય. મને એક પણ ન મળ્યો. Banks અને explainer sites એને એક *risk* તરીકે describe કરે છે — એ standalone victims document નથી કરતા. તો હું pretend નહીં કરું કે cancelled cheques એક fraud epidemic છે. એ નથી.

જે *real* અને well-documented છે એ છે **UPI અને auto-debit mandate fraud** માં surge — phishing links જે "KYC update" કે "courier" કે "prize" messages તરીકે dressed up હોય છે અને લોકોને એક recurring auto-debit approve કરવામાં trick કરે છે. પહેલો debit ઘણીવાર tiny હોય છે (₹1–₹10) જેથી victims late notice કરે. એવા reported cases રહ્યા છે જ્યાં subscription apps "free trials" પછી clear consent વગર ₹149–₹699 recurring charge કરતા રહ્યા, અને NPCI response માં પોતાના mandate-approval rules tighten કરતું રહ્યું છે.

પણ — અને આ matter કરે છે — એ cases કોઈના પોતાના UPI PIN થી એક mandate approve કરવા પર turn થયા. એક leaked cheque પર નહીં. Cancelled cheque એ broader mandate-fraud દુનિયામાં એક *plausible feeder* છે, એક documented standalone weapon નહીં. એને sensible care થી treat કરો, panic થી નહીં.

### [H2] અસલી Safety Rules

તો, practically:

- **એક loose blank cheque leaf ક્યારેય hand over ન કરો.** એ જ genuinely dangerous વાળું છે — blank, signable, fillable. એના comparison માં cancelled cheque near-harmless છે.
- **હંમેશા "CANCELLED" લખો એ પહેલા કે એ તમારા હાથમાંથી જાય.** પછી નહીં. પહેલા.
- **એને sign ન કરો** જ્યાં સુધી explicitly ન પૂછાય.
- **તમારો MICR band readable રાખો પણ extra cheques volunteer ન કરો.** એક પૂરતો છે. કોઈ vendor ને "couple file પર keep" ન કરવા દો.

અને તમારો real backstop: RBI ના customer-protection rules હેઠળ, જો ક્યારેય કોઈ unauthorised electronic transaction થઈ જ જાય અને તમે એને **3 working days** ની અંદર report કરો, તમારી liability **zero** છે. 4–7 working days ની અંદર report કરો અને liability capped છે. Call કરવાનો number છે **1930** (National Cyber Crime helpline), કે cybercrime.gov.in પર file કરો. એ number જાણો. એ આ આખી post માં સૌથી useful વસ્તુ છે.

### [H2] એને બદલે શું Offer કરો — Penny-Drop Alternatives

તમારે હંમેશા cheque hand over નથી કરવો પડતો. જ્યારે તમે ન માંગો, આ widely accepted છે:

- **Penny-drop verification.** ₹1 credit + name match. આ leading digital replacement છે અને એ જ SEBI-regulated entities, NPS, અને મોટાભાગના modern KYC flows use કરે છે. જો requester એને support કરે છે, તમે એમને physical કંઈ પણ નથી આપતા.
- **Passbook front-page copy.** Name, account number, IFSC, branch બતાવે છે. લગભગ દરેક જગ્યાએ accept થાય છે જ્યાં cheque થાય છે.
- **Bank statement.** ઘણીવાર ≤3 months જૂનું હોવું જોઈએ. ઘણા insurers, PF processes, અને mutual funds દ્વારા accepted.
- **Bank verification letter** branch ના letterhead પર. તમારું bank request પર આ issue કરે છે.

એક caveat: acceptance institution ના હિસાબે vary કરે છે. હંમેશા specific party ને પૂછો કે એ શું લેશે *એ પહેલા* કે તમે એક leaf tear કરો. અડધો time એ એક passbook copy accept કરી લેશે અને તમે એક cheque બચાવી લીધો.

### [H2] "Cheque બચાવવો" એક Real વસ્તુ કેમ છે

આ petty લાગે છે જ્યાં સુધી તમે math ન કરો.

Cheque leaves પૈસા cost કરે છે એક વાર તમારો free quota ખતમ થઈ જાય. **SBI savings accounts** ને per financial year 10 free leaves મળે છે — એ પછી 10-leaf book માટે ₹40 + GST, 25-leaf book માટે ₹75 + GST. એ roughly ₹3–4 per leaf છે. HDFC અને ICICI વર્ષમાં around 25 free leaves સુધી આપે છે, પછી similar ₹2–₹4-per-leaf range માં charge કરે છે (current figures દરેક bank ના service-charge page પર confirm કરો).

હવે વિચારો કે લોકો કેટલી leaves cancelled-cheque requests પર burn કરે છે જેને એક penny-drop કે એક passbook photo satisfy કરી દેત. દરેક salary onboarding, દરેક SIP, દરેક vendor form — એ એક leaf gone. "Leaf waste ન કરો" instinct stinginess નથી. એક cheque leaf નો એક real, quantifiable cost છે, અને મોટાભાગની cancelled-cheque demands પાસે એક free digital alternative બરાબર ત્યાં જ બેઠું છે.

### [H2] એ Common Mistakes જે Actually તમને પડે છે

વસ્તુઓની એક short list જે લોકો ખોટી કરે છે:

**એને "to be safe" sign કરવો.** આ મોટું વાળું છે, અને આ exactly ઊલટું છે. Cancelled cheque sign કરવો એને *ઓછું* safe બનાવે છે, વધારે નહીં. એક unsigned cheque near-harmless છે; એક signed વાળું એક real instrument ના closer દેખાય છે. એને blank છોડો.

**એક error વાળી leaf use કરવી.** જો તમે એક payee name કે amount લખ્યું અને scratch out કર્યું, એ leaf ને cancelled cheque તરીકે repurpose ન કરો. Corrections વાળી leaf tampered દેખાય છે. એક clean tear કરો.

**MICR band કે account number obscure કરવો.** તમારો giant "CANCELLED" બે neat lines ની *વચ્ચે* બેસવો જોઈએ — નીચે band પર smear નહીં. જો recipient MICR, IFSC, કે account number નથી વાંચી શકતા, cheque useless છે અને એ એક બીજો માંગશે.

**Loose blank leaves "for later" hand over કરવી.** ક્યારેય નહીં. એક vendor જે "couple blank cheques file પર keep" કરવાનું કહે એ એક hard no છે. Blank signed leaves genuinely dangerous document છે — એ જ છે જેના પર fraud built થાય છે, cancelled વાળું નહીં. (આ exactly એ પ્રકારની habit છે જેની against અમારી [cheque fraud prevention guide](https://cheqify.app/gu/blog/how-to-avoid-cheque-fraud-in-india) warn કરે છે.)

**ભૂલી જવું કે તમે કઈ leaves cancel કરી.** જ્યારે તમારો cheque book audit trail messy હોય છે, એક cancelled leaf એક missing વાળી જેવી દેખાય છે — અને એક missing leaf એ જ વસ્તુ છે જે awkward bank conversations trigger કરે છે. Track કરવું કે તમે શું issue કર્યું, શું cleared થયું, અને શું તમે void કર્યું story ને clean રાખે છે ([cheque lifecycle પર વધારે](https://cheqify.app/gu/blog/cheque-lifecycle-management-explained)).

### [H2] એક Final Practical Note

Cancelled cheque એક small, low-drama document છે. બે lines. Caps માં "CANCELLED". Blue કે black ink. એને sign ન કરો. Printed details readable રાખો. એ જ આખી skill છે.

મોટો shift એ છે કે India quietly આ વસ્તુને retire કરી રહ્યું છે. EPFO પહેલેથી જ plug pull કરી ચૂક્યું છે, અને penny-drop steadily mutual funds, NPS, અને મોટાભાગના modern KYC માં એનું lunch ખાઈ રહ્યું છે. તો 2026 માં smart move actually એક લખવો જાણવા વિશે નથી. એ જાણવા વિશે છે કે તમે ક્યારે એને બદલે એક passbook copy hand over કરી શકો છો અને તમારી leaf book માં રાખી શકો છો — અને એ rare occasion પર જ્યારે તમે એક cheque લખો છો, એ sure કરવું કે MICR સાચો છે અને leaf accounted for છે ([MICR code actually શું છે](https://cheqify.app/gu/blog/what-is-micr-code-on-cheque)).

એને boring રાખો. Boring safe છે.

---

> **દરેક leaf track કરો જે તમે cancel કરો છો Cheqify સાથે — અને audit trail ક્યારેય lose ન કરો.** Full cheque lifecycle tracking જાણે છે કે તમે કઈ leaves issue, clear, કે void કરી, જેથી એક cancelled leaf ક્યારેય એક missing વાળી જેવી ન દેખાય. 300+ Indian bank layouts, auto-MICR validation, EMI cheques માટે batch printing, 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## ⚠️ Pre-publish fact-check required

A few claims in this draft rest on media reporting or secondary aggregators rather than a directly-fetched primary regulator document. Before publishing, verify the following — and never let a fabricated circular number into the final copy:

1. **EPFO's April 2025 removal of the cancelled-cheque upload** for online PF claims is widely reported (PTI wire, Business Standard, The Statesman) but the exact EPFO circular number/date was not located in a primary epfindia.gov.in document. Keep the framing as "in April 2025, as widely reported" — do **not** cite a circular number.
2. **HDFC/ICICI per-leaf cheque charges** (the ₹2–₹4 range) come from a secondary news roundup. The SBI figures (10 free leaves/year, then ₹40 + GST per 10-leaf book) are corroborated by SBI's own service-charge page. Re-confirm HDFC/ICICI on each bank's official 2026 service-charge schedule before printing exact numbers.
3. **The "minority of processes need a signed cancelled cheque" point** is verified only for the SEBI/mutual-fund penny-drop-fallback context. Keep it phrased as an exception, not a rule.
4. **The UPI / auto-debit mandate-fraud statistics** (complaint counts, percentage jumps) come from aggregators, not I4C primary data. Use only directional language ("a sharp rise in mandate fraud") — no hard numbers.
5. **There is no RBI or NPCI circular specific to "cancelled cheque."** Stated plainly in the body. Do not invent one. The NPCI "June 2025 CASR / lose platform access" claim is unconfirmed against a primary NPCI document and is deliberately omitted from this draft.
6. **Penny-drop regulator dates** (SEBI 2020, PFRDA 2021) are reported via secondary source. The body avoids printing those exact circular identifiers — keep it that way unless a primary source is confirmed.

---

## Internal-Link Strategy

**Forward links from this post:**
- Post #24 (`loan-repayment-by-cheque-india`) — the EMI auto-debit setup context; publishes Thu 2026-06-11, four days before this post.
- Post #3 (`how-to-avoid-cheque-fraud-in-india`) — never hand over loose blank leaves.
- Post #13 (`cheque-lifecycle-management-explained`) — keeping the cancelled/voided audit trail clean.
- Post #6 (`what-is-micr-code-on-cheque`) — the MICR band you must keep readable.

> **Editor note:** The in-body link in all three locales points to `/{locale}/blog/loan-repayment-by-cheque-india` (post #24). This assumes #24 publishes on schedule (Thu 2026-06-11) BEFORE this post (Mon 2026-06-15). If #24 slips, publish it first or this link 404s.

**Bonus internal-link work (after publish):**
- Edit post #24 (`loan-repayment-by-cheque-india`, all 3 locales) to add a reciprocal "here's how to write the cancelled cheque your bank wants for EMI auto-debit" link back to this post.
- Edit post #3 (`how-to-avoid-cheque-fraud-in-india`, all 3 locales) to link the "don't hand over loose blank leaves" section to this post's safety section.
- Add this post's URL to the glossary entry for "Cancelled Cheque" / "Penny-drop" / "NACH mandate" if those exist.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The numbered "five things that matter" and the use-case bullet list are detector-sensitive — keep the anecdote-style and contrarian prose strong around them.
- **Fact-check block (CRITICAL):** Resolve every item in the "⚠️ Pre-publish fact-check required" block above before publishing. Do NOT print any RBI/NPCI/EPFO circular number that isn't confirmed against a primary source. Re-confirm HDFC/ICICI per-leaf charges.
- **Internal link order:** Publish post #24 (`loan-repayment-by-cheque-india`) BEFORE this post — the in-body EMI-mandate link in all three locales points to it.
- **Word count:** EN body must be >1200 words (target 1,700–2,200). Current draft: ~2,440 words — over the soft ceiling, acceptable (bigger is better per the style memory).
- **Sanity toggles:** `isHowTo: ON` (5 steps), `hasFaq: ON` (7 items).

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into a Day 19 (or next available) block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — especially post #24 (loan repayment) and post #3 (cheque fraud).
5. IndexNow auto-pings on publish.
