const theme = require("../theme");

// Diff Editor Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_diff-editor-colors

module.exports = {
  "diffEditor.border": theme.foregroundDark,
  "diffEditor.diagonalFill": theme.redAlpha50,
  "diffEditor.insertedTextBackground": "#3D4F3B",
  "diffEditor.insertedTextBorder": "#FFFFFF4D",
  "diffEditor.removedTextBackground": "#5E2629",
  "diffEditor.removedTextBorder": "#FFFFFF4D",
};
