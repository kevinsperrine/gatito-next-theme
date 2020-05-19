const theme = require("../theme");

// Editor Widget Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors

module.exports = {
  "editorWidget.foreground": theme.missing,
  "editorWidget.background": theme.backgroundDark,
  "editorWidget.border": "#30373A",
  "editorWidget.resizeBorder": theme.missing,
  "editorSuggestWidget.background": theme.backgroundDark,
  "editorSuggestWidget.border": "#30373A",
  "editorSuggestWidget.foreground": theme.foreground,
  "editorSuggestWidget.highlightForeground": theme.missing,
  "editorSuggestWidget.selectedBackground": "#30373A",
  "editorHoverWidget.foreground": theme.missing,
  "editorHoverWidget.background": theme.backgroundDark,
  "editorHoverWidget.border": "#30373A",
  "editorHoverWidget.statusBarBackground": theme.missing,

  "debugExceptionWidget.background": theme.backgroundDark,
  "debugExceptionWidget.border": "#30373A",

  "editorMarkerNavigation.background": theme.backgroundDark,
  "editorMarkerNavigationError.background": theme.red,
  "editorMarkerNavigationWarning.background": theme.yellow,
  "editorMarkerNavigationInfo.background": theme.blue,
};
