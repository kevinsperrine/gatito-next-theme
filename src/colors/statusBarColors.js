const theme = require("../theme");

// Status Bar Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_status-bar-colors

module.exports = {
  "statusBar.background": theme.background,
  "statusBar.border": "#30373A",
  "statusBar.debuggingBackground": theme.background,
  "statusBar.debuggingForeground": theme.foreground,
  "statusBar.foreground": theme.foregroundDark,
  "statusBar.noFolderBackground": theme.background,
  "statusBar.noFolderForeground": theme.foregroundDark,
  "statusBarItem.activeBackground": theme.background,
  "statusBarItem.hoverBackground": theme.background,
  "statusBarItem.prominentBackground": theme.background,
  "statusBarItem.prominentHoverBackground": theme.background,
};
