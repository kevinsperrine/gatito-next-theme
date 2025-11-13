const theme = require("../theme");

// Diff Editor Colors
// https://code.visualstudio.com/api/references/theme-color#diff-editor-colors

module.exports = {
  "diffEditor.border": theme.ash[700],
  "diffEditor.diagonalFill": theme.red[500][50],
  "diffEditor.insertedTextBackground": theme.green[600][20],
  "diffEditor.insertedTextBorder": theme.green[600][20],
  "diffEditor.removedTextBackground": theme.red[400][10],
  "diffEditor.removedTextBorder": theme.red[400][10],
  "diffEditor.insertedLineBackground": theme.transparent,
  "diffEditor.removedLineBackground": theme.red[400][10],
  "diffEditorGutter.insertedLineBackground": theme.transparent,
  "diffEditorGutter.removedLineBackground": theme.red[400][10],
  "diffEditorOverview.insertedForeground": theme.green,
  "diffEditorOverview.removedForeground": theme.red,
  "diffEditor.unchangedRegionBackground": theme.slate[700],
  "diffEditor.unchangedRegionForeground": theme.ash[700],
  "diffEditor.unchangedRegionShadow": theme.slate[800],
  "diffEditor.unchangedCodeBackground": theme.slate,
  "diffEditor.move.border": theme.blue,
  "diffEditor.moveActive.border": theme.cyan,
  "multiDiffEditor.headerBackground": theme.slate[700],
  "multiDiffEditor.background": theme.slate,
  "multiDiffEditor.border": theme.slate[200],
};
