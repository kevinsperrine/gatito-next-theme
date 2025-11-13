const theme = require("../theme");

// Editor Widget Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors

module.exports = {
  "editorWidget.foreground": theme.ash,
  "editorWidget.background": theme.slate[600],
  "editorWidget.border": theme.slate[700],
  "editorWidget.resizeBorder": theme.ash[700],
  "editorSuggestWidget.background": theme.slate[600],
  "editorSuggestWidget.border": theme.slate[700],
  "editorSuggestWidget.foreground": theme.ash,
  "editorSuggestWidget.highlightForeground": theme.ash,
  "editorSuggestWidget.selectedBackground": theme.slate[600],
  "editorHoverWidget.foreground": theme.ash,
  "editorHoverWidget.background": theme.slate[600],
  "editorHoverWidget.border": theme.slate[700],
  "editorHoverWidget.statusBarBackground": theme.slate,

  "debugExceptionWidget.background": theme.slate[400],
  "debugExceptionWidget.border": theme.slate[700],

  "editorSuggestWidget.focusHighlightForeground": theme.ash,
  "editorSuggestWidget.selectedForeground": theme.ash,
  "editorSuggestWidget.selectedIconForeground": theme.ash,
  "editorSuggestWidgetStatus.foreground": theme.ash[700],
  "editorHoverWidget.highlightForeground": theme.blue,
  "editorGhostText.border": theme.slate[700],
  "editorGhostText.background": theme.slate[600],
  "editorGhostText.foreground": theme.ash[700],
  "editorStickyScroll.background": theme.slate[500],
  "editorStickyScroll.border": theme.slate[600],
  "editorStickyScroll.shadow": theme.slate[600],
  "editorStickyScrollGutter.background": theme.slate[500],
  "editorStickyScrollHover.background": theme.slate[500],
  "editorMarkerNavigation.background": theme.slate[600],
  "editorMarkerNavigationError.background": theme.red,
  "editorMarkerNavigationWarning.background": theme.yellow,
  "editorMarkerNavigationInfo.background": theme.blue,
  "editorMarkerNavigationError.headerBackground": theme.red,
  "editorMarkerNavigationWarning.headerBackground": theme.yellow,
  "editorMarkerNavigationInfo.headerBackground": theme.blue,
};
