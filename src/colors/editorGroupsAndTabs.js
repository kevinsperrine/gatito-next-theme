const theme = require("../theme");

// Editor Groups & Tabs
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-groups-tabs

module.exports = {
  "editorGroup.border": theme.backgroundLight,
  "editorGroup.dropBackground": theme.backgroundLight,
  "editorGroup.emptyBackground": theme.background,
  "editorGroup.focusedEmptyBorder": "#f00",
  "editorGroupHeader.noTabsBackground": theme.backgroundDark,
  "editorGroupHeader.tabsBackground": theme.backgroundDark,
  "editorGroupHeader.tabsBorder": theme.backgroundLight,
  "editorPane.background": "#f00",
  "tab.activeBackground": theme.background,
  "tab.activeBorder": theme.background,
  "tab.activeBorderTop": theme.white,
  "tab.activeForeground": theme.foreground,
  "tab.activeModifiedBorder": theme.blue,
  "tab.border": theme.backgroundLight,
  "tab.hoverBackground": theme.background,
  "tab.hoverBorder": "#f00",
  "tab.inactiveBackground": theme.backgroundDark,
  "tab.inactiveForeground": theme.foregroundDark,
  "tab.inactiveModifiedBorder": theme.blue,
  "tab.unfocusedActiveBackground": theme.backgroundDark,
  "tab.unfocusedActiveBorder": theme.transparent,
  "tab.unfocusedActiveBorderTop": theme.foregroundDark,
  "tab.unfocusedActiveForeground": theme.foregroundDark,
  "tab.unfocusedActiveModifiedBorder": "#f00",
  "tab.unfocusedHoverBackground": theme.background,
  "tab.unfocusedHoverBorder": "#f00",
  "tab.unfocusedInactiveForeground": theme.foregroundAlpha50,
  "tab.unfocusedInactiveBackground": theme.backgroundDark,
  "tab.unfocusedInactiveModifiedBorder": "#f00",
};
