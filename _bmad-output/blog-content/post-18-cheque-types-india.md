# Blog Post #18 — All Types of Cheques in India

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

"Types of cheques in India" is a foundational reference query — high search volume across students, new business owners, accountants, and anyone confused by the seven different cheque terms thrown around in everyday banking. The existing top results are textbook-style listicles with definitions but no practical context. This post stands out by tying each cheque type to "when would you actually use this" in 2026 India, with notes on which are still common vs disappearing. Internal links to MICR (#6), Section 138 (#11), and validity (#12) anchor it in the broader banking cluster.

---

## Sanity Fields

- **Slug:** `cheque-types-india`
- **Tags:** `Cheque Guide`, `Banking & RBI`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** NO (reference / definitional)
- **Has FAQ:** YES

---

## Publishing Metadata

- **Scheduled publish date:** Thursday 2026-05-21, 10:00 IST (auto-set in Sanity)
- **Primary keyword:** `types of cheques in india`
- **Secondary keywords:** all types of cheques, bearer cheque vs order cheque, crossed cheque, account payee cheque, post dated cheque, types of cheques and their uses
- **Reading time:** ~7 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/cheque-types-india`
  - HI: `https://cheqify.app/hi/blog/cheque-types-india`
  - GU: `https://cheqify.app/gu/blog/cheque-types-india`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `cheque-types-india-cover.webp`
- **Subject:** A clean grid showing 6 cheque thumbnails labelled — Bearer, Order, Crossed (with two parallel slashes), Account Payee (with "A/C PAYEE" between slashes), Self, Banker's. Each thumbnail has a small icon hinting its use case. Cheqify wordmark bottom-right. Soft pastel background.
- **Alt text:** All types of cheques used in India — bearer, order, crossed, account payee, self, and banker's cheques explained.
- **OG image:** Same as cover.

---

## Titles

- **EN:** All Types of Cheques in India — Bearer, Order, Crossed, Self, Banker's (2026 Guide)
- **HI:** भारत में Cheques के सभी Types — Bearer, Order, Crossed, Self, Banker's (2026 Guide)
- **GU:** ભારતમાં Cheques ના બધા Types — Bearer, Order, Crossed, Self, Banker's (2026 Guide)

---

## Descriptions

- **EN:** Eight cheque types you'll actually run into in India, what each one does, when to use which, and how the crossing-modifications work. Plain-English reference with real-use context — not a textbook listicle.
- **HI:** भारत में आप जिन आठ cheque types से actually टकराते हैं, हर एक क्या करता है, कब क्या use करना है, और crossing-modifications कैसे काम करते हैं. Real-use context के साथ plain-English reference — textbook listicle नहीं.
- **GU:** ભારતમાં તમે જે આઠ cheque types સાથે actually ટકરાશો, દરેક એક શું કરે છે, ક્યારે કયું use કરવું, અને crossing-modifications કેવી રીતે કામ કરે છે. Real-use context સાથે plain-English reference — textbook listicle નહીં.

---

## Body (English)

Paste the following into Sanity's Body (English) rich text editor. Use heading buttons for H2/H3.

---

### [H2] Why So Many Names for the Same Piece of Paper

A cheque is a cheque, right? You write a name, an amount, sign, and the bank pays.

Mostly true. But Indian banking uses a confusing mix of overlapping labels — "bearer," "order," "crossed," "account payee," "self," "banker's" — and each one changes how the cheque is allowed to be cashed, who can cash it, and how much risk you're taking when you write it.

These names aren't different *kinds* of cheque paper. They're different *instructions* you put on the same piece of paper. Some are written by you, some are added by your bank, and some come pre-printed on every leaf. Get them right and your cheque does exactly what you want. Get them wrong and the wrong person walks away with the money.

This guide walks through all the cheque variations you'll actually run into in 2026 India, what each one does in practice, when to use it, and the small modifications you can stack on top.

### [H2] The Two Big Categories: Who Can Encash It

Every cheque in India belongs to one of two camps based on a single line on the front: **bearer** or **order**.

#### [H3] Bearer Cheque

If the cheque has the words "or bearer" printed or written next to the payee's name — and nothing has been crossed out — it's a bearer cheque.

Whoever physically holds that cheque can walk into the bank and encash it. The bank doesn't verify identity. Doesn't ask for ID. Doesn't check that the holder is actually the payee. Just pays.

That's why bearer cheques are sometimes called "negotiable instruments par excellence." Convenient — but also the riskiest type of cheque you can write. Lose it on the train, and whoever finds it walks into any branch and gets your money.

For SMBs, bearer cheques mostly come up in two scenarios: petty cash withdrawals (you write a self-bearer cheque and your office staff encashes it) and very small vendor payments where you trust the recipient and the amount isn't worth the friction. For anything else, don't use them.

#### [H3] Order Cheque

If "or bearer" is **struck out** with a pen, or if the cheque has "Pay to the order of [name]" instead of "Pay to [name] or bearer," it's an order cheque.

Now only the named payee can encash it. The bank must verify the payee's identity. The payee can endorse it (sign on the back) to transfer it to someone else, but each endorsement adds a verification step.

This is the default safer mode for most cheque payments. Most cheque books today come with "or bearer" already pre-printed, and you make the cheque an order cheque by striking those two words out yourself. Two pen strokes. Big jump in safety.

We covered the actual mechanics of writing a cheque correctly in our [how to print cheques in India step-by-step guide](https://cheqify.app/en/blog/how-to-print-cheque-in-india).

### [H2] The Crossing Layer (And Why Two Lines Aren't Just Decoration)

Crossing is the second layer of instructions you can add — two parallel lines drawn diagonally across the top-left corner of the cheque. The lines don't change the payee. They change *how* the cheque can be encashed.

A crossed cheque cannot be paid as cash over the counter. It must be deposited into a bank account. That's it. That's the whole rule.

Why bother? Because the moment the money has to go into a bank account, you've got an audit trail. If something goes wrong, you can trace exactly which account received the funds. A cash payment leaves no trail; a crossed cheque always does.

There are several flavours of crossing, stacked from least to most restrictive.

#### [H3] General Crossing

Just two parallel lines, sometimes with "& Co." or "and Co." written between them.

Effect: Cheque must be deposited into *some* bank account. Doesn't matter whose account. The collecting bank just becomes responsible for verifying that the depositor has the right to encash.

This is the loosest form of crossing. The audit trail starts but the cheque is still relatively easy to deposit.

#### [H3] Special Crossing

Two parallel lines with the name of a specific bank written between them — for example, "HDFC Bank" or "State Bank of India."

Effect: Cheque can only be deposited at the named bank. Not at any other bank. If you write "Pay to Sharma & Sons" and special-cross it to HDFC Bank, then Sharma & Sons can only deposit it into their HDFC account. They have an account at ICICI? Bad luck. They need an HDFC account, or the cheque sits unused.

This is rare for SMBs. You'll see it more in corporate settings or in regulator-driven payments.

#### [H3] Account Payee Crossing (A/C Payee Only)

Two parallel lines with "A/C Payee" or "Account Payee Only" written between them.

Effect: Cheque can only be deposited into the **payee's own account.** No third-party endorsement. No depositing into someone else's account "for" the payee. The collecting bank has to verify that the depositor is the named payee.

This is the strictest and most common form of crossing in India today. RBI and banks themselves push customers to use account-payee crossing for almost everything other than petty cash. If you're paying a vendor, paying salary by cheque, paying rent — make it account payee.

Two pen strokes plus "A/C Payee" written between them. Three seconds of writing. Massive risk reduction.

#### [H3] Not Negotiable Crossing

Two parallel lines with "Not Negotiable" written between them.

Effect: Cheque can still be deposited like any crossed cheque, but the protection of a "holder in due course" disappears. If a thief endorses the cheque to a third party who genuinely believes the cheque is legitimate, that third party normally has rights to the money. "Not Negotiable" crossing removes those rights — the money belongs to the original payee no matter what.

Rare in practice. Account-payee crossing already gives you most of this protection.

### [H2] Special-Purpose Cheques You'll Run Into

Beyond bearer-vs-order and crossing modifications, there are several types of cheques that exist for specific purposes. Some are written by you, some are issued by the bank.

#### [H3] Self Cheque

A cheque where you write "SELF" or your own name in the payee line, drawn on your own bank account.

You walk into your branch, hand over the cheque, the bank pays you cash from your own account. That's it. It's basically a withdrawal slip with extra steps, used when you want a paper record of the withdrawal or when the amount is over the ATM limit.

Most SMBs use self cheques for cash withdrawals when their accountant needs petty cash but the office is far from an ATM. Old-school but still used.

#### [H3] Banker's Cheque (Pay Order)

This one isn't written *by* you — it's issued by the bank itself.

You walk into your bank, ask for a banker's cheque of ₹50,000 to "Ramesh Patel," pay ₹50,000 plus a small fee (usually ₹50-150) from your account, and the bank issues you a cheque drawn on **its own** account, payable to Ramesh Patel. The bank takes the money out of your account immediately when they issue the cheque, so the cheque is essentially "pre-paid" and guaranteed to clear.

Use cases: paying for a property registration (the registrar usually requires a banker's cheque, not a personal cheque), college admission fees, government payments, any time the payee insists on guaranteed funds and won't trust a personal cheque from you.

Banker's cheques are valid only for clearing within the same city / clearing zone. For inter-city guaranteed payment, you'd use a **demand draft (DD)** — same idea but valid for clearing across India.

#### [H3] Travellers Cheque

This one's mostly historical in 2026. Travellers cheques (Thomas Cook, American Express variety) were once the standard way to carry money internationally — buy them in your home currency, sign once when bought, sign again when encashing.

With forex cards, UPI, international debit cards, and instant remittance apps everywhere, travellers cheques have functionally died out. Indian banks rarely issue them anymore. You might still get one if you specifically ask, but for almost everyone, the modern equivalent is a prepaid forex card.

Including this here only because the term still shows up on "types of cheques" lists. Practically, you can ignore it.

### [H2] The Date-Based Variations

These aren't different cheque types in the strict sense. They're regular cheques with the date filled in to do specific things.

#### [H3] Post-Dated Cheque (PDC)

A cheque where the date is in the future — typically 1 to 90 days ahead.

Bank cannot encash it before that date. Common uses: paying EMIs (you issue 12 PDCs at the start of the year, each dated for the EMI day of the respective month), giving security deposits with vendors, rent payments scheduled in advance.

RBI rules limit PDC validity windows and there are specific safeguards. We covered the full PDC mechanics in [post-dated cheques rules and best practices](https://cheqify.app/en/blog/post-dated-cheques-rules-and-best-practices).

#### [H3] Ante-Dated Cheque

A cheque where the date is in the past — say, dated 3 weeks ago when you actually write it today.

Banks will accept and process it as long as the date is within the cheque's validity period (which is currently 3 months from the cheque date in India). Beyond that, it becomes stale.

Why would you write an ante-dated cheque? Accounting / cut-off reasons. You needed the payment to land in the previous quarter for books. Or you're issuing a cheque that should have been issued earlier and the recipient agreed. Or — less innocent — back-dating to manipulate when a transaction "happened." That last one has legal implications, especially for businesses subject to audits.

#### [H3] Stale Cheque

Any cheque presented for clearing more than 3 months after the cheque's date.

RBI cut the validity period from 6 months to 3 months back in 2012. Banks return stale cheques unprocessed. Common scenario: you wrote a cheque, the payee misplaced it, found it 4 months later, deposited it — and got it returned. You'd need to issue a fresh cheque with a current date.

If you're holding a cheque you suspect might be approaching staleness, deposit it before the 3-month mark. Don't wait. We covered the full validity-period math in [cheque validity and stop payment guide](https://cheqify.app/en/blog/cheque-validity-period-stop-payment-india).

#### [H3] Mutilated Cheque

A cheque that's physically damaged — torn, water-stained, corner missing, parts unreadable.

Banks will often accept a mutilated cheque if the key fields (payee name, amount, signature, MICR band, cheque number) are all clearly readable and the mutilation looks accidental. The branch manager has discretion. If the MICR band is damaged or the signature is gone, the cheque is dead.

Best practice: if you accidentally tore a cheque you're holding, photograph it for your records, then go back to the issuer and ask for a fresh one. Don't try your luck depositing a half-cheque.

### [H2] Which Type to Use When (Decision Cheat-Sheet)

Skip everything above? Here's the practical version.

- **Petty cash withdrawal for your own use:** Self-bearer cheque. Skip the crossing.
- **Salary payment to a known employee:** Account-payee crossed cheque. Strike "or bearer." Two pen strokes.
- **Vendor payment, any amount above ₹10,000:** Account-payee crossed cheque. No exceptions. We covered the [common mistakes here](https://cheqify.app/en/blog/cheque-printing-mistakes-indian-businesses).
- **EMI / scheduled future payments:** Series of account-payee crossed post-dated cheques. Sign each one separately.
- **Property registration / government payment:** Banker's cheque (DD if across cities). Don't try with a personal cheque — the registrar will refuse.
- **A new vendor who insists on a "guaranteed" cheque:** Banker's cheque is your tool here.
- **Paying yourself across cities (rare today):** DD, not a personal cheque. Avoids clearing-time risk.
- **Internal company transfers:** Most SMBs use NEFT/RTGS now for this, not cheques. If you must use a cheque, account-payee crossed.

The defaults that protect you: order cheque (strike "or bearer") + account-payee crossing. Make that your habit on every cheque except petty cash. Banks accept those settings instantly and the audit trail saves you when things go sideways.

### [H2] Quick Reference

If you scrolled past everything:

- **Bearer cheque** — Whoever holds it can encash it. Risky. Use only for self-cash withdrawals.
- **Order cheque** — Only the named payee can encash. Default safer mode. Strike "or bearer."
- **General crossing** — Two parallel lines. Forces deposit into a bank account, not cash.
- **Special crossing** — Crossing names a specific bank. Cheque can only be deposited there.
- **Account-payee crossing** — Crossing names "A/C Payee Only." Only payee's own account can receive funds. The strictest, most common form.
- **Self cheque** — Pay to "SELF." Withdraws cash from your own account.
- **Banker's cheque** — Bank-issued, pre-paid, guaranteed. Used for property registration, government dues, formal high-trust payments.
- **Post-dated cheque (PDC)** — Future date. Bank can't encash before that date. EMI/security-deposit use cases.
- **Ante-dated cheque** — Past date. Valid as long as within the 3-month validity window.
- **Stale cheque** — More than 3 months past the cheque date. Banks return unprocessed.
- **Mutilated cheque** — Physically damaged. Branch manager's call; usually rejected if key fields are unreadable.

Default safe combo for almost everything: order cheque + account-payee crossing. Habit-build that and you sidestep most cheque risk.

---

## Body (Hindi)

Paste the following into Sanity's Body (Hindi) rich text editor:

---

### [H2] एक ही कागज़ के Piece के लिए इतने सारे नाम क्यों

Cheque cheque है, सही? आप name लिखते हैं, amount, sign, bank pay करता है.

ज़्यादातर सही. पर Indian banking labels का confusing mix use करती है — "bearer," "order," "crossed," "account payee," "self," "banker's" — और हर एक बदलता है कि cheque कैसे cash हो सकता है, कौन cash कर सकता है, और cheque लिखने पर आप कितना risk ले रहे हैं.

ये नाम अलग *kinds* of cheque paper नहीं हैं. एक ही कागज़ पर अलग *instructions* हैं. कुछ आप लिखते हैं, कुछ आपका bank जोड़ता है, और कुछ हर leaf पर पहले से print आते हैं. सही use करिए और cheque exactly वही करेगा जो आप चाहते हैं. गलत हुए तो गलत आदमी पैसे लेके चला जाएगा.

यह guide 2026 India में actually टकराने वाले सब cheque variations पर walk करता है, हर एक practice में क्या करता है, कब use करना है, और छोटे modifications जो आप ऊपर stack कर सकते हैं.

### [H2] दो बड़े Categories: कौन Encash कर सकता है

भारत में हर cheque एक single line पर depend करते हुए दो camps में से एक में आता है: **bearer** या **order**.

#### [H3] Bearer Cheque

Cheque पर "or bearer" शब्द payee के नाम के बगल में print या लिखे हैं — और कुछ struck out नहीं — तो bearer cheque है.

जो भी physically उस cheque को hold करता है, bank जा सकता है और encash कर सकता है. Bank identity verify नहीं करता. ID नहीं पूछता. Check नहीं करता holder actually payee है या नहीं. बस pay करता है.

इसी वजह से bearer cheques को कभी-कभी "negotiable instruments par excellence" कहते हैं. Convenient — पर सबसे risky type जो आप लिख सकते हैं. Train में खो गया, कोई भी कोई भी branch जाकर आपके पैसे ले लेगा.

SMBs के लिए bearer cheques mostly दो scenarios में आते हैं: petty cash withdrawals (self-bearer cheque लिखकर office staff encash कराता है) और बहुत छोटे vendor payments जहाँ recipient पर trust है और amount इतना नहीं कि friction worth हो. बाकी कुछ के लिए use मत करिए.

#### [H3] Order Cheque

"Or bearer" को pen से **strike out** कर दिया, या cheque पर "Pay to [name] or bearer" की जगह "Pay to the order of [name]" है — तो order cheque है.

अब सिर्फ named payee encash कर सकता है. Bank को payee की identity verify करनी है. Payee endorse कर सकता है (back पर sign) किसी और को transfer के लिए, but हर endorsement एक verification step जोड़ता है.

यह default safer mode है ज़्यादातर cheque payments के लिए. Most cheque books आज "or bearer" pre-printed आते हैं, और आप cheque को order cheque बनाते हैं उन दो शब्दों को खुद strike करके. दो pen strokes. Safety में बड़ी jump.

Cheque correctly लिखने की actual mechanics हमने [how to print cheques in India step-by-step guide](https://cheqify.app/hi/blog/how-to-print-cheque-in-india) में cover की हैं.

### [H2] Crossing Layer (और क्यों दो lines सिर्फ decoration नहीं)

Crossing दूसरा layer है instructions का जो आप जोड़ सकते हैं — top-left corner पर diagonally दो parallel lines. Lines payee को नहीं बदलतीं. वो बदलती हैं *कैसे* cheque encash हो सकता है.

Crossed cheque counter पर cash के तौर पर pay नहीं हो सकता. Bank account में deposit करना ही पड़ेगा. बस. यही rule.

क्यों bother करें? क्योंकि जिस moment पैसा bank account में जाना है, audit trail मिल जाती है. कुछ गलत हुआ, exactly trace कर सकते हैं कौन से account में funds गए. Cash payment trail नहीं छोड़ता; crossed cheque हमेशा छोड़ता है.

Crossing के कई flavours हैं, least से most restrictive तक stacked.

#### [H3] General Crossing

बस दो parallel lines, कभी-कभी बीच में "& Co." या "and Co." लिखा.

Effect: Cheque *किसी* bank account में deposit करना है. किसका account, फर्क नहीं. Collecting bank ज़िम्मेदार बन जाता है verify करने का कि depositor को encash का right है.

यह crossing का loosest form है. Audit trail शुरू होता है but cheque deposit करना अभी भी relatively easy है.

#### [H3] Special Crossing

दो parallel lines specific bank के name के साथ बीच में — जैसे "HDFC Bank" या "State Bank of India."

Effect: Cheque सिर्फ named bank पर deposit हो सकता है. किसी और bank पर नहीं. आप "Pay to Sharma & Sons" लिखकर HDFC Bank पर special-cross करते हैं, तो Sharma & Sons सिर्फ अपने HDFC account में deposit कर सकते हैं. उनका ICICI account है? Bad luck. HDFC account चाहिए, नहीं तो cheque unused पड़ा रहेगा.

SMBs के लिए rare. Corporate settings में या regulator-driven payments में ज़्यादा दिखता है.

#### [H3] Account Payee Crossing (A/C Payee Only)

दो parallel lines "A/C Payee" या "Account Payee Only" बीच में लिखे.

Effect: Cheque सिर्फ **payee के अपने account** में deposit हो सकता है. कोई third-party endorsement नहीं. किसी और के account में payee के "for" deposit नहीं. Collecting bank verify करता है depositor named payee है.

आज भारत में यह crossing का strictest और most common form है. RBI और banks खुद customers को push करते हैं petty cash से बाकी सब के लिए account-payee crossing use करने को. Vendor pay कर रहे हैं, salary cheque से दे रहे हैं, rent pay कर रहे हैं — account payee करिए.

दो pen strokes और बीच में "A/C Payee" लिखना. तीन second का काम. Massive risk reduction.

#### [H3] Not Negotiable Crossing

दो parallel lines "Not Negotiable" बीच में.

Effect: Cheque किसी और crossed cheque की तरह deposit हो सकता है, but "holder in due course" की protection गायब. कोई thief cheque endorse करके third party को दे जो genuinely सोचे cheque legitimate है, normally third party के rights होते हैं money पर. "Not Negotiable" crossing वो rights remove कर देता है — पैसा original payee का है चाहे कुछ भी हो.

Practice में rare. Account-payee crossing already most of यह protection देता है.

### [H2] Special-Purpose Cheques जो आप टकराएंगे

Bearer-vs-order और crossing modifications के परे, कई specific purposes के लिए cheque types हैं. कुछ आप लिखते हैं, कुछ bank issue करता है.

#### [H3] Self Cheque

Cheque जहाँ payee line में "SELF" या अपना नाम लिखा है, अपने bank account पर drawn.

Branch जाकर cheque देते हैं, bank आपके अपने account से cash pay करता है. बस. Extra steps वाला withdrawal slip है, use करते हैं जब withdrawal का paper record चाहिए या amount ATM limit के ऊपर है.

ज़्यादातर SMBs self cheques cash withdrawals के लिए use करते हैं जब accountant को petty cash चाहिए and office ATM से दूर है. Old-school but अभी भी use होता है.

#### [H3] Banker's Cheque (Pay Order)

यह आप *लिखते* नहीं — bank खुद issue करता है.

Bank जाकर पूछते हैं ₹50,000 का banker's cheque "Ramesh Patel" के नाम, ₹50,000 plus छोटी fee (usually ₹50-150) account से देते हैं, और bank issue करता है **अपने** account पर drawn cheque, Ramesh Patel को payable. Bank cheque issue करते ही आपके account से पैसा निकाल लेता है, तो cheque essentially "pre-paid" है और clear होना guaranteed है.

Use cases: property registration के लिए payment (registrar usually banker's cheque demand करता है, personal cheque नहीं), college admission fees, government payments, कभी भी जब payee guaranteed funds insist करे और आपकी personal cheque trust नहीं करे.

Banker's cheques same city / clearing zone के अंदर clearing के लिए valid हैं. Inter-city guaranteed payment के लिए **demand draft (DD)** use करते हैं — same idea but पूरे India में clearing valid.

#### [H3] Travellers Cheque

2026 में यह mostly historical है. Travellers cheques (Thomas Cook, American Express variety) कभी standard way थे internationally पैसा carry करने का — home currency में buy करते थे, buy के time एक बार sign, encash के time फिर sign.

Forex cards, UPI, international debit cards, और instant remittance apps सब जगह होने से travellers cheques functionally die out हो गए हैं. Indian banks अब rarely issue करते हैं. Specifically ask करें तो शायद मिल जाए, but लगभग सबके लिए modern equivalent prepaid forex card है.

यहाँ include सिर्फ इसलिए कि term "types of cheques" lists पर अभी भी show होती है. Practically, ignore कर सकते हैं.

### [H2] Date-Based Variations

ये strict sense में different cheque types नहीं हैं. Regular cheques हैं जिनकी date specific things करने के लिए fill होती है.

#### [H3] Post-Dated Cheque (PDC)

Cheque जिसकी date future में है — typically 1 से 90 दिन आगे.

Bank उस date से पहले encash नहीं कर सकता. Common uses: EMI payments (year की शुरुआत में 12 PDCs issue करते हैं, हर एक respective month के EMI day के लिए dated), vendors के साथ security deposits, advance में scheduled rent payments.

RBI rules PDC validity windows limit करते हैं और specific safeguards हैं. Full PDC mechanics हमने [post-dated cheques rules and best practices](https://cheqify.app/hi/blog/post-dated-cheques-rules-and-best-practices) में cover की हैं.

#### [H3] Ante-Dated Cheque

Cheque जिसकी date past में है — कहें, आज लिखे और 3 हफ्ते पहले की dated.

Banks accept और process कर देंगे जब तक date cheque की validity period के अंदर है (जो भारत में currently cheque date से 3 months है). उसके बाद stale हो जाती है.

Ante-dated cheque क्यों लिखें? Accounting / cut-off reasons. Payment previous quarter में books के लिए land चाहिए था. या cheque जो पहले issue होनी चाहिए थी अब issue कर रहे हैं और recipient agreed है. या — कम innocent — back-dating transaction को manipulate करने के लिए कब "हुई." Last वाले के legal implications हैं, especially audits subject businesses के लिए.

#### [H3] Stale Cheque

कोई भी cheque जो cheque की date से 3 months के बाद clearing के लिए present किया जाए.

RBI ने 2012 में validity period 6 months से 3 months किया. Banks stale cheques unprocessed return करते हैं. Common scenario: आपने cheque लिखी, payee ने misplace कर दी, 4 months बाद मिली, deposit किया — और returned मिली. Fresh cheque current date के साथ चाहिए होगी.

कोई cheque hold कर रहे हैं जो staleness के पास लग रहा है, 3-month mark से पहले deposit करिए. Wait मत करिए. Full validity-period math हमने [cheque validity and stop payment guide](https://cheqify.app/hi/blog/cheque-validity-period-stop-payment-india) में cover की है.

#### [H3] Mutilated Cheque

Cheque जो physically damaged है — torn, water-stained, corner missing, parts unreadable.

Banks often mutilated cheque accept करते हैं अगर key fields (payee name, amount, signature, MICR band, cheque number) clearly readable हैं और mutilation accidental लगती है. Branch manager का discretion है. MICR band damaged या signature गायब, cheque dead.

Best practice: accidentally cheque tear गई जो hold कर रहे थे, photograph for records, फिर issuer के पास जाकर fresh मांगिए. Half-cheque deposit करने की luck try मत करिए.

### [H2] Type कब Use करें (Decision Cheat-Sheet)

ऊपर सब skip किया? Practical version यहाँ है.

- **अपने use के लिए petty cash withdrawal:** Self-bearer cheque. Crossing skip.
- **Known employee को salary payment:** Account-payee crossed cheque. "Or bearer" strike. दो pen strokes.
- **Vendor payment, ₹10,000 से ज़्यादा कोई amount:** Account-payee crossed cheque. No exceptions. [Common mistakes यहाँ](https://cheqify.app/hi/blog/cheque-printing-mistakes-indian-businesses) cover किए हैं.
- **EMI / scheduled future payments:** Account-payee crossed post-dated cheques की series. हर एक अलग sign करिए.
- **Property registration / government payment:** Banker's cheque (cities के across हो तो DD). Personal cheque से try मत करिए — registrar refuse करेगा.
- **New vendor जो "guaranteed" cheque insist करे:** Banker's cheque यहाँ tool है.
- **Cities के across खुद को pay (आज rare):** DD, personal cheque नहीं. Clearing-time risk avoid करता है.
- **Internal company transfers:** Most SMBs अब इसके लिए NEFT/RTGS use करते हैं, cheques नहीं. Must cheque use हो तो account-payee crossed.

Defaults जो आपको protect करते हैं: order cheque (strike "or bearer") + account-payee crossing. Habit बनाइए हर cheque पर petty cash के अलावा. Banks instantly accept करते हैं उन settings को और audit trail आपको बचाता है जब चीज़ें sideways जाती हैं.

### [H2] Quick Reference

सब skim किया तो:

- **Bearer cheque** — जो hold करे वो encash कर सकता है. Risky. सिर्फ self-cash withdrawals के लिए use करिए.
- **Order cheque** — सिर्फ named payee encash कर सकता है. Default safer mode. "Or bearer" strike करिए.
- **General crossing** — दो parallel lines. Bank account में deposit force करता है, cash नहीं.
- **Special crossing** — Crossing specific bank name करती है. Cheque सिर्फ वहाँ deposit हो सकता है.
- **Account-payee crossing** — Crossing "A/C Payee Only" name करती है. सिर्फ payee का अपना account funds receive कर सकता है. Strictest, most common form.
- **Self cheque** — "SELF" को pay. अपने account से cash withdraw करता है.
- **Banker's cheque** — Bank-issued, pre-paid, guaranteed. Property registration, government dues, formal high-trust payments के लिए use.
- **Post-dated cheque (PDC)** — Future date. Bank उस date से पहले encash नहीं कर सकता. EMI/security-deposit use cases.
- **Ante-dated cheque** — Past date. 3-month validity window के अंदर valid.
- **Stale cheque** — Cheque date से 3 months से ज़्यादा past. Banks unprocessed return करते हैं.
- **Mutilated cheque** — Physically damaged. Branch manager का call; usually reject होता है अगर key fields unreadable.

लगभग सब के लिए default safe combo: order cheque + account-payee crossing. Habit बनाइए और most cheque risk sidestep हो जाता है.

---

## Body (Gujarati)

Paste the following into Sanity's Body (Gujarati) rich text editor:

---

### [H2] એક જ કાગળ ના piece માટે આટલા બધા નામ કેમ

Cheque cheque છે, સાચું? તમે name લખો, amount, sign, bank pay કરે.

મોટાભાગે સાચું. પણ Indian banking labels નો confusing mix use કરે — "bearer," "order," "crossed," "account payee," "self," "banker's" — અને દરેક એક બદલે કે cheque કેવી રીતે cash થઈ શકે, કોણ cash કરી શકે, અને cheque લખવામાં તમે કેટલું risk લો છો.

આ નામો અલગ *kinds* of cheque paper નથી. એક જ કાગળ પર અલગ *instructions* છે. કેટલાક તમે લખો, કેટલાક તમારી bank જોડે, અને કેટલાક દરેક leaf પર પહેલેથી print આવે. સાચું use કરો અને cheque exactly એ જ કરશે જે તમે ઈચ્છો. ખોટું થયું તો ખોટો માણસ પૈસા લઈને જશે.

આ guide 2026 India માં actually ટકરાશે એ બધા cheque variations પર walk કરે, દરેક એક practice માં શું કરે, ક્યારે use કરવું, અને નાના modifications જે તમે ઉપર stack કરી શકો.

### [H2] બે મોટા Categories: કોણ Encash કરી શકે

ભારતમાં દરેક cheque એક single line પર depend કરીને બે camps માંથી એક માં આવે છે: **bearer** અથવા **order**.

#### [H3] Bearer Cheque

Cheque પર "or bearer" શબ્દ payee ના નામની બાજુ માં print કે લખેલા છે — અને કંઈ struck out નથી — તો bearer cheque છે.

જે પણ physically એ cheque ને hold કરે, bank જઈને encash કરી શકે. Bank identity verify નથી કરતી. ID નથી માગતી. Check નથી કરતી holder actually payee છે કે નહીં. બસ pay કરે.

એ જ કારણ છે કે bearer cheques ને ક્યારેક "negotiable instruments par excellence" કહે છે. Convenient — પણ સૌથી risky type જે તમે લખી શકો. Train માં ખોવાય ગયો, કોઈ પણ branch જઈને તમારા પૈસા લેશે.

SMBs માટે bearer cheques mostly બે scenarios માં આવે: petty cash withdrawals (self-bearer cheque લખીને office staff encash કરાવે) અને બહુ નાના vendor payments જ્યાં recipient પર trust છે અને amount એટલું નથી કે friction worth હોય. બાકી કંઈ માટે use ન કરો.

#### [H3] Order Cheque

"Or bearer" pen થી **strike out** કરી દીધું, કે cheque પર "Pay to [name] or bearer" ની જગ્યાએ "Pay to the order of [name]" છે — તો order cheque છે.

હવે ફક્ત named payee encash કરી શકે. Bank એ payee ની identity verify કરવી પડે. Payee endorse કરી શકે (back પર sign) કોઈ બીજાને transfer માટે, but દરેક endorsement એક verification step જોડે.

આ default safer mode છે મોટાભાગના cheque payments માટે. Most cheque books આજે "or bearer" pre-printed આવે છે, અને તમે cheque ને order cheque બનાવો છો એ બે શબ્દો ને જાતે strike કરીને. બે pen strokes. Safety માં મોટી jump.

Cheque correctly લખવાની actual mechanics અમે [how to print cheques in India step-by-step guide](https://cheqify.app/gu/blog/how-to-print-cheque-in-india) માં cover કરી છે.

### [H2] Crossing Layer (અને કેમ બે lines ફક્ત decoration નથી)

Crossing બીજો layer છે instructions નો જે તમે જોડી શકો — top-left corner પર diagonally બે parallel lines. Lines payee ને નથી બદલતી. એ બદલે *કેવી રીતે* cheque encash થઈ શકે.

Crossed cheque counter પર cash તરીકે pay નથી થઈ શકતો. Bank account માં deposit કરવો જ પડે. બસ. એ જ rule.

કેમ bother કરવું? કેમ કે જે moment પૈસા bank account માં જવાના છે, audit trail મળે છે. કંઈક ખોટું થયું, exactly trace કરી શકો કયા account માં funds ગયા. Cash payment trail નથી છોડતો; crossed cheque હંમેશા છોડે.

Crossing ના ઘણા flavours છે, least થી most restrictive સુધી stacked.

#### [H3] General Crossing

બસ બે parallel lines, ક્યારેક વચ્ચે "& Co." કે "and Co." લખેલું.

Effect: Cheque *કોઈ* bank account માં deposit કરવો છે. કોનું account, ફર્ક નથી. Collecting bank જવાબદાર બને verify કરવાનો કે depositor ને encash નો right છે.

આ crossing નું loosest form છે. Audit trail શરૂ થાય but cheque deposit કરવો હજુ relatively easy છે.

#### [H3] Special Crossing

બે parallel lines specific bank ના name સાથે વચ્ચે — જેમ "HDFC Bank" કે "State Bank of India."

Effect: Cheque ફક્ત named bank પર deposit થઈ શકે. કોઈ બીજી bank પર નહીં. તમે "Pay to Sharma & Sons" લખીને HDFC Bank પર special-cross કરો, તો Sharma & Sons ફક્ત પોતાના HDFC account માં deposit કરી શકે. એમનું ICICI account છે? Bad luck. HDFC account જોઈએ, નહીંતર cheque unused પડ્યો રહેશે.

SMBs માટે rare. Corporate settings માં કે regulator-driven payments માં વધારે દેખાય.

#### [H3] Account Payee Crossing (A/C Payee Only)

બે parallel lines "A/C Payee" કે "Account Payee Only" વચ્ચે લખેલા.

Effect: Cheque ફક્ત **payee ના પોતાના account** માં deposit થઈ શકે. કોઈ third-party endorsement નહીં. કોઈ બીજાના account માં payee ના "for" deposit નહીં. Collecting bank verify કરે depositor named payee છે.

આજે ભારતમાં આ crossing નું strictest અને most common form છે. RBI અને banks પોતે customers ને push કરે છે petty cash સિવાય બાકી બધા માટે account-payee crossing use કરવા. Vendor pay કરી રહ્યા છો, salary cheque થી આપી રહ્યા છો, rent pay કરી રહ્યા છો — account payee કરો.

બે pen strokes અને વચ્ચે "A/C Payee" લખવું. ત્રણ second નું કામ. Massive risk reduction.

#### [H3] Not Negotiable Crossing

બે parallel lines "Not Negotiable" વચ્ચે.

Effect: Cheque કોઈ બીજા crossed cheque ની જેમ deposit થઈ શકે, but "holder in due course" ની protection ગાયબ. કોઈ thief cheque endorse કરીને third party ને આપે જે genuinely વિચારે cheque legitimate છે, normally third party ના rights હોય money પર. "Not Negotiable" crossing એ rights remove કરી દે — પૈસા original payee ના છે ભલે કંઈ પણ થાય.

Practice માં rare. Account-payee crossing already most of આ protection આપે.

### [H2] Special-Purpose Cheques જે તમે ટકરાશો

Bearer-vs-order અને crossing modifications ની પાર, ઘણા specific purposes માટે cheque types છે. કેટલાક તમે લખો, કેટલાક bank issue કરે.

#### [H3] Self Cheque

Cheque જ્યાં payee line માં "SELF" કે પોતાનું નામ લખેલું છે, પોતાના bank account પર drawn.

Branch જઈને cheque આપો, bank તમારા પોતાના account થી cash pay કરે. બસ. Extra steps વાળો withdrawal slip છે, use કરે છે જ્યારે withdrawal નો paper record જોઈએ કે amount ATM limit ની ઉપર છે.

મોટાભાગના SMBs self cheques cash withdrawals માટે use કરે જ્યારે accountant ને petty cash જોઈએ અને office ATM થી દૂર છે. Old-school but હજુ use થાય.

#### [H3] Banker's Cheque (Pay Order)

આ તમે *લખતા* નથી — bank પોતે issue કરે.

Bank જઈને પૂછો ₹50,000 નો banker's cheque "Ramesh Patel" ના નામે, ₹50,000 plus નાની fee (usually ₹50-150) account થી આપો, અને bank issue કરે **પોતાના** account પર drawn cheque, Ramesh Patel ને payable. Bank cheque issue કરતા જ તમારા account થી પૈસા કાઢી લે, એટલે cheque essentially "pre-paid" છે અને clear થવાનું guaranteed છે.

Use cases: property registration માટે payment (registrar usually banker's cheque માગે, personal cheque નહીં), college admission fees, government payments, ક્યારેય જ્યારે payee guaranteed funds insist કરે અને તમારી personal cheque trust ન કરે.

Banker's cheques same city / clearing zone ની અંદર clearing માટે valid છે. Inter-city guaranteed payment માટે **demand draft (DD)** use કરો — same idea but આખા India માં clearing valid.

#### [H3] Travellers Cheque

2026 માં આ mostly historical છે. Travellers cheques (Thomas Cook, American Express variety) ક્યારેક standard way હતા internationally પૈસા carry કરવા — home currency માં buy કરતા, buy ના time એક વાર sign, encash ના time ફરી sign.

Forex cards, UPI, international debit cards, અને instant remittance apps દરેક જગ્યાએ હોવાથી travellers cheques functionally die out થઈ ગયા છે. Indian banks હવે rarely issue કરે છે. Specifically ask કરો તો કદાચ મળે, but લગભગ બધા માટે modern equivalent prepaid forex card છે.

અહીં include ફક્ત એટલા માટે કે term "types of cheques" lists પર હજુ show થાય. Practically, ignore કરી શકો.

### [H2] Date-Based Variations

આ strict sense માં different cheque types નથી. Regular cheques છે જેની date specific things કરવા fill થાય.

#### [H3] Post-Dated Cheque (PDC)

Cheque જેની date future માં છે — typically 1 થી 90 દિવસ આગળ.

Bank એ date પહેલાં encash નથી કરી શકતી. Common uses: EMI payments (વર્ષની શરૂઆતમાં 12 PDCs issue કરો, દરેક respective month ના EMI day માટે dated), vendors સાથે security deposits, advance માં scheduled rent payments.

RBI rules PDC validity windows limit કરે અને specific safeguards છે. Full PDC mechanics અમે [post-dated cheques rules and best practices](https://cheqify.app/gu/blog/post-dated-cheques-rules-and-best-practices) માં cover કરી છે.

#### [H3] Ante-Dated Cheque

Cheque જેની date past માં છે — કહો, આજે લખો અને 3 weeks પહેલાંની dated.

Banks accept અને process કરી દેશે જ્યાં સુધી date cheque ની validity period ની અંદર છે (જે ભારતમાં currently cheque date થી 3 months છે). એ પછી stale થઈ જાય.

Ante-dated cheque કેમ લખવો? Accounting / cut-off reasons. Payment previous quarter માં books માટે land જોઈતું હતું. કે cheque જે પહેલાં issue થવાનો હતો હવે issue કરી રહ્યા છો અને recipient agreed છે. કે — ઓછું innocent — back-dating transaction ને manipulate કરવા કે ક્યારે "થયું." છેલ્લા વાળાના legal implications છે, especially audits subject businesses માટે.

#### [H3] Stale Cheque

કોઈ પણ cheque જે cheque ની date થી 3 months પછી clearing માટે present થાય.

RBI એ 2012 માં validity period 6 months થી 3 months કરી. Banks stale cheques unprocessed return કરે. Common scenario: તમે cheque લખ્યો, payee એ misplace કરી, 4 months પછી મળ્યો, deposit કર્યો — અને returned મળ્યો. Fresh cheque current date સાથે જોઈશે.

કોઈ cheque hold કરી રહ્યા છો જે staleness ની પાસે લાગે, 3-month mark પહેલાં deposit કરો. Wait ન કરો. Full validity-period math અમે [cheque validity and stop payment guide](https://cheqify.app/gu/blog/cheque-validity-period-stop-payment-india) માં cover કરી છે.

#### [H3] Mutilated Cheque

Cheque જે physically damaged છે — torn, water-stained, corner missing, parts unreadable.

Banks often mutilated cheque accept કરે જો key fields (payee name, amount, signature, MICR band, cheque number) clearly readable હોય અને mutilation accidental લાગે. Branch manager નું discretion છે. MICR band damaged કે signature ગાયબ, cheque dead.

Best practice: accidentally cheque tear થઈ ગયો જે hold કરી રહ્યા હતા, photograph for records, પછી issuer ની પાસે જઈને fresh માગો. Half-cheque deposit કરવાનું luck try ન કરો.

### [H2] Type ક્યારે Use કરવો (Decision Cheat-Sheet)

ઉપર બધું skip કર્યું? Practical version અહીં છે.

- **પોતાના use માટે petty cash withdrawal:** Self-bearer cheque. Crossing skip.
- **Known employee ને salary payment:** Account-payee crossed cheque. "Or bearer" strike. બે pen strokes.
- **Vendor payment, ₹10,000 થી વધારે કોઈ amount:** Account-payee crossed cheque. No exceptions. [Common mistakes અહીં](https://cheqify.app/gu/blog/cheque-printing-mistakes-indian-businesses) cover કરી છે.
- **EMI / scheduled future payments:** Account-payee crossed post-dated cheques ની series. દરેક એક અલગ sign કરો.
- **Property registration / government payment:** Banker's cheque (cities ની across હોય તો DD). Personal cheque થી try ન કરો — registrar refuse કરશે.
- **New vendor જે "guaranteed" cheque insist કરે:** Banker's cheque અહીં tool છે.
- **Cities ની across જાતે ને pay (આજે rare):** DD, personal cheque નહીં. Clearing-time risk avoid કરે.
- **Internal company transfers:** Most SMBs હવે આના માટે NEFT/RTGS use કરે, cheques નહીં. Must cheque use થાય તો account-payee crossed.

Defaults જે તમને protect કરે: order cheque (strike "or bearer") + account-payee crossing. Habit બનાવો દરેક cheque પર petty cash સિવાય. Banks instantly accept કરે એ settings ને અને audit trail તમને બચાવે જ્યારે વસ્તુઓ sideways જાય.

### [H2] Quick Reference

બધું skim કર્યું તો:

- **Bearer cheque** — જે hold કરે એ encash કરી શકે. Risky. ફક્ત self-cash withdrawals માટે use કરો.
- **Order cheque** — ફક્ત named payee encash કરી શકે. Default safer mode. "Or bearer" strike કરો.
- **General crossing** — બે parallel lines. Bank account માં deposit force કરે, cash નહીં.
- **Special crossing** — Crossing specific bank name કરે. Cheque ફક્ત ત્યાં deposit થઈ શકે.
- **Account-payee crossing** — Crossing "A/C Payee Only" name કરે. ફક્ત payee નું પોતાનું account funds receive કરી શકે. Strictest, most common form.
- **Self cheque** — "SELF" ને pay. પોતાના account થી cash withdraw કરે.
- **Banker's cheque** — Bank-issued, pre-paid, guaranteed. Property registration, government dues, formal high-trust payments માટે use.
- **Post-dated cheque (PDC)** — Future date. Bank એ date પહેલાં encash નથી કરી શકતી. EMI/security-deposit use cases.
- **Ante-dated cheque** — Past date. 3-month validity window ની અંદર valid.
- **Stale cheque** — Cheque date થી 3 months થી વધારે past. Banks unprocessed return કરે.
- **Mutilated cheque** — Physically damaged. Branch manager નો call; usually reject થાય જો key fields unreadable.

લગભગ બધા માટે default safe combo: order cheque + account-payee crossing. Habit બનાવો અને most cheque risk sidestep થાય.

---

## Internal Links — Insert Inside Body

| Anchor text (EN) | Link target |
|---|---|
| "how to print cheques in India step-by-step guide" | `/en/blog/how-to-print-cheque-in-india` |
| "post-dated cheques rules and best practices" | `/en/blog/post-dated-cheques-rules-and-best-practices` |
| "cheque validity and stop payment guide" | `/en/blog/cheque-validity-period-stop-payment-india` |
| "common mistakes here" | `/en/blog/cheque-printing-mistakes-indian-businesses` |

> Insert each link the FIRST time the anchor text appears in each language body.

---

## CTA Block (append at end of each language body)

### English
> **Print order cheques with account-payee crossing on every issue, automatically.** Cheqify lets you set defaults once — "always order cheque, always A/C payee crossing" — and every cheque you print or write through the app carries the safe combo without you remembering. No more "did I cross that one?" anxiety. Free to start, no card required.
>
> **[Issue safer cheques with Cheqify →](https://app.cheqify.app/register)**

### Hindi
> **हर issue पर order cheques account-payee crossing के साथ print करें, automatically.** Cheqify आपको defaults एक बार set करने देता है — "हमेशा order cheque, हमेशा A/C payee crossing" — और हर cheque जो आप app से print या write करते हैं safe combo carry करता है बिना आपके याद रखे. "वो cross किया था या नहीं?" anxiety खत्म. शुरू करने के लिए मुफ्त, card नहीं चाहिए.
>
> **[Cheqify के साथ safer cheques issue करें →](https://app.cheqify.app/register)**

### Gujarati
> **દરેક issue પર order cheques account-payee crossing સાથે print કરો, automatically.** Cheqify તમને defaults એક વાર set કરવા દે — "હંમેશા order cheque, હંમેશા A/C payee crossing" — અને દરેક cheque જે તમે app થી print કે write કરો safe combo carry કરે તમે યાદ રાખ્યા વગર. "એ cross કર્યું હતું કે નહીં?" anxiety ખતમ. શરૂ કરવા માટે મફત, card જોઈતું નથી.
>
> **[Cheqify સાથે safer cheques issue કરો →](https://app.cheqify.app/register)**

---

## FAQ Items (fill in Sanity FAQ section)

### Q1
- **Question:** What are the main types of cheques used in India?
- **Answer:** Indian cheques fall into two basic categories — bearer cheques (anyone holding the cheque can encash) and order cheques (only the named payee can encash). On top of that, three crossing variations restrict how the cheque can be paid: general crossing (must be deposited into a bank account), special crossing (deposit only at the named bank), and account-payee crossing (deposit only into the payee's own account). Other types include self cheques, banker's cheques (bank-issued and pre-paid), post-dated cheques, ante-dated cheques, stale cheques, and mutilated cheques.

### Q2
- **Question:** What is the difference between a crossed cheque and an account-payee cheque?
- **Answer:** A crossed cheque (with two parallel lines on the top-left) must be deposited into a bank account — it cannot be cashed at the counter. An account-payee cheque is a crossed cheque with the words "A/C Payee" or "Account Payee Only" written between the lines, restricting deposit further to only the named payee's own account — no third-party endorsement allowed. Account-payee crossing is the strictest and most commonly used form in India.

### Q3
- **Question:** Is a bearer cheque safe to use?
- **Answer:** Not very. Whoever physically holds a bearer cheque can walk into any bank and encash it without identity verification. If lost or stolen, anyone finding it can claim the money. Bearer cheques are practical only for self-cash withdrawals or very small trusted payments. For everything else, use order cheques with account-payee crossing to ensure only the intended payee receives the funds.

### Q4
- **Question:** What is a banker's cheque and when should I use it?
- **Answer:** A banker's cheque is a cheque issued by the bank itself, drawn on its own account, after debiting the requested amount from your account immediately. It's essentially pre-paid and guaranteed to clear. Use it when the payee insists on guaranteed funds — most commonly for property registration, college admission fees, government dues, or formal high-trust payments. For inter-city guaranteed payment, use a demand draft (DD) instead, since banker's cheques are valid only within the same clearing zone.

### Q5
- **Question:** What is the validity of a cheque in India?
- **Answer:** Three months from the cheque date. RBI reduced the validity period from six months to three months in 2012. After three months, the cheque becomes "stale" and banks return it unprocessed at clearing. If you're holding a cheque approaching the three-month mark, deposit it before then or request a fresh cheque from the issuer.

---

## Post-Publish Checklist

- [ ] Cover image uploaded in Sanity; `hasFaq` toggle ON. (`isHowTo` stays OFF — reference / definitional.)
- [ ] Scheduled publish confirmed for 2026-05-21 10:00 IST.
- [ ] All internal links to existing posts verified live before publish.
- [ ] After publish: `npm run build` and verify URL in `sitemap.xml`.
- [ ] `npm run blog:index` to refresh PUBLISHED-INDEX.md.
- [ ] Run the post-publish checklist at `_bmad-output/blog-content/checklist-after-blog-is-published.md`.
- [ ] GSC → URL Inspection → Request Indexing for all 3 locale URLs.
- [ ] **Bonus internal-link work** — add a link from posts #5 (PDC), #7 (printing), #9 (mistakes), #12 (validity), #15 (cheque number) to this post on the first mention of relevant cheque type.
- [ ] LinkedIn post using social copy below.
- [ ] Share in 1 Indian SMB / accounting / banking community.

---

## Social Copy (LinkedIn)

> "Types of cheques in India" is one of those topics where every textbook lists the same 8 names without telling you when to actually use each one. So we wrote the practical version.
>
> Bearer vs order. The three crossing flavours. When a banker's cheque beats a personal cheque. PDC, ante-dated, stale, mutilated — what each one means in 2026 banking and which combo to use as your default for safer cheque-writing.
>
> https://cheqify.app/en/blog/cheque-types-india
>
> #chequemanagement #banking #RBI #MSME #India
