# Blog Post #45 — How to Write the Amount in Words on a Cheque — Rules + Examples (2026)

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
- `> **The Rupees line, written perfectly, every time...** / **Rupees line, हर बार perfectly लिखी हुई...** / **Rupees line, દરેક વખતે perfectly લખેલી...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **The figures are for the teller's glance; the words are for the law...** / **Figures teller की glance के लिए हैं; words law के लिए...** / **Figures teller ની glance માટે છે; words law માટે...**` (pull quote in each body) → **Quote**

**Tables:** the worked-examples table in each body pastes as a Sanity table (`@sanity/table` plugin is live).

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

"How to write amount in words on a cheque" is the single highest-intent query in the cheque-writing cluster — the searcher is literally holding a pen over a live leaf. Post #19 covers the whole cheque field-by-field; this post deep-dives the one field that generates the most searches and the most returns (the words/figures mismatch is a routine cheque-return reason, even though Section 18 of the NI Act says words prevail). Product fit is unusually direct: the live `amount-in-words-tool` landing page finally gets its dedicated supporting article, and auto amount-in-words is a core Cheqify printing feature — the article's whole arc lands on "or let software write the line." Cluster fit: #19 (fill a cheque correctly), tool landing page (converter).

---

## Sanity Fields

- **Slug:** `how-to-write-amount-in-words-on-cheque`
- **Tags:** `Cheque Guide`, `Cheque Productivity`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** YES (writing the words line correctly, 5 steps)
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Ravi-managed — no fixed date
- **Primary keyword:** `how to write amount in words on cheque`
- **Secondary keywords:** amount in words on cheque example, rupees in words for cheque, cheque amount in words and figures differ, how to write paise on cheque, lakh in words cheque, amount in words converter, why write only on cheque
- **Reading time:** ~7 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/how-to-write-amount-in-words-on-cheque`
  - HI: `https://cheqify.app/hi/blog/how-to-write-amount-in-words-on-cheque`
  - GU: `https://cheqify.app/gu/blog/how-to-write-amount-in-words-on-cheque`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `how-to-write-amount-in-words-on-cheque-cover.webp`
- **Subject:** Extreme close-up of a cheque's "Rupees" line mid-write: a fountain pen finishing the words "One Lakh Eight Thousand Two Hundred Fifty and Fifty Paise Only", the figure box beside it showing 1,08,250.50, a clean strike-through line drawn to the edge. A small magnifier hovers over the word "Only". Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** How to write the amount in words on a cheque — the Rupees line written in Indian numbering with paise, ending in Only, matching the figures exactly.
- **OG image:** Same as cover.

---

## Titles

- **EN:** How to Write the Amount in Words on a Cheque — Rules + Examples (2026)
- **HI:** Cheque पर Amount in Words कैसे लिखें — Rules + Examples (2026)
- **GU:** Cheque પર Amount in Words કેવી રીતે લખવું — Rules + Examples (2026)

---

## Descriptions

- **EN:** The "Rupees" line is where cheques go wrong: a words line that disagrees with the figures is one of India's most routine cheque-return reasons, even though Section 18 of the NI Act says the words prevail. Here are the rules banks actually apply — start at "Rupees" with no gap, Indian numbering, "and X Paise", end with "Only", "/-" after the figures — with worked examples from ₹500 to ₹1.5 crore, and the free converter that writes the line for you.
- **HI:** "Rupees" line वो जगह है जहाँ cheques ग़लत होते हैं: figures से disagree करती एक words line India के सबसे routine cheque-return reasons में से एक है, भले ही NI Act का Section 18 कहता है कि words prevail करते हैं. यहाँ हैं वो rules जो banks actually apply करते हैं — "Rupees" से बिना gap शुरू, Indian numbering, "and X Paise", end में "Only", figures के बाद "/-" — ₹500 से ₹1.5 crore तक worked examples के साथ, और वो free converter जो ये line आपके लिए लिखता है.
- **GU:** "Rupees" line એ જગ્યા છે જ્યાં cheques ખોટા થાય છે: figures થી disagree કરતી એક words line India ના સૌથી routine cheque-return reasons માંથી એક છે, ભલે NI Act નો Section 18 કહે છે કે words prevail કરે છે. અહીં છે એ rules જે banks actually apply કરે છે — "Rupees" થી gap વગર શરૂ, Indian numbering, "and X Paise", end માં "Only", figures પછી "/-" — ₹500 થી ₹1.5 crore સુધીના worked examples સાથે, અને એ free converter જે આ line તમારા માટે લખે છે.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

Watch someone write their tenth cheque of the morning and you can tell exactly where the pen will slow down. Not at the date. Not at the payee's name. At the long line that begins with "Rupees" — the one that asks you to spell out, in full words, a number your keyboard produced in half a second.

Amounts are easy as digits. As words — with lakhs, crores, and the occasional stray paise, written left to right with no room for a do-over — they turn treacherous. And the error costs more than it should: a words line that disagrees with the figures is one of the most routine reasons cheques come back unpaid, complete with a return charge, a week of lost time, and an awkward call to the payee who was expecting the money.

This is the complete method for that one line: the rules banks actually apply, worked examples from ₹500 to ₹1.5 crore, the paise format, what the law does when words and figures fight, and the two-second way to never think about any of this again. (For the other five fields on the leaf, the [field-by-field cheque guide](https://cheqify.app/en/blog/how-to-fill-cheque-correctly) covers the full form.)

### [H2] Why the Words Line Exists at All

A figure is a fragile thing. ₹8,000 becomes ₹80,000 with one confident zero; a 1 slipped in front of 50,000 multiplies it by three-and-a-bit. The words line exists because words resist the pen: turning "Eight Thousand" into "Eighty Thousand" means rewriting a whole word in someone else's handwriting, not adding a digit — and the forgery announces itself.

Banking practice calls the number box the *courtesy amount* and the words line the *legal amount*, and Indian law agrees with the naming. **Section 18 of the Negotiable Instruments Act** settles the tie: where the amount in words and the amount in figures differ, *the amount stated in words* is the amount the cheque orders the bank to pay. The words are the cheque's testimony; the figures are a convenience for the teller's glance.

Another way to see it: the bank is asking for two independent witnesses to the same amount, from the same pen. When both witnesses agree, payment is smooth. When they don't — we'll come to what happens.

Which is exactly why the words line gets scrutinised the way it does. It isn't decoration. It's the tamper seal.

### [H2] The Five Rules of the Rupees Line

**Rule 1 — start at "Rupees", with no gap.** Most Indian cheque leaves pre-print "Rupees" (or "रुपये") at the head of the line; begin writing immediately after it, hard against the printed word. A generous blank space in front of your amount is an open invitation — "Twelve Thousand" becomes "Two Lakh Twelve Thousand" if the gap fits two extra words. If your leaf doesn't pre-print it, "Rupees" is the first word you write.

**Rule 2 — use Indian numbering.** Thousand, lakh, crore — the same units the figure box uses when you group it 1,00,000 rather than 100,000. Write "Ten Lakh", not "One Million": million isn't illegal, but it makes the teller stop, convert, and re-verify, and a words line should never make anyone think. Write the convention the eyes across the counter read at first glance.

**Rule 3 — end with "Only".** The terminal "Only" is a full stop that nothing can follow. "Rupees Five Thousand" leaves the line open for a helpful "Five Hundred" in another hand; "Rupees Five Thousand Only" closes it. This single word is the cheapest fraud prevention in banking. Never skip it.

**Rule 4 — kill the leftover space.** If the words end and the line runs on, draw a single horizontal stroke through the remainder, right to the edge. Same logic as Rule 1: no landing strip for extra words.

**Rule 5 — finish the figure box with "/-".** In the number box, write 12,500/- — the "/-" is the numeric sibling of "Only", a terminator that says *nothing follows, and no paise either*. (When paise exist, the decimal takes its place — more on that below.) And above everything: the words and the figures must say the same amount, to the paisa.

### [H2] Worked Examples — ₹500 to ₹1.5 Crore

| In the figure box | On the Rupees line |
|---|---|
| 500/- | Rupees Five Hundred Only |
| 12,500/- | Rupees Twelve Thousand Five Hundred Only |
| 85,075/- | Rupees Eighty-Five Thousand Seventy-Five Only |
| 2,50,000/- | Rupees Two Lakh Fifty Thousand Only |
| 1,08,250.50 | Rupees One Lakh Eight Thousand Two Hundred Fifty and Fifty Paise Only |
| 1,50,00,000/- | Rupees One Crore Fifty Lakh Only |

Two things to watch in the middle of long amounts. First, the silent zeros: ₹1,00,050 is "Rupees One Lakh Fifty Only" — the words simply skip what the digits pad with zeros, and writing "One Lakh Zero Thousand Fifty" is how you make a teller squint. Second, the word "and": keep it reserved for the paise boundary. "One Lakh and Fifty" reads, to a careful eye, like paise are about to follow; "One Lakh Fifty Only" is unambiguous.

### [H2] Paise — the Part Everyone Fumbles

The pattern is fixed: rupee words, then **and**, then paise words, then **Paise Only**.

₹1,240.75 → "Rupees One Thousand Two Hundred Forty and Seventy-Five Paise Only". Box: 1,240.75 — and note there's no "/-" this time, because "/-" *means* zero paise, and this cheque has seventy-five of them.

The reverse rule matters too: when the amount is whole rupees, don't write "and Zero Paise". "Only" plus "/-" already say it between them, and the extra clause just adds surface area for error.

That's the entire paise doctrine. One connective, one unit word, one terminator.

### [H2] When Words and Figures Disagree — Section 18 vs the Return Memo

On paper, the fight has a referee. Section 18 says the words prevail — so a cheque figured 8,500 and worded "Eight Thousand Only" is, in law, an order to pay eight thousand.

In practice, banks don't referee. Faced with a mismatch, the paying bank does the safe thing and pays neither amount: the cheque returns with the standard reason — amount in words and figures differ — and you collect a return charge, a resentful payee, and a redo. If the cheque was payment against a due debt, you've also just had a bounce conversation you never needed to have. Keeping the two identical belongs on the bounce-prevention list right alongside funding the account — it's one of the few return reasons that is entirely within your control.

> **The figures are for the teller's glance; the words are for the law. When the two disagree, the law reads the words — and the bank, more often than not, reads neither and returns the cheque.**

One more practice point that surprises people: you can't fix a fumbled words line. Since the CTS clearing era, banks refuse cheques with corrections or overwriting in the material fields — amount very much included — however neatly countersigned the change is. A wrong word means a cancelled leaf and a fresh cheque. Budget the thirty seconds; it's cheaper than the return.

### [H2] Lakh or Lakhs, Crore or Crores — the Small Choices

The questions everyone quietly Googles mid-cheque, answered plainly:

- **"Lakh" or "Lakhs"?** Both are accepted everywhere. Pick one and stay consistent within the cheque.
- **"Lakh" or "Lac"?** Banks read both; "Lakh" is the cleaner, standard spelling. Use it.
- **Capitalisation?** Title Case Each Word is the convention and the most readable; ALL CAPS is equally valid.
- **Hyphens?** "Eighty-Five" and "Eighty Five" are both fine. Legibility outranks grammar here.
- **Digits in the words line?** Never. "Rupees 12 Thousand Five Hundred" is half a conversion — either the line is fully in words, or it isn't doing its job.
- **Language?** English and Hindi are both standard, and regional languages are accepted where the bank operates in them. The one rule: a single language for the whole line — don't switch scripts halfway.

None of these small choices will bounce a cheque. Illegibility will — so when in doubt, choose whichever form your handwriting renders clearest.

### [H2] The Two-Second Version

Everything above is learnable, and after twenty cheques it becomes reflex. But no rule says you must do the conversion in your head at all.

Type the figure into Cheqify's [free amount-in-words converter](https://cheqify.app/en/amount-in-words-tool) and it hands back the exact bank-ready line — Indian numbering, paise handled, "Only" terminated — ready to copy onto the leaf. And if you print your cheques through Cheqify itself, the question dissolves entirely: the app generates the words from the figures on every cheque, so the two can never disagree, on any of 300+ Indian bank layouts. The most routine mismatch in Indian clearing simply cannot happen to a printed leaf.

The pen still works. It's just no longer doing arithmetic.

---

> **The Rupees line, written perfectly, every time.** Convert any figure with Cheqify's [free amount-in-words tool](https://cheqify.app/en/amount-in-words-tool), or print the cheque through Cheqify and the words are generated automatically — matched to the figures, on 300+ Indian bank layouts. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** How do you write the amount in words on a cheque?
   **A:** Start immediately after the pre-printed "Rupees" with no gap, write the amount in Indian numbering (thousand, lakh, crore), add any paise as "and X Paise", end with "Only", and draw a line through leftover space. In the number box, write the figures followed by "/-" (or the paise decimal). The words and figures must state exactly the same amount — for example, ₹12,500 is "Rupees Twelve Thousand Five Hundred Only" with 12,500/- in the box.

2. **Q:** Why do we write "Only" after the amount on a cheque?
   **A:** "Only" is a terminator — a full stop nothing can be written after. "Rupees Five Thousand" leaves room for someone to append "Five Hundred"; "Rupees Five Thousand Only" closes the line, so any addition reads as obvious tampering. Together with starting hard against "Rupees" and striking through leftover space, it's the cheapest fraud protection on the cheque.

3. **Q:** What does "/-" mean after the amount in figures?
   **A:** It's the numeric equivalent of "Only" — a terminator saying nothing follows and there are no paise. Write 12,500/- for whole-rupee amounts. When the amount includes paise, don't use "/-"; write the decimal instead (e.g. 1,08,250.50), since "/-" specifically signals zero paise.

4. **Q:** What happens if the amount in words and figures are different on a cheque?
   **A:** Legally, Section 18 of the Negotiable Instruments Act says the amount in words prevails. In practice, banks don't arbitrate — a mismatch is a standard cheque-return reason, so the cheque comes back unpaid with return charges and delay. The law's tie-breaker exists for courts, not counters: always make the words and figures identical.

5. **Q:** How do you write paise in words on a cheque?
   **A:** Rupee words, then "and", then the paise, then "Paise Only" — ₹1,240.75 is "Rupees One Thousand Two Hundred Forty and Seventy-Five Paise Only", with 1,240.75 in the figure box (no "/-" when paise exist). For whole-rupee amounts, don't write "and Zero Paise"; "Only" plus "/-" already cover it.

6. **Q:** Should I write "One Lakh" or "One Lakhs" on a cheque?
   **A:** Both "Lakh" and "Lakhs" are accepted; pick one and stay consistent within the cheque. Prefer "Lakh" over the older "Lac" spelling, and use Indian units (lakh, crore) rather than "million", which forces the teller to convert. So ₹1,00,000 is "Rupees One Lakh Only".

7. **Q:** Can I correct a mistake in the amount in words on a cheque?
   **A:** No. Since the CTS clearing era, banks refuse cheques with corrections or overwriting in material fields like the amount, even if countersigned. Cancel the spoiled leaf and write a fresh cheque — or avoid the mistake entirely by using an amount-in-words converter or printing the cheque, where the words are generated from the figures automatically.

---

## HowTo Steps (Sanity `howToSteps` field — required for HowTo schema)

| # | Name | Text |
|---|---|---|
| 1 | Write the figures first, terminated | In the amount box, write the numerals with Indian comma grouping and end with "/-" for whole rupees (e.g. 12,500/-) or the paise decimal (e.g. 1,08,250.50). This is the amount the words must reproduce exactly. |
| 2 | Convert using Indian numbering | Break the amount into crore → lakh → thousand → hundred: 2,50,000 is "Two Lakh Fifty Thousand", never "million". Skip the silent zeros — ₹1,00,050 is "One Lakh Fifty", not "One Lakh Zero Thousand Fifty". |
| 3 | Start hard against "Rupees" | Begin the words immediately after the pre-printed "Rupees" with no gap, fully in words (no digits mixed in), in one language and one script for the whole line. |
| 4 | Add paise, then close with "Only" | If paise exist, append "and <paise> Paise" before the terminator; end the line with "Only" in every case. Omit "and Zero Paise" for whole-rupee amounts. |
| 5 | Verify the match and strike the leftover | Read the words against the figures once, character by character — a mismatch means cancelling the leaf and writing a fresh one, since banks refuse amount corrections. Then draw a single line through any remaining space. |

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

किसी को सुबह का दसवाँ cheque लिखते देखिए और आप exactly बता सकते हैं कि pen कहाँ slow होगा. Date पर नहीं. Payee के name पर नहीं. उस लंबी line पर जो "Rupees" से शुरू होती है — वो जो आपसे कहती है कि उस number को पूरे words में spell out करें जो आपके keyboard ने आधे second में बना दिया था.

Digits के तौर पर amounts easy हैं. Words के तौर पर — lakhs, crores, और कभी-कभार stray paise के साथ, left से right, बिना किसी do-over की गुंजाइश के — वो treacherous बन जाते हैं. और error अपनी proportion से ज़्यादा cost करती है: figures से disagree करती एक words line cheques के unpaid लौटने के सबसे routine reasons में से एक है — return charge, हफ़्ते भर का खोया time, और उस payee को एक awkward call जो पैसे expect कर रहा था, सब complete.

ये उस एक line का complete method है: वो rules जो banks actually apply करते हैं, ₹500 से ₹1.5 crore तक worked examples, paise का format, law क्या करता है जब words और figures लड़ते हैं, और वो two-second तरीका जिससे आपको इनमें से किसी के बारे में फिर कभी सोचना न पड़े. (Leaf की बाकी पाँच fields के लिए, [field-by-field cheque guide](https://cheqify.app/hi/blog/how-to-fill-cheque-correctly) पूरा form cover करती है.)

### [H2] Words Line Exist ही क्यों करती है

एक figure एक fragile चीज़ है. ₹8,000 एक confident zero से ₹80,000 बन जाता है; 50,000 के आगे slip किया एक 1 उसे तीन गुने से ज़्यादा multiply कर देता है. Words line इसलिए exist करती है क्योंकि words pen का resist करते हैं: "Eight Thousand" को "Eighty Thousand" बनाने का मतलब किसी और की handwriting में एक पूरा word rewrite करना है, digit add करना नहीं — और forgery ख़ुद अपना announcement कर देती है.

Banking practice number box को *courtesy amount* और words line को *legal amount* कहती है, और Indian law इस naming से agree करता है. **Negotiable Instruments Act का Section 18** tie settle करता है: जहाँ words में amount और figures में amount differ करें, *words में stated amount* ही वो amount है जो cheque bank को pay करने का order देता है. Words cheque की गवाही हैं; figures teller की glance के लिए एक convenience.

इसे देखने का एक और तरीका: bank एक ही amount के दो independent witnesses माँगता है, आपकी एक ही कलम से. दोनों गवाह agree करें, payment smooth. Disagree करें — आगे देखेंगे क्या होता है.

यही exact reason है कि words line इतनी scrutinise होती है. ये decoration नहीं है. ये tamper seal है.

### [H2] Rupees Line के पाँच Rules

**Rule 1 — "Rupees" से शुरू करें, बिना gap के.** ज़्यादातर Indian cheque leaves line के head पर "Rupees" (या "रुपये") pre-print करती हैं; printed word के तुरंत बाद, उससे सटाकर लिखना शुरू करें. आपके amount के आगे एक generous blank space एक खुला invitation है — "Twelve Thousand" "Two Lakh Twelve Thousand" बन जाता है अगर gap में दो extra words fit हों. अगर आपकी leaf ये pre-print नहीं करती, तो "Rupees" पहला word है जो आप लिखते हैं.

**Rule 2 — Indian numbering use करें.** Thousand, lakh, crore — वही units जो figure box use करता है जब आप उसे 100,000 की जगह 1,00,000 group करते हैं. "Ten Lakh" लिखें, "One Million" नहीं: million illegal नहीं है, लेकिन वो teller को रोकता है, convert करवाता है, re-verify करवाता है — और एक words line को कभी किसी को सोचने पर मजबूर नहीं करना चाहिए. वो convention लिखें जो counter के पार की आँखें पहली नज़र में पढ़ लें.

**Rule 3 — "Only" पर end करें.** Terminal "Only" एक full stop है जिसके बाद कुछ नहीं आ सकता. "Rupees Five Thousand" line को किसी दूसरे हाथ के helpful "Five Hundred" के लिए खुला छोड़ता है; "Rupees Five Thousand Only" उसे बंद कर देता है. ये अकेला word banking का सबसे सस्ता fraud prevention है. कभी skip न करें.

**Rule 4 — बची हुई space ख़त्म करें.** अगर words ख़त्म हों और line आगे चलती रहे, तो बाकी हिस्से पर एक single horizontal stroke खींच दें, बिल्कुल edge तक. Rule 1 वाला ही logic: extra words के लिए कोई landing strip नहीं.

**Rule 5 — figure box को "/-" से finish करें.** Number box में 12,500/- लिखें — "/-" "Only" का numeric sibling है, एक terminator जो कहता है *आगे कुछ नहीं, और paise भी नहीं*. (जब paise हों, decimal उसकी जगह लेता है — नीचे detail में.) और सबसे ऊपर: words और figures को same amount कहना होगा, paisa तक.

### [H2] Worked Examples — ₹500 से ₹1.5 Crore

| Figure box में | Rupees line पर |
|---|---|
| 500/- | Rupees Five Hundred Only |
| 12,500/- | Rupees Twelve Thousand Five Hundred Only |
| 85,075/- | Rupees Eighty-Five Thousand Seventy-Five Only |
| 2,50,000/- | Rupees Two Lakh Fifty Thousand Only |
| 1,08,250.50 | Rupees One Lakh Eight Thousand Two Hundred Fifty and Fifty Paise Only |
| 1,50,00,000/- | Rupees One Crore Fifty Lakh Only |

Long amounts के बीच में दो चीज़ें watch करें. पहली, silent zeros: ₹1,00,050 है "Rupees One Lakh Fifty Only" — words बस वो skip कर देते हैं जो digits zeros से pad करते हैं, और "One Lakh Zero Thousand Fifty" लिखना teller को squint करवाने का तरीका है. दूसरी, word "and": इसे paise boundary के लिए reserve रखें. "One Lakh and Fifty" एक careful आँख को ऐसे पढ़ाता है जैसे paise आने वाले हों; "One Lakh Fifty Only" unambiguous है.

### [H2] Paise — वो हिस्सा जिसमें सब Fumble करते हैं

Pattern fixed है: rupee words, फिर **and**, फिर paise words, फिर **Paise Only**.

₹1,240.75 → "Rupees One Thousand Two Hundred Forty and Seventy-Five Paise Only". Box: 1,240.75 — और note करें, इस बार कोई "/-" नहीं, क्योंकि "/-" का *मतलब ही* zero paise है, और इस cheque के पास पचहत्तर हैं.

Reverse rule भी matter करता है: जब amount whole rupees हो, "and Zero Paise" न लिखें. "Only" plus "/-" आपस में ये already कह देते हैं, और extra clause बस error के लिए surface add करता है.

बस यही पूरी paise doctrine है. एक connective, एक unit word, एक terminator.

### [H2] जब Words और Figures Disagree करें — Section 18 vs Return Memo

Paper पर, इस लड़ाई का एक referee है. Section 18 कहता है words prevail करते हैं — तो 8,500 figured और "Eight Thousand Only" worded एक cheque, law में, आठ हज़ार pay करने का order है.

Practice में, banks referee नहीं करते. Mismatch के सामने, paying bank safe चीज़ करता है और दोनों में से कोई amount pay नहीं करता: cheque standard reason के साथ return होता है — amount in words और figures differ — और आप collect करते हैं एक return charge, एक resentful payee, और एक redo. अगर cheque किसी due debt के against payment था, तो आपने एक ऐसी bounce conversation भी कर ली जो कभी करनी ही नहीं थी. दोनों को identical रखना bounce-prevention list पर account funding के ठीक बगल में belong करता है — ये उन गिने-चुने return reasons में से एक है जो पूरी तरह आपके control में हैं.

> **Figures teller की glance के लिए हैं; words law के लिए. जब दोनों disagree करते हैं, law words पढ़ता है — और bank, अक्सर, दोनों में से कुछ नहीं पढ़ता और cheque return कर देता है.**

एक और practice point जो लोगों को surprise करता है: fumbled words line आप fix नहीं कर सकते. CTS clearing era से, banks material fields में corrections या overwriting वाले cheques refuse करते हैं — amount बिल्कुल included — चाहे change कितनी भी neatly countersigned हो. एक ग़लत word का मतलब है एक cancelled leaf और एक fresh cheque. तीस seconds budget करें; ये return से सस्ता है.

### [H2] Lakh या Lakhs, Crore या Crores — छोटे Choices

वो questions जो हर कोई cheque के बीच में चुपचाप Google करता है, plainly answered:

- **"Lakh" या "Lakhs"?** दोनों हर जगह accepted हैं. एक pick करें और cheque के अंदर consistent रहें.
- **"Lakh" या "Lac"?** Banks दोनों पढ़ते हैं; "Lakh" cleaner, standard spelling है. वही use करें.
- **Capitalisation?** Title Case Each Word convention है और सबसे readable; ALL CAPS equally valid है.
- **Hyphens?** "Eighty-Five" और "Eighty Five" दोनों fine हैं. यहाँ legibility grammar से ऊपर है.
- **Words line में digits?** कभी नहीं. "Rupees 12 Thousand Five Hundred" आधा conversion है — या तो line पूरी words में है, या वो अपना काम नहीं कर रही.
- **Language?** English और Hindi दोनों standard हैं, और regional languages वहाँ accepted हैं जहाँ bank उनमें operate करता है. एक rule: पूरी line के लिए एक single language — आधे में script switch न करें.

इन छोटे choices में से कोई भी cheque bounce नहीं करवाएगा. Illegibility करवाएगी — तो doubt में, वो form चुनें जो आपकी handwriting सबसे clear render करती है.

### [H2] Two-Second Version

ऊपर का सब कुछ learnable है, और बीस cheques के बाद reflex बन जाता है. लेकिन कोई rule नहीं कहता कि conversion आपको दिमाग़ में ही करना है.

Figure को Cheqify के [free amount-in-words converter](https://cheqify.app/hi/amount-in-words-tool) में type करें और वो exact bank-ready line वापस देता है — Indian numbering, paise handled, "Only" terminated — leaf पर copy करने के लिए ready. और अगर आप अपने cheques Cheqify से ही print करते हैं, तो question पूरी तरह dissolve हो जाता है: app हर cheque पर figures से words generate करता है, तो दोनों कभी disagree कर ही नहीं सकते, 300+ Indian bank layouts में से किसी पर भी. Indian clearing का सबसे routine mismatch एक printed leaf के साथ बस हो ही नहीं सकता.

Pen अब भी काम करता है. बस अब वो arithmetic नहीं कर रहा.

---

> **Rupees line, हर बार perfectly लिखी हुई.** कोई भी figure Cheqify के [free amount-in-words tool](https://cheqify.app/hi/amount-in-words-tool) से convert करें, या cheque Cheqify से print करें और words automatically generate होते हैं — figures से matched, 300+ Indian bank layouts पर. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Gujlish blend, same structure as English. Keep the pull-quote and CTA callout.

---

કોઈને સવારનો દસમો cheque લખતા જુઓ અને તમે exactly કહી શકશો કે pen ક્યાં slow થશે. Date પર નહીં. Payee ના name પર નહીં. એ લાંબી line પર જે "Rupees" થી શરૂ થાય છે — એ જે તમને કહે છે કે એ number ને પૂરા words માં spell out કરો જે તમારા keyboard એ અડધા second માં બનાવી દીધો હતો.

Digits તરીકે amounts easy છે. Words તરીકે — lakhs, crores, અને ક્યારેક stray paise સાથે, left થી right, કોઈ do-over ની ગુંજાઈશ વગર — એ treacherous બની જાય છે. અને error પોતાની proportion થી વધારે cost કરે છે: figures થી disagree કરતી એક words line cheques ના unpaid પાછા આવવાના સૌથી routine reasons માંથી એક છે — return charge, અઠવાડિયાનો ખોવાયેલો time, અને એ payee ને એક awkward call જે પૈસા expect કરી રહ્યો હતો, બધું complete.

આ એ એક line નો complete method છે: એ rules જે banks actually apply કરે છે, ₹500 થી ₹1.5 crore સુધીના worked examples, paise નું format, law શું કરે છે જ્યારે words અને figures લડે છે, અને એ two-second રીત જેથી તમારે આમાંથી કોઈ વિશે ફરી ક્યારેય વિચારવું ન પડે. (Leaf ની બાકીની પાંચ fields માટે, [field-by-field cheque guide](https://cheqify.app/gu/blog/how-to-fill-cheque-correctly) આખું form cover કરે છે.)

### [H2] Words Line Exist જ કેમ કરે છે

એક figure એક fragile વસ્તુ છે. ₹8,000 એક confident zero થી ₹80,000 બની જાય છે; 50,000 ની આગળ slip કરેલો એક 1 એને ત્રણ ગણાથી વધારે multiply કરી દે છે. Words line એટલા માટે exist કરે છે કારણ કે words pen નો resist કરે છે: "Eight Thousand" ને "Eighty Thousand" બનાવવાનો મતલબ કોઈ બીજાની handwriting માં એક આખો word rewrite કરવો છે, digit add કરવો નહીં — અને forgery પોતે પોતાનું announcement કરી દે છે.

Banking practice number box ને *courtesy amount* અને words line ને *legal amount* કહે છે, અને Indian law આ naming થી agree કરે છે. **Negotiable Instruments Act નો Section 18** tie settle કરે છે: જ્યાં words માં amount અને figures માં amount differ કરે, *words માં stated amount* જ એ amount છે જે cheque bank ને pay કરવાનો order આપે છે. Words cheque ની ગવાહી છે; figures teller ની glance માટે એક convenience.

આને જોવાની એક બીજી રીત: bank એક જ amount ના બે independent witnesses માંગે છે, તમારી એક જ કલમથી. બંને ગવાહ agree કરે, payment smooth. Disagree કરે — આગળ જોઈશું શું થાય છે.

આ જ exact reason છે કે words line આટલી scrutinise થાય છે. આ decoration નથી. આ tamper seal છે.

### [H2] Rupees Line ના પાંચ Rules

**Rule 1 — "Rupees" થી શરૂ કરો, gap વગર.** મોટાભાગની Indian cheque leaves line ના head પર "Rupees" (કે "રૂપિયા") pre-print કરે છે; printed word ના તરત પછી, એની સાથે સટાડીને લખવાનું શરૂ કરો. તમારા amount ની આગળ એક generous blank space એક ખુલ્લું invitation છે — "Twelve Thousand" "Two Lakh Twelve Thousand" બની જાય છે જો gap માં બે extra words fit થાય. જો તમારી leaf આ pre-print નથી કરતી, તો "Rupees" પહેલો word છે જે તમે લખો છો.

**Rule 2 — Indian numbering use કરો.** Thousand, lakh, crore — એ જ units જે figure box use કરે છે જ્યારે તમે એને 100,000 ની જગ્યાએ 1,00,000 group કરો છો. "Ten Lakh" લખો, "One Million" નહીં: million illegal નથી, પણ એ teller ને રોકે છે, convert કરાવે છે, re-verify કરાવે છે — અને એક words line એ ક્યારેય કોઈને વિચારવા મજબૂર ન કરવું જોઈએ. એ convention લખો જે counter ની પેલે પારની આંખો પહેલી નજરમાં વાંચી લે.

**Rule 3 — "Only" પર end કરો.** Terminal "Only" એક full stop છે જેના પછી કંઈ નથી આવી શકતું. "Rupees Five Thousand" line ને કોઈ બીજા હાથના helpful "Five Hundred" માટે ખુલ્લી છોડે છે; "Rupees Five Thousand Only" એને બંધ કરી દે છે. આ એકલો word banking નું સૌથી સસ્તું fraud prevention છે. ક્યારેય skip ન કરો.

**Rule 4 — બચેલી space ખતમ કરો.** જો words ખતમ થાય અને line આગળ ચાલતી રહે, તો બાકીના ભાગ પર એક single horizontal stroke ખેંચી દો, બિલકુલ edge સુધી. Rule 1 વાળું જ logic: extra words માટે કોઈ landing strip નહીં.

**Rule 5 — figure box ને "/-" થી finish કરો.** Number box માં 12,500/- લખો — "/-" "Only" નું numeric sibling છે, એક terminator જે કહે છે *આગળ કંઈ નહીં, અને paise પણ નહીં*. (જ્યારે paise હોય, decimal એની જગ્યા લે છે — નીચે detail માં.) અને સૌથી ઉપર: words અને figures એ same amount કહેવો પડશે, paisa સુધી.

### [H2] Worked Examples — ₹500 થી ₹1.5 Crore

| Figure box માં | Rupees line પર |
|---|---|
| 500/- | Rupees Five Hundred Only |
| 12,500/- | Rupees Twelve Thousand Five Hundred Only |
| 85,075/- | Rupees Eighty-Five Thousand Seventy-Five Only |
| 2,50,000/- | Rupees Two Lakh Fifty Thousand Only |
| 1,08,250.50 | Rupees One Lakh Eight Thousand Two Hundred Fifty and Fifty Paise Only |
| 1,50,00,000/- | Rupees One Crore Fifty Lakh Only |

Long amounts ની વચ્ચે બે વસ્તુઓ watch કરો. પહેલી, silent zeros: ₹1,00,050 છે "Rupees One Lakh Fifty Only" — words બસ એ skip કરી દે છે જે digits zeros થી pad કરે છે, અને "One Lakh Zero Thousand Fifty" લખવું teller ને squint કરાવવાની રીત છે. બીજી, word "and": આને paise boundary માટે reserve રાખો. "One Lakh and Fifty" એક careful આંખને એમ વંચાવે છે જાણે paise આવવાના હોય; "One Lakh Fifty Only" unambiguous છે.

### [H2] Paise — એ ભાગ જેમાં બધા Fumble કરે છે

Pattern fixed છે: rupee words, પછી **and**, પછી paise words, પછી **Paise Only**.

₹1,240.75 → "Rupees One Thousand Two Hundred Forty and Seventy-Five Paise Only". Box: 1,240.75 — અને note કરો, આ વખતે કોઈ "/-" નહીં, કારણ કે "/-" નો *મતલબ જ* zero paise છે, અને આ cheque પાસે પંચોતેર છે.

Reverse rule પણ matter કરે છે: જ્યારે amount whole rupees હોય, "and Zero Paise" ન લખો. "Only" plus "/-" અંદરોઅંદર આ already કહી દે છે, અને extra clause બસ error માટે surface add કરે છે.

બસ આ જ આખી paise doctrine છે. એક connective, એક unit word, એક terminator.

### [H2] જ્યારે Words અને Figures Disagree કરે — Section 18 vs Return Memo

Paper પર, આ લડાઈનો એક referee છે. Section 18 કહે છે words prevail કરે છે — તો 8,500 figured અને "Eight Thousand Only" worded એક cheque, law માં, આઠ હજાર pay કરવાનો order છે.

Practice માં, banks referee નથી કરતા. Mismatch ની સામે, paying bank safe વસ્તુ કરે છે અને બંનેમાંથી કોઈ amount pay નથી કરતું: cheque standard reason સાથે return થાય છે — amount in words અને figures differ — અને તમે collect કરો છો એક return charge, એક resentful payee, અને એક redo. જો cheque કોઈ due debt ની against payment હતો, તો તમે એક એવી bounce conversation પણ કરી લીધી જે ક્યારેય કરવાની જ નહોતી. બંનેને identical રાખવું bounce-prevention list પર account funding ની બરાબર બાજુમાં belong કરે છે — આ એ ગણ્યાગાંઠ્યા return reasons માંથી એક છે જે પૂરેપૂરા તમારા control માં છે.

> **Figures teller ની glance માટે છે; words law માટે. જ્યારે બંને disagree કરે છે, law words વાંચે છે — અને bank, ઘણીવાર, બંનેમાંથી કંઈ નથી વાંચતું અને cheque return કરી દે છે.**

એક બીજો practice point જે લોકોને surprise કરે છે: fumbled words line તમે fix નથી કરી શકતા. CTS clearing era થી, banks material fields માં corrections કે overwriting વાળા cheques refuse કરે છે — amount બિલકુલ included — change ગમે તેટલી neatly countersigned હોય. એક ખોટા word નો મતલબ છે એક cancelled leaf અને એક fresh cheque. ત્રીસ seconds budget કરો; આ return થી સસ્તું છે.

### [H2] Lakh કે Lakhs, Crore કે Crores — નાના Choices

એ questions જે દરેક જણ cheque ની વચ્ચે ચુપચાપ Google કરે છે, plainly answered:

- **"Lakh" કે "Lakhs"?** બંને દરેક જગ્યાએ accepted છે. એક pick કરો અને cheque ની અંદર consistent રહો.
- **"Lakh" કે "Lac"?** Banks બંને વાંચે છે; "Lakh" cleaner, standard spelling છે. એ જ use કરો.
- **Capitalisation?** Title Case Each Word convention છે અને સૌથી readable; ALL CAPS equally valid છે.
- **Hyphens?** "Eighty-Five" અને "Eighty Five" બંને fine છે. અહીં legibility grammar થી ઉપર છે.
- **Words line માં digits?** ક્યારેય નહીં. "Rupees 12 Thousand Five Hundred" અડધું conversion છે — કાં તો line પૂરી words માં છે, કાં એ પોતાનું કામ નથી કરી રહી.
- **Language?** English અને Hindi બંને standard છે, અને regional languages ત્યાં accepted છે જ્યાં bank એમાં operate કરે છે. એક rule: આખી line માટે એક single language — અડધેથી script switch ન કરો.

આ નાના choices માંથી કોઈ પણ cheque bounce નહીં કરાવે. Illegibility કરાવશે — તો doubt માં, એ form પસંદ કરો જે તમારી handwriting સૌથી clear render કરે છે.

### [H2] Two-Second Version

ઉપરનું બધું learnable છે, અને વીસ cheques પછી reflex બની જાય છે. પણ કોઈ rule નથી કહેતો કે conversion તમારે મગજમાં જ કરવું પડે.

Figure ને Cheqify ના [free amount-in-words converter](https://cheqify.app/gu/amount-in-words-tool) માં type કરો અને એ exact bank-ready line પાછી આપે છે — Indian numbering, paise handled, "Only" terminated — leaf પર copy કરવા માટે ready. અને જો તમે તમારા cheques Cheqify થી જ print કરો છો, તો question પૂરેપૂરો dissolve થઈ જાય છે: app દરેક cheque પર figures માંથી words generate કરે છે, તો બંને ક્યારેય disagree કરી જ નથી શકતા, 300+ Indian bank layouts માંથી કોઈ પણ પર. Indian clearing નો સૌથી routine mismatch એક printed leaf સાથે બસ થઈ જ નથી શકતો.

Pen હજુ પણ કામ કરે છે. બસ હવે એ arithmetic નથી કરી રહી.

---

> **Rupees line, દરેક વખતે perfectly લખેલી.** કોઈ પણ figure Cheqify ના [free amount-in-words tool](https://cheqify.app/gu/amount-in-words-tool) થી convert કરો, કે cheque Cheqify થી print કરો અને words automatically generate થાય છે — figures સાથે matched, 300+ Indian bank layouts પર. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## Internal-Link Strategy

**Forward links from this post (only two targets — both LIVE):**
- Post #19 (`how-to-fill-cheque-correctly`) — the whole-leaf context, linked in the opening paragraph of each body.
- Tool landing page (`amount-in-words-tool`) — linked in "The Two-Second Version" AND in the CTA callout, all three locales. **Note the URL shape: `https://cheqify.app/{locale}/amount-in-words-tool` — locale-prefixed but NOT under `/blog/`.**

**Bonus internal-link work (after publish):**
- Edit post #19 (`how-to-fill-cheque-correctly`, all 3 locales) to link here from its amount-in-words step — strongest reciprocal.
- Consider adding a "read the full guide" link from the `amount-in-words-tool` landing page body to this post (code change in the repo, not Sanity).

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The pen-hesitation opening, the "two witnesses from the same pen" framing, and the "/-"-as-sibling-of-"Only" run carry the voice.
- **Fact-check before publish:** Section 18 NI Act (amount in words prevails over figures) — verify current wording; CTS-era no-corrections practice (RBI directive prohibiting alterations on cheques cleared through CTS) — verify banks' operational stance; the return-reason is deliberately phrased generically ("amount in words and figures differ") with NO reason-code number cited — keep it that way unless the code is verified.
- **Internal link order:** both targets (#19 and the tool page) are live — safe. Double-check the tool URLs render as `/{locale}/amount-in-words-tool` (no `/blog/`).
- **Word count:** EN body must be >1,200 words (target 1,700–2,100). Current draft: ~1,760 words.
- **Sanity toggles:** `isHowTo: ON` (5 steps), `hasFaq: ON` (7 items).
- **Slug hygiene:** after publish, verify the slug pasted clean as `how-to-write-amount-in-words-on-cheque` per `[[project_sanity_slug_corruption_gotcha]]`.

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — post #19 (all 3 locales) + the tool landing page body link.
5. IndexNow auto-pings on publish.
