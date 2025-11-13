const theme = require("../theme");

// Base Colors
// https://code.visualstudio.com/api/references/theme-color#base-colors

module.exports = {
  contrastActiveBorder: theme.transparent,
  contrastBorder: theme.slate[500],
  focusBorder: theme.slate,
  foreground: theme.ash,
  disabledForeground: theme.ash[700],
  "widget.border": theme.slate[500],
  "widget.shadow": theme.slate[800],
  "selection.background": theme.yellow,
  descriptionForeground: theme.ash[700],
  errorForeground: theme.red,
  "icon.foreground": theme.ash[700],
  "sash.hoverBorder": theme.slate[400],
};
