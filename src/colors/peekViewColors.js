const theme = require("../theme");

// Peek View Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_peek-view-colors

module.exports = {
  "peekView.border": theme.slate[200],
  "peekViewEditor.background": theme.slate[700],
  "peekViewEditorGutter.background": theme.slate[700],
  "peekViewEditor.matchHighlightBackground": theme.ash[500][15],
  "peekViewEditor.matchHighlightBorder": theme.ash[700],
  "peekViewResult.background": theme.slate[700],
  "peekViewResult.fileForeground": theme.ash,
  "peekViewResult.lineForeground": theme.ash,
  "peekViewResult.matchHighlightBackground": theme.ash[500][15],
  "peekViewResult.selectionBackground": theme.slate[200],
  "peekViewResult.selectionForeground": theme.ash,
  "peekViewTitle.background": theme.slate[700],
  "peekViewTitleDescription.foreground": theme.ash[700],
  "peekViewTitleLabel.foreground": theme.ash,
  "peekViewEditorStickyScroll.background": theme.slate[700],
  "peekViewEditorStickyScrollGutter.background": theme.slate[700],
};
