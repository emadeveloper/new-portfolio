# Portfolio Interface System

## Direction and Feel
- Neural control interface with a futuristic but restrained blue-spectrum visual language.
- The experience should feel like a live technical system rather than a generic portfolio.
- Mobile navigation should behave like a compact command bar with a deployable control panel.

## Depth Strategy
- Borders-first hierarchy with low-opacity cyan separators.
- Surface lifts use subtle darkened gradients and soft inset highlights instead of dramatic shadows.
- Overlay panels should feel like tactical interface layers, not modal cards.

## Spacing Base
- Base unit: `8px`
- Tight control spacing: `8px` to `12px`
- Component padding: `12px` to `16px`
- Section spacing: multiples of `16px`

## Key Patterns
- `SectionIntro` owns the section icon + label pattern and should be reused across all major sections.
- Navigation items can reuse the same section icon family as the section intros for continuity.
- Desktop navbar stays as a luminous rail with inline anchors.
- Mobile navbar uses:
  - brand on the left
  - language toggle as a compact inline control
  - menu trigger on the right
  - a dropdown nav panel below the rail
- Mobile nav panel should prefer a 2-column anchor grid when width allows, collapsing to 1 column on narrower screens.
- Lab/project cards on mobile must follow a strict order:
  - header
  - visual
  - body
  - stack and CTAs
