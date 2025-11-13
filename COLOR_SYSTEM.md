# Color System Documentation

## Overview

The Gatito Next Theme uses a **Tailwind-style OKLCH color scale** for systematic, mathematically-derived color variations. This approach provides:

- **Perceptual uniformity**: OKLCH color space ensures consistent visual differences
- **Systematic scaling**: Tailwind-style naming (50-950) for intuitive color selection
- **Mathematical generation**: All variations derive from base colors using color theory
- **Better accessibility**: Perceptually uniform scales improve contrast and readability
- **Chained access**: JavaScript Proxy system enables intuitive color access patterns

## Base Colors

All colors derive from the iTerm color scheme (`gatito-corrected.itermcolors`):

- **Slate** (Background): `#252B2E` (exact match from iTerm) - dark gray
- **Ash** (Foreground): `#D4D4D4` - light gray for text
- **Red**: `#E15A60`
- **Green**: `#99C794`
- **Yellow**: `#FAC863`
- **Blue**: `#6699CC`
- **Magenta**: `#C594C5`
- **Cyan**: `#5FB3B3`
- **Orange**: `#F99157`

## Color Scale System

### Tailwind-Style Naming

Each base color generates an 11-step scale (50-950), where:

- **50-400**: Lighter variants (50 is lightest)
- **500**: Base color (matches iTerm value)
- **600-950**: Darker variants (950 is darkest)

### Scale Steps

Available scale steps: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`

### Alpha Variants

Alpha variants are available for all scale steps with the following opacity values:

- **10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90** (every 10% increment)

Alpha variants are particularly useful for:

- **Light steps** (50-300): Subtle highlights, hover states
- **Medium steps** (400-600): Background overlays, borders
- **Dark steps** (700-950): Shadows, deep backgrounds

## Usage Examples

### Chained Access (Recommended)

The theme uses JavaScript Proxy objects to enable intuitive chained access:

```javascript
const theme = require("../theme");

module.exports = {
  // Direct alias (base color 500)
  "editor.foreground": theme.ash, // Same as theme.ash[500]
  "editor.background": theme.slate, // Same as theme.slate[500]
  "editorError.foreground": theme.red, // Same as theme.red[500]

  // Scale access with bracket notation
  "editorWidget.background": theme.slate[600],
  "diffEditor.insertedTextBackground": theme.green[600][20],

  // Chained alpha access
  "editor.selectionBackground": theme.ash[50][20],
  "editor.findMatchBackground": theme.ash[500][50],
  "editor.hoverHighlightBackground": theme.ash[50][10],

  // Darker variants with alpha
  "diffEditor.removedTextBackground": theme.red[400][10],
  "inlineEdit.modifiedBackground": theme.green[600][20],
};
```

### Chaining Syntax

The theme supports chained access patterns using bracket notation:

**Direct Aliases** (base color 500):

- `theme.slate` → `theme.slate[500]` → `#252B2E`
- `theme.red` → `theme.red[500]` → `#E15A60`
- `theme.ash` → `theme.ash[500]` → `#D4D4D4`

**Scale Access** (bracket notation):

- `theme.slate[400]` → Returns a Proxy object for scale 400
- `theme.red[900]` → Returns a Proxy object for scale 900

**Alpha Chaining** (nested brackets):

- `theme.slate[400][30]` → `#4a50544D` (slate 400 with 30% opacity)
- `theme.red[900][50]` → `#3f000080` (red 900 with 50% opacity)
- `theme.ash[50][10]` → Light ash with 10% opacity
- `theme.green[600][20]` → Green 600 with 20% opacity

**Important**: JavaScript requires bracket notation for numeric property names.

- ✅ Use `theme.slate[400][30]` for chained access
- ❌ Cannot use `theme.slate.400.30` (syntax error - numbers aren't valid identifiers)

### Special Values

- `theme.transparent` → `#FFFFFF00` (fully transparent)
- `theme.white` → `#D4D4D4` (same as ash[500])
- `theme.black` → `#D4D4D4` (same as ash[500])

### Scale Selection Guide

- **50-200**: Very light backgrounds, subtle highlights, hover states
- **300-400**: Light backgrounds, borders, hover states, UI elements
- **500**: Base color (use for primary elements)
- **600-700**: Darker backgrounds, borders, inactive states
- **800-900**: Very dark backgrounds, strong contrast, shadows
- **950**: Darkest variant (use sparingly)

### Common Patterns

**Editor backgrounds and borders:**

```javascript
"editor.background": theme.slate,              // Base slate
"editorWidget.background": theme.slate[600],    // Darker slate
"editorGroup.emptyBackground": theme.slate,    // Base slate
```

**Highlights and selections:**

```javascript
"editor.selectionBackground": theme.ash[50][20],      // Light ash, 20% opacity
"editor.hoverHighlightBackground": theme.ash[50][10], // Light ash, 10% opacity
"editor.findMatchBackground": theme.ash[500][50],      // Base ash, 50% opacity
```

**Diff editor colors:**

```javascript
"diffEditor.insertedTextBackground": theme.green[600][20], // Green 600, 20% opacity
"diffEditor.removedTextBackground": theme.red[400][10],     // Red 400, 10% opacity
```

**Borders:**

```javascript
"editorGroup.border": theme.ash[800],           // Dark ash border
"tab.border": theme.transparent,                // No border
"panel.border": theme.slate[500],               // Base slate border
```

## OKLCH Color Space

The system uses **OKLCH** (Oklab Lightness, Chroma, Hue) for color generation:

- **L (Lightness)**: 0-1, perceptually uniform brightness
- **C (Chroma)**: 0-0.4, color saturation/vividness
- **H (Hue)**: 0-360°, color position on color wheel

### Benefits

1. **Perceptual Uniformity**: Equal changes in L/C/H produce equal visual changes
2. **Better Hue Preservation**: Darkening/lightening preserves color identity
3. **Future-Proof**: Supports P3 and REC.2020 color gamuts
4. **Accessibility**: Predictable contrast ratios

### References

- [OKLCH Color Space](https://bottosson.github.io/posts/oklab/)
- [Tailwind CSS Colors](https://tailwindcss.com/docs/colors)
- [OKLCH Color Picker](https://oklch.org/)

## Theme Structure

### Color Files

Colors are organized into logical sections in `src/colors/`:

- `baseColors.js` - Base UI colors (focusBorder, foreground, etc.)
- `editorColors.js` - Editor-specific colors
- `editorGroupsAndTabs.js` - Tab and editor group colors
- `editorWidgetColors.js` - Widget colors (suggestions, hovers, etc.)
- `diffEditorColors.js` - Diff editor colors
- `sideBar.js` - Sidebar colors
- `panelColors.js` - Panel colors
- `statusBarColors.js` - Status bar colors
- `listsAndTrees.js` - List and tree view colors
- `chatColors.js` - Chat panel colors
- `inlineChatColors.js` - Inline chat colors
- And many more...

### Token Colors

The theme includes two types of syntax highlighting:

1. **TextMate Token Colors** (`src/tokenColors/`) - Pattern-based syntax highlighting
2. **Semantic Token Colors** (`src/semanticTokenColors.js`) - Language-aware highlighting

Semantic highlighting takes precedence over TextMate scopes when available.

### Main Theme File

`src/index.js` combines all color files and generates the final theme JSON:

- Merges all color sections
- Handles Proxy object serialization
- Generates `themes/gatito-next-theme.json`

## Color Generation

All colors are generated mathematically using:

1. **OKLCH Conversion**: Base colors converted to OKLCH
2. **Lightness Scaling**: Perceptually uniform lightness adjustments
3. **Chroma Preservation**: Hue and saturation preserved during scaling
4. **Alpha Generation**: Systematic alpha channel addition

### Generation Process

```javascript
// 1. Convert base color to OKLCH
const baseOklch = rgbToOklch(r, g, b);

// 2. Generate scale by adjusting lightness
const scale = {
  50: oklchToRgb(0.98, baseOklch.C, baseOklch.H),
  500: oklchToRgb(baseOklch.L, baseOklch.C, baseOklch.H), // Base
  900: oklchToRgb(0.08, baseOklch.C, baseOklch.H),
  // ... etc
};

// 3. Generate alpha variants
const alphaVariant = withAlpha(scale[900], 0.3); // 30% alpha
```

## Proxy System

The theme uses JavaScript Proxy objects to enable chained color access:

- **Color chains**: `theme.slate[400]` returns a Proxy
- **Alpha chaining**: `theme.slate[400][30]` accesses alpha variant
- **Serialization**: Proxies implement `toJSON()` for proper JSON export

## Benefits Summary

1. ✅ **Consistency**: All variations derive from base colors
2. ✅ **Maintainability**: Change base colors, all variations update automatically
3. ✅ **Mathematical**: No hardcoded hex values (except base colors)
4. ✅ **Color Theory**: OKLCH-based operations preserve perceptual uniformity
5. ✅ **Reduced Complexity**: Systematic naming reduces cognitive load
6. ✅ **Accessibility**: Perceptually uniform scales improve contrast ratios
7. ✅ **Future-Proof**: Supports wider color gamuts (P3, REC.2020)
8. ✅ **Intuitive API**: Chained access patterns are easy to use

## File Structure

```
src/
├── theme.js              # Main theme generator with Proxy system
├── colorUtils.js         # OKLCH conversion and color generation utilities
├── index.js              # Theme builder (combines all colors)
├── colors/               # Color section files
│   ├── index.js         # Exports all color modules
│   ├── baseColors.js
│   ├── editorColors.js
│   ├── editorGroupsAndTabs.js
│   └── ... (many more)
├── tokenColors/         # TextMate token color rules
│   └── index.js
└── semanticTokenColors.js # Semantic token color rules
```

## Building the Theme

Run `npm run build` to generate `themes/gatito-next-theme.json`:

1. Loads all color files from `src/colors/`
2. Processes Proxy objects for serialization
3. Combines token colors and semantic token colors
4. Writes final JSON theme file

## References

- [VS Code Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [OKLCH Color Space](https://bottosson.github.io/posts/oklab/)
- [Tailwind CSS Colors](https://tailwindcss.com/docs/colors)
- [OKLCH Color Picker](https://oklch.org/)
