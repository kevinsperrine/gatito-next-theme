const theme = require("../theme");

// Status Bar Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_status-bar-colors

module.exports = {
  "statusBar.background": theme.background,
  "statusBar.foreground": theme.foregroundDark,
  "statusBar.border": theme.backgroundSlightLight,
  "statusBar.debuggingBackground": theme.background,
  "statusBar.debuggingForeground": theme.foreground,
  "statusBar.debuggingBorder": theme.missing,
  "statusBar.noFolderForeground": theme.foregroundDark,
  "statusBar.noFolderBackground": theme.background,
  "statusBar.noFolderBorder": theme.missing,
  "statusBarItem.activeBackground": theme.background,
  "statusBarItem.hoverBackground": theme.background,
  "statusBarItem.prominentForeground": theme.missing,
  "statusBarItem.prominentBackground": theme.background,
  "statusBarItem.prominentHoverBackground": theme.background,
  "statusBarItem.remoteBackground": theme.missing,
  "statusBarItem.remoteForeground": theme.missing,
};
