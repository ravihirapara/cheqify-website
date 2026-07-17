# Blog Post #50 — Cheque Printing Format & Alignment for SBI, HDFC, ICICI (Any Bank) — The Calibration Guide (2026)

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
- `> **Pick your bank, type the payee, print — aligned on the first leaf...** / **अपना bank pick करें, payee type करें, print करें...** / **તમારી bank pick કરો, payee type કરો, print કરો...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **A cheque has no tolerance for "almost"...** / **एक cheque के पास "almost" के लिए कोई tolerance नहीं...** / **એક cheque પાસે "almost" માટે કોઈ tolerance નથી...**` (pull quote in each body) → **Quote**

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

This is the commercial heart of the blog: Cheqify's core product *is* bank-accurate cheque printing, and "why does my cheque print misalign" / "SBI cheque print format" / "HDFC cheque printing alignment" are the highest-intent searches a cheque-printing SaaS can rank for. The pain is universal and concrete — every bank's leaf puts the date boxes, payee line, amount box, and signature area in different places, so a generic template misprints and spoils leaves. The article teaches the honest manual method (measure, test-print, overlay, nudge, protect the MICR band, save per bank) and then shows that maintaining per-bank offsets by hand is exactly the job Cheqify's 300+ ready Indian bank layouts delete. Cluster fit: #4 (print at home), #7 (print in India), #31 (printer choice), #15 (CTS-2010), and the `online-cheque-printing` landing page — this post is the conversion bridge between all of them.

---

## Sanity Fields

- **Slug:** `bank-cheque-printing-format-alignment`
- **Tags:** `Cheque Productivity`, `Cheque Guide`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** YES (calibrating cheque print alignment for any bank, 6 steps)
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Ravi-managed — no fixed date
- **Primary keyword:** `cheque printing format alignment`
- **Secondary keywords:** SBI cheque print format, HDFC cheque printing alignment, ICICI cheque print template, cheque printer alignment settings, MICR band printing rules, bank cheque template India, cheque misalignment fix
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/bank-cheque-printing-format-alignment`
  - HI: `https://cheqify.app/hi/blog/bank-cheque-printing-format-alignment`
  - GU: `https://cheqify.app/gu/blog/bank-cheque-printing-format-alignment`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `bank-cheque-printing-format-alignment-cover.webp`
- **Subject:** Two cheque leaves from visibly different banks laid side by side on a desk, with faint dotted guide-lines showing how the date boxes, payee line, and amount box sit at different positions on each. A plain-paper test print held slightly above one leaf, edges glowing as if against a window light. A small ruler and a pencil nearby, both crossed out with a subtle green check beside a laptop showing a bank-picker dropdown. Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** Cheque printing format and alignment in India — two bank cheque leaves with different field positions and a plain-paper test print overlay used for calibration.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Cheque Printing Format & Alignment for SBI, HDFC, ICICI — Get Every Field Right (2026)
- **HI:** SBI, HDFC, ICICI के लिए Cheque Printing Format और Alignment — हर Field सही (2026)
- **GU:** SBI, HDFC, ICICI માટે Cheque Printing Format અને Alignment — દરેક Field સાચી (2026)

---

## Descriptions

- **EN:** Your cheque template isn't broken — it's calibrated for a different bank. Every bank's leaf puts the date boxes, payee line, amount box, and signature area in different positions, so one-size printing misaligns and spoils leaves. Here's the calibration guide: how to measure your exact leaf, test-print on plain paper and overlay it against light, nudge offsets safely, keep the MICR band untouched — and how 300+ ready bank layouts make all of it automatic.
- **HI:** आपका cheque template broken नहीं है — वो एक different bank के लिए calibrated है. हर bank का leaf date boxes, payee line, amount box, और signature area को different positions पर रखता है, इसलिए one-size printing misalign होती है और leaves spoil करती है. यहाँ है calibration guide: अपने exact leaf को कैसे measure करें, plain paper पर test-print करके light के against overlay करें, offsets safely nudge करें, MICR band untouched रखें — और 300+ ready bank layouts ये सब कैसे automatic बनाते हैं.
- **GU:** તમારું cheque template broken નથી — એ એક different bank માટે calibrated છે. દરેક bank નું leaf date boxes, payee line, amount box, અને signature area ને different positions પર રાખે છે, એટલે one-size printing misalign થાય છે અને leaves spoil કરે છે. અહીં છે calibration guide: તમારા exact leaf ને કેવી રીતે measure કરવું, plain paper પર test-print કરીને light ની against overlay કરવું, offsets safely nudge કરવા, MICR band untouched રાખવો — અને 300+ ready bank layouts આ બધું કેવી રીતે automatic બનાવે છે.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

Print your first cheque from a desktop template and hold it up. The payee's name has climbed halfway into the date boxes. The amount in words starts too early and dies somewhere over the amount box. The figures sit just outside the box they were meant to fill, like a passenger one row from the right seat.

The template wasn't broken. It was accurate — for a different bank's leaf.

This is the guide to the part of cheque printing nobody warns you about: alignment. Why every bank puts its fields in different places, how to calibrate a template so text lands exactly where the leaf expects it, the one band at the bottom you must never touch, and the version of this job where the ruler stays in the drawer.

### [H2] Why One Template Can't Print Every Cheque

A cheque leaf looks generic until you lay two banks' leaves side by side. Then the differences start shouting.

The date grid — those eight small boxes at the top right — sits at a slightly different height and spacing on an SBI leaf than on an HDFC one. ICICI's payee line starts at a different distance from the left edge than Axis's. Kotak's amount box is not where SBI's amount box is, and it isn't the same width either. The amount-in-words line runs as one long line on some leaves and wraps onto a second line on others. Even the signature area floats.

None of this is carelessness. [CTS-2010 — the RBI's cheque standard](https://cheqify.app/en/blog/cts-2010-cheque-format-compliance-india) — fixes the security features, the paper grade, and the broad layout grammar of Indian cheques. What it deliberately does not do is pin every field to one coordinate. Each bank designs its own leaf inside the standard, and most banks run several leaf variants at once: savings books versus current-account books, old print series versus new, personalised leaves versus counter-issued ones.

So a print template is never "a cheque template." It is a map of one bank's leaf — sometimes of one *variant* of one bank's leaf. Point it at any other leaf and every field lands a few millimetres from home.

### [H2] What Actually Moves Between Bank Leaves

It's worth knowing exactly what varies, because it's more than most people guess:

- **The date grid** — always top right, but its distance from the top edge and the spacing between the eight boxes shift by bank and series. Miss by a little and one digit straddles two boxes.
- **The payee line** — the starting indent, the line's height on the leaf, and its usable length all differ. Some leaves give a generous run; others end the line early to make room for a second amount-in-words row.
- **The amount-in-words line** — single line on some leaves, two lines on others. A template has to know not just where line one starts but where line two begins, or a long amount collapses into overlap.
- **The amount box** — position, width, and where the ₹ symbol sits inside it all move. A box that starts 4 mm further left than your template thinks will slice the first digit.
- **The signature zone** — bottom right on everyone's leaf, but at varying heights above the bottom band, which matters if your template prints "For \<Company Name\>" above the signing space.
- **The leaf itself** — overall dimensions are broadly consistent under CTS-2010, but printable margins differ enough between banks to matter at print resolution.

> **A cheque has no tolerance for "almost." A payee name that drifts into the date boxes, an amount that leaks outside its box — that leaf isn't slightly wrong, it's spoiled. On a cheque, three millimetres is the whole game.**

Now multiply the problem by the number of banks your business banks with — most SMBs run two or three current accounts — and by the leaf variants each bank issues. "Set up a template once" quietly becomes a small, permanent engineering project.

### [H2] The Band You Must Never Print Over

Look at the bottom strip of any cheque: a row of strange-looking digits printed in magnetic ink. That's the MICR band, and it is the one part of the leaf that belongs to machines, not to you.

Clearing systems read those characters magnetically. Your printer's toner and ink are not magnetic — so anything you print into or too close to that band doesn't just look untidy, it can interfere with the read and push the cheque into manual handling, delay, or return. The rule is absolute and simple: **the entire bottom band of the cheque stays untouched.** No signature label drifting low, no crossing line angled into it, no company stamp near it.

CTS-2010 goes further and expects clean, quiet zones around the machine-read areas so image-based clearing captures the leaf without noise. A well-built template treats the bottom of the cheque as a wall: every printable element ends comfortably above it, with margin to spare for the slight feed drift every printer has.

### [H2] The Test-Print Method — Calibration Without Spoiling a Leaf

Here is the honest manual method, the one that costs plain paper instead of cheque leaves:

1. **Identify your exact leaf** — bank *and* variant. An SBI current-account leaf and an SBI savings leaf are different maps; so are two print series of the same book. The template you calibrate belongs to this leaf, not to "SBI".
2. **Measure — never guess** — take a ruler to the real leaf, or start from a template already built for your bank. Note the top offset of the date grid, the left indent of the payee line, the amount box position, and where the words-line sits. Eyeballing from a photo is how leaves get spoiled.
3. **Test-print on plain paper** — print the filled template onto ordinary A4, then hold the sheet over a real cheque against a window or bright light. Every field shows through, and you can see precisely which ones drift and by how much.
4. **Nudge in small steps** — adjust the template's top and left offsets a millimetre at a time and re-test on paper. Two or three rounds usually converge. Resist big corrections; overshooting wastes as many rounds as it saves.
5. **Protect the MICR band** — before the first real print, confirm no element of the template sits near the bottom band, including descenders of the signature label. Then run the first actual leaf.
6. **Save the calibrated template per bank** — name it by bank and series, and never re-measure for that leaf again. When the next cheque book arrives, one plain-paper test confirms the series hasn't changed.

Two practical notes around the mechanics. **Feeding:** ordinary bank-issued books mean single leaves, and single leaves behave best through the printer's manual feed tray with the guide snug against the leaf — a loose guide adds its own millimetre of random drift and no template can calibrate away randomness. Continuous cheque stationery exists for high-volume desks, but for a normal SMB book, single-leaf feeding is the game. **The printer:** any reasonable inkjet or laser can print cheques; lasers hold sharper text and resist moisture better, and [the full printer-selection reasoning is here](https://cheqify.app/en/blog/best-printer-for-cheque-printing). And whatever prints, print the **account-payee crossing** as part of the template — two parallel lines, top-left corner — so the safest form of the cheque is the default form, not an afterthought done by hand.

If you want the complete end-to-end printing workflow around this — filling, fonts, records — the [step-by-step India printing guide](https://cheqify.app/en/blog/how-to-print-cheque-in-india) covers it, and the [home-office version](https://cheqify.app/en/blog/how-to-print-cheque-at-home) covers the small-setup case.

### [H2] Save It Per Bank — and Never Measure Again

Calibration is a one-time cost only if you treat the result as an asset. The failure mode is depressingly common: the offsets live in one Word file on one person's desktop, the person changes, the file drifts, and six months later someone is holding a test print against a window again, re-deriving knowledge the business already paid for.

The fix is a template library: one saved, named, calibrated template per bank per leaf series, stored where the whole team prints from. New cheque book from the same series — print straight away. New series or new bank — one calibration cycle, then that knowledge is banked too.

But notice what you've built by this point: a hand-maintained database of field coordinates for every bank you deal with, kept accurate by ritual and vigilance, in a word processor that was never designed for millimetre work. It functions. It is also exactly the kind of silent, repeated, error-prone maintenance that software should have eaten years ago.

### [H2] The Version Where the Measuring Ends

It did get eaten — that's the punchline of this article.

[Online cheque printing tools](https://cheqify.app/en/online-cheque-printing) hold the field maps *for* you. Cheqify ships **300+ ready Indian bank layouts** — SBI, HDFC, ICICI, Axis, Kotak, and the long tail of public, private, and cooperative banks — each one already carrying that bank's date-grid position, payee indent, amount-box coordinates, words-line wrap, and a hard keep-out zone over the MICR band. You pick your bank from a dropdown, type the payee and amount, and print. The amount in words generates itself. The crossing prints itself. The alignment — the entire subject of the two thousand words above — simply isn't your job anymore.

The plain-paper overlay trick still earns its keep as a first-leaf sanity check on a new printer, because feed mechanisms differ. But that's one test print per printer, not a measuring project per bank. The ruler goes back in the drawer, and stays there.

---

> **Pick your bank, type the payee, print — aligned on the first leaf.** Cheqify ships 300+ ready Indian bank layouts (SBI, HDFC, ICICI, Axis, Kotak and more), so every field lands exactly where your bank's leaf expects it — amount in words auto-generated, account-payee crossing included, MICR band untouched by design. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** Why does my printed cheque come out misaligned?
   **A:** Almost always because the template was built for a different bank's leaf — or a different variant of your bank's leaf. Every bank positions the date boxes, payee line, amount-in-words line, amount box, and signature area differently, so a template calibrated for one leaf lands a few millimetres off on another. Printer feed drift (a loose paper guide) adds smaller random offsets on top. Calibrate against your exact leaf using plain-paper test prints, or use software with a ready layout for your bank.

2. **Q:** Are all Indian bank cheques the same format?
   **A:** They share a standard but not a map. CTS-2010 standardises security features, paper quality, and the broad layout of Indian cheques, so all leaves look like family. But the exact positions of the date grid, payee line, amount box, and signature area are each bank's own design — and banks run multiple leaf variants (savings vs current, old vs new series). That is why one print template cannot fit every bank.

3. **Q:** Can I print over the MICR line at the bottom of a cheque?
   **A:** No — never. The MICR band is printed in magnetic ink and read by machines during clearing; your printer's ink and toner are not magnetic, so printing into or near that band can interfere with the read and push the cheque into manual processing, delay, or return. A safe template keeps every printable element comfortably above the bottom band of the leaf.

4. **Q:** How do I align cheque printing for SBI, HDFC, or ICICI cheques?
   **A:** The same method works for any bank: identify your exact leaf variant, measure the field positions (or start from a bank-specific template), print a test on plain A4, overlay it on a real cheque against light to see the drift, nudge the top/left offsets a millimetre at a time, and re-test until every field lands. Then save that calibrated template under the bank's name so you never repeat the exercise for that series.

5. **Q:** Which printer is best for printing cheques?
   **A:** Any reasonable inkjet or laser printer can print cheques. Lasers have the edge for cheque work — sharper text and toner that resists moisture smudging — and a manual feed tray with a snug paper guide matters more than the brand, because a loose guide adds random alignment drift no template can fix. Bank-issued books mean feeding single leaves; continuous cheque stationery is only for high-volume setups.

6. **Q:** Can I print a cheque on blank paper instead of a bank leaf?
   **A:** No. A valid cheque must be printed on the bank-issued leaf, which carries the MICR band, security features, and CTS-2010 compliant paper. What you print is only the variable content — date, payee, amounts, crossing — onto the pre-printed leaf. Printing an entire cheque on plain paper does not create a payable instrument.

7. **Q:** Does cheque printing software handle bank alignment automatically?
   **A:** Good software does — that's its core job. Cheqify carries 300+ pre-calibrated Indian bank layouts, so selecting your bank sets the date grid, payee indent, amount box, and words-line positions automatically, generates the amount in words, prints the account-payee crossing, and keeps the MICR band untouched by design. A single plain-paper test on a new printer is the only calibration left.

---

## HowTo Steps (Sanity `howToSteps` field — required for HowTo schema)

| # | Name | Text |
|---|---|---|
| 1 | Identify your exact bank leaf | Note the bank AND the leaf variant — savings vs current book, old vs new print series. Field positions differ between variants of the same bank, so the template you calibrate belongs to this specific leaf. |
| 2 | Measure the leaf — never guess | Measure the real leaf with a ruler or start from a bank-specific template: top offset of the date grid, left indent of the payee line, amount box position, and where the amount-in-words line (and any second line) sits. |
| 3 | Test-print on plain paper and overlay | Print the filled template on ordinary A4, hold it over a real cheque against a window or bright light, and mark exactly which fields drift and by how much. This costs paper, not cheque leaves. |
| 4 | Nudge offsets in small steps | Adjust the template's top and left offsets about a millimetre at a time and re-test on paper. Two or three rounds usually converge — avoid big corrections that overshoot. |
| 5 | Keep the MICR band untouched | Before the first real print, confirm no template element — including the signature label — sits in or near the magnetic-ink band at the bottom. That band is machine-read at clearing and must stay completely clear. |
| 6 | Save the calibrated template per bank | Name the template by bank and leaf series and store it where the whole team prints from. New book, same series — print straight away; new series or bank — one calibration cycle, saved forever. |

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

एक desktop template से अपना पहला cheque print करें और उसे उठाकर देखें. Payee का नाम date boxes में आधा चढ़ गया है. Amount in words बहुत जल्दी शुरू होता है और amount box के ऊपर कहीं खत्म हो जाता है. Figures उस box के just बाहर बैठे हैं जिसे उन्हें भरना था — जैसे कोई passenger सही seat से एक row दूर.

Template broken नहीं था. वो accurate था — एक different bank के leaf के लिए.

ये cheque printing के उस हिस्से की guide है जिसके बारे में कोई warn नहीं करता: alignment. हर bank अपनी fields को different जगहों पर क्यों रखता है, एक template को कैसे calibrate करें ताकि text exactly वहीं land हो जहाँ leaf expect करता है, नीचे का वो एक band जिसे आपको कभी touch नहीं करना, और इस job का वो version जहाँ ruler drawer में ही रहता है.

### [H2] एक Template हर Cheque क्यों Print नहीं कर सकता

एक cheque leaf generic लगता है जब तक आप दो banks के leaves side by side न रख दें. फिर differences चिल्लाने लगते हैं.

Date grid — top right के वो आठ छोटे boxes — एक SBI leaf पर HDFC के मुकाबले slightly different height और spacing पर बैठता है. ICICI की payee line left edge से Axis के मुकाबले different distance पर शुरू होती है. Kotak का amount box वहाँ नहीं है जहाँ SBI का amount box है, और उसकी width भी same नहीं. Amount-in-words line कुछ leaves पर एक long line में चलती है और दूसरों पर second line में wrap होती है. Signature area तक float करता है.

इसमें से कुछ भी carelessness नहीं है. [CTS-2010 — RBI का cheque standard](https://cheqify.app/hi/blog/cts-2010-cheque-format-compliance-india) — Indian cheques के security features, paper grade, और broad layout grammar को fix करता है. जो ये deliberately नहीं करता, वो है हर field को एक coordinate पर pin करना. हर bank standard के अंदर अपना leaf design करता है, और ज़्यादातर banks एक साथ कई leaf variants चलाते हैं: savings books versus current-account books, old print series versus new, personalised leaves versus counter-issued.

तो एक print template कभी "a cheque template" नहीं होता. ये एक bank के leaf का map है — कभी-कभी एक bank के leaf के एक *variant* का. इसे किसी और leaf पर point करें और हर field घर से कुछ millimetres दूर land होती है.

### [H2] Bank Leaves के बीच Actually क्या Move होता है

Exactly क्या vary करता है ये जानना worth है, क्योंकि ये ज़्यादातर लोगों के guess से ज़्यादा है:

- **Date grid** — हमेशा top right, लेकिन top edge से इसकी distance और आठ boxes के बीच की spacing bank और series से shift होती है. थोड़ा miss करें और एक digit दो boxes पर straddle करता है.
- **Payee line** — starting indent, leaf पर line की height, और उसकी usable length सब differ करते हैं. कुछ leaves generous run देते हैं; दूसरे second amount-in-words row के लिए जगह बनाने line जल्दी खत्म करते हैं.
- **Amount-in-words line** — कुछ leaves पर single line, दूसरों पर two lines. एक template को सिर्फ़ ये नहीं जानना कि line one कहाँ शुरू होती है बल्कि ये भी कि line two कहाँ begin होती है, वरना एक long amount overlap में collapse होता है.
- **Amount box** — position, width, और ₹ symbol अंदर कहाँ बैठता है — सब move करते हैं. एक box जो आपके template की सोच से 4 mm और left शुरू होता है, पहला digit slice कर देगा.
- **Signature zone** — सबके leaf पर bottom right, लेकिन bottom band के ऊपर varying heights पर — जो matter करता है अगर आपका template signing space के ऊपर "For \<Company Name\>" print करता है.
- **खुद leaf** — overall dimensions CTS-2010 के under broadly consistent हैं, लेकिन printable margins banks के बीच print resolution पर matter करने जितने differ करते हैं.

> **एक cheque के पास "almost" के लिए कोई tolerance नहीं. एक payee name जो date boxes में drift करता है, एक amount जो अपने box के बाहर leak करता है — वो leaf slightly wrong नहीं, spoiled है. एक cheque पर, तीन millimetres पूरा game है.**

अब problem को उन banks की संख्या से multiply करें जिनके साथ आपका business bank करता है — ज़्यादातर SMBs दो या तीन current accounts चलाते हैं — और हर bank के leaf variants से. "एक बार template set up कर लो" quietly एक छोटा, permanent engineering project बन जाता है.

### [H2] वो Band जिस पर आपको कभी Print नहीं करना

किसी भी cheque की bottom strip देखें: magnetic ink में printed अजीब-से दिखने वाले digits की एक row. वो MICR band है, और ये leaf का वो एक हिस्सा है जो machines का है, आपका नहीं.

Clearing systems उन characters को magnetically read करते हैं. आपके printer का toner और ink magnetic नहीं हैं — तो उस band में या उसके too close कुछ भी print करना सिर्फ़ untidy नहीं दिखता, ये read में interfere कर सकता है और cheque को manual handling, delay, या return में push कर सकता है. Rule absolute और simple है: **cheque की पूरी bottom band untouched रहती है.** कोई signature label नीचे drift नहीं, कोई crossing line उसमें angle नहीं, कोई company stamp उसके पास नहीं.

CTS-2010 और आगे जाता है और machine-read areas के around clean, quiet zones expect करता है ताकि image-based clearing leaf को बिना noise के capture करे. एक well-built template cheque के bottom को एक wall की तरह treat करता है: हर printable element उसके comfortably ऊपर खत्म होता है, हर printer के slight feed drift के लिए margin के साथ.

### [H2] Test-Print Method — बिना Leaf Spoil किए Calibration

यहाँ है honest manual method, वो जो cheque leaves की जगह plain paper cost करता है:

1. **अपना exact leaf identify करें** — bank *और* variant. एक SBI current-account leaf और एक SBI savings leaf different maps हैं; same book की दो print series भी. जो template आप calibrate करते हैं वो इस leaf का है, "SBI" का नहीं.
2. **Measure करें — कभी guess नहीं** — real leaf पर ruler ले जाएँ, या अपने bank के लिए already built template से शुरू करें. Date grid का top offset, payee line का left indent, amount box position, और words-line कहाँ बैठती है — note करें. Photo से eyeball करना वो तरीका है जिससे leaves spoil होते हैं.
3. **Plain paper पर test-print करें** — filled template को ordinary A4 पर print करें, फिर sheet को एक real cheque के ऊपर window या bright light के against पकड़ें. हर field आर-पार दिखती है, और आप precisely देख सकते हैं कौन सी drift करती हैं और कितना.
4. **छोटे steps में nudge करें** — template के top और left offsets को एक बार में एक millimetre adjust करें और paper पर re-test करें. दो या तीन rounds usually converge होते हैं. बड़े corrections resist करें; overshoot करना जितने rounds बचाता है उतने waste करता है.
5. **MICR band protect करें** — पहले real print से पहले confirm करें कि template का कोई element bottom band के पास नहीं बैठता, signature label के descenders समेत. फिर पहला actual leaf चलाएँ.
6. **Calibrated template per bank save करें** — इसे bank और series के नाम से name करें, और उस leaf के लिए फिर कभी re-measure न करें. जब अगली cheque book आए, एक plain-paper test confirm करता है कि series नहीं बदली.

Mechanics के around दो practical notes. **Feeding:** ordinary bank-issued books मतलब single leaves, और single leaves printer की manual feed tray से best behave करते हैं जब guide leaf के against snug हो — एक loose guide अपना खुद का millimetre random drift add करता है और कोई template randomness को calibrate नहीं कर सकता. High-volume desks के लिए continuous cheque stationery exist करती है, लेकिन एक normal SMB book के लिए single-leaf feeding ही game है. **Printer:** कोई भी reasonable inkjet या laser cheques print कर सकता है; lasers sharper text hold करते हैं और moisture better resist करते हैं, और [full printer-selection reasoning यहाँ है](https://cheqify.app/hi/blog/best-printer-for-cheque-printing). और जो भी print करे, **account-payee crossing** को template के part के तौर पर print करें — दो parallel lines, top-left corner — ताकि cheque का safest form default form हो, हाथ से किया गया afterthought नहीं.

अगर आपको इसके around complete end-to-end printing workflow चाहिए — filling, fonts, records — तो [step-by-step India printing guide](https://cheqify.app/hi/blog/how-to-print-cheque-in-india) उसे cover करती है, और [home-office version](https://cheqify.app/hi/blog/how-to-print-cheque-at-home) small-setup case को.

### [H2] इसे Per Bank Save करें — और फिर कभी Measure न करें

Calibration एक one-time cost तभी है जब आप result को एक asset की तरह treat करें. Failure mode depressingly common है: offsets एक person के desktop पर एक Word file में रहते हैं, person बदल जाता है, file drift करती है, और छह महीने बाद कोई फिर window के against test print पकड़े खड़ा है — वो knowledge re-derive करता हुआ जिसकी price business already pay कर चुका है.

Fix एक template library है: हर bank की हर leaf series के लिए एक saved, named, calibrated template, वहाँ stored जहाँ से पूरी team print करती है. Same series की new cheque book — straight away print करें. New series या new bank — एक calibration cycle, फिर वो knowledge भी bank हो गई.

लेकिन notice करें इस point तक आपने क्या बना लिया है: हर उस bank के field coordinates का एक hand-maintained database जिससे आप deal करते हैं, ritual और vigilance से accurate रखा हुआ, एक word processor में जो millimetre work के लिए कभी design ही नहीं हुआ. ये function करता है. ये exactly उस तरह की silent, repeated, error-prone maintenance भी है जिसे software को सालों पहले खा जाना चाहिए था.

### [H2] वो Version जहाँ Measuring खत्म होती है

खा गया — यही इस article की punchline है.

[Online cheque printing tools](https://cheqify.app/hi/online-cheque-printing) field maps आपके *लिए* hold करते हैं. Cheqify **300+ ready Indian bank layouts** ship करता है — SBI, HDFC, ICICI, Axis, Kotak, और public, private, और cooperative banks की long tail — हर एक already उस bank की date-grid position, payee indent, amount-box coordinates, words-line wrap, और MICR band के ऊपर एक hard keep-out zone carry करता हुआ. आप dropdown से अपना bank pick करते हैं, payee और amount type करते हैं, और print करते हैं. Amount in words खुद generate होता है. Crossing खुद print होती है. Alignment — ऊपर के दो हज़ार words का पूरा subject — simply अब आपका job नहीं है.

Plain-paper overlay trick अभी भी एक new printer पर first-leaf sanity check के तौर पर अपनी जगह कमाती है, क्योंकि feed mechanisms differ करते हैं. लेकिन वो per printer एक test print है, per bank एक measuring project नहीं. Ruler drawer में वापस जाता है, और वहीं रहता है.

---

> **अपना bank pick करें, payee type करें, print करें — पहले ही leaf पर aligned.** Cheqify 300+ ready Indian bank layouts ship करता है (SBI, HDFC, ICICI, Axis, Kotak और ज़्यादा), ताकि हर field exactly वहीं land हो जहाँ आपके bank का leaf expect करता है — amount in words auto-generated, account-payee crossing included, MICR band design से untouched. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Gujlish blend, same structure as English. Keep the pull-quote and CTA callout.

---

એક desktop template થી તમારો પહેલો cheque print કરો અને એને ઉઠાવીને જુઓ. Payee નું નામ date boxes માં અડધું ચઢી ગયું છે. Amount in words બહુ વહેલો શરૂ થાય છે અને amount box ની ઉપર ક્યાંક ખતમ થઈ જાય છે. Figures એ box ની just બહાર બેઠા છે જેને એમણે ભરવાનો હતો — જાણે કોઈ passenger સાચી seat થી એક row દૂર.

Template broken નહોતું. એ accurate હતું — એક different bank ના leaf માટે.

આ cheque printing ના એ ભાગની guide છે જેના વિશે કોઈ warn નથી કરતું: alignment. દરેક bank પોતાની fields ને different જગ્યાઓ પર કેમ રાખે છે, એક template ને કેવી રીતે calibrate કરવું જેથી text exactly ત્યાં જ land થાય જ્યાં leaf expect કરે છે, નીચેનો એ એક band જેને તમારે ક્યારેય touch નથી કરવાનો, અને આ job નું એ version જ્યાં ruler drawer માં જ રહે છે.

### [H2] એક Template દરેક Cheque કેમ Print નથી કરી શકતું

એક cheque leaf generic લાગે છે જ્યાં સુધી તમે બે banks ના leaves side by side ન મૂકો. પછી differences ચિલ્લાવા લાગે છે.

Date grid — top right ના એ આઠ નાના boxes — એક SBI leaf પર HDFC ના મુકાબલે slightly different height અને spacing પર બેસે છે. ICICI ની payee line left edge થી Axis ના મુકાબલે different distance પર શરૂ થાય છે. Kotak નો amount box ત્યાં નથી જ્યાં SBI નો amount box છે, અને એની width પણ same નથી. Amount-in-words line કેટલાક leaves પર એક long line માં ચાલે છે અને બીજા પર second line માં wrap થાય છે. Signature area પણ float કરે છે.

આમાંનું કંઈ પણ carelessness નથી. [CTS-2010 — RBI નું cheque standard](https://cheqify.app/gu/blog/cts-2010-cheque-format-compliance-india) — Indian cheques ના security features, paper grade, અને broad layout grammar ને fix કરે છે. જે આ deliberately નથી કરતું, એ છે દરેક field ને એક coordinate પર pin કરવું. દરેક bank standard ની અંદર પોતાનું leaf design કરે છે, અને મોટાભાગની banks એક સાથે ઘણા leaf variants ચલાવે છે: savings books versus current-account books, old print series versus new, personalised leaves versus counter-issued.

તો એક print template ક્યારેય "a cheque template" નથી હોતું. આ એક bank ના leaf નો map છે — ક્યારેક એક bank ના leaf ના એક *variant* નો. આને કોઈ બીજા leaf પર point કરો અને દરેક field ઘરથી થોડા millimetres દૂર land થાય છે.

### [H2] Bank Leaves ની વચ્ચે Actually શું Move થાય છે

Exactly શું vary કરે છે એ જાણવું worth છે, કારણ કે આ મોટાભાગના લોકોના guess થી વધારે છે:

- **Date grid** — હંમેશા top right, પણ top edge થી એની distance અને આઠ boxes ની વચ્ચેની spacing bank અને series થી shift થાય છે. થોડું miss કરો અને એક digit બે boxes પર straddle કરે છે.
- **Payee line** — starting indent, leaf પર line ની height, અને એની usable length બધું differ કરે છે. કેટલાક leaves generous run આપે છે; બીજા second amount-in-words row માટે જગ્યા બનાવવા line વહેલી ખતમ કરે છે.
- **Amount-in-words line** — કેટલાક leaves પર single line, બીજા પર two lines. એક template ને ફક્ત એ નથી જાણવાનું કે line one ક્યાં શરૂ થાય છે પણ એ પણ કે line two ક્યાં begin થાય છે, નહીંતર એક long amount overlap માં collapse થાય છે.
- **Amount box** — position, width, અને ₹ symbol અંદર ક્યાં બેસે છે — બધું move કરે છે. એક box જે તમારા template ની ધારણા થી 4 mm વધુ left શરૂ થાય છે, પહેલો digit slice કરી દેશે.
- **Signature zone** — બધાના leaf પર bottom right, પણ bottom band ની ઉપર varying heights પર — જે matter કરે છે જો તમારું template signing space ની ઉપર "For \<Company Name\>" print કરે છે.
- **ખુદ leaf** — overall dimensions CTS-2010 ની under broadly consistent છે, પણ printable margins banks ની વચ્ચે print resolution પર matter કરે એટલા differ કરે છે.

> **એક cheque પાસે "almost" માટે કોઈ tolerance નથી. એક payee name જે date boxes માં drift કરે છે, એક amount જે પોતાના box ની બહાર leak કરે છે — એ leaf slightly wrong નથી, spoiled છે. એક cheque પર, ત્રણ millimetres આખો game છે.**

હવે problem ને એ banks ની સંખ્યાથી multiply કરો જેમની સાથે તમારો business bank કરે છે — મોટાભાગના SMBs બે કે ત્રણ current accounts ચલાવે છે — અને દરેક bank ના leaf variants થી. "એક વાર template set up કરી લો" quietly એક નાનો, permanent engineering project બની જાય છે.

### [H2] એ Band જેના પર તમારે ક્યારેય Print નથી કરવાનું

કોઈ પણ cheque ની bottom strip જુઓ: magnetic ink માં printed વિચિત્ર-દેખાતા digits ની એક row. એ MICR band છે, અને આ leaf નો એ એક ભાગ છે જે machines નો છે, તમારો નહીં.

Clearing systems એ characters ને magnetically read કરે છે. તમારા printer નો toner અને ink magnetic નથી — તો એ band માં કે એની too close કંઈ પણ print કરવું ફક્ત untidy નથી દેખાતું, આ read માં interfere કરી શકે છે અને cheque ને manual handling, delay, કે return માં push કરી શકે છે. Rule absolute અને simple છે: **cheque ની આખી bottom band untouched રહે છે.** કોઈ signature label નીચે drift નહીં, કોઈ crossing line એમાં angle નહીં, કોઈ company stamp એની પાસે નહીં.

CTS-2010 હજુ આગળ જાય છે અને machine-read areas ની around clean, quiet zones expect કરે છે જેથી image-based clearing leaf ને noise વગર capture કરે. એક well-built template cheque ના bottom ને એક wall ની જેમ treat કરે છે: દરેક printable element એની comfortably ઉપર ખતમ થાય છે, દરેક printer ના slight feed drift માટે margin સાથે.

### [H2] Test-Print Method — Leaf Spoil કર્યા વગર Calibration

અહીં છે honest manual method, એ જે cheque leaves ની જગ્યાએ plain paper cost કરે છે:

1. **તમારું exact leaf identify કરો** — bank *અને* variant. એક SBI current-account leaf અને એક SBI savings leaf different maps છે; same book ની બે print series પણ. જે template તમે calibrate કરો છો એ આ leaf નું છે, "SBI" નું નહીં.
2. **Measure કરો — ક્યારેય guess નહીં** — real leaf પર ruler લઈ જાઓ, કે તમારી bank માટે already built template થી શરૂ કરો. Date grid નો top offset, payee line નો left indent, amount box position, અને words-line ક્યાં બેસે છે — note કરો. Photo થી eyeball કરવું એ રીત છે જેનાથી leaves spoil થાય છે.
3. **Plain paper પર test-print કરો** — filled template ને ordinary A4 પર print કરો, પછી sheet ને એક real cheque ની ઉપર window કે bright light ની against પકડો. દરેક field આરપાર દેખાય છે, અને તમે precisely જોઈ શકો છો કઈ drift કરે છે અને કેટલું.
4. **નાના steps માં nudge કરો** — template ના top અને left offsets ને એક વારમાં એક millimetre adjust કરો અને paper પર re-test કરો. બે કે ત્રણ rounds usually converge થાય છે. મોટા corrections resist કરો; overshoot કરવું જેટલા rounds બચાવે છે એટલા waste કરે છે.
5. **MICR band protect કરો** — પહેલા real print પહેલા confirm કરો કે template નું કોઈ element bottom band ની પાસે નથી બેસતું, signature label ના descenders સહિત. પછી પહેલો actual leaf ચલાવો.
6. **Calibrated template per bank save કરો** — આને bank અને series ના નામથી name કરો, અને એ leaf માટે ફરી ક્યારેય re-measure ન કરો. જ્યારે આગલી cheque book આવે, એક plain-paper test confirm કરે છે કે series નથી બદલી.

Mechanics ની around બે practical notes. **Feeding:** ordinary bank-issued books મતલબ single leaves, અને single leaves printer ની manual feed tray થી best behave કરે છે જ્યારે guide leaf ની against snug હોય — એક loose guide પોતાનું ખુદનું millimetre random drift add કરે છે અને કોઈ template randomness ને calibrate નથી કરી શકતું. High-volume desks માટે continuous cheque stationery exist કરે છે, પણ એક normal SMB book માટે single-leaf feeding જ game છે. **Printer:** કોઈ પણ reasonable inkjet કે laser cheques print કરી શકે છે; lasers sharper text hold કરે છે અને moisture better resist કરે છે, અને [full printer-selection reasoning અહીં છે](https://cheqify.app/gu/blog/best-printer-for-cheque-printing). અને જે પણ print કરે, **account-payee crossing** ને template ના part તરીકે print કરો — બે parallel lines, top-left corner — જેથી cheque નું safest form default form હોય, હાથથી કરેલું afterthought નહીં.

જો તમને આની around complete end-to-end printing workflow જોઈએ — filling, fonts, records — તો [step-by-step India printing guide](https://cheqify.app/gu/blog/how-to-print-cheque-in-india) એને cover કરે છે, અને [home-office version](https://cheqify.app/gu/blog/how-to-print-cheque-at-home) small-setup case ને.

### [H2] આને Per Bank Save કરો — અને પછી ક્યારેય Measure ન કરો

Calibration એક one-time cost ત્યારે જ છે જ્યારે તમે result ને એક asset ની જેમ treat કરો. Failure mode depressingly common છે: offsets એક person ના desktop પર એક Word file માં રહે છે, person બદલાઈ જાય છે, file drift કરે છે, અને છ મહિના પછી કોઈ ફરી window ની against test print પકડીને ઊભું છે — એ knowledge re-derive કરતું જેની price business already pay કરી ચૂક્યો છે.

Fix એક template library છે: દરેક bank ની દરેક leaf series માટે એક saved, named, calibrated template, ત્યાં stored જ્યાંથી આખી team print કરે છે. Same series ની new cheque book — straight away print કરો. New series કે new bank — એક calibration cycle, પછી એ knowledge પણ bank થઈ ગઈ.

પણ notice કરો આ point સુધી તમે શું બનાવી લીધું છે: દરેક એ bank ના field coordinates નો એક hand-maintained database જેની સાથે તમે deal કરો છો, ritual અને vigilance થી accurate રાખેલો, એક word processor માં જે millimetre work માટે ક્યારેય design જ નહોતું થયું. આ function કરે છે. આ exactly એ પ્રકારની silent, repeated, error-prone maintenance પણ છે જેને software એ વર્ષો પહેલા ખાઈ જવી જોઈતી હતી.

### [H2] એ Version જ્યાં Measuring ખતમ થાય છે

ખાઈ ગયું — આ જ આ article ની punchline છે.

[Online cheque printing tools](https://cheqify.app/gu/online-cheque-printing) field maps તમારા *માટે* hold કરે છે. Cheqify **300+ ready Indian bank layouts** ship કરે છે — SBI, HDFC, ICICI, Axis, Kotak, અને public, private, અને cooperative banks ની long tail — દરેક already એ bank ની date-grid position, payee indent, amount-box coordinates, words-line wrap, અને MICR band ની ઉપર એક hard keep-out zone carry કરતું. તમે dropdown થી તમારી bank pick કરો છો, payee અને amount type કરો છો, અને print કરો છો. Amount in words ખુદ generate થાય છે. Crossing ખુદ print થાય છે. Alignment — ઉપરના બે હજાર words નો આખો subject — simply હવે તમારો job નથી.

Plain-paper overlay trick હજુ પણ એક new printer પર first-leaf sanity check તરીકે પોતાની જગ્યા કમાય છે, કારણ કે feed mechanisms differ કરે છે. પણ એ per printer એક test print છે, per bank એક measuring project નહીં. Ruler drawer માં પાછું જાય છે, અને ત્યાં જ રહે છે.

---

> **તમારી bank pick કરો, payee type કરો, print કરો — પહેલા જ leaf પર aligned.** Cheqify 300+ ready Indian bank layouts ship કરે છે (SBI, HDFC, ICICI, Axis, Kotak અને વધુ), જેથી દરેક field exactly ત્યાં જ land થાય જ્યાં તમારી bank નું leaf expect કરે છે — amount in words auto-generated, account-payee crossing included, MICR band design થી untouched. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## Internal-Link Strategy

**Forward links from this post (all LIVE — safe):**
- Post #15 (`cts-2010-cheque-format-compliance-india`) — CTS-2010 as the standard behind leaf design + quiet zones (linked twice: "Why One Template" and MICR sections use one link; keep only the first if Sanity dedupes).
- Post #31 (`best-printer-for-cheque-printing`) — printer-selection reasoning in the Test-Print section.
- Post #7 (`how-to-print-cheque-in-india`) — the full end-to-end printing workflow.
- Post #4 (`how-to-print-cheque-at-home`) — the home/small-office setup case.
- Landing page `online-cheque-printing` (EN `https://cheqify.app/en/online-cheque-printing`, HI `/hi/online-cheque-printing`, GU `/gu/online-cheque-printing` — NOT under `/blog/`) — anchor in "The Version Where the Measuring Ends".

**Bonus internal-link work (after publish):**
- Edit post #7 (`how-to-print-cheque-in-india`, all 3 locales) to link here from its alignment/setup step — "the full calibration method" — strongest reciprocal.
- Edit post #31 (`best-printer-for-cheque-printing`, all 3 locales) to add "once the printer is chosen, alignment is the next job" link here.
- Edit post #9 (`common cheque printing mistakes`) if an alignment-mistake bullet exists — natural reciprocal.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The misprinted-first-cheque opening, the "map of one bank's leaf" framing, and the window-overlay imagery carry the voice.
- **Fact-check (directional claims only — keep them directional):** SBI/HDFC/ICICI/Axis/Kotak field-position differences are stated qualitatively (no millimetre figures) — do NOT add exact measurements at publish. CTS-2010 standardises security features/paper/broad layout but not exact field coordinates — verify framing against post #15 before publish. MICR band = magnetic ink, machine-read, must stay clear — stable, verify wording. "300+ Indian bank layouts" — confirm current count in the app before publish.
- **Internal link check:** #4, #7, #15, #31 all live; `online-cheque-printing` landing page live in all three locales (NOT a /blog/ URL — verify the HI/GU paths render).
- **Word count:** EN body must be >1,200 words (target 1,700–2,100). Current draft: ~1,850 words.
- **Sanity toggles:** `isHowTo: ON` (6 steps), `hasFaq: ON` (7 items).
- **Slug sanity-check after publish:** paste-verify the slug field reads exactly `bank-cheque-printing-format-alignment` (see slug-corruption gotcha).

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — posts #7 and #31 (strongest reciprocals), plus #9 if it has an alignment bullet.
5. IndexNow auto-pings on publish.
