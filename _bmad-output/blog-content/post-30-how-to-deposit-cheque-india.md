# Blog Post #30 — How to Deposit a Cheque in India — Branch, Drop Box, Deposit Machine, Doorstep (2026)

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
- `> **Both sides of the cheque counter run better with a register...** / **Cheque counter की दोनों sides...** / **Cheque counter ની બંને sides...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **The drop box trades your acknowledgment for your queue time...** / **Drop box आपकी acknowledgment को...** / **Drop box તમારી acknowledgment ને...**` (pull quote in each body) → **Quote**

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

We cover writing, printing, clearing, bouncing — but not the receiving side: actually depositing a cheque. "How to deposit a cheque" is a high-volume evergreen task search (first salary cheque, insurance payout, gift cheque), and the practical questions are real: which channel, how to fill the pay-in slip, is the drop box safe, what to write on the back, when does money arrive. HowTo schema fits naturally. Cluster fit: #17 (clearing time — what happens after), #28 (return codes — when it comes back), #19 (verify before depositing), #23 (crossing), #12 (deposit within validity).

---

## Sanity Fields

- **Slug:** `how-to-deposit-cheque-india`
- **Tags:** `Cheque Guide`, `Banking & RBI`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** YES (depositing a cheque, 6 steps)
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Thursday 2026-07-02, 10:00 IST (auto-set in Sanity)
- **Primary keyword:** `how to deposit a cheque`
- **Secondary keywords:** cheque deposit slip, cheque drop box, cheque deposit machine, deposit cheque in bank, what to write on back of cheque, cheque deposit time, deposit cheque another branch
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/how-to-deposit-cheque-india`
  - HI: `https://cheqify.app/hi/blog/how-to-deposit-cheque-india`
  - GU: `https://cheqify.app/gu/blog/how-to-deposit-cheque-india`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `how-to-deposit-cheque-india-cover.webp`
- **Subject:** A bank lobby scene simplified to three stations side by side: a counter with a teller stamp mid-air over a pay-in slip, a wall-mounted cheque drop box with a slot, and a cheque deposit kiosk with a screen showing "Cheque scanned ✓". A hand holds a cheque deciding between the three. Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** How to deposit a cheque in India — choosing between the branch counter, the drop box, and the cheque deposit machine, with a filled pay-in slip.
- **OG image:** Same as cover.

---

## Titles

- **EN:** How to Deposit a Cheque in India — Branch, Drop Box, Deposit Machine, Doorstep (2026)
- **HI:** India में Cheque Deposit कैसे करें — Branch, Drop Box, Deposit Machine, Doorstep (2026)
- **GU:** India માં Cheque Deposit કેવી રીતે કરવો — Branch, Drop Box, Deposit Machine, Doorstep (2026)

---

## Descriptions

- **EN:** Someone handed you a cheque — now what? Here's the full deposit playbook: verifying the cheque before you leave home, filling the pay-in slip without a redo, choosing between counter, drop box, and deposit machine (and when the drop box is a bad idea), what to write on the back, deposit cut-off times, and exactly when the money lands in your account.
- **HI:** किसी ने आपको cheque दिया — अब क्या? यहाँ है full deposit playbook: घर से निकलने से पहले cheque verify करना, pay-in slip बिना redo के भरना, counter, drop box, और deposit machine के बीच choose करना (और drop box कब bad idea है), पीछे क्या लिखना है, deposit cut-off times, और exactly कब पैसा आपके account में land होता है.
- **GU:** કોઈએ તમને cheque આપ્યો — હવે શું? અહીં છે full deposit playbook: ઘરથી નીકળતા પહેલા cheque verify કરવો, pay-in slip redo વગર ભરવી, counter, drop box, અને deposit machine વચ્ચે choose કરવું (અને drop box ક્યારે bad idea છે), પાછળ શું લખવું, deposit cut-off times, અને exactly ક્યારે પૈસા તમારા account માં land થાય છે.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

You're standing in the bank lobby holding a cheque, and there are three ways to hand it over: a queue at the counter, a slot in a metal box, and a machine with a screen. Most people pick whichever has nobody in front of it.

That's usually fine. Sometimes it's a mistake worth a few thousand rupees of inconvenience. So here's the whole deposit playbook — what to check before you leave home, how each channel actually works, and the small habits that decide whether your money arrives on schedule or comes back with a memo.

### [H2] Before You Leave Home — The Sixty-Second Inspection

A surprising share of deposit problems are visible *before* the deposit. Look at the cheque:

- **The date.** Is it today or earlier — and within three months? A future date means wait ([post-dated rules](https://cheqify.app/en/blog/post-dated-cheques-rules-and-best-practices)); older than three months means it's stale and dead on arrival ([validity rules](https://cheqify.app/en/blog/cheque-validity-period-stop-payment-india)). Don't burn a trip on a cheque the system will refuse.
- **Your name.** Spelled the way your bank account knows it? A payee-name mismatch against your account title is a return waiting to happen.
- **Words vs figures.** The amount in words and the amount in figures should agree.
- **Signature present.** Unsigned cheques happen more than you'd think.
- **Condition.** No tears across the MICR band, no corrections without the drawer's counter-signature.

Anything wrong in that list — go back to whoever gave you the cheque and ask for a clean one. It's a far shorter conversation now than after a bounce ([what each return code means when it does come back](https://cheqify.app/en/blog/cheque-return-reasons-india-2026)).

One more pre-flight: **cross it.** If the cheque isn't already crossed, draw two parallel lines across the top-left corner. Crossed, it can only move account-to-account — nobody who intercepts it can cash it over a counter ([crossing, explained properly](https://cheqify.app/en/blog/crossed-cheque-vs-account-payee)). For anything you're about to drop into a box, this is non-negotiable.

### [H2] The Pay-In Slip — Fill It Once, Fill It Right

Whether counter or drop box, the cheque travels with a **pay-in slip** (deposit slip) — the bank's routing document. Slips vary cosmetically by bank; the fields don't:

- **Date** of deposit
- **Your account number** — triple-check this one; it's where the money goes
- **Your name** as on the account
- **Cheque number, drawee bank and branch** — read these off the cheque ([where the cheque number is](https://cheqify.app/en/blog/cheque-number-in-cheque-book-explained))
- **Amount** in figures and words
- **Your mobile number** — most slips ask; credit/return SMS alerts depend on it

The slip has two parts: the main portion the bank keeps, and the **counterfoil** you keep. At the counter, the teller stamps both — that stamped counterfoil is your proof of deposit. Guard it until the money clears.

### [H2] Channel One — The Counter

The classic. Queue, hand over cheque plus slip, get the stamped counterfoil. Slowest in queue time, strongest in proof: a human verified the instrument in front of you, and your acknowledgment carries the bank's stamp and the date.

Use the counter when: the amount genuinely matters to you, the cheque looks at all unusual (older date, corrections, unfamiliar drawer), or you want same-day presentation confirmed verbally — deposits made before the branch's clearing cut-off typically enter that day's CTS cycle; later ones roll to the next ([how the clearing timeline runs from there](https://cheqify.app/en/blog/cheque-clearing-time-india)).

### [H2] Channel Two — The Drop Box

The metal box swallows your cheque-plus-slip and gives you nothing back.

> **The drop box trades your acknowledgment for your queue time. For a routine cheque, fair trade. For a big one, you've just handed over a lakh and kept a blank space as your receipt.**

If you use it — and for small, routine cheques it's perfectly reasonable — tighten the screws:

- **Cross the cheque** (you already did, from the pre-flight).
- **Write your account number and mobile number on the reverse of the cheque.** If slip and cheque ever separate, this reunites them. Use the top portion of the back, write small.
- **Photograph the cheque and the filled slip** before dropping. Date-stamped photos are your informal acknowledgment.
- **Mind the box's clearance time** — printed on the box. A 3 PM drop after a 1 PM clearance means tomorrow's cycle.

For high-value cheques, skip the box entirely. The counter's stamp or the machine's receipt costs ten extra minutes and buys you actual evidence.

### [H2] Channel Three — The Cheque Deposit Machine

The kiosk (many banks call it a cheque deposit machine or kiosk; some fold it into multi-function ATMs) is the modern middle path: insert the cheque, key in your account number, and the machine scans the instrument and prints an acknowledgment — at many banks with a thumbnail image of your cheque on it.

That receipt is the drop box's missing half. You get machine-verified proof of *what* you deposited and *when*, without the queue. Machines also feed cheques into clearing efficiently — deposit before the machine's cut-off and you're generally in that day's cycle.

Two quirks: machines reject mangled or folded cheques (flatten it first), and the account-number keying is on you — the same triple-check as the slip. Where a machine exists, it beats the box every time and the counter most times.

### [H2] Channel Four — Doorstep Banking

Banks offer doorstep cheque pickup for senior citizens and certain account tiers — book via app or phone banking, an agent collects the instrument, the acknowledgment is digital. If you're depositing for an elderly parent, this beats their trip to the branch in every way. Availability and charges vary by bank and city; check yours.

And the honest note about the channel that *doesn't* exist: **India has no consumer mobile cheque deposit.** You cannot photograph a cheque and deposit it through an app, the way US banks allow. The scan happens on the bank's side under CTS, not yours. Any app claiming otherwise is not your bank.

### [H2] Where You Can Deposit — Branch Geography Is Dead

Under CTS, the old "outstation cheque" anxiety is gone. A Mumbai cheque deposits in Chennai without ceremony — it's all images in the same national clearing anyway ([CTS, explained](https://cheqify.app/en/blog/cheque-truncation-system-explained)). You can deposit at any branch of *your* bank, not just your home branch; machines and drop boxes are bank-wide by design.

One nuance survives: depositing a cheque drawn on the *same* bank (your account and the drawer's account both at, say, HDFC) is an internal transfer — these often credit faster than clearing-cycle cheques, sometimes same day.

### [H2] After the Deposit — What "Credited" Actually Means

The standard rhythm: deposit before cut-off → presented in that day's CTS cycle → drawer's bank approves overnight → credit next working day, usable per your bank's shadow-credit policy. Day three at the outside for ordinary cases ([the full timeline with the why](https://cheqify.app/en/blog/cheque-clearing-time-india)).

Watch your SMS. Three outcomes:

1. **Credit alert.** Done. File the counterfoil/receipt for a few weeks anyway.
2. **Silence past day three.** Chase it — branch or phone banking, armed with your counterfoil/receipt details. Cheques do occasionally sit.
3. **Return alert.** The cheque bounced. The return memo's reason code tells you whether it's mechanical (fix and redeposit) or money trouble (start the clock) — [the full decoder is here](https://cheqify.app/en/blog/cheque-return-reasons-india-2026).

If you receive cheques regularly — rent, client payments, society dues — the deposit isn't really the task. The *tracking* is: which cheques are in hand, which are deposited, which cleared, which bounced and need follow-up. That ledger is exactly what [cheque lifecycle management](https://cheqify.app/en/blog/cheque-lifecycle-management-explained) is for, and it's the difference between collecting money and hoping for it.

---

> **Both sides of the cheque counter run better with a register.** Cheqify tracks every cheque you issue *and* receive — deposited, cleared, bounced, pending follow-up — so nothing dies forgotten in a drawer or a drop box. Plus printing on 300+ Indian bank layouts for the cheques you write. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** How do I deposit a cheque in a bank account?
   **A:** Verify the cheque first (date current and within 3 months, your name spelled right, amounts matching, signature present), cross it if it isn't already, fill a pay-in slip with your account number and the cheque's details, and submit through the branch counter, cheque drop box, or cheque deposit machine. Keep the stamped counterfoil or machine receipt until the credit lands — typically the next working day after presentation.

2. **Q:** What should I write on the back of a cheque when depositing?
   **A:** Your account number and mobile number, written small at the top portion of the reverse — it reunites the cheque with your deposit if the pay-in slip ever separates from it. This matters most for drop-box deposits, where you receive no acknowledgment. Don't write over any printed material or across the MICR band area.

3. **Q:** Is the cheque drop box safe?
   **A:** Reasonably, for routine amounts — but you get no acknowledgment, which is the real risk. If you use it: make sure the cheque is crossed, write your account number on the reverse, photograph the cheque and the filled slip before dropping, and check the box's printed clearance time. For high-value cheques, prefer the counter (stamped counterfoil) or deposit machine (printed receipt with cheque image).

4. **Q:** Can I deposit a cheque at any branch of my bank?
   **A:** Yes. Under CTS, clearing is image-based and national, so any branch, drop box, or deposit machine of your own bank works regardless of where the cheque was issued — the old "outstation cheque" delays are gone. Note that a cheque drawn on the same bank as your account is processed as an internal transfer and often credits faster.

5. **Q:** How long after depositing a cheque does the money come?
   **A:** Deposit before the branch/machine cut-off and the cheque enters that day's CTS presentation; the drawer's bank approves overnight, and credit typically lands the next working day. Allow up to two-three working days for ordinary cases, longer over weekends and holidays. Same-bank cheques often credit faster.

6. **Q:** Can I deposit a cheque through my banking app by photographing it?
   **A:** No — India has no consumer mobile cheque deposit. Under CTS, the cheque image used for clearing is captured by the bank, not the customer. The physical instrument must reach the bank through a counter, drop box, deposit machine, or doorstep collection. Treat any app offering "photo deposit" of Indian cheques as suspicious.

7. **Q:** Can I deposit someone else's cheque into my account?
   **A:** Only if you're the named payee — a cheque payable to another person can't be deposited into your account, and an account-payee-crossed cheque can be credited only to the named payee's account, with no exceptions. If a payment is meant for you, the cheque must carry your name as it appears on your bank account.

---

## HowTo Steps (Sanity `howToSteps` field — required for HowTo schema)

| # | Name | Text |
|---|---|---|
| 1 | Inspect the cheque before leaving | Check the date (not future, not older than 3 months), your name spelled as your account knows it, amount in words matching figures, the drawer's signature, and no tears or uncountersigned corrections. |
| 2 | Cross the cheque if it isn't already | Draw two parallel lines across the top-left corner. A crossed cheque can only move account-to-account and can't be encashed by anyone who intercepts it. |
| 3 | Fill the pay-in slip | Enter the deposit date, your account number (triple-check it), your name, the cheque number with drawee bank and branch, the amount in figures and words, and your mobile number for alerts. |
| 4 | Choose your channel | Counter for high-value or unusual cheques (stamped counterfoil as proof), deposit machine for speed plus a printed receipt with the cheque's image, drop box only for routine amounts — after writing your account number on the cheque's reverse and photographing both documents. |
| 5 | Keep the acknowledgment | Hold the stamped counterfoil or machine receipt until the credit arrives. For drop-box deposits, your photos and the slip's counterfoil are your only records. |
| 6 | Track the credit | Deposits before cut-off enter that day's clearing; credit typically lands the next working day. No credit by day three: follow up with the counterfoil details. Return SMS: read the reason code and act accordingly — redeposit for technical returns, follow up with the drawer for funds issues. |

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

आप bank lobby में एक cheque पकड़े खड़े हैं, और इसे hand over करने के तीन तरीके हैं: counter पर एक queue, एक metal box में एक slot, और एक screen वाली machine. ज़्यादातर लोग वो pick करते हैं जिसके सामने कोई नहीं है.

ये usually fine है. कभी-कभी ये कुछ हज़ार rupees की inconvenience वाली mistake है. तो यहाँ है पूरा deposit playbook — घर से निकलने से पहले क्या check करें, हर channel actually कैसे काम करता है, और वो small habits जो decide करती हैं कि आपका पैसा schedule पर आता है या एक memo के साथ वापस.

### [H2] घर से निकलने से पहले — Sixty-Second Inspection

Deposit problems का एक surprising share deposit से *पहले* visible है. Cheque को देखें:

- **Date.** क्या ये आज या उससे पहले की है — और तीन months के अंदर? Future date मतलब wait ([post-dated rules](https://cheqify.app/hi/blog/post-dated-cheques-rules-and-best-practices)); तीन months से पुरानी मतलब stale और arrival पर dead ([validity rules](https://cheqify.app/hi/blog/cheque-validity-period-stop-payment-india)). उस cheque पर trip मत जलाएँ जिसे system refuse करेगा.
- **आपका name.** उस तरह spelled जैसे आपका bank account जानता है? आपके account title के against एक payee-name mismatch एक return है जो होने का wait कर रहा है.
- **Words vs figures.** Words में amount और figures में amount agree करने चाहिए.
- **Signature present.** Unsigned cheques आपकी सोच से ज़्यादा होते हैं.
- **Condition.** MICR band के across कोई tears नहीं, drawer की counter-signature के बिना कोई corrections नहीं.

उस list में कुछ भी गलत — जिसने cheque दिया उसके पास वापस जाएँ और एक clean मांगें. ये अभी एक far shorter conversation है bounce के बाद की तुलना में ([हर return code का मतलब जब ये वापस आए](https://cheqify.app/hi/blog/cheque-return-reasons-india-2026)).

एक और pre-flight: **इसे cross करें.** अगर cheque already crossed नहीं है, top-left corner के across दो parallel lines खींचें. Crossed, ये सिर्फ़ account-to-account move कर सकता है — जो भी इसे intercept करे वो counter पर cash नहीं कर सकता ([crossing, properly explained](https://cheqify.app/hi/blog/crossed-cheque-vs-account-payee)). किसी भी चीज़ के लिए जो आप box में drop करने वाले हैं, ये non-negotiable है.

### [H2] Pay-In Slip — एक बार भरें, सही भरें

Counter हो या drop box, cheque एक **pay-in slip** (deposit slip) के साथ travel करता है — bank का routing document. Slips bank से cosmetically vary करती हैं; fields नहीं:

- Deposit की **date**
- **आपका account number** — इसे triple-check करें; पैसा यहीं जाता है
- **आपका name** जैसा account पर है
- **Cheque number, drawee bank और branch** — इन्हें cheque से पढ़ें ([cheque number कहाँ है](https://cheqify.app/hi/blog/cheque-number-in-cheque-book-explained))
- Figures और words में **amount**
- **आपका mobile number** — ज़्यादातर slips मांगती हैं; credit/return SMS alerts इसी पर depend करते हैं

Slip के दो parts हैं: main portion जो bank रखता है, और **counterfoil** जो आप रखते हैं. Counter पर, teller दोनों stamp करता है — वो stamped counterfoil आपका proof of deposit है. पैसा clear होने तक इसे guard करें.

### [H2] Channel One — Counter

Classic. Queue, cheque plus slip hand over करें, stamped counterfoil लें. Queue time में slowest, proof में strongest: एक human ने आपके सामने instrument verify किया, और आपकी acknowledgment पर bank का stamp और date है.

Counter use करें जब: amount genuinely आपके लिए matter करता है, cheque ज़रा भी unusual दिखता है (पुरानी date, corrections, unfamiliar drawer), या आप same-day presentation verbally confirmed चाहते हैं — branch के clearing cut-off से पहले के deposits typically उस दिन के CTS cycle में enter करते हैं; बाद वाले अगले में roll होते हैं ([वहाँ से clearing timeline कैसे चलती है](https://cheqify.app/hi/blog/cheque-clearing-time-india)).

### [H2] Channel Two — Drop Box

Metal box आपका cheque-plus-slip निगल जाता है और बदले में कुछ नहीं देता.

> **Drop box आपकी acknowledgment को आपके queue time से trade करता है. एक routine cheque के लिए, fair trade. एक बड़े के लिए, आपने अभी एक lakh hand over किया और receipt के तौर पर एक blank space रखा.**

अगर आप इसे use करते हैं — और small, routine cheques के लिए ये perfectly reasonable है — screws tight करें:

- **Cheque cross करें** (आपने already किया, pre-flight से).
- **Cheque के reverse पर अपना account number और mobile number लिखें.** अगर slip और cheque कभी separate हों, ये उन्हें reunite करता है. पीछे का top portion use करें, छोटा लिखें.
- **Drop करने से पहले cheque और भरी हुई slip को photograph करें.** Date-stamped photos आपकी informal acknowledgment हैं.
- **Box का clearance time mind करें** — box पर printed. 1 PM clearance के बाद 3 PM drop मतलब कल का cycle.

High-value cheques के लिए, box को entirely skip करें. Counter का stamp या machine की receipt दस extra minutes cost करती है और actual evidence खरीदती है.

### [H2] Channel Three — Cheque Deposit Machine

Kiosk (कई banks इसे cheque deposit machine या kiosk कहते हैं; कुछ इसे multi-function ATMs में fold करते हैं) modern middle path है: cheque insert करें, अपना account number key करें, और machine instrument scan करके एक acknowledgment print करती है — कई banks पर उस पर आपके cheque की thumbnail image के साथ.

वो receipt drop box का missing half है. आपको machine-verified proof मिलता है कि *क्या* deposit हुआ और *कब*, बिना queue के. Machines cheques को clearing में efficiently feed भी करती हैं — machine के cut-off से पहले deposit करें और आप generally उस दिन के cycle में हैं.

दो quirks: machines mangled या folded cheques reject करती हैं (पहले flatten करें), और account-number keying आप पर है — slip वाला same triple-check. जहाँ machine exist करती है, वो box को हर बार हराती है और counter को most times.

### [H2] Channel Four — Doorstep Banking

Banks senior citizens और certain account tiers के लिए doorstep cheque pickup offer करते हैं — app या phone banking से book करें, एक agent instrument collect करता है, acknowledgment digital है. अगर आप किसी elderly parent के लिए deposit कर रहे हैं, ये उनकी branch trip को हर तरह से हराता है. Availability और charges bank और city से vary करते हैं; अपना check करें.

और उस channel के बारे में honest note जो exist *नहीं* करता: **India में कोई consumer mobile cheque deposit नहीं है.** आप एक cheque photograph करके app से deposit नहीं कर सकते, जैसे US banks allow करते हैं. CTS के under scan bank की side पर होता है, आपकी नहीं. कोई भी app जो otherwise claim करे वो आपका bank नहीं है.

### [H2] कहाँ Deposit कर सकते हैं — Branch Geography Dead है

CTS के under, पुरानी "outstation cheque" anxiety गई. एक Mumbai cheque Chennai में बिना ceremony deposit होता है — ये सब वैसे भी same national clearing में images हैं ([CTS, explained](https://cheqify.app/hi/blog/cheque-truncation-system-explained)). आप *अपने* bank की किसी भी branch पर deposit कर सकते हैं, सिर्फ़ home branch नहीं; machines और drop boxes design से bank-wide हैं.

एक nuance survive करता है: *same* bank पर drawn cheque deposit करना (आपका account और drawer का account दोनों, मान लें, HDFC पर) एक internal transfer है — ये अक्सर clearing-cycle cheques से faster credit होते हैं, कभी-कभी same day.

### [H2] Deposit के बाद — "Credited" का Actually मतलब

Standard rhythm: cut-off से पहले deposit → उस दिन के CTS cycle में presented → drawer का bank overnight approve करता है → अगले working day credit, आपके bank की shadow-credit policy के per usable. Ordinary cases के लिए ज़्यादा से ज़्यादा day three ([why के साथ full timeline](https://cheqify.app/hi/blog/cheque-clearing-time-india)).

अपने SMS देखें. तीन outcomes:

1. **Credit alert.** Done. Counterfoil/receipt को फिर भी कुछ weeks file करें.
2. **Day three के past silence.** Chase करें — branch या phone banking, अपनी counterfoil/receipt details के साथ. Cheques occasionally बैठ जाते हैं.
3. **Return alert.** Cheque bounce हुआ. Return memo का reason code बताता है कि ये mechanical है (fix करें और redeposit) या money trouble (clock शुरू करें) — [full decoder यहाँ है](https://cheqify.app/hi/blog/cheque-return-reasons-india-2026).

अगर आप regularly cheques receive करते हैं — rent, client payments, society dues — deposit really task नहीं है. *Tracking* है: कौन से cheques हाथ में हैं, कौन से deposited, कौन से cleared, कौन से bounced और follow-up चाहिए. वो ledger exactly वही है जिसके लिए [cheque lifecycle management](https://cheqify.app/hi/blog/cheque-lifecycle-management-explained) है, और यही फ़र्क़ है पैसा collect करने और उसकी hope करने में.

---

> **Cheque counter की दोनों sides एक register के साथ better चलती हैं.** Cheqify हर cheque track करता है जो आप issue *और* receive करते हैं — deposited, cleared, bounced, pending follow-up — ताकि कुछ भी drawer या drop box में भूला हुआ न मरे. Plus जो cheques आप लिखते हैं उनके लिए 300+ Indian bank layouts पर printing. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

તમે bank lobby માં એક cheque પકડીને ઊભા છો, અને એને hand over કરવાના ત્રણ રસ્તા છે: counter પર એક queue, એક metal box માં એક slot, અને એક screen વાળી machine. મોટાભાગના લોકો એ pick કરે છે જેની સામે કોઈ નથી.

આ usually fine છે. ક્યારેક આ થોડા હજાર rupees ની inconvenience વાળી mistake છે. તો અહીં છે આખું deposit playbook — ઘરથી નીકળતા પહેલા શું check કરવું, દરેક channel actually કેવી રીતે કામ કરે છે, અને એ small habits જે decide કરે છે કે તમારા પૈસા schedule પર આવે છે કે એક memo સાથે પાછા.

### [H2] ઘરથી નીકળતા પહેલા — Sixty-Second Inspection

Deposit problems નો એક surprising share deposit *પહેલા* visible છે. Cheque ને જુઓ:

- **Date.** શું આ આજની કે એ પહેલાની છે — અને ત્રણ months ની અંદર? Future date મતલબ wait ([post-dated rules](https://cheqify.app/gu/blog/post-dated-cheques-rules-and-best-practices)); ત્રણ months થી જૂની મતલબ stale અને arrival પર dead ([validity rules](https://cheqify.app/gu/blog/cheque-validity-period-stop-payment-india)). એ cheque પર trip ન બાળો જેને system refuse કરશે.
- **તમારું name.** એ રીતે spelled જેમ તમારું bank account જાણે છે? તમારા account title ની against એક payee-name mismatch એક return છે જે થવાનો wait કરી રહ્યો છે.
- **Words vs figures.** Words માં amount અને figures માં amount agree કરવા જોઈએ.
- **Signature present.** Unsigned cheques તમારી ધારણા કરતા વધારે હોય છે.
- **Condition.** MICR band ની across કોઈ tears નહીં, drawer ની counter-signature વગર કોઈ corrections નહીં.

એ list માં કંઈ પણ ખોટું — જેણે cheque આપ્યો એની પાસે પાછા જાઓ અને એક clean માંગો. આ અત્યારે એક far shorter conversation છે bounce પછીની સરખામણીમાં ([દરેક return code નો મતલબ જ્યારે આ પાછો આવે](https://cheqify.app/gu/blog/cheque-return-reasons-india-2026)).

એક બીજી pre-flight: **એને cross કરો.** જો cheque already crossed નથી, top-left corner ની across બે parallel lines ખેંચો. Crossed, આ ફક્ત account-to-account move કરી શકે છે — જે પણ એને intercept કરે એ counter પર cash નથી કરી શકતું ([crossing, properly explained](https://cheqify.app/gu/blog/crossed-cheque-vs-account-payee)). કોઈ પણ વસ્તુ માટે જે તમે box માં drop કરવાના છો, આ non-negotiable છે.

### [H2] Pay-In Slip — એક વાર ભરો, સાચી ભરો

Counter હોય કે drop box, cheque એક **pay-in slip** (deposit slip) સાથે travel કરે છે — bank નું routing document. Slips bank થી cosmetically vary કરે છે; fields નહીં:

- Deposit ની **date**
- **તમારો account number** — આને triple-check કરો; પૈસા અહીં જ જાય છે
- **તમારું name** જેવું account પર છે
- **Cheque number, drawee bank અને branch** — આને cheque માંથી વાંચો ([cheque number ક્યાં છે](https://cheqify.app/gu/blog/cheque-number-in-cheque-book-explained))
- Figures અને words માં **amount**
- **તમારો mobile number** — મોટાભાગની slips માંગે છે; credit/return SMS alerts આના પર જ depend કરે છે

Slip ના બે parts છે: main portion જે bank રાખે છે, અને **counterfoil** જે તમે રાખો છો. Counter પર, teller બંને stamp કરે છે — એ stamped counterfoil તમારો proof of deposit છે. પૈસા clear થાય ત્યાં સુધી એને guard કરો.

### [H2] Channel One — Counter

Classic. Queue, cheque plus slip hand over કરો, stamped counterfoil લો. Queue time માં slowest, proof માં strongest: એક human એ તમારી સામે instrument verify કર્યું, અને તમારી acknowledgment પર bank નો stamp અને date છે.

Counter use કરો જ્યારે: amount genuinely તમારા માટે matter કરે છે, cheque જરા પણ unusual દેખાય છે (જૂની date, corrections, unfamiliar drawer), કે તમે same-day presentation verbally confirmed માંગો છો — branch ના clearing cut-off પહેલાના deposits typically એ દિવસના CTS cycle માં enter કરે છે; પછીના આગલામાં roll થાય છે ([ત્યાંથી clearing timeline કેવી રીતે ચાલે છે](https://cheqify.app/gu/blog/cheque-clearing-time-india)).

### [H2] Channel Two — Drop Box

Metal box તમારું cheque-plus-slip ગળી જાય છે અને બદલામાં કંઈ નથી આપતું.

> **Drop box તમારી acknowledgment ને તમારા queue time થી trade કરે છે. એક routine cheque માટે, fair trade. એક મોટા માટે, તમે હમણાં એક lakh hand over કર્યો અને receipt તરીકે એક blank space રાખી.**

જો તમે એને use કરો છો — અને small, routine cheques માટે આ perfectly reasonable છે — screws tight કરો:

- **Cheque cross કરો** (તમે already કર્યું, pre-flight થી).
- **Cheque ના reverse પર તમારો account number અને mobile number લખો.** જો slip અને cheque ક્યારેય separate થાય, આ એમને reunite કરે છે. પાછળનો top portion use કરો, નાનું લખો.
- **Drop કરતા પહેલા cheque અને ભરેલી slip ને photograph કરો.** Date-stamped photos તમારી informal acknowledgment છે.
- **Box નો clearance time mind કરો** — box પર printed. 1 PM clearance પછી 3 PM drop મતલબ કાલનું cycle.

High-value cheques માટે, box ને entirely skip કરો. Counter નો stamp કે machine ની receipt દસ extra minutes cost કરે છે અને actual evidence ખરીદે છે.

### [H2] Channel Three — Cheque Deposit Machine

Kiosk (ઘણા banks એને cheque deposit machine કે kiosk કહે છે; કેટલાક એને multi-function ATMs માં fold કરે છે) modern middle path છે: cheque insert કરો, તમારો account number key કરો, અને machine instrument scan કરીને એક acknowledgment print કરે છે — ઘણા banks પર એના પર તમારા cheque ની thumbnail image સાથે.

એ receipt drop box નો missing half છે. તમને machine-verified proof મળે છે કે *શું* deposit થયું અને *ક્યારે*, queue વગર. Machines cheques ને clearing માં efficiently feed પણ કરે છે — machine ના cut-off પહેલા deposit કરો અને તમે generally એ દિવસના cycle માં છો.

બે quirks: machines mangled કે folded cheques reject કરે છે (પહેલા flatten કરો), અને account-number keying તમારા પર છે — slip વાળો same triple-check. જ્યાં machine exist કરે છે, એ box ને દરેક વાર હરાવે છે અને counter ને most times.

### [H2] Channel Four — Doorstep Banking

Banks senior citizens અને certain account tiers માટે doorstep cheque pickup offer કરે છે — app કે phone banking થી book કરો, એક agent instrument collect કરે છે, acknowledgment digital છે. જો તમે કોઈ elderly parent માટે deposit કરી રહ્યા છો, આ એમની branch trip ને દરેક રીતે હરાવે છે. Availability અને charges bank અને city થી vary કરે છે; તમારું check કરો.

અને એ channel વિશે honest note જે exist *નથી* કરતી: **India માં કોઈ consumer mobile cheque deposit નથી.** તમે એક cheque photograph કરીને app થી deposit નથી કરી શકતા, જેમ US banks allow કરે છે. CTS ની under scan bank ની side પર થાય છે, તમારી નહીં. કોઈ પણ app જે otherwise claim કરે એ તમારું bank નથી.

### [H2] ક્યાં Deposit કરી શકો છો — Branch Geography Dead છે

CTS ની under, જૂની "outstation cheque" anxiety ગઈ. એક Mumbai cheque Chennai માં ceremony વગર deposit થાય છે — આ બધું એમ પણ same national clearing માં images છે ([CTS, explained](https://cheqify.app/gu/blog/cheque-truncation-system-explained)). તમે *તમારા* bank ની કોઈ પણ branch પર deposit કરી શકો છો, ફક્ત home branch નહીં; machines અને drop boxes design થી bank-wide છે.

એક nuance survive કરે છે: *same* bank પર drawn cheque deposit કરવો (તમારું account અને drawer નું account બંને, માની લો, HDFC પર) એક internal transfer છે — આ ઘણીવાર clearing-cycle cheques થી faster credit થાય છે, ક્યારેક same day.

### [H2] Deposit પછી — "Credited" નો Actually મતલબ

Standard rhythm: cut-off પહેલા deposit → એ દિવસના CTS cycle માં presented → drawer નું bank overnight approve કરે છે → આગલા working day credit, તમારા bank ની shadow-credit policy ની per usable. Ordinary cases માટે વધારેમાં વધારે day three ([why સાથે full timeline](https://cheqify.app/gu/blog/cheque-clearing-time-india)).

તમારા SMS જુઓ. ત્રણ outcomes:

1. **Credit alert.** Done. Counterfoil/receipt ને તો પણ થોડા weeks file કરો.
2. **Day three ની past silence.** Chase કરો — branch કે phone banking, તમારી counterfoil/receipt details સાથે. Cheques occasionally બેસી જાય છે.
3. **Return alert.** Cheque bounce થયો. Return memo નો reason code કહે છે કે આ mechanical છે (fix કરો અને redeposit) કે money trouble (clock શરૂ કરો) — [full decoder અહીં છે](https://cheqify.app/gu/blog/cheque-return-reasons-india-2026).

જો તમે regularly cheques receive કરો છો — rent, client payments, society dues — deposit really task નથી. *Tracking* છે: કયા cheques હાથમાં છે, કયા deposited, કયા cleared, કયા bounced અને follow-up જોઈએ. એ ledger exactly એ જ છે જેના માટે [cheque lifecycle management](https://cheqify.app/gu/blog/cheque-lifecycle-management-explained) છે, અને આ જ ફરક છે પૈસા collect કરવા અને એની hope કરવામાં.

---

> **Cheque counter ની બંને sides એક register સાથે better ચાલે છે.** Cheqify દરેક cheque track કરે છે જે તમે issue *અને* receive કરો છો — deposited, cleared, bounced, pending follow-up — જેથી કંઈ પણ drawer કે drop box માં ભુલાયેલું ન મરે. Plus જે cheques તમે લખો છો એમના માટે 300+ Indian bank layouts પર printing. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## ⚠️ Pre-publish fact-check required

1. **Cut-off times** are described generically ("before the branch/machine/box cut-off") — correct approach; cut-offs vary by branch and bank. Don't print specific times.
2. **Deposit machine receipt with cheque image** — common at major banks but not universal; body hedges with "at many banks". Keep the hedge.
3. **Doorstep banking availability** — offered by PSU banks (mandated for seniors 70+) and many private banks with varying charges. Body hedges; if you tighten, verify against current bank pages.
4. **"No consumer mobile cheque deposit in India"** — accurate as of drafting; re-confirm nothing has launched before publish (this is the kind of claim that ages).
5. **Same-bank cheques credit faster** — internal-transfer processing; framed as "often/sometimes". Keep hedged.
6. **Writing account number on the cheque reverse** — standard bank-advised drop-box practice; safe as framed.

---

## Internal-Link Strategy

**Forward links from this post:**
- Post #5 (`post-dated-cheques-rules-and-best-practices`) — future-dated cheques must wait.
- Post #12 (`cheque-validity-period-stop-payment-india`) — the 3-month deposit window.
- Post #16 (`cheque-number-in-cheque-book-explained`) — reading details onto the slip.
- Post #17 (`cheque-clearing-time-india`) — what happens after deposit (linked twice).
- Post #22 (`cheque-truncation-system-explained`) — branch geography is dead.
- Post #23 (`crossed-cheque-vs-account-payee`) — crossing before drop box.
- Post #28 (`cheque-return-reasons-india-2026`) — when it comes back. **Publishes Thu 2026-06-25, a week before this post — link is safe.**
- Post #13 (`cheque-lifecycle-management-explained`) — the receiving-side ledger.

**Bonus internal-link work (after publish):**
- Edit post #17 (`cheque-clearing-time-india`, all 3 locales) to add a "how to deposit it in the first place" link here.
- Edit post #23 (`crossed-cheque-vs-account-payee`, all 3 locales) to link the deposit-safety angle here.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The four channel sections carry distinct character (proof vs convenience trade-offs) — keep the drop-box pull-quote and the "machine beats the box every time" judgment intact.
- **Fact-check block:** Resolve all items — especially the mobile-deposit claim freshness.
- **Internal link order:** Post #28 must be live (publishes 2026-06-25, a week before this).
- **Word count:** EN body must be >1200 words (target 1,700–2,200). Current draft: ~1,950 words.
- **Sanity toggles:** `isHowTo: ON` (6 steps), `hasFaq: ON` (7 items).

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — posts #17 and #23.
5. IndexNow auto-pings on publish.
