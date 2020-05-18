const theme = require("../theme");

// Base Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_base-colors

module.exports = {
  "selection.background": theme.yellow,
  "widget.shadow": theme.backgroundDark,
  // "icon.foreground": theme.foregroundDark
  // TODO: he have no fucking clue how it works
  descriptionForeground: theme.foregroundDark,
  errorForeground: theme.red,
  focusBorder: theme.backgroundLight,
  foreground: theme.foreground,
};
