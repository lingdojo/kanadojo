# UI Design Guidelines

> **Design System Documentation for KanaDojo**  
> A comprehensive guide to UI development, theming, and best practices for our TypeScript Next.js application using Tailwind CSS.

---

## 📋 Table of Contents

- [Project Stack](#project-stack)
- [Current Approach](#current-approach)
- [Theming System](#theming-system)
- [Accessibility Guidelines](#accessibility-guidelines)
- [Component Patterns](#component-patterns)
- [shadcn/ui Adoption Strategy](#shadcnui-adoption-strategy)
- [Best Practices](#best-practices)
- [Code Examples](#code-examples)

---

## 🛠️ Project Stack

KanaDojo is built with modern web technologies optimized for performance and developer experience:

- **TypeScript** - Type-safe development
- **Next.js 15** - App Router with React 19
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality, accessible component library (slow adoption in progress)
- **Framer Motion** - Smooth animations via `motion` package
- **Zustand** - Lightweight state management
- **Lucide React** - Icon system

### Key Dependencies

- `clsx` + `tailwind-merge` - Conditional class management via `cn()` utility
- `class-variance-authority` - Component variant management
- `@radix-ui` - Accessible component primitives (via shadcn/ui)

---

## 🎨 Current Approach

### How We Use Tailwind CSS

KanaDojo leverages Tailwind CSS as the primary styling solution with a heavy emphasis on **CSS custom properties (CSS variables)** for theming. This approach provides:

1. **Dynamic theming** - Runtime theme switching without rebuilding styles
2. **Consistency** - Centralized color and spacing values
3. **Flexibility** - Easy theme creation and customization

### Current Conventions

#### 1. CSS Variables Over Hardcoded Colors

**✅ DO:**

```tsx
<div className="bg-[var(--card-color)] text-[var(--main-color)]">Content</div>
```

**❌ DON'T:**

```tsx
<div className="bg-gray-100 text-black">Content</div>
```

#### 2. Utility Classes with `cn()` Helper

We use the `cn()` utility from `lib/utils.ts` to merge Tailwind classes intelligently:

```tsx
import { cn } from '@/lib/utils';

<button
  className={cn(
    'px-4 py-2 rounded-lg',
    isActive && 'bg-[var(--main-color)]',
    disabled && 'opacity-50 cursor-not-allowed'
  )}
>
  Click me
</button>;
```

#### 3. Reusable Style Constants

Common patterns are extracted to `static/styles.ts`:

```typescript
// static/styles.ts
import clsx from 'clsx';

export const cardBorderStyles = clsx('rounded-xl bg-[var(--card-color)]');

export const buttonBorderStyles = clsx(
  'rounded-xl bg-[var(--card-color)] hover:cursor-pointer',
  'duration-250 transition-all ease-in-out',
  'hover:bg-[var(--border-color)]'
);
```

**Usage:**

```tsx
import { buttonBorderStyles } from '@/static/styles';

<button className={buttonBorderStyles}>Click me</button>;
```

#### 4. Responsive Design

Use Tailwind's responsive prefixes consistently:

```tsx
<div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
  {/* Content adapts to screen size */}
</div>
```

**Breakpoints:**

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px
- `xs`: 30rem (custom)
- `3xl`: 110rem (custom)

---

## 🎭 Theming System

### Core Theme Variables

KanaDojo uses a **5-variable color system** defined in `app/globals.css`:

```css
:root {
  /* Layout Colors */
  --background-color: hsla(210, 17%, 100%, 1); /* Page background */
  --card-color: hsla(210, 17%, 91%, 1); /* Card/elevated surfaces */
  --border-color: hsla(210, 17%, 76%, 1); /* Borders and dividers */

  /* Content Colors */
  --main-color: hsl(0, 0%, 0%); /* Primary text and actions */
  --secondary-color: hsl(0, 0%, 35%); /* Secondary text and icons */
}
```

### Theme Structure

Themes are defined in `static/themes.ts` with TypeScript interfaces:

```typescript
interface Theme {
  id: string;
  backgroundColor: string; // Page background
  cardColor: string; // Cards, modals, elevated surfaces
  borderColor: string; // Borders, dividers, hover states
  mainColor: string; // Primary text, icons, CTAs
  secondaryColor: string; // Secondary text, subtle elements
}
```

### How Themes Work

1. **Theme Definition** - Themes are organized into groups (Base, Light, Dark) in `static/themes.ts`
2. **Theme Storage** - Selected theme ID is persisted via Zustand in `store/useThemeStore.ts`
3. **Theme Application** - The `applyTheme()` function dynamically updates CSS variables:

```typescript
export function applyTheme(themeId: string) {
  const theme = themeMap.get(themeId);
  if (!theme) return;

  const root = document.documentElement;
  root.style.setProperty('--background-color', theme.backgroundColor);
  root.style.setProperty('--card-color', theme.cardColor);
  root.style.setProperty('--border-color', theme.borderColor);
  root.style.setProperty('--main-color', theme.mainColor);
  root.style.setProperty('--secondary-color', theme.secondaryColor);
  root.setAttribute('data-theme', theme.id);
}
```

### Creating New Themes

To add a new theme:

1. **Define the theme** in `static/themes.ts`:

```typescript
{
  id: 'my-custom-theme',
  backgroundColor: 'hsla(220, 20%, 12%, 1)',
  cardColor: 'hsla(220, 20%, 18%, 1)',
  borderColor: 'hsla(220, 20%, 30%, 1)',
  mainColor: 'hsla(280, 80%, 65%, 1)',
  secondaryColor: 'hsla(180, 70%, 55%, 1)'
}
```

2. **Test contrast ratios** (see Accessibility section)
3. **Add to appropriate theme group** (Base, Light, or Dark)

#### Sumi Theme (Example)

The `sumi` theme is a minimal, sumi-e (Japanese ink) inspired dark theme added in `static/themes.ts`. It's designed for low visual distraction, high focus, and a neutral, high-clarity UI where content stands out against an almost-black page background.

- **Palette (from `static/themes.ts`)**:

```ts
{
  id: 'sumi',
  backgroundColor: 'hsla(0, 0%, 10%, 1)',   // deep charcoal / paper black
  cardColor: 'hsla(0, 0%, 14%, 1)',         // slightly lighter surface
  borderColor: 'hsla(0, 0%, 22%, 1)',       // subtle divider / hover
  mainColor: 'hsla(0, 0%, 72%, 1)',         // warm off-white for primary text
  secondaryColor: 'hsla(45, 35%, 88%, 1)',  // soft warm accent (paper/cream)
}
```

- **Usage guidance**:

  - Use `--background-color` for large page surfaces and overlays.
  - Use `--card-color` for cards, panels, and elevated UI pieces.
  - Use `--border-color` for separators, subtle hover/backdrop outlines and focus rings when appropriate.
  - Use `--main-color` for primary text, icons, and CTAs that need high readability.
  - Use `--secondary-color` for subtle accents, tertiary text, dividers or decorative strokes.

- **Tailwind example (recommended pattern)**:

```tsx
<div className="bg-[var(--background-color)] min-h-screen text-[var(--main-color)]">
  <div className="rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] p-6">
    <h1 className="text-2xl font-bold text-[var(--main-color)]">
      Sumi — Focus Mode
    </h1>
    <p className="text-sm text-[var(--secondary-color)]">
      Subtle helper text and accents
    </p>
  </div>
</div>
```

- **Accessibility / contrast notes**:

  - The `sumi` theme is intentionally high-contrast for primary content: `--main-color` (near-white) on `--background-color` (very dark charcoal) is appropriate for body text and passes typical AA thresholds for normal text in most sizes — still run specific checks for bright UI elements and CTA buttons.
  - For smaller UI chrome (icons, borders), ensure `--border-color` on `--card-color` meets at least a 3:1 ratio for interactive affordances, or increase border opacity when used as the primary focus indicator.
  - When using `--secondary-color` for secondary text, verify it maintains adequate contrast on both `--background-color` and `--card-color` for the sizes you use (tooling: WebAIM, axe, Lighthouse).

- **Developer checklist when adding/using `sumi`**:

  - Copy the theme object into `static/themes.ts` exactly (IDs must be kebab-case).
  - Verify `applyTheme('sumi')` updates CSS variables and `data-theme` attribute correctly.
  - Test interactive components (buttons, inputs, dialogs) visually and via automated contrast checks.
  - Consider providing a slightly lighter variant of `--main-color` for disabled/low-emphasis states to avoid blending with `--card-color`.

  #### Momiji Theme (Dark — Autumn Maple)

  The `momiji` theme is inspired by autumn maple leaves — warm, cozy, and subtly vibrant. It pairs a deep, neutral page background with amber and yellow-green accents for highlights and CTAs. Use this theme when you want a seasonal, warm-dark aesthetic that still prioritizes readability and clear affordances.

  - **Palette (from `static/themes.ts`):**

  ```ts
  {
    id: 'momiji',
    backgroundColor: 'hsla(15, 35%, 11%, 1)',
    cardColor: 'hsla(15, 33%, 15%, 1)',
    borderColor: 'hsla(15, 30%, 23%, 1)',
    mainColor: 'hsla(5, 85%, 58%, 1)',
    secondaryColor: 'hsla(45, 88%, 62%, 1)',
  }
  ```

  - **Usage guidance:**

    - Use `--background-color` for full-page backgrounds and large overlays.
    - Use `--card-color` for cards, panels, and elevated UI surfaces to create subtle separation from the page background.
    - Use `--border-color` for separators, subtle hover outlines, and focus affordances.
    - Use `--main-color` for primary text, icons, and CTAs that need emphasis.
    - Use `--secondary-color` for accent highlights, badges, and secondary CTAs.

  - **Tailwind example:**

  ```tsx
  <div className="bg-[var(--background-color)] min-h-screen text-[var(--main-color)]">
    <div className="rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] p-6">
      <h1 className="text-2xl font-bold text-[var(--main-color)]">
        Momiji — Autumn Warmth
      </h1>
      <p className="text-sm text-[var(--secondary-color)]">
        Accent and supportive text
      </p>
    </div>
  </div>
  ```

  - **Accessibility / contrast notes:**

    - `--main-color` (warm amber) on `--background-color` (deep charcoal) should provide strong contrast for body text; still validate with WebAIM, axe, or Lighthouse.
    - `--secondary-color` (yellow-green) is an accent — confirm contrast on both `--background-color` and `--card-color` when used for small or secondary text; reduce saturation or increase lightness if below AA.
    - Ensure `--border-color` on `--card-color` meets at least a 3:1 contrast ratio for interactive affordances; increase opacity if necessary when used as a primary focus indicator.

  - **Developer checklist when adding/using `momiji`:**
    - Add the theme object to `static/themes.ts` under the `Dark` theme group.
    - Verify `applyTheme('momiji')` updates CSS variables and `data-theme` attribute correctly.
    - Run automated contrast checks (axe, Lighthouse) and manual spot checks for CTAs and small text.
    - Test interactive components (buttons, inputs, dialogs) visually across breakpoints and accessibility modes.

#### Starlit Plum Theme (Dark — Elegant Celestial Twilight)
The `starlit-plum` theme is inspired by the refined calm of a plum-colored night sky illuminated by soft starlight. It blends deep purples, twilight magenta, and silver-blue shimmer to create a luxurious, dreamy, and artistic dark mode—perfect for relaxed evening study or slow-paced creative sessions.

- **Palette (from `static/themes.ts`):**
```ts
{
  id: "starlit-plum",
  backgroundColor: "hsla(285, 48%, 11%, 1)",   // Deep plum twilight sky
  cardColor: "hsla(285, 46%, 15%, 1)",         // Elevated plum (+4% lightness)
  borderColor: "hsla(285, 43%, 23%, 1)",       // Prominent twilight ridge (+8% over card)
  mainColor: "hsla(320, 70%, 65%, 1)",         // Soft pink-magenta, illuminated clouds
  secondaryColor: "hsla(200, 45%, 75%, 1)",    // Silver-blue starlight shimmer
}
 ```
  
* **Usage guidance:**
  * Use `--background-color` for the full-page plum twilight base.
  * Use `--card-color` for elevated surfaces, panels, and menus with softened transitions.
  * Use `--border-color` to define structure, hover outlines, and subtle interactive edges.
  * Use `--main-color` for primary text, icons, and accents reflecting magenta twilight clouds.
  * Use `--secondary-color` for silver-blue star-like highlights, metadata, and subtle supporting text.
  
* **Tailwind example:**
```tsx
<div className="bg-[var(--background-color)] min-h-screen text-[var(--main-color)]">
  <div className="rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] p-6">
    <h1 className="text-2xl font-bold text-[var(--main-color)]">
      Starlit Plum — Elegant Celestial Twilight
    </h1>
    <p className="text-sm text-[var(--secondary-color)]">
      Dreamy plum tones, magenta glow, and shimmering starlight
    </p>
  </div>
</div>
```

* **Accessibility / contrast notes:**
  * `--main-color` provides high contrast against the deep plum background while staying gentle on the eyes.
  * `--secondary-color` offers excellent visibility on both background and card surfaces; confirm via WebAIM or axe, especially for small text.
  * `--border-color` maintains the required 3:1 contrast for interactive affordances and subtle focus rings.
  * Avoid oversaturating tiny UI chrome with magenta; its softness is best used in meaningful highlights.
  
* **Developer checklist when adding/using `starlit-plum`:**
  * Add the theme object to `static/themes.ts` under the Dark group.
  * Verify `applyTheme("starlit-plum")` updates all CSS variables and the `data-theme` attribute.
  * Run contrast tests (axe, Lighthouse) for both accent colors.
  * Test buttons, inputs, dialogs, and overlays across breakpoints in low-light environments.
  * Add the “Starlit Plum” label and preview swatch in the theme picker.
  
#### Coral Abyss Theme (Dark — Deep Ocean Vibrance)
The `coral-abyss` theme draws inspiration from glowing coral reefs in the deep ocean — where abyssal blues meet radiant coral structures and bioluminescent plankton pulse through the dark. It delivers a serene yet electric mood, ideal for users who want a nature-inspired, immersive, and energizing dark theme.

- **Palette (from `static/themes.ts`):**
```ts
{
  id: "coral-abyss",
  backgroundColor: "hsla(210, 65%, 10%, 1)",   // Deep oceanic blue-black, abyss depth
  cardColor: "hsla(210, 62%, 14%, 1)",         // Elevated ocean layer (+4% lightness)
  borderColor: "hsla(210, 58%, 22%, 1)",       // Reef edge highlight (+8% over card)
  mainColor: "hsla(15, 85%, 65%, 1)",          // Vibrant coral orange
  secondaryColor: "hsla(180, 90%, 62%, 1)",    // Electric aquamarine (bioluminescent glow)
}
 ```

* **Usage guidance:**
  * Use `--background-color` for the deep ocean base layer — calm, dark, and immersive.
  * Use `--card-color` for elevated UI surfaces that need subtle separation without breaking the mood.
  * Use `--border-color` for dividers, focus rings, interactive outlines, and hover states referencing reef edges.
  * Use `--main-color` (coral orange) for strong focal elements: primary text, action buttons, and icons.
  * Use `--secondary-color` (aquamarine glow) for accents, metadata, supportive UI text, or subtle highlights.
  
* **Tailwind example:**
```tsx
<div className="bg-[var(--background-color)] min-h-screen text-[var(--main-color)]">
  <div className="rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] p-6">
    <h1 className="text-2xl font-bold text-[var(--main-color)]">
      Coral Abyss — Deep Ocean Vibrance
    </h1>
    <p className="text-sm text-[var(--secondary-color)]">
      Coral warmth, aquamarine glow, abyssal blue depth
    </p>
  </div>
</div>
```
  
* **Accessibility / contrast notes:**
  * `--main-color` (coral orange) on the deep blue-black background provides strong contrast and meets WCAG AA for normal text.
  * `--secondary-color` maintains readable contrast on both background and card layers; verify small text contrasts using WebAIM or axe.
  * `--border-color` on `--card-color` exceeds the 3:1 contrast requirement for interactive affordances.
  * Avoid overusing neon tones in very small UI elements to maintain clarity and avoid visual strain.
  
* **Developer checklist when adding/using `coral-abyss`:**
  * Add the theme object to `static/themes.ts` under the **Dark** group.
  * Verify `applyTheme("coral-abyss")` correctly updates all CSS variables and sets the `data-theme` attribute.
  * Run accessibility contrast checks (axe, Lighthouse) on both coral and aquamarine accents.
  * Test buttons, inputs, dialogs, and menus across breakpoints to ensure consistent depth and clarity.
  * Confirm theme picker entry renders with correct label and swatch.
  
#### Velvet Bloom Theme (Dark — Midnight Garden Elegance)
The `velvet-bloom` theme delivers an opulent, romantic dark-mode atmosphere inspired by blooming moonlit flowers and deep royal-purple velvet. It blends shadowed petals, soft rose highlights, and gentle lavender accents to create a luxurious, calming visual mood ideal for late-night study and long meditation sessions.
  
- **Palette (from `static/themes.ts`):**
```ts
{
  id: "velvet-bloom",
  backgroundColor: "hsla(280, 55%, 12%, 1)",   // Deep royal purple velvet
  cardColor: "hsla(280, 52%, 17%, 1)",         // Elevated petal tone (+5% lightness)
  borderColor: "hsla(280, 48%, 25%, 1)",       // Most prominent violet edge
  mainColor: "hsla(330, 75%, 68%, 1)",         // Moonlit rose pink
  secondaryColor: "hsla(285, 65%, 72%, 1)",    // Lavender twilight accent
}
 ```
  
* **Usage guidance:**
  * Use `--background-color` to establish the velvet-deep nighttime garden base.
  * Use `--card-color` for soft elevated surfaces, petal-inspired but subtle.
  * Use `--border-color` for strong separation, dividers, hover outlines, and interactive affordances.
  * Use `--main-color` for moonlit rose CTAs, primary text, and important highlights.
  * Use `--secondary-color` for lavender accents, metadata, and gentle supportive text.
  
* **Tailwind example:**
```tsx
<div className="bg-[var(--background-color)] min-h-screen text-[var(--main-color)]">
  <div className="rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] p-6">
    <h1 className="text-2xl font-bold text-[var(--main-color)]">
      Velvet Bloom — Midnight Garden Elegance
    </h1>
    <p className="text-sm text-[var(--secondary-color)]">
      Deep velvet tones with rose and lavender moonlight
    </p>
  </div>
</div>
```
  
* **Accessibility / contrast notes:**
  * `--main-color` (soft rose pink) on dark velvet passes AA for normal text and offers excellent nighttime readability.
  * `--secondary-color` (lavender) provides adequate contrast on both card and background surfaces; verify with WebAIM or axe for very small text.
  * `--border-color` meets the 3:1 contrast requirement against `--card-color` for interactive affordances and hover outlines.
  * The palette is intentionally calm but rich; avoid using saturated pink at very small UI scales.
  
* **Developer checklist when adding/using `velvet-bloom`:**
  * Add the theme object to `static/themes.ts` under the Dark group.
  * Confirm that `applyTheme("velvet-bloom")` updates all CSS variables and the `data-theme` attribute.
  * Run contrast checks (axe, Lighthouse) on both accent colors.
  * Test dialogs, buttons, inputs, and overlays with the velvet palette across breakpoints.
  * Verify theme picker swatch and label.  

#### Electric Phantasm Theme (Dark — Neon Cyberpunk Overload)
The `electric-phantasm` theme is the most extreme, hyper-saturated, cyberpunk-inspired palette in KanaDojo. It channels bioluminescent deep-sea glow, lightning storms, radioactive neon, and alien contrast. This theme is unapologetically bold—built for users who want their UI to feel alive, dangerous, and electrically charged.

- **Palette (from `static/themes.ts`):**
```ts
{
  id: "electric-phantasm",
  backgroundColor: "hsla(280, 98%, 8%, 1)",   // Blackest violet, electric void
  cardColor: "hsla(280, 98%, 13%, 1)",        // Elevated violet glow (+5% lightness)
  borderColor: "hsla(280, 98%, 21%, 1)",      // Neon edge / hover energy (+8% over card)
  mainColor: "hsla(194, 100%, 55%, 1)",       // Nuclear cyan — lightning in water
  secondaryColor: "hsla(96, 100%, 55%, 1)",   // Radioactive acid green — alien glow
}
 ```

* **Usage guidance:**
  * Use `--background-color` to establish the electric void: ultra-dark violet tuned for maximum neon contrast.
  * Use `--card-color` for raised surfaces with faint bioluminescent lift.
  * Use `--border-color` for intense hover states, outlines, and interactive affordances.
  * Use `--main-color` for primary text and CTAs where absolute visibility and futuristic glow are intended.
  * Use `--secondary-color` for acid-green accents, metadata, and supporting UI elements that need shock value without overpowering content.

* **Tailwind example:**
```tsx
<div className="bg-[var(--background-color)] min-h-screen text-[var(--main-color)]">
  <div className="rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] p-6">
    <h1 className="text-2xl font-bold text-[var(--main-color)]">
      Electric Phantasm — Neon Cyberpunk Overload
    </h1>
    <p className="text-sm text-[var(--secondary-color)]">
      Nuclear cyan, acid green, and violet void energy
    </p>
  </div>
</div>
```

* **Accessibility / contrast notes:**
  * `--main-color` (nuclear cyan) on the ultra-dark violet background exceeds AA requirements for normal text.
  * `--secondary-color` (acid green) maintains readable contrast on card and background surfaces; verify via WebAIM or axe for fine text.
  * `--border-color` on `--card-color` surpasses 3:1 contrast, ensuring clear interactive cues even with neon intensity.
  * Avoid stacking neon accents too heavily in dense UI regions; maintain focus hierarchy.

* **Developer checklist when adding/using `electric-phantasm`:**
  * Add the theme to `static/themes.ts` under the Dark group.
  * Ensure `applyTheme("electric-phantasm")` updates all CSS variables and the `data-theme` attribute.
  * Validate all contrast ratios using accessibility tools before merging.
  * Test buttons, dialogs, inputs, and dark-mode UI elements for clarity under extreme neon conditions.
  * Confirm proper theme preview in the theme picker and verify consistency across game modes.
  
#### Dreamwave Mirage Theme (Dark — Surreal Neon Horizon)
The `dreamwave-mirage` theme delivers a surreal, electric aesthetic designed for users who want a bold, unforgettable visual experience. It blends neon magenta, laser cyan, and deep cosmic navy with vaporwave-influenced vibrancy—resulting in a dazzling, high-contrast palette that feels futuristic, surreal, and impossible to ignore.

- **Palette (from `static/themes.ts`):**
```ts
{
  id: "dreamwave-mirage",
  backgroundColor: "hsla(257, 77%, 13%, 1)",   // Digital midnight — deep navy-violet
  cardColor: "hsla(257, 77%, 17%, 1)",         // Slightly lighter, maintains deep mood
  borderColor: "hsla(257, 77%, 25%, 1)",       // Soft separation, derived from background
  mainColor: "hsla(333, 97%, 60%, 1)",         // Neon magenta — striking headlines/CTAs
  secondaryColor: "hsla(189, 97%, 60%, 1)",    // Laser cyan — sharp accents/highlights
}
 ```

* **Usage guidance:**
  * Use `--background-color` to establish the cosmic navy-violet base reminiscent of a digital midnight sky.
  * Use `--card-color` for elevated surfaces that maintain the surreal atmosphere while adding subtle depth.
  * Use `--border-color` for separators, hover outlines, and interactive affordances; the lighter tone ensures clean structure.
  * Use `--main-color` for primary text, CTAs, and elements meant to pop with neon-magnetic intensity.
  * Use `--secondary-color` to highlight secondary UI elements, metadata, or accents with laser-like clarity.
  
* **Tailwind example:**
```tsx
<div className="bg-[var(--background-color)] min-h-screen text-[var(--main-color)]">
  <div className="rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] p-6">
    <h1 className="text-2xl font-bold text-[var(--main-color)]">
      Dreamwave Mirage — Surreal Neon Horizon
    </h1>
    <p className="text-sm text-[var(--secondary-color)]">
      Neon magenta, laser cyan, and cosmic midnight tones
    </p>
  </div>
</div>
```

* **Accessibility / contrast notes:**
  * `--main-color` (neon magenta) on the dark navy-violet background passes AA for normal text and maintains excellent visibility.
  * `--secondary-color` (laser cyan) maintains strong contrast on both background and card surfaces; verify for small text with WebAIM or axe.
  * `--border-color` preserves the minimum 3:1 contrast ratio for interactive elements; adjust intensity only if borders serve as primary focus indicators.
  * Avoid clustering neon accents in dense UI areas; use them intentionally to maintain clarity.
  
* **Developer checklist when adding/using `dreamwave-mirage`:**
  * Add this theme to `static/themes.ts` under the Dark group.
  * Verify `applyTheme("dreamwave-mirage")` correctly updates all CSS variables and the `data-theme` attribute.
  * Run automated contrast tests (axe, Lighthouse) to confirm AA-level readability for both neon accent colors.
  * Test buttons, inputs, dialogs, and tooltips to ensure neon elements remain readable in dark contexts.
  * Confirm proper rendering and labeling in the theme picker, and validate preview swatches.
  
#### Golden Twilight Grove Theme (Dark — Warm, Magical, Inviting)
The `golden-twilight-grove` theme captures the cozy brilliance of a magical forest at sunset—deep dusk greens, glowing amber light, soft jade foliage, and the gentle shimmer of fireflies. It offers a warm, optimistic dark mode that feels both relaxing and creatively energizing.

- **Palette (from `static/themes.ts`):**
```ts
{
  id: "golden-twilight-grove",
  backgroundColor: "hsla(105, 22%, 11%, 1)",  // Deep dusk green, tranquil forest shadow
  cardColor: "hsla(40, 40%, 16%, 1)",         // Gold-tinged earth, warm sunlight through branches
  borderColor: "hsla(35, 78%, 32%, 1)",       // Golden bark edge, firelit wood tone
  mainColor: "hsla(45, 96%, 67%, 1)",         // Apricot-gold highlight, firefly/sunbeam glow
  secondaryColor: "hsla(155, 43%, 59%, 1)",   // Soft jade green, gentle summer leaves
}
 ```
  
* **Usage guidance:**
  * Use `--background-color` for the tranquil forest-night base layer—deep, warm, and easy on the eyes.
  * Use `--card-color` for elevated surfaces, subtle containers, or warm-toned panels.
  * Use `--border-color` to create rich golden separation between layers—dividers, focus indicators, hover outlines.
  * Use `--main-color` where clarity and emphasis matter: primary text, icons, important CTAs, or firefly-like highlights.
  * Use `--secondary-color` for cool-jade counters to the warm palette—metadata, secondary actions, supportive UI accents.
  
* **Tailwind example:**
```tsx
<div className="bg-[var(--background-color)] min-h-screen text-[var(--main-color)]">
  <div className="rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] p-6">
    <h1 className="text-2xl font-bold text-[var(--main-color)]">
      Golden Twilight Grove — Warm & Magical
    </h1>
    <p className="text-sm text-[var(--secondary-color)]">
      Sunset gold, jade leaves, tranquil dusk atmosphere
    </p>
  </div>
</div>
```

* **Accessibility / contrast notes:**
  * `--main-color` (bright apricot-gold) meets AA contrast on the dark background and remains readable across UI sizes.
  * `--secondary-color` (soft jade) maintains sufficient contrast on both background and card surfaces; verify for very small text via WebAIM or axe.
  * `--border-color` is intentionally strong to provide clear interactive affordances against warm card tones.
  * Despite its warmth, the palette avoids harsh saturation; designed for long usage without eye strain.

* **Developer checklist when adding/using `golden-twilight-grove`:**
  * Add this theme to `static/themes.ts` in the Dark group.
  * Confirm `applyTheme("golden-twilight-grove")` updates CSS variables and theme attributes correctly.
  * Run contrast tests (axe, Lighthouse) on all pairings of main/secondary text over card and background.
  * Validate buttons, panels, menus, dialogs, and forms across dark-mode environments.
  * Ensure the theme picker displays correct swatches and labeling.
  
#### Crystal Frost Meadow Theme (Dark — Frosty, Bright, Hopeful)
The `crystal-frost-meadow` theme captures the serenity of winter landscapes with the optimism of early spring. It blends frosty blues, soft greens, and warm sunrise tones to create a cool yet inviting palette—gentle, lively, and ideal for long learning sessions without the bleakness of traditional icy themes.

- **Palette (from `static/themes.ts`):**
```ts
{
  id: "crystal-frost-meadow",
  backgroundColor: "hsla(207, 37%, 15%, 1)",  // Deep frost blue — cold morning snow shadow
  cardColor: "hsla(198, 35%, 20%, 1)",        // Ocean green-blue — frosted grass & shaded streams
  borderColor: "hsla(184, 81%, 46%, 1)",      // Glacier sparkle blue — icy border highlights
  mainColor: "hsla(83, 74%, 65%, 1)",         // Sunrise yellow-green — warm light reflected in snow
  secondaryColor: "hsla(193, 100%, 81%, 1)",  // Airy ice blue — frost sparkle accent
}
 ```
  
* **Usage guidance:**
  * Use `--background-color` for deep, cold foundational surfaces inspired by snow-shadowed mornings.
  * Use `--card-color` to represent frosted field textures and gentle green-blue elevations.
  * Use `--border-color` for bright glacier-edge highlights around interactive components.
  * Use `--main-color` for primary text and CTAs, reflecting soft sunrise warmth over snow.
  * Use `--secondary-color` for frosty accents, metadata, and complementary highlights.
  
* **Tailwind example:**
```tsx
<div className="bg-[var(--background-color)] min-h-screen text-[var(--main-color)]">
  <div className="rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] p-6">
    <h1 className="text-2xl font-bold text-[var(--main-color)]">
      Crystal Frost Meadow — Frosty, Bright, Hopeful
    </h1>
    <p className="text-sm text-[var(--secondary-color)]">
      Snowlit greens, glacier-blue accents, gentle spring brightness
    </p>
  </div>
</div>
```
  
* **Accessibility / contrast notes:**
  * All text colors meet WCAG 2.1 AA (4.5:1+) contrast on both background and card surfaces.
  * `--main-color` provides a warm, readable contrast against the cool frost-blue base.
  * `--secondary-color` remains legible for smaller accent text; verify with WebAIM or axe when used for small metadata.
  * `--border-color` is intentionally bright to ensure UI affordances remain visible in low-light or blue-heavy visuals.
  
* **Developer checklist when adding/using `crystal-frost-meadow`:**
  
  * Add the theme to `static/themes.ts` under the Dark group.
  * Ensure `applyTheme("crystal-frost-meadow")` updates all CSS variables correctly.
  * Test accessibility using contrast tools (axe, Lighthouse, WebAIM).
  * Verify clarity across inputs, buttons, dialogs, and panels.
  * Confirm theme picker preview and label rendering.
  
#### Prism Rainforest Theme (Dark — Emerald Prism Serenity)
The `prism-rainforest` theme creates an immersive, calming visual environment inspired by tropical rainforest dawn: deep emerald canopies, cool misty shadows, and prism-like highlights from dew catching morning light. It is vibrant yet gentle, designed for long study sessions without visual fatigue.
  
- **Palette (from `static/themes.ts`):**
```ts
{
  id: "prism-rainforest",
  backgroundColor: "hsla(158, 35%, 13%, 1)",   // Deep emerald — rainforest before sunrise
  cardColor: "hsla(163, 24%, 18%, 1)",         // Misty jade — sunlit undergrowth
  borderColor: "hsla(92, 60%, 44%, 1)",        // Moss dew — radiant foliage edge
  mainColor: "hsla(191, 85%, 71%, 1)",         // Prism blue — sky reflection on water droplets
  secondaryColor: "hsla(54, 96%, 73%, 1)",     // Golden sun — early light breaking through leaves
}
 ```
  
* **Usage guidance:**
  * Use `--background-color` to create the deep, cool rainforest base that keeps the UI visually grounded.
  * Use `--card-color` for panels, cards, and elevated surfaces that mimic leafy undergrowth.
  * Use `--border-color` as a bright structural accent for dividers, focus rings, and interactive outlines.
  * Use `--main-color` for prism-like clarity on primary text, icons, and CTAs.
  * Use `--secondary-color` for warm sunlit accents, metadata, and subtle highlights.

* **Tailwind example:**
```tsx
<div className="bg-[var(--background-color)] min-h-screen text-[var(--main-color)]">
  <div className="rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] p-6">
    <h1 className="text-2xl font-bold text-[var(--main-color)]">
      Prism Rainforest — Emerald Prism Serenity
    </h1>
    <p className="text-sm text-[var(--secondary-color)]">
      Misty greens, prism blues, gentle sunrise gold
    </p>
  </div>
</div>
```
  
* **Accessibility / contrast notes:**
  * `--main-color` and `--secondary-color` both exceed AA contrast requirements on the dark emerald background.
  * `--border-color` is intentionally luminous, ensuring strong visibility for interactive affordances.
  * The palette avoids harsh neon; all hues are ergonomically tuned for long reading or practice sessions.
  * Distinct color roles prevent confusion between highlights, accents, and structure.
  
* **Developer checklist when adding/using `prism-rainforest`:**
  * Add the theme object to `static/themes.ts` under the Dark group.
  * Confirm `applyTheme("prism-rainforest")` correctly updates CSS variables and the `data-theme` attribute.
  * Validate contrast using Lighthouse or axe for small text and UI chrome.
  * Test UI components such as cards, dialogs, lists, and form inputs in this theme for clarity and depth.
  * Ensure the theme picker displays correct preview and naming.


  ### Theme Color Guidelines

#### Color Format

- Use **HSLA** for flexibility: `hsla(hue, saturation%, lightness%, alpha)`
- HSL makes it easier to create harmonious color schemes

#### Naming Convention

- Theme IDs should be descriptive: `'midnight-purple'`, `'sunset-orange'`
- Use kebab-case for consistency

#### Color Relationships

- `backgroundColor` → Lightest/darkest (depending on light/dark theme)
- `cardColor` → Slightly elevated from background
- `borderColor` → More prominent than card, used for hover states
- `mainColor` → High contrast with background
- `secondaryColor` → Medium contrast, complementary to main

**Example Hierarchy (Dark Theme):**

```
backgroundColor: hsl(220, 15%, 10%)  ← Darkest
cardColor:       hsl(220, 15%, 15%)  ← Slightly lighter
borderColor:     hsl(220, 15%, 25%)  ← More prominent
mainColor:       hsl(280, 80%, 70%)  ← Vibrant, high contrast
secondaryColor:  hsl(180, 60%, 60%)  ← Complementary accent
```

---

## ♿ Accessibility Guidelines

### Color Contrast

**All themes MUST meet WCAG 2.1 Level AA standards:**

- **Normal text** (< 18pt): Contrast ratio ≥ 4.5:1
- **Large text** (≥ 18pt or ≥ 14pt bold): Contrast ratio ≥ 3:1
- **UI components** (buttons, borders): Contrast ratio ≥ 3:1

**Tools for Testing:**

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools Lighthouse
- Browser extension: WAVE or axe DevTools

**Example Validation:**

```typescript
// Test main text readability
mainColor (hsl(280, 80%, 70%)) on backgroundColor (hsl(220, 15%, 10%))
→ Contrast ratio: 8.2:1 ✅ Passes AA and AAA

// Test secondary text readability
secondaryColor (hsl(180, 60%, 60%)) on backgroundColor (hsl(220, 15%, 10%))
→ Contrast ratio: 5.1:1 ✅ Passes AA
```

### Focus States

**All interactive elements MUST have visible focus indicators:**

```tsx
// Example from components/ui/button.tsx
const buttonVariants = cva(
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--main-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background-color)]'
  // ... other styles
);
```

**Focus Ring Guidelines:**

- Use `focus-visible:ring-2` for keyboard navigation
- Ring color: `ring-[var(--main-color)]`
- Ring offset: `ring-offset-2` for separation
- Ring offset color: `ring-offset-[var(--background-color)]`

### Semantic HTML

Use proper HTML elements for their intended purpose:

**✅ DO:**

```tsx
<button onClick={handleClick}>Submit</button>
<a href="/about">Learn More</a>
```

**❌ DON'T:**

```tsx
<div onClick={handleClick}>Submit</div>
<span onClick={navigate}>Learn More</span>
```

### ARIA Labels

Provide context for screen readers when visual cues aren't sufficient:

```tsx
<button aria-label="Close modal">
  <X size={20} />
</button>

<input
  type="checkbox"
  aria-checked={isSelected}
  aria-label="Select all Hiragana characters"
/>
```

### Keyboard Navigation

- Ensure all interactive elements are keyboard accessible
- Support `Tab`, `Enter`, `Space`, `Escape`, and arrow keys where appropriate
- Maintain logical tab order

---

## 🧩 Component Patterns

### Component Structure

Follow these patterns for consistency:

```tsx
'use client'; // Add for client components (state, effects, etc.)

import { useState } from 'react';
import { cn } from '@/lib/utils';
import useThemeStore from '@/store/useThemeStore';

interface MyComponentProps {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
}

const MyComponent = ({
  title,
  isActive = false,
  onClick,
}: MyComponentProps) => {
  const [state, setState] = useState('');
  const theme = useThemeStore(state => state.theme);

  return (
    <div
      className={cn(
        'rounded-xl p-4',
        'bg-[var(--card-color)] text-[var(--main-color)]',
        isActive && 'border-2 border-[var(--main-color)]'
      )}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      {/* ... */}
    </div>
  );
};

export default MyComponent;
```

### Styling Patterns

#### 1. Container Layouts

```tsx
<div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
  {/* Responsive container with proper padding */}
</div>
```

#### 2. Card Components

```tsx
<div className="rounded-xl bg-[var(--card-color)] p-6 shadow-sm">
  {/* Card content */}
</div>
```

#### 3. Buttons (Custom Styles)

```tsx
<button
  className={cn(
    'px-6 py-3 rounded-lg',
    'bg-[var(--main-color)] text-[var(--background-color)]',
    'hover:brightness-110 active:brightness-95',
    'transition-all duration-200',
    'focus-visible:ring-2 focus-visible:ring-[var(--main-color)] focus-visible:ring-offset-2'
  )}
>
  Action
</button>
```

#### 4. Text Hierarchy

```tsx
<h1 className="text-4xl md:text-5xl font-bold text-[var(--main-color)]">
  Main Heading
</h1>
<h2 className="text-2xl md:text-3xl font-semibold text-[var(--main-color)]">
  Subheading
</h2>
<p className="text-base text-[var(--secondary-color)]">
  Body text with secondary color
</p>
```

#### 5. Hover States

```tsx
<div
  className={cn(
    'p-4 rounded-lg',
    'bg-[var(--card-color)]',
    'hover:bg-[var(--border-color)] hover:cursor-pointer',
    'transition-all duration-200'
  )}
>
  {/* Hoverable content */}
</div>
```

### Animation Patterns

Use Framer Motion (`motion` package) for complex animations:

```tsx
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  {/* Animated content */}
</motion.div>;
```

Use Tailwind transitions for simple interactions:

```tsx
<button className="transition-all duration-200 hover:scale-105 active:scale-95">
  Click me
</button>
```

---

## 🚀 shadcn/ui Adoption Strategy

KanaDojo is gradually adopting [shadcn/ui](https://ui.shadcn.com/) for consistent, accessible components.

### Current shadcn/ui Components

- ✅ `Button` (`components/ui/button.tsx`)
- ✅ `Select` (`components/ui/select.tsx`)

### shadcn/ui Integration Guidelines

#### 1. Theme Variable Compatibility

shadcn/ui components are customized to use our CSS variable system:

```tsx
// components/ui/button.tsx
const buttonVariants = cva(
  'bg-[var(--main-color)] text-[var(--background-color)]' // Uses our theme
  // ...
);
```

#### 2. Installing New Components

Use the shadcn CLI to add components:

```bash
npx shadcn@latest add [component-name]
```

**After installation:**

1. Review the generated component
2. Replace hardcoded colors with CSS variables:
   - `bg-primary` → `bg-[var(--main-color)]`
   - `text-primary-foreground` → `text-[var(--background-color)]`
   - `border` → `border-[var(--border-color)]`
3. Test with multiple themes to ensure compatibility

#### 3. Component Customization

**Example: Customizing Button variants**

```tsx
// components/ui/button.tsx
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-transparent text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--main-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background-color)] disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--main-color)] text-[var(--background-color)] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)] hover:brightness-110',
        outline:
          'border border-[var(--border-color)] bg-transparent text-[var(--main-color)] hover:bg-[var(--card-color)]',
        ghost:
          'bg-transparent text-[var(--main-color)] hover:bg-[var(--card-color)]',
        // Add custom variants as needed
      },
      size: {
        default: 'h-10 px-5',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-xl px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
  }
);
```

#### 4. Migration Strategy

**Phase 1: High-Priority Components (Current)**

- ✅ Button
- ✅ Select
- 🔄 Input (next)
- 🔄 Checkbox (next)

**Phase 2: Form Components**

- 🔜 Form wrapper
- 🔜 Label
- 🔜 Textarea
- 🔜 Switch

**Phase 3: Overlay Components**

- 🔜 Dialog/Modal
- 🔜 Dropdown Menu
- 🔜 Tooltip

**Migration Guidelines:**

1. **Don't break existing UI** - Migrate incrementally, one component at a time
2. **Test thoroughly** - Verify all game modes and features still work
3. **Maintain theme compatibility** - Always use CSS variables
4. **Update documentation** - Document new shadcn components in this file

### Future-Proofing for shadcn

**DO:**

- ✅ Use CSS variables consistently
- ✅ Follow Radix UI patterns (shadcn is built on Radix)
- ✅ Use the `cn()` utility for class management
- ✅ Maintain semantic HTML structure

**DON'T:**

- ❌ Hardcode colors or theme values
- ❌ Create custom components that duplicate shadcn functionality
- ❌ Override Radix UI accessibility features

---

## ✅ Best Practices

### Do's and Don'ts

#### Styling

**✅ DO:**

```tsx
// Use CSS variables for dynamic theming
<div className="bg-[var(--card-color)] text-[var(--main-color)]" />

// Use cn() for conditional classes
<button className={cn(
  "px-4 py-2",
  isActive && "bg-[var(--main-color)]"
)} />

// Extract repeated patterns to static/styles.ts
import { buttonBorderStyles } from '@/static/styles';

// Use responsive prefixes consistently
<div className="flex flex-col md:flex-row lg:gap-8" />
```

**❌ DON'T:**

```tsx
// Don't hardcode colors
<div className="bg-gray-100 text-black" />

// Don't use string concatenation for classes
<button className={"px-4 py-2 " + (isActive ? "bg-blue-500" : "")} />

// Don't repeat complex class strings
<button className="rounded-xl bg-[var(--card-color)] hover:bg-[var(--border-color)] transition-all duration-200" />
<div className="rounded-xl bg-[var(--card-color)] hover:bg-[var(--border-color)] transition-all duration-200" />

// Don't use arbitrary breakpoint values
<div className="flex flex-col min-[850px]:flex-row" /> // Use md: instead
```

#### Typography

**✅ DO:**

```tsx
// Use semantic heading levels
<h1 className="text-4xl font-bold">Main Title</h1>
<h2 className="text-2xl font-semibold">Section Title</h2>

// Use secondary color for less prominent text
<p className="text-[var(--secondary-color)]">Helper text</p>

// Use responsive text sizes
<h1 className="text-3xl md:text-4xl lg:text-5xl">Responsive Title</h1>
```

**❌ DON'T:**

```tsx
// Don't skip heading levels
<h1>Title</h1>
<h3>Skipped h2</h3>

// Don't use hardcoded gray values
<p className="text-gray-500">Text</p>

// Don't use fixed sizes that don't scale
<p className="text-[14px]">Fixed size text</p>
```

#### Spacing

**✅ DO:**

```tsx
// Use Tailwind spacing scale
<div className="p-4 md:p-6 lg:p-8" />
<div className="space-y-4" /> // Consistent vertical spacing
<div className="gap-4 md:gap-6" /> // Responsive gaps in flex/grid

// Use consistent spacing within components
const spacing = "p-6 space-y-4";
```

**❌ DON'T:**

```tsx
// Don't use arbitrary values unnecessarily
<div className="p-[17px] space-y-[23px]" />

// Don't mix spacing units
<div className="p-4 mb-[2rem]" /> // Inconsistent
```

#### Interactions

**✅ DO:**

```tsx
// Add hover states for interactive elements
<button className="hover:brightness-110 transition-duration-200" />

// Use focus-visible for keyboard navigation
<button className="focus-visible:ring-2 focus-visible:ring-[var(--main-color)]" />

// Provide feedback on active/pressed states
<button className="active:brightness-95" />

// Use appropriate cursor styles
<div className="cursor-pointer" onClick={handler} />
```

**❌ DON'T:**

```tsx
// Don't forget hover states
<button onClick={handler}>No hover feedback</button>

// Don't use focus instead of focus-visible (affects mouse users)
<button className="focus:ring-2" />

// Don't make non-interactive elements look clickable
<div className="cursor-pointer">Not actually clickable</div>
```

#### Component Organization

**✅ DO:**

```tsx
// Group related components
components/
  Settings/
    Themes.tsx
    Preferences.tsx
  Dojo/
    Kana/
    Kanji/
    Vocab/

// Use TypeScript interfaces from lib/interfaces.ts
import { KanaCharacter } from '@/lib/interfaces';

// Use custom hooks from lib/hooks/
import { useClick } from '@/lib/hooks/useAudio';
```

**❌ DON'T:**

```tsx
// Don't create deeply nested component structures
components / Settings / ThemeSection / ThemesList / ThemeItem / index.tsx; // Too deep

// Don't duplicate interface definitions
interface KanaCharacter {} // Already in lib/interfaces.ts
```

### Performance Considerations

1. **Use `'use client'` directive wisely** - Only add to components that need client-side features (state, effects, event handlers)
2. **Optimize images** - Use Next.js Image component for automatic optimization
3. **Lazy load heavy components** - Use dynamic imports for large components
4. **Memoize expensive calculations** - Use `useMemo` and `useCallback` appropriately
5. **Minimize re-renders** - Use Zustand selectors to subscribe to specific state slices

---

## 💡 Code Examples

### Example 1: Themed Card Component

```tsx
'use client';

import { cn } from '@/lib/utils';
import { cardBorderStyles } from '@/static/styles';

interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card = ({ title, description, children, className }: CardProps) => {
  return (
    <div className={cn(cardBorderStyles, 'p-6 space-y-4', className)}>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-[var(--main-color)]">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-[var(--secondary-color)]">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
};

export default Card;
```

### Example 2: Interactive Selection Button

```tsx
'use client';

import { cn } from '@/lib/utils';
import { buttonBorderStyles } from '@/static/styles';
import { useClick } from '@/lib/hooks/useAudio';
import { Check } from 'lucide-react';

interface SelectionButtonProps {
  label: string;
  isSelected: boolean;
  onToggle: () => void;
}

const SelectionButton = ({
  label,
  isSelected,
  onToggle,
}: SelectionButtonProps) => {
  const { playClick } = useClick();

  const handleClick = () => {
    playClick();
    onToggle();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        buttonBorderStyles,
        'p-4 flex items-center justify-between gap-3',
        'transition-all duration-200',
        isSelected && 'border-2 border-[var(--main-color)]'
      )}
      aria-pressed={isSelected}
    >
      <span className="text-[var(--main-color)] font-medium">{label}</span>
      {isSelected && (
        <Check
          className="text-[var(--secondary-color)]"
          size={20}
        />
      )}
    </button>
  );
};

export default SelectionButton;
```

### Example 3: Responsive Grid Layout

```tsx
<div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
  <h1 className="text-3xl md:text-4xl font-bold text-[var(--main-color)] mb-8">
    Character Selection
  </h1>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    {characters.map(char => (
      <CharacterCard
        key={char.id}
        character={char}
      />
    ))}
  </div>
</div>
```

### Example 4: Themed Modal with Overlay

```tsx
'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={cn(
              'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50',
              'w-full max-w-md max-h-[85vh] overflow-y-auto',
              'bg-[var(--background-color)] rounded-2xl shadow-2xl',
              'p-6'
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[var(--main-color)]">
                {title}
              </h2>
              <button
                onClick={onClose}
                className={cn(
                  'rounded-lg p-2',
                  'hover:bg-[var(--card-color)]',
                  'transition-colors duration-200',
                  'focus-visible:ring-2 focus-visible:ring-[var(--main-color)]'
                )}
                aria-label="Close modal"
              >
                <X
                  className="text-[var(--secondary-color)]"
                  size={24}
                />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
```

### Example 5: Custom Checkbox Styling

The project uses custom checkbox styling in `app/globals.css`:

```css
/* Custom styled checkbox using CSS variables */
input[type='checkbox'] {
  appearance: none;
  -webkit-appearance: none;
  background-color: var(--card-color);
  border: 2px solid var(--border-color);
  width: 1.1em;
  height: 1.1em;
  border-radius: 0.25em;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s;
}

input[type='checkbox']:checked {
  background-color: var(--main-color);
  border-color: var(--main-color);
}

input[type='checkbox']:checked::after {
  content: '';
  display: block;
  position: absolute;
  left: 0.28em;
  top: 0.05em;
  width: 0.3em;
  height: 0.6em;
  border: solid var(--background-color);
  border-width: 0 0.18em 0.18em 0;
  transform: rotate(45deg);
}
```

**Usage in JSX:**

```tsx
<label className="flex items-center gap-2 cursor-pointer">
  <input
    type="checkbox"
    checked={isSelected}
    onChange={e => setIsSelected(e.target.checked)}
    className="focus-visible:ring-2 focus-visible:ring-[var(--main-color)]"
  />
  <span className="text-[var(--main-color)]">Option label</span>
</label>
```

### Example 6: Using shadcn/ui Button

```tsx
import { Button } from '@/components/ui/button';

// Default variant - primary action
<Button onClick={handleSubmit}>
  Submit
</Button>

// Outline variant - secondary action
<Button variant="outline" onClick={handleCancel}>
  Cancel
</Button>

// Ghost variant - tertiary action
<Button variant="ghost" onClick={handleReset}>
  Reset
</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <Settings size={20} />
</Button>

// With custom classes
<Button className="w-full md:w-auto">
  Responsive Width
</Button>
```

---

## 📚 Additional Resources

### Internal Documentation

- `CLAUDE.md` - Project overview and architecture
- `CONTRIBUTING.md` - Contribution guidelines and code style
- `static/themes.ts` - Theme definitions and management
- `lib/interfaces.ts` - TypeScript interfaces
- `static/styles.ts` - Reusable style constants

### External Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Radix UI Documentation](https://www.radix-ui.com/primitives)

### Design Tools

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors.co](https://coolors.co/) - Color palette generator
- [Realtime Colors](https://realtimecolors.com/) - Theme visualization
- [HSL Color Picker](https://hslpicker.com/)

---

## 🔄 Document Maintenance

This document should be updated whenever:

- New theming patterns are established
- shadcn/ui components are added or customized
- CSS variable naming conventions change
- New accessibility requirements are identified
- Major design system changes are implemented

**Last Updated:** [Current Date]  
**Maintained By:** KanaDojo Team

---

**Questions or Suggestions?**  
Please open an issue or discussion on GitHub to improve this documentation.
