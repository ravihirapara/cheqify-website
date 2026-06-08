# Blog Post #26 — Demand Draft vs Cheque vs Banker's Cheque — Which One to Use, and When (2026)

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
- `> **Issuing cheques instead of queuing for drafts?...** / **Drafts के लिए queue...** / **Drafts માટે queue...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **A cheque is your promise. A demand draft is your bank's promise...** / **Cheque आपका promise है...** / **Cheque તમારો promise છે...**` (pull quote in each body) → **Quote**

**Apply as Table block (@sanity/table plugin):**
- The "Side by Side" comparison table in each body → insert via the **Table** block in Sanity Studio, copy cells across.

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

"Difference between cheque and demand draft" is a perennial high-volume Indian banking search — students hit it at admission time, businesses hit it at tender time, and almost every explainer ranking today is a thin listicle. There's a sharp, answerable angle: whose promise the instrument carries (yours vs the bank's), which is why institutions demand DDs, plus the rules nobody prints — the ₹50,000 cash limit, purchaser name on the face, why you can't stop-pay a DD, and why Section 138 has no teeth against one. Distinct from #18 (cheque types — bearer/order/crossed within cheques) and #20 (cheque vs UPI/NEFT — paper vs digital). This is paper vs paper. Cluster fit: links #12 (validity), #11 (Section 138), #17 (clearing time), #20 (vs digital).

---

## Sanity Fields

- **Slug:** `demand-draft-vs-cheque-vs-bankers-cheque`
- **Tags:** `Banking & RBI`, `Cheque Guide`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** NO (comparison post)
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Thursday 2026-06-18, 10:00 IST (auto-set in Sanity)
- **Primary keyword:** `difference between cheque and demand draft`
- **Secondary keywords:** demand draft vs cheque, banker's cheque vs demand draft, pay order vs DD, can a demand draft bounce, DD validity period, DD cancellation charges, when to use demand draft
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/demand-draft-vs-cheque-vs-bankers-cheque`
  - HI: `https://cheqify.app/hi/blog/demand-draft-vs-cheque-vs-bankers-cheque`
  - GU: `https://cheqify.app/gu/blog/demand-draft-vs-cheque-vs-bankers-cheque`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `demand-draft-vs-cheque-vs-bankers-cheque-cover.webp`
- **Subject:** Three paper instruments fanned side by side on an off-white background — left: a personal cheque leaf labelled "CHEQUE — your promise"; centre: a demand draft labelled "DEMAND DRAFT — bank's promise, prepaid"; right: a banker's cheque labelled "BANKER'S CHEQUE — bank's promise, local". A small "VS" badge between them. Cheqify wordmark bottom-right.
- **Alt text:** Demand draft vs cheque vs banker's cheque in India — comparison of who issues each instrument, whether it can bounce, and when to use which.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Demand Draft vs Cheque vs Banker's Cheque — Which One to Use, and When (2026)
- **HI:** Demand Draft vs Cheque vs Banker's Cheque — कौन सा Use करें, और कब (2026)
- **GU:** Demand Draft vs Cheque vs Banker's Cheque — કયો Use કરવો, અને ક્યારે (2026)

---

## Descriptions

- **EN:** A cheque is your promise to pay. A demand draft is your bank's — already paid for, so it can't bounce. That one difference explains everything: why colleges and tenders demand DDs, why you can't stop-pay one, why Section 138 doesn't apply, and when a banker's cheque is the smarter pick. Full comparison with validity, charges, cash limits, and a 3-question decision rule.
- **HI:** Cheque आपका pay करने का promise है. Demand draft आपके bank का — पहले से paid, तो ये bounce नहीं हो सकता. वो एक difference सब कुछ explain करता है: colleges और tenders DD क्यों मांगते हैं, आप एक को stop-pay क्यों नहीं कर सकते, Section 138 apply क्यों नहीं होता, और banker's cheque कब smarter pick है. Validity, charges, cash limits, और एक 3-question decision rule के साथ full comparison.
- **GU:** Cheque તમારો pay કરવાનો promise છે. Demand draft તમારા bank નો — પહેલેથી paid, તો એ bounce નથી થઈ શકતો. એ એક difference બધું explain કરે છે: colleges અને tenders DD કેમ માંગે છે, તમે એકને stop-pay કેમ નથી કરી શકતા, Section 138 apply કેમ નથી થતું, અને banker's cheque ક્યારે smarter pick છે. Validity, charges, cash limits, અને એક 3-question decision rule સાથે full comparison.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

The admission office notice says "Demand Draft only." You're standing there with a perfectly good cheque book in your bag, wondering why a college that trusts you with a seat won't trust you with a cheque.

Here's the uncomfortable answer: they've been burned. Cheques bounce. Drafts don't. And once you understand *why* drafts can't bounce, the entire cheque-vs-DD-vs-banker's-cheque question collapses into one clean idea — and choosing between them takes about ten seconds.

Let's get there.

### [H2] The Three Instruments, One Minute Each

**A cheque** is an instruction you write on your own bank account: "pay this person this much." The money stays in your account until the cheque is presented and clears. If the money isn't there on that day — it bounces. The cheque is *your* promise, backed by nothing but your balance.

**A demand draft (DD)** flips that. You walk into a bank (or click through net banking), hand over the money *first*, and the bank issues an instrument drawn on *itself*. By the time a DD exists, the funds have already left you. The payee isn't trusting you anymore — they're trusting the bank.

**A banker's cheque** — also called a **pay order** — is the demand draft's stay-at-home sibling. Same idea: prepaid, issued by the bank, drawn on the bank. The traditional difference is geography. A banker's cheque was payable within the same city or clearing zone; a DD travels anywhere in India. Since the Cheque Truncation System made clearing image-based and effectively national, that distinction has blurred in practice — but banks still issue the two as separate products with separate (often cheaper, for the pay order) charges.

That's the whole cast. Now the part that actually matters.

### [H2] The Real Difference — Whose Promise Is It?

Strip away everything else and the three instruments sort into exactly two piles:

- **Your promise:** the cheque.
- **The bank's promise:** the DD and the banker's cheque.

Every practical difference flows from that split. Can it bounce for insufficient funds? Only your promise can — the bank's promise was funded before it was printed. Can you stop payment? Only on your promise — you can't order a bank to dishonour *its own* obligation. Does Section 138 criminal liability apply? Only to your promise — there's no "insufficient funds" scenario on a prepaid instrument ([what Section 138 actually does when a cheque bounces](https://cheqify.app/en/blog/section-138-ni-act-cheque-bounce-india)).

> **A cheque is your promise. A demand draft is your bank's promise. Institutions don't trust your promise — that's the entire difference, and everything else is paperwork.**

Which is why the entities most allergic to risk — universities, courts, government departments, tender committees — standardise on DDs. They're not being old-fashioned for fun. They're refusing to become unsecured creditors of ten thousand strangers.

### [H2] Side by Side

> **Editor note:** Insert this as a **Table block** in Sanity Studio.

| | Cheque | Demand Draft | Banker's Cheque (Pay Order) |
|---|---|---|---|
| **Drawn by** | You, on your account | Bank, on itself | Bank, on itself |
| **Prepaid?** | No — funds leave on clearing | Yes — paid at issue | Yes — paid at issue |
| **Can it bounce for funds?** | Yes | No | No |
| **Where payable** | Anywhere (CTS clearing) | Anywhere in India | Traditionally same city/zone |
| **Validity** | 3 months from date | 3 months from date | 3 months from date |
| **Stop payment** | Yes, drawer can | No (cancellation by purchaser only) | No (cancellation by purchaser only) |
| **Section 138 applies** | Yes | No | No |
| **Cost** | Leaf cost (often free quota) | Slab-based bank charges | Slab-based, often lower than DD |
| **You need** | Your cheque book | Bank visit or net banking | Bank visit or net banking |

The validity row deserves a flag: all three die at the same age. Three months from the date on the instrument, after which the bank won't pay — a rule the RBI set back in 2012 when it cut the old six-month window in half ([more on validity and what "stale" means](https://cheqify.app/en/blog/cheque-validity-period-stop-payment-india)).

### [H2] When Each One Wins

**The cheque wins for everything routine.** Vendor payments, rent, salaries, EMIs, anything where the payee knows you and a two-day clearing cycle is acceptable ([how long clearing actually takes](https://cheqify.app/en/blog/cheque-clearing-time-india)). It costs nearly nothing, you keep control of timing, you can post-date it, and if something goes wrong you can stop payment. For a business cutting twenty cheques a week, drafts aren't even a conversation.

**The DD wins when the payee demands certainty.** College admissions. Tender EMDs (earnest money deposits). Court fees and payments under court orders. Government applications. Property transactions with a stranger on the other side. Anywhere the form says "DD in favour of…", you're done deciding — buy the draft. You're paying for the bank to substitute its creditworthiness for yours.

**The banker's cheque wins in a narrower lane:** institutional payments within the same city where the receiving office accepts pay orders — utility deposits, local government fees, society transactions. Charges are typically a notch below DD charges for the same amount. If both are accepted and the payment is local, the pay order is usually the cheaper bank-guaranteed option.

And hovering over all three: **NEFT/RTGS/IMPS**, which have eaten most of the DD's old territory. We've covered [when digital beats paper and when it doesn't](https://cheqify.app/en/blog/cheque-vs-digital-payment-india) — the short version is that a DD survives mostly because *forms still say DD*. Institutional inertia is a real force. If the receiving institution accepts NEFT, that's almost always faster and cheaper than a draft. Check before you queue.

### [H2] The DD Rules Nobody Prints on the Form

This is where people get caught. A few rules that genuinely surprise first-time DD buyers:

**The ₹50,000 cash ceiling.** Banks will not issue a DD against cash of ₹50,000 or above — at that level the money must come from your account, with PAN on record. This is an anti-money-laundering rule, and it's the reason the counter clerk asks for your account details on larger drafts. Below ₹50,000, cash works (with the form still asking who you are).

**Your name goes on the face.** Since late 2018, RBI has required the purchaser's name to be incorporated on the face of every demand draft, pay order and banker's cheque. The days of the anonymous draft are over — also an AML measure. If you're buying a DD on someone else's behalf, expect *your* name to appear on it.

**Bigger drafts come pre-crossed.** Drafts of ₹20,000 and above are issued "account payee" crossed — they can only land in the payee's bank account, never be encashed across the counter ([what account-payee crossing actually restricts](https://cheqify.app/en/blog/crossed-cheque-vs-account-payee)).

**You cannot stop-pay a DD.** This one matters. With a cheque, you can call your bank and block payment. With a DD, the bank has *already* committed its own funds — you can't instruct it to dishonour itself. What you can do is **cancel** the draft: physically return the instrument to the issuing bank with a form, and they'll refund the amount minus a cancellation charge. Lost the draft? Now you're into indemnity-bond territory and a wait, because the bank needs protection against the lost instrument surfacing later. Treat a DD like cash in paper form — because that's what it is.

**A stale DD isn't dead money.** After three months the payee can't present it, but the purchaser can approach the issuing bank for revalidation or refund, per that bank's procedure. Slower than you'd like, but the money isn't forfeit.

### [H2] What They Cost

A cheque leaf costs you almost nothing — most banks give a free leaf quota per year, and beyond it leaves run a few rupees each.

DDs and pay orders are charged on slabs that vary by bank and amount — small drafts typically cost a few tens of rupees plus GST, larger ones edge past ₹100, and cancellation usually costs in the same range as issuance. Two practical notes: senior citizens and certain account tiers often get concessional or waived charges, and buying the DD through net banking (where your bank offers it, with doorstep delivery or branch pickup) sometimes prices differently from the counter. Check your own bank's current service-charge page before quoting numbers to anyone — these slabs get revised quietly and often.

The real cost of a DD, though, isn't the fee. It's the trip. The queue, the form, the token, the wait. Which is exactly why the first question in the decision rule below is worth asking out loud.

### [H2] The Three-Question Decision Rule

Next time you owe someone money on paper, ask in order:

1. **Does the receiver explicitly demand a DD?** Then buy a DD. Don't negotiate with a tender document; you will lose.
2. **Do they accept NEFT/RTGS?** Then skip paper entirely — faster, cheaper, instantly traceable.
3. **Do they accept a cheque, and do you have a few days?** Then write the cheque. Cheapest, most controllable, and you keep stop-payment as a safety net.

The banker's cheque slots in as a variant of question 1: if the demand is "bank-guaranteed instrument" and the payment is local, ask whether a pay order is acceptable — it usually costs less than the equivalent DD.

That's it. Three questions, ten seconds, and you'll never stand in the wrong queue again.

### [H2] One Last Distinction Worth Keeping Straight

People sometimes lump a third thing in here: the "self-cheque" or the bearer cheque you use to pull cash from your own account. Different animal entirely — that's you paying *yourself*, with its own rules and limits, and it belongs to the cheque family, not the draft family ([the full taxonomy of cheque types lives here](https://cheqify.app/en/blog/cheque-types-india)).

The clean mental model to leave with: **cheque = your promise, flexible and cheap. DD = the bank's promise, anywhere in India. Banker's cheque = the bank's promise, around the corner.** Match the promise to how much the other side trusts you, and the choice makes itself.

---

> **Issuing cheques instead of queuing for drafts? Print them properly.** Cheqify prints on 300+ Indian bank cheque layouts with auto amount-in-words, batch printing for vendor runs, and a full register of every leaf you've issued — so the cheques you *do* write clear without drama. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** What is the main difference between a cheque and a demand draft?
   **A:** A cheque is drawn by you on your own bank account — the money leaves only when the cheque is presented, so it can bounce if funds are short. A demand draft is drawn by the bank on itself after you've already paid the amount, so it carries the bank's guarantee and cannot bounce for insufficient funds. That's why institutions like colleges, courts, and tender committees insist on DDs.

2. **Q:** Can a demand draft bounce?
   **A:** Not for insufficient funds — the amount is collected from the purchaser before the draft is issued, so the funding risk that makes cheques bounce simply doesn't exist. A DD can still be refused for technical reasons (stale beyond 3 months, mutilated instrument, suspected forgery), but the classic "funds insufficient" return is impossible.

3. **Q:** What is the difference between a banker's cheque and a demand draft?
   **A:** Both are prepaid instruments drawn by the bank on itself. The traditional difference is reach: a banker's cheque (pay order) was payable within the same city or clearing zone, while a demand draft is payable anywhere in India. With image-based CTS clearing the practical gap has narrowed, but banks still sell them as separate products, and pay-order charges are often slightly lower for local use.

4. **Q:** How long is a demand draft valid?
   **A:** Three months from the date of issue — the same validity as a cheque and a banker's cheque, per the RBI rule that trimmed the older six-month window. After that the draft is stale and won't be paid; the purchaser can approach the issuing bank for revalidation or a refund under the bank's procedure.

5. **Q:** Can I stop payment of a demand draft?
   **A:** No. Stop payment works on cheques because the instruction is yours to withdraw. A DD is the bank's own committed obligation, so it can't be stopped the way a cheque can. What the purchaser can do is cancel it — return the physical draft to the issuing bank with a cancellation form for a refund minus charges. A lost DD requires an indemnity process before the bank will refund or reissue.

6. **Q:** Is there a cash limit for making a demand draft?
   **A:** Yes. Banks do not issue DDs against cash of ₹50,000 or above — at and beyond that level the amount must be debited from your bank account, with PAN details on record. This is an anti-money-laundering requirement. RBI rules also require the purchaser's name to be printed on the face of every draft, and drafts of ₹20,000+ are issued account-payee crossed.

7. **Q:** Why do colleges and government offices still demand DDs when NEFT exists?
   **A:** Risk and reconciliation habits. A DD can't bounce, arrives with the payer's name printed on its face, and matches paper-based processes that institutions have run for decades. Many are migrating to NEFT/payment gateways, but forms and tender documents change slowly. If the institution lists NEFT as an option, it's almost always faster and cheaper than buying a draft — check before queuing.

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote, table, and CTA callout.

---

Admission office का notice कहता है "Demand Draft only." आप वहाँ खड़े हैं, bag में एक perfectly अच्छी cheque book के साथ, सोचते हुए कि जो college आपको seat देने का भरोसा करता है वो आपके cheque का भरोसा क्यों नहीं करता.

यहाँ है uncomfortable answer: वो जल चुके हैं. Cheques bounce होते हैं. Drafts नहीं होते. और एक बार आप समझ जाएँ कि drafts bounce *क्यों* नहीं हो सकते, पूरा cheque-vs-DD-vs-banker's-cheque question एक clean idea में collapse हो जाता है — और इनके बीच choose करने में लगभग दस seconds लगते हैं.

चलिए वहाँ पहुँचते हैं.

### [H2] तीनों Instruments, हर एक One Minute में

**Cheque** एक instruction है जो आप अपने ही bank account पर लिखते हैं: "इस person को इतना pay करो." पैसा आपके account में रहता है जब तक cheque present होकर clear नहीं होता. अगर उस दिन पैसा वहाँ नहीं है — ये bounce हो जाता है. Cheque *आपका* promise है, जिसके पीछे आपके balance के सिवा कुछ नहीं.

**Demand draft (DD)** इसे flip कर देता है. आप bank में जाते हैं (या net banking में click करते हैं), पैसा *पहले* hand over करते हैं, और bank एक instrument issue करता है जो *खुद पर* drawn है. जब तक DD exist करता है, funds आपसे already जा चुके हैं. Payee अब आप पर trust नहीं कर रहा — वो bank पर trust कर रहा है.

**Banker's cheque** — जिसे **pay order** भी कहते हैं — demand draft का stay-at-home sibling है. Same idea: prepaid, bank द्वारा issued, bank पर drawn. Traditional difference geography है. Banker's cheque same city या clearing zone के अंदर payable था; DD पूरे India में travel करता है. जब से Cheque Truncation System ने clearing को image-based और effectively national बना दिया, ये distinction practice में blur हो गया है — पर banks अभी भी दोनों को separate products के तौर पर issue करते हैं, separate (अक्सर pay order के लिए सस्ते) charges के साथ.

बस यही पूरी cast है. अब वो part जो actually matter करता है.

### [H2] असली Difference — Promise किसका है?

बाकी सब हटा दें और तीनों instruments exactly दो piles में sort हो जाते हैं:

- **आपका promise:** cheque.
- **Bank का promise:** DD और banker's cheque.

हर practical difference उसी split से flow करता है. क्या ये insufficient funds के लिए bounce हो सकता है? सिर्फ़ आपका promise — bank का promise print होने से पहले funded था. क्या आप stop payment कर सकते हैं? सिर्फ़ अपने promise पर — आप एक bank को order नहीं दे सकते कि वो *अपनी ही* obligation dishonour करे. क्या Section 138 की criminal liability apply होती है? सिर्फ़ आपके promise पर — prepaid instrument पर कोई "insufficient funds" scenario नहीं है ([cheque bounce होने पर Section 138 actually क्या करता है](https://cheqify.app/hi/blog/section-138-ni-act-cheque-bounce-india)).

> **Cheque आपका promise है. Demand draft आपके bank का promise है. Institutions आपके promise पर trust नहीं करतीं — यही पूरा difference है, और बाकी सब paperwork है.**

यही reason है कि risk से सबसे ज़्यादा allergic entities — universities, courts, government departments, tender committees — DDs पर standardise करती हैं. वो मज़े के लिए old-fashioned नहीं बन रहीं. वो दस हज़ार strangers की unsecured creditors बनने से मना कर रही हैं.

### [H2] Side by Side

> **Editor note:** Insert this as a **Table block** in Sanity Studio.

| | Cheque | Demand Draft | Banker's Cheque (Pay Order) |
|---|---|---|---|
| **किसके द्वारा drawn** | आप, अपने account पर | Bank, खुद पर | Bank, खुद पर |
| **Prepaid?** | नहीं — funds clearing पर जाते हैं | हाँ — issue पर paid | हाँ — issue पर paid |
| **Funds के लिए bounce?** | हाँ | नहीं | नहीं |
| **कहाँ payable** | कहीं भी (CTS clearing) | India में कहीं भी | Traditionally same city/zone |
| **Validity** | Date से 3 months | Date से 3 months | Date से 3 months |
| **Stop payment** | हाँ, drawer कर सकता है | नहीं (सिर्फ़ purchaser द्वारा cancellation) | नहीं (सिर्फ़ purchaser द्वारा cancellation) |
| **Section 138 apply** | हाँ | नहीं | नहीं |
| **Cost** | Leaf cost (अक्सर free quota) | Slab-based bank charges | Slab-based, अक्सर DD से कम |
| **आपको चाहिए** | आपकी cheque book | Bank visit या net banking | Bank visit या net banking |

Validity row एक flag deserve करती है: तीनों same age पर मरते हैं. Instrument पर लिखी date से तीन months, जिसके बाद bank pay नहीं करेगा — एक rule जो RBI ने 2012 में set किया जब उसने पुरानी six-month window आधी कर दी ([validity और "stale" का मतलब क्या है, इस पर ज़्यादा](https://cheqify.app/hi/blog/cheque-validity-period-stop-payment-india)).

### [H2] हर एक कब जीतता है

**Routine हर चीज़ के लिए cheque जीतता है.** Vendor payments, rent, salaries, EMIs, कुछ भी जहाँ payee आपको जानता है और two-day clearing cycle acceptable है ([clearing में actually कितना time लगता है](https://cheqify.app/hi/blog/cheque-clearing-time-india)). इसका cost लगभग कुछ नहीं, timing पर आपका control रहता है, आप post-date कर सकते हैं, और कुछ गलत हो जाए तो stop payment कर सकते हैं. हफ़्ते में बीस cheques काटने वाले business के लिए, drafts एक conversation भी नहीं हैं.

**DD तब जीतता है जब payee certainty demand करता है.** College admissions. Tender EMDs (earnest money deposits). Court fees और court orders के under payments. Government applications. Property transactions जहाँ दूसरी तरफ़ stranger है. जहाँ भी form कहता है "DD in favour of…", आपका deciding खत्म — draft खरीदें. आप bank को pay कर रहे हैं ताकि वो अपनी creditworthiness आपकी जगह substitute करे.

**Banker's cheque एक narrower lane में जीतता है:** same city के अंदर institutional payments जहाँ receiving office pay orders accept करता है — utility deposits, local government fees, society transactions. Same amount के लिए charges typically DD charges से एक notch नीचे होते हैं. अगर दोनों accepted हैं और payment local है, pay order usually सस्ता bank-guaranteed option है.

और तीनों के ऊपर hover करते हुए: **NEFT/RTGS/IMPS**, जिन्होंने DD की पुरानी territory का ज़्यादातर हिस्सा खा लिया है. हमने cover किया है [digital कब paper को हराता है और कब नहीं](https://cheqify.app/hi/blog/cheque-vs-digital-payment-india) — short version ये है कि DD mostly इसलिए survive करता है क्योंकि *forms अभी भी DD कहते हैं*. Institutional inertia एक real force है. अगर receiving institution NEFT accept करती है, वो almost always draft से faster और cheaper है. Queue से पहले check करें.

### [H2] DD के वो Rules जो कोई Form पर Print नहीं करता

यहीं लोग फँसते हैं. कुछ rules जो first-time DD buyers को genuinely surprise करते हैं:

**₹50,000 की cash ceiling.** Banks ₹50,000 या उससे ऊपर की cash के against DD issue नहीं करेंगे — उस level पर पैसा आपके account से आना चाहिए, PAN record पर होने के साथ. ये एक anti-money-laundering rule है, और यही reason है कि बड़े drafts पर counter clerk आपके account details मांगता है. ₹50,000 से नीचे, cash चलती है (form फिर भी पूछेगा कि आप कौन हैं).

**आपका name face पर जाता है.** Late 2018 से, RBI ने require किया है कि हर demand draft, pay order और banker's cheque के face पर purchaser का name incorporate हो. Anonymous draft के दिन खत्म — ये भी एक AML measure है. अगर आप किसी और की behalf पर DD खरीद रहे हैं, expect करें कि *आपका* name उस पर दिखेगा.

**बड़े drafts pre-crossed आते हैं.** ₹20,000 और ऊपर के drafts "account payee" crossed issue होते हैं — वो सिर्फ़ payee के bank account में land हो सकते हैं, कभी counter पर encash नहीं ([account-payee crossing actually क्या restrict करता है](https://cheqify.app/hi/blog/crossed-cheque-vs-account-payee)).

**आप DD को stop-pay नहीं कर सकते.** ये वाला matter करता है. Cheque के साथ, आप अपने bank को call करके payment block कर सकते हैं. DD के साथ, bank ने अपने funds *already* commit कर दिए हैं — आप उसे instruct नहीं कर सकते कि वो खुद को dishonour करे. जो आप कर सकते हैं वो है draft **cancel** करना: instrument को physically issuing bank में एक form के साथ वापस करें, और वो cancellation charge minus करके amount refund कर देंगे. Draft खो गया? अब आप indemnity-bond territory और एक wait में हैं, क्योंकि bank को protection चाहिए इसके against कि खोया हुआ instrument बाद में surface हो जाए. DD को paper form में cash की तरह treat करें — क्योंकि वो वही है.

**Stale DD dead money नहीं है.** तीन months के बाद payee इसे present नहीं कर सकता, पर purchaser issuing bank से revalidation या refund के लिए approach कर सकता है, उस bank की procedure के per. जितना आप चाहें उससे slower, पर पैसा forfeit नहीं है.

### [H2] इनका Cost क्या है

Cheque leaf का cost आपको लगभग कुछ नहीं — ज़्यादातर banks साल में एक free leaf quota देते हैं, और उसके beyond leaves कुछ rupees each पड़ती हैं.

DDs और pay orders slabs पर charged होते हैं जो bank और amount से vary करते हैं — छोटे drafts typically कुछ tens of rupees plus GST, बड़े ₹100 के past, और cancellation usually issuance की same range में. दो practical notes: senior citizens और certain account tiers को अक्सर concessional या waived charges मिलते हैं, और net banking के through DD खरीदना (जहाँ आपका bank offer करता है) कभी-कभी counter से अलग price होता है. किसी को numbers quote करने से पहले अपने bank का current service-charge page check करें — ये slabs quietly और अक्सर revise होते हैं.

हालाँकि DD का real cost fee नहीं है. Trip है. Queue, form, token, wait. जो exactly वो reason है कि नीचे decision rule का पहला question out loud पूछने लायक है.

### [H2] Three-Question Decision Rule

अगली बार जब आपको किसी को paper पर पैसा देना हो, order में पूछें:

1. **क्या receiver explicitly DD demand करता है?** तो DD खरीदें. Tender document से negotiate मत करें; आप हारेंगे.
2. **क्या वो NEFT/RTGS accept करते हैं?** तो paper पूरी तरह skip करें — faster, cheaper, instantly traceable.
3. **क्या वो cheque accept करते हैं, और आपके पास कुछ दिन हैं?** तो cheque लिखें. Cheapest, most controllable, और stop-payment safety net आपके पास रहता है.

Banker's cheque question 1 के variant के तौर पर slot होता है: अगर demand "bank-guaranteed instrument" है और payment local है, पूछें कि क्या pay order acceptable है — ये usually equivalent DD से कम cost करता है.

बस इतना. तीन questions, दस seconds, और आप फिर कभी गलत queue में खड़े नहीं होंगे.

### [H2] एक Last Distinction जो Straight रखने लायक है

लोग कभी-कभी यहाँ एक तीसरी चीज़ lump कर देते हैं: "self-cheque" या bearer cheque जो आप अपने ही account से cash निकालने के लिए use करते हैं. पूरी तरह different animal — वो आप *खुद को* pay कर रहे हैं, अपने rules और limits के साथ, और ये cheque family का है, draft family का नहीं ([cheque types की full taxonomy यहाँ है](https://cheqify.app/hi/blog/cheque-types-india)).

साथ ले जाने वाला clean mental model: **cheque = आपका promise, flexible और सस्ता. DD = bank का promise, India में कहीं भी. Banker's cheque = bank का promise, around the corner.** Promise को इससे match करें कि दूसरी side आप पर कितना trust करती है, और choice खुद बन जाती है.

---

> **Drafts के लिए queue करने के बजाय cheques issue कर रहे हैं? उन्हें properly print करें.** Cheqify 300+ Indian bank cheque layouts पर print करता है, auto amount-in-words, vendor runs के लिए batch printing, और हर issued leaf का full register के साथ — ताकि जो cheques आप लिखते हैं वो बिना drama के clear हों. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Hinglish blend, same structure as English. Keep the pull-quote, table, and CTA callout.

---

Admission office ની notice કહે છે "Demand Draft only." તમે ત્યાં ઊભા છો, bag માં એક perfectly સારી cheque book સાથે, વિચારતા કે જે college તમને seat આપવાનો ભરોસો કરે છે એ તમારા cheque નો ભરોસો કેમ નથી કરતી.

અહીં છે uncomfortable answer: એ દાઝી ચૂક્યા છે. Cheques bounce થાય છે. Drafts નથી થતા. અને એક વાર તમે સમજી જાઓ કે drafts bounce *કેમ* નથી થઈ શકતા, આખો cheque-vs-DD-vs-banker's-cheque question એક clean idea માં collapse થઈ જાય છે — અને એમની વચ્ચે choose કરવામાં લગભગ દસ seconds લાગે છે.

ચાલો ત્યાં પહોંચીએ.

### [H2] ત્રણેય Instruments, દરેક One Minute માં

**Cheque** એક instruction છે જે તમે તમારા જ bank account પર લખો છો: "આ person ને આટલું pay કરો." પૈસા તમારા account માં રહે છે જ્યાં સુધી cheque present થઈને clear નથી થતો. જો એ દિવસે પૈસા ત્યાં નથી — એ bounce થઈ જાય છે. Cheque *તમારો* promise છે, જેની પાછળ તમારા balance સિવાય કંઈ નથી.

**Demand draft (DD)** આને flip કરી દે છે. તમે bank માં જાઓ છો (કે net banking માં click કરો છો), પૈસા *પહેલા* hand over કરો છો, અને bank એક instrument issue કરે છે જે *ખુદ પર* drawn છે. જ્યાં સુધી DD exist કરે છે, funds તમારાથી already જઈ ચૂક્યા છે. Payee હવે તમારા પર trust નથી કરી રહ્યો — એ bank પર trust કરી રહ્યો છે.

**Banker's cheque** — જેને **pay order** પણ કહે છે — demand draft નો stay-at-home sibling છે. Same idea: prepaid, bank દ્વારા issued, bank પર drawn. Traditional difference geography છે. Banker's cheque same city કે clearing zone ની અંદર payable હતો; DD આખા India માં travel કરે છે. જ્યારથી Cheque Truncation System એ clearing ને image-based અને effectively national બનાવી દીધું, આ distinction practice માં blur થઈ ગયું છે — પણ banks હજુ પણ બંનેને separate products તરીકે issue કરે છે, separate (ઘણીવાર pay order માટે સસ્તા) charges સાથે.

બસ આ જ આખી cast છે. હવે એ part જે actually matter કરે છે.

### [H2] અસલી Difference — Promise કોનો છે?

બાકી બધું હટાવી દો અને ત્રણેય instruments exactly બે piles માં sort થઈ જાય છે:

- **તમારો promise:** cheque.
- **Bank નો promise:** DD અને banker's cheque.

દરેક practical difference એ જ split માંથી flow કરે છે. શું આ insufficient funds માટે bounce થઈ શકે છે? ફક્ત તમારો promise — bank નો promise print થયા પહેલા funded હતો. શું તમે stop payment કરી શકો છો? ફક્ત તમારા promise પર — તમે એક bank ને order નથી આપી શકતા કે એ *પોતાની જ* obligation dishonour કરે. શું Section 138 ની criminal liability apply થાય છે? ફક્ત તમારા promise પર — prepaid instrument પર કોઈ "insufficient funds" scenario નથી ([cheque bounce થાય ત્યારે Section 138 actually શું કરે છે](https://cheqify.app/gu/blog/section-138-ni-act-cheque-bounce-india)).

> **Cheque તમારો promise છે. Demand draft તમારા bank નો promise છે. Institutions તમારા promise પર trust નથી કરતી — આ જ આખો difference છે, અને બાકી બધું paperwork છે.**

આ જ reason છે કે risk થી સૌથી વધારે allergic entities — universities, courts, government departments, tender committees — DDs પર standardise કરે છે. એ મજા માટે old-fashioned નથી બની રહી. એ દસ હજાર strangers ની unsecured creditors બનવાથી ના પાડી રહી છે.

### [H2] Side by Side

> **Editor note:** Insert this as a **Table block** in Sanity Studio.

| | Cheque | Demand Draft | Banker's Cheque (Pay Order) |
|---|---|---|---|
| **કોના દ્વારા drawn** | તમે, તમારા account પર | Bank, ખુદ પર | Bank, ખુદ પર |
| **Prepaid?** | ના — funds clearing પર જાય છે | હા — issue પર paid | હા — issue પર paid |
| **Funds માટે bounce?** | હા | ના | ના |
| **ક્યાં payable** | ક્યાંય પણ (CTS clearing) | India માં ક્યાંય પણ | Traditionally same city/zone |
| **Validity** | Date થી 3 months | Date થી 3 months | Date થી 3 months |
| **Stop payment** | હા, drawer કરી શકે છે | ના (ફક્ત purchaser દ્વારા cancellation) | ના (ફક્ત purchaser દ્વારા cancellation) |
| **Section 138 apply** | હા | ના | ના |
| **Cost** | Leaf cost (ઘણીવાર free quota) | Slab-based bank charges | Slab-based, ઘણીવાર DD થી ઓછા |
| **તમને જોઈએ** | તમારી cheque book | Bank visit કે net banking | Bank visit કે net banking |

Validity row એક flag deserve કરે છે: ત્રણેય same age પર મરે છે. Instrument પર લખેલી date થી ત્રણ months, જેના પછી bank pay નહીં કરે — એક rule જે RBI એ 2012 માં set કર્યો જ્યારે એણે જૂની six-month window અડધી કરી દીધી ([validity અને "stale" નો મતલબ શું છે, એના પર વધારે](https://cheqify.app/gu/blog/cheque-validity-period-stop-payment-india)).

### [H2] દરેક ક્યારે જીતે છે

**Routine દરેક વસ્તુ માટે cheque જીતે છે.** Vendor payments, rent, salaries, EMIs, કંઈ પણ જ્યાં payee તમને જાણે છે અને two-day clearing cycle acceptable છે ([clearing માં actually કેટલો time લાગે છે](https://cheqify.app/gu/blog/cheque-clearing-time-india)). એનો cost લગભગ કંઈ નહીં, timing પર તમારો control રહે છે, તમે post-date કરી શકો છો, અને કંઈ ખોટું થઈ જાય તો stop payment કરી શકો છો. અઠવાડિયામાં વીસ cheques કાપતા business માટે, drafts એક conversation પણ નથી.

**DD ત્યારે જીતે છે જ્યારે payee certainty demand કરે છે.** College admissions. Tender EMDs (earnest money deposits). Court fees અને court orders હેઠળ payments. Government applications. Property transactions જ્યાં બીજી તરફ stranger છે. જ્યાં પણ form કહે છે "DD in favour of…", તમારું deciding ખતમ — draft ખરીદો. તમે bank ને pay કરી રહ્યા છો જેથી એ પોતાની creditworthiness તમારી જગ્યાએ substitute કરે.

**Banker's cheque એક narrower lane માં જીતે છે:** same city ની અંદર institutional payments જ્યાં receiving office pay orders accept કરે છે — utility deposits, local government fees, society transactions. Same amount માટે charges typically DD charges થી એક notch નીચે હોય છે. જો બંને accepted છે અને payment local છે, pay order usually સસ્તો bank-guaranteed option છે.

અને ત્રણેયની ઉપર hover કરતા: **NEFT/RTGS/IMPS**, જેમણે DD ની જૂની territory નો મોટાભાગનો ભાગ ખાઈ લીધો છે. અમે cover કર્યું છે [digital ક્યારે paper ને હરાવે છે અને ક્યારે નહીં](https://cheqify.app/gu/blog/cheque-vs-digital-payment-india) — short version એ છે કે DD mostly એટલે survive કરે છે કારણ કે *forms હજુ પણ DD કહે છે*. Institutional inertia એક real force છે. જો receiving institution NEFT accept કરે છે, એ almost always draft થી faster અને cheaper છે. Queue પહેલા check કરો.

### [H2] DD ના એ Rules જે કોઈ Form પર Print નથી કરતું

અહીં જ લોકો ફસાય છે. કેટલાક rules જે first-time DD buyers ને genuinely surprise કરે છે:

**₹50,000 ની cash ceiling.** Banks ₹50,000 કે એનાથી ઉપરની cash ની against DD issue નહીં કરે — એ level પર પૈસા તમારા account માંથી આવવા જોઈએ, PAN record પર હોવા સાથે. આ એક anti-money-laundering rule છે, અને આ જ reason છે કે મોટા drafts પર counter clerk તમારા account details માંગે છે. ₹50,000 થી નીચે, cash ચાલે છે (form તો પણ પૂછશે કે તમે કોણ છો).

**તમારું name face પર જાય છે.** Late 2018 થી, RBI એ require કર્યું છે કે દરેક demand draft, pay order અને banker's cheque ના face પર purchaser નું name incorporate થાય. Anonymous draft ના દિવસો ખતમ — આ પણ એક AML measure છે. જો તમે કોઈ બીજાની behalf પર DD ખરીદી રહ્યા છો, expect કરો કે *તમારું* name એના પર દેખાશે.

**મોટા drafts pre-crossed આવે છે.** ₹20,000 અને ઉપરના drafts "account payee" crossed issue થાય છે — એ ફક્ત payee ના bank account માં land થઈ શકે છે, ક્યારેય counter પર encash નહીં ([account-payee crossing actually શું restrict કરે છે](https://cheqify.app/gu/blog/crossed-cheque-vs-account-payee)).

**તમે DD ને stop-pay નથી કરી શકતા.** આ વાળું matter કરે છે. Cheque સાથે, તમે તમારા bank ને call કરીને payment block કરી શકો છો. DD સાથે, bank એ પોતાના funds *already* commit કરી દીધા છે — તમે એને instruct નથી કરી શકતા કે એ ખુદને dishonour કરે. જે તમે કરી શકો છો એ છે draft **cancel** કરવો: instrument ને physically issuing bank માં એક form સાથે પાછો આપો, અને એ cancellation charge minus કરીને amount refund કરી દેશે. Draft ખોવાઈ ગયો? હવે તમે indemnity-bond territory અને એક wait માં છો, કારણ કે bank ને protection જોઈએ એની against કે ખોવાયેલું instrument પછી surface થઈ જાય. DD ને paper form માં cash ની જેમ treat કરો — કારણ કે એ એ જ છે.

**Stale DD dead money નથી.** ત્રણ months પછી payee એને present નથી કરી શકતો, પણ purchaser issuing bank ને revalidation કે refund માટે approach કરી શકે છે, એ bank ની procedure ની per. જેટલું તમે ઈચ્છો એનાથી slower, પણ પૈસા forfeit નથી.

### [H2] એમનો Cost શું છે

Cheque leaf નો cost તમને લગભગ કંઈ નહીં — મોટાભાગના banks વર્ષમાં એક free leaf quota આપે છે, અને એના beyond leaves થોડા rupees each પડે છે.

DDs અને pay orders slabs પર charged થાય છે જે bank અને amount થી vary કરે છે — નાના drafts typically થોડા tens of rupees plus GST, મોટા ₹100 ની past, અને cancellation usually issuance ની same range માં. બે practical notes: senior citizens અને certain account tiers ને ઘણીવાર concessional કે waived charges મળે છે, અને net banking ના through DD ખરીદવું (જ્યાં તમારું bank offer કરે છે) ક્યારેક counter થી અલગ price હોય છે. કોઈને numbers quote કરતા પહેલા તમારા bank નું current service-charge page check કરો — આ slabs quietly અને ઘણીવાર revise થાય છે.

જોકે DD નો real cost fee નથી. Trip છે. Queue, form, token, wait. જે exactly એ reason છે કે નીચે decision rule નો પહેલો question out loud પૂછવા લાયક છે.

### [H2] Three-Question Decision Rule

આગલી વાર જ્યારે તમારે કોઈને paper પર પૈસા આપવાના હોય, order માં પૂછો:

1. **શું receiver explicitly DD demand કરે છે?** તો DD ખરીદો. Tender document સાથે negotiate ન કરો; તમે હારશો.
2. **શું એ NEFT/RTGS accept કરે છે?** તો paper આખું skip કરો — faster, cheaper, instantly traceable.
3. **શું એ cheque accept કરે છે, અને તમારી પાસે થોડા દિવસ છે?** તો cheque લખો. Cheapest, most controllable, અને stop-payment safety net તમારી પાસે રહે છે.

Banker's cheque question 1 ના variant તરીકે slot થાય છે: જો demand "bank-guaranteed instrument" છે અને payment local છે, પૂછો કે શું pay order acceptable છે — એ usually equivalent DD થી ઓછો cost કરે છે.

બસ આટલું. ત્રણ questions, દસ seconds, અને તમે ફરી ક્યારેય ખોટી queue માં ઊભા નહીં રહો.

### [H2] એક Last Distinction જે Straight રાખવા લાયક છે

લોકો ક્યારેક અહીં એક ત્રીજી વસ્તુ lump કરી દે છે: "self-cheque" કે bearer cheque જે તમે તમારા જ account માંથી cash કાઢવા માટે use કરો છો. આખું different animal — એ તમે *ખુદને* pay કરી રહ્યા છો, પોતાના rules અને limits સાથે, અને આ cheque family નું છે, draft family નું નહીં ([cheque types ની full taxonomy અહીં છે](https://cheqify.app/gu/blog/cheque-types-india)).

સાથે લઈ જવાનો clean mental model: **cheque = તમારો promise, flexible અને સસ્તો. DD = bank નો promise, India માં ક્યાંય પણ. Banker's cheque = bank નો promise, around the corner.** Promise ને એનાથી match કરો કે બીજી side તમારા પર કેટલો trust કરે છે, અને choice ખુદ બની જાય છે.

---

> **Drafts માટે queue કરવાને બદલે cheques issue કરી રહ્યા છો? એમને properly print કરો.** Cheqify 300+ Indian bank cheque layouts પર print કરે છે, auto amount-in-words, vendor runs માટે batch printing, અને દરેક issued leaf નું full register સાથે — જેથી જે cheques તમે લખો છો એ drama વગર clear થાય. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## ⚠️ Pre-publish fact-check required

1. **The ₹50,000 cash ceiling for DD purchase** is grounded in RBI KYC/AML master directions (cash purchase of DD/PO/TT ≥₹50,000 must be by debit to account). Framing in the body is correct, but do NOT add a circular number without pulling the current RBI KYC Master Direction.
2. **Purchaser's name on the face of DD/PO/banker's cheque** — RBI mandated this with effect from September 2018 (AML measure). The body says "since late 2018" deliberately. Verify the exact effective date (Sept 15, 2018 per reporting) before tightening the wording.
3. **₹20,000+ drafts issued account-payee crossed** — long-standing RBI instruction; confirm it remains in the current consolidated circulars before publish.
4. **DD/pay-order charges** are described directionally ("tens of rupees… past ₹100"). Do NOT print bank-specific slabs without checking each bank's current service-charge page.
5. **Stale DD revalidation** — bank-procedure-dependent; the body deliberately avoids promising a uniform process. Keep it that way.
6. **Banker's cheque local-clearing distinction post-CTS** — described as "blurred in practice". Don't claim the products are formally merged; banks still issue them separately.

---

## Internal-Link Strategy

**Forward links from this post:**
- Post #11 (`section-138-ni-act-cheque-bounce-india`) — Section 138 applies to cheques, not DDs.
- Post #12 (`cheque-validity-period-stop-payment-india`) — the shared 3-month validity rule.
- Post #17 (`cheque-clearing-time-india`) — clearing cycle context for "routine cheque wins".
- Post #20 (`cheque-vs-digital-payment-india`) — NEFT/RTGS eating the DD's territory.
- Post #23 (`crossed-cheque-vs-account-payee`) — what account-payee crossing restricts. **Publishes Mon 2026-06-08, before this post — link is safe.**
- Post #18 (`cheque-types-india`) — self/bearer cheque taxonomy.

**Bonus internal-link work (after publish):**
- Edit post #18 (`cheque-types-india`, all 3 locales) to add a "how cheques compare against DDs and pay orders" link to this post.
- Edit post #20 (`cheque-vs-digital-payment-india`, all 3 locales) to link its DD mention (if any) here.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The comparison table and decision rule are detector-sensitive — the surrounding prose carries the voice; don't trim it.
- **Fact-check block (CRITICAL):** Resolve every item above. No circular numbers without primary sources.
- **Internal link order:** Post #23 must be live (publishes 2026-06-08, ten days before this).
- **Word count:** EN body must be >1200 words (target 1,700–2,200). Current draft: ~2,050 words.
- **Sanity toggles:** `isHowTo: OFF`, `hasFaq: ON` (7 items).
- **Table:** Insert the Side-by-Side comparison as a Sanity Table block in all three bodies.

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — post #18 and post #20.
5. IndexNow auto-pings on publish.
