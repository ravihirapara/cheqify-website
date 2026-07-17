# Blog Post #39 — Who Can Sign a Company Cheque? Authorised Signatories, Board Resolutions & Liability (2026)

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
- `> **Every leaf your signatory signs, accounted for...** / **आपका signatory जो भी leaf sign करे, accounted...** / **તમારો signatory જે પણ leaf sign કરે, accounted...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **The company signs through a human hand — and Section 138 remembers whose hand it was...** / **Company एक human hand के through sign करती है — और Section 138 को याद रहता है...** / **Company એક human hand ની through sign કરે છે — અને Section 138 ને યાદ રહે છે...**` (pull quote in each body) → **Quote**

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

"Who can sign a company cheque" is a question every SMB answers wrongly at least once — usually the month a new director signs before the bank knows he exists, or the month a departed one signs after it should have forgotten him. The topic packs genuinely unknown material: the account mandate as the only document the bank reads, the board resolution mechanics, single-vs-joint signing thresholds, the "for and on behalf of" convention, and the Section 138 twist that puts the signatory personally in the dock alongside the company. Strong governance angle for the SMB audience and a clean product fit — Cheqify's print-then-sign flow means the signatory only ever signs finished instruments. Cluster fit: #11 (138 liability), #14 (batch print → signing stack), #24 (the one cheque never signed).

---

## Sanity Fields

- **Slug:** `authorised-signatory-cheque-rules-company`
- **Tags:** `Banking & RBI`, `Cheque Productivity`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** NO
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Ravi-managed — no fixed date
- **Primary keyword:** `authorised signatory cheque`
- **Secondary keywords:** who can sign a company cheque, board resolution for cheque signing, cheque signing authority India, joint signatory rules, section 138 signatory liability, for and on behalf of company cheque
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/authorised-signatory-cheque-rules-company`
  - HI: `https://cheqify.app/hi/blog/authorised-signatory-cheque-rules-company`
  - GU: `https://cheqify.app/gu/blog/authorised-signatory-cheque-rules-company`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `authorised-signatory-cheque-rules-company-cover.webp`
- **Subject:** A company cheque mid-signature: a hand signing above a rubber-stamped "For ______ Pvt. Ltd." line, with a second pen resting beside it (joint signing implied). Next to the cheque, a board-resolution document with a highlighted "authorised signatories" clause and two specimen-signature boxes. A bank mandate form peeks from underneath. Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** Who can sign a company cheque in India — authorised signatory signing "for and on behalf of" the company, with the board resolution and bank mandate beside the cheque.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Who Can Sign a Company Cheque? Authorised Signatories, Board Resolutions & Liability (2026)
- **HI:** Company Cheque कौन Sign कर सकता है? Authorised Signatory, Board Resolution और Liability (2026)
- **GU:** Company Cheque કોણ Sign કરી શકે? Authorised Signatory, Board Resolution અને Liability (2026)

---

## Descriptions

- **EN:** A director's title doesn't sign cheques — the bank mandate does. Here's who can legally sign on a business account across proprietorships, partnerships, companies, and LLPs: how the board resolution creates signing authority, when two signatures become mandatory, what "for and on behalf of" actually protects, why Section 138 prosecutes the signatory alongside the company, and the clean way to add or remove a signatory.
- **HI:** एक director की title cheques sign नहीं करती — bank mandate करता है. यहाँ है कि business account पर legally कौन sign कर सकता है — proprietorship, partnership, company, और LLP में: board resolution signing authority कैसे create करता है, दो signatures कब mandatory बनते हैं, "for and on behalf of" actually क्या protect करता है, Section 138 company के साथ-साथ signatory को क्यों prosecute करता है, और एक signatory add या remove करने का clean तरीका.
- **GU:** એક director ની title cheques sign નથી કરતી — bank mandate કરે છે. અહીં છે કે business account પર legally કોણ sign કરી શકે — proprietorship, partnership, company, અને LLP માં: board resolution signing authority કેવી રીતે create કરે છે, બે signatures ક્યારે mandatory બને છે, "for and on behalf of" actually શું protect કરે છે, Section 138 company ની સાથે-સાથે signatory ને કેમ prosecute કરે છે, અને એક signatory add કે remove કરવાની clean રીત.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

The cheque was perfect on its face. Payee spelled to the letter, words and figures in agreement, date current, ink unbroken. The bank returned it anyway — "drawer's signature differs."

Except it didn't differ. The new director's signature was steady, practised, identical to the one on his passport. The problem was simpler and stranger: the bank had never been told he existed.

That return memo is the whole subject of this guide. Signing authority on a business account has nothing to do with seniority, shareholding, or the title on a business card — and everything to do with two documents most SMBs file and forget. Here's who can sign, structure by structure, what the board resolution actually does, why the law holds the signatory personally to account, and the housekeeping that keeps a signing desk out of trouble.

### [H2] The Bank Doesn't Read Your Letterhead — It Reads the Mandate

Every business account opens with a **mandate**: the instruction set that tells the bank whose signature moves the money. It names each **authorised signatory**, records a **specimen signature** for each, and fixes the **mode of operation** — singly, jointly, or in some combination.

From that day forward, the mandate is the only org chart the bank recognises. A managing director who was never added to it cannot sign a valid cheque; an office manager who was added can. When a leaf is presented, the clerk compares the signature against the specimen card and the mandate's rules — nothing else. Promotions, resignations, and boardroom reshuffles change nothing at the counter until the paperwork reaches the branch.

Most "signature differs" returns at companies aren't forgery scares. They're mandate lag — the gap between who the business *thinks* can sign and who the bank *knows* can.

### [H2] Who Signs, Structure by Structure

The rules shift with the legal shape of the business, because each shape answers a different question: *who is the drawer?*

### [H3] Sole proprietorship — the proprietor is the account

A proprietorship has no legal identity apart from its owner. The **proprietor signs**, full stop — the account is legally theirs, trading under a business name. A proprietor *can* authorise someone else (an accountant, a spouse) through the bank's mandate or a power of attorney, but the authority flows from the proprietor personally, and so does every consequence of its use.

### [H3] Partnership firm — the deed decides, the mandate enforces

In a partnership, **partners sign as the partnership deed provides**. Under partnership law any partner can generally bind the firm, but the bank follows the narrower instruction: the mandate the partners filed. If the deed says financial instruments need two partners, and the mandate says the same, one partner's lone flourish comes back unpaid. Deed and mandate should agree — when they drift apart, the mandate wins at the counter and the deed wins in the dispute afterwards, which is exactly the kind of contradiction to avoid.

### [H3] Company — a person that cannot hold a pen

A private or public limited company is a separate legal person, and here's the elegant problem: a legal person cannot sign anything. It acts only through humans it authorises — and for cheques, that authorisation is the **board resolution**. Directors have no *automatic* cheque-signing power by virtue of the office; a director signs because a resolution names them, and a CFO or accounts officer signs on exactly the same footing. The resolution, not the designation, is the source of the authority.

### [H3] LLP — designated partners, by agreement

An LLP mirrors the company logic with partnership vocabulary: it's a separate legal person that acts through its **designated partners**, and the LLP agreement (plus a resolution of partners, where the bank asks for one) fixes who signs and how. The bank mandate then records it, same as everywhere else.

### [H2] The Board Resolution — the Company's Signature, in Writing

For a company, the board resolution is where signing authority is born. A cheque-signing resolution typically fixes four things:

- **Who** — the signatories by name and designation, with specimen signatures annexed
- **How** — singly, jointly, or "any two of the following"
- **How much** — amount thresholds, if the board wants them (more below)
- **On which accounts** — the specific bank accounts the authority covers

A **certified true copy** of the resolution goes to the bank with the mandate forms and each signatory's KYC. Until it does, the resolution is a company's private intention; after it does, it's the bank's operating instruction. Boards that pass resolutions and forget to file them have authorised precisely nobody, as far as the counter is concerned.

Keep the resolution's language boring and exact. "Mr. A and Ms. B, jointly, for amounts above ₹1,00,000; either singly below" survives contact with a bank clerk. "The directors as may be necessary" does not.

### [H2] Single, Joint, and the Threshold Rule

The mode of operation is the most underused governance tool in the SMB kit. Three patterns cover almost every business:

- **Single signatory** — one authorised person signs alone. Fast, frictionless, and a single point of failure. Sensible for small accounts and small amounts.
- **Joint signatories** — every cheque needs two named signatures. Maximum control, maximum friction; payday takes two calendars.
- **Threshold signing** — the pragmatic hybrid: either signatory alone up to a limit (say ₹50,000 or ₹1,00,000), **two signatures above it**. Routine payments move at single-signature speed; anything that could genuinely hurt the business gets a second pair of eyes.

The threshold pattern earns a specific mention because it quietly defeats the most common internal fraud shape — a lone insider writing large cheques — without slowing the everyday. If your account still runs on the single-signatory default it opened with years ago, this is the cheapest control upgrade available: one resolution, one mandate form.

### [H2] "For and on Behalf Of" — Four Words That Place the Signature

Look at a properly signed company cheque and you'll see the convention: a rubber stamp or pre-printed line reading **"For [Company Name] Pvt. Ltd."**, the signature below it, and the signatory's **designation** beneath that.

This isn't ceremony. The words declare *capacity*: this hand signs as the company's instrument, not as a private individual. The drawer of the cheque is the company; the human is its authorised means. Skip the convention and sign bare on a company account, and you've created avoidable ambiguity about whether you signed for the company or for yourself — ambiguity that a payee's lawyer will happily explore if the cheque later bounces. The stamp costs forty rupees. Use it on every leaf.

### [H2] When the Company Cheque Bounces — the Signatory in the Dock

Here is the part every signatory should read twice before accepting the pen. When a company cheque is dishonoured for insufficient funds, [Section 138 of the NI Act](https://cheqify.app/en/blog/section-138-ni-act-cheque-bounce-india) doesn't stop at the company. Section 141 extends the offence to **every person who was in charge of and responsible for the company's business at the time — and the signatory of the cheque stands squarely in that circle.** The complaint routinely names the company *and* the human who signed.

> **The company signs through a human hand — and Section 138 remembers whose hand it was. When a company cheque bounces, the summons carries two names: the company's, and the signatory's.**

The practical consequences are blunt:

- **Signing is not clerical.** Before signing, a signatory is entitled to ask — and should ask — whether the account will hold funds when the cheque presents. "Accounts told me to sign" is not a defence known to law.
- **Resignation must be on the record.** A director who resigned *before* the cheque was issued has a defence — but only if the resignation was properly filed and provable. Departed signatories who linger on mandates inherit lawsuits they never earned.
- **The stamp helps, the resolution helps, funds help most.** Authority done correctly narrows liability to the genuine decision-makers; an account funded before cheques go out eliminates the question entirely.

For an SMB, the cleanest translation: treat every company cheque as a personal promise made on the company's behalf — because in the bounce scenario, that is precisely what the law makes it.

### [H2] Adding and Removing a Signatory — the Clean Handover

Signatories change: directors join, accountants leave, a founder steps back. The mechanics are the same in both directions, and the removal matters more than the addition.

**To add:** the board passes a **fresh resolution** naming the new signatory and restating the mode of operation; the bank gets the certified copy, its mandate-change forms, the new signatory's **KYC documents, and a specimen signature**. Allow a few working days — the new signature isn't valid until the bank's records say so, which is exactly how the flawless director's cheque in our opening came back unpaid.

**To remove:** a resolution withdrawing the authority, filed with the bank **the day the person exits** — not the quarter after. An ex-employee who remains on the mandate can still sign cheques the bank will honour, and an ex-director who remains on it can still be dragged into a Section 141 complaint. Both are entirely self-inflicted. The best SMB habit is mechanical: signatory changes go in the same exit checklist as the laptop and the email account.

Once a year, ask the bank for the current mandate and read it against reality. The names that surprise you are the audit finding.

### [H2] The Signing-Desk Habits That Keep It Safe

Authority is the framework; day-to-day discipline is what actually protects the account. Four habits, none of them expensive:

- **Never sign a blank or partial leaf.** The signature is the last field completed, after payee, amount, and date are on the paper. A signed blank cheque is an open mandate to whoever holds it — the entire threshold structure defeated by one lazy afternoon. The clean workflow is print-then-sign: [batch-print the run](https://cheqify.app/en/blog/bulk-cheque-printing-batch-guide-india) with every field filled, then put the finished stack in front of the signatory.
- **Sign against a register.** Every leaf the signatory signs gets a row — number, payee, amount, date — before it leaves the desk. When the bank statement and the register disagree, you want to know that week, not at year-end.
- **Remember the one cheque that's never signed.** A [cancelled cheque](https://cheqify.app/en/blog/how-to-write-cancelled-cheque-safely) handed out for account verification carries two lines and the word CANCELLED — and **no signature**. An unsigned cancelled leaf is inert paper; a signed one is a liability searching for a photocopier.
- **Match the signature you filed.** Banks compare against the specimen card, and a signatory whose signature has drifted over the years should refresh the specimen before the returns start.

None of this needs software, though software makes it effortless. What it needs is the recognition that a cheque signature is the single point where a business's money moves on one person's word — and that everything in this guide exists to make that word deliberate.

---

> **Every leaf your signatory signs, accounted for.** Cheqify prints company cheques on 300+ Indian bank layouts with payee, amount-in-words, and date already filled — so your signatory only ever signs a finished instrument, never a blank — and its register logs every leaf against its payee for the annual mandate-vs-reality check. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** Who can sign a cheque on a company's bank account?
   **A:** Only the authorised signatories named in the bank's account mandate — and for a company, that mandate rests on a board resolution naming the signatories, their mode of operation (single/joint), and any amount limits. Directors have no automatic cheque-signing power from the office itself; a director signs because a resolution filed with the bank says so, and a non-director officer authorised the same way signs with equal validity.

2. **Q:** Is a board resolution mandatory for cheque signing authority?
   **A:** For a company, effectively yes. A company is a separate legal person that can only act through authorised humans, and banks require a certified true copy of the board resolution naming cheque signatories before honouring their signatures. Proprietorships need no resolution (the proprietor signs personally), partnerships follow the deed plus the bank mandate, and LLPs authorise designated partners through the LLP agreement.

3. **Q:** What is joint signing, and when should two signatures be required?
   **A:** Joint signing means the mandate requires two named signatories on every cheque (or on cheques above a threshold). The pragmatic SMB pattern is threshold signing: either signatory alone up to a limit such as ₹50,000–₹1,00,000, and two signatures above it. Routine payments stay fast while large outflows get a second review — which quietly defeats the most common internal-fraud pattern of a lone insider writing large cheques.

4. **Q:** What does "for and on behalf of" mean on a company cheque?
   **A:** It declares the capacity of the signature: the human is signing as the company's authorised instrument, not personally. The convention is a rubber stamp or printed line "For [Company] Pvt. Ltd." above the signature and the signatory's designation below it. Omitting it creates avoidable ambiguity about whether the person signed for the company or themselves — ambiguity that matters intensely if the cheque later bounces.

5. **Q:** If a company cheque bounces, is the signatory personally liable?
   **A:** Yes, potentially. Under Section 138 read with Section 141 of the NI Act, both the company and every person in charge of and responsible for its business at the time — which squarely includes the signatory — can be prosecuted when a company cheque bounces for insufficient funds. That's why a signatory should confirm the account will hold funds before signing, and why resigned directors must ensure their exit is on record and off the mandate.

6. **Q:** How do you add or remove an authorised signatory on a company account?
   **A:** Both directions need a fresh board resolution — naming the new signatory or withdrawing the old authority — plus the bank's mandate-change forms. Adding also requires the new signatory's KYC documents and a specimen signature, and takes a few working days to become effective. Removal should be filed the day the person exits: an ex-signatory left on the mandate can still sign valid cheques and can still be named in a cheque-bounce complaint.

7. **Q:** Can a proprietor let an accountant sign business cheques?
   **A:** Yes — a proprietor can add another person as an authorised signatory through the bank's mandate or a power of attorney, since the account is legally the proprietor's own. But the authority and its consequences remain personal to the proprietor, so the same disciplines apply: a written scope, no signed blanks, a cheque register, and prompt withdrawal of the mandate when the arrangement ends.

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

Cheque अपने face पर perfect था. Payee letter-to-letter spelled, words और figures agreement में, date current, ink unbroken. Bank ने फिर भी उसे return कर दिया — "drawer's signature differs."

Except वो differ नहीं करता था. नए director का signature steady था, practised, उसके passport वाले से identical. Problem simpler और stranger थी: bank को कभी बताया ही नहीं गया था कि वो exist करते हैं.

वो return memo इस guide का पूरा subject है. Business account पर signing authority का seniority, shareholding, या business card की title से कोई लेना-देना नहीं — और उन दो documents से सब कुछ है जिन्हें ज़्यादातर SMBs file करके भूल जाते हैं. यहाँ है कि कौन sign कर सकता है, structure by structure, board resolution actually क्या करता है, law signatory को personally जवाबदेह क्यों ठहराता है, और वो housekeeping जो एक signing desk को trouble से बाहर रखती है.

### [H2] Bank आपका Letterhead नहीं पढ़ता — Mandate पढ़ता है

हर business account एक **mandate** के साथ खुलता है: वो instruction set जो bank को बताता है कि किसका signature पैसा move करता है. ये हर **authorised signatory** को name करता है, हर एक का **specimen signature** record करता है, और **mode of operation** fix करता है — singly, jointly, या किसी combination में.

उस दिन से आगे, mandate ही एकमात्र org chart है जिसे bank recognise करता है. एक managing director जो कभी इसमें add नहीं हुआ, valid cheque sign नहीं कर सकता; एक office manager जो add हुआ, कर सकता है. जब एक leaf present होती है, clerk signature को specimen card और mandate के rules के against compare करता है — और कुछ नहीं. Promotions, resignations, और boardroom reshuffles counter पर कुछ नहीं बदलते जब तक paperwork branch तक न पहुँचे.

Companies पर ज़्यादातर "signature differs" returns forgery scares नहीं होते. वो mandate lag होते हैं — वो gap जो business *सोचता* है कौन sign कर सकता है और bank *जानता* है कौन कर सकता है, के बीच है.

### [H2] कौन Sign करता है, Structure by Structure

Rules business की legal shape के साथ shift होते हैं, क्योंकि हर shape एक अलग question का answer देती है: *drawer कौन है?*

### [H3] Sole proprietorship — proprietor ही account है

एक proprietorship की अपने owner से अलग कोई legal identity नहीं. **Proprietor sign करता है**, full stop — account legally उनका है, एक business name के under trading. एक proprietor किसी और को (एक accountant, spouse) bank के mandate या power of attorney के through authorise *कर सकता है*, पर authority proprietor से personally flow करती है, और उसके use का हर consequence भी.

### [H3] Partnership firm — deed decide करती है, mandate enforce करता है

Partnership में, **partners वैसे sign करते हैं जैसे partnership deed provide करती है**. Partnership law के under generally कोई भी partner firm को bind कर सकता है, पर bank narrower instruction follow करता है: वो mandate जो partners ने file किया. अगर deed कहती है financial instruments को दो partners चाहिए, और mandate भी वही कहता है, तो एक partner का अकेला flourish unpaid वापस आता है. Deed और mandate को agree करना चाहिए — जब वो अलग drift करते हैं, counter पर mandate जीतता है और बाद के dispute में deed — जो exactly उस तरह की contradiction है जिससे बचना है.

### [H3] Company — एक person जो pen पकड़ ही नहीं सकता

एक private या public limited company एक separate legal person है, और यहाँ है elegant problem: एक legal person कुछ भी sign नहीं कर सकता. वो सिर्फ़ उन humans के through act करती है जिन्हें वो authorise करती है — और cheques के लिए, वो authorisation है **board resolution**. Directors के पास office के virtue से कोई *automatic* cheque-signing power नहीं; एक director इसलिए sign करता है क्योंकि एक resolution उन्हें name करता है, और एक CFO या accounts officer exactly उसी footing पर sign करता है. Resolution, designation नहीं, authority का source है.

### [H3] LLP — designated partners, agreement के हिसाब से

एक LLP company की logic को partnership vocabulary के साथ mirror करता है: ये एक separate legal person है जो अपने **designated partners** के through act करता है, और LLP agreement (plus partners का एक resolution, जहाँ bank माँगे) fix करता है कि कौन sign करता है और कैसे. Bank mandate फिर इसे record करता है, हर जगह की तरह.

### [H2] Board Resolution — Company का Signature, Writing में

एक company के लिए, board resolution वो जगह है जहाँ signing authority जन्म लेती है. एक cheque-signing resolution typically चार चीज़ें fix करता है:

- **कौन** — signatories name और designation से, specimen signatures annexed
- **कैसे** — singly, jointly, या "any two of the following"
- **कितना** — amount thresholds, अगर board चाहे (नीचे more)
- **किन accounts पर** — वो specific bank accounts जिन्हें authority cover करती है

Resolution की एक **certified true copy** mandate forms और हर signatory की KYC के साथ bank जाती है. जब तक नहीं जाती, resolution company की एक private intention है; जाने के बाद, वो bank का operating instruction है. जो boards resolutions pass करके file करना भूल जाते हैं, उन्होंने counter की नज़र में precisely किसी को भी authorise नहीं किया.

Resolution की language boring और exact रखें. "Mr. A और Ms. B, jointly, ₹1,00,000 से ऊपर के amounts के लिए; नीचे either singly" bank clerk के contact को survive करता है. "The directors as may be necessary" नहीं करता.

### [H2] Single, Joint, और Threshold Rule

Mode of operation SMB kit का सबसे underused governance tool है. तीन patterns लगभग हर business को cover करते हैं:

- **Single signatory** — एक authorised person अकेला sign करता है. Fast, frictionless, और एक single point of failure. छोटे accounts और छोटे amounts के लिए sensible.
- **Joint signatories** — हर cheque को दो named signatures चाहिए. Maximum control, maximum friction; payday को दो calendars लगते हैं.
- **Threshold signing** — pragmatic hybrid: एक limit तक (say ₹50,000 या ₹1,00,000) either signatory अकेला, उसके **ऊपर दो signatures**. Routine payments single-signature speed पर move होती हैं; जो कुछ भी business को genuinely hurt कर सकता है उसे eyes की एक second pair मिलती है.

Threshold pattern एक specific mention इसलिए earn करता है क्योंकि ये सबसे common internal fraud shape को quietly defeat करता है — एक अकेला insider बड़े cheques लिखता हुआ — everyday को slow किए बिना. अगर आपका account अब भी उस single-signatory default पर चलता है जिस पर वो सालों पहले खुला था, तो ये available सबसे सस्ता control upgrade है: एक resolution, एक mandate form.

### [H2] "For and on Behalf Of" — चार Words जो Signature को Place करते हैं

एक properly signed company cheque देखें और आपको convention दिखेगा: एक rubber stamp या pre-printed line **"For [Company Name] Pvt. Ltd."**, उसके नीचे signature, और उसके नीचे signatory की **designation**.

ये ceremony नहीं है. ये words *capacity* declare करते हैं: ये hand company के instrument के तौर पर sign करता है, एक private individual के तौर पर नहीं. Cheque का drawer company है; human उसका authorised means है. Convention skip करें और company account पर bare sign करें, और आपने avoidable ambiguity create कर दी कि आपने company के लिए sign किया या अपने लिए — वो ambiguity जो cheque बाद में bounce हो तो payee का lawyer happily explore करेगा. Stamp चालीस रुपये का है. हर leaf पर use करें.

### [H2] जब Company Cheque Bounce हो — Signatory कठघरे में

यहाँ है वो part जो हर signatory को pen accept करने से पहले दो बार पढ़ना चाहिए. जब एक company cheque insufficient funds के लिए dishonour होता है, [NI Act का Section 138](https://cheqify.app/hi/blog/section-138-ni-act-cheque-bounce-india) company पर नहीं रुकता. Section 141 offence को **हर उस person तक extend करता है जो उस समय company के business का in charge और responsible था — और cheque का signatory उस circle में squarely खड़ा है.** Complaint routinely company को *और* उस human को name करती है जिसने sign किया.

> **Company एक human hand के through sign करती है — और Section 138 को याद रहता है कि hand किसका था. जब एक company cheque bounce होता है, summons पर दो names होते हैं: company का, और signatory का.**

Practical consequences blunt हैं:

- **Signing clerical नहीं है.** Sign करने से पहले, एक signatory पूछने का हक़दार है — और पूछना चाहिए — कि cheque present होने पर account में funds होंगे या नहीं. "Accounts ने कहा था sign करो" law में known कोई defence नहीं है.
- **Resignation record पर होना चाहिए.** एक director जिसने cheque issue होने से *पहले* resign किया, उसके पास defence है — पर सिर्फ़ तब जब resignation properly filed और provable हो. Departed signatories जो mandates पर टिके रहते हैं, वो lawsuits inherit करते हैं जो उन्होंने कभी earn नहीं कीं.
- **Stamp help करता है, resolution help करता है, funds सबसे ज़्यादा help करते हैं.** Correctly की गई authority liability को genuine decision-makers तक narrow करती है; cheques बाहर जाने से पहले funded एक account सवाल को entirely eliminate कर देता है.

एक SMB के लिए सबसे clean translation: हर company cheque को company की behalf पर किया गया एक personal promise treat करें — क्योंकि bounce scenario में law उसे precisely यही बनाता है.

### [H2] एक Signatory Add और Remove करना — Clean Handover

Signatories बदलते हैं: directors join करते हैं, accountants छोड़ते हैं, एक founder step back करता है. Mechanics दोनों directions में same हैं, और removal addition से ज़्यादा matter करता है.

**Add करने के लिए:** board एक **fresh resolution** pass करता है जो नए signatory को name करता है और mode of operation restate करता है; bank को certified copy मिलती है, उसके mandate-change forms, नए signatory के **KYC documents, और एक specimen signature**. कुछ working days allow करें — नया signature तब तक valid नहीं जब तक bank के records ऐसा न कहें, जो exactly वो तरीका है जिससे हमारे opening वाले flawless director का cheque unpaid वापस आया.

**Remove करने के लिए:** authority withdraw करता एक resolution, bank के साथ **उसी दिन filed जिस दिन person exit करे** — उसके quarter बाद नहीं. एक ex-employee जो mandate पर बना रहता है वो अब भी ऐसे cheques sign कर सकता है जो bank honour करेगा, और एक ex-director जो उस पर बना रहता है वो अब भी एक Section 141 complaint में घसीटा जा सकता है. दोनों entirely self-inflicted हैं. Best SMB habit mechanical है: signatory changes उसी exit checklist में जाते हैं जिसमें laptop और email account.

साल में एक बार, bank से current mandate माँगें और उसे reality के against पढ़ें. जो names आपको surprise करें, वही audit finding है.

### [H2] वो Signing-Desk Habits जो इसे Safe रखती हैं

Authority framework है; day-to-day discipline वो है जो actually account को protect करती है. चार habits, कोई भी expensive नहीं:

- **कभी एक blank या partial leaf sign न करें.** Signature आखिरी field है जो complete होता है, payee, amount, और date के paper पर आने के बाद. एक signed blank cheque जो भी उसे पकड़े उसके लिए एक open mandate है — पूरा threshold structure एक lazy afternoon से defeated. Clean workflow print-then-sign है: [run को batch-print करें](https://cheqify.app/hi/blog/bulk-cheque-printing-batch-guide-india) हर field filled के साथ, फिर finished stack signatory के सामने रखें.
- **एक register के against sign करें.** Signatory जो भी leaf sign करे उसे एक row मिलती है — number, payee, amount, date — desk छोड़ने से पहले. जब bank statement और register disagree करें, आप उसी हफ़्ते जानना चाहते हैं, year-end पर नहीं.
- **वो एक cheque याद रखें जो कभी sign नहीं होता.** Account verification के लिए दिया गया एक [cancelled cheque](https://cheqify.app/hi/blog/how-to-write-cancelled-cheque-safely) दो lines और CANCELLED word carry करता है — और **कोई signature नहीं**. एक unsigned cancelled leaf inert paper है; एक signed वाला photocopier ढूँढती एक liability है.
- **वही signature match करें जो आपने file किया.** Banks specimen card के against compare करते हैं, और एक signatory जिसका signature सालों में drift कर गया है, उसे returns शुरू होने से पहले specimen refresh करना चाहिए.

इसमें से किसी को software की ज़रूरत नहीं, though software इसे effortless बनाता है. इसे ज़रूरत है इस recognition की कि एक cheque signature वो single point है जहाँ एक business का पैसा एक person के word पर move करता है — और इस guide की हर चीज़ उस word को deliberate बनाने के लिए exist करती है.

---

> **आपका signatory जो भी leaf sign करे, accounted.** Cheqify company cheques 300+ Indian bank layouts पर print करता है payee, amount-in-words, और date already filled के साथ — ताकि आपका signatory हमेशा एक finished instrument sign करे, कभी blank नहीं — और इसका register हर leaf को उसके payee के against log करता है annual mandate-vs-reality check के लिए. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Gujlish blend, same structure as English. Keep the pull-quote and CTA callout.

---

Cheque પોતાના face પર perfect હતો. Payee letter-to-letter spelled, words અને figures agreement માં, date current, ink unbroken. Bank એ તો પણ એને return કરી દીધો — "drawer's signature differs."

Except એ differ નહોતું કરતું. નવા director નું signature steady હતું, practised, એમના passport વાળા થી identical. Problem simpler અને stranger હતી: bank ને ક્યારેય કહેવામાં જ નહોતું આવ્યું કે એ exist કરે છે.

એ return memo આ guide નો આખો subject છે. Business account પર signing authority ને seniority, shareholding, કે business card ની title સાથે કોઈ લેવા-દેવા નથી — અને એ બે documents સાથે બધું છે જેને મોટાભાગના SMBs file કરીને ભૂલી જાય છે. અહીં છે કે કોણ sign કરી શકે, structure by structure, board resolution actually શું કરે છે, law signatory ને personally જવાબદાર કેમ ઠરાવે છે, અને એ housekeeping જે એક signing desk ને trouble થી બહાર રાખે છે.

### [H2] Bank તમારું Letterhead નથી વાંચતું — Mandate વાંચે છે

દરેક business account એક **mandate** સાથે ખુલે છે: એ instruction set જે bank ને કહે છે કે કોનું signature પૈસા move કરે છે. આ દરેક **authorised signatory** ને name કરે છે, દરેકનું એક **specimen signature** record કરે છે, અને **mode of operation** fix કરે છે — singly, jointly, કે કોઈ combination માં.

એ દિવસથી આગળ, mandate જ એકમાત્ર org chart છે જેને bank recognise કરે છે. એક managing director જે ક્યારેય એમાં add નથી થયા, valid cheque sign નથી કરી શકતા; એક office manager જે add થયા, કરી શકે છે. જ્યારે એક leaf present થાય છે, clerk signature ને specimen card અને mandate ના rules ની against compare કરે છે — બીજું કંઈ નહીં. Promotions, resignations, અને boardroom reshuffles counter પર કંઈ નથી બદલતા જ્યાં સુધી paperwork branch સુધી ન પહોંચે.

Companies પર મોટાભાગના "signature differs" returns forgery scares નથી હોતા. એ mandate lag હોય છે — એ gap જે business *વિચારે* છે કોણ sign કરી શકે અને bank *જાણે* છે કોણ કરી શકે, ની વચ્ચે છે.

### [H2] કોણ Sign કરે છે, Structure by Structure

Rules business ની legal shape સાથે shift થાય છે, કારણ કે દરેક shape એક અલગ question નો answer આપે છે: *drawer કોણ છે?*

### [H3] Sole proprietorship — proprietor જ account છે

એક proprietorship ની પોતાના owner થી અલગ કોઈ legal identity નથી. **Proprietor sign કરે છે**, full stop — account legally એમનું છે, એક business name ની under trading. એક proprietor કોઈ બીજાને (એક accountant, spouse) bank ના mandate કે power of attorney ની through authorise *કરી શકે છે*, પણ authority proprietor થી personally flow કરે છે, અને એના use નું દરેક consequence પણ.

### [H3] Partnership firm — deed decide કરે છે, mandate enforce કરે છે

Partnership માં, **partners એમ sign કરે છે જેમ partnership deed provide કરે છે**. Partnership law ની under generally કોઈ પણ partner firm ને bind કરી શકે છે, પણ bank narrower instruction follow કરે છે: એ mandate જે partners એ file કર્યો. જો deed કહે છે financial instruments ને બે partners જોઈએ, અને mandate પણ એ જ કહે છે, તો એક partner નો એકલો flourish unpaid પાછો આવે છે. Deed અને mandate એ agree કરવું જોઈએ — જ્યારે એ અલગ drift કરે છે, counter પર mandate જીતે છે અને પછીના dispute માં deed — જે exactly એ પ્રકારની contradiction છે જેનાથી બચવાનું છે.

### [H3] Company — એક person જે pen પકડી જ નથી શકતી

એક private કે public limited company એક separate legal person છે, અને અહીં છે elegant problem: એક legal person કંઈ પણ sign નથી કરી શકતી. એ ફક્ત એ humans ની through act કરે છે જેમને એ authorise કરે છે — અને cheques માટે, એ authorisation છે **board resolution**. Directors પાસે office ના virtue થી કોઈ *automatic* cheque-signing power નથી; એક director એટલે sign કરે છે કારણ કે એક resolution એમને name કરે છે, અને એક CFO કે accounts officer exactly એ જ footing પર sign કરે છે. Resolution, designation નહીં, authority નો source છે.

### [H3] LLP — designated partners, agreement પ્રમાણે

એક LLP company ની logic ને partnership vocabulary સાથે mirror કરે છે: આ એક separate legal person છે જે પોતાના **designated partners** ની through act કરે છે, અને LLP agreement (plus partners નું એક resolution, જ્યાં bank માંગે) fix કરે છે કે કોણ sign કરે છે અને કેવી રીતે. Bank mandate પછી આને record કરે છે, દરેક જગ્યાની જેમ.

### [H2] Board Resolution — Company નું Signature, Writing માં

એક company માટે, board resolution એ જગ્યા છે જ્યાં signing authority જન્મ લે છે. એક cheque-signing resolution typically ચાર વસ્તુઓ fix કરે છે:

- **કોણ** — signatories name અને designation થી, specimen signatures annexed
- **કેવી રીતે** — singly, jointly, કે "any two of the following"
- **કેટલું** — amount thresholds, જો board ઇચ્છે (નીચે more)
- **કયા accounts પર** — એ specific bank accounts જેમને authority cover કરે છે

Resolution ની એક **certified true copy** mandate forms અને દરેક signatory ની KYC સાથે bank જાય છે. જ્યાં સુધી નથી જતી, resolution company ની એક private intention છે; ગયા પછી, એ bank નું operating instruction છે. જે boards resolutions pass કરીને file કરવાનું ભૂલી જાય છે, એમણે counter ની નજરમાં precisely કોઈને પણ authorise નથી કર્યા.

Resolution ની language boring અને exact રાખો. "Mr. A અને Ms. B, jointly, ₹1,00,000 થી ઉપરના amounts માટે; નીચે either singly" bank clerk ના contact ને survive કરે છે. "The directors as may be necessary" નથી કરતું.

### [H2] Single, Joint, અને Threshold Rule

Mode of operation SMB kit નું સૌથી underused governance tool છે. ત્રણ patterns લગભગ દરેક business ને cover કરે છે:

- **Single signatory** — એક authorised person એકલો sign કરે છે. Fast, frictionless, અને એક single point of failure. નાના accounts અને નાના amounts માટે sensible.
- **Joint signatories** — દરેક cheque ને બે named signatures જોઈએ. Maximum control, maximum friction; payday ને બે calendars લાગે છે.
- **Threshold signing** — pragmatic hybrid: એક limit સુધી (say ₹50,000 કે ₹1,00,000) either signatory એકલો, એની **ઉપર બે signatures**. Routine payments single-signature speed પર move થાય છે; જે કંઈ પણ business ને genuinely hurt કરી શકે એને eyes ની એક second pair મળે છે.

Threshold pattern એક specific mention એટલે earn કરે છે કારણ કે આ સૌથી common internal fraud shape ને quietly defeat કરે છે — એક એકલો insider મોટા cheques લખતો — everyday ને slow કર્યા વગર. જો તમારું account હજુ પણ એ single-signatory default પર ચાલે છે જેના પર એ વર્ષો પહેલા ખુલ્યું હતું, તો આ available સૌથી સસ્તું control upgrade છે: એક resolution, એક mandate form.

### [H2] "For and on Behalf Of" — ચાર Words જે Signature ને Place કરે છે

એક properly signed company cheque જુઓ અને તમને convention દેખાશે: એક rubber stamp કે pre-printed line **"For [Company Name] Pvt. Ltd."**, એની નીચે signature, અને એની નીચે signatory ની **designation**.

આ ceremony નથી. આ words *capacity* declare કરે છે: આ hand company ના instrument તરીકે sign કરે છે, એક private individual તરીકે નહીં. Cheque નો drawer company છે; human એનું authorised means છે. Convention skip કરો અને company account પર bare sign કરો, અને તમે avoidable ambiguity create કરી દીધી કે તમે company માટે sign કર્યું કે પોતાના માટે — એ ambiguity જે cheque પછી bounce થાય તો payee નો lawyer happily explore કરશે. Stamp ચાલીસ રૂપિયાનો છે. દરેક leaf પર use કરો.

### [H2] જ્યારે Company Cheque Bounce થાય — Signatory કઠેડામાં

અહીં છે એ part જે દરેક signatory એ pen accept કરતા પહેલા બે વાર વાંચવો જોઈએ. જ્યારે એક company cheque insufficient funds માટે dishonour થાય છે, [NI Act નો Section 138](https://cheqify.app/gu/blog/section-138-ni-act-cheque-bounce-india) company પર નથી અટકતો. Section 141 offence ને **દરેક એ person સુધી extend કરે છે જે એ સમયે company ના business નો in charge અને responsible હતો — અને cheque નો signatory એ circle માં squarely ઊભો છે.** Complaint routinely company ને *અને* એ human ને name કરે છે જેણે sign કર્યું.

> **Company એક human hand ની through sign કરે છે — અને Section 138 ને યાદ રહે છે કે hand કોનો હતો. જ્યારે એક company cheque bounce થાય છે, summons પર બે names હોય છે: company નું, અને signatory નું.**

Practical consequences blunt છે:

- **Signing clerical નથી.** Sign કરતા પહેલા, એક signatory પૂછવાનો હકદાર છે — અને પૂછવું જોઈએ — કે cheque present થાય ત્યારે account માં funds હશે કે નહીં. "Accounts એ કહ્યું હતું sign કરો" law માં known કોઈ defence નથી.
- **Resignation record પર હોવું જોઈએ.** એક director જેણે cheque issue થયા *પહેલા* resign કર્યું, એની પાસે defence છે — પણ ફક્ત ત્યારે જ્યારે resignation properly filed અને provable હોય. Departed signatories જે mandates પર ટકી રહે છે, એ lawsuits inherit કરે છે જે એમણે ક્યારેય earn નથી કરી.
- **Stamp help કરે છે, resolution help કરે છે, funds સૌથી વધુ help કરે છે.** Correctly કરેલી authority liability ને genuine decision-makers સુધી narrow કરે છે; cheques બહાર જતા પહેલા funded એક account સવાલને entirely eliminate કરી દે છે.

એક SMB માટે સૌથી clean translation: દરેક company cheque ને company ની behalf પર કરેલું એક personal promise treat કરો — કારણ કે bounce scenario માં law એને precisely આ જ બનાવે છે.

### [H2] એક Signatory Add અને Remove કરવો — Clean Handover

Signatories બદલાય છે: directors join કરે છે, accountants છોડે છે, એક founder step back કરે છે. Mechanics બંને directions માં same છે, અને removal addition થી વધુ matter કરે છે.

**Add કરવા માટે:** board એક **fresh resolution** pass કરે છે જે નવા signatory ને name કરે છે અને mode of operation restate કરે છે; bank ને certified copy મળે છે, એના mandate-change forms, નવા signatory ના **KYC documents, અને એક specimen signature**. થોડા working days allow કરો — નવું signature ત્યાં સુધી valid નથી જ્યાં સુધી bank ના records એમ ન કહે, જે exactly એ રીત છે જેનાથી અમારા opening વાળા flawless director નો cheque unpaid પાછો આવ્યો.

**Remove કરવા માટે:** authority withdraw કરતું એક resolution, bank સાથે **એ જ દિવસે filed જે દિવસે person exit કરે** — એના quarter પછી નહીં. એક ex-employee જે mandate પર બની રહે છે એ હજુ પણ એવા cheques sign કરી શકે છે જે bank honour કરશે, અને એક ex-director જે એના પર બની રહે છે એ હજુ પણ એક Section 141 complaint માં ઘસડાઈ શકે છે. બંને entirely self-inflicted છે. Best SMB habit mechanical છે: signatory changes એ જ exit checklist માં જાય છે જેમાં laptop અને email account.

વર્ષમાં એક વાર, bank પાસેથી current mandate માંગો અને એને reality ની against વાંચો. જે names તમને surprise કરે, એ જ audit finding છે.

### [H2] એ Signing-Desk Habits જે આને Safe રાખે છે

Authority framework છે; day-to-day discipline એ છે જે actually account ને protect કરે છે. ચાર habits, કોઈ પણ expensive નહીં:

- **ક્યારેય એક blank કે partial leaf sign ન કરો.** Signature આખરી field છે જે complete થાય છે, payee, amount, અને date paper પર આવ્યા પછી. એક signed blank cheque જે પણ એને પકડે એના માટે એક open mandate છે — આખું threshold structure એક lazy afternoon થી defeated. Clean workflow print-then-sign છે: [run ને batch-print કરો](https://cheqify.app/gu/blog/bulk-cheque-printing-batch-guide-india) દરેક field filled સાથે, પછી finished stack signatory ની સામે મૂકો.
- **એક register ની against sign કરો.** Signatory જે પણ leaf sign કરે એને એક row મળે છે — number, payee, amount, date — desk છોડતા પહેલા. જ્યારે bank statement અને register disagree કરે, તમે એ જ અઠવાડિયે જાણવા માંગો છો, year-end પર નહીં.
- **એ એક cheque યાદ રાખો જે ક્યારેય sign નથી થતો.** Account verification માટે આપેલો એક [cancelled cheque](https://cheqify.app/gu/blog/how-to-write-cancelled-cheque-safely) બે lines અને CANCELLED word carry કરે છે — અને **કોઈ signature નહીં**. એક unsigned cancelled leaf inert paper છે; એક signed વાળો photocopier શોધતી એક liability છે.
- **એ જ signature match કરો જે તમે file કર્યું.** Banks specimen card ની against compare કરે છે, અને એક signatory જેનું signature વર્ષોમાં drift થઈ ગયું છે, એણે returns શરૂ થતા પહેલા specimen refresh કરવું જોઈએ.

આમાંથી કોઈને software ની જરૂર નથી, though software આને effortless બનાવે છે. આને જરૂર છે એ recognition ની કે એક cheque signature એ single point છે જ્યાં એક business ના પૈસા એક person ના word પર move થાય છે — અને આ guide ની દરેક વસ્તુ એ word ને deliberate બનાવવા માટે exist કરે છે.

---

> **તમારો signatory જે પણ leaf sign કરે, accounted.** Cheqify company cheques 300+ Indian bank layouts પર print કરે છે payee, amount-in-words, અને date already filled સાથે — જેથી તમારો signatory હંમેશા એક finished instrument sign કરે, ક્યારેય blank નહીં — અને એનું register દરેક leaf ને એના payee ની against log કરે છે annual mandate-vs-reality check માટે. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## Internal-Link Strategy

**Forward links from this post (LIVE targets only):**
- Post #11 (`section-138-ni-act-cheque-bounce-india`) — the signatory-in-the-dock section; strongest contextual link.
- Post #14 (`bulk-cheque-printing-batch-guide-india`) — the print-then-sign workflow in the habits section.
- Post #24 (`how-to-write-cancelled-cheque-safely`) — "the one cheque that's never signed" habit.

**Bonus internal-link work (after publish):**
- Edit post #11 (`section-138-ni-act-cheque-bounce-india`, all 3 locales) to add a "when the drawer is a company, the signatory is prosecuted too" link here — strongest reciprocal.
- Edit post #14 (`bulk-cheque-printing-batch-guide-india`, all 3 locales) to add a "who signs the printed batch" link here.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The returned-cheque opening, the "a legal person cannot hold a pen" turn, and the exit-checklist framing carry the voice.
- **Fact-check block (CRITICAL — verify before publish):**
  1. **Section 141 NI Act** — vicarious liability of persons in charge of a company's business (including signatories) when a company cheque bounces under Section 138; the resigned-director defence requires resignation on record before issue. Verify framing against current case law direction.
  2. **Board resolution + certified true copy** as the standard bank requirement for company cheque signatories, with KYC + specimen signature for each — stable banking practice; verify no bank-specific caveats needed.
  3. **Partnership law** — "any partner can generally bind the firm" (Indian Partnership Act implied authority) vs the bank following the mandate; kept directional, verify wording.
  4. **LLP** — designated partners + LLP agreement as the authorisation source; verify phrasing.
  5. **Threshold amounts (₹50,000 / ₹1,00,000)** are presented as illustrative examples of mandate design, not legal limits — keep them clearly illustrative.
  6. **"For and on behalf of" convention** — capacity of signature under NI Act agency principles (Sections 26–28 territory); kept directional and safe as framed.
- **Internal link order:** #11, #14, #24 all LIVE — safe.
- **Word count:** EN body must be >1200 words (target 1,700–2,100). Current draft: ~1,950 words.
- **Sanity toggles:** `isHowTo: OFF`, `hasFaq: ON` (7 items).
- **Slug sanity-check after publish:** paste-verify the slug is exactly `authorised-signatory-cheque-rules-company` (see slug-corruption gotcha).

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — posts #11 and #14 (strongest reciprocals).
5. IndexNow auto-pings on publish.
