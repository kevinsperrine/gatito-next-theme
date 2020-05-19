const theme = require("../theme");

// Debug Colors
// https://code.visualstudio.com/api/references/theme-color#debug

module.exports = {
    "debugToolBar.background": theme.background,
    "debugToolBar.border": theme.background,
    "editor.stackFrameHighlightBackground": theme.background,
    "editor.focusedStackFrameHighlightBackground": theme.backgroundLight,
    "debugView.exceptionLabelForeground": theme.foreground,
    "debugView.exceptionLabelBackground": theme.background,
    "debugView.stateLabelForeground": theme.blue,
    "debugView.stateLabelBackground": theme.backgroundDark,
    "debugView.valueChangedHighlight": theme.foregroundDark,
    "debugTokenExpression.name": theme.yellow,
    "debugTokenExpression.value": theme.orange,
    "debugTokenExpression.string": theme.green,
    "debugTokenExpression.boolean": theme.orange,
    "debugTokenExpression.number": theme.orange,
    "debugTokenExpression.error": theme.red,
};
