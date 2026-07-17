# Blog Post #44 — Outstation & Foreign Cheque Clearing in India — Times & Charges (2026)

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
- `> **A cheque that takes five weeks to clear...** / **जो cheque clear होने में पाँच हफ़्ते लेता है...** / **જે cheque clear થવામાં પાંચ અઠવાડિયા લે છે...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **The distance a cheque travels stopped mattering the day its image started travelling instead...** / **Cheque कितनी दूर travel करता है...** / **Cheque કેટલું દૂર travel કરે છે...**` (pull quote in each body) → **Quote**

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

"Outstation cheque charges" and "foreign cheque clearing time India" are evergreen confusion queries with almost no SMB-voiced answers — most results are bank tariff PDFs or decade-old forum threads written before CTS grid clearing made "outstation" nearly meaningless. The post owns two adjacent long-tails in one URL: the domestic one (what still counts as outstation, why at-par cheques killed the charges) and the international one (collection basis, correspondent banks, forex conversion at realisation, recourse risk). Strong cluster fit: #17 (clearing time — this is its "special cases" sibling) and #22 (CTS — the machinery that collapsed outstation). Product tie: a five-week-clearing instrument is the strongest possible argument for a cheque register that tracks status.

---

## Sanity Fields

- **Slug:** `outstation-foreign-cheque-clearing-india`
- **Tags:** `Banking & RBI`, `Cheque Guide`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** NO
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Ravi-managed — no fixed date
- **Primary keyword:** `outstation cheque clearing time`
- **Secondary keywords:** foreign cheque clearing time India, outstation cheque charges, payable at par cheque, foreign cheque collection charges, USD cheque deposit India, cheque purchase vs collection
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/outstation-foreign-cheque-clearing-india`
  - HI: `https://cheqify.app/hi/blog/outstation-foreign-cheque-clearing-india`
  - GU: `https://cheqify.app/gu/blog/outstation-foreign-cheque-clearing-india`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `outstation-foreign-cheque-clearing-india-cover.webp`
- **Subject:** A split-scene desk: on the left, an Indian cheque with a dotted route between two city skylines collapsing into a single lightning-fast scan icon (CTS); on the right, a US-dollar cheque beside a small globe, a paper aeroplane, and a calendar with several weeks crossed out. A rupee-to-dollar conversion tag hangs off the foreign cheque. Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** Outstation and foreign cheque clearing in India — a domestic at-par cheque clearing fast beside a foreign currency cheque waiting weeks on collection.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Outstation & Foreign Cheque Clearing in India — Times & Charges (2026)
- **HI:** India में Outstation और Foreign Cheque Clearing — Time और Charges (2026)
- **GU:** India માં Outstation અને Foreign Cheque Clearing — Time અને Charges (2026)

---

## Descriptions

- **EN:** A cheque from another Indian city now clears almost as fast as a local one — CTS grid clearing and "payable at par" printing quietly dismantled the outstation machinery. A cheque from another country is a different animal entirely: sent on collection through correspondent banks, converted at the rate on the day it realises, and returnable weeks after the money lands. Here's the SMB guide to both — the timelines, the charge stack, purchase vs collection, and when to just ask for a wire transfer.
- **HI:** दूसरे Indian city का cheque अब almost एक local cheque जितना fast clear होता है — CTS grid clearing और "payable at par" printing ने outstation machinery को quietly dismantle कर दिया. दूसरे country का cheque बिलकुल अलग animal है: correspondent banks के through collection पर भेजा जाता है, जिस दिन realise होता है उस दिन के rate पर convert होता है, और पैसा land होने के हफ़्तों बाद भी return हो सकता है. यहाँ है दोनों की SMB guide — timelines, charge stack, purchase vs collection, और कब सिर्फ़ एक wire transfer माँग लेना चाहिए.
- **GU:** બીજા Indian city નો cheque હવે almost એક local cheque જેટલો fast clear થાય છે — CTS grid clearing અને "payable at par" printing એ outstation machinery ને quietly dismantle કરી દીધી. બીજા country નો cheque બિલકુલ અલગ animal છે: correspondent banks ની through collection પર મોકલાય છે, જે દિવસે realise થાય એ દિવસના rate પર convert થાય છે, અને પૈસા land થયાના અઠવાડિયાઓ પછી પણ return થઈ શકે છે. અહીં છે બંનેની SMB guide — timelines, charge stack, purchase vs collection, અને ક્યારે ફક્ત એક wire transfer માંગી લેવું જોઈએ.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

Two cheques arrive at a small exporter's office in Rajkot on the same Tuesday morning. One is drawn on a bank branch in Madurai — a domestic buyer settling an invoice. The other is a US-dollar cheque from a client in New Jersey who, in his words, "doesn't do wire transfers."

Both are rectangles of paper with a signature. Only one of them will behave like a cheque.

The Madurai leaf will clear in a day or two, exactly like a cheque drawn across the street, because the machinery that once made "outstation" slow has been quietly dismantled over the past decade. The New Jersey cheque is about to leave on a journey of several weeks — through at least two banks, one currency conversion, and a stack of charges its recipient never sees coming.

This is the guide to both: what outstation still means in the CTS era, what two printed words do to collection charges, and why a foreign cheque is handled as a parcel to be collected rather than an instrument to be cleared.

### [H2] Outstation and Foreign Are Two Different Problems

Get the definitions straight first, because banks price them very differently.

An **outstation cheque** is drawn on a bank branch in a *different city* — rupees, Indian bank, Indian clearing system. It used to mean delay and a collection fee. Today it mostly means neither.

A **foreign cheque** is either written in a *foreign currency*, or drawn on a bank *outside India* — a USD cheque from a US client, a GBP cheque from a UK relative, sometimes even an INR cheque drawn on an overseas branch. No Indian clearing house can touch it. It moves on what bankers call **collection basis**, and everything about it — the timeline, the charges, the risk — follows from that one word.

One clears. The other gets collected. Hold that distinction and the rest of this post is easy.

### [H2] What "Outstation" Still Means After CTS

There was a time when an outstation cheque physically travelled. Your bank couriered the paper to its branch (or a correspondent) in the drawee's city, that branch presented it in the *local* clearing there, and the proceeds crawled back. Seven to fourteen days was normal. A collection charge was standard. Businesses priced the delay into their terms.

The [Cheque Truncation System](https://cheqify.app/en/blog/cheque-truncation-system-explained) ended the travel. Under CTS, the paper stops at the bank of deposit — only its *image* moves. And once clearing went image-based, geography collapsed: the grid system stitched the country's clearing houses together so that a cheque drawn on Madurai and deposited in Rajkot enters the same electronic cycle as a cheque drawn next door. RBI has pushed CTS coverage to effectively every bank branch, which means the old outstation pipeline barely exists for standard cheques.

What still lands in the slow lane? Genuinely rare cases: a non-CTS-compliant instrument, a cheque drawn on some cooperative-bank branch outside the grid's reach, government instruments with special handling. Those still go the old way — physical dispatch, collection basis, a week or more. If a cheque leaf looks old enough to predate CTS-2010 standards, that's your hint.

### [H2] Timelines — the Fast Lane and the Long Tail

For a CTS cheque — which today means almost every cheque an SMB receives — the drawn-in-another-city question is irrelevant to speed. Deposit before the branch cut-off and it typically presents the same day and pays out the next working day; [the full clearing timeline works exactly like a local cheque](https://cheqify.app/en/blog/cheque-clearing-time-india), because as far as the system is concerned, it *is* one.

For the rare true-collection cheque, RBI requires every bank to publish a **Cheque Collection Policy** with committed timelines — typically of the order of a week for major cities and up to around two weeks for remote locations — and, notably, to *pay you interest* if they sit on it beyond their own stated period. Few businesses know that last part. If a domestic cheque has been "in collection" past the policy timeline, the delay is compensable — ask.

### [H2] "Payable at Par" — Two Words That Deleted the Charges

Look at almost any current cheque leaf and you'll find a line printed on its face: **"payable at par at all branches"** (or "multi-city cheque"). That line is a standing instruction from the drawee bank to treat the cheque as local *everywhere it has a branch* — no outstation treatment, no collection charge, no waiting for proceeds to travel.

At-par printing became the norm alongside CTS-2010 standardisation, and it is the second half of why outstation charges have all but vanished for ordinary payments. Where a true collection *does* still happen, RBI has historically capped what banks may charge on smaller cheques — slabs of the order of ₹50 to ₹150 depending on amount — with banks free to set (and required to disclose) their own tariffs beyond that. Exact figures vary by bank and change over time; the schedule lives in your bank's published tariff card, and it's worth thirty seconds to check yours.

> **The distance a cheque travels stopped mattering the day its image started travelling instead. What you pay for now is not geography — it's currency.**

Which brings us to the cheque that still travels.

### [H2] Foreign Cheques — Collection, Not Clearing

There is no clearing house shared by an Indian bank and a bank in New Jersey. So when you deposit a foreign cheque, your bank doesn't clear it — it *collects* it. The leaf (or its image, where the destination country's rules allow) is dispatched to a **correspondent bank** abroad, which presents it to the drawee bank, waits for the funds, and routes them back through the Indian bank's overseas account. Every arrow in that chain adds days and, usually, a fee.

The honest timeline: **anywhere from two-three weeks to two months**, depending on the currency, the destination country, and whether your bank uses a faster "cash letter" arrangement for that currency or full final collection. Banks typically credit only after they're confident the funds are final — some apply an explicit cooling period even after the money arrives. A USD cheque via a well-oiled cash-letter route might credit in three weeks; an unusual currency on pure collection can take six or more. Nobody — including your branch manager — can promise you an exact date, and any plan that depends on one is a bad plan.

### [H2] The Forex Leg and the Charge Stack

Here's the part that surprises first-time recipients twice.

First, the **conversion date**. Your $1,000 cheque converts to rupees at the bank's buying rate **on the day the funds realise** — not the day you deposited it. If the rupee strengthens during those five weeks, you receive less than you mentally banked on the day the envelope arrived. The exchange-rate risk of the collection period sits entirely with you.

Second, the **charge stack**. A foreign cheque typically pays its way through: your bank's collection commission, the correspondent bank's handling fee (deducted abroad, from the proceeds, before they ever reach India), courier or processing costs, and GST on your bank's charges. None of these are individually dramatic — together, on a small cheque, they are. A $100 cheque can lose a visibly painful slice of itself in transit, which is why banks themselves will gently tell you small foreign cheques are barely worth depositing. On invoice-sized amounts the percentages soften, but the stack never disappears.

### [H2] Purchase vs Collection — and the Recourse Trap

Banks offer two ways to handle a foreign cheque, and the difference matters more than the counter staff usually explain.

**Collection** is the default: you get credited only after the funds actually arrive and are final. Slow, but clean — once credited (and past any cooling period), the money is substantially yours.

**Purchase** (sometimes "instant credit" for established customers): the bank *buys* the cheque from you and credits the money now, charging interest for the days until it realises. Faster — but the credit is **with recourse**. If the cheque is subsequently returned unpaid, the bank debits your account for the full amount plus interest, at whatever exchange rate then applies.

And foreign cheques *can* come back late — much later than any Indian instrument would. Under some countries' rules (the US is the famous example), a paid cheque can still be reversed well after settlement if it turns out to be forged, altered, or drawn on a compromised account. This is the machinery behind the classic overseas cheque scam: a stranger overpays you with a foreign cheque, asks for the difference back by transfer, and the cheque unravels a month after your bank credited it. The rule for an SMB is absolute: **never ship goods, refund a "difference," or spend against a foreign cheque that hasn't finally, boringly, irreversibly realised.**

### [H2] What to Actually Do When an Overseas Cheque Is Offered

Practical playbook, in order of preference:

- **Ask for a wire transfer first.** A SWIFT remittance lands in one to three working days, costs a predictable flat fee, gives you a clean inward-remittance trail for export documentation, and carries none of the recourse risk. For most SMB invoice amounts, the wire wins on every axis. "We don't do wires" from a genuine business client is worth politely pushing back on once.
- **If the cheque is unavoidable, deposit it the day it arrives.** Foreign cheques carry their own validity conventions (often six months, but the drawee country's rules and the drawer's instructions govern) — and every idle day is a day of exchange-rate drift added to five weeks you already can't control.
- **Choose collection over purchase** unless you fully understand the recourse you're signing up for — and price the interest if you do purchase.
- **Get the route in writing.** Ask the branch: cash letter or final collection, expected timeline, total charges including correspondent deductions. Banks publish this; branches quote it when asked.
- **Track it like the long-lived liability it is.** Log the cheque, the deposit date, the expected realisation window, and the invoice it settles — and reconcile when the credit finally lands, net of charges, at the realisation-day rate. A cheque that is "out there" for five weeks and tracked nowhere is how receivables quietly go missing.

The outstation cheque, in 2026, is a solved problem — CTS solved it, and "payable at par" buried the charges. The foreign cheque is not solved and won't be: it's a slow, charged, reversible instrument that occasionally still has to be accepted. Accept it with your eyes open, on collection, tracked to the day it finally becomes rupees.

---

> **A cheque that takes five weeks to clear is exactly the cheque you cannot afford to lose track of.** Cheqify's register tracks every cheque you issue or receive — number, payee, amount, status — from the day it's written to the day it clears, so a slow-collecting instrument is a line item, not a mystery. And every cheque you print rides on 300+ Indian bank layouts with auto amount-in-words. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** What is an outstation cheque?
   **A:** A cheque drawn on a bank branch in a different city from where it's deposited — still in rupees, still on an Indian bank. Historically it travelled physically and attracted collection charges, but under CTS image-based grid clearing, a standard outstation cheque now clears through the same electronic cycle as a local one, usually with no extra charge if the leaf is "payable at par".

2. **Q:** How long does an outstation cheque take to clear in India now?
   **A:** For a CTS-compliant cheque — which is nearly every cheque today — the same as a local cheque: typically presented the same day if deposited before the branch cut-off, with funds available the next working day. Only rare non-CTS instruments go on collection basis, where bank policies commit to roughly a week for major cities and up to about two weeks for remote locations.

3. **Q:** Do banks still charge for outstation cheque collection?
   **A:** Rarely, for ordinary cheques. "Payable at par at all branches" printing means most cheques are treated as local everywhere the drawee bank has a branch, with no collection charge. Where a true collection still happens (non-CTS or out-of-grid instruments), charges apply per the bank's published tariff — historically capped by RBI in slabs of the order of ₹50–₹150 for smaller amounts. Check your bank's cheque collection policy for exact figures.

4. **Q:** What does "payable at par at all branches" mean on a cheque?
   **A:** It's a printed instruction from the issuing bank to treat the cheque as locally payable at any of its branches across India. The practical effect: no outstation treatment, no collection charges, and no waiting for proceeds to travel between cities. Multi-city at-par printing became standard alongside CTS-2010 cheque formats, and it's on the face of almost every current cheque leaf.

5. **Q:** How long does a foreign cheque take to clear in India?
   **A:** Typically three to eight weeks, sometimes longer. Foreign cheques aren't cleared — they're sent on collection through a correspondent bank abroad, which presents them to the drawee bank and routes the funds back. The timeline depends on the currency, the destination country, and whether the bank uses a faster cash-letter arrangement; some banks also apply a cooling period after the funds arrive. No exact date can be promised.

6. **Q:** Can a foreign cheque be returned after the money is credited to my account?
   **A:** Yes — this is the recourse trap. If the bank "purchased" the cheque or gave early credit, and the cheque is later returned (some countries allow reversal well after settlement for forgery or fraud), the bank debits your account for the full amount plus interest. This mechanism powers the classic overseas-cheque overpayment scam. Never ship goods or refund any "excess" against a foreign cheque that hasn't finally realised.

7. **Q:** Is a wire transfer better than a foreign cheque for receiving money from abroad?
   **A:** Almost always. A SWIFT wire lands in one to three working days with a predictable flat fee, provides a clean inward-remittance record for export documentation, and can't be reversed the way a foreign cheque can. A foreign cheque takes weeks, converts at the realisation-day rate (so you carry the exchange risk), and loses a slice to correspondent and collection charges. Ask for the wire first; accept the cheque only when there's no alternative.

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

एक ही Tuesday सुबह Rajkot के एक small exporter के office में दो cheques पहुँचते हैं. एक Madurai की एक bank branch पर drawn है — एक domestic buyer एक invoice settle कर रहा है. दूसरा New Jersey के एक client का US-dollar cheque है जो, उसके words में, "wire transfers नहीं करता."

दोनों signature वाले paper के rectangles हैं. सिर्फ़ एक cheque की तरह behave करेगा.

Madurai वाला leaf एक-दो दिन में clear हो जाएगा, बिलकुल सड़क पार drawn cheque की तरह, क्योंकि जो machinery कभी "outstation" को slow बनाती थी वो पिछले decade में quietly dismantle हो चुकी है. New Jersey वाला cheque कई हफ़्तों की journey पर निकलने वाला है — कम से कम दो banks, एक currency conversion, और charges का एक ऐसा stack जो इसके recipient को कभी आता नहीं दिखता.

ये दोनों की guide है: CTS era में outstation का अब भी क्या मतलब है, दो printed words collection charges के साथ क्या करते हैं, और क्यों एक foreign cheque को clear होने वाले instrument की जगह collect होने वाले parcel की तरह handle किया जाता है.

### [H2] Outstation और Foreign दो अलग Problems हैं

पहले definitions straight कर लें, क्योंकि banks इन्हें बहुत अलग price करते हैं.

एक **outstation cheque** एक *अलग city* की bank branch पर drawn है — rupees, Indian bank, Indian clearing system. कभी इसका मतलब delay और एक collection fee था. आज mostly दोनों में से कुछ नहीं.

एक **foreign cheque** या तो *foreign currency* में लिखा है, या *India के बाहर* की bank पर drawn है — US client का USD cheque, UK के relative का GBP cheque, कभी-कभी overseas branch पर drawn INR cheque भी. कोई Indian clearing house इसे touch नहीं कर सकता. ये उस चीज़ पर move करता है जिसे bankers **collection basis** कहते हैं, और इसके बारे में सब कुछ — timeline, charges, risk — उसी एक word से follow होता है.

एक clear होता है. दूसरा collect होता है. ये distinction पकड़ लें और बाकी post easy है.

### [H2] CTS के बाद "Outstation" का अब भी क्या मतलब है

एक समय था जब outstation cheque physically travel करता था. आपकी bank paper को drawee की city में अपनी branch (या correspondent) को courier करती, वो branch इसे वहाँ की *local* clearing में present करती, और proceeds रेंगते हुए वापस आते. सात से चौदह दिन normal था. Collection charge standard था. Businesses delay को अपनी terms में price करते थे.

[Cheque Truncation System](https://cheqify.app/hi/blog/cheque-truncation-system-explained) ने travel खत्म कर दिया. CTS के under, paper deposit की bank पर रुक जाता है — सिर्फ़ इसकी *image* move होती है. और जब clearing image-based हो गई, geography collapse हो गई: grid system ने देश के clearing houses को ऐसे जोड़ दिया कि Madurai पर drawn और Rajkot में deposited cheque उसी electronic cycle में enter करता है जिसमें बगल में drawn cheque. RBI ने CTS coverage को effectively हर bank branch तक push किया है, यानी standard cheques के लिए पुरानी outstation pipeline मुश्किल से exist करती है.

Slow lane में अब भी क्या land होता है? Genuinely rare cases: एक non-CTS-compliant instrument, grid की reach के बाहर किसी cooperative-bank branch पर drawn cheque, special handling वाले government instruments. वो अब भी पुराने रास्ते जाते हैं — physical dispatch, collection basis, एक हफ़्ता या ज़्यादा. अगर कोई cheque leaf इतना पुराना दिखे कि CTS-2010 standards से पहले का हो, वही आपका hint है.

### [H2] Timelines — Fast Lane और Long Tail

एक CTS cheque के लिए — जो आज मतलब almost हर cheque जो एक SMB receive करता है — दूसरी-city-में-drawn वाला सवाल speed के लिए irrelevant है. Branch cut-off से पहले deposit करें और ये typically same day present होता है और अगले working day pay out — [पूरी clearing timeline बिलकुल एक local cheque की तरह काम करती है](https://cheqify.app/hi/blog/cheque-clearing-time-india), क्योंकि system की नज़र में ये local *है ही*.

Rare true-collection cheque के लिए, RBI हर bank से एक **Cheque Collection Policy** publish करवाता है committed timelines के साथ — typically major cities के लिए एक हफ़्ते के order की और remote locations के लिए around दो हफ़्ते तक — और, notably, अगर वो अपने ही stated period से आगे इस पर बैठे रहें तो *आपको interest pay करने* की. आख़िरी part कम businesses जानते हैं. अगर कोई domestic cheque policy timeline के past "in collection" है, delay compensable है — पूछिए.

### [H2] "Payable at Par" — दो Words जिन्होंने Charges Delete कर दिए

Almost किसी भी current cheque leaf को देखें और इसके face पर एक line printed मिलेगी: **"payable at par at all branches"** (या "multi-city cheque"). वो line drawee bank का standing instruction है कि cheque को *हर जगह जहाँ उसकी branch है* local treat किया जाए — कोई outstation treatment नहीं, कोई collection charge नहीं, proceeds के travel करने का कोई इंतज़ार नहीं.

At-par printing CTS-2010 standardisation के साथ-साथ norm बन गई, और यही दूसरा आधा हिस्सा है कि ordinary payments के लिए outstation charges क्यों almost गायब हो गए हैं. जहाँ true collection अब भी *होती* है, RBI ने historically छोटे cheques पर banks के charges cap किए हैं — amount के हिसाब से ₹50 से ₹150 के order के slabs — उसके आगे banks अपने tariffs set करने (और disclose करने) के लिए free हैं. Exact figures bank-by-bank vary करते हैं और time के साथ बदलते हैं; schedule आपकी bank के published tariff card में रहता है, और अपना check करने के तीस seconds worth it हैं.

> **Cheque कितनी दूर travel करता है, ये matter करना उसी दिन बंद हो गया जिस दिन इसकी image ने travel करना शुरू किया. अब आप जिसके लिए pay करते हैं वो geography नहीं है — currency है.**

जो हमें उस cheque पर लाता है जो अब भी travel करता है.

### [H2] Foreign Cheques — Collection, Clearing नहीं

एक Indian bank और New Jersey की bank का कोई shared clearing house नहीं है. तो जब आप एक foreign cheque deposit करते हैं, आपकी bank इसे clear नहीं करती — *collect* करती है. Leaf (या इसकी image, जहाँ destination country के rules allow करें) abroad एक **correspondent bank** को dispatch होता है, जो इसे drawee bank को present करती है, funds का इंतज़ार करती है, और उन्हें Indian bank के overseas account के through वापस route करती है. उस chain का हर arrow दिन जोड़ता है और, usually, एक fee.

Honest timeline: **दो-तीन हफ़्तों से दो महीने तक कुछ भी**, currency, destination country, और इस पर depend करते हुए कि आपकी bank उस currency के लिए faster "cash letter" arrangement use करती है या full final collection. Banks typically तभी credit करती हैं जब वो confident हों कि funds final हैं — कुछ पैसा आने के बाद भी एक explicit cooling period apply करती हैं. Well-oiled cash-letter route से एक USD cheque तीन हफ़्तों में credit हो सकता है; pure collection पर एक unusual currency छह या ज़्यादा ले सकती है. कोई भी — आपका branch manager भी — आपसे exact date promise नहीं कर सकता, और जो plan किसी exact date पर depend करता है वो bad plan है.

### [H2] Forex Leg और Charge Stack

यहाँ वो part है जो first-time recipients को दो बार surprise करता है.

पहला, **conversion date**. आपका $1,000 cheque rupees में bank की buying rate पर convert होता है **उस दिन जब funds realise होते हैं** — उस दिन नहीं जब आपने deposit किया. अगर उन पाँच हफ़्तों में rupee strengthen हो जाए, आप उससे कम receive करते हैं जो envelope आने के दिन आपने mentally bank कर लिया था. Collection period का exchange-rate risk पूरी तरह आपके पास बैठता है.

दूसरा, **charge stack**. एक foreign cheque typically अपना रास्ता इनसे pay करता है: आपकी bank का collection commission, correspondent bank की handling fee (abroad ही, proceeds में से, India पहुँचने से पहले deduct), courier या processing costs, और bank के charges पर GST. इनमें से कोई अकेले dramatic नहीं है — छोटे cheque पर, साथ में, हैं. एक $100 cheque transit में अपना एक visibly painful slice खो सकता है, यही वजह है कि banks खुद आपको gently बताएँगी कि छोटे foreign cheques deposit करने layak मुश्किल से हैं. Invoice-sized amounts पर percentages soften होते हैं, पर stack कभी गायब नहीं होता.

### [H2] Purchase vs Collection — और Recourse Trap

Banks foreign cheque handle करने के दो तरीके offer करती हैं, और फ़र्क़ उससे ज़्यादा matter करता है जितना counter staff usually explain करता है.

**Collection** default है: आपको credit तभी मिलता है जब funds actually आ जाएँ और final हों. Slow, पर clean — एक बार credited (और किसी cooling period के past), पैसा substantially आपका है.

**Purchase** (established customers के लिए कभी-कभी "instant credit"): bank cheque आपसे *खरीद* लेती है और पैसा अभी credit करती है, realise होने तक के दिनों का interest charge करते हुए. Faster — पर credit **with recourse** है. अगर cheque बाद में unpaid return होता है, bank आपके account से पूरा amount plus interest debit करती है, उस समय जो भी exchange rate apply हो उस पर.

और foreign cheques late वापस *आ सकते हैं* — किसी भी Indian instrument से बहुत late. कुछ countries के rules के under (US famous example है), एक paid cheque settlement के काफ़ी बाद भी reverse हो सकता है अगर वो forged, altered, या compromised account पर drawn निकले. यही classic overseas cheque scam के पीछे की machinery है: एक stranger आपको foreign cheque से overpay करता है, difference transfer से वापस माँगता है, और cheque आपकी bank के credit करने के एक महीने बाद unravel होता है. SMB के लिए rule absolute है: **किसी ऐसे foreign cheque के against कभी goods ship न करें, कोई "difference" refund न करें, या spend न करें जो finally, boringly, irreversibly realise नहीं हुआ.**

### [H2] जब Overseas Cheque Offer हो तो Actually क्या करें

Practical playbook, preference के order में:

- **पहले wire transfer माँगें.** एक SWIFT remittance एक से तीन working days में land होता है, predictable flat fee cost करता है, export documentation के लिए एक clean inward-remittance trail देता है, और इसमें कोई recourse risk नहीं. ज़्यादातर SMB invoice amounts के लिए, wire हर axis पर जीतता है. Genuine business client से "we don't do wires" पर एक बार politely push back करना worth it है.
- **अगर cheque unavoidable है, जिस दिन आए उसी दिन deposit करें.** Foreign cheques की अपनी validity conventions हैं (often छह महीने, पर drawee country के rules और drawer के instructions govern करते हैं) — और हर idle day उन पाँच हफ़्तों में exchange-rate drift का एक और दिन जोड़ता है जो पहले से आपके control में नहीं.
- **Purchase की जगह collection चुनें** जब तक आप पूरी तरह न समझें कि आप किस recourse के लिए sign कर रहे हैं — और purchase करें तो interest price करें.
- **Route writing में लें.** Branch से पूछें: cash letter या final collection, expected timeline, correspondent deductions समेत total charges. Banks ये publish करती हैं; पूछने पर branches quote करती हैं.
- **इसे उस long-lived liability की तरह track करें जो ये है.** Cheque, deposit date, expected realisation window, और जो invoice ये settle करता है, log करें — और जब credit finally land हो, charges के net, realisation-day rate पर, reconcile करें. एक cheque जो पाँच हफ़्ते "out there" है और कहीं tracked नहीं — receivables ऐसे ही quietly गायब होते हैं.

Outstation cheque, 2026 में, एक solved problem है — CTS ने इसे solve किया, और "payable at par" ने charges दफ़ना दिए. Foreign cheque solved नहीं है और होगा भी नहीं: ये एक slow, charged, reversible instrument है जिसे occasionally फिर भी accept करना पड़ता है. इसे खुली आँखों से accept करें, collection पर, उस दिन तक tracked जब ये finally rupees बन जाए.

---

> **जो cheque clear होने में पाँच हफ़्ते लेता है, वही cheque है जिसका track खोना आप afford नहीं कर सकते.** Cheqify का register आपके issue या receive किए हर cheque को track करता है — number, payee, amount, status — लिखे जाने के दिन से clear होने के दिन तक, ताकि एक slow-collecting instrument एक line item हो, mystery नहीं. और हर cheque जो आप print करते हैं 300+ Indian bank layouts पर auto amount-in-words के साथ. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

એક જ Tuesday સવારે Rajkot ના એક small exporter ની office માં બે cheques પહોંચે છે. એક Madurai ની એક bank branch પર drawn છે — એક domestic buyer એક invoice settle કરી રહ્યો છે. બીજો New Jersey ના એક client નો US-dollar cheque છે જે, એના words માં, "wire transfers નથી કરતો."

બંને signature વાળા paper ના rectangles છે. ફક્ત એક cheque ની જેમ behave કરશે.

Madurai વાળું leaf એક-બે દિવસમાં clear થઈ જશે, બિલકુલ શેરી પાર drawn cheque ની જેમ, કારણ કે જે machinery ક્યારેક "outstation" ને slow બનાવતી હતી એ છેલ્લા decade માં quietly dismantle થઈ ચૂકી છે. New Jersey વાળો cheque ઘણા અઠવાડિયાની journey પર નીકળવાનો છે — ઓછામાં ઓછી બે banks, એક currency conversion, અને charges નો એક એવો stack જે એના recipient ને ક્યારેય આવતો દેખાતો નથી.

આ બંનેની guide છે: CTS era માં outstation નો હજુ પણ શું અર્થ છે, બે printed words collection charges સાથે શું કરે છે, અને કેમ એક foreign cheque ને clear થતા instrument ની જગ્યાએ collect થતા parcel ની જેમ handle કરાય છે.

### [H2] Outstation અને Foreign બે અલગ Problems છે

પહેલા definitions straight કરી લો, કારણ કે banks આમને બહુ અલગ price કરે છે.

એક **outstation cheque** એક *અલગ city* ની bank branch પર drawn છે — rupees, Indian bank, Indian clearing system. ક્યારેક એનો અર્થ delay અને એક collection fee હતો. આજે mostly બંનેમાંથી કંઈ નહીં.

એક **foreign cheque** કાં તો *foreign currency* માં લખાયો છે, કાં *India ની બહાર* ની bank પર drawn છે — US client નો USD cheque, UK ના relative નો GBP cheque, ક્યારેક overseas branch પર drawn INR cheque પણ. કોઈ Indian clearing house આને touch નથી કરી શકતું. આ એ વસ્તુ પર move કરે છે જેને bankers **collection basis** કહે છે, અને આના વિશે બધું — timeline, charges, risk — એ જ એક word માંથી follow થાય છે.

એક clear થાય છે. બીજો collect થાય છે. આ distinction પકડી લો અને બાકીની post easy છે.

### [H2] CTS પછી "Outstation" નો હજુ પણ શું અર્થ છે

એક સમય હતો જ્યારે outstation cheque physically travel કરતો હતો. તમારી bank paper ને drawee ની city માં પોતાની branch (કે correspondent) ને courier કરતી, એ branch આને ત્યાંની *local* clearing માં present કરતી, અને proceeds ઘસડાતા પાછા આવતા. સાતથી ચૌદ દિવસ normal હતું. Collection charge standard હતો. Businesses delay ને પોતાની terms માં price કરતા હતા.

[Cheque Truncation System](https://cheqify.app/gu/blog/cheque-truncation-system-explained) એ travel ખતમ કરી દીધું. CTS ની under, paper deposit ની bank પર રોકાઈ જાય છે — ફક્ત એની *image* move થાય છે. અને જ્યારે clearing image-based થઈ ગઈ, geography collapse થઈ ગઈ: grid system એ દેશના clearing houses ને એવા જોડી દીધા કે Madurai પર drawn અને Rajkot માં deposited cheque એ જ electronic cycle માં enter કરે છે જેમાં બાજુમાં drawn cheque. RBI એ CTS coverage ને effectively દરેક bank branch સુધી push કરી છે, એટલે standard cheques માટે જૂની outstation pipeline ભાગ્યે જ exist કરે છે.

Slow lane માં હજુ પણ શું land થાય છે? Genuinely rare cases: એક non-CTS-compliant instrument, grid ની reach ની બહાર કોઈ cooperative-bank branch પર drawn cheque, special handling વાળા government instruments. એ હજુ પણ જૂના રસ્તે જાય છે — physical dispatch, collection basis, એક અઠવાડિયું કે વધારે. જો કોઈ cheque leaf એટલું જૂનું દેખાય કે CTS-2010 standards પહેલાનું હોય, એ જ તમારો hint છે.

### [H2] Timelines — Fast Lane અને Long Tail

એક CTS cheque માટે — જે આજે અર્થ almost દરેક cheque જે એક SMB receive કરે છે — બીજી-city-માં-drawn વાળો સવાલ speed માટે irrelevant છે. Branch cut-off પહેલા deposit કરો અને આ typically same day present થાય છે અને આગલા working day pay out — [આખી clearing timeline બિલકુલ એક local cheque ની જેમ કામ કરે છે](https://cheqify.app/gu/blog/cheque-clearing-time-india), કારણ કે system ની નજરમાં આ local *છે જ*.

Rare true-collection cheque માટે, RBI દરેક bank પાસે એક **Cheque Collection Policy** publish કરાવે છે committed timelines સાથે — typically major cities માટે એક અઠવાડિયાના order ની અને remote locations માટે around બે અઠવાડિયા સુધી — અને, notably, જો એ પોતાના જ stated period થી આગળ આના પર બેસી રહે તો *તમને interest pay કરવાની*. છેલ્લો part ઓછા businesses જાણે છે. જો કોઈ domestic cheque policy timeline ની past "in collection" છે, delay compensable છે — પૂછો.

### [H2] "Payable at Par" — બે Words જેમણે Charges Delete કરી દીધા

Almost કોઈ પણ current cheque leaf ને જુઓ અને એના face પર એક line printed મળશે: **"payable at par at all branches"** (કે "multi-city cheque"). એ line drawee bank નું standing instruction છે કે cheque ને *દરેક જગ્યાએ જ્યાં એની branch છે* local treat કરાય — કોઈ outstation treatment નહીં, કોઈ collection charge નહીં, proceeds ના travel કરવાની કોઈ રાહ નહીં.

At-par printing CTS-2010 standardisation ની સાથે-સાથે norm બની ગઈ, અને આ જ બીજો અડધો ભાગ છે કે ordinary payments માટે outstation charges કેમ almost ગાયબ થઈ ગયા છે. જ્યાં true collection હજુ પણ *થાય* છે, RBI એ historically નાના cheques પર banks ના charges cap કર્યા છે — amount પ્રમાણે ₹50 થી ₹150 ના order ના slabs — એનાથી આગળ banks પોતાના tariffs set કરવા (અને disclose કરવા) free છે. Exact figures bank-by-bank vary કરે છે અને time સાથે બદલાય છે; schedule તમારી bank ના published tariff card માં રહે છે, અને પોતાનું check કરવાની ત્રીસ seconds worth it છે.

> **Cheque કેટલું દૂર travel કરે છે, એ matter કરવાનું એ જ દિવસે બંધ થઈ ગયું જે દિવસે એની image એ travel કરવાનું શરૂ કર્યું. હવે તમે જેના માટે pay કરો છો એ geography નથી — currency છે.**

જે અમને એ cheque પર લાવે છે જે હજુ પણ travel કરે છે.

### [H2] Foreign Cheques — Collection, Clearing નહીં

એક Indian bank અને New Jersey ની bank નું કોઈ shared clearing house નથી. તો જ્યારે તમે એક foreign cheque deposit કરો છો, તમારી bank આને clear નથી કરતી — *collect* કરે છે. Leaf (કે એની image, જ્યાં destination country ના rules allow કરે) abroad એક **correspondent bank** ને dispatch થાય છે, જે આને drawee bank ને present કરે છે, funds ની રાહ જુએ છે, અને એમને Indian bank ના overseas account ની through પાછા route કરે છે. એ chain નું દરેક arrow દિવસો ઉમેરે છે અને, usually, એક fee.

Honest timeline: **બે-ત્રણ અઠવાડિયાથી બે મહિના સુધી કંઈ પણ**, currency, destination country, અને આના પર depend કરતા કે તમારી bank એ currency માટે faster "cash letter" arrangement use કરે છે કે full final collection. Banks typically ત્યારે જ credit કરે છે જ્યારે એ confident હોય કે funds final છે — કેટલીક પૈસા આવ્યા પછી પણ એક explicit cooling period apply કરે છે. Well-oiled cash-letter route થી એક USD cheque ત્રણ અઠવાડિયામાં credit થઈ શકે છે; pure collection પર એક unusual currency છ કે વધારે લઈ શકે છે. કોઈ પણ — તમારો branch manager પણ — તમને exact date promise નથી કરી શકતો, અને જે plan કોઈ exact date પર depend કરે છે એ bad plan છે.

### [H2] Forex Leg અને Charge Stack

અહીં એ part છે જે first-time recipients ને બે વાર surprise કરે છે.

પહેલું, **conversion date**. તમારો $1,000 cheque rupees માં bank ની buying rate પર convert થાય છે **એ દિવસે જ્યારે funds realise થાય છે** — એ દિવસે નહીં જ્યારે તમે deposit કર્યો. જો એ પાંચ અઠવાડિયામાં rupee strengthen થઈ જાય, તમે એનાથી ઓછું receive કરો છો જે envelope આવ્યાના દિવસે તમે mentally bank કરી લીધું હતું. Collection period નું exchange-rate risk આખું તમારી પાસે બેસે છે.

બીજું, **charge stack**. એક foreign cheque typically પોતાનો રસ્તો આનાથી pay કરે છે: તમારી bank નું collection commission, correspondent bank ની handling fee (abroad જ, proceeds માંથી, India પહોંચતા પહેલા deduct), courier કે processing costs, અને bank ના charges પર GST. આમાંથી કોઈ એકલું dramatic નથી — નાના cheque પર, સાથે, છે. એક $100 cheque transit માં પોતાનો એક visibly painful slice ખોઈ શકે છે, આ જ કારણ છે કે banks પોતે તમને gently કહેશે કે નાના foreign cheques deposit કરવા layak ભાગ્યે જ છે. Invoice-sized amounts પર percentages soften થાય છે, પણ stack ક્યારેય ગાયબ નથી થતો.

### [H2] Purchase vs Collection — અને Recourse Trap

Banks foreign cheque handle કરવાની બે રીતો offer કરે છે, અને ફરક એનાથી વધારે matter કરે છે જેટલું counter staff usually explain કરે છે.

**Collection** default છે: તમને credit ત્યારે જ મળે છે જ્યારે funds actually આવી જાય અને final હોય. Slow, પણ clean — એક વાર credited (અને કોઈ cooling period ની past), પૈસા substantially તમારા છે.

**Purchase** (established customers માટે ક્યારેક "instant credit"): bank cheque તમારી પાસેથી *ખરીદી* લે છે અને પૈસા હમણાં credit કરે છે, realise થવા સુધીના દિવસોનું interest charge કરતા. Faster — પણ credit **with recourse** છે. જો cheque પછી unpaid return થાય છે, bank તમારા account માંથી આખું amount plus interest debit કરે છે, એ સમયે જે પણ exchange rate apply થાય એના પર.

અને foreign cheques late પાછા *આવી શકે છે* — કોઈ પણ Indian instrument થી ઘણા late. કેટલાક countries ના rules ની under (US famous example છે), એક paid cheque settlement ના ઘણા પછી પણ reverse થઈ શકે છે જો એ forged, altered, કે compromised account પર drawn નીકળે. આ જ classic overseas cheque scam ની પાછળની machinery છે: એક stranger તમને foreign cheque થી overpay કરે છે, difference transfer થી પાછું માંગે છે, અને cheque તમારી bank ના credit કર્યાના એક મહિના પછી unravel થાય છે. SMB માટે rule absolute છે: **કોઈ એવા foreign cheque ની against ક્યારેય goods ship ન કરો, કોઈ "difference" refund ન કરો, કે spend ન કરો જે finally, boringly, irreversibly realise નથી થયો.**

### [H2] જ્યારે Overseas Cheque Offer થાય ત્યારે Actually શું કરવું

Practical playbook, preference ના order માં:

- **પહેલા wire transfer માંગો.** એક SWIFT remittance એકથી ત્રણ working days માં land થાય છે, predictable flat fee cost કરે છે, export documentation માટે એક clean inward-remittance trail આપે છે, અને આમાં કોઈ recourse risk નથી. મોટાભાગના SMB invoice amounts માટે, wire દરેક axis પર જીતે છે. Genuine business client પાસેથી "we don't do wires" પર એક વાર politely push back કરવું worth it છે.
- **જો cheque unavoidable છે, જે દિવસે આવે એ જ દિવસે deposit કરો.** Foreign cheques ની પોતાની validity conventions છે (often છ મહિના, પણ drawee country ના rules અને drawer ના instructions govern કરે છે) — અને દરેક idle day એ પાંચ અઠવાડિયામાં exchange-rate drift નો એક વધુ દિવસ ઉમેરે છે જે પહેલેથી તમારા control માં નથી.
- **Purchase ની જગ્યાએ collection પસંદ કરો** જ્યાં સુધી તમે પૂરી રીતે ન સમજો કે તમે કયા recourse માટે sign કરી રહ્યા છો — અને purchase કરો તો interest price કરો.
- **Route writing માં લો.** Branch ને પૂછો: cash letter કે final collection, expected timeline, correspondent deductions સહિત total charges. Banks આ publish કરે છે; પૂછવા પર branches quote કરે છે.
- **આને એ long-lived liability ની જેમ track કરો જે આ છે.** Cheque, deposit date, expected realisation window, અને જે invoice આ settle કરે છે, log કરો — અને જ્યારે credit finally land થાય, charges ના net, realisation-day rate પર, reconcile કરો. એક cheque જે પાંચ અઠવાડિયા "out there" છે અને ક્યાંય tracked નથી — receivables આમ જ quietly ગાયબ થાય છે.

Outstation cheque, 2026 માં, એક solved problem છે — CTS એ આને solve કર્યો, અને "payable at par" એ charges દફનાવી દીધા. Foreign cheque solved નથી અને થશે પણ નહીં: આ એક slow, charged, reversible instrument છે જેને occasionally તો પણ accept કરવો પડે છે. આને ખુલ્લી આંખે accept કરો, collection પર, એ દિવસ સુધી tracked જ્યારે આ finally rupees બની જાય.

---

> **જે cheque clear થવામાં પાંચ અઠવાડિયા લે છે, એ જ cheque છે જેનું track ખોવું તમે afford નથી કરી શકતા.** Cheqify નું register તમારા issue કે receive કરેલા દરેક cheque ને track કરે છે — number, payee, amount, status — લખાયાના દિવસથી clear થવાના દિવસ સુધી, જેથી એક slow-collecting instrument એક line item હોય, mystery નહીં. અને દરેક cheque જે તમે print કરો છો 300+ Indian bank layouts પર auto amount-in-words સાથે. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## Internal-Link Strategy

**Forward links from this post (LIVE targets only):**
- Post #17 (`cheque-clearing-time-india`) — linked from the Timelines section; this post is its "special cases" sibling.
- Post #22 (`cheque-truncation-system-explained`) — linked from the What-Outstation-Still-Means section; CTS is the machinery that collapsed outstation.

**Bonus internal-link work (after publish):**
- Edit post #17 (`cheque-clearing-time-india`, all 3 locales) to add an "outstation and foreign cheques are the special cases — full guide here" link — strongest reciprocal.
- Edit post #22 (`cheque-truncation-system-explained`, all 3 locales) to link here from any at-par / grid-clearing mention.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The two-envelopes opening, the "one clears, the other gets collected" refrain, and the recourse-scam passage carry the voice.
- **Fact-check block (CRITICAL) — verify before publish:**
  1. **CTS coverage** — RBI mandated pan-India CTS availability across bank branches (phased through 2021); body says "effectively every bank branch" — confirm current status.
  2. **Cheque Collection Policy timelines + delay interest** — RBI requires banks to publish CCPs with committed outstation/collection timelines and compensation (interest) for delay beyond them; figures kept directional ("order of a week / up to around two weeks") — verify against a current major-bank CCP.
  3. **Outstation collection charge slabs** — the historical RBI caps (order of ₹50/₹100/₹150 by amount for savings accounts) are stated as historical and directional; confirm framing still holds.
  4. **Foreign cheque timelines** — "two-three weeks to two months" and cash-letter vs final-collection distinction are directional per major-bank published policies; safe as hedged.
  5. **US late-return / recourse** — a paid US cheque can be reversed after settlement for forgery/alteration (UCC-based); framed generally ("some countries' rules") — safe.
  6. **Conversion at realisation-date buying rate** — standard bank practice per FX cheque-collection policies; verify wording against one bank's policy.
- **Internal link order:** #17 and #22 are both LIVE — safe, no sequencing risk.
- **Word count:** EN body must be >1200 words (target 1,700–2,100). Current draft: ~1,850 words.
- **Sanity toggles:** `isHowTo: OFF`, `hasFaq: ON` (7 items).
- **Slug sanity-check after publish:** exact string `outstation-foreign-cheque-clearing-india` — no stray tag characters (see slug-corruption gotcha).

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — posts #17 and #22 (strongest reciprocals).
5. IndexNow auto-pings on publish.
