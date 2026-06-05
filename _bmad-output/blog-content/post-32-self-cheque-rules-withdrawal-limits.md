# Blog Post #32 — Self Cheque Rules in India — Withdrawal Limits, Section 194N TDS, and the Safe Way to Use One (2026)

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
- `> **A self cheque is the one cheque you write to yourself...** / **Self cheque वो एक cheque है...** / **Self cheque એ એક cheque છે...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **A signed self/bearer cheque is cash with extra steps...** / **एक signed self/bearer cheque extra steps वाली cash है...** / **એક signed self/bearer cheque extra steps વાળી cash છે...**` (pull quote in each body) → **Quote**

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

Post #18 defines the self cheque in two paragraphs; searchers want the rules: how to write one, where it can be encashed (home vs non-home branch limits), whether someone else can encash it, and — the money keyword — Section 194N TDS on cash withdrawals (2% above ₹1 crore; ₹20 lakh for ITR non-filers). High intent from business owners pulling cash for wages/expenses. Cluster fit: #18 (types), #19 (fill correctly), #23 (crossing kills cash), #3 (fraud — the blank signed leaf), #12 (validity).

---

## Sanity Fields

- **Slug:** `self-cheque-rules-withdrawal-limits`
- **Tags:** `Cheque Guide`, `Banking & RBI`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** YES (withdrawing cash with a self cheque, 5 steps)
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Thursday 2026-07-09, 10:00 IST (auto-set in Sanity)
- **Primary keyword:** `self cheque rules`
- **Secondary keywords:** self cheque withdrawal limit, how to write self cheque, self cheque encashment another branch, 194N TDS cash withdrawal, can someone else encash my self cheque, bearer cheque cash withdrawal
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/self-cheque-rules-withdrawal-limits`
  - HI: `https://cheqify.app/hi/blog/self-cheque-rules-withdrawal-limits`
  - GU: `https://cheqify.app/gu/blog/self-cheque-rules-withdrawal-limits`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `self-cheque-rules-withdrawal-limits-cover.webp`
- **Subject:** A cheque leaf with "SELF" written prominently on the payee line, a hand presenting it at a bank counter with cash being counted on the other side. Two small info chips float above: "Home branch: full amount" and "TDS: 194N above limits". A small warning badge over a second, blank-but-signed cheque shown half-tucked in a pocket (the don't-do). Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** Self cheque rules in India — writing "Self" on the payee line to withdraw cash at the bank counter, with withdrawal limits and Section 194N TDS explained.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Self Cheque Rules in India — Withdrawal Limits, Section 194N TDS, and the Safe Way to Use One (2026)
- **HI:** India में Self Cheque Rules — Withdrawal Limits, Section 194N TDS, और Use करने का Safe तरीका (2026)
- **GU:** India માં Self Cheque Rules — Withdrawal Limits, Section 194N TDS, અને Use કરવાનો Safe તરીકો (2026)

---

## Descriptions

- **EN:** Write "Self" on the payee line and the cheque becomes your cash-withdrawal key — with rules attached. Here's all of it: how to write a self cheque correctly, home-branch vs non-home-branch limits, whether anyone else can encash it, why a crossed self cheque can't give you cash, the Section 194N TDS thresholds (₹1 crore — or ₹20 lakh if you haven't filed returns), and the blank-signed-leaf mistake that funds most cheque fraud.
- **HI:** Payee line पर "Self" लिखें और cheque आपकी cash-withdrawal key बन जाता है — rules के साथ. यहाँ है सब कुछ: self cheque correctly कैसे लिखें, home-branch vs non-home-branch limits, क्या कोई और इसे encash कर सकता है, crossed self cheque आपको cash क्यों नहीं दे सकता, Section 194N TDS thresholds (₹1 crore — या ₹20 lakh अगर आपने returns file नहीं किए), और वो blank-signed-leaf mistake जो ज़्यादातर cheque fraud fund करती है.
- **GU:** Payee line પર "Self" લખો અને cheque તમારી cash-withdrawal key બની જાય છે — rules સાથે. અહીં છે બધું: self cheque correctly કેવી રીતે લખવો, home-branch vs non-home-branch limits, શું કોઈ બીજું એને encash કરી શકે છે, crossed self cheque તમને cash કેમ નથી આપી શકતો, Section 194N TDS thresholds (₹1 crore — કે ₹20 lakh જો તમે returns file નથી કર્યા), અને એ blank-signed-leaf mistake જે મોટાભાગનું cheque fraud fund કરે છે.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

The ATM gives you forty thousand a day, grudgingly, in instalments. But some days the business needs two lakh in cash — wages, a market purchase, a vendor who deals only in notes. That's the day you rediscover the oldest self-service tool in banking: a cheque made out to *yourself*.

Write "Self" on the payee line, sign it, walk to the counter, walk out with cash. Simple — and surrounded by more rules than any other cheque you'll write, because cash is where banks, tax law, and fraudsters all pay closest attention.

Here's the complete picture.

### [H2] What a Self Cheque Is (and the One Word That Makes It)

A self cheque is your own cheque, drawn on your own account, with the word **"Self"** written on the "Pay" line instead of a name. It instructs your bank: pay the bearer of this instrument — me — in cash, across the counter.

Mechanically it's a [bearer cheque](/en/blog/cheque-types-india) whose payee happens to be the account holder. That bearer nature is the whole story, both its convenience and its danger, and we'll come back to it.

Writing one correctly takes ten seconds, and the [usual fill rules](/en/blog/how-to-fill-cheque-correctly) apply with extra strictness because a counter clerk will scrutinise it while you stand there:

- **Date:** today's (valid 3 months, like every cheque, but banks prefer self cheques fresh)
- **Pay:** the word "Self" — no overwriting
- **Amount:** words and figures, agreeing exactly
- **Signature:** matching your specimen — this is checked harder on cash payouts than anywhere else
- **Do NOT cross it.** This one trips people constantly: two parallel lines mean "account credit only," which makes cash payment impossible ([crossing, explained](/en/blog/crossed-cheque-vs-account-payee)). A crossed self cheque is a contradiction the bank resolves by refusing you cash.

Carry ID. For larger amounts especially, the teller will want it alongside the signature match.

### [H2] Where You Can Encash It — Home Branch vs Everywhere Else

**At your home branch:** a self cheque is good for any amount your balance covers. For genuinely large withdrawals, call the branch a day ahead — branches hold limited cash, and several banks ask for advance notice above internal thresholds so the cash is actually there when you arrive.

**At a non-home branch of the same bank:** possible, but capped. Banks set per-day limits for non-home cash encashment — commonly somewhere in the tens of thousands to a lakh range depending on the bank and account type — and may insist the account holder come in person with ID. These caps exist because the non-home branch can verify your signature digitally but knows nothing else about you.

**At another bank entirely:** no. A self cheque is encashable only at the drawee bank — the bank whose name is printed on the leaf. Deposit-to-account is how cheques travel between banks; counter cash does not.

The exact non-home limits move around and differ by bank — treat your bank's current service page or a quick phone call as the source of truth before making a trip with a big number in mind.

### [H2] Can Someone Else Encash Your Self Cheque?

Here's where the bearer nature shows its teeth. A self cheque is technically payable to the *bearer* — which means a bank may pay whoever presents it, if everything else is in order. In practice, banks treat third-party presentation of self cheques with suspicion and friction: expect ID requirements, signature verification on the back (the bearer signs on the reverse, sometimes twice — once on receipt of cash), tighter amount caps for third-party cash, and at some banks, outright refusal above small amounts or a phone call to you before paying.

If you genuinely need to send someone to collect your cash, the cleaner route is writing the cheque in *their name* as a bearer cheque, with an authority letter for larger sums — or skipping cash entirely and transferring to them. The self cheque is built for one use case: **you, at the counter, yourself.**

And this brings us to the rule that matters more than every limit above:

> **A signed self/bearer cheque is cash with extra steps. Lose a blank signed one and you haven't lost a cheque — you've lost whatever amount the finder is bold enough to write on it.**

Never pre-sign self cheques "to save time." Never leave a signed one in a drawer, a glovebox, or with an employee "for emergencies." This exact habit — the floating signed bearer leaf — is the raw material of classic cheque fraud ([the full prevention playbook](/en/blog/how-to-avoid-cheque-fraud-in-india)). Sign it at the branch, not before.

### [H2] Section 194N — When the Taxman Meets Your Cash Withdrawals

Now the part most explainers skip: pull enough cash in a year and TDS applies — to *withdrawals*, not income. Section 194N of the Income-tax Act:

- **Standard case:** the bank deducts **2% TDS on aggregate cash withdrawals exceeding ₹1 crore** in a financial year, across all your accounts with that bank. Only the amount above the threshold is hit.
- **If you haven't filed income-tax returns** for the relevant preceding years, the screws tighten: **2% on withdrawals above ₹20 lakh**, and **5% above ₹1 crore**.

Three practical notes. The threshold is *per bank*, not per account — three accounts at one bank pool together. The TDS isn't an extra tax; it's credited against your tax liability when you file (which is exactly why the non-filer rates exist — they create a reason to file). And every withdrawal channel counts toward the aggregate: self cheques, bearer cheques, ATM — the bank's systems tally them all.

For an SMB pulling weekly wage cash, that ₹20 lakh non-filer trigger is closer than it sounds: ₹40,000 a week crosses it inside a year. File returns, watch the aggregate, and where vendors accept it, pay by [account-payee cheque](/en/blog/crossed-cheque-vs-account-payee) or transfer instead — cash you never withdraw is TDS you never reconcile.

Separately, remember the *other* side of cash law: receiving ₹2 lakh or more in cash in a single transaction is prohibited for the receiver under Section 269ST (withdrawing from your own account isn't "receiving from a person" in that sense — but paying someone ₹2L+ in cash afterwards puts *them* in penalty territory). The pattern in 2026 is unmistakable: the system is built to make large cash inconvenient at every step.

### [H2] Self Cheque vs the Alternatives

Honest comparison, because the self cheque isn't always the right tool:

- **ATM:** wins below its daily cap. No queue, no teller. The self cheque exists for amounts the ATM won't give you.
- **Cardless/UPI ATM withdrawal:** small amounts, no card needed — but caps are tighter than the card's.
- **Writing a bearer cheque to the person you'd hand the cash to:** removes the cash-handling step entirely while keeping it cheque-based; their name on the instrument beats your "Self" plus trust.
- **Account-payee cheque or bank transfer:** the actual answer for most payments that *feel* like cash situations. The vendor who "deals only in notes" often deals perfectly well with an instant transfer when asked.

The self cheque's real niche in 2026: legitimate bulk cash needs — wage days in cash-dependent sectors, events, locations where digital rails wobble — by the account holder, in person, at the home branch.

### [H2] The Record-Keeping Angle (Because Cash Evaporates)

A withdrawn lakh leaves the banking system's memory and enters yours — which is usually a shoebox. Two habits keep self cheques audit-proof:

- **Record every self cheque like any other issued cheque:** leaf number, date, amount, purpose. On the counterfoil and in your register. A self cheque that's just *missing* from your book is indistinguishable from a stolen leaf ([why the lifecycle audit trail matters](/en/blog/cheque-lifecycle-management-explained)).
- **Note the purpose at withdrawal time,** not at reconciliation time three months later. "Cash — March wages" written today beats archaeology later, and if 194N TDS ever appears in your Form 26AS, your register explains every rupee of the aggregate.

The boring summary: write "Self," don't cross it, sign it at the counter, never in advance — and know your two numbers, the non-home branch cap and the 194N threshold that applies to you. That's the entire skill, plus a register that remembers what you did.

---

> **A self cheque is the one cheque you write to yourself — track it like the ones you write to everyone else.** Cheqify's register logs every leaf — self, bearer, account-payee — with date, amount, and purpose, so cash withdrawals stay explainable and missing leaves get noticed the day they go missing. Printing on 300+ Indian bank layouts included. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** How do I write a self cheque?
   **A:** Write the word "Self" on the "Pay" line, fill the amount in figures and words (matching exactly), date it with the current date, and sign matching your bank's specimen signature. Do not cross it — two parallel lines mean account-credit-only, which makes cash payment impossible. Carry ID and present it at your own bank's counter, ideally the home branch.

2. **Q:** What is the withdrawal limit for a self cheque?
   **A:** At your home branch, any amount your balance covers — though branches may ask for a day's advance notice for very large cash withdrawals so the cash is available. At a non-home branch of the same bank, per-day caps apply (commonly in the tens-of-thousands-to-a-lakh range, varying by bank and account type), often with the account holder required in person. Self cheques cannot be encashed at a different bank at all.

3. **Q:** Can someone else encash my self cheque?
   **A:** Technically a self cheque is a bearer instrument, so a bank may pay the presenter — but in practice banks apply heavy friction to third-party encashment: ID, signatures on the reverse, lower caps, sometimes refusal or a verification call to you. If someone must collect cash for you, a bearer cheque in their own name (with an authority letter for larger sums) or a direct transfer is the cleaner route.

4. **Q:** What is Section 194N TDS on cash withdrawals?
   **A:** Banks deduct 2% TDS on aggregate cash withdrawals exceeding ₹1 crore per financial year per bank (across all your accounts with that bank). If you haven't filed income-tax returns for the relevant preceding years, the thresholds tighten to 2% above ₹20 lakh and 5% above ₹1 crore. The TDS is credited against your tax liability when you file — it's a filing incentive, not an extra tax.

5. **Q:** Can a self cheque be crossed?
   **A:** Not if you want cash. Crossing a cheque restricts it to account credit only, which defeats the entire purpose of a self cheque presented for cash. If you've crossed it by habit, the bank will refuse counter payment — you'd have to deposit it into your own account instead, which a transfer would have done without burning a leaf.

6. **Q:** Is it safe to keep a signed self cheque ready?
   **A:** No — this is the single most dangerous cheque habit. A signed self/bearer cheque is functionally cash: anyone who finds it can fill an amount and present it. Sign self cheques at the branch, never in advance, never leave signed leaves in drawers or vehicles or with staff "for emergencies." The floating signed bearer leaf is the raw material of classic cheque fraud.

7. **Q:** How long is a self cheque valid?
   **A:** Three months from its date, like any cheque. Practically, banks prefer self cheques fresh — a weeks-old self cheque presented for a large cash amount invites extra scrutiny. Write it the day you intend to use it; there's no advantage to writing one early, and a pre-written signed one is a standing risk.

---

## HowTo Steps (Sanity `howToSteps` field — required for HowTo schema)

| # | Name | Text |
|---|---|---|
| 1 | Write "Self" on the payee line | Use the current date, write the word "Self" cleanly on the Pay line, and fill the amount in figures and words so they match exactly. No corrections or overwriting — counter scrutiny on cash payouts is strict. |
| 2 | Leave it uncrossed | Do not draw the two parallel crossing lines — a crossed cheque can only be credited to an account and will be refused for cash at the counter. |
| 3 | Sign at the branch, not in advance | Sign matching your specimen signature, ideally at the counter itself. A pre-signed self cheque is functionally cash and a standing fraud risk if lost. |
| 4 | Present at the right branch with ID | Use your home branch for full access (with a day's notice for very large amounts); non-home branches of your bank apply per-day caps and may require you in person. Carry photo ID. |
| 5 | Record the withdrawal | Log the leaf number, date, amount, and purpose in your cheque register and counterfoil immediately — this keeps cash explainable, supports 194N TDS reconciliation, and ensures a missing leaf gets noticed. |

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

ATM आपको दिन के चालीस हज़ार देता है, grudgingly, instalments में. पर कुछ दिन business को cash में दो lakh चाहिए — wages, एक market purchase, एक vendor जो सिर्फ़ notes में deal करता है. वही दिन है जब आप banking का oldest self-service tool rediscover करते हैं: *खुद के* नाम बना एक cheque.

Payee line पर "Self" लिखें, sign करें, counter तक चलें, cash के साथ बाहर निकलें. Simple — और किसी भी दूसरे cheque से ज़्यादा rules से घिरा हुआ, क्योंकि cash वो जगह है जहाँ banks, tax law, और fraudsters सब closest attention देते हैं.

यहाँ है complete picture.

### [H2] Self Cheque क्या है (और वो One Word जो इसे बनाता है)

Self cheque आपका अपना cheque है, आपके अपने account पर drawn, "Pay" line पर name की जगह **"Self"** शब्द लिखा हुआ. ये आपके bank को instruct करता है: इस instrument के bearer को — मुझे — counter पर cash में pay करो.

Mechanically ये एक [bearer cheque](/hi/blog/cheque-types-india) है जिसका payee account holder खुद है. वो bearer nature पूरी story है, इसकी convenience भी और danger भी, और हम इस पर वापस आएँगे.

एक correctly लिखने में दस seconds लगते हैं, और [usual fill rules](/hi/blog/how-to-fill-cheque-correctly) extra strictness से apply होते हैं क्योंकि एक counter clerk इसे scrutinise करेगा जब आप वहाँ खड़े हैं:

- **Date:** आज की (हर cheque की तरह 3 months valid, पर banks self cheques fresh prefer करते हैं)
- **Pay:** "Self" शब्द — कोई overwriting नहीं
- **Amount:** words और figures, exactly agree करते हुए
- **Signature:** आपके specimen से matching — cash payouts पर ये कहीं और से harder check होता है
- **इसे cross मत करें.** ये लोगों को constantly trip करता है: दो parallel lines का मतलब "account credit only," जो cash payment को impossible बना देता है ([crossing, explained](/hi/blog/crossed-cheque-vs-account-payee)). एक crossed self cheque एक contradiction है जिसे bank आपको cash refuse करके resolve करता है.

ID carry करें. खासकर larger amounts के लिए, teller इसे signature match के alongside चाहेगा.

### [H2] कहाँ Encash कर सकते हैं — Home Branch vs बाकी सब जगह

**आपकी home branch पर:** self cheque किसी भी amount के लिए good है जो आपका balance cover करता है. Genuinely large withdrawals के लिए, एक दिन पहले branch को call करें — branches limited cash रखती हैं, और कई banks internal thresholds के ऊपर advance notice मांगते हैं ताकि आपके पहुँचने पर cash actually वहाँ हो.

**Same bank की non-home branch पर:** possible, पर capped. Banks non-home cash encashment के लिए per-day limits set करते हैं — commonly tens of thousands से एक lakh की range में कहीं, bank और account type पर depend करते हुए — और insist कर सकते हैं कि account holder खुद ID के साथ आए. ये caps इसलिए exist करते हैं क्योंकि non-home branch आपकी signature digitally verify कर सकती है पर आपके बारे में और कुछ नहीं जानती.

**पूरी तरह दूसरे bank पर:** नहीं. Self cheque सिर्फ़ drawee bank पर encashable है — वो bank जिसका name leaf पर printed है. Deposit-to-account वो तरीका है जिससे cheques banks के बीच travel करते हैं; counter cash नहीं.

Exact non-home limits move करती हैं और bank से differ करती हैं — एक बड़े number के साथ trip बनाने से पहले अपने bank के current service page या एक quick phone call को source of truth treat करें.

### [H2] क्या कोई और आपका Self Cheque Encash कर सकता है?

यहाँ bearer nature अपने दाँत दिखाता है. Self cheque technically *bearer* को payable है — मतलब bank जो भी present करे उसे pay कर सकता है, अगर बाकी सब in order है. Practice में, banks self cheques की third-party presentation को suspicion और friction से treat करते हैं: ID requirements expect करें, पीछे signature verification (bearer reverse पर sign करता है, कभी-कभी दो बार — एक बार cash receipt पर), third-party cash के लिए tighter amount caps, और कुछ banks पर, small amounts के ऊपर outright refusal या pay करने से पहले आपको एक phone call.

अगर आपको genuinely किसी को अपनी cash collect करने भेजना है, cleaner route है cheque *उनके name* में bearer cheque के तौर पर लिखना, larger sums के लिए एक authority letter के साथ — या cash को entirely skip करके उन्हें transfer करना. Self cheque एक use case के लिए built है: **आप, counter पर, खुद.**

और ये हमें उस rule पर लाता है जो ऊपर की हर limit से ज़्यादा matter करता है:

> **एक signed self/bearer cheque extra steps वाली cash है. एक blank signed खो दें और आपने एक cheque नहीं खोया — आपने वो amount खोया है जो finder उस पर लिखने की हिम्मत करे.**

Self cheques कभी "time बचाने के लिए" pre-sign मत करें. एक signed कभी drawer में, glovebox में, या किसी employee के पास "for emergencies" मत छोड़ें. Exactly यही habit — floating signed bearer leaf — classic cheque fraud का raw material है ([full prevention playbook](/hi/blog/how-to-avoid-cheque-fraud-in-india)). Branch पर sign करें, पहले नहीं.

### [H2] Section 194N — जब Taxman आपके Cash Withdrawals से मिलता है

अब वो part जो ज़्यादातर explainers skip करते हैं: साल में काफ़ी cash निकालें और TDS apply होता है — *withdrawals* पर, income पर नहीं. Income-tax Act का Section 194N:

- **Standard case:** bank एक financial year में, उस bank के साथ आपके सभी accounts के across, **₹1 crore से ज़्यादा के aggregate cash withdrawals पर 2% TDS** deduct करता है. सिर्फ़ threshold के ऊपर का amount hit होता है.
- **अगर आपने relevant preceding years के income-tax returns file नहीं किए,** screws tight होते हैं: **₹20 lakh के ऊपर withdrawals पर 2%**, और **₹1 crore के ऊपर 5%.**

तीन practical notes. Threshold *per bank* है, per account नहीं — एक bank पर तीन accounts pool होते हैं. TDS कोई extra tax नहीं है; file करने पर ये आपकी tax liability के against credit होता है (exactly इसीलिए non-filer rates exist करते हैं — वो file करने की एक reason create करते हैं). और हर withdrawal channel aggregate की तरफ़ count होता है: self cheques, bearer cheques, ATM — bank के systems सब tally करते हैं.

Weekly wage cash निकालने वाले एक SMB के लिए, वो ₹20 lakh non-filer trigger जितना लगता है उससे closer है: ₹40,000 per week साल के अंदर इसे cross कर जाता है. Returns file करें, aggregate देखें, और जहाँ vendors accept करें, cash की जगह [account-payee cheque](/hi/blog/crossed-cheque-vs-account-payee) या transfer से pay करें — जो cash आप कभी निकालते ही नहीं वो TDS है जो आप कभी reconcile नहीं करते.

Separately, cash law की *दूसरी* side याद रखें: एक single transaction में ₹2 lakh या ज़्यादा cash receive करना receiver के लिए Section 269ST के under prohibited है (अपने ही account से withdraw करना उस sense में "किसी person से receive करना" नहीं है — पर बाद में किसी को ₹2L+ cash में pay करना *उन्हें* penalty territory में डालता है). 2026 में pattern unmistakable है: system हर step पर large cash को inconvenient बनाने के लिए built है.

### [H2] Self Cheque vs Alternatives

Honest comparison, क्योंकि self cheque हमेशा सही tool नहीं है:

- **ATM:** अपनी daily cap के नीचे जीतता है. कोई queue नहीं, कोई teller नहीं. Self cheque उन amounts के लिए exist करता है जो ATM आपको नहीं देगा.
- **Cardless/UPI ATM withdrawal:** small amounts, कोई card नहीं चाहिए — पर caps card से tighter हैं.
- **जिसे cash देनी है उसके name पर bearer cheque लिखना:** cash-handling step को entirely remove करता है cheque-based रखते हुए; instrument पर उनका name आपके "Self" plus trust को हराता है.
- **Account-payee cheque या bank transfer:** ज़्यादातर payments का actual answer जो cash situations *feel* होती हैं. वो vendor जो "सिर्फ़ notes में deal करता है" पूछने पर अक्सर instant transfer से perfectly deal कर लेता है.

2026 में self cheque का real niche: legitimate bulk cash needs — cash-dependent sectors में wage days, events, locations जहाँ digital rails wobble करती हैं — account holder द्वारा, in person, home branch पर.

### [H2] Record-Keeping Angle (क्योंकि Cash Evaporate होती है)

एक निकाला हुआ lakh banking system की memory छोड़कर आपकी memory में enter करता है — जो usually एक shoebox है. दो habits self cheques को audit-proof रखती हैं:

- **हर self cheque को किसी भी दूसरे issued cheque की तरह record करें:** leaf number, date, amount, purpose. Counterfoil पर और आपके register में. एक self cheque जो आपकी book से बस *missing* है वो एक stolen leaf से indistinguishable है ([lifecycle audit trail क्यों matter करता है](/hi/blog/cheque-lifecycle-management-explained)).
- **Purpose withdrawal time पर note करें,** तीन months बाद reconciliation time पर नहीं. आज लिखा "Cash — March wages" बाद की archaeology को हराता है, और अगर 194N TDS कभी आपके Form 26AS में appear हो, आपका register aggregate के हर rupee को explain करता है.

Boring summary: "Self" लिखें, cross मत करें, counter पर sign करें, कभी advance में नहीं — और अपने दो numbers जानें, non-home branch cap और वो 194N threshold जो आप पर apply होता है. यही पूरी skill है, plus एक register जो याद रखता है कि आपने क्या किया.

---

> **Self cheque वो एक cheque है जो आप खुद को लिखते हैं — इसे उन सबकी तरह track करें जो आप बाकियों को लिखते हैं.** Cheqify का register हर leaf log करता है — self, bearer, account-payee — date, amount, और purpose के साथ, ताकि cash withdrawals explainable रहें और missing leaves उसी दिन notice हों जिस दिन missing होती हैं. 300+ Indian bank layouts पर printing included. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

ATM તમને દિવસના ચાલીસ હજાર આપે છે, grudgingly, instalments માં. પણ કેટલાક દિવસે business ને cash માં બે lakh જોઈએ — wages, એક market purchase, એક vendor જે ફક્ત notes માં deal કરે છે. એ જ દિવસ છે જ્યારે તમે banking નું oldest self-service tool rediscover કરો છો: *ખુદના* નામે બનેલો એક cheque.

Payee line પર "Self" લખો, sign કરો, counter સુધી ચાલો, cash સાથે બહાર નીકળો. Simple — અને કોઈ પણ બીજા cheque કરતા વધારે rules થી ઘેરાયેલો, કારણ કે cash એ જગ્યા છે જ્યાં banks, tax law, અને fraudsters બધા closest attention આપે છે.

અહીં છે complete picture.

### [H2] Self Cheque શું છે (અને એ One Word જે એને બનાવે છે)

Self cheque તમારો પોતાનો cheque છે, તમારા પોતાના account પર drawn, "Pay" line પર name ની જગ્યાએ **"Self"** શબ્દ લખેલો. આ તમારા bank ને instruct કરે છે: આ instrument ના bearer ને — મને — counter પર cash માં pay કરો.

Mechanically આ એક [bearer cheque](/gu/blog/cheque-types-india) છે જેનો payee account holder ખુદ છે. એ bearer nature આખી story છે, એની convenience પણ અને danger પણ, અને અમે આના પર પાછા આવીશું.

એક correctly લખવામાં દસ seconds લાગે છે, અને [usual fill rules](/gu/blog/how-to-fill-cheque-correctly) extra strictness થી apply થાય છે કારણ કે એક counter clerk એને scrutinise કરશે જ્યારે તમે ત્યાં ઊભા છો:

- **Date:** આજની (દરેક cheque ની જેમ 3 months valid, પણ banks self cheques fresh prefer કરે છે)
- **Pay:** "Self" શબ્દ — કોઈ overwriting નહીં
- **Amount:** words અને figures, exactly agree કરતા
- **Signature:** તમારા specimen સાથે matching — cash payouts પર આ બીજે ક્યાંય કરતા harder check થાય છે
- **એને cross ન કરો.** આ લોકોને constantly trip કરે છે: બે parallel lines નો મતલબ "account credit only," જે cash payment ને impossible બનાવી દે છે ([crossing, explained](/gu/blog/crossed-cheque-vs-account-payee)). એક crossed self cheque એક contradiction છે જેને bank તમને cash refuse કરીને resolve કરે છે.

ID carry કરો. ખાસ કરીને larger amounts માટે, teller એને signature match ની alongside માંગશે.

### [H2] ક્યાં Encash કરી શકો છો — Home Branch vs બાકી બધી જગ્યા

**તમારી home branch પર:** self cheque કોઈ પણ amount માટે good છે જે તમારું balance cover કરે છે. Genuinely large withdrawals માટે, એક દિવસ પહેલા branch ને call કરો — branches limited cash રાખે છે, અને ઘણા banks internal thresholds ની ઉપર advance notice માંગે છે જેથી તમારા પહોંચવા પર cash actually ત્યાં હોય.

**Same bank ની non-home branch પર:** possible, પણ capped. Banks non-home cash encashment માટે per-day limits set કરે છે — commonly tens of thousands થી એક lakh ની range માં ક્યાંક, bank અને account type પર depend કરતા — અને insist કરી શકે છે કે account holder ખુદ ID સાથે આવે. આ caps એટલે exist કરે છે કારણ કે non-home branch તમારી signature digitally verify કરી શકે છે પણ તમારા વિશે બીજું કંઈ નથી જાણતી.

**આખા બીજા bank પર:** ના. Self cheque ફક્ત drawee bank પર encashable છે — એ bank જેનું name leaf પર printed છે. Deposit-to-account એ તરીકો છે જેનાથી cheques banks વચ્ચે travel કરે છે; counter cash નહીં.

Exact non-home limits move કરે છે અને bank થી differ કરે છે — એક મોટા number સાથે trip બનાવતા પહેલા તમારા bank ના current service page કે એક quick phone call ને source of truth treat કરો.

### [H2] શું કોઈ બીજું તમારો Self Cheque Encash કરી શકે છે?

અહીં bearer nature પોતાના દાંત બતાવે છે. Self cheque technically *bearer* ને payable છે — મતલબ bank જે પણ present કરે એને pay કરી શકે છે, જો બાકી બધું in order છે. Practice માં, banks self cheques ની third-party presentation ને suspicion અને friction થી treat કરે છે: ID requirements expect કરો, પાછળ signature verification (bearer reverse પર sign કરે છે, ક્યારેક બે વાર — એક વાર cash receipt પર), third-party cash માટે tighter amount caps, અને કેટલાક banks પર, small amounts ની ઉપર outright refusal કે pay કરતા પહેલા તમને એક phone call.

જો તમારે genuinely કોઈને તમારી cash collect કરવા મોકલવું છે, cleaner route છે cheque *એમના name* માં bearer cheque તરીકે લખવો, larger sums માટે એક authority letter સાથે — કે cash ને entirely skip કરીને એમને transfer કરવું. Self cheque એક use case માટે built છે: **તમે, counter પર, ખુદ.**

અને આ અમને એ rule પર લાવે છે જે ઉપરની દરેક limit કરતા વધારે matter કરે છે:

> **એક signed self/bearer cheque extra steps વાળી cash છે. એક blank signed ખોઈ દો અને તમે એક cheque નથી ખોયો — તમે એ amount ખોયો છે જે finder એના પર લખવાની હિંમત કરે.**

Self cheques ક્યારેય "time બચાવવા" pre-sign ન કરો. એક signed ક્યારેય drawer માં, glovebox માં, કે કોઈ employee પાસે "for emergencies" ન છોડો. Exactly આ જ habit — floating signed bearer leaf — classic cheque fraud નું raw material છે ([full prevention playbook](/gu/blog/how-to-avoid-cheque-fraud-in-india)). Branch પર sign કરો, પહેલા નહીં.

### [H2] Section 194N — જ્યારે Taxman તમારા Cash Withdrawals ને મળે છે

હવે એ part જે મોટાભાગના explainers skip કરે છે: વર્ષમાં પૂરતી cash કાઢો અને TDS apply થાય છે — *withdrawals* પર, income પર નહીં. Income-tax Act નું Section 194N:

- **Standard case:** bank એક financial year માં, એ bank સાથેના તમારા બધા accounts ની across, **₹1 crore થી વધારેના aggregate cash withdrawals પર 2% TDS** deduct કરે છે. ફક્ત threshold ની ઉપરનો amount hit થાય છે.
- **જો તમે relevant preceding years ના income-tax returns file નથી કર્યા,** screws tight થાય છે: **₹20 lakh ની ઉપર withdrawals પર 2%**, અને **₹1 crore ની ઉપર 5%.**

ત્રણ practical notes. Threshold *per bank* છે, per account નહીં — એક bank પર ત્રણ accounts pool થાય છે. TDS કોઈ extra tax નથી; file કરવા પર આ તમારી tax liability ની against credit થાય છે (exactly એટલે જ non-filer rates exist કરે છે — એ file કરવાની એક reason create કરે છે). અને દરેક withdrawal channel aggregate તરફ count થાય છે: self cheques, bearer cheques, ATM — bank ની systems બધું tally કરે છે.

Weekly wage cash કાઢતા એક SMB માટે, એ ₹20 lakh non-filer trigger જેટલું લાગે છે એનાથી closer છે: ₹40,000 per week વર્ષની અંદર એને cross કરી જાય છે. Returns file કરો, aggregate જુઓ, અને જ્યાં vendors accept કરે, cash ની જગ્યાએ [account-payee cheque](/gu/blog/crossed-cheque-vs-account-payee) કે transfer થી pay કરો — જે cash તમે ક્યારેય કાઢતા જ નથી એ TDS છે જે તમે ક્યારેય reconcile નથી કરતા.

Separately, cash law ની *બીજી* side યાદ રાખો: એક single transaction માં ₹2 lakh કે વધારે cash receive કરવું receiver માટે Section 269ST ની under prohibited છે (પોતાના જ account માંથી withdraw કરવું એ sense માં "કોઈ person થી receive કરવું" નથી — પણ પછી કોઈને ₹2L+ cash માં pay કરવું *એમને* penalty territory માં મૂકે છે). 2026 માં pattern unmistakable છે: system દરેક step પર large cash ને inconvenient બનાવવા built છે.

### [H2] Self Cheque vs Alternatives

Honest comparison, કારણ કે self cheque હંમેશા સાચું tool નથી:

- **ATM:** પોતાની daily cap ની નીચે જીતે છે. કોઈ queue નહીં, કોઈ teller નહીં. Self cheque એ amounts માટે exist કરે છે જે ATM તમને નહીં આપે.
- **Cardless/UPI ATM withdrawal:** small amounts, કોઈ card નથી જોઈતું — પણ caps card થી tighter છે.
- **જેને cash આપવાની છે એના name પર bearer cheque લખવો:** cash-handling step ને entirely remove કરે છે cheque-based રાખતા; instrument પર એમનું name તમારા "Self" plus trust ને હરાવે છે.
- **Account-payee cheque કે bank transfer:** મોટાભાગની payments નો actual answer જે cash situations *feel* થાય છે. એ vendor જે "ફક્ત notes માં deal કરે છે" પૂછવા પર ઘણીવાર instant transfer થી perfectly deal કરી લે છે.

2026 માં self cheque નું real niche: legitimate bulk cash needs — cash-dependent sectors માં wage days, events, locations જ્યાં digital rails wobble કરે છે — account holder દ્વારા, in person, home branch પર.

### [H2] Record-Keeping Angle (કારણ કે Cash Evaporate થાય છે)

એક કાઢેલો lakh banking system ની memory છોડીને તમારી memory માં enter કરે છે — જે usually એક shoebox છે. બે habits self cheques ને audit-proof રાખે છે:

- **દરેક self cheque ને કોઈ પણ બીજા issued cheque ની જેમ record કરો:** leaf number, date, amount, purpose. Counterfoil પર અને તમારા register માં. એક self cheque જે તમારી book માંથી બસ *missing* છે એ એક stolen leaf થી indistinguishable છે ([lifecycle audit trail કેમ matter કરે છે](/gu/blog/cheque-lifecycle-management-explained)).
- **Purpose withdrawal time પર note કરો,** ત્રણ months પછી reconciliation time પર નહીં. આજે લખેલું "Cash — March wages" પછીની archaeology ને હરાવે છે, અને જો 194N TDS ક્યારેય તમારા Form 26AS માં appear થાય, તમારું register aggregate ના દરેક rupee ને explain કરે છે.

Boring summary: "Self" લખો, cross ન કરો, counter પર sign કરો, ક્યારેય advance માં નહીં — અને તમારા બે numbers જાણો, non-home branch cap અને એ 194N threshold જે તમારા પર apply થાય છે. આ જ આખી skill છે, plus એક register જે યાદ રાખે છે કે તમે શું કર્યું.

---

> **Self cheque એ એક cheque છે જે તમે ખુદને લખો છો — એને એ બધાની જેમ track કરો જે તમે બાકીઓને લખો છો.** Cheqify નું register દરેક leaf log કરે છે — self, bearer, account-payee — date, amount, અને purpose સાથે, જેથી cash withdrawals explainable રહે અને missing leaves એ જ દિવસે notice થાય જે દિવસે missing થાય છે. 300+ Indian bank layouts પર printing included. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## ⚠️ Pre-publish fact-check required

1. **Section 194N rates and thresholds** (2% above ₹1 crore; for non-filers 2% above ₹20 lakh and 5% above ₹1 crore; per-bank aggregation) — verify against the current Income-tax Act text / CBDT guidance at publish time. Note the higher ₹3-crore threshold for co-operative societies exists; it's omitted from the body as out-of-audience — keep it omitted or add only if verified.
2. **Section 269ST (₹2 lakh cash receipt prohibition)** and the clarification that own-account withdrawals aren't covered — verify the CBDT clarification before publish; the body's framing is deliberately brief.
3. **Non-home branch cash limits** — deliberately directional ("tens of thousands to a lakh range"). Do NOT print bank-specific caps without checking current service pages.
4. **Advance-notice expectations for large cash withdrawals** — bank practice, hedged ("several banks ask"). Keep hedged.
5. **Third-party encashment friction** (reverse signatures, caps, refusals) — standard bank practice, framed as practice not regulation. Safe as framed.
6. **ATM ₹40,000/day figure in the opening** — typical but bank/card dependent; it's framed as colour, not a claim. Acceptable.

---

## Internal-Link Strategy

**Forward links from this post:**
- Post #18 (`cheque-types-india`) — the bearer-cheque family.
- Post #19 (`how-to-fill-cheque-correctly`) — fill rules under counter scrutiny.
- Post #23 (`crossed-cheque-vs-account-payee`) — why crossing kills cash (linked twice).
- Post #3 (`how-to-avoid-cheque-fraud-in-india`) — the blank signed leaf as fraud raw material.
- Post #13 (`cheque-lifecycle-management-explained`) — the missing-leaf audit trail.

**Bonus internal-link work (after publish):**
- Edit post #18 (`cheque-types-india`, all 3 locales) to link its self-cheque paragraph to this deep-dive.
- Edit post #3 (`how-to-avoid-cheque-fraud-in-india`, all 3 locales) to link the signed-blank-leaf warning here.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The 194N section is fact-dense (detector-sensitive) — the wage-day framing and "cash evaporates / shoebox" prose carry the voice; keep them.
- **Fact-check block (CRITICAL):** 194N rates/thresholds must be verified against current law at publish time — tax figures age.
- **Word count:** EN body must be >1200 words (target 1,700–2,200). Current draft: ~1,950 words.
- **Sanity toggles:** `isHowTo: ON` (5 steps), `hasFaq: ON` (7 items).

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — posts #18 and #3.
5. IndexNow auto-pings on publish.
