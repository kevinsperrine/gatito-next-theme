const theme = require("../theme");

// Input Control
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_input-control

module.exports = {
  "input.background": theme.background,
  "input.border": theme.backgroundLight,
  "input.foreground": theme.foreground,
  "input.placeholderForeground": theme.foregroundDark,
  "inputOption.activeBackground": theme.foregroundDark,
  "inputOption.activeBorder": theme.foregroundDark,
  "inputValidation.errorBackground": theme.red,
  "inputValidation.errorBorder": theme.red,
  "inputValidation.errorForeground": theme.foreground,
  "inputValidation.infoBackground": theme.blue,
  "inputValidation.infoBorder": theme.blue,
  "inputValidation.infoForeground": theme.foreground,
  "inputValidation.warningBackground": theme.yellow,
  "inputValidation.warningBorder": theme.yellow,
  "inputValidation.warningForeground": theme.background,
};
