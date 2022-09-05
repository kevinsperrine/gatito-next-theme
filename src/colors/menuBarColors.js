const theme = require("../theme");

// Menu Bar Colors
// https://code.visualstudio.com/api/references/theme-color#menu-bar-colors

module.exports = {
  "menubar.selectionForeground": theme.foregroundAlpha50,
  "menubar.selectionBackground": theme.foregroundDark,
  "menubar.selectionBorder": theme.backgroundDark,
  "menu.foreground": theme.foreground,
  "menu.background": theme.backgroundDark,
  "menu.selectionForeground": theme.foregroundAlpha50,
  "menu.selectionBackground": theme.backgroundLight,
  "menu.selectionBorder": theme.backgroundLight,
  "menu.separatorBackground": theme.backgroundLight,
  "menu.border": theme.foreground,
};
