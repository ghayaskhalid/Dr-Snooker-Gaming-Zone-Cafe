---
name: frontend-design
description: >-
  Enforces strict luxury dark-mode UI/UX standards when designing, building, or
  refactoring web interfaces, pages, components, or stylesheets. Use this skill
  for any frontend design, layout, styling, or UI implementation task.
---

# Luxury Dark-Mode Frontend Design

> [!IMPORTANT]
> **OVERRIDE NOTICE (`AGENTS.md`):** The project's root `AGENTS.md` enforces a **STRICT DESIGN & LAYOUT LOCK**. The current layout, section order, grid proportions, CSS styling, color palette, typography (`Cinzel`, `Plus Jakarta Sans`, `Inter`), spacing, animations, and component JSX structures are **PERMANENTLY LOCKED**. Unless the user explicitly types `"UNLOCK DESIGN"`, perform **surgical edits only** and leave all locked design/layout/CSS untouched.

Apply these non-negotiable standards to every interface, layout, component, and
interaction. Reject generic SaaS templates, flat dark themes, and cramped grids.

## 1. Visual Surface, Depth & Borders

- **Obsidian Canvas Hierarchy**: Build depth through stepped dark surfaces rather
  than pure `#000000` voids or flat `#111111` slabs:
  - Base canvas: deep charcoal/obsidian (`#07080A` to `#0B0D10`)
  - Elevated surface: translucent dark slate (`rgba(18, 21, 28, 0.72)`) with
    `backdrop-filter: blur(16px)`
  - Interactive highlight / modal surface: subtle tonal lift (`rgba(26, 30, 40, 0.85)`)
- **Subtle 1px Glass Borders**:
  - Frame cards, panels, and floating bars with crisp `1px solid` hairline
    borders using low-opacity white or cool-tint gradients
    (`rgba(255, 255, 255, 0.08)` default, `rgba(255, 255, 255, 0.16)` on hover/focus).
  - Add an inner top specular edge (`inset 0 1px 0 rgba(255, 255, 255, 0.06)`) to
    simulate machined glass catchlights.
  - Never use thick opaque borders (`>= 2px`) or harsh high-contrast outlines
    except for `:focus-visible` accessibility rings.
- **Layered Depth Shadows**:
  - Combine tight ambient occlusion shadows with broad diffused elevation shadows:
    - Resting card: `0 1px 2px rgba(0, 0, 0, 0.6), 0 12px 32px -8px rgba(0, 0, 0, 0.75)`
    - Floating / hovered surface: `0 2px 6px rgba(0, 0, 0, 0.7), 0 24px 60px -12px rgba(0, 0, 0, 0.9)`
  - Pair elevation with subtle radial ambient glow behind focal hero elements,
    never neon drop-shadow clutter.

## 2. Layout, Whitespace & Editorial Grids

- **Generous Whitespace**:
  - Treat negative space as a primary luxury material. Let typography, photography,
    and focal modules breathe.
  - Enforce wide section vertical rhythm (`clamp(5rem, 10vw, 10rem)`), generous
    container gutters, and spacious internal card padding (`24px`–`40px`).
  - Never pack dense multi-column metric walls or edge-to-edge card grids.
- **Asymmetric Editorial Grids**:
  - Use deliberate 12-column CSS Grid proportions (`7fr / 5fr`, `8fr / 4fr`,
    offset baselines, overlapping caption/media planes, and intentional empty tracks).
  - Vary rhythm between full-bleed cinema frames, off-center editorial callouts,
    and staggered vertical offsets.
- **Zero Generic Template Layouts**:
  - Explicitly forbid cookie-cutter SaaS patterns: centered hero + 3-column icon
    feature cards + stock pricing table + generic gradient blobs.
  - Every page must establish a bespoke focal hierarchy tailored to the brand's
    content, photography, and storytelling cadence.

## 3. Typography & Restraint

- Pair an expressive editorial display face (or tight-tracked geometric display)
  with a crisp humanist/grotesque body font and tabular numerals (`font-variant-numeric: tabular-nums`)
  for scores, prices, or telemetry.
- Use tight negative tracking on large display headings (`-0.03em` to `-0.04em`),
  high contrast primary ink (`#F5F7FA`), muted secondary ink (`#9AA3B2`), and
  disciplined single-accent highlights.

## 4. Smooth Framer Motion Micro-Interactions

- **Physics & Curves**: Use weighted, composed motion—never bouncy cartoon springs
  or sluggish linear fades:
  - Editorial ease: `cubic-bezier(0.22, 1, 0.36, 1)` (`duration: 0.45`–`0.7`)
  - Tactile spring: `{ type: "spring", stiffness: 320, damping: 32, mass: 0.9 }`
- **Purposeful Micro-Interactions**:
  - Staggered reveal on viewport entry (`viewport={{ once: true, amount: 0.2 }}`)
    animating only `transform` and `opacity` (GPU-composited properties).
  - Shared-element `layoutId` indicators for tabs, segmented controls, and nav pills.
  - Subtle magnetic/tilt or hairline border-luminance transitions on hover, with
    tactile `whileTap={{ scale: 0.985 }}` press feedback.
  - Respect `prefers-reduced-motion` (`useReducedMotion()` / `<MotionConfig reducedMotion="user">`).

## 5. Mobile-First Thumb-Friendly Navigation

- **Design Mobile First**: Author base styles and layout flow for `375px`–`430px`
  viewports before expanding upward with `min-width` breakpoints.
- **Bottom-Anchored Primary Controls**:
  - Keep primary navigation, key actions, and sheet triggers inside the natural
    lower thumb arc on mobile (floating glass bottom dock or bottom action bar)
    rather than burying critical links in a tiny top-corner hamburger menu.
  - Respect safe-area insets (`env(safe-area-inset-bottom)`).
- **Touch Ergonomics**:
  - Enforce minimum `44px x 44px` (`48px` preferred) hit targets with at least
    `8px` spacing between adjacent interactive elements.
  - Ensure swipeable drawers/sheets, generous tap targets, and zero horizontal
    overflow at any breakpoint.

## 6. Verification Checklist Before Completing Any UI Task

1. **Whitespace & Grid Audit**: Confirm asymmetric editorial proportions, wide
   breathing room, and zero generic 3-column template clichés.
2. **Surface & Depth Audit**: Verify stepped dark surfaces, `1px` glass hairline
   borders, specular top highlights, and multi-layered shadows.
3. **Motion Audit**: Confirm Framer Motion uses GPU-safe properties, refined
   easing/spring physics, `layoutId` where appropriate, and reduced-motion support.
4. **Mobile Thumb Audit**: Inspect at `390px` width to verify thumb-zone primary
   navigation, `>= 44px` tap targets, safe-area padding, and zero horizontal scroll.
