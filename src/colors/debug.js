const theme = require("../theme");

// Debug Colors
// https://code.visualstudio.com/api/references/theme-color#debug

module.exports = {
  "debugToolBar.background": theme.slate,
  "debugToolBar.border": theme.slate,
  "editor.stackFrameHighlightBackground": theme.slate,
  "editor.focusedStackFrameHighlightBackground": theme.slate[400],
  "debugView.exceptionLabelForeground": theme.ash,
  "debugView.exceptionLabelBackground": theme.slate,
  "debugView.stateLabelForeground": theme.blue,
  "debugView.stateLabelBackground": theme.slate[700],
  "debugView.valueChangedHighlight": theme.ash[700],
  "debugTokenExpression.name": theme.yellow,
  "debugTokenExpression.value": theme.orange,
  "debugTokenExpression.string": theme.green,
  "debugTokenExpression.boolean": theme.orange,
  "debugTokenExpression.number": theme.orange,
  "debugTokenExpression.error": theme.red,
  "debugTokenExpression.type": theme.blue,
  "editor.inlineValuesForeground": theme.ash,
  "editor.inlineValuesBackground": theme.slate[700],
};
