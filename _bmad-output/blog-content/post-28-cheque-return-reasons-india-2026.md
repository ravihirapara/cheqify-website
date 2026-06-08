# Blog Post #28 — Why Did My Cheque Bounce? RBI Return Reason Codes Explained (2026)

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
- `> **Most technical returns are self-inflicted...** / **ज़्यादातर technical returns self-inflicted...** / **મોટાભાગના technical returns self-inflicted...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **"Refer to drawer" is banker's politeness...** / **"Refer to drawer" banker की politeness है...** / **"Refer to drawer" banker ની politeness છે...**` (pull quote in each body) → **Quote**

**Apply as Table block (@sanity/table plugin):**
- The "Return Reason Codes at a Glance" table in each body → insert via the **Table** block in Sanity Studio.

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

When a cheque bounces, the return memo carries a numeric reason code and a terse phrase ("12 — drawer's signature differs") that nobody explains. Searchers arrive holding that exact memo. Post #2 covers bounce causes broadly; this one is the decoder ring — the actual RBI clearing-house reason codes, grouped by family, with "what it means / whose fault / what to do next" for each, plus the legal-risk split (which returns can trigger Section 138 and which can't). Strong troubleshooting + money intent. Cluster fit: #2 (bounce), #11 (Section 138), #12 (validity/stop payment), #22 (CTS), #5 (post-dated), #19 (fill correctly).

---

## Sanity Fields

- **Slug:** `cheque-return-reasons-india-2026`
- **Tags:** `Banking & RBI`, `Cheque Guide`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** NO (decoder/reference post)
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Thursday 2026-06-25, 10:00 IST (auto-set in Sanity)
- **Primary keyword:** `cheque return reasons`
- **Secondary keywords:** cheque bounce reason codes, refer to drawer meaning, cheque return memo, reason code 12 cheque, funds insufficient cheque return, cheque return charges, technical cheque bounce
- **Reading time:** ~9 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/cheque-return-reasons-india-2026`
  - HI: `https://cheqify.app/hi/blog/cheque-return-reasons-india-2026`
  - GU: `https://cheqify.app/gu/blog/cheque-return-reasons-india-2026`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `cheque-return-reasons-india-2026-cover.webp`
- **Subject:** A cheque return memo slip clipped to a cheque leaf, the memo showing a large stamped "RETURNED" and a highlighted line "Reason code: 12 — Drawer's signature differs". Around the memo, four small floating chips: "01 Funds insufficient", "31 Stale", "50 Account closed", "39 Image not clear". A small magnifying glass over the code line. Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** Cheque return memo with RBI reason code highlighted — decoding why a cheque bounced in India, from funds insufficient to signature mismatch and account closed.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Why Did My Cheque Bounce? RBI Return Reason Codes Explained (2026)
- **HI:** मेरा Cheque Bounce क्यों हुआ? RBI Return Reason Codes Explained (2026)
- **GU:** મારો Cheque Bounce કેમ થયો? RBI Return Reason Codes Explained (2026)

---

## Descriptions

- **EN:** Your cheque came back with a memo that says "Reason: 12" and nothing else. Here's the decoder — the RBI clearing-house return codes explained in plain words, grouped by family: funds (01–05), signature (10–17), dates (30–32), image/CTS (39–42), account (50–55). Plus the split that matters most: which returns can land the drawer in a Section 138 case, and which are just paperwork.
- **HI:** आपका cheque एक memo के साथ वापस आया जो कहता है "Reason: 12" और कुछ नहीं. यहाँ है decoder — RBI clearing-house return codes plain words में explained, family से grouped: funds (01–05), signature (10–17), dates (30–32), image/CTS (39–42), account (50–55). Plus वो split जो सबसे ज़्यादा matter करता है: कौन से returns drawer को Section 138 case में land कर सकते हैं, और कौन से सिर्फ़ paperwork हैं.
- **GU:** તમારો cheque એક memo સાથે પાછો આવ્યો જે કહે છે "Reason: 12" અને બીજું કંઈ નહીં. અહીં છે decoder — RBI clearing-house return codes plain words માં explained, family થી grouped: funds (01–05), signature (10–17), dates (30–32), image/CTS (39–42), account (50–55). Plus એ split જે સૌથી વધારે matter કરે છે: કયા returns drawer ને Section 138 case માં land કરી શકે છે, અને કયા ફક્ત paperwork છે.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

The cheque comes back. Stapled to it, a thin slip — the return memo — and on it, the entire explanation your bank thinks you deserve: "Reason: 12."

Twelve. That's it. No sentence, no suggestion, no hint of whether you should redeposit, call someone, or call a lawyer.

Here's the thing the memo doesn't tell you: that number isn't your bank being lazy. It's a standardised code from the RBI's clearing-house rulebook — every bank in India returns cheques using the same numbered list, so that machines and clearing systems can process rejections without anyone writing essays. Which means once you can read the list, every bounce in the country explains itself.

So let's read the list.

### [H2] Where the Codes Come From

When a cheque is presented through clearing and the paying bank refuses it, the rejection travels back with a reason code drawn from a uniform annexure in the RBI's clearing-house regulations. The codes are grouped in families — and the family tells you most of what you need to know before you even look up the specific number:

- **01–05:** money problems. The drawer's account couldn't or wouldn't fund it.
- **10–17:** signature and authority problems. The instruction didn't look authentic.
- **20s:** endorsement problems (rarer now).
- **30s:** date problems. Too early, too late, or no date at all.
- **33–42:** instrument and image problems — the physical or scanned cheque itself failed ([this is CTS territory](https://cheqify.app/en/blog/cheque-truncation-system-explained)).
- **50s:** account problems. The account itself is closed, moved, or blocked.

One important note before the decoder: the same code can mean very different consequences depending on which side of the cheque you're standing on. We'll flag both views — payee (you received the bounce) and drawer (you wrote the cheque).

### [H2] The Money Codes (01–05) — The Ones With Teeth

**01 — Funds insufficient.** The classic. The account simply didn't have the money on presentation day. Payee: you can re-present within the cheque's validity, but this is also the code that arms a [Section 138 criminal case](https://cheqify.app/en/blog/section-138-ni-act-cheque-bounce-india) — demand notice within 30 days of the return memo, and the clock is real. Drawer: fund the account fast and ask the payee to re-present; an apology now is cheaper than a lawyer later.

**02 — Exceeds arrangement.** The account has an overdraft or limit arrangement, and this cheque would have blown past it. Functionally a funds problem, treated like 01 — including the legal exposure.

**03 — Effects not cleared, present again.** The drawer's account is expecting money (deposited cheques still in clearing) that hasn't arrived yet. The bank is literally telling you: try again in a few days. The least alarming code in the money family.

**04 — Refer to drawer.** The famously vague one.

> **"Refer to drawer" is banker's politeness — it means "we won't pay, ask the person who wrote it why." In practice it usually travels with the funds family, and courts have treated it accordingly.**

Historically banks used 04 as a soft wrapper around "no money" (or around something the bank prefers not to spell out — a dispute, an internal flag). Payee: treat it as seriously as 01. Ask the drawer directly, and if the answer is mumbling, start the Section 138 notice clock rather than waiting it out.

**05 — Kindly contact drawer/drawee bank.** A cousin of 04 — something needs a human conversation. Often a hold, a verification step, or a flag the bank wants resolved over the counter.

### [H2] The Signature Codes (10–17) — Authenticity Problems

**10 — Drawer's signature incomplete. 11 — Drawer's signature illegible. 12 — Drawer's signature differs. 13 — Drawer's signature required. 14 — Drawer's signature not as per mandate.** Variations on one theme: the paying bank compared the cheque against the specimen signature on file and wasn't satisfied. Code 12 — *differs* — is the most common and the most frustrating, because signatures drift over decades while the bank's specimen card stays frozen in time.

Drawer: if your signature has evolved since you opened the account, update your specimen at the branch — it's a short form and ends the problem permanently. Payee: ask the drawer to re-sign or reissue; and know that the Supreme Court has held that a signature-mismatch dishonour is *not* automatically outside Section 138 — a drawer can't escape liability just by signing badly. (More on the legal line below.)

**14 specifically** appears with company and partnership accounts — the cheque was signed, but not by the combination of people the account mandate requires (two directors, say, when only one signed). Fix is procedural: get the mandated signatories on a fresh leaf.

**17 — Alterations require drawer's authentication.** Something on the cheque was corrected or overwritten without a counter-signature. Under CTS rules, banks are conservative about alterations — practically, *any* visible correction is grounds for return ([the fill-it-right rules that avoid this](https://cheqify.app/en/blog/how-to-fill-cheque-correctly)). Reissue a clean leaf; don't try to initial your way out.

### [H2] The Date Codes (30–32) — Too Early, Too Late, Not At All

**30 — Instrument post-dated.** Presented before its date. The bank can't pay a cheque from the future ([how post-dated cheques actually work](https://cheqify.app/en/blog/post-dated-cheques-rules-and-best-practices)). Payee: hold it and re-present on or after the date.

**31 — Instrument out-dated / stale.** The mirror image — presented more than three months after its date, and the cheque is dead paper ([the validity rules](https://cheqify.app/en/blog/cheque-validity-period-stop-payment-india)). No re-presentation will fix this; only a fresh cheque or formal revalidation by the drawer.

**32 — Instrument undated / without proper date.** No date, an impossible date, or an ambiguous one. Back it goes.

### [H2] The Instrument and Image Codes (33–42) — CTS Mechanics

Since clearing went image-based, a family of returns exists purely about the *picture* of your cheque:

**33 — Instrument mutilated, requires bank's guarantee.** Torn, taped, damaged. The collecting bank can sometimes pass it with a guarantee; often it's simpler for the drawer to reissue.

**35 — Clearing house stamp / date required.** A process stamp is missing — bank-side housekeeping, not your error.

**37 — Present in proper zone.** The instrument went to the wrong clearing grid/zone. Bank-side routing; redeposit usually resolves it.

**39 — Image not clear, present again with paper.** The scan was too poor for the paying bank to verify. Faded ink, low contrast, smudges — this is where cheap pens and dot-matrix overprinting come back to bite ([what CTS image-based clearing actually checks](https://cheqify.app/en/blog/cheque-truncation-system-explained)). The physical cheque may be called for.

**40 — Present with document. 42 — Paper not received.** Process codes — supporting documentation or the physical instrument was expected and didn't arrive.

The pattern across this family: **nobody's broke and nobody's faking** — these are mechanical failures, fixed by redepositing, supplying paper, or reissuing a cleaner cheque. Annoying, not alarming.

### [H2] The Account Codes (50–55) — The Serious Family

**50 — Account closed.** The drawer's account no longer exists. This is grave: issuing a cheque on a closed account is squarely within Section 138 — courts treat it as seriously as insufficient funds, sometimes more so, since closing the account *after* issuing a cheque looks deliberate.

**51 — Account transferred to another branch.** Housekeeping — the account moved, present to the right branch/route. Rarer under CTS but still appears.

**52 — No such account.** The account number on the cheque doesn't match anything. Either a typo on the leaf (misprint, wrong book) or something worse. Verify with the drawer immediately.

**53 — Title of account required. 54 — Title of account wrong/incomplete.** Name/title mismatches between the cheque and the account records.

**55 — Account blocked.** Frozen — by court order, regulator, or the bank's own compliance. The drawer's problem to resolve; nothing the payee can do at the counter.

You'll also occasionally meet returns worded "payment stopped by drawer" — the [stop-payment instruction](https://cheqify.app/en/blog/cheque-validity-period-stop-payment-india) travelling as its own reason. Legally, a stop-payment bounce can still attract Section 138 if the underlying debt is real — courts look at why payment was stopped, not just that it was.

### [H2] Return Reason Codes at a Glance

> **Editor note:** Insert this as a **Table block** in Sanity Studio.

| Code | Reason | Family | Re-present? | Section 138 risk |
|---|---|---|---|---|
| 01 | Funds insufficient | Money | Yes, within validity | **High** |
| 02 | Exceeds arrangement | Money | Yes, after funding | **High** |
| 03 | Effects not cleared, present again | Money | Yes, after a few days | Low |
| 04 | Refer to drawer | Money | Ask drawer first | **High** |
| 05 | Contact drawer/drawee bank | Money | After resolution | Case-by-case |
| 10–13 | Signature incomplete/illegible/differs/required | Signature | After re-sign/reissue | Possible |
| 14 | Signature not as per mandate | Signature | With correct signatories | Possible |
| 17 | Alteration needs authentication | Signature | Reissue clean leaf | Low |
| 30 | Post-dated | Date | On/after the date | No (premature) |
| 31 | Stale (out-dated) | Date | No — fresh cheque needed | No |
| 32 | Undated / improper date | Date | After correction | Low |
| 33 | Mutilated instrument | Instrument | Reissue usually | Low |
| 35 / 37 | Clearing stamp / wrong zone | Process | Yes — bank-side | No |
| 39 | Image not clear | CTS image | Yes, with paper | Low |
| 40 / 42 | Document / paper not received | CTS process | Yes, with paper | No |
| 50 | Account closed | Account | No | **High** |
| 51 | Account transferred | Account | Via correct route | No |
| 52 | No such account | Account | Verify first | **High** if deliberate |
| 53 / 54 | Account title issues | Account | After correction | Low |
| 55 | Account blocked | Account | After unblocking | Case-by-case |

### [H2] The Legal Line — Which Bounces Can Become a Case

The split that matters: **Section 138 is about a cheque issued against a real debt that fails for reasons within the drawer's control.** Funds insufficient (01, 02), refer-to-drawer in substance (04), account closed (50), and — per Supreme Court rulings — even signature mismatch and stop-payment can qualify, because the courts look past the code to the conduct. What *doesn't* arm a case: technical and process returns (image quality, stamps, zones, premature presentation of a post-dated cheque).

If you're the payee holding a money-family return: the demand notice must go within **30 days** of the return memo. Keep the memo — it's the foundational document. The [full Section 138 timeline is here](https://cheqify.app/en/blog/section-138-ni-act-cheque-bounce-india).

If you're the drawer: every bounce also costs you return charges on both sides (banks charge the *drawer* heavily for outward returns — the slabs vary by bank, and repeat offences escalate), and a pattern of funds-family bounces can get cheque facilities withdrawn. Banks are explicitly empowered to do this for repeat ₹1-crore-plus offenders, and quietly do it at smaller scales too.

### [H2] What To Do The Day The Memo Arrives

1. **Read the code, find the family.** Money, signature, date, image, account.
2. **Technical family?** Fix mechanically — redeposit, supply paper, get a clean reissue. No drama.
3. **Money or account family?** Call the drawer once, politely. Then watch the calendar — your 30-day notice window is running.
4. **Keep everything.** The original cheque, the return memo, the deposit slip. The memo's date drives every legal deadline.
5. **If you're the drawer** — fix the root cause today: fund the account, update the specimen signature, or reissue. And check what the bounce cost you in charges; it's rarely trivial.

Most bounces in practice are *self-inflicted technical returns* — corrections on the leaf, faded ink, date games ([the common mistakes](https://cheqify.app/en/blog/cheque-bounce-reasons-and-solutions) haven't changed in decades). Which is the genuinely fixable part: a cheque that's printed, validated, and tracked simply doesn't generate codes 10–42.

---

> **Most technical returns are self-inflicted — and entirely preventable.** Cheqify prints cheques with bank-accurate layouts, auto amount-in-words, and validation before anything touches paper — so codes 12, 17, 32 and 39 never appear on your return memos. Plus full tracking of every issued leaf. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** What does "refer to drawer" mean on a returned cheque?
   **A:** It's reason code 04 — banker's shorthand for "we won't pay this; ask the person who wrote it why." Historically it wraps funds problems or internal flags the bank won't spell out. Treat it as seriously as "funds insufficient": contact the drawer, and if the explanation is weak, remember the Section 138 demand-notice window runs 30 days from the return memo.

2. **Q:** What is reason code 12 on a cheque return memo?
   **A:** "Drawer's signature differs" — the paying bank compared the signature on the cheque with the specimen on file and wasn't satisfied. It's one of the most common returns because signatures drift over years. The fix for the drawer is to update the specimen signature at the branch, or re-sign/reissue the cheque. Courts have held signature-mismatch dishonour can still attract Section 138 where a real debt exists.

3. **Q:** Can I re-present a bounced cheque?
   **A:** Usually yes — a cheque can be presented again any number of times within its 3-month validity, and re-presentation is routine for codes like 03 (effects not cleared) or after the drawer funds the account. The exceptions: stale cheques (code 31) and closed accounts (code 50) can't be cured by re-presenting — you need a fresh cheque or legal action.

4. **Q:** Which cheque return reasons can lead to a Section 138 case?
   **A:** The money and account families: funds insufficient (01), exceeds arrangement (02), refer to drawer (04 in substance), and account closed (50) are the classic triggers. Courts have also brought signature-mismatch and stop-payment dishonours within Section 138 where the cheque was issued against a genuine debt. Purely technical returns — image quality, stamps, zones, premature presentation — don't arm a case.

5. **Q:** What are cheque return charges?
   **A:** Both sides can be charged: the drawer's bank levies an outward-return charge (typically the heavier one, often a few hundred rupees and escalating for repeat offences), and the payee's bank may levy a smaller inward-return charge. Exact slabs vary by bank and account type and are revised periodically — check your bank's current schedule of charges.

6. **Q:** What does reason code 39 "image not clear" mean?
   **A:** Under CTS, cheques clear as scanned images. Code 39 means the image was too poor for the paying bank to verify — faded ink, low contrast, smudging, or damage — and the instrument should be presented again, with the physical cheque available if called for. It's a mechanical return, not a funds problem; writing with a strong dark pen (or printing the cheque) prevents it.

7. **Q:** What happens if my cheque bounces repeatedly?
   **A:** Beyond mounting return charges, repeated funds-family bounces invite escalating consequences: banks can withdraw your cheque book facility (explicitly so for repeated large-value bounces), your credit relationship with the bank degrades, and each individual bounce against a real debt is a potential Section 138 proceeding with fine up to twice the cheque amount or imprisonment. Patterns get noticed — fix the root cause early.

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote, table, and CTA callout.

---

Cheque वापस आता है. उससे stapled, एक पतली slip — return memo — और उस पर, पूरी explanation जो आपका bank सोचता है कि आप deserve करते हैं: "Reason: 12."

बारह. बस. कोई sentence नहीं, कोई suggestion नहीं, कोई hint नहीं कि आपको redeposit करना चाहिए, किसी को call करना चाहिए, या lawyer को call करना चाहिए.

यहाँ वो बात है जो memo आपको नहीं बताता: वो number आपके bank का lazy होना नहीं है. ये RBI की clearing-house rulebook से एक standardised code है — India का हर bank same numbered list use करके cheques return करता है, ताकि machines और clearing systems बिना essays लिखे rejections process कर सकें. जिसका मतलब है कि एक बार आप list पढ़ना सीख जाएँ, देश का हर bounce खुद को explain कर देता है.

तो चलिए list पढ़ते हैं.

### [H2] Codes कहाँ से आते हैं

जब एक cheque clearing के through present होता है और paying bank उसे refuse करता है, rejection एक reason code के साथ वापस travel करता है जो RBI के clearing-house regulations की एक uniform annexure से drawn है. Codes families में grouped हैं — और family आपको specific number देखने से पहले ही ज़्यादातर बता देती है:

- **01–05:** money problems. Drawer का account fund नहीं कर सका या नहीं करना चाहता था.
- **10–17:** signature और authority problems. Instruction authentic नहीं लगा.
- **20s:** endorsement problems (अब rare).
- **30s:** date problems. बहुत जल्दी, बहुत late, या date ही नहीं.
- **33–42:** instrument और image problems — physical या scanned cheque खुद fail हुआ ([ये CTS territory है](https://cheqify.app/hi/blog/cheque-truncation-system-explained)).
- **50s:** account problems. Account खुद closed, moved, या blocked है.

Decoder से पहले एक important note: same code का मतलब बहुत different consequences हो सकता है इस पर depend करते हुए कि आप cheque की किस side खड़े हैं. हम दोनों views flag करेंगे — payee (आपको bounce मिला) और drawer (आपने cheque लिखा).

### [H2] Money Codes (01–05) — वो जो काटते हैं

**01 — Funds insufficient.** Classic. Presentation day पर account में simply पैसा नहीं था. Payee: आप cheque की validity के अंदर re-present कर सकते हैं, पर ये वही code भी है जो [Section 138 criminal case](https://cheqify.app/hi/blog/section-138-ni-act-cheque-bounce-india) arm करता है — return memo के 30 days के अंदर demand notice, और clock real है. Drawer: account fast fund करें और payee से re-present करने को कहें; अभी एक apology बाद में एक lawyer से सस्ती है.

**02 — Exceeds arrangement.** Account में overdraft या limit arrangement है, और ये cheque उसके past चला जाता. Functionally एक funds problem, 01 की तरह treated — legal exposure समेत.

**03 — Effects not cleared, present again.** Drawer का account पैसा expect कर रहा है (deposited cheques जो अभी clearing में हैं) जो अभी नहीं पहुँचा. Bank literally आपसे कह रहा है: कुछ दिनों में फिर try करें. Money family का least alarming code.

**04 — Refer to drawer.** वो famously vague वाला.

> **"Refer to drawer" banker की politeness है — मतलब "हम pay नहीं करेंगे, जिसने लिखा उससे पूछो क्यों." Practice में ये usually funds family के साथ travel करता है, और courts ने इसे उसी हिसाब से treat किया है.**

Historically banks 04 को "no money" के around एक soft wrapper के तौर पर use करते थे (या किसी ऐसी चीज़ के around जो bank spell out नहीं करना चाहता — एक dispute, एक internal flag). Payee: इसे 01 जितनी seriously treat करें. Drawer से directly पूछें, और अगर answer में mumbling है, wait करने के बजाय Section 138 notice clock शुरू करें.

**05 — Kindly contact drawer/drawee bank.** 04 का cousin — किसी चीज़ को human conversation चाहिए. अक्सर एक hold, एक verification step, या एक flag जो bank counter पर resolve करवाना चाहता है.

### [H2] Signature Codes (10–17) — Authenticity Problems

**10 — Drawer's signature incomplete. 11 — Drawer's signature illegible. 12 — Drawer's signature differs. 13 — Drawer's signature required. 14 — Drawer's signature not as per mandate.** एक ही theme के variations: paying bank ने cheque को file पर specimen signature के against compare किया और satisfied नहीं हुआ. Code 12 — *differs* — सबसे common और सबसे frustrating है, क्योंकि signatures decades में drift करती हैं जबकि bank का specimen card time में frozen रहता है.

Drawer: अगर account खोलने के बाद से आपकी signature evolve हुई है, branch पर अपना specimen update करें — ये एक short form है और problem को permanently end कर देता है. Payee: drawer से re-sign या reissue करने को कहें; और जानें कि Supreme Court ने hold किया है कि signature-mismatch dishonour automatically Section 138 के *बाहर* नहीं है — एक drawer सिर्फ़ बुरी तरह sign करके liability escape नहीं कर सकता. (Legal line पर ज़्यादा नीचे.)

**14 specifically** company और partnership accounts के साथ appear होता है — cheque signed था, पर लोगों के उस combination से नहीं जो account mandate require करता है (दो directors, मान लें, जब सिर्फ़ एक ने sign किया). Fix procedural है: mandated signatories को एक fresh leaf पर लाएँ.

**17 — Alterations require drawer's authentication.** Cheque पर कुछ बिना counter-signature के correct या overwrite हुआ था. CTS rules के under, banks alterations के बारे में conservative हैं — practically, *कोई भी* visible correction return का ground है ([fill-it-right rules जो इससे बचाते हैं](https://cheqify.app/hi/blog/how-to-fill-cheque-correctly)). Clean leaf reissue करें; initial करके निकलने की कोशिश मत करें.

### [H2] Date Codes (30–32) — बहुत जल्दी, बहुत Late, बिल्कुल नहीं

**30 — Instrument post-dated.** अपनी date से पहले presented. Bank future का cheque pay नहीं कर सकता ([post-dated cheques actually कैसे काम करते हैं](https://cheqify.app/hi/blog/post-dated-cheques-rules-and-best-practices)). Payee: hold करें और date पर या उसके बाद re-present करें.

**31 — Instrument out-dated / stale.** Mirror image — अपनी date के तीन months से ज़्यादा बाद presented, और cheque dead paper है ([validity rules](https://cheqify.app/hi/blog/cheque-validity-period-stop-payment-india)). कोई re-presentation इसे fix नहीं करेगा; सिर्फ़ एक fresh cheque या drawer द्वारा formal revalidation.

**32 — Instrument undated / without proper date.** कोई date नहीं, एक impossible date, या एक ambiguous. वापस जाता है.

### [H2] Instrument और Image Codes (33–42) — CTS Mechanics

जब से clearing image-based हुई, returns की एक family purely आपके cheque की *picture* के बारे में exist करती है:

**33 — Instrument mutilated, requires bank's guarantee.** फटा, taped, damaged. Collecting bank कभी-कभी guarantee के साथ pass कर सकता है; अक्सर drawer के लिए reissue simpler है.

**35 — Clearing house stamp / date required.** एक process stamp missing है — bank-side housekeeping, आपकी error नहीं.

**37 — Present in proper zone.** Instrument गलत clearing grid/zone में गया. Bank-side routing; redeposit usually resolve करता है.

**39 — Image not clear, present again with paper.** Scan इतना poor था कि paying bank verify नहीं कर सका. Faded ink, low contrast, smudges — यहीं cheap pens और dot-matrix overprinting वापस काटने आते हैं ([CTS image-based clearing actually क्या check करती है](https://cheqify.app/hi/blog/cheque-truncation-system-explained)). Physical cheque call किया जा सकता है.

**40 — Present with document. 42 — Paper not received.** Process codes — supporting documentation या physical instrument expected था और नहीं पहुँचा.

इस family के across pattern: **कोई broke नहीं है और कोई fake नहीं कर रहा** — ये mechanical failures हैं, redeposit करके, paper supply करके, या एक cleaner cheque reissue करके fixed. Annoying, alarming नहीं.

### [H2] Account Codes (50–55) — Serious Family

**50 — Account closed.** Drawer का account अब exist नहीं करता. ये grave है: closed account पर cheque issue करना squarely Section 138 के अंदर है — courts इसे insufficient funds जितना seriously treat करती हैं, कभी-कभी ज़्यादा, क्योंकि cheque issue करने के *बाद* account close करना deliberate दिखता है.

**51 — Account transferred to another branch.** Housekeeping — account move हुआ, सही branch/route पर present करें. CTS के under rarer पर अभी भी appear होता है.

**52 — No such account.** Cheque पर का account number किसी चीज़ से match नहीं करता. या तो leaf पर typo (misprint, गलत book) या कुछ worse. Drawer के साथ immediately verify करें.

**53 — Title of account required. 54 — Title of account wrong/incomplete.** Cheque और account records के बीच name/title mismatches.

**55 — Account blocked.** Frozen — court order, regulator, या bank की अपनी compliance से. Resolve करना drawer की problem है; payee counter पर कुछ नहीं कर सकता.

आप कभी-कभी "payment stopped by drawer" worded returns से भी मिलेंगे — [stop-payment instruction](https://cheqify.app/hi/blog/cheque-validity-period-stop-payment-india) अपने ही reason के तौर पर travel करता हुआ. Legally, एक stop-payment bounce अभी भी Section 138 attract कर सकता है अगर underlying debt real है — courts देखती हैं कि payment *क्यों* stop हुई, सिर्फ़ ये नहीं कि हुई.

### [H2] Return Reason Codes एक नज़र में

> **Editor note:** Insert this as a **Table block** in Sanity Studio.

| Code | Reason | Family | Re-present? | Section 138 risk |
|---|---|---|---|---|
| 01 | Funds insufficient | Money | हाँ, validity के अंदर | **High** |
| 02 | Exceeds arrangement | Money | हाँ, funding के बाद | **High** |
| 03 | Effects not cleared, present again | Money | हाँ, कुछ दिनों बाद | Low |
| 04 | Refer to drawer | Money | पहले drawer से पूछें | **High** |
| 05 | Contact drawer/drawee bank | Money | Resolution के बाद | Case-by-case |
| 10–13 | Signature incomplete/illegible/differs/required | Signature | Re-sign/reissue के बाद | Possible |
| 14 | Signature not as per mandate | Signature | Correct signatories के साथ | Possible |
| 17 | Alteration needs authentication | Signature | Clean leaf reissue | Low |
| 30 | Post-dated | Date | Date पर/बाद | No (premature) |
| 31 | Stale (out-dated) | Date | नहीं — fresh cheque चाहिए | No |
| 32 | Undated / improper date | Date | Correction के बाद | Low |
| 33 | Mutilated instrument | Instrument | Usually reissue | Low |
| 35 / 37 | Clearing stamp / wrong zone | Process | हाँ — bank-side | No |
| 39 | Image not clear | CTS image | हाँ, paper के साथ | Low |
| 40 / 42 | Document / paper not received | CTS process | हाँ, paper के साथ | No |
| 50 | Account closed | Account | नहीं | **High** |
| 51 | Account transferred | Account | Correct route से | No |
| 52 | No such account | Account | पहले verify करें | Deliberate हो तो **High** |
| 53 / 54 | Account title issues | Account | Correction के बाद | Low |
| 55 | Account blocked | Account | Unblock होने के बाद | Case-by-case |

### [H2] Legal Line — कौन से Bounces Case बन सकते हैं

वो split जो matter करता है: **Section 138 एक real debt के against issue हुए cheque के बारे में है जो drawer के control के अंदर के reasons से fail होता है.** Funds insufficient (01, 02), substance में refer-to-drawer (04), account closed (50), और — Supreme Court rulings के per — signature mismatch और stop-payment भी qualify कर सकते हैं, क्योंकि courts code के past conduct को देखती हैं. जो case arm *नहीं* करता: technical और process returns (image quality, stamps, zones, post-dated cheque की premature presentation).

अगर आप money-family return hold करने वाले payee हैं: demand notice return memo के **30 days** के अंदर जाना चाहिए. Memo संभालें — ये foundational document है. [Full Section 138 timeline यहाँ है](https://cheqify.app/hi/blog/section-138-ni-act-cheque-bounce-india).

अगर आप drawer हैं: हर bounce आपको दोनों sides पर return charges भी cost करता है (banks outward returns के लिए *drawer* को heavily charge करते हैं — slabs bank से vary करते हैं, और repeat offences escalate होते हैं), और funds-family bounces का pattern cheque facilities withdraw करवा सकता है. Banks repeat ₹1-crore-plus offenders के लिए explicitly empowered हैं, और छोटे scales पर भी quietly ये करते हैं.

### [H2] जिस दिन Memo आए उस दिन क्या करें

1. **Code पढ़ें, family ढूँढें.** Money, signature, date, image, account.
2. **Technical family?** Mechanically fix करें — redeposit, paper supply, clean reissue. कोई drama नहीं.
3. **Money या account family?** Drawer को एक बार call करें, politely. फिर calendar देखें — आपकी 30-day notice window चल रही है.
4. **सब कुछ रखें.** Original cheque, return memo, deposit slip. Memo की date हर legal deadline drive करती है.
5. **अगर आप drawer हैं** — root cause आज fix करें: account fund करें, specimen signature update करें, या reissue करें. और check करें कि bounce ने charges में आपको क्या cost किया; ये rarely trivial है.

Practice में ज़्यादातर bounces *self-inflicted technical returns* हैं — leaf पर corrections, faded ink, date games ([common mistakes](https://cheqify.app/hi/blog/cheque-bounce-reasons-and-solutions) decades में नहीं बदलीं). जो genuinely fixable part है: एक cheque जो printed, validated, और tracked है वो simply codes 10–42 generate नहीं करता.

---

> **ज़्यादातर technical returns self-inflicted हैं — और पूरी तरह preventable.** Cheqify cheques को bank-accurate layouts, auto amount-in-words, और paper छूने से पहले validation के साथ print करता है — ताकि codes 12, 17, 32 और 39 आपके return memos पर कभी न दिखें. Plus हर issued leaf की full tracking. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Hinglish blend, same structure as English. Keep the pull-quote, table, and CTA callout.

---

Cheque પાછો આવે છે. એનાથી stapled, એક પાતળી slip — return memo — અને એના પર, આખી explanation જે તમારું bank વિચારે છે કે તમે deserve કરો છો: "Reason: 12."

બાર. બસ. કોઈ sentence નહીં, કોઈ suggestion નહીં, કોઈ hint નહીં કે તમારે redeposit કરવું જોઈએ, કોઈને call કરવો જોઈએ, કે lawyer ને call કરવો જોઈએ.

અહીં એ વાત છે જે memo તમને નથી કહેતો: એ number તમારા bank નું lazy હોવું નથી. આ RBI ની clearing-house rulebook માંથી એક standardised code છે — India નું દરેક bank same numbered list use કરીને cheques return કરે છે, જેથી machines અને clearing systems essays લખ્યા વગર rejections process કરી શકે. જેનો મતલબ છે કે એક વાર તમે list વાંચતા શીખી જાઓ, દેશનો દરેક bounce ખુદને explain કરી દે છે.

તો ચાલો list વાંચીએ.

### [H2] Codes ક્યાંથી આવે છે

જ્યારે એક cheque clearing ના through present થાય છે અને paying bank એને refuse કરે છે, rejection એક reason code સાથે પાછું travel કરે છે જે RBI ના clearing-house regulations ની એક uniform annexure માંથી drawn છે. Codes families માં grouped છે — અને family તમને specific number જોયા પહેલા જ મોટાભાગનું કહી દે છે:

- **01–05:** money problems. Drawer નું account fund નહોતું કરી શક્યું કે નહોતું કરવા માંગતું.
- **10–17:** signature અને authority problems. Instruction authentic ન લાગ્યું.
- **20s:** endorsement problems (હવે rare).
- **30s:** date problems. બહુ વહેલું, બહુ late, કે date જ નહીં.
- **33–42:** instrument અને image problems — physical કે scanned cheque ખુદ fail થયો ([આ CTS territory છે](https://cheqify.app/gu/blog/cheque-truncation-system-explained)).
- **50s:** account problems. Account ખુદ closed, moved, કે blocked છે.

Decoder પહેલા એક important note: same code નો મતલબ બહુ different consequences હોઈ શકે છે એના પર depend કરતા કે તમે cheque ની કઈ side ઊભા છો. અમે બંને views flag કરીશું — payee (તમને bounce મળ્યો) અને drawer (તમે cheque લખ્યો).

### [H2] Money Codes (01–05) — એ જે કરડે છે

**01 — Funds insufficient.** Classic. Presentation day પર account માં simply પૈસા નહોતા. Payee: તમે cheque ની validity ની અંદર re-present કરી શકો છો, પણ આ એ જ code પણ છે જે [Section 138 criminal case](https://cheqify.app/gu/blog/section-138-ni-act-cheque-bounce-india) arm કરે છે — return memo ના 30 days ની અંદર demand notice, અને clock real છે. Drawer: account fast fund કરો અને payee ને re-present કરવા કહો; અત્યારે એક apology પછી એક lawyer થી સસ્તી છે.

**02 — Exceeds arrangement.** Account માં overdraft કે limit arrangement છે, અને આ cheque એની past જતો રહેત. Functionally એક funds problem, 01 ની જેમ treated — legal exposure સહિત.

**03 — Effects not cleared, present again.** Drawer નું account પૈસા expect કરી રહ્યું છે (deposited cheques જે હજુ clearing માં છે) જે હજુ નથી પહોંચ્યા. Bank literally તમને કહી રહ્યું છે: થોડા દિવસોમાં ફરી try કરો. Money family નો least alarming code.

**04 — Refer to drawer.** એ famously vague વાળો.

> **"Refer to drawer" banker ની politeness છે — મતલબ "અમે pay નહીં કરીએ, જેણે લખ્યો એને પૂછો કેમ." Practice માં આ usually funds family સાથે travel કરે છે, અને courts એ આને એ જ હિસાબે treat કર્યો છે.**

Historically banks 04 ને "no money" ની around એક soft wrapper તરીકે use કરતા હતા (કે કોઈ એવી વસ્તુની around જે bank spell out નથી કરવા માંગતું — એક dispute, એક internal flag). Payee: આને 01 જેટલું seriously treat કરો. Drawer ને directly પૂછો, અને જો answer માં mumbling છે, wait કરવાને બદલે Section 138 notice clock શરૂ કરો.

**05 — Kindly contact drawer/drawee bank.** 04 નો cousin — કોઈ વસ્તુને human conversation જોઈએ. ઘણીવાર એક hold, એક verification step, કે એક flag જે bank counter પર resolve કરાવવા માંગે છે.

### [H2] Signature Codes (10–17) — Authenticity Problems

**10 — Drawer's signature incomplete. 11 — Drawer's signature illegible. 12 — Drawer's signature differs. 13 — Drawer's signature required. 14 — Drawer's signature not as per mandate.** એક જ theme ના variations: paying bank એ cheque ને file પર specimen signature ની against compare કર્યો અને satisfied ન થયું. Code 12 — *differs* — સૌથી common અને સૌથી frustrating છે, કારણ કે signatures decades માં drift કરે છે જ્યારે bank નું specimen card time માં frozen રહે છે.

Drawer: જો account ખોલ્યા પછી તમારી signature evolve થઈ છે, branch પર તમારું specimen update કરો — આ એક short form છે અને problem ને permanently end કરી દે છે. Payee: drawer ને re-sign કે reissue કરવા કહો; અને જાણો કે Supreme Court એ hold કર્યું છે કે signature-mismatch dishonour automatically Section 138 ની *બહાર* નથી — એક drawer ફક્ત ખરાબ રીતે sign કરીને liability escape નથી કરી શકતો. (Legal line પર વધારે નીચે.)

**14 specifically** company અને partnership accounts સાથે appear થાય છે — cheque signed હતો, પણ લોકોના એ combination થી નહીં જે account mandate require કરે છે (બે directors, માની લો, જ્યારે ફક્ત એકે sign કર્યું). Fix procedural છે: mandated signatories ને એક fresh leaf પર લાવો.

**17 — Alterations require drawer's authentication.** Cheque પર કંઈક counter-signature વગર correct કે overwrite થયું હતું. CTS rules ની under, banks alterations વિશે conservative છે — practically, *કોઈ પણ* visible correction return નું ground છે ([fill-it-right rules જે આનાથી બચાવે છે](https://cheqify.app/gu/blog/how-to-fill-cheque-correctly)). Clean leaf reissue કરો; initial કરીને નીકળવાની કોશિશ ન કરો.

### [H2] Date Codes (30–32) — બહુ વહેલું, બહુ Late, બિલકુલ નહીં

**30 — Instrument post-dated.** પોતાની date પહેલા presented. Bank future નો cheque pay નથી કરી શકતું ([post-dated cheques actually કેવી રીતે કામ કરે છે](https://cheqify.app/gu/blog/post-dated-cheques-rules-and-best-practices)). Payee: hold કરો અને date પર કે એના પછી re-present કરો.

**31 — Instrument out-dated / stale.** Mirror image — પોતાની date ના ત્રણ months થી વધારે પછી presented, અને cheque dead paper છે ([validity rules](https://cheqify.app/gu/blog/cheque-validity-period-stop-payment-india)). કોઈ re-presentation આને fix નહીં કરે; ફક્ત એક fresh cheque કે drawer દ્વારા formal revalidation.

**32 — Instrument undated / without proper date.** કોઈ date નહીં, એક impossible date, કે એક ambiguous. પાછો જાય છે.

### [H2] Instrument અને Image Codes (33–42) — CTS Mechanics

જ્યારથી clearing image-based થઈ, returns ની એક family purely તમારા cheque ની *picture* વિશે exist કરે છે:

**33 — Instrument mutilated, requires bank's guarantee.** ફાટેલો, taped, damaged. Collecting bank ક્યારેક guarantee સાથે pass કરી શકે છે; ઘણીવાર drawer માટે reissue simpler છે.

**35 — Clearing house stamp / date required.** એક process stamp missing છે — bank-side housekeeping, તમારી error નહીં.

**37 — Present in proper zone.** Instrument ખોટા clearing grid/zone માં ગયો. Bank-side routing; redeposit usually resolve કરે છે.

**39 — Image not clear, present again with paper.** Scan એટલો poor હતો કે paying bank verify ન કરી શક્યું. Faded ink, low contrast, smudges — અહીં જ cheap pens અને dot-matrix overprinting પાછા કરડવા આવે છે ([CTS image-based clearing actually શું check કરે છે](https://cheqify.app/gu/blog/cheque-truncation-system-explained)). Physical cheque call થઈ શકે છે.

**40 — Present with document. 42 — Paper not received.** Process codes — supporting documentation કે physical instrument expected હતું અને ન પહોંચ્યું.

આ family ની across pattern: **કોઈ broke નથી અને કોઈ fake નથી કરી રહ્યું** — આ mechanical failures છે, redeposit કરીને, paper supply કરીને, કે એક cleaner cheque reissue કરીને fixed. Annoying, alarming નહીં.

### [H2] Account Codes (50–55) — Serious Family

**50 — Account closed.** Drawer નું account હવે exist નથી કરતું. આ grave છે: closed account પર cheque issue કરવો squarely Section 138 ની અંદર છે — courts આને insufficient funds જેટલું seriously treat કરે છે, ક્યારેક વધારે, કારણ કે cheque issue કર્યા *પછી* account close કરવું deliberate દેખાય છે.

**51 — Account transferred to another branch.** Housekeeping — account move થયું, સાચી branch/route પર present કરો. CTS ની under rarer પણ હજુ appear થાય છે.

**52 — No such account.** Cheque પરનો account number કોઈ વસ્તુ સાથે match નથી કરતો. કાં તો leaf પર typo (misprint, ખોટી book) કે કંઈક worse. Drawer સાથે immediately verify કરો.

**53 — Title of account required. 54 — Title of account wrong/incomplete.** Cheque અને account records વચ્ચે name/title mismatches.

**55 — Account blocked.** Frozen — court order, regulator, કે bank ની પોતાની compliance થી. Resolve કરવું drawer ની problem છે; payee counter પર કંઈ નથી કરી શકતો.

તમે ક્યારેક "payment stopped by drawer" worded returns થી પણ મળશો — [stop-payment instruction](https://cheqify.app/gu/blog/cheque-validity-period-stop-payment-india) પોતાના જ reason તરીકે travel કરતું. Legally, એક stop-payment bounce હજુ પણ Section 138 attract કરી શકે છે જો underlying debt real છે — courts જુએ છે કે payment *કેમ* stop થઈ, ફક્ત એ નહીં કે થઈ.

### [H2] Return Reason Codes એક નજરમાં

> **Editor note:** Insert this as a **Table block** in Sanity Studio.

| Code | Reason | Family | Re-present? | Section 138 risk |
|---|---|---|---|---|
| 01 | Funds insufficient | Money | હા, validity ની અંદર | **High** |
| 02 | Exceeds arrangement | Money | હા, funding પછી | **High** |
| 03 | Effects not cleared, present again | Money | હા, થોડા દિવસો પછી | Low |
| 04 | Refer to drawer | Money | પહેલા drawer ને પૂછો | **High** |
| 05 | Contact drawer/drawee bank | Money | Resolution પછી | Case-by-case |
| 10–13 | Signature incomplete/illegible/differs/required | Signature | Re-sign/reissue પછી | Possible |
| 14 | Signature not as per mandate | Signature | Correct signatories સાથે | Possible |
| 17 | Alteration needs authentication | Signature | Clean leaf reissue | Low |
| 30 | Post-dated | Date | Date પર/પછી | No (premature) |
| 31 | Stale (out-dated) | Date | ના — fresh cheque જોઈએ | No |
| 32 | Undated / improper date | Date | Correction પછી | Low |
| 33 | Mutilated instrument | Instrument | Usually reissue | Low |
| 35 / 37 | Clearing stamp / wrong zone | Process | હા — bank-side | No |
| 39 | Image not clear | CTS image | હા, paper સાથે | Low |
| 40 / 42 | Document / paper not received | CTS process | હા, paper સાથે | No |
| 50 | Account closed | Account | ના | **High** |
| 51 | Account transferred | Account | Correct route થી | No |
| 52 | No such account | Account | પહેલા verify કરો | Deliberate હોય તો **High** |
| 53 / 54 | Account title issues | Account | Correction પછી | Low |
| 55 | Account blocked | Account | Unblock થયા પછી | Case-by-case |

### [H2] Legal Line — કયા Bounces Case બની શકે છે

એ split જે matter કરે છે: **Section 138 એક real debt ની against issue થયેલા cheque વિશે છે જે drawer ના control ની અંદરના reasons થી fail થાય છે.** Funds insufficient (01, 02), substance માં refer-to-drawer (04), account closed (50), અને — Supreme Court rulings ની per — signature mismatch અને stop-payment પણ qualify કરી શકે છે, કારણ કે courts code ની past conduct ને જુએ છે. જે case arm *નથી* કરતું: technical અને process returns (image quality, stamps, zones, post-dated cheque ની premature presentation).

જો તમે money-family return hold કરનારા payee છો: demand notice return memo ના **30 days** ની અંદર જવી જોઈએ. Memo સંભાળો — આ foundational document છે. [Full Section 138 timeline અહીં છે](https://cheqify.app/gu/blog/section-138-ni-act-cheque-bounce-india).

જો તમે drawer છો: દરેક bounce તમને બંને sides પર return charges પણ cost કરે છે (banks outward returns માટે *drawer* ને heavily charge કરે છે — slabs bank થી vary કરે છે, અને repeat offences escalate થાય છે), અને funds-family bounces ની pattern cheque facilities withdraw કરાવી શકે છે. Banks repeat ₹1-crore-plus offenders માટે explicitly empowered છે, અને નાના scales પર પણ quietly આ કરે છે.

### [H2] જે દિવસે Memo આવે એ દિવસે શું કરવું

1. **Code વાંચો, family શોધો.** Money, signature, date, image, account.
2. **Technical family?** Mechanically fix કરો — redeposit, paper supply, clean reissue. કોઈ drama નહીં.
3. **Money કે account family?** Drawer ને એક વાર call કરો, politely. પછી calendar જુઓ — તમારી 30-day notice window ચાલી રહી છે.
4. **બધું રાખો.** Original cheque, return memo, deposit slip. Memo ની date દરેક legal deadline drive કરે છે.
5. **જો તમે drawer છો** — root cause આજે fix કરો: account fund કરો, specimen signature update કરો, કે reissue કરો. અને check કરો કે bounce એ charges માં તમને શું cost કર્યું; આ rarely trivial છે.

Practice માં મોટાભાગના bounces *self-inflicted technical returns* છે — leaf પર corrections, faded ink, date games ([common mistakes](https://cheqify.app/gu/blog/cheque-bounce-reasons-and-solutions) decades માં નથી બદલાઈ). જે genuinely fixable part છે: એક cheque જે printed, validated, અને tracked છે એ simply codes 10–42 generate નથી કરતો.

---

> **મોટાભાગના technical returns self-inflicted છે — અને આખા preventable.** Cheqify cheques ને bank-accurate layouts, auto amount-in-words, અને paper ને અડતા પહેલા validation સાથે print કરે છે — જેથી codes 12, 17, 32 અને 39 તમારા return memos પર ક્યારેય ન દેખાય. Plus દરેક issued leaf ની full tracking. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## ⚠️ Pre-publish fact-check required

1. **THE ENTIRE CODE TABLE (CRITICAL):** Verify every code number and wording against the current **Uniform Regulations and Rules for Bankers' Clearing Houses (URRBCH), Annexure D** before publish. The groupings (01–05 funds, 10–17 signature, 30s dates, 33–42 instrument/CTS, 50–55 account) and the headline codes (01, 04, 12, 31, 39, 50) are consistently documented across bank materials, but individual wordings (e.g., 13 vs 14 phrasing, whether 55 reads "account blocked") must be checked against the primary annexure. Correct or drop any code that doesn't match.
2. **"Payment stopped by drawer" code number** is deliberately NOT printed in the body (the reason is referenced by phrase only). Do not add a number unless verified against Annexure D.
3. **Supreme Court on signature mismatch under Section 138** — this is the Laxmi Dyechem v. State of Gujarat (2012) line of cases. The body references the holding without naming the case; if you add the case name, verify the citation first.
4. **Cheque-facility withdrawal for repeat large-value bounces** — grounded in RBI instructions re: ₹1 crore+ repeat dishonours. Re-confirm the current instruction before tightening the wording.
5. **Return charges** are directional only ("a few hundred rupees, escalating"). No bank-specific slabs without checking current schedules.
6. **30-day demand notice window** for Section 138 — statutory, stable, safe to state.

---

## Internal-Link Strategy

**Forward links from this post:**
- Post #2 (`cheque-bounce-reasons-and-solutions`) — the broad bounce-causes companion.
- Post #11 (`section-138-ni-act-cheque-bounce-india`) — the legal timeline for money-family returns.
- Post #12 (`cheque-validity-period-stop-payment-india`) — stale cheques and stop payment.
- Post #5 (`post-dated-cheques-rules-and-best-practices`) — code 30 context.
- Post #19 (`how-to-fill-cheque-correctly`) — avoiding alteration/date returns.
- Post #22 (`cheque-truncation-system-explained`) — the CTS image codes.

**Deliberately NOT linked:** post #33 (`cheque-signature-mismatch`) — publishes 2026-07-13, AFTER this post. After #33 goes live, edit this post (all 3 locales) to link the signature-codes section to it.

**Bonus internal-link work (after publish):**
- Edit post #2 (`cheque-bounce-reasons-and-solutions`, all 3 locales) to link "the full reason-code decoder" here.
- Edit post #11 (`section-138-ni-act-cheque-bounce-india`, all 3 locales) to link the return-memo mention here.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The code-by-code sections are list-heavy (detector-sensitive) — the payee/drawer asides and the "nobody's broke, nobody's faking" prose carry the voice; don't strip them.
- **Fact-check block (CRITICAL):** The code table MUST be verified against URRBCH Annexure D. This is the single most important pre-publish step for this post.
- **Internal links:** All six linked posts are live. Do NOT add a #33 link yet.
- **Word count:** EN body must be >1200 words (target 1,800–2,300). Current draft: ~2,150 words.
- **Sanity toggles:** `isHowTo: OFF`, `hasFaq: ON` (7 items).
- **Table:** Insert the at-a-glance code table as a Sanity Table block in all three bodies.

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — posts #2 and #11; later, link to #33 once it's live.
5. IndexNow auto-pings on publish.
