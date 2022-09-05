const theme = require("../theme");

// Panel Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_panel-colors

module.exports = {
  "panel.background": theme.background,
  "panel.border": theme.backgroundSlightLight,
  "panel.dropBackground": theme.backgroundDark,
  "panelTitle.activeBorder": theme.backgroundSlightLight,
  "panelTitle.activeForeground": theme.foreground,
  "panelTitle.inactiveForeground": theme.foregroundDark,
  "panelInput.border": theme.transparent,
};
