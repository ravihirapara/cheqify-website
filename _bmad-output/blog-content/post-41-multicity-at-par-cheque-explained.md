# Blog Post #41 — Multicity / At-Par Cheques Explained — No More Outstation Charges (2026)

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
- `> **Print vendor cheques that clear at full value in any city...** / **Vendor cheques print करें जो किसी भी city में...** / **Vendor cheques print કરો જે કોઈ પણ city માં...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **An ordinary cheque is a promise honoured at one address...** / **एक ordinary cheque एक address पर honoured एक promise है...** / **એક ordinary cheque એક address પર honoured એક promise છે...**` (pull quote in each body) → **Quote**

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

"Multicity cheque" and "payable at par" are printed on nearly every modern cheque leaf, yet almost nobody can explain what the line does — and searchers asking "multicity cheque meaning" or "outstation cheque charges" get thin bank-FAQ answers. This post owns the explainer: what at-par means, how it killed outstation collection charges, how CTS blurred the local/outstation divide without making the printed line irrelevant, and the account-type/ceiling fine print businesses paying out-of-city vendors actually need. Strong cluster fit: #18 (cheque types — mentions at-par in passing, this post goes deep), #17 (clearing time — the CTS T+1 story this post leans on). Product fit: businesses printing vendor cheques across cities are Cheqify's core audience.

---

## Sanity Fields

- **Slug:** `multicity-at-par-cheque-explained`
- **Tags:** `Banking & RBI`, `Cheque Guide`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** NO
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Ravi-managed — no fixed date
- **Primary keyword:** `multicity cheque`
- **Secondary keywords:** payable at par cheque meaning, at par cheque vs normal cheque, outstation cheque charges, multicity cheque limit, outstation cheque clearing time, at par cheque India
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/multicity-at-par-cheque-explained`
  - HI: `https://cheqify.app/hi/blog/multicity-at-par-cheque-explained`
  - GU: `https://cheqify.app/gu/blog/multicity-at-par-cheque-explained`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `multicity-at-par-cheque-explained-cover.webp`
- **Subject:** A single cheque leaf shown large, with the small printed line "Payable at par at all branches in India" magnified through a lens. Behind it, a faint map of India with several city dots (Mumbai, Delhi, Surat, Ludhiana, Kochi) connected by clean lines to the cheque — all dots equal, no distance penalty. A struck-through "collection charges" tag in one corner. Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** Multicity at-par cheque explained — one cheque leaf honoured at full value at any branch city in India, with no outstation collection charges.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Multicity / At-Par Cheques Explained — No More Outstation Charges (2026)
- **HI:** Multicity / At-Par Cheque समझें — अब कोई Outstation Charges नहीं (2026)
- **GU:** Multicity / At-Par Cheque સમજો — હવે કોઈ Outstation Charges નહીં (2026)

---

## Descriptions

- **EN:** There's a small printed line on your cheque leaf — "payable at par at all branches" — that most people never read, and it's the reason your out-of-city payments no longer arrive short and late. Here's the full explainer: what a multicity / at-par cheque is, how it differs from an ordinary branch-payable cheque, how it killed outstation collection charges, what CTS changed, who gets multicity cheque books, and the value ceilings some banks still set.
- **HI:** आपके cheque leaf पर एक छोटी printed line है — "payable at par at all branches" — जिसे ज़्यादातर लोग कभी नहीं पढ़ते, और यही reason है कि आपकी out-of-city payments अब short और late नहीं पहुँचतीं. यहाँ है full explainer: multicity / at-par cheque क्या है, ये ordinary branch-payable cheque से कैसे different है, इसने outstation collection charges कैसे खत्म किए, CTS ने क्या बदला, multicity cheque books किसे मिलती हैं, और वो value ceilings जो कुछ banks अभी भी set करते हैं.
- **GU:** તમારા cheque leaf પર એક નાની printed line છે — "payable at par at all branches" — જેને મોટાભાગના લોકો ક્યારેય નથી વાંચતા, અને એ જ reason છે કે તમારી out-of-city payments હવે short અને late નથી પહોંચતી. અહીં છે full explainer: multicity / at-par cheque શું છે, આ ordinary branch-payable cheque થી કેવી રીતે different છે, આણે outstation collection charges કેવી રીતે ખતમ કર્યા, CTS એ શું બદલ્યું, multicity cheque books કોને મળે છે, અને એ value ceilings જે કેટલીક banks હજુ પણ set કરે છે.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

There's a line printed on your cheque leaf that you have probably never read. It sits just under the bank's name, in type small enough to ignore: **"Payable at par at all branches of the bank in India."**

Twenty years ago that line was missing from most cheque books — and its absence cost businesses real money. A Surat trader paying a Ludhiana supplier by ordinary cheque watched the payment crawl through "outstation collection" for a week or two and arrive short, because the collecting bank took its fee out of the proceeds along the way.

This is the guide to that one line. What "payable at par" and "multicity" actually mean, how these leaves differ from an ordinary branch-payable cheque, what CTS did to the old local-versus-outstation divide, who gets multicity cheque books and with what ceilings — and why the printed line still matters in 2026, even though images now fly where paper used to travel.

### [H2] What "Payable at Par" Actually Means

"At par" is banking's phrase for *at face value* — the full printed amount, no deduction, no discount. A cheque payable at par at all branches carries a standing undertaking from the issuing bank: **any branch of ours, in any city, will honour this instrument as if it were drawn on that branch locally.**

"Multicity cheque" is simply the retail name for a leaf that carries this undertaking. The two terms describe the same thing from opposite ends: *at par* is the promise (full value, no collection charge), *multicity* is the reach (every city the bank operates in).

The machinery underneath is core banking. Once every branch of a bank shares one live ledger, the branch printed on your cheque stops being the only place your money "lives" — any branch can verify the balance, verify the signature, and pay. The at-par line is the bank saying so in print, so that *other* banks can treat the cheque as a local instrument when your payee deposits it far from your home branch.

That last part is the point. The undertaking isn't made to you, the drawer. It's made to the system — so your payee's bank in another city presents your cheque in its own local clearing instead of couriering it across the country for collection.

### [H2] The Old Divide — Local Cheques, Outstation Pain

An ordinary cheque — one of the many [types of cheques in India](https://cheqify.app/en/blog/cheque-types-india) — was payable at the branch named on it. Deposit it in the same city and it moved through local clearing: a day or two, no charge. Deposit it in another city and it became an **outstation cheque**, and everything changed.

The physical instrument had to travel to the drawee branch. That meant courier bags, holding queues, and a timeline your accountant learned to dread — seven to fourteen days was normal, longer for smaller towns. And the collecting bank charged for the errand: outstation collection charges, deducted from the proceeds under RBI-capped slabs (of the order of ₹25 for small cheques rising to ₹150-plus above a lakh, per each bank's schedule).

So the vendor who invoiced ₹1,00,000 saw something like ₹99,850 arrive — twelve days late. Multiply that across every out-of-city payment in a trading business and the outstation cheque wasn't a payment method; it was a small recurring tax on distance, paid in both money and float.

The multicity cheque book existed to delete exactly this. At-par leaf, local treatment everywhere, full face value, local timeline.

Before it arrived, the standard workaround was the demand draft: walk to the bank, pay the DD commission, stand in the queue, courier the instrument — for every single out-of-city payment. The at-par cheque book moved that entire errand back to your own desk. One signature, one envelope, and the vendor's bank does the rest at full value. For businesses that made the switch, the DD counter became a place they simply stopped visiting.

### [H2] What the At-Par Line Changes for Your Payee

The whole mechanic fits in one line:

> **An ordinary cheque is a promise honoured at one address. An at-par cheque is the same promise honoured at every address the bank has.**

When your payee's bank sees the at-par line, it presents the cheque in its *own* city's clearing as a local instrument. No collection route, no courier, no deduction. The payee is credited the full printed amount on the local clearing cycle — which, in the CTS era, [typically means the next working day](https://cheqify.app/en/blog/cheque-clearing-time-india).

For the drawer, nothing about writing the cheque changes: same fields, same signature, same care with the amount in words. The difference lives entirely in what the leaf lets the *receiving* side do with it.

### [H2] Didn't CTS Already Fix This?

Mostly, yes — and it's worth being honest about how.

The **Cheque Truncation System (CTS)** stopped physical cheques from travelling at all. Your payee's bank scans the leaf; the *image* moves to the paying bank; the paper stays put. Clearing that once ran city-by-city was consolidated into grids and then effectively into one national arrangement — so a CTS-2010 cheque deposited in Kochi against a Chandigarh account clears on roughly the same T+1 cycle as a hometown cheque. The old operational line between "local" and "outstation" has blurred to near-invisibility.

But blurred is not gone, and the at-par line still earns its ink for three reasons:

- **It is the printed guarantee, not just a network behaviour.** Bank charge schedules still distinguish instruments payable at par from those sent "on collection." The line is what keeps your cheque on the free side of that schedule.
- **Edge cases still route to collection.** Non-CTS instruments, damaged leaves that fail image standards, and certain instrument types or locations can still be handled as collection items — with the charges and delays that implies.
- **Every standard CTS-2010 book is printed at-par now** — precisely because the at-par undertaking is what lets an image-based system treat every cheque as local. The feature didn't become irrelevant; it became universal.

Practical upshot: if your cheque book is recent, you almost certainly already hold multicity leaves. If it predates CTS-2010 standards, that's the book to retire.

### [H2] Who Gets Multicity Cheque Books — and the Ceilings

The short version, by account type:

- **Current accounts:** multicity books are the default. Business banking assumed out-of-city payments long before retail did.
- **Premium and salary savings variants:** at-par books standard, often with free-leaf quotas tied to the account plan.
- **Ordinary savings accounts:** historically got branch-payable books; today virtually every CTS-2010 book issued is payable at par regardless of account class, though leaf quotas and per-book charges differ.

The fine print worth knowing is **ceilings**. Some banks cap the amount they'll honour at par at a *non-home* branch — most visibly for **cash encashment**: self-withdrawal against your own cheque at another city's branch is typically capped (₹50,000 is a common figure), and third-party cash payment at non-home branches is heavily restricted or barred outright. A few banks have also set per-leaf value ceilings on multicity savings-account cheques.

Two saving graces. First, these caps mostly bite *cash-over-the-counter* scenarios, not cheques deposited into an account — a crossed cheque moving through clearing is normally paid at full value without a ceiling. Second, every cap lives in your bank's published schedule of charges, which is a five-minute read before you write a large out-of-city cheque. For a business, the operating rule is simpler still: cross every vendor cheque account-payee, and the encashment ceilings never enter the story.

### [H2] Why Businesses Paying Out-of-City Vendors Prefer Them

The multicity cheque earns its place in a business's drawer on plain arithmetic:

- **The vendor receives full value.** No collection charge silently shaved off the invoice amount — and no awkward ledger mismatch where you paid ₹1,00,000 and their books received ₹99,850.
- **The float is predictable.** Local-clearing timelines mean the vendor can tell you, reliably, when funds land — which keeps credit-period conversations factual instead of suspicious.
- **Post-dated cheque sets work.** Lenders and lessors who take PDCs have long insisted on multicity leaves for exactly this reason: the instrument must clear cleanly wherever the holder chooses to present it, months later.
- **It standardises the run.** One cheque book that behaves identically for the vendor across the street and the supplier three states away means one printing setup, one register, one process — no per-payee exceptions.

There's a quieter benefit too: dispute hygiene. When a payment argument surfaces months later, an at-par cheque's clearing record is a clean, single-leg story — presented on this date, cleared at full amount, done. No collection legs to trace, no deducted charges to reconcile, no "the bank took its cut somewhere" ambiguity. The paper trail reads the way a ledger should.

If your payments regularly cross city lines — dealers, distributors, franchise fees, inter-state suppliers — the at-par book isn't an upgrade. It's the baseline.

### [H2] How to Read Your Own Leaf

Pull a leaf from your current book and check four things:

1. **The at-par line** — printed under or near the bank's name: "payable at par at all branches…". If it's there, you hold a multicity cheque.
2. **The CTS-2010 marker** — the faint watermark in the paper and the small lettering near the left edge, confirming the leaf meets image-clearing standards.
3. **Bank, branch, and IFSC** — still printed, still identifying your home branch for records, even though payment no longer depends on it.
4. **What's *not* there — and cannot be added.** Handwriting "payable at par" on an ordinary cheque does nothing. The undertaking is the bank's, made through its printing and its inter-branch arrangements — not a note a drawer can append. If your book lacks the line, the fix is a new cheque book, not a pen.

That last habit — actually reading the leaf before a payment run — is a thirty-second discipline that catches old books, damaged leaves, and non-CTS stock before they come back as collection items with a fee attached.

---

> **Print vendor cheques that clear at full value in any city.** Cheqify prints on 300+ Indian bank layouts — multicity leaves included — with auto amount-in-words, clean account-payee crossings, and a register that tracks every leaf from issue to clearing. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** What is a multicity or at-par cheque?
   **A:** A cheque printed with the bank's undertaking that it is "payable at par at all branches of the bank in India." Any branch of the issuing bank, in any city, honours it at full face value as if it were a local instrument — so the payee's bank presents it in local clearing instead of sending it for outstation collection. "Multicity" and "at par" describe the same leaf: multicity is the reach, at par is the promise of full value with no collection charge.

2. **Q:** What is the difference between an at-par cheque and an ordinary cheque?
   **A:** An ordinary (branch-payable) cheque is payable at the specific branch named on it; presented in another city, it historically travelled as an outstation cheque — 7–14 days plus collection charges deducted from the proceeds. An at-par cheque is treated as local at every branch of the issuing bank, so it clears on local timelines at full value anywhere in India. The writing, signing, and crossing rules are identical; only the leaf's printed undertaking differs.

3. **Q:** Are outstation cheque collection charges still deducted?
   **A:** Not for at-par cheques — the printed undertaking keeps them on the free, local-clearing side of every bank's charge schedule. Collection charges survive only at the edges: non-CTS instruments, damaged leaves that fail image standards, or instruments a bank must handle outside normal clearing. Since virtually all current CTS-2010 cheque books are printed payable at par, most cheques written today never see a collection charge.

4. **Q:** Did CTS make multicity cheques unnecessary?
   **A:** CTS made them universal, not unnecessary. Cheque truncation moves images instead of paper, and grid-based clearing gives most CTS-2010 cheques a T+1 cycle regardless of city — which blurred the old local/outstation divide. But the at-par line is the printed guarantee that lets the system treat the leaf as local, and bank charge schedules still key off it. The feature is now standard on every CTS-2010 book precisely because the whole system depends on it.

5. **Q:** Who gets a multicity cheque book?
   **A:** Current accounts get multicity books by default, and premium or salary savings variants have long included them. Today, virtually every CTS-2010 cheque book issued — including ordinary savings accounts — is printed payable at par; what varies by account class is the free-leaf quota and per-book charges, not the at-par feature itself.

6. **Q:** Is there a limit on multicity cheque amounts?
   **A:** For cheques deposited into a bank account and cleared through CTS, there is normally no at-par ceiling — the full value is paid. Caps appear mainly for cash-over-the-counter scenarios at non-home branches: self-encashment is commonly limited (₹50,000 is a typical figure) and third-party cash payment is heavily restricted or barred. A few banks have also set per-leaf ceilings on savings-account multicity cheques — check your bank's schedule of charges before writing a very large out-of-city cheque.

7. **Q:** Can I make a cheque at-par by writing "payable at par" on it?
   **A:** No. The at-par status is the issuing bank's undertaking, delivered through its printed stationery and inter-branch arrangements — a drawer cannot create it with a pen. Handwriting the phrase on an ordinary leaf has no effect on how the cheque is cleared or charged. If your cheque book lacks the printed line, request a fresh CTS-2010 book from your bank; every current standard book carries it.

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

आपके cheque leaf पर एक line printed है जो आपने probably कभी नहीं पढ़ी. ये bank के नाम के ठीक नीचे बैठी है, इतने छोटे type में कि ignore हो जाए: **"Payable at par at all branches of the bank in India."**

बीस साल पहले ये line ज़्यादातर cheque books से missing थी — और इसकी absence businesses को real पैसा cost करती थी. एक Surat trader जो Ludhiana supplier को ordinary cheque से pay करता था, वो payment को हफ़्ते-दो हफ़्ते "outstation collection" में रेंगते देखता था और short पहुँचते देखता था, क्योंकि collecting bank रास्ते में proceeds से अपनी fee काट लेता था.

ये उसी एक line की guide है. "Payable at par" और "multicity" का actually मतलब क्या है, ये leaves एक ordinary branch-payable cheque से कैसे different हैं, CTS ने पुराने local-versus-outstation divide के साथ क्या किया, multicity cheque books किसे मिलती हैं और किन ceilings के साथ — और 2026 में भी printed line क्यों matter करती है, जबकि अब images वहाँ उड़ती हैं जहाँ paper travel करता था.

### [H2] "Payable at Par" का Actually मतलब क्या है

"At par" banking की phrase है *at face value* के लिए — पूरा printed amount, कोई deduction नहीं, कोई discount नहीं. All branches पर payable at par एक cheque issuing bank की standing undertaking carry करता है: **हमारी कोई भी branch, किसी भी city में, इस instrument को ऐसे honour करेगी जैसे ये उसी branch पर locally drawn हो.**

"Multicity cheque" simply उस leaf का retail नाम है जो ये undertaking carry करता है. दोनों terms same चीज़ को opposite ends से describe करती हैं: *at par* promise है (full value, कोई collection charge नहीं), *multicity* reach है (हर city जहाँ bank operate करता है).

नीचे की machinery core banking है. जब bank की हर branch एक live ledger share करती है, तो आपके cheque पर printed branch वो अकेली जगह नहीं रहती जहाँ आपका पैसा "रहता" है — कोई भी branch balance verify कर सकती है, signature verify कर सकती है, और pay कर सकती है. At-par line bank का इसे print में कहना है, ताकि *दूसरे* banks आपके cheque को local instrument की तरह treat कर सकें जब आपका payee इसे आपकी home branch से दूर deposit करे.

यही last part point है. Undertaking आपसे, drawer से, नहीं की गई. ये system से की गई है — ताकि दूसरी city में आपके payee का bank आपके cheque को अपनी local clearing में present करे, देश भर में collection के लिए courier करने की जगह.

### [H2] पुराना Divide — Local Cheques, Outstation दर्द

एक ordinary cheque — [India के कई types of cheques](https://cheqify.app/hi/blog/cheque-types-india) में से एक — उस पर named branch पर payable था. इसे same city में deposit करें और ये local clearing से move होता था: एक-दो दिन, कोई charge नहीं. दूसरी city में deposit करें और ये एक **outstation cheque** बन जाता था, और सब कुछ बदल जाता था.

Physical instrument को drawee branch तक travel करना पड़ता था. मतलब courier bags, holding queues, और एक timeline जिससे आपका accountant dread करना सीख गया था — सात से चौदह दिन normal था, छोटे towns के लिए और लंबा. और collecting bank इस errand के लिए charge करता था: outstation collection charges, RBI-capped slabs के under proceeds से deducted (छोटे cheques के लिए ₹25 के order से लेकर एक lakh से ऊपर ₹150-plus तक, हर bank की schedule के हिसाब से).

तो जो vendor ₹1,00,000 invoice करता था, उसे ₹99,850 जैसा कुछ मिलता था — बारह दिन late. इसे एक trading business की हर out-of-city payment पर multiply करें और outstation cheque एक payment method नहीं था; ये distance पर एक छोटा recurring tax था, पैसे और float दोनों में paid.

Multicity cheque book exactly इसी को delete करने के लिए exist करती थी. At-par leaf, हर जगह local treatment, full face value, local timeline.

इसके आने से पहले, standard workaround demand draft था: bank तक चलो, DD commission pay करो, queue में खड़े रहो, instrument courier करो — हर single out-of-city payment के लिए. At-par cheque book ने ये पूरा errand वापस आपकी अपनी desk पर move कर दिया. एक signature, एक envelope, और vendor का bank बाकी full value पर कर देता है. जिन businesses ने switch किया, उनके लिए DD counter एक ऐसी जगह बन गया जहाँ उन्होंने simply जाना बंद कर दिया.

### [H2] At-Par Line आपके Payee के लिए क्या बदलती है

पूरा mechanic एक line में fit होता है:

> **एक ordinary cheque एक address पर honoured एक promise है. एक at-par cheque वही promise है जो bank के हर address पर honoured होता है.**

जब आपके payee का bank at-par line देखता है, वो cheque को *अपनी* city की clearing में local instrument की तरह present करता है. कोई collection route नहीं, कोई courier नहीं, कोई deduction नहीं. Payee को local clearing cycle पर पूरा printed amount credit होता है — जो CTS era में [typically अगला working day होता है](https://cheqify.app/hi/blog/cheque-clearing-time-india).

Drawer के लिए, cheque लिखने में कुछ नहीं बदलता: same fields, same signature, amount in words की same care. Difference पूरी तरह इसमें है कि leaf *receiving* side को उसके साथ क्या करने देता है.

### [H2] क्या CTS ने ये Already Fix नहीं कर दिया?

Mostly, हाँ — और honest रहना worth है कि कैसे.

**Cheque Truncation System (CTS)** ने physical cheques का travel करना ही बंद कर दिया. आपके payee का bank leaf scan करता है; *image* paying bank तक move होती है; paper वहीं रहता है. जो clearing कभी city-by-city चलती थी, वो grids में और फिर effectively एक national arrangement में consolidate हो गई — तो Kochi में deposit हुआ एक CTS-2010 cheque, Chandigarh account के against, roughly उसी T+1 cycle पर clear होता है जैसे hometown cheque. "Local" और "outstation" के बीच की पुरानी operational line near-invisibility तक blur हो चुकी है.

पर blurred का मतलब gone नहीं, और at-par line अभी भी अपनी ink तीन reasons से कमाती है:

- **ये printed guarantee है, सिर्फ़ एक network behaviour नहीं.** Bank charge schedules अभी भी payable at par instruments को "on collection" भेजे गए instruments से distinguish करती हैं. यही line आपके cheque को उस schedule की free side पर रखती है.
- **Edge cases अभी भी collection में route होते हैं.** Non-CTS instruments, image standards fail करने वाले damaged leaves, और certain instrument types या locations अभी भी collection items की तरह handle हो सकते हैं — उन charges और delays के साथ.
- **हर standard CTS-2010 book अब at-par printed है** — precisely इसलिए कि at-par undertaking ही वो चीज़ है जो एक image-based system को हर cheque को local treat करने देती है. Feature irrelevant नहीं हुआ; universal हो गया.

Practical upshot: अगर आपकी cheque book recent है, आप almost certainly already multicity leaves hold करते हैं. अगर ये CTS-2010 standards से पहले की है, तो वही book retire करने वाली है.

### [H2] Multicity Cheque Books किसे मिलती हैं — और Ceilings

Account type के हिसाब से short version:

- **Current accounts:** multicity books default हैं. Business banking ने out-of-city payments retail से बहुत पहले assume कर ली थीं.
- **Premium और salary savings variants:** at-par books standard, अक्सर account plan से tied free-leaf quotas के साथ.
- **Ordinary savings accounts:** historically branch-payable books मिलती थीं; आज issue होने वाली virtually हर CTS-2010 book account class चाहे जो हो payable at par है, हालाँकि leaf quotas और per-book charges differ करते हैं.

जानने लायक fine print **ceilings** है. कुछ banks उस amount को cap करते हैं जो वो *non-home* branch पर at par honour करेंगे — सबसे visibly **cash encashment** के लिए: दूसरी city की branch पर अपने ही cheque के against self-withdrawal typically capped है (₹50,000 एक common figure है), और non-home branches पर third-party cash payment heavily restricted या outright barred है. कुछ banks ने multicity savings-account cheques पर per-leaf value ceilings भी set की हैं.

दो saving graces. पहली, ये caps mostly *cash-over-the-counter* scenarios को bite करते हैं, account में deposit हुए cheques को नहीं — clearing से move होता एक crossed cheque normally बिना ceiling के full value पर paid होता है. दूसरी, हर cap आपके bank की published schedule of charges में रहता है, जो एक बड़ा out-of-city cheque लिखने से पहले five-minute का read है. एक business के लिए operating rule और भी simple है: हर vendor cheque account-payee cross करें, और encashment ceilings कभी story में आते ही नहीं.

### [H2] Out-of-City Vendors को Pay करने वाले Businesses इन्हें क्यों Prefer करते हैं

Multicity cheque एक business के drawer में अपनी जगह plain arithmetic पर कमाता है:

- **Vendor को full value मिलती है.** Invoice amount से silently कोई collection charge नहीं कटता — और कोई awkward ledger mismatch नहीं जहाँ आपने ₹1,00,000 pay किए और उनकी books में ₹99,850 पहुँचे.
- **Float predictable है.** Local-clearing timelines का मतलब vendor आपको reliably बता सकता है कि funds कब land होंगे — जो credit-period conversations को suspicious की जगह factual रखता है.
- **Post-dated cheque sets काम करते हैं.** PDCs लेने वाले lenders और lessors exactly इसी reason से लंबे समय से multicity leaves पर insist करते आए हैं: instrument को cleanly clear होना चाहिए जहाँ भी holder इसे present करे, महीनों बाद.
- **ये run को standardise करता है.** एक cheque book जो सड़क पार के vendor और तीन states दूर के supplier के लिए identically behave करती है, मतलब एक printing setup, एक register, एक process — कोई per-payee exceptions नहीं.

एक quieter benefit भी है: dispute hygiene. जब महीनों बाद कोई payment argument surface होता है, एक at-par cheque का clearing record एक clean, single-leg story है — इस date पर presented, full amount पर cleared, done. Trace करने के लिए कोई collection legs नहीं, reconcile करने के लिए कोई deducted charges नहीं, कोई "bank ने कहीं अपना cut लिया" ambiguity नहीं. Paper trail वैसे पढ़ता है जैसे एक ledger को पढ़ना चाहिए.

अगर आपकी payments regularly city lines cross करती हैं — dealers, distributors, franchise fees, inter-state suppliers — तो at-par book कोई upgrade नहीं है. ये baseline है.

### [H2] अपना Leaf खुद कैसे पढ़ें

अपनी current book से एक leaf निकालें और चार चीज़ें check करें:

1. **At-par line** — bank के नाम के नीचे या पास printed: "payable at par at all branches…". अगर ये है, तो आप एक multicity cheque hold करते हैं.
2. **CTS-2010 marker** — paper में faint watermark और left edge के पास small lettering, जो confirm करती है कि leaf image-clearing standards meet करता है.
3. **Bank, branch, और IFSC** — अभी भी printed, records के लिए आपकी home branch identify करते हुए, भले ही payment अब इस पर depend नहीं करती.
4. **वो जो *नहीं* है — और add नहीं हो सकता.** एक ordinary cheque पर "payable at par" handwrite करना कुछ नहीं करता. Undertaking bank की है, उसकी printing और inter-branch arrangements के through — कोई note नहीं जो drawer append कर सके. अगर आपकी book में line नहीं है, fix एक नई cheque book है, pen नहीं.

वो last habit — payment run से पहले actually leaf पढ़ना — एक thirty-second discipline है जो पुरानी books, damaged leaves, और non-CTS stock को fee के साथ collection items बनकर वापस आने से पहले पकड़ लेती है.

---

> **Vendor cheques print करें जो किसी भी city में full value पर clear हों.** Cheqify 300+ Indian bank layouts पर print करता है — multicity leaves included — auto amount-in-words, clean account-payee crossings, और एक register के साथ जो हर leaf को issue से clearing तक track करता है. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Gujlish blend, same structure as English. Keep the pull-quote and CTA callout.

---

તમારા cheque leaf પર એક line printed છે જે તમે probably ક્યારેય નથી વાંચી. આ bank ના નામની બરાબર નીચે બેઠી છે, એટલા નાના type માં કે ignore થઈ જાય: **"Payable at par at all branches of the bank in India."**

વીસ વર્ષ પહેલા આ line મોટાભાગની cheque books માંથી missing હતી — અને એની absence businesses ને real પૈસા cost કરતી હતી. એક Surat trader જે Ludhiana supplier ને ordinary cheque થી pay કરતો હતો, એ payment ને અઠવાડિયું-બે અઠવાડિયા "outstation collection" માં ઘસડાતી જોતો હતો અને short પહોંચતી જોતો હતો, કારણ કે collecting bank રસ્તામાં proceeds માંથી પોતાની fee કાપી લેતી હતી.

આ એ જ એક line ની guide છે. "Payable at par" અને "multicity" નો actually મતલબ શું છે, આ leaves એક ordinary branch-payable cheque થી કેવી રીતે different છે, CTS એ જૂના local-versus-outstation divide સાથે શું કર્યું, multicity cheque books કોને મળે છે અને કઈ ceilings સાથે — અને 2026 માં પણ printed line કેમ matter કરે છે, જ્યારે હવે images ત્યાં ઊડે છે જ્યાં paper travel કરતું હતું.

### [H2] "Payable at Par" નો Actually મતલબ શું છે

"At par" banking ની phrase છે *at face value* માટે — આખો printed amount, કોઈ deduction નહીં, કોઈ discount નહીં. All branches પર payable at par એક cheque issuing bank ની standing undertaking carry કરે છે: **અમારી કોઈ પણ branch, કોઈ પણ city માં, આ instrument ને એમ honour કરશે જાણે આ એ જ branch પર locally drawn હોય.**

"Multicity cheque" simply એ leaf નું retail નામ છે જે આ undertaking carry કરે છે. બંને terms same વસ્તુને opposite ends થી describe કરે છે: *at par* promise છે (full value, કોઈ collection charge નહીં), *multicity* reach છે (દરેક city જ્યાં bank operate કરે છે).

નીચેની machinery core banking છે. જ્યારે bank ની દરેક branch એક live ledger share કરે છે, ત્યારે તમારા cheque પર printed branch એ એકલી જગ્યા નથી રહેતી જ્યાં તમારા પૈસા "રહે" છે — કોઈ પણ branch balance verify કરી શકે છે, signature verify કરી શકે છે, અને pay કરી શકે છે. At-par line bank નું આને print માં કહેવું છે, જેથી *બીજી* banks તમારા cheque ને local instrument ની જેમ treat કરી શકે જ્યારે તમારો payee આને તમારી home branch થી દૂર deposit કરે.

એ જ last part point છે. Undertaking તમારી સાથે, drawer સાથે, નથી કરાઈ. આ system સાથે કરાઈ છે — જેથી બીજી city માં તમારા payee ની bank તમારા cheque ને પોતાની local clearing માં present કરે, દેશભરમાં collection માટે courier કરવાની જગ્યાએ.

### [H2] જૂનો Divide — Local Cheques, Outstation દર્દ

એક ordinary cheque — [India ના ઘણા types of cheques](https://cheqify.app/gu/blog/cheque-types-india) માંથી એક — એના પર named branch પર payable હતો. આને same city માં deposit કરો અને આ local clearing થી move થતો હતો: એક-બે દિવસ, કોઈ charge નહીં. બીજી city માં deposit કરો અને આ એક **outstation cheque** બની જતો હતો, અને બધું બદલાઈ જતું હતું.

Physical instrument ને drawee branch સુધી travel કરવું પડતું હતું. મતલબ courier bags, holding queues, અને એક timeline જેનાથી તમારો accountant dread કરતા શીખી ગયો હતો — સાત થી ચૌદ દિવસ normal હતું, નાના towns માટે વધુ લાંબું. અને collecting bank આ errand માટે charge કરતી હતી: outstation collection charges, RBI-capped slabs ની under proceeds માંથી deducted (નાના cheques માટે ₹25 ના order થી લઈને એક lakh થી ઉપર ₹150-plus સુધી, દરેક bank ની schedule પ્રમાણે).

તો જે vendor ₹1,00,000 invoice કરતો હતો, એને ₹99,850 જેવું કંઈક મળતું હતું — બાર દિવસ late. આને એક trading business ની દરેક out-of-city payment પર multiply કરો અને outstation cheque એક payment method નહોતો; આ distance પર એક નાનો recurring tax હતો, પૈસા અને float બંનેમાં paid.

Multicity cheque book exactly આને જ delete કરવા exist કરતી હતી. At-par leaf, દરેક જગ્યાએ local treatment, full face value, local timeline.

આના આવ્યા પહેલા, standard workaround demand draft હતો: bank સુધી ચાલો, DD commission pay કરો, queue માં ઊભા રહો, instrument courier કરો — દરેક single out-of-city payment માટે. At-par cheque book એ આ આખું errand પાછું તમારી પોતાની desk પર move કરી દીધું. એક signature, એક envelope, અને vendor ની bank બાકીનું full value પર કરી દે છે. જે businesses એ switch કર્યું, એમના માટે DD counter એક એવી જગ્યા બની ગયું જ્યાં એમણે simply જવાનું બંધ કરી દીધું.

### [H2] At-Par Line તમારા Payee માટે શું બદલે છે

આખું mechanic એક line માં fit થાય છે:

> **એક ordinary cheque એક address પર honoured એક promise છે. એક at-par cheque એ જ promise છે જે bank ના દરેક address પર honoured થાય છે.**

જ્યારે તમારા payee ની bank at-par line જુએ છે, એ cheque ને *પોતાની* city ની clearing માં local instrument ની જેમ present કરે છે. કોઈ collection route નહીં, કોઈ courier નહીં, કોઈ deduction નહીં. Payee ને local clearing cycle પર આખો printed amount credit થાય છે — જે CTS era માં [typically આગલો working day હોય છે](https://cheqify.app/gu/blog/cheque-clearing-time-india).

Drawer માટે, cheque લખવામાં કંઈ નથી બદલાતું: same fields, same signature, amount in words ની same care. Difference આખો આમાં છે કે leaf *receiving* side ને એની સાથે શું કરવા દે છે.

### [H2] શું CTS એ આ Already Fix નથી કરી દીધું?

Mostly, હા — અને honest રહેવું worth છે કે કેવી રીતે.

**Cheque Truncation System (CTS)** એ physical cheques નું travel કરવું જ બંધ કરી દીધું. તમારા payee ની bank leaf scan કરે છે; *image* paying bank સુધી move થાય છે; paper ત્યાં જ રહે છે. જે clearing ક્યારેક city-by-city ચાલતી હતી, એ grids માં અને પછી effectively એક national arrangement માં consolidate થઈ ગઈ — તો Kochi માં deposit થયેલો એક CTS-2010 cheque, Chandigarh account ની against, roughly એ જ T+1 cycle પર clear થાય છે જેમ hometown cheque. "Local" અને "outstation" વચ્ચેની જૂની operational line near-invisibility સુધી blur થઈ ચૂકી છે.

પણ blurred નો મતલબ gone નહીં, અને at-par line હજુ પણ પોતાની ink ત્રણ reasons થી કમાય છે:

- **આ printed guarantee છે, ફક્ત એક network behaviour નહીં.** Bank charge schedules હજુ પણ payable at par instruments ને "on collection" મોકલાયેલા instruments થી distinguish કરે છે. આ જ line તમારા cheque ને એ schedule ની free side પર રાખે છે.
- **Edge cases હજુ પણ collection માં route થાય છે.** Non-CTS instruments, image standards fail કરતા damaged leaves, અને certain instrument types કે locations હજુ પણ collection items ની જેમ handle થઈ શકે છે — એ charges અને delays સાથે.
- **દરેક standard CTS-2010 book હવે at-par printed છે** — precisely એટલા માટે કે at-par undertaking જ એ વસ્તુ છે જે એક image-based system ને દરેક cheque ને local treat કરવા દે છે. Feature irrelevant નથી થયું; universal થઈ ગયું.

Practical upshot: જો તમારી cheque book recent છે, તમે almost certainly already multicity leaves hold કરો છો. જો આ CTS-2010 standards થી પહેલાની છે, તો એ જ book retire કરવાની છે.

### [H2] Multicity Cheque Books કોને મળે છે — અને Ceilings

Account type પ્રમાણે short version:

- **Current accounts:** multicity books default છે. Business banking એ out-of-city payments retail થી ઘણા પહેલા assume કરી લીધી હતી.
- **Premium અને salary savings variants:** at-par books standard, ઘણીવાર account plan સાથે tied free-leaf quotas સાથે.
- **Ordinary savings accounts:** historically branch-payable books મળતી હતી; આજે issue થતી virtually દરેક CTS-2010 book account class ગમે તે હોય payable at par છે, જોકે leaf quotas અને per-book charges differ કરે છે.

જાણવા લાયક fine print **ceilings** છે. કેટલીક banks એ amount ને cap કરે છે જે એ *non-home* branch પર at par honour કરશે — સૌથી visibly **cash encashment** માટે: બીજી city ની branch પર પોતાના જ cheque ની against self-withdrawal typically capped છે (₹50,000 એક common figure છે), અને non-home branches પર third-party cash payment heavily restricted કે outright barred છે. કેટલીક banks એ multicity savings-account cheques પર per-leaf value ceilings પણ set કરી છે.

બે saving graces. પહેલી, આ caps mostly *cash-over-the-counter* scenarios ને bite કરે છે, account માં deposit થયેલા cheques ને નહીં — clearing થી move થતો એક crossed cheque normally ceiling વગર full value પર paid થાય છે. બીજી, દરેક cap તમારી bank ની published schedule of charges માં રહે છે, જે એક મોટો out-of-city cheque લખતા પહેલા five-minute નું read છે. એક business માટે operating rule એથી પણ simple છે: દરેક vendor cheque account-payee cross કરો, અને encashment ceilings ક્યારેય story માં આવતા જ નથી.

### [H2] Out-of-City Vendors ને Pay કરતા Businesses આમને કેમ Prefer કરે છે

Multicity cheque એક business ના drawer માં પોતાની જગ્યા plain arithmetic પર કમાય છે:

- **Vendor ને full value મળે છે.** Invoice amount માંથી silently કોઈ collection charge નથી કપાતો — અને કોઈ awkward ledger mismatch નહીં જ્યાં તમે ₹1,00,000 pay કર્યા અને એમની books માં ₹99,850 પહોંચ્યા.
- **Float predictable છે.** Local-clearing timelines નો મતલબ vendor તમને reliably કહી શકે છે કે funds ક્યારે land થશે — જે credit-period conversations ને suspicious ની જગ્યાએ factual રાખે છે.
- **Post-dated cheque sets કામ કરે છે.** PDCs લેતા lenders અને lessors exactly આ જ reason થી લાંબા સમયથી multicity leaves પર insist કરતા આવ્યા છે: instrument ને cleanly clear થવું જોઈએ જ્યાં પણ holder આને present કરે, મહિનાઓ પછી.
- **આ run ને standardise કરે છે.** એક cheque book જે રસ્તા પારના vendor અને ત્રણ states દૂરના supplier માટે identically behave કરે છે, મતલબ એક printing setup, એક register, એક process — કોઈ per-payee exceptions નહીં.

એક quieter benefit પણ છે: dispute hygiene. જ્યારે મહિનાઓ પછી કોઈ payment argument surface થાય છે, એક at-par cheque નો clearing record એક clean, single-leg story છે — આ date પર presented, full amount પર cleared, done. Trace કરવા માટે કોઈ collection legs નહીં, reconcile કરવા માટે કોઈ deducted charges નહીં, કોઈ "bank એ ક્યાંક પોતાનો cut લીધો" ambiguity નહીં. Paper trail એમ વંચાય છે જેમ એક ledger ને વંચાવું જોઈએ.

જો તમારી payments regularly city lines cross કરે છે — dealers, distributors, franchise fees, inter-state suppliers — તો at-par book કોઈ upgrade નથી. આ baseline છે.

### [H2] પોતાનું Leaf જાતે કેવી રીતે વાંચવું

તમારી current book માંથી એક leaf કાઢો અને ચાર વસ્તુઓ check કરો:

1. **At-par line** — bank ના નામની નીચે કે પાસે printed: "payable at par at all branches…". જો આ છે, તો તમે એક multicity cheque hold કરો છો.
2. **CTS-2010 marker** — paper માં faint watermark અને left edge પાસે small lettering, જે confirm કરે છે કે leaf image-clearing standards meet કરે છે.
3. **Bank, branch, અને IFSC** — હજુ પણ printed, records માટે તમારી home branch identify કરતા, ભલે payment હવે આના પર depend નથી કરતી.
4. **એ જે *નથી* — અને add નથી થઈ શકતું.** એક ordinary cheque પર "payable at par" handwrite કરવું કંઈ નથી કરતું. Undertaking bank ની છે, એની printing અને inter-branch arrangements ની through — કોઈ note નહીં જે drawer append કરી શકે. જો તમારી book માં line નથી, તો fix એક નવી cheque book છે, pen નહીં.

એ last habit — payment run પહેલા actually leaf વાંચવું — એક thirty-second discipline છે જે જૂની books, damaged leaves, અને non-CTS stock ને fee સાથે collection items બનીને પાછા આવતા પહેલા પકડી લે છે.

---

> **Vendor cheques print કરો જે કોઈ પણ city માં full value પર clear થાય.** Cheqify 300+ Indian bank layouts પર print કરે છે — multicity leaves included — auto amount-in-words, clean account-payee crossings, અને એક register સાથે જે દરેક leaf ને issue થી clearing સુધી track કરે છે. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## Internal-Link Strategy

**Forward links from this post:**
- Post #18 (`cheque-types-india`) — the ordinary/branch-payable cheque as one of the cheque types. **LIVE — safe.**
- Post #17 (`cheque-clearing-time-india`) — the CTS T+1 local-clearing cycle. **LIVE — safe.**

**Bonus internal-link work (after publish):**
- Edit post #18 (`cheque-types-india`, all 3 locales) to link its at-par/multicity mention here — strongest reciprocal.
- Edit post #17 (`cheque-clearing-time-india`, all 3 locales) to add an "outstation cheques and at-par leaves" link here where it discusses grid clearing.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The unread-printed-line opening, the Surat→Ludhiana arithmetic (₹1,00,000 → ₹99,850), and the "new cheque book, not a pen" close carry the voice.
- **Fact-check before publish (CRITICAL):**
  1. **Outstation collection charge slabs** — body says "RBI-capped slabs (of the order of ₹25 … to ₹150-plus above a lakh)"; verify current RBI ceilings/wording (historic circular slabs: ≤₹5,000: ₹25; ₹5k–10k: ₹50; ₹10k–1L: ₹100; >₹1L: ₹150) and keep the hedge.
  2. **CTS national grid consolidation** — body says clearing consolidated "effectively into one national arrangement"; verify the current grid status (three grids → pan-India CTS) and the T+1 claim against post #17.
  3. **Non-home-branch cash encashment cap (₹50,000 "common figure")** — bank-specific, kept hedged; spot-check 2–3 major banks' schedules.
  4. **"Virtually every CTS-2010 book is payable at par"** — verify this remains accurate across major banks' standard savings books.
- **Internal link order:** both targets (#17, #18) are LIVE — safe.
- **Word count:** EN body must be >1,200 words (target 1,700–2,100). Current draft: ~1,960 words.
- **Sanity toggles:** `isHowTo: OFF`, `hasFaq: ON` (7 items).
- **Slug sanity-check after publish:** slug must read exactly `multicity-at-par-cheque-explained` — no stray tag text (see `[[project_sanity_slug_corruption_gotcha]]`).

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — posts #18 and #17 (both locales trios).
5. IndexNow auto-pings on publish.
