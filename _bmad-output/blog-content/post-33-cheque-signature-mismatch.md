# Blog Post #33 — Cheque Bounced for Signature Mismatch? Why It Happens and How to Fix It for Good (2026)

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
- `> **Printing solves every field except one...** / **Printing एक के सिवा हर field solve करती है...** / **Printing એક સિવાય દરેક field solve કરે છે...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **Your signature drifted. The bank's card didn't...** / **आपकी signature drift हुई. Bank का card नहीं...** / **તમારી signature drift થઈ. Bank નું card નહીં...**` (pull quote in each body) → **Quote**

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

"Cheque bounce signature mismatch" / "drawer's signature differs" is one of the highest-frequency single return reasons (code 12), and the searcher is usually mid-crisis — their cheque just bounced, or a received cheque did. Post #28 decodes all codes in one line each; this is the dedicated deep-dive: why signatures drift, what the bank actually compares, the Supreme Court position that signature mismatch does NOT escape Section 138, and the permanent fix — updating the specimen signature. Cluster fit: #28 (codes), #11 (138), #2 (bounce), #19 (fill), #13 (register).

---

## Sanity Fields

- **Slug:** `cheque-signature-mismatch`
- **Tags:** `Cheque Guide`, `Banking & RBI`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** YES (updating your specimen signature, 5 steps)
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Monday 2026-07-13, 10:00 IST (auto-set in Sanity)
- **Primary keyword:** `cheque signature mismatch`
- **Secondary keywords:** drawer's signature differs, cheque bounce signature mismatch, how to update signature in bank, specimen signature change, signature mismatch section 138, reason code 12 cheque
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/cheque-signature-mismatch`
  - HI: `https://cheqify.app/hi/blog/cheque-signature-mismatch`
  - GU: `https://cheqify.app/gu/blog/cheque-signature-mismatch`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `cheque-signature-mismatch-cover.webp`
- **Subject:** Two signatures side by side under a magnifying glass — left labelled "Specimen (2009)", right labelled "Today's cheque (2026)" — visibly similar but drifted. A return memo strip below stamped "12 — Drawer's signature differs". A small branch-counter icon with "Update specimen ✓" as the fix. Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** Cheque signature mismatch in India — a 2009 specimen signature compared with today's drifted signature, and the bank return memo reason code 12.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Cheque Bounced for Signature Mismatch? Why It Happens and How to Fix It for Good (2026)
- **HI:** Signature Mismatch से Cheque Bounce हुआ? ये क्यों होता है और इसे Permanently कैसे Fix करें (2026)
- **GU:** Signature Mismatch થી Cheque Bounce થયો? આ કેમ થાય છે અને એને Permanently કેવી રીતે Fix કરવું (2026)

---

## Descriptions

- **EN:** "Drawer's signature differs" — the most personal way a cheque can bounce. Here's the whole story: why your signature drifted while the bank's specimen card stayed frozen in time, what the bank actually compares under CTS, why the Supreme Court says a signature-mismatch bounce can still mean a Section 138 case, and the 20-minute branch visit that fixes the problem permanently.
- **HI:** "Drawer's signature differs" — cheque bounce होने का सबसे personal तरीका. यहाँ है पूरी story: आपकी signature drift क्यों हुई जबकि bank का specimen card time में frozen रहा, CTS के under bank actually क्या compare करता है, Supreme Court क्यों कहता है कि signature-mismatch bounce अभी भी Section 138 case बन सकता है, और वो 20-minute branch visit जो problem permanently fix करती है.
- **GU:** "Drawer's signature differs" — cheque bounce થવાનો સૌથી personal તરીકો. અહીં છે આખી story: તમારી signature drift કેમ થઈ જ્યારે bank નું specimen card time માં frozen રહ્યું, CTS ની under bank actually શું compare કરે છે, Supreme Court કેમ કહે છે કે signature-mismatch bounce હજુ પણ Section 138 case બની શકે છે, અને એ 20-minute branch visit જે problem permanently fix કરે છે.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

Of all the ways a cheque can bounce, this one stings differently. Insufficient funds is arithmetic. A stale date is carelessness. But *"drawer's signature differs"*? That's the bank looking at your own hand's work and saying: we don't believe this is you.

It happens constantly, to honest people, on funded accounts. And it has one root cause that almost nobody thinks about until the return memo arrives.

### [H2] The Frozen Card Problem

When you opened your account — maybe fifteen, maybe twenty-five years ago — you signed a specimen card. The bank digitised that signature, and it became the reference your every cheque is judged against.

Then you lived your life. You signed ten thousand delivery slips, consent forms, and registers. Your signature did what signatures do: it compressed, simplified, sped up. The flourishes eroded. The middle name became a line. What takes you one second today took you four seconds in 2009, and it shows.

> **Your signature drifted. The bank's card didn't. A signature mismatch is rarely fraud and rarely carelessness — it's usually just time, measured in ink.**

The other common causes stack on top of drift: people who maintain *two* styles (a "formal" signature and a daily scrawl) and forget which one the bank holds; signing in a moving car or at an awkward counter angle; age, injury, or illness changing motor control; and — for businesses — the mandate problem, where the *combination* of signatures is wrong even though each one is genuine. We covered the code family this produces in the [return-reason decoder](https://cheqify.app/en/blog/cheque-return-reasons-india-2026): codes 10 through 14, with **code 12 — "drawer's signature differs"** — the everyday champion.

### [H2] What the Bank Actually Compares

Under CTS, the paying bank's checker sees a scanned image of your cheque beside the digitised specimen from their records. The comparison is visual and judgment-based — strokes, proportions, the overall gestalt — and it's deliberately conservative, because the bank carries real liability if it pays against a forged signature. Faced with genuine-but-different, the safe answer for the bank is always *return it*.

Two practical consequences. First, borderline signatures fail unpredictably — the same cheque might pass one checker and fail another, which is why mismatch bounces feel random. Second, image quality matters: a light pen stroke that scans faintly gives the checker less to match, nudging a borderline call toward return. Sign with a decent dark pen, always.

### [H2] The Part People Get Dangerously Wrong — Section 138

A persistent myth says a signature-mismatch bounce is "technical" and therefore legally harmless. The Supreme Court killed that idea: in a 2012 ruling the Court held that dishonour for signature mismatch falls within [Section 138](https://cheqify.app/en/blog/section-138-ni-act-cheque-bounce-india) where the cheque was issued against a genuine debt. The logic is hard to argue with — otherwise any drawer could escape liability by *deliberately* signing badly, an obvious loophole the Court refused to bless.

So the stakes split by role:

**If you wrote the cheque:** treat a mismatch bounce on a real payment as urgent, not clerical. The payee's 30-day notice window is running exactly as it would on a funds bounce. Reissue a fresh, correctly signed cheque immediately and fix the root cause (below) so it never recurs.

**If you received the cheque:** a signature-mismatch return doesn't end your remedies. Ask the drawer for a fresh cheque first — most mismatches are innocent drift, and a phone call resolves them. If the drawer goes quiet, the Section 138 path is open to you on the same timeline as any other dishonour ([the bounce playbook](https://cheqify.app/en/blog/cheque-bounce-reasons-and-solutions)). Don't accept a "re-signed" version of the *same* leaf, though — a cheque with two signature attempts looks altered and invites a different return code.

### [H2] The Permanent Fix — Updating Your Specimen Signature

The fix is unglamorous and takes about twenty minutes at a branch: replace the frozen card with how you actually sign today.

The flow at most banks: visit your branch (signature updates generally want in-person verification — this is one task net banking won't do, for obvious reasons), carry photo ID and your cheque book or passbook, fill the signature-update form, and provide your new signature — typically several samples, sometimes alongside your old one if you can still produce it. The bank verifies your identity, updates the digitised specimen, and from that point your cheques are judged against the new reference. Some banks process it same-day; others take a couple of working days to reflect across systems — ask, and avoid issuing important cheques in the gap.

Three notes worth knowing:

- **Joint accounts:** each holder's specimen is separate; update whoever's signature drifted. For either-or-survivor accounts, only the affected holder needs to visit.
- **Business accounts:** the equivalent fix is the *mandate* update — when directors or partners change, or when you want different signing combinations, the board resolution and new specimen cards must reach the bank before the next cheque goes out. Mandate mismatches (code 14) are entirely self-inflicted by stale paperwork.
- **Age and ability:** banks have procedures for customers who can no longer sign consistently — thumb impressions with witness requirements and other accommodations exist. If you're managing this for an elderly parent, ask the branch directly; the rules are more humane than people expect.

### [H2] Prevention — One Hand, One Style

For everyone who hasn't bounced a cheque yet, the cheap insurance:

- **Maintain exactly one signature.** The two-style life (formal + scrawl) eventually puts the wrong one on a cheque. Pick the one the bank has — or update the bank to the one you actually use.
- **Sign cheques seated, on a hard surface, unhurried.** A surprising share of mismatches are posture, not drift.
- **Use a dark, smooth pen.** Faint strokes give the checker nothing to match.
- **Audit yourself once a decade.** Sign on paper, hold it against an old cheque counterfoil or your account-opening copy. Visibly different? Spend the twenty minutes before the bank makes you.
- **Businesses: review the mandate annually.** People leave; signing rules calcify. The [register of issued cheques](https://cheqify.app/en/blog/cheque-lifecycle-management-explained) tells you who signs what — make sure the bank's version agrees.

And a structural point worth making: the signature is now the *only* handwritten thing a cheque needs. Payee, amount, date — all of it can be printed, which removes every legibility and alteration risk except the one the law insists stays human ([how to fill what must be filled](https://cheqify.app/en/blog/how-to-fill-cheque-correctly)). The fewer things your hand writes on a cheque, the fewer things drift.

The summary is almost embarrassingly simple: your signature is a credential, and like every credential it needs the occasional sync. Twenty minutes at a branch beats a bounced payment, a return charge, and an awkward conversation — every single time.

---

> **Printing solves every field except one — and protects the one it can't.** With Cheqify, payee, amount, and date are printed crisp and alteration-resistant, so your signature is the only handwriting on the leaf — signed onto a clean, professional cheque, judged on nothing but itself. 300+ Indian bank layouts, full issue register, 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** Why did my cheque bounce for signature mismatch when I signed it myself?
   **A:** Almost always signature drift: the bank compares every cheque against the specimen you gave at account opening, which may be decades old. Signatures naturally compress and simplify over years of daily use, and the bank's checker — who is deliberately conservative, since paying a forged cheque creates liability for the bank — returns anything that doesn't convincingly match the frozen reference. The fix is updating your specimen signature at the branch.

2. **Q:** What is reason code 12 on a cheque return memo?
   **A:** "Drawer's signature differs" — the paying bank compared the cheque's signature with the specimen on record and wasn't satisfied. It sits in a family of signature-related codes (10–14) covering incomplete, illegible, missing, and mandate-mismatched signatures. Code 12 is the most common because honest signature drift over time is far more frequent than fraud.

3. **Q:** Can a signature mismatch cheque bounce lead to a Section 138 case?
   **A:** Yes. The Supreme Court held in 2012 that dishonour due to signature mismatch falls within Section 138 where the cheque was issued against a genuine debt — otherwise drawers could escape liability by deliberately signing badly. If your cheque bounced this way on a real payment, treat it with the same urgency as a funds bounce: the payee's 30-day demand-notice window runs from the return memo.

4. **Q:** How do I update my signature in the bank?
   **A:** Visit your branch in person with photo ID and your cheque book or passbook, fill the signature-update form, and provide fresh specimens of your current signature (often alongside the old one). Banks require in-person verification for signature changes, so this generally can't be done through net banking. Updates reflect same-day to a couple of working days — avoid issuing important cheques in that gap.

5. **Q:** Can the drawer just re-sign the bounced cheque?
   **A:** Don't. A cheque carrying two signature attempts looks altered, and alterations without proper authentication are themselves a return reason under CTS rules. The clean fix is a fresh cheque, correctly signed — and if the mismatch came from drift, a specimen update at the branch so the next cheque doesn't repeat the story.

6. **Q:** What happens with signature mismatch on a company cheque?
   **A:** Company and partnership cheques fail on a related code — 14, "signature not as per mandate" — when the signing combination doesn't match the bank's records: one director signing where two are required, or a former signatory still signing. The fix is procedural: an updated board resolution and fresh specimen cards filed with the bank whenever signatories or signing rules change.

7. **Q:** What if someone can no longer sign consistently due to age or illness?
   **A:** Banks have accommodations: thumb-impression procedures with witness requirements, and processes for customers with changed motor ability. If you're managing banking for an elderly parent whose signature has become inconsistent, speak to the branch directly about updating the operating instructions — the available options are more flexible than most families assume.

---

## HowTo Steps (Sanity `howToSteps` field — required for HowTo schema)

| # | Name | Text |
|---|---|---|
| 1 | Confirm drift is the problem | Sign on plain paper and compare against an old counterfoil or your account-opening records. If today's signature is visibly different from what the bank holds, a specimen update is due. |
| 2 | Visit your branch with ID | Signature updates require in-person identity verification — carry photo ID and your cheque book or passbook. This is one task net banking deliberately won't do. |
| 3 | Fill the signature-update form | Complete the bank's specimen-update form and provide several samples of your current signature, alongside the old signature if you can still produce it. |
| 4 | Ask when the update takes effect | Some banks reflect the new specimen same-day; others take a couple of working days across systems. Avoid issuing important cheques in the gap. |
| 5 | Reissue any bounced cheques fresh | Don't re-sign a returned leaf — two signature attempts look like alteration. Write a fresh cheque with the now-matching signature, and going forward keep exactly one signing style. |

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

Cheque bounce होने के सारे तरीकों में, ये वाला अलग तरह से चुभता है. Insufficient funds arithmetic है. Stale date carelessness है. पर *"drawer's signature differs"*? वो bank आपके अपने हाथ के काम को देखकर कह रहा है: हमें यकीन नहीं कि ये आप हैं.

ये constantly होता है, honest लोगों के साथ, funded accounts पर. और इसका एक root cause है जिसके बारे में लगभग कोई नहीं सोचता जब तक return memo नहीं आ जाता.

### [H2] Frozen Card Problem

जब आपने account खोला — शायद पंद्रह, शायद पच्चीस साल पहले — आपने एक specimen card sign किया. Bank ने वो signature digitise की, और वो reference बन गई जिसके against आपका हर cheque judge होता है.

फिर आपने अपनी ज़िंदगी जी. आपने दस हज़ार delivery slips, consent forms, और registers sign किए. आपकी signature ने वही किया जो signatures करती हैं: compress हुई, simplify हुई, speed up हुई. Flourishes erode हो गए. Middle name एक line बन गया. जो आज आपको one second लेता है वो 2009 में four seconds लेता था, और ये दिखता है.

> **आपकी signature drift हुई. Bank का card नहीं. Signature mismatch rarely fraud है और rarely carelessness — ये usually बस time है, ink में measured.**

बाकी common causes drift के ऊपर stack होते हैं: वो लोग जो *दो* styles maintain करते हैं (एक "formal" signature और एक daily scrawl) और भूल जाते हैं कि bank कौन सी hold करता है; चलती गाड़ी में या awkward counter angle पर sign करना; age, injury, या illness से motor control बदलना; और — businesses के लिए — mandate problem, जहाँ signatures का *combination* गलत है हालाँकि हर एक genuine है. इससे बनने वाली code family हमने [return-reason decoder](https://cheqify.app/hi/blog/cheque-return-reasons-india-2026) में cover की: codes 10 से 14, जिसमें **code 12 — "drawer's signature differs"** — everyday champion है.

### [H2] Bank Actually क्या Compare करता है

CTS के under, paying bank का checker आपके cheque की scanned image को उनके records की digitised specimen के बगल में देखता है. Comparison visual और judgment-based है — strokes, proportions, overall gestalt — और ये deliberately conservative है, क्योंकि forged signature के against pay करने पर bank real liability carry करता है. Genuine-but-different के सामने, bank के लिए safe answer हमेशा *return it* है.

दो practical consequences. पहला, borderline signatures unpredictably fail होती हैं — same cheque एक checker से pass और दूसरे से fail हो सकता है, इसीलिए mismatch bounces random feel होते हैं. दूसरा, image quality matter करती है: एक light pen stroke जो faintly scan होता है checker को match करने के लिए कम देता है, एक borderline call को return की तरफ़ nudge करते हुए. हमेशा एक decent dark pen से sign करें.

### [H2] वो Part जो लोग Dangerously गलत समझते हैं — Section 138

एक persistent myth कहता है कि signature-mismatch bounce "technical" है और इसलिए legally harmless. Supreme Court ने उस idea को खत्म कर दिया: एक 2012 ruling में Court ने hold किया कि signature mismatch से dishonour [Section 138](https://cheqify.app/hi/blog/section-138-ni-act-cheque-bounce-india) के अंदर आता है जहाँ cheque एक genuine debt के against issue हुआ था. Logic से argue करना मुश्किल है — otherwise कोई भी drawer *deliberately* बुरी तरह sign करके liability escape कर सकता था, एक obvious loophole जिसे Court ने bless करने से मना कर दिया.

तो stakes role से split होते हैं:

**अगर आपने cheque लिखा:** एक real payment पर mismatch bounce को urgent treat करें, clerical नहीं. Payee की 30-day notice window exactly वैसे चल रही है जैसे funds bounce पर चलती. Immediately एक fresh, correctly signed cheque reissue करें और root cause fix करें (नीचे) ताकि ये कभी recur न हो.

**अगर आपको cheque मिला:** एक signature-mismatch return आपके remedies end नहीं करता. पहले drawer से fresh cheque मांगें — ज़्यादातर mismatches innocent drift हैं, और एक phone call उन्हें resolve कर देता है. अगर drawer चुप हो जाए, Section 138 path आपके लिए किसी भी दूसरे dishonour की same timeline पर खुला है ([bounce playbook](https://cheqify.app/hi/blog/cheque-bounce-reasons-and-solutions)). पर *same* leaf का "re-signed" version accept मत करें — दो signature attempts वाला cheque altered दिखता है और एक different return code invite करता है.

### [H2] Permanent Fix — अपनी Specimen Signature Update करना

Fix unglamorous है और branch पर लगभग बीस minutes लेता है: frozen card को उससे replace करें जैसे आप आज actually sign करते हैं.

ज़्यादातर banks पर flow: अपनी branch visit करें (signature updates generally in-person verification चाहते हैं — ये वो task है जो net banking obvious reasons से नहीं करेगा), photo ID और अपनी cheque book या passbook carry करें, signature-update form भरें, और अपनी नई signature provide करें — typically कई samples, कभी-कभी आपकी पुरानी के alongside अगर आप अभी भी produce कर सकें. Bank आपकी identity verify करता है, digitised specimen update करता है, और उस point से आपके cheques नई reference के against judge होते हैं. कुछ banks same-day process करते हैं; दूसरों को systems के across reflect होने में couple of working days लगते हैं — पूछें, और gap में important cheques issue करने से बचें.

तीन notes जो जानने लायक हैं:

- **Joint accounts:** हर holder की specimen separate है; जिसकी signature drift हुई वो update करे. Either-or-survivor accounts के लिए, सिर्फ़ affected holder को visit करना है.
- **Business accounts:** equivalent fix *mandate* update है — जब directors या partners बदलते हैं, या जब आप different signing combinations चाहते हैं, board resolution और नए specimen cards अगला cheque निकलने से पहले bank तक पहुँचने चाहिए. Mandate mismatches (code 14) stale paperwork से entirely self-inflicted हैं.
- **Age और ability:** banks के पास उन customers के लिए procedures हैं जो अब consistently sign नहीं कर सकते — witness requirements के साथ thumb impressions और दूसरी accommodations exist करती हैं. अगर आप किसी elderly parent के लिए ये manage कर रहे हैं, branch से directly पूछें; rules लोगों की expectation से ज़्यादा humane हैं.

### [H2] Prevention — One Hand, One Style

हर उसके लिए जिसका cheque अभी तक bounce नहीं हुआ, cheap insurance:

- **Exactly एक signature maintain करें.** Two-style life (formal + scrawl) eventually गलत वाली को एक cheque पर रख देती है. वो pick करें जो bank के पास है — या bank को उस पर update करें जो आप actually use करते हैं.
- **Cheques बैठकर, hard surface पर, unhurried sign करें.** Mismatches का एक surprising share posture है, drift नहीं.
- **एक dark, smooth pen use करें.** Faint strokes checker को match करने के लिए कुछ नहीं देते.
- **दशक में एक बार खुद को audit करें.** Paper पर sign करें, इसे एक पुराने cheque counterfoil या अपनी account-opening copy के against hold करें. Visibly different? बीस minutes खर्च करें इससे पहले कि bank आपसे करवाए.
- **Businesses: mandate annually review करें.** लोग जाते हैं; signing rules calcify होते हैं. [Issued cheques का register](https://cheqify.app/hi/blog/cheque-lifecycle-management-explained) बताता है कौन क्या sign करता है — sure करें कि bank का version agree करता है.

और एक structural point जो बनाने लायक है: signature अब *एकमात्र* handwritten चीज़ है जो एक cheque को चाहिए. Payee, amount, date — सब print हो सकता है, जो हर legibility और alteration risk remove करता है सिवाय उसके जिसे law human रखने पर insist करता है ([जो भरना ज़रूरी है उसे कैसे भरें](https://cheqify.app/hi/blog/how-to-fill-cheque-correctly)). आपका हाथ cheque पर जितनी कम चीज़ें लिखता है, उतनी कम चीज़ें drift होती हैं.

Summary almost embarrassingly simple है: आपकी signature एक credential है, और हर credential की तरह इसे occasional sync चाहिए. Branch पर बीस minutes एक bounced payment, एक return charge, और एक awkward conversation को हराते हैं — every single time.

---

> **Printing एक के सिवा हर field solve करती है — और जो solve नहीं कर सकती उसे protect करती है.** Cheqify के साथ, payee, amount, और date crisp और alteration-resistant printed हैं, तो आपकी signature leaf पर एकमात्र handwriting है — एक clean, professional cheque पर signed, सिर्फ़ खुद पर judged. 300+ Indian bank layouts, full issue register, 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

Cheque bounce થવાના બધા તરીકાઓમાં, આ વાળું અલગ રીતે ખૂંચે છે. Insufficient funds arithmetic છે. Stale date carelessness છે. પણ *"drawer's signature differs"*? એ bank તમારા પોતાના હાથના કામને જોઈને કહી રહ્યું છે: અમને વિશ્વાસ નથી કે આ તમે છો.

આ constantly થાય છે, honest લોકો સાથે, funded accounts પર. અને એનું એક root cause છે જેના વિશે લગભગ કોઈ નથી વિચારતું જ્યાં સુધી return memo નથી આવી જતો.

### [H2] Frozen Card Problem

જ્યારે તમે account ખોલ્યું — કદાચ પંદર, કદાચ પચ્ચીસ વર્ષ પહેલા — તમે એક specimen card sign કર્યું. Bank એ એ signature digitise કરી, અને એ reference બની ગઈ જેની against તમારો દરેક cheque judge થાય છે.

પછી તમે તમારી જિંદગી જીવી. તમે દસ હજાર delivery slips, consent forms, અને registers sign કર્યા. તમારી signature એ એ જ કર્યું જે signatures કરે છે: compress થઈ, simplify થઈ, speed up થઈ. Flourishes erode થઈ ગયા. Middle name એક line બની ગયું. જે આજે તમને one second લે છે એ 2009 માં four seconds લેતું હતું, અને આ દેખાય છે.

> **તમારી signature drift થઈ. Bank નું card નહીં. Signature mismatch rarely fraud છે અને rarely carelessness — આ usually બસ time છે, ink માં measured.**

બાકી common causes drift ની ઉપર stack થાય છે: એ લોકો જે *બે* styles maintain કરે છે (એક "formal" signature અને એક daily scrawl) અને ભૂલી જાય છે કે bank કઈ hold કરે છે; ચાલતી ગાડીમાં કે awkward counter angle પર sign કરવું; age, injury, કે illness થી motor control બદલાવું; અને — businesses માટે — mandate problem, જ્યાં signatures નું *combination* ખોટું છે જોકે દરેક genuine છે. આનાથી બનતી code family અમે [return-reason decoder](https://cheqify.app/gu/blog/cheque-return-reasons-india-2026) માં cover કરી: codes 10 થી 14, જેમાં **code 12 — "drawer's signature differs"** — everyday champion છે.

### [H2] Bank Actually શું Compare કરે છે

CTS ની under, paying bank નો checker તમારા cheque ની scanned image ને એમના records ની digitised specimen ની બાજુમાં જુએ છે. Comparison visual અને judgment-based છે — strokes, proportions, overall gestalt — અને આ deliberately conservative છે, કારણ કે forged signature ની against pay કરવા પર bank real liability carry કરે છે. Genuine-but-different ની સામે, bank માટે safe answer હંમેશા *return it* છે.

બે practical consequences. પહેલું, borderline signatures unpredictably fail થાય છે — same cheque એક checker થી pass અને બીજાથી fail થઈ શકે છે, એટલે જ mismatch bounces random feel થાય છે. બીજું, image quality matter કરે છે: એક light pen stroke જે faintly scan થાય છે checker ને match કરવા માટે ઓછું આપે છે, એક borderline call ને return તરફ nudge કરતા. હંમેશા એક decent dark pen થી sign કરો.

### [H2] એ Part જે લોકો Dangerously ખોટું સમજે છે — Section 138

એક persistent myth કહે છે કે signature-mismatch bounce "technical" છે અને એટલે legally harmless. Supreme Court એ એ idea ને ખતમ કરી દીધો: એક 2012 ruling માં Court એ hold કર્યું કે signature mismatch થી dishonour [Section 138](https://cheqify.app/gu/blog/section-138-ni-act-cheque-bounce-india) ની અંદર આવે છે જ્યાં cheque એક genuine debt ની against issue થયો હતો. Logic સાથે argue કરવું મુશ્કેલ છે — otherwise કોઈ પણ drawer *deliberately* ખરાબ રીતે sign કરીને liability escape કરી શકત, એક obvious loophole જેને Court એ bless કરવાથી ના પાડી.

તો stakes role થી split થાય છે:

**જો તમે cheque લખ્યો:** એક real payment પર mismatch bounce ને urgent treat કરો, clerical નહીં. Payee ની 30-day notice window exactly એમ જ ચાલી રહી છે જેમ funds bounce પર ચાલત. Immediately એક fresh, correctly signed cheque reissue કરો અને root cause fix કરો (નીચે) જેથી આ ક્યારેય recur ન થાય.

**જો તમને cheque મળ્યો:** એક signature-mismatch return તમારા remedies end નથી કરતો. પહેલા drawer ને fresh cheque માંગો — મોટાભાગના mismatches innocent drift છે, અને એક phone call એમને resolve કરી દે છે. જો drawer ચૂપ થઈ જાય, Section 138 path તમારા માટે કોઈ પણ બીજા dishonour ની same timeline પર ખુલ્લો છે ([bounce playbook](https://cheqify.app/gu/blog/cheque-bounce-reasons-and-solutions)). પણ *same* leaf નું "re-signed" version accept ન કરો — બે signature attempts વાળો cheque altered દેખાય છે અને એક different return code invite કરે છે.

### [H2] Permanent Fix — તમારી Specimen Signature Update કરવી

Fix unglamorous છે અને branch પર લગભગ વીસ minutes લે છે: frozen card ને એનાથી replace કરો જેમ તમે આજે actually sign કરો છો.

મોટાભાગના banks પર flow: તમારી branch visit કરો (signature updates generally in-person verification માંગે છે — આ એ task છે જે net banking obvious reasons થી નહીં કરે), photo ID અને તમારી cheque book કે passbook carry કરો, signature-update form ભરો, અને તમારી નવી signature provide કરો — typically ઘણા samples, ક્યારેક તમારી જૂની ની alongside જો તમે હજુ produce કરી શકો. Bank તમારી identity verify કરે છે, digitised specimen update કરે છે, અને એ point થી તમારા cheques નવી reference ની against judge થાય છે. કેટલાક banks same-day process કરે છે; બીજાઓને systems ની across reflect થવામાં couple of working days લાગે છે — પૂછો, અને gap માં important cheques issue કરવાથી બચો.

ત્રણ notes જે જાણવા લાયક છે:

- **Joint accounts:** દરેક holder ની specimen separate છે; જેની signature drift થઈ એ update કરે. Either-or-survivor accounts માટે, ફક્ત affected holder ને visit કરવાનું છે.
- **Business accounts:** equivalent fix *mandate* update છે — જ્યારે directors કે partners બદલાય છે, કે જ્યારે તમે different signing combinations માંગો છો, board resolution અને નવા specimen cards આગલો cheque નીકળતા પહેલા bank સુધી પહોંચવા જોઈએ. Mandate mismatches (code 14) stale paperwork થી entirely self-inflicted છે.
- **Age અને ability:** banks પાસે એ customers માટે procedures છે જે હવે consistently sign નથી કરી શકતા — witness requirements સાથે thumb impressions અને બીજી accommodations exist કરે છે. જો તમે કોઈ elderly parent માટે આ manage કરી રહ્યા છો, branch ને directly પૂછો; rules લોકોની expectation કરતા વધારે humane છે.

### [H2] Prevention — One Hand, One Style

દરેક એના માટે જેનો cheque હજુ સુધી bounce નથી થયો, cheap insurance:

- **Exactly એક signature maintain કરો.** Two-style life (formal + scrawl) eventually ખોટી વાળીને એક cheque પર મૂકી દે છે. એ pick કરો જે bank પાસે છે — કે bank ને એના પર update કરો જે તમે actually use કરો છો.
- **Cheques બેસીને, hard surface પર, unhurried sign કરો.** Mismatches નો એક surprising share posture છે, drift નહીં.
- **એક dark, smooth pen use કરો.** Faint strokes checker ને match કરવા માટે કંઈ નથી આપતા.
- **દાયકામાં એક વાર ખુદને audit કરો.** Paper પર sign કરો, એને એક જૂના cheque counterfoil કે તમારી account-opening copy ની against hold કરો. Visibly different? વીસ minutes ખર્ચો એ પહેલા કે bank તમારી પાસે કરાવે.
- **Businesses: mandate annually review કરો.** લોકો જાય છે; signing rules calcify થાય છે. [Issued cheques નું register](https://cheqify.app/gu/blog/cheque-lifecycle-management-explained) કહે છે કોણ શું sign કરે છે — sure કરો કે bank નું version agree કરે છે.

અને એક structural point જે બનાવવા લાયક છે: signature હવે *એકમાત્ર* handwritten વસ્તુ છે જે એક cheque ને જોઈએ. Payee, amount, date — બધું print થઈ શકે છે, જે દરેક legibility અને alteration risk remove કરે છે સિવાય એના જેને law human રાખવા પર insist કરે છે ([જે ભરવું જરૂરી છે એને કેવી રીતે ભરવું](https://cheqify.app/gu/blog/how-to-fill-cheque-correctly)). તમારો હાથ cheque પર જેટલી ઓછી વસ્તુઓ લખે છે, એટલી ઓછી વસ્તુઓ drift થાય છે.

Summary almost embarrassingly simple છે: તમારી signature એક credential છે, અને દરેક credential ની જેમ એને occasional sync જોઈએ. Branch પર વીસ minutes એક bounced payment, એક return charge, અને એક awkward conversation ને હરાવે છે — every single time.

---

> **Printing એક સિવાય દરેક field solve કરે છે — અને જે solve નથી કરી શકતી એને protect કરે છે.** Cheqify સાથે, payee, amount, અને date crisp અને alteration-resistant printed છે, તો તમારી signature leaf પર એકમાત્ર handwriting છે — એક clean, professional cheque પર signed, ફક્ત ખુદ પર judged. 300+ Indian bank layouts, full issue register, 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## ⚠️ Pre-publish fact-check required

1. **The 2012 Supreme Court ruling** that signature-mismatch dishonour falls within Section 138 is the **Laxmi Dyechem v. State of Gujarat** line of cases. The body references "a 2012 ruling" without naming the case — if you add the case name or citation, verify it first ((2012) 13 SCC 375 per common citation — confirm before printing).
2. **Specimen-update procedure** (in-person, ID, multiple samples, same-day to a couple of days) — standard bank practice, described generically and hedged. Don't attribute specifics to named banks without checking.
3. **Thumb-impression / changed-ability accommodations** — real bank procedures with witness requirements; the body deliberately keeps it brief and directs readers to ask the branch. Keep it that way.
4. **CTS checker workflow** (image vs digitised specimen, conservative judgment) — accurate at the descriptive level used. Safe.
5. **"Don't re-sign the same leaf"** advice — grounded in the alterations return reason (code 17 family). Safe as framed.

---

## Internal-Link Strategy

**Forward links from this post:**
- Post #28 (`cheque-return-reasons-india-2026`) — the code family context. **Publishes 2026-06-25, well before this post — safe.**
- Post #11 (`section-138-ni-act-cheque-bounce-india`) — the legal stakes.
- Post #2 (`cheque-bounce-reasons-and-solutions`) — the payee's bounce playbook.
- Post #19 (`how-to-fill-cheque-correctly`) — print everything but the signature.
- Post #13 (`cheque-lifecycle-management-explained`) — the business mandate/register angle.

**Reciprocal (deferred from #28):** After this post is live, edit post #28 (all 3 locales) to link its signature-codes section here — this was deliberately deferred when #28 was drafted.

**Bonus internal-link work (after publish):**
- Edit post #2 (`cheque-bounce-reasons-and-solutions`, all 3 locales) to link its signature mention here.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The "frozen card" framing and "time, measured in ink" prose carry the voice — keep the opening intact.
- **Fact-check block:** Resolve all items — especially the SC citation if named.
- **Internal link order:** Post #28 must be live (publishes 2026-06-25 — safe margin).
- **Word count:** EN body must be >1200 words (target 1,600–2,100). Current draft: ~1,800 words.
- **Sanity toggles:** `isHowTo: ON` (5 steps), `hasFaq: ON` (7 items).

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. **Deferred reciprocal:** edit post #28's signature-codes section (all 3 locales) to link here.
5. IndexNow auto-pings on publish.
