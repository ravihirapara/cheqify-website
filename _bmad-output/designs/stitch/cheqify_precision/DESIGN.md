# Design System Specification: The Architectural Perspective

## 1. Overview & Creative North Star: "The Digital Curator"
This design system moves beyond the "SaaS template" aesthetic to embrace an editorial-grade experience titled **The Digital Curator**. The objective is to convey absolute financial authority through a balance of expansive whitespace and surgical precision. 

While most SaaS platforms rely on rigid grids and heavy borders, this system utilizes **intentional asymmetry** and **tonal depth**. We treat the screen not as a flat canvas, but as a series of physical, high-end materials—frosted glass, brushed metal, and thick, matte paper—layered to guide the user’s eye. The "Creative North Star" is the intersection of Swiss minimalism and modern glassmorphism: clean enough to trust, sophisticated enough to admire.

---

### 2. Colors & Tonal Architecture
The palette is rooted in a deep, authoritative Navy and a vibrant, precision-engineered Teal. We avoid "flatness" by using a multi-tiered surface system.

#### Core Palette (Material Token Mapping)
*   **Primary (`#006a62` / `#00b4a6`):** The "Action Teal." Used for primary CTAs and critical status indicators.
*   **Secondary (`#48607c`):** A muted slate blue used for secondary actions and supportive UI elements.
*   **Tertiary (`#9b4423`):** An earthen contrast used sparingly for "warm" highlights or notification accents.
*   **Surface Hierarchy:**
    *   `surface-container-lowest`: Purest white (#FFFFFF) for primary card content.
    *   `surface-container-low`: The "Page Floor" (#F8F9FF).
    *   `surface-container-high`: Subtle elevation for nested data.

#### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning or card definition. Structural boundaries must be achieved through:
1.  **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
2.  **Tonal Nesting:** A `surface-container-lowest` card sitting on a `surface-container-low` section.

#### The "Glass & Gradient" Rule
To inject "soul" into the professional framework, use a **Signature Texture gradient** for Hero backgrounds: `primary` (#006a62) to `primary-container` (#00b4a6) at a 135-degree angle. For floating navigation or modal overlays, apply **Glassmorphism**: `surface` color at 70% opacity with a 12px `backdrop-blur`.

---

### 3. Typography: Editorial Authority
We utilize **Inter** not as a utility font, but as an editorial tool. The hierarchy relies on extreme scale contrast to create a rhythmic reading experience.

*   **Display (lg/md):** 3.5rem / 2.75rem. Tighten tracking (-0.02em) for a "locked-in" professional look. Use for hero headers only.
*   **Headline (lg/md/sm):** 2rem to 1.5rem. The "Workhorse" of the system. Generous line-height (1.4) to ensure readability.
*   **Title & Body:** 1.125rem down to 0.875rem. Body text should always use `on-surface-variant` (#3C4947) to reduce optical vibrating against pure white, enhancing the premium feel.
*   **Labels:** 0.75rem. Uppercase with +0.05em tracking for metadata and overlines.

---

### 4. Elevation & Depth: Tonal Layering
Traditional shadows are often a crutch for poor layout. In this system, depth is biological and ambient.

*   **The Layering Principle:** Instead of adding a shadow to a card, place a `surface-container-lowest` card on a `surface-container-low` background. The subtle shift in hex value creates "Natural Lift."
*   **Ambient Shadows:** Where floating is required (e.g., active dropdowns), use "Long-Tail Shadows": `box-shadow: 0 20px 40px rgba(8, 28, 50, 0.06)`. Note the 6% opacity—it should be felt, not seen.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**. This creates a "suggestion" of a container without breaking the editorial flow.

---

### 5. Components

#### Buttons
*   **Primary:** `primary` fill, `on-primary` text. Use `xl` (1.5rem) roundedness. No border. Apply a subtle teal-glow shadow on hover.
*   **Secondary:** `surface-container-highest` fill with `primary` text. This "tonal button" looks more integrated than an outlined button.
*   **Tertiary:** No background. `primary` text with a 2px underline that expands on hover.

#### Input Fields
*   **Style:** `surface-container-low` fill. No border. On focus, transition to a "Ghost Border" of `primary` at 40% opacity and a 4px soft glow.
*   **Labels:** Use `label-md` floating above the field. Never place labels inside the input as placeholders.

#### Cards & Lists
*   **Forbid Dividers:** Use `1.5rem` to `2.5rem` of vertical whitespace to separate list items. 
*   **Feature Cards:** Use `xl` (1.5rem) corner radius. For top-tier features, use a subtle top-to-bottom gradient (`surface-container-lowest` to `surface-container-low`).

#### Additional Component: The "Value Highlight"
A bespoke component for SaaS: A semi-transparent `primary-container` chip (20% opacity) with a `primary` text label, used to highlight key metrics within body copy.

---

### 6. Do’s and Don’ts

#### Do:
*   **Embrace Asymmetry:** Offset images and text blocks to create a "custom-built" feel.
*   **Use Generous Padding:** If you think there is enough padding, add 16px more. Whitespace is the "luxury" of UI design.
*   **Tint Your Neutrals:** Ensure your "greys" are always slightly blue-tinted (`secondary` variants) to maintain the Navy/Teal brand soul.

#### Don’t:
*   **Don't use 100% black:** Always use `on-background` (#081C32) for text.
*   **Don't use hard corners:** Never go below `DEFAULT` (8px) roundedness; it breaks the "Trustworthy/Soft" brand promise.
*   **Don't use standard Dividers:** A horizontal line is a failure of spacing. Use a background color shift instead.

#### Accessibility Note:
Ensure all Teal-on-White or Teal-on-Navy combinations are checked against WCAG AA standards. If `primary` (#006a62) is too light for small text, switch to `on-primary-fixed-variant` (#005049) to maintain legibility without losing brand identity.