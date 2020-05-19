const theme = require("../theme");

// Peek View Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_peek-view-colors

module.exports = {
  "peekView.border": theme.backgroundSlightLight,
  "peekViewEditor.background": theme.backgroundDark,
  "peekViewEditorGutter.background": theme.backgroundDark,
  "peekViewEditor.matchHighlightBackground": "#FFFFFF1F",
  "peekViewEditor.matchHighlightBorder": theme.foregroundDark,
  "peekViewResult.background": theme.backgroundDark,
  "peekViewResult.fileForeground": theme.foreground,
  "peekViewResult.lineForeground": theme.foreground,
  "peekViewResult.matchHighlightBackground": "#FFFFFF1F",
  "peekViewResult.selectionBackground": theme.backgroundSlightLight,
  "peekViewResult.selectionForeground": theme.foreground,
  "peekViewTitle.background": theme.backgroundDark,
  "peekViewTitleDescription.foreground": theme.foregroundDark,
  "peekViewTitleLabel.foreground": theme.foreground,
};
