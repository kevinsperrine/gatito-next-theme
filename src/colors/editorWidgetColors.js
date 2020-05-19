const theme = require("../theme");

// Editor Widget Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors

module.exports = {
  "editorWidget.foreground": theme.foreground,
  "editorWidget.background": theme.backgroundDark,
  "editorWidget.border": theme.backgroundSlightLight,
  "editorWidget.resizeBorder": theme.foregroundDark,
  "editorSuggestWidget.background": theme.backgroundDark,
  "editorSuggestWidget.border": theme.backgroundSlightLight,
  "editorSuggestWidget.foreground": theme.foreground,
  "editorSuggestWidget.highlightForeground": theme.foreground,
  "editorSuggestWidget.selectedBackground": theme.backgroundSlightLight,
  "editorHoverWidget.foreground": theme.foreground,
  "editorHoverWidget.background": theme.backgroundDark,
  "editorHoverWidget.border": theme.backgroundSlightLight,
  "editorHoverWidget.statusBarBackground": theme.missing,

  "debugExceptionWidget.background": theme.backgroundDark,
  "debugExceptionWidget.border": theme.backgroundSlightLight,

  "editorMarkerNavigation.background": theme.backgroundDark,
  "editorMarkerNavigationError.background": theme.red,
  "editorMarkerNavigationWarning.background": theme.yellow,
  "editorMarkerNavigationInfo.background": theme.blue,
};
