const theme = require("../theme");

// Editor Groups & Tabs
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-groups-tabs

module.exports = {
  "editorGroup.border": theme.backgroundLight,
  "editorGroup.dropBackground": theme.backgroundLight,
  "editorGroupHeader.noTabsBackground": theme.backgroundDark,
  '"workbench.editor.showTabs": false': theme.missing,
  "editorGroupHeader.tabsBackground": theme.backgroundDark,
  "editorGroupHeader.tabsBorder": theme.backgroundLight,
  "editorGroupHeader.border": theme.background,
  "editorGroup.emptyBackground": theme.background,
  "editorGroup.focusedEmptyBorder": theme.missing,
  "tab.activeBackground": theme.background,
  "tab.unfocusedActiveBackground": theme.backgroundDark,
  "tab.activeForeground": theme.foreground,
  "tab.border": theme.backgroundLight,
  "tab.activeBorder": theme.background,
  "tab.unfocusedActiveBorder": theme.transparent,
  "tab.activeBorderTop": theme.white,
  "tab.unfocusedActiveBorderTop": theme.foregroundDark,
  "tab.inactiveBackground": theme.backgroundDark,
  "tab.unfocusedInactiveBackground": theme.backgroundDark,
  "tab.inactiveForeground": theme.foregroundDark,
  "tab.unfocusedActiveForeground": theme.foregroundDark,
  "tab.unfocusedInactiveForeground": theme.foregroundAlpha50,
  "tab.hoverBackground": theme.background,
  "tab.unfocusedHoverBackground": theme.background,
  "tab.hoverForeground": theme.forground,
  "tab.unfocusedHoverForeground": theme.foreground,
  "tab.hoverBorder": theme.transparent,
  "tab.unfocusedHoverBorder": theme.transparent,
  "tab.activeModifiedBorder": theme.blue,
  "tab.inactiveModifiedBorder": theme.blue,
  "tab.unfocusedActiveModifiedBorder": theme.missing,
  "tab.unfocusedInactiveModifiedBorder": theme.missing,
  "editorPane.background": theme.background,
};
