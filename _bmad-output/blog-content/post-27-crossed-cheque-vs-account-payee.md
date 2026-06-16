# Blog Post #27 — Crossed Cheque vs Account Payee — The Full Disambiguation (India 2026)

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

When pasting body paragraphs into Sanity Studio, the `> ...` markdown blocks below should be split into two Sanity block types:

**Apply as Callout block (grey rounded box):**
- `> **Print A/c Payee crossed cheques...** / **Cheqify के साथ...** / **Cheqify સાથે...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **Two parallel lines in the top-left corner...** / **Top-left corner में...** / **Top-left corner માં...**` (pull quote in each body) → **Quote**

To apply: paste as a normal paragraph → click the block style dropdown above the editor → choose **"Callout box"** or **"Quote"**.

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

"Crossed cheque" and "account payee cheque" are two of the most confused terms in Indian cheque usage. People assume they're the same thing; legally, they're not. Account payee is one *kind* of crossing, alongside general crossing, special crossing, and the "not negotiable" overlay. The distinction matters because each variation changes what the bank is legally allowed to do with the cheque. Post #18 (cheque types) covers all the crossings at overview level. This post goes deeper — every crossing variant, the NI Act provisions behind each, the practical "when to use which" answers, and the case-law-flavoured implications of getting it wrong. Strong informational search intent, perfect cluster closer.

---

## Sanity Fields

- **Slug:** `crossed-cheque-vs-account-payee`
- **Tags:** `Cheque Guide`, `Banking & RBI`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** NO (definitional / comparative)
- **Has FAQ:** YES

---

## Publishing Metadata

- **Status:** ✅ PUBLISHED to Sanity 2026-06-16 via API (order 27, newest). Draft kept as reference. Pending: Netlify rebuild to go live on site + GSC submission.
- **Scheduled publish date:** Monday 2026-06-08, 10:00 IST (missed — published 2026-06-16 instead)
- **Primary keyword:** `crossed cheque vs account payee`
- **Secondary keywords:** account payee cheque, crossed cheque meaning, types of cheque crossing, general crossing vs special crossing, not negotiable cheque, what is a c/c cheque
- **Reading time:** ~7 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/crossed-cheque-vs-account-payee`
  - HI: `https://cheqify.app/hi/blog/crossed-cheque-vs-account-payee`
  - GU: `https://cheqify.app/gu/blog/crossed-cheque-vs-account-payee`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `crossed-cheque-vs-account-payee-cover.webp`
- **Subject:** A grid of four cheques side-by-side, each top-left corner shown in close-up. (1) General crossing — just two diagonal lines. (2) Special crossing — "HDFC Bank" written between the lines. (3) Account payee — "A/c Payee Only" written between the lines. (4) Not negotiable — both "A/c Payee Only" and "Not Negotiable" written. A subtle "vs" badge between each pair. Cheqify wordmark bottom-right. Warm cream background.
- **Alt text:** Types of cheque crossing in India — general, special, account payee, and not negotiable compared visually.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Crossed Cheque vs Account Payee Cheque — Every Crossing Type Explained (India 2026)
- **HI:** Crossed Cheque vs Account Payee Cheque — हर Crossing Type Explained (India 2026)
- **GU:** Crossed Cheque vs Account Payee Cheque — દરેક Crossing Type Explained (India 2026)

---

## Descriptions

- **EN:** A crossed cheque and an account payee cheque are not the same thing — account payee is one type of crossing. The other types (general, special, not negotiable, restrictive) each change what the bank can legally do. Full disambiguation with NI Act references, when to use each, and what happens if you skip the crossing entirely.
- **HI:** Crossed cheque और account payee cheque same नहीं हैं — account payee crossing का एक type है. दूसरे types (general, special, not negotiable, restrictive) में हर एक bank के legal action को बदलता है. NI Act references के साथ full disambiguation, हर एक कब use करना है, और crossing skip करने पर क्या होता है.
- **GU:** Crossed cheque અને account payee cheque same નથી — account payee crossing નો એક type છે. બીજા types (general, special, not negotiable, restrictive) માં દરેક bank ની legal action ને બદલે છે. NI Act references સાથે full disambiguation, દરેક ક્યારે use કરવો, અને crossing skip કરવાથી શું થાય છે.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

People treat "crossed cheque" and "account payee cheque" as the same thing. They aren't. Account payee is a *kind* of crossing — one of four — and each kind changes what the bank is legally permitted to do.

This isn't a pedantic distinction. The crossing you put on a cheque determines whether it can be cashed at the counter, deposited into any account, deposited only into the named payee's account, or endorsed to a third party. Get it wrong and you can lose the money to fraud, lose a court case, or have your cheque returned for "improper crossing".

The Negotiable Instruments Act (Sections 123–131) lays all of this out cleanly. The market just calls it different things in different cities and ends up confusing itself.

Here's the full taxonomy, in plain language, with real-world usage.

### [H2] What "Crossing" Actually Is

A crossing is two parallel transverse lines drawn across the face of the cheque, usually in the top-left corner. That's the structural definition. The legal effect: a crossed cheque cannot be paid out as cash over the counter. The bank must credit it to a bank account.

That's the only universal rule. What kind of account, whose account, and whether the cheque can be endorsed — those depend on the type of crossing you used.

If you don't cross the cheque, it's a **bearer cheque**. Whoever physically holds it can walk into the drawee bank and ask for cash. Lost bearer cheque = lost money. Default to crossing every cheque you don't personally hand to the named payee at the bank counter.

### [H2] Type 1 — General Crossing

**What it looks like:** Two parallel diagonal lines in the top-left corner. Nothing written between them. Or with "& Co." between them — same legal effect.

**Legal effect (NI Act Section 123):** The cheque must be paid into a bank account. Any bank account. The payee can deposit it themselves, or endorse it ("Pay to Sharma Trading Co.") and someone else can deposit it on their behalf.

**When to use:** Almost never in 2026. General crossing was the standard before account payee crossing became routine in the 1990s. Today most Indian businesses default to account payee. General crossing still legally works, but it gives less protection.

**Practical risk:** If the cheque is lost or stolen mid-route, the finder can theoretically open an account under a similar name, endorse the cheque to themselves, and deposit it. Account payee crossing blocks this; general crossing doesn't.

### [H2] Type 2 — Special Crossing

**What it looks like:** Two parallel lines (or just the name across the face — lines are optional) with the **name of a specific bank** written between them. Example: "State Bank of India" or "HDFC Bank".

**Legal effect (NI Act Section 124):** The cheque can only be paid to the bank named in the crossing. If the cheque says "State Bank of India" in the crossing, only SBI can present and collect it. Any other bank will return it.

**When to use:** Rare in regular business. Special crossing was historically used when the drawer trusted a specific collecting bank — government departments sometimes still use it for inter-departmental transfers, and some legal-fee cheques are special-crossed to the lawyer's bank.

**Practical risk:** If the named bank is closed, merged, or the payee doesn't have an account there, the cheque becomes effectively unbankable until reissued. Most businesses skip this.

### [H2] Type 3 — Account Payee Crossing (The Common One)

**What it looks like:** Two parallel lines with **"A/c Payee Only"** or **"Account Payee"** written between them. Sometimes abbreviated "A/C Only".

**Legal effect (no specific NI Act section — based on banking custom + case law):** The cheque must be credited *only to the account of the named payee*. It cannot be endorsed to a third party. It cannot be deposited into anyone else's account. The collecting bank has a duty to verify that the cheque is being credited to the payee's own account; if it credits to someone else's account negligently, the bank is liable.

**When to use:** Default for every Indian business cheque in 2026. Rent, salary, vendor payments, refunds, court orders, government payments — all account payee. The "Only" word at the end of "A/c Payee Only" is conventional but the crossing is legally effective with or without it.

**Why this became the default:** Through the 1990s and 2000s, Indian courts repeatedly held collecting banks liable when account-payee cheques were credited to unauthorized accounts. This pushed banks to enforce account-payee crossings more strictly, which made the crossing genuinely safer in practice. The market response was: use it on everything.

### [H2] Type 4 — Not Negotiable Crossing

**What it looks like:** Two parallel lines with **"Not Negotiable"** written between them (sometimes combined with "A/c Payee Only").

**Legal effect (NI Act Section 130):** The transferee of a not-negotiable cheque cannot acquire a better title than the transferor had. In plain English: if the cheque was stolen and endorsed, the endorser had no title, so the recipient also has no title. The "holder in due course" protection that normally shields innocent recipients of cheques doesn't apply.

**When to use:** When you want to preserve the right to endorse the cheque to a third party but limit the legal protection it carries. Less common than account payee, but still occasionally seen for inter-business transfers where the payee may sub-pay someone.

**Practical effect:** Combined with "A/c Payee Only", you get maximum protection — non-transferable + the protection-against-stolen-endorsement rule of Section 130.

### [H2] Type 5 — Restrictive Crossing (Less Common)

**What it looks like:** Crossing with specific instructions like "Pay only to the named payee" or "Not to be encashed before [date]".

**Legal effect:** Treated as a special instruction the bank should follow. Enforceability varies. Restrictive crossings are not always legally binding the way general/special/account-payee crossings are; they're closer to a polite request the bank may honour at its discretion.

**When to use:** Rarely. Some corporate cheques carry "valid for 90 days only" or "presentable from 1st April" type restrictions. Generally a worse mechanism than just dating the cheque appropriately ([cheque validity rules](https://cheqify.app/en/blog/cheque-validity-period-stop-payment-india)).

### [H2] Side-by-Side at a Glance

| Crossing type | Visible mark | Legal effect | Practical use 2026 |
|---|---|---|---|
| **Bearer (no crossing)** | None | Cash over counter to anyone holding it | Walk-in self-cheques only |
| **General** | Two lines, blank or "& Co." | Pay through any bank account, endorsable | Rare; legacy |
| **Special** | Two lines + named bank | Pay only via the named bank | Govt / legal niche |
| **Account Payee** | Two lines + "A/c Payee Only" | Pay only into named payee's account; not endorsable | **Default for 2026 business** |
| **Not Negotiable** | Two lines + "Not Negotiable" | Endorsable but no holder-in-due-course protection | Inter-business transfers |
| **Restrictive** | Two lines + custom instruction | Bank-discretion enforcement | Rare |

### [H2] So What Should You Actually Do

The 2026 default for almost every business cheque written in India:

> **Two parallel lines in the top-left corner. "A/c Payee Only" written between them. End of decision.**

This combination gives you the strongest legally-recognised protection — the cheque can only be credited to the named payee's account, it cannot be endorsed to anyone else, and the collecting bank has a clear duty of care. If you're [filling out the cheque correctly](https://cheqify.app/en/blog/how-to-fill-cheque-correctly), the account-payee crossing is field #6 of the six required fields.

Add "Not Negotiable" only if you're sending the cheque through a courier or other multi-touch chain and want maximum stolen-cheque protection. For routine vendor payments handed directly to the payee, A/c Payee Only is enough.

### [H2] What Happens If You Skip the Crossing

A cheque with no crossing is a **bearer cheque**. Three implications:

- **Anyone holding it** can encash it over the counter. The bank verifies the signature against the specimen and pays.
- **Loss = lost money.** A lost bearer cheque is functionally cash. No way to claw it back.
- **Bigger fraud surface.** Section 138 cases involving bearer cheques are still actionable, but the evidentiary chain is messier than for an account-payee cheque deposited into a specific account.

Self-cheques you walk to your own bank counter — fine, bearer is intentional there. Everything else — cross it.

### [H2] Common Misconceptions

A few things people get wrong that cost real money:

**"Account payee means the named bank can clear it."** No. Account payee means the named *payee's account* can receive the credit. The bank doesn't matter (any authorized collecting bank works).

**"If I cross the cheque, I can't deposit it into my own ATM/cash deposit machine."** Not exactly. An A/c Payee Only cheque you wrote to yourself is still A/c Payee Only — only your account can receive it. ATM cheque-deposit machines verify the payee against the depositing account, so a self-written account-payee cheque dropped into your own ATM works fine.

**"I can erase the crossing if the payee wants cash."** No. Once a crossing is on the cheque, only the drawer can cancel it, and only by writing "Crossing Cancelled" with their full signature next to it. Banks treat altered crossings with suspicion and often return the cheque.

**"All printed cheques are automatically account payee."** Not automatic. Printed CTS-2010 cheque books in India usually leave the top-left corner blank — you cross it yourself when writing the cheque. Cheqify lets you print "A/c Payee Only" as part of the cheque face if you want it as a default ([more on printing](https://cheqify.app/en/blog/how-to-print-cheque-in-india)).

**"Special crossing protects me more."** No. Special crossing is *narrower* in who can clear it (only the named bank), but it doesn't carry the no-endorsement / payee-account-only protection of A/c Payee Only. Special crossing was historically about trust in a specific bank; A/c Payee Only is about protecting the payee.

### [H2] When Crossing Matters in a Dispute

If a cheque goes to court — say a Section 138 case ([NI Act explainer](https://cheqify.app/en/blog/section-138-ni-act-cheque-bounce-india)) or a fraud suit — the crossing on the cheque becomes evidence. A bearer cheque with no crossing is harder to tie to a specific payee's intent. An A/c Payee Only cheque deposited into the named payee's bank account creates a clean chain: drawer → payee account → ledger entry → deposit slip. Courts read this evidence chain in routine cases and rule accordingly.

This is one of the underrated reasons cheques retain legal weight in B2B India ([head-to-head against UPI/NEFT/RTGS](https://cheqify.app/en/blog/cheque-vs-digital-payment-india)). The crossing is part of the instrument's evidence story.

### [H2] A Final Practical Note

For 99% of Indian businesses writing 99% of their cheques: cross the top-left corner with two diagonal lines, write "A/c Payee Only" between them, and that's the end of the crossing decision.

The other crossings exist for specific edge cases — special crossing for legacy banking workflows, not-negotiable for high-paranoia routes, restrictive for niche corporate needs. They're worth knowing about so you recognise them on incoming cheques, but they shouldn't change your default.

The instrument you write should be safe, legible, predictable. CTS-2010 paper, six fields filled correctly, A/c Payee Only in the top-left. That's the whole game.

---

> **Print A/c Payee crossed cheques in 30 seconds with Cheqify.** Auto-MICR validation, 300+ Indian bank layouts, the account-payee crossing pre-printed if you want it. All free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** Is a crossed cheque the same as an account payee cheque?
   **A:** No. Account payee is one kind of crossing. There are four main types — general (just two lines), special (two lines + named bank), account payee (two lines + "A/c Payee Only"), and not negotiable (two lines + "Not Negotiable"). All four are crossings; only one is account payee.

2. **Q:** What's the legal source for account payee crossings?
   **A:** Unlike general crossing (NI Act Section 123) and special crossing (Section 124), account payee crossing is not defined by a specific section. It's based on banking custom and reinforced by Indian case law from the 1990s onward, where courts held collecting banks liable when account-payee cheques were credited to wrong accounts.

3. **Q:** Can I endorse an account payee cheque to someone else?
   **A:** No. The whole point of an account payee crossing is that the cheque can only be credited to the named payee's account. Endorsement to a third party is not permitted, and any collecting bank that credits a third party's account does so at its own risk.

4. **Q:** What if I forget to cross a cheque?
   **A:** Then it's a bearer cheque — anyone physically holding it can encash it over the counter at the drawee bank. If you hand it directly to the payee in person, the risk is small. If it goes through a courier or any third party, the risk is significant. When in doubt, cross with A/c Payee Only.

5. **Q:** Can the payee remove the crossing from the cheque?
   **A:** No. A crossing can only be cancelled by the drawer (the person who wrote the cheque) by signing alongside "Crossing Cancelled". The payee cannot remove a crossing the drawer put on. Any alteration of the crossing without drawer authentication will be treated as tampering and the cheque returned.

6. **Q:** Does "A/c Payee" need to be written exactly that way?
   **A:** No. "A/c Payee Only", "Account Payee", "A/C Payee", and "Account Payee Only" are all recognised. What matters is that the words make clear the cheque must go to the named payee's account. The "Only" suffix is conventional but legally redundant.

7. **Q:** Are printed cheque books already crossed?
   **A:** No, in India most CTS-2010 cheque books leave the top-left corner blank. You add the crossing yourself by drawing two diagonal lines and writing "A/c Payee Only" between them. Some businesses pre-print the crossing on every leaf when ordering a custom cheque book, but this is opt-in, not default.

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure.

---

लोग "crossed cheque" और "account payee cheque" को same चीज़ समझते हैं. ये नहीं हैं. Account payee crossing का एक *kind* है — चार में से एक — और हर kind change करता है कि bank legally क्या कर सकता है.

ये pedantic distinction नहीं है. आपने cheque पर जो crossing लगाई वो determine करती है कि cheque counter पर cash हो सकता है, किसी भी account में deposit, सिर्फ़ named payee के account में deposit, या third party को endorse. गलत हो तो आप money fraud में lose कर सकते हैं, court case हार सकते हैं, या cheque "improper crossing" पर return हो सकता है.

Negotiable Instruments Act (Sections 123–131) ये सब cleanly lay out करता है. Market बस different cities में different things बोलता है और खुद को confuse कर लेता है.

यहाँ है full taxonomy, plain language में, real-world usage के साथ.

### [H2] "Crossing" Actually क्या है

Crossing two parallel transverse lines हैं cheque के face पर, usually top-left corner में. ये structural definition है. Legal effect: crossed cheque counter पर cash के तौर पर pay नहीं हो सकता. Bank को इसे bank account में credit करना है.

ये only universal rule है. कौन सा account, किसका account, और cheque endorse हो सकता है या नहीं — ये depend करता है आपने कौन सा crossing type use किया.

अगर आप cheque cross नहीं करते, ये **bearer cheque** है. जो physically hold करता है वो drawee bank में जाकर cash मांग सकता है. Lost bearer cheque = lost money. हर cheque cross करें default में जो आप personally bank counter पर named payee को hand नहीं कर रहे.

### [H2] Type 1 — General Crossing

**कैसा दिखता है:** Top-left corner में दो parallel diagonal lines. बीच में कुछ नहीं लिखा. या "& Co." के साथ बीच में — same legal effect.

**Legal effect (NI Act Section 123):** Cheque bank account में pay होना चाहिए. कोई भी bank account. Payee खुद deposit कर सकता है, या endorse कर सकता है ("Pay to Sharma Trading Co.") और कोई और उनकी तरफ से deposit कर सकता है.

**कब use करें:** 2026 में लगभग कभी नहीं. General crossing 1990s में account payee crossing के routine होने से पहले standard था. आज ज़्यादातर Indian businesses account payee पर default करते हैं. General crossing अभी भी legally work करता है, पर कम protection देता है.

**Practical risk:** अगर cheque mid-route में lost या stolen हो जाए, finder theoretically similar name से account खोल सकता है, खुद को cheque endorse कर सकता है, और deposit कर सकता है. Account payee crossing ये block करती है; general crossing नहीं.

### [H2] Type 2 — Special Crossing

**कैसा दिखता है:** Two parallel lines (या face पर सिर्फ़ name across — lines optional) **specific bank के name** के साथ बीच में लिखा. Example: "State Bank of India" या "HDFC Bank".

**Legal effect (NI Act Section 124):** Cheque crossing में named bank को ही pay हो सकता है. अगर cheque crossing में "State Bank of India" है, सिर्फ़ SBI present और collect कर सकता है. कोई और bank return करेगा.

**कब use करें:** Regular business में rare. Special crossing historically use होता था जब drawer specific collecting bank पर trust करता था — government departments अभी भी कभी-कभी inter-departmental transfers के लिए use करते हैं, और कुछ legal-fee cheques lawyer के bank पर special-crossed होते हैं.

**Practical risk:** अगर named bank closed है, merged है, या payee का वहाँ account नहीं है, cheque effectively unbankable हो जाता है reissue होने तक. ज़्यादातर businesses ये skip करते हैं.

### [H2] Type 3 — Account Payee Crossing (Common वाला)

**कैसा दिखता है:** Two parallel lines **"A/c Payee Only"** या **"Account Payee"** के साथ बीच में लिखा. कभी-कभी "A/C Only" abbreviated.

**Legal effect (specific NI Act section नहीं — banking custom + case law based):** Cheque सिर्फ़ *named payee के account में* credit होना चाहिए. Third party को endorse नहीं हो सकता. किसी और के account में deposit नहीं हो सकता. Collecting bank की duty है verify करना कि cheque payee के अपने account में credit हो रहा है; अगर negligently किसी और के account में credit करता है, bank liable है.

**कब use करें:** 2026 में हर Indian business cheque के लिए default. Rent, salary, vendor payments, refunds, court orders, government payments — सब account payee. "A/c Payee Only" के end पर "Only" word conventional है पर crossing legally effective है इसके साथ या बिना.

**ये default कैसे बना:** 1990s और 2000s में, Indian courts ने repeatedly collecting banks को liable hold किया जब account-payee cheques unauthorized accounts में credit हुए. इसने banks को account-payee crossings strictly enforce करने पर push किया, जिसने crossing को practice में genuinely safer बनाया. Market response ये था: हर चीज़ पर use करो.

### [H2] Type 4 — Not Negotiable Crossing

**कैसा दिखता है:** Two parallel lines **"Not Negotiable"** के साथ बीच में लिखा (कभी-कभी "A/c Payee Only" के साथ combined).

**Legal effect (NI Act Section 130):** Not-negotiable cheque का transferee transferor से better title acquire नहीं कर सकता. Plain English में: अगर cheque चोरी हुआ और endorsed हुआ, endorser के पास title नहीं था, so recipient के पास भी title नहीं. Normal "holder in due course" protection जो innocent recipients को shield करती है, apply नहीं होती.

**कब use करें:** जब आप right preserve करना चाहते हैं cheque को third party endorse करने का पर legal protection limit करना चाहते हैं. Account payee से कम common, पर inter-business transfers में occasionally दिखता है जहाँ payee sub-pay किसी को कर सकता है.

**Practical effect:** "A/c Payee Only" के साथ combined, maximum protection मिलती है — non-transferable + Section 130 की protection-against-stolen-endorsement rule.

### [H2] Type 5 — Restrictive Crossing (Less Common)

**कैसा दिखता है:** Crossing specific instructions के साथ जैसे "Pay only to the named payee" या "Not to be encashed before [date]".

**Legal effect:** Special instruction के तौर पर treated जो bank को follow करनी चाहिए. Enforceability vary करती है. Restrictive crossings always legally binding नहीं होतीं general/special/account-payee crossings की तरह; ये closer हैं polite request जो bank discretion पर honour कर सकता है.

**कब use करें:** Rarely. कुछ corporate cheques "valid for 90 days only" या "presentable from 1st April" type restrictions carry करते हैं. Generally बस cheque को appropriately date करने से worse mechanism है ([cheque validity rules](https://cheqify.app/hi/blog/cheque-validity-period-stop-payment-india)).

### [H2] एक नज़र में Side-by-Side

| Crossing type | Visible mark | Legal effect | Practical use 2026 |
|---|---|---|---|
| **Bearer (no crossing)** | None | Anyone holding को counter पर cash | Walk-in self-cheques only |
| **General** | Two lines, blank या "& Co." | किसी भी bank account के through pay, endorsable | Rare; legacy |
| **Special** | Two lines + named bank | सिर्फ़ named bank के through pay | Govt / legal niche |
| **Account Payee** | Two lines + "A/c Payee Only" | सिर्फ़ named payee के account में pay; not endorsable | **2026 business के लिए Default** |
| **Not Negotiable** | Two lines + "Not Negotiable" | Endorsable पर no holder-in-due-course protection | Inter-business transfers |
| **Restrictive** | Two lines + custom instruction | Bank-discretion enforcement | Rare |

### [H2] So Actually आपको क्या करना चाहिए

2026 default लगभग हर business cheque के लिए जो India में लिखा जाता है:

> **Top-left corner में two parallel lines. बीच में "A/c Payee Only" लिखा. End of decision.**

ये combination सबसे strongest legally-recognised protection देता है — cheque सिर्फ़ named payee के account में credit हो सकता है, कोई और endorse नहीं कर सकता, और collecting bank की clear duty of care है. अगर आप [cheque correctly fill कर रहे हैं](https://cheqify.app/hi/blog/how-to-fill-cheque-correctly), account-payee crossing छह required fields का field #6 है.

"Not Negotiable" add करें सिर्फ़ अगर आप cheque को courier या multi-touch chain के through भेज रहे हैं और maximum stolen-cheque protection चाहिए. Routine vendor payments directly payee को hand करने के लिए, A/c Payee Only enough है.

### [H2] Crossing Skip करने पर क्या होता है

बिना crossing वाला cheque **bearer cheque** है. तीन implications:

- **Holder कोई भी** counter पर encash कर सकता है. Bank specimen से signature verify करता है और pay करता है.
- **Loss = lost money.** Lost bearer cheque functionally cash है. वापस claw back करने का कोई तरीका नहीं.
- **Bigger fraud surface.** Section 138 cases bearer cheques वाले अभी भी actionable हैं, पर evidentiary chain account-payee cheque specific account में deposited से messier है.

Self-cheques जो आप अपने bank counter तक walk करते हैं — fine, bearer intentional है वहाँ. बाकी सब — cross करें.

### [H2] Common Misconceptions

कुछ चीज़ें जो लोग गलत करते हैं और real money लगती है:

**"Account payee मतलब named bank clear कर सकता है."** नहीं. Account payee मतलब named *payee का account* credit receive कर सकता है. Bank matter नहीं करता (कोई भी authorized collecting bank work करता है).

**"अगर मैं cheque cross करता हूँ, मैं अपने ATM/cash deposit machine में deposit नहीं कर सकता."** Exactly नहीं. A/c Payee Only cheque जो आपने खुद को लिखा अभी भी A/c Payee Only है — सिर्फ़ आपका account credit receive कर सकता है. ATM cheque-deposit machines depositing account के against payee verify करते हैं, so self-written account-payee cheque अपने ATM में drop करने पर fine work करता है.

**"अगर payee को cash चाहिए तो मैं crossing erase कर सकता हूँ."** नहीं. Cheque पर crossing आ जाने के बाद, सिर्फ़ drawer cancel कर सकता है, और सिर्फ़ "Crossing Cancelled" अपनी full signature के साथ साथ लिखकर. Banks altered crossings को suspicion से treat करते हैं और अक्सर cheque return कर देते हैं.

**"सभी printed cheques automatically account payee हैं."** Automatic नहीं. India में printed CTS-2010 cheque books usually top-left corner blank छोड़ते हैं — आप खुद cross करते हैं cheque लिखते वक़्त. Cheqify "A/c Payee Only" cheque face के part के तौर पर print करने देता है अगर आप इसे default के तौर पर चाहते हैं ([printing पर ज़्यादा](https://cheqify.app/hi/blog/how-to-print-cheque-in-india)).

**"Special crossing मुझे ज़्यादा protect करती है."** नहीं. Special crossing *narrower* है कौन clear कर सकता है उसमें (सिर्फ़ named bank), पर ये A/c Payee Only की no-endorsement / payee-account-only protection carry नहीं करती. Special crossing historically specific bank पर trust के बारे में थी; A/c Payee Only payee को protect करने के बारे में है.

### [H2] Dispute में Crossing कब Matter करती है

अगर cheque court जाता है — मान लें Section 138 case ([NI Act explainer](https://cheqify.app/hi/blog/section-138-ni-act-cheque-bounce-india)) या fraud suit — cheque पर crossing evidence बन जाती है. बिना crossing वाला bearer cheque specific payee's intent से tie करना harder है. Named payee के bank account में deposited A/c Payee Only cheque clean chain create करता है: drawer → payee account → ledger entry → deposit slip. Courts ये evidence chain routine cases में read करते हैं और accordingly rule करते हैं.

यही एक underrated reason है कि cheques B2B India में legal weight retain करते हैं ([UPI/NEFT/RTGS के against head-to-head](https://cheqify.app/hi/blog/cheque-vs-digital-payment-india)). Crossing instrument की evidence story का part है.

### [H2] एक Final Practical Note

99% Indian businesses 99% cheques के लिए: top-left corner cross करें दो diagonal lines से, बीच में "A/c Payee Only" लिखें, और crossing decision का end.

बाकी crossings specific edge cases के लिए exist करती हैं — legacy banking workflows के लिए special crossing, high-paranoia routes के लिए not-negotiable, niche corporate needs के लिए restrictive. इन्हें जानना worth है ताकि incoming cheques पर recognise कर सकें, पर default change नहीं करना चाहिए.

आप जो instrument लिखें safe, legible, predictable हो. CTS-2010 paper, छह fields correctly filled, top-left में A/c Payee Only. वही whole game है.

---

> **Cheqify के साथ 30 seconds में A/c Payee crossed cheques print करें.** Auto-MICR validation, 300+ Indian bank layouts, account-payee crossing pre-printed अगर चाहिए. सब free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Gujlish blend, same structure.

---

લોકો "crossed cheque" અને "account payee cheque" ને same વસ્તુ સમજે છે. એ નથી. Account payee crossing નો એક *kind* છે — ચાર માંથી એક — અને દરેક kind change કરે છે કે bank legally શું કરી શકે છે.

આ pedantic distinction નથી. તમે cheque પર જે crossing લગાવી એ determine કરે છે કે cheque counter પર cash થઈ શકે છે, કોઈ પણ account માં deposit, ફક્ત named payee ના account માં deposit, કે third party ને endorse. ખોટું હોય તો તમે money fraud માં lose કરી શકો છો, court case હારી શકો છો, કે cheque "improper crossing" પર return થઈ શકે છે.

Negotiable Instruments Act (Sections 123–131) આ બધું cleanly lay out કરે છે. Market બસ different cities માં different things બોલે છે અને પોતાને confuse કરી લે છે.

અહીં છે full taxonomy, plain language માં, real-world usage સાથે.

### [H2] "Crossing" Actually શું છે

Crossing two parallel transverse lines છે cheque ના face પર, usually top-left corner માં. આ structural definition છે. Legal effect: crossed cheque counter પર cash તરીકે pay નથી થઈ શકતો. Bank ને એને bank account માં credit કરવો જ પડે છે.

આ only universal rule છે. કયું account, કોનું account, અને cheque endorse થઈ શકે છે કે નહીં — એ depend કરે છે તમે કયો crossing type use કર્યો.

જો તમે cheque cross નથી કરતા, એ **bearer cheque** છે. જે physically hold કરે છે એ drawee bank માં જઈને cash માંગી શકે છે. Lost bearer cheque = lost money. દરેક cheque cross કરો default માં જે તમે personally bank counter પર named payee ને hand નથી કરી રહ્યા.

### [H2] Type 1 — General Crossing

**કેવો દેખાય છે:** Top-left corner માં બે parallel diagonal lines. વચ્ચે કંઈ નહીં લખેલું. કે "& Co." સાથે વચ્ચે — same legal effect.

**Legal effect (NI Act Section 123):** Cheque bank account માં pay થવો જોઈએ. કોઈ પણ bank account. Payee પોતે deposit કરી શકે છે, કે endorse કરી શકે છે ("Pay to Sharma Trading Co.") અને કોઈ બીજો એમની તરફથી deposit કરી શકે છે.

**ક્યારે use કરો:** 2026 માં લગભગ ક્યારેય નહીં. General crossing 1990s માં account payee crossing routine થયા પહેલા standard હતું. આજે મોટાભાગના Indian businesses account payee પર default કરે છે. General crossing હજુ legally work કરે છે, પણ ઓછું protection આપે છે.

**Practical risk:** જો cheque mid-route માં lost કે stolen થઈ જાય, finder theoretically similar name થી account ખોલી શકે છે, પોતાને cheque endorse કરી શકે છે, અને deposit કરી શકે છે. Account payee crossing આ block કરે છે; general crossing નહીં.

### [H2] Type 2 — Special Crossing

**કેવો દેખાય છે:** Two parallel lines (કે face પર ફક્ત name across — lines optional) **specific bank ના name** સાથે વચ્ચે લખેલું. Example: "State Bank of India" કે "HDFC Bank".

**Legal effect (NI Act Section 124):** Cheque crossing માં named bank ને જ pay થઈ શકે છે. જો cheque crossing માં "State Bank of India" છે, ફક્ત SBI present અને collect કરી શકે છે. કોઈ બીજો bank return કરી દેશે.

**ક્યારે use કરો:** Regular business માં rare. Special crossing historically use થતું જ્યારે drawer specific collecting bank પર trust કરતો — government departments હજુ ક્યારેક inter-departmental transfers માટે use કરે છે, અને કેટલાક legal-fee cheques lawyer ના bank પર special-crossed હોય છે.

**Practical risk:** જો named bank closed છે, merged છે, કે payee નું ત્યાં account નથી, cheque effectively unbankable થઈ જાય છે reissue થાય ત્યાં સુધી. મોટાભાગના businesses આ skip કરે છે.

### [H2] Type 3 — Account Payee Crossing (Common વાળું)

**કેવો દેખાય છે:** Two parallel lines **"A/c Payee Only"** કે **"Account Payee"** સાથે વચ્ચે લખેલું. ક્યારેક "A/C Only" abbreviated.

**Legal effect (specific NI Act section નહીં — banking custom + case law based):** Cheque ફક્ત *named payee ના account માં* credit થવો જોઈએ. Third party ને endorse નથી થઈ શકતો. કોઈ બીજાના account માં deposit નથી થઈ શકતો. Collecting bank ની duty છે verify કરવાની કે cheque payee ના પોતાના account માં credit થઈ રહ્યો છે; જો negligently કોઈ બીજાના account માં credit કરે છે, bank liable છે.

**ક્યારે use કરો:** 2026 માં દરેક Indian business cheque માટે default. Rent, salary, vendor payments, refunds, court orders, government payments — બધા account payee. "A/c Payee Only" ના end પર "Only" word conventional છે પણ crossing legally effective છે એની સાથે કે વગર.

**આ default કેવી રીતે બન્યું:** 1990s અને 2000s માં, Indian courts એ repeatedly collecting banks ને liable hold કર્યા જ્યારે account-payee cheques unauthorized accounts માં credit થયા. એણે banks ને account-payee crossings strictly enforce કરવા push કર્યા, જેણે crossing ને practice માં genuinely safer બનાવ્યું. Market response આ હતો: દરેક વસ્તુ પર use કરો.

### [H2] Type 4 — Not Negotiable Crossing

**કેવો દેખાય છે:** Two parallel lines **"Not Negotiable"** સાથે વચ્ચે લખેલું (ક્યારેક "A/c Payee Only" સાથે combined).

**Legal effect (NI Act Section 130):** Not-negotiable cheque નો transferee transferor થી better title acquire નથી કરી શકતો. Plain English માં: જો cheque ચોરી થયો અને endorsed થયો, endorser પાસે title નહોતું, so recipient પાસે પણ title નથી. Normal "holder in due course" protection જે innocent recipients ને shield કરે છે, apply નથી થતી.

**ક્યારે use કરો:** જ્યારે તમે right preserve કરવા માંગો છો cheque ને third party endorse કરવાનો પણ legal protection limit કરવા માંગો છો. Account payee થી ઓછું common, પણ inter-business transfers માં occasionally દેખાય છે જ્યાં payee sub-pay કોઈને કરી શકે છે.

**Practical effect:** "A/c Payee Only" સાથે combined, maximum protection મળે છે — non-transferable + Section 130 ની protection-against-stolen-endorsement rule.

### [H2] Type 5 — Restrictive Crossing (Less Common)

**કેવો દેખાય છે:** Crossing specific instructions સાથે જેમ કે "Pay only to the named payee" કે "Not to be encashed before [date]".

**Legal effect:** Special instruction તરીકે treated જે bank ને follow કરવી જોઈએ. Enforceability vary કરે છે. Restrictive crossings always legally binding નથી હોતી general/special/account-payee crossings ની જેમ; એ closer છે polite request જે bank discretion પર honour કરી શકે છે.

**ક્યારે use કરો:** Rarely. કેટલીક corporate cheques "valid for 90 days only" કે "presentable from 1st April" type restrictions carry કરે છે. Generally બસ cheque ને appropriately date કરવાથી worse mechanism છે ([cheque validity rules](https://cheqify.app/gu/blog/cheque-validity-period-stop-payment-india)).

### [H2] એક નજરમાં Side-by-Side

| Crossing type | Visible mark | Legal effect | Practical use 2026 |
|---|---|---|---|
| **Bearer (no crossing)** | None | Holder ને counter પર cash | Walk-in self-cheques only |
| **General** | Two lines, blank કે "& Co." | કોઈ પણ bank account ના through pay, endorsable | Rare; legacy |
| **Special** | Two lines + named bank | ફક્ત named bank ના through pay | Govt / legal niche |
| **Account Payee** | Two lines + "A/c Payee Only" | ફક્ત named payee ના account માં pay; not endorsable | **2026 business માટે Default** |
| **Not Negotiable** | Two lines + "Not Negotiable" | Endorsable પણ no holder-in-due-course protection | Inter-business transfers |
| **Restrictive** | Two lines + custom instruction | Bank-discretion enforcement | Rare |

### [H2] So Actually તમારે શું કરવું જોઈએ

2026 default લગભગ દરેક business cheque માટે જે India માં લખાય છે:

> **Top-left corner માં two parallel lines. વચ્ચે "A/c Payee Only" લખેલું. End of decision.**

આ combination સૌથી strongest legally-recognised protection આપે છે — cheque ફક્ત named payee ના account માં credit થઈ શકે છે, કોઈ બીજો endorse નથી કરી શકતો, અને collecting bank ની clear duty of care છે. જો તમે [cheque correctly fill કરી રહ્યા છો](https://cheqify.app/gu/blog/how-to-fill-cheque-correctly), account-payee crossing છ required fields નો field #6 છે.

"Not Negotiable" add કરો ફક્ત જો તમે cheque ને courier કે multi-touch chain ના through મોકલી રહ્યા છો અને maximum stolen-cheque protection જોઈએ. Routine vendor payments directly payee ને hand કરવા માટે, A/c Payee Only enough છે.

### [H2] Crossing Skip કરવાથી શું થાય છે

Crossing વગરનો cheque **bearer cheque** છે. ત્રણ implications:

- **Holder કોઈ પણ** counter પર encash કરી શકે છે. Bank specimen થી signature verify કરે છે અને pay કરે છે.
- **Loss = lost money.** Lost bearer cheque functionally cash છે. પાછું claw back કરવાનો કોઈ રસ્તો નથી.
- **Bigger fraud surface.** Section 138 cases bearer cheques વાળા હજુ actionable છે, પણ evidentiary chain account-payee cheque specific account માં deposited થી messier છે.

Self-cheques જે તમે તમારી bank counter સુધી walk કરો છો — fine, bearer intentional છે ત્યાં. બાકી બધું — cross કરો.

### [H2] Common Misconceptions

કેટલીક વસ્તુઓ જે લોકો ખોટી કરે છે અને real money લાગે છે:

**"Account payee અર્થ named bank clear કરી શકે છે."** નહીં. Account payee અર્થ named *payee નું account* credit receive કરી શકે છે. Bank matter નથી કરતું (કોઈ પણ authorized collecting bank work કરે છે).

**"જો હું cheque cross કરું છું, હું મારા ATM/cash deposit machine માં deposit નથી કરી શકતો."** Exactly નહીં. A/c Payee Only cheque જે તમે પોતાને લખ્યો છે હજુ A/c Payee Only છે — ફક્ત તમારું account credit receive કરી શકે છે. ATM cheque-deposit machines depositing account ની against payee verify કરે છે, so self-written account-payee cheque પોતાના ATM માં drop કરવાથી fine work કરે છે.

**"જો payee ને cash જોઈએ તો હું crossing erase કરી શકું છું."** નહીં. Cheque પર crossing આવી ગયા પછી, ફક્ત drawer cancel કરી શકે છે, અને ફક્ત "Crossing Cancelled" પોતાની full signature સાથે બાજુમાં લખીને. Banks altered crossings ને suspicion થી treat કરે છે અને ઘણીવાર cheque return કરી દે છે.

**"બધા printed cheques automatically account payee છે."** Automatic નહીં. India માં printed CTS-2010 cheque books usually top-left corner blank છોડે છે — તમે પોતે cross કરો છો cheque લખતી વખતે. Cheqify "A/c Payee Only" cheque face ના part તરીકે print કરવા દે છે જો તમે એને default તરીકે જોઈએ ([printing પર વધારે](https://cheqify.app/gu/blog/how-to-print-cheque-in-india)).

**"Special crossing મને વધારે protect કરે છે."** નહીં. Special crossing *narrower* છે કોણ clear કરી શકે છે એમાં (ફક્ત named bank), પણ એ A/c Payee Only ની no-endorsement / payee-account-only protection carry નથી કરતી. Special crossing historically specific bank પર trust વિશે હતી; A/c Payee Only payee ને protect કરવા વિશે છે.

### [H2] Dispute માં Crossing ક્યારે Matter કરે છે

જો cheque court જાય છે — માની લો Section 138 case ([NI Act explainer](https://cheqify.app/gu/blog/section-138-ni-act-cheque-bounce-india)) કે fraud suit — cheque પર crossing evidence બની જાય છે. Crossing વગરનો bearer cheque specific payee ના intent થી tie કરવો harder છે. Named payee ના bank account માં deposited A/c Payee Only cheque clean chain create કરે છે: drawer → payee account → ledger entry → deposit slip. Courts આ evidence chain routine cases માં read કરે છે અને accordingly rule કરે છે.

એ જ એક underrated reason છે કે cheques B2B India માં legal weight retain કરે છે ([UPI/NEFT/RTGS ની against head-to-head](https://cheqify.app/gu/blog/cheque-vs-digital-payment-india)). Crossing instrument ની evidence story નો part છે.

### [H2] એક Final Practical Note

99% Indian businesses 99% cheques માટે: top-left corner cross કરો બે diagonal lines થી, વચ્ચે "A/c Payee Only" લખો, અને crossing decision નો end.

બાકી crossings specific edge cases માટે exist કરે છે — legacy banking workflows માટે special crossing, high-paranoia routes માટે not-negotiable, niche corporate needs માટે restrictive. એને જાણવાનું worth છે જેથી incoming cheques પર recognise કરી શકો, પણ default change ન કરવો જોઈએ.

તમે જે instrument લખો safe, legible, predictable હોય. CTS-2010 paper, છ fields correctly filled, top-left માં A/c Payee Only. એ જ whole game છે.

---

> **Cheqify સાથે 30 seconds માં A/c Payee crossed cheques print કરો.** Auto-MICR validation, 300+ Indian bank layouts, account-payee crossing pre-printed જો જોઈએ. બધું free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## Internal-Link Strategy

**Forward links from this post:**
- Post #11 (`section-138-ni-act-cheque-bounce-india`) — crossing as evidence in 138 cases.
- Post #12 (`cheque-validity-period-stop-payment-india`) — alternative to restrictive crossings.
- Post #18 (`cheque-types-india`) — overview that this post deepens.
- Post #19 (`how-to-fill-cheque-correctly`) — crossing is field #6.
- Post #20 (`cheque-vs-digital-payment-india`) — crossing protection vs digital reversibility.
- Post #7 (`how-to-print-cheque-in-india`) — pre-printed account-payee option.

**Bonus internal-link work (after publish):**
- Edit post #18 (all 3 locales) to add a contextual "Full crossing-types deep-dive" link to this post.
- Add this post's URL to the glossary entry for "Crossing" if it exists.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The numbered "Type 1–5" structure is detector-sensitive — keep the anecdote-style prose strong in between.
- **Word count:** EN body must be >1200 words. Current draft: ~1,700 words.
- **Sanity toggles:** `isHowTo: OFF`, `hasFaq: ON`.

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into a Day 17 (or next available) block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — especially post #18 which this post deepens.
5. IndexNow auto-pings.
