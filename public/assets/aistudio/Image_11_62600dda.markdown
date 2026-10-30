---
name: AI Web Intelligence
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464555'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#684000'
  on-tertiary: '#ffffff'
  tertiary-container: '#885500'
  on-tertiary-container: '#ffd4a4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: -0.005em
  metric-stat:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  metric-stat-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

This design system delivers an authoritative, high-efficiency intelligence environment for SEO analysts, growth engineers, and digital strategists. The aesthetic belongs to the Corporate/Modern SaaS spectrum, engineered for precision, speed, and analytical rigor. The design language avoids non-functional ornament, relying on immaculate typographic hierarchy, deliberate white space, and high data density that never compromises legibility.

The platform conveys trust, machine intelligence, and operational clarity. Users interacting with live SERP crawls, competitor matrices, and AI-driven content scores experience an interface that feels responsive, deterministic, and razor-sharp. Visual weight is concentrated on actionable anomalies and statistical shifts through vibrant indigo highlights, keeping peripheral cognitive load near zero.

## Colors

The color system operates on high-contrast surface tiers and functional state roles designed specifically for light mode readability.

- **Primary (`#4f46e5` - Electric Indigo):** Anchors core actions, active tracking states, primary callouts, and key data trendlines. Paired with an ultra-light tint background (`#eef2ff`) for active table rows, badges, and focus envelopes.
- **Secondary (`#10b981` - Emerald):** Reserved for positive growth metrics, position improvements, successful crawl statuses, and high health scores. Tint background: `#ecfdf5`.
- **Tertiary (`#f59e0b` - Amber):** Denotes ranking volatility, keyword decay warnings, and pending queue states. Tint background: `#fffbeb`.
- **Error / Danger (`#ef4444` - Rose):** Identifies ranking drops, broken endpoints, crawl anomalies, and critical audit alerts. Tint background: `#fef2f2`.
- **Neutrals (Slate Architecture):**
  - Surface Pure: `#ffffff` for cards, modals, and metric containers.
  - Surface Background: `#f8fafc` (Canvas base) and `#f1f5f9` (Subtle secondary grouping wells).
  - Borders & Dividers: `#e2e8f0` for clean structural lines and input outlines.
  - Typography Primary: `#0f172a` for primary numbers, titles, and table headers.
  - Typography Secondary: `#334155` for body labels, explanations, and inactive navigation.
  - Typography Muted: `#64748b` for metric subtexts, timestamps, and table column keys.

## Typography

Inter governs the entirety of the typographic ladder to sustain programmatic consistency across dense data visualizations, comparative grids, and analytical control panels. 

Tabular figures (`font-variant-numeric: tabular-nums`) must be activated for all numerical representations, rank tables, change indicators, and currency displays to eliminate horizontal jitter when values update in real time. Use tight letter-spacing on headline and display tiers to heighten mechanical precision, while setting small metadata labels in uppercase with deliberate tracking (`0.04em`) to ensure instant differentiation between headers and row values.

## Layout & Spacing

The layout is built upon an 8pt base grid utilizing a 12-column fluid system constrained by standard SaaS viewport boundaries.

- **Breakpoints:**
  - **Desktop (>= 1280px):** 12 columns, 24px (`1.5rem`) gutters, 32px (`2rem`) margins. Max container constraint: 1440px. Permanent 260px left rail navigation.
  - **Tablet (768px - 1279px):** 8 columns, 16px (`1rem`) gutters, 24px (`1.5rem`) margins. Collapsible rail navigation into icon-only 72px dock.
  - **Mobile (< 768px):** 4 columns, 16px (`1rem`) gutters, 16px (`1rem`) margins. Fixed top action bar accompanied by a persistent 64px bottom tab navigation bar.

Spacing tokens dictate relational distance:
- `space-xs` (4px): Micro-spacing within interactive groups (e.g., icon-to-label offsets, indicator tags).
- `space-sm` (8px): Internal paddings for inputs, compact buttons, and table row vertical padding.
- `space-md` (16px): Standard container padding, metric cell spacing, and inter-form-field distance.
- `space-lg` (24px): Card padding, segmented section gaps, and data-grid margins.
- `space-xl` (32px): Dashboard zone separation and major module divides.
- `space-2xl` (48px): Page-level header margins and empty-state boundaries.

## Elevation & Depth

Visual hierarchy combines low-contrast structural borders (`#e2e8f0`) with ultra-subtle, ambient indigo-tinted drop shadows. This creates a crisp, layered canvas where UI components float with restrained purpose rather than heavy skeuomorphic projection.

- **Level 0 (Flat Ground):** Base app background (`#f8fafc`). No shadow. Demarcated by borders or contrasting `#ffffff` cards.
- **Level 1 (Card Rest / Table Base):** White surfaces (`#ffffff`) bounded by a 1px solid `#e2e8f0` border, paired with an ambient shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.03), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
- **Level 2 (Interactive Hover / Segmented Controls):** Applied when cards are interactive, during table row hover actions, or on filter popovers: `0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.03)`.
- **Level 3 (Flyouts / Context Menus / Select Panels):** Floating tooltips, dropdowns, and column pickers: `0 10px 15px -3px rgba(15, 23, 42, 0.07), 0 4px 6px -4px rgba(15, 23, 42, 0.04)`, retaining the 1px `#e2e8f0` envelope.
- **Level 4 (Modals & Command Palettes):** Urgent overlay panels and search prompts (`Cmd+K`): `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)`, backed by a `#0f172a` backdrop overlay with 35% opacity and a 4px blur.

## Shapes

The design system enforces a disciplined geometric profile calibrated at roundedness factor 2. Elements leverage an 8px (`0.5rem`) base corner radius, balancing contemporary modernism with high-density enterprise layout requirements.

- **Core Radius (`rounded-md`, 8px / 0.5rem):** Standard for buttons, input fields, dropdown menus, analytical cards, metric cards, and table wrappers.
- **Large Radius (`rounded-lg`, 16px / 1rem):** Global modal frames, search overlays, and multi-chart composite containers.
- **Extra Large Radius (`rounded-xl`, 24px / 1.5rem):** Empty-state containers and highlighted upgrade prompts.
- **Full Radius (`rounded-full`, 9999px):** Status badges, pill trackers (e.g., SERP features, algorithm indicators), user avatars, and floating micro-chips.

## Components

### Buttons
- **Primary:** Solid `#4f46e5` fill with `#ffffff` text. Height: 40px (desktop), 44px (touch target mobile). Border radius: 8px. Hover state transforms to `#4338ca`. Active state transitions to `#3730a3`. Focus state presents a 2px offset ring with `#4f46e5` at 50% opacity.
- **Secondary:** `#ffffff` surface, 1px solid `#e2e8f0`, text color `#0f172a`. Hover state switches surface to `#f8fafc` and text to `#4f46e5`.
- **Ghost:** Transparent background, `#334155` text. Hover surface `#f1f5f9`.

### Input Fields & Search Bars
- Standard input height: 40px. Surface: `#ffffff`. Border: 1px solid `#e2e8f0`. Typography: 14px `#0f172a`, placeholder text: `#94a3b8`.
- Focus state: Border transitions to `#4f46e5` with a `0 0 0 3px rgba(79, 70, 229, 0.12)` shadow halo.
- Left-aligned icon slots (e.g., search spyglass, domain protocol) are tinted `#64748b`.

### Badges & Status Chips
- Height: 24px. Shape: Fully rounded (`9999px`). Font size: 11px, weight: 600.
- **Positive (Up / Rank Gained):** Background `#ecfdf5`, text `#059669`, with an inline chevron-up icon.
- **Negative (Down / Rank Lost):** Background `#fef2f2`, text `#dc2626`, with an inline chevron-down icon.
- **Neutral / Metric (SERP Features):** Background `#f1f5f9`, text `#475569`.
- **AI Highlight:** Background `#eef2ff`, text `#4f46e5`, optional 1px border `#c7d2fe`.

### Data Cards & Metric Wells
- Surface: `#ffffff` surrounded by a 1px `#e2e8f0` border. Padding: 20px or 24px (`space-lg`).
- Structure: Small muted uppercase title (`11px`, `#64748b`), followed by a bold stat display (`32px`, `#0f172a`), flanked by an immediate percentage delta badge and a sparkline preview.

### Checkboxes & Radios
- Size: 16px x 16px. Border: 1.5px solid `#cbd5e1`.
- Checked state: `#4f46e5` fill with white checkmark icon or center dot. Radius: 4px for checkboxes, full circle for radios.

### Tables & Rank Lists
- Headers: Surface `#f8fafc`, 1px bottom border `#e2e8f0`. Typography: 12px uppercase `#64748b` with sorting toggles.
- Rows: Height: 52px. Surface `#ffffff`. Alternating or hover state switches to `#f8fafc`. Active row selection tint: `#eef2ff`.

### Navigation Architecture
- **Desktop Rail:** 260px width, surface `#ffffff`, right border 1px solid `#e2e8f0`. Nav items are 38px tall, 8px radius, default `#475569`, active `#4f46e5` background with `#eef2ff` tint and font-weight 600.
- **Mobile Navigation:** Top bar (56px) displaying contextual title and quick domain switcher. Persistent bottom bar (64px) with 4-5 touch zones (Dashboard, Keywords, Competitors, Audits, Alerts) centered around 20px icons with 10px labels.