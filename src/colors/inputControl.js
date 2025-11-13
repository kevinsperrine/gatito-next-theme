const theme = require("../theme");

// Input Control
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_input-control

module.exports = {
  "input.background": theme.slate,
  "input.border": theme.slate[400],
  "input.foreground": theme.ash,
  "input.placeholderForeground": theme.ash[700],
  "inputOption.activeBackground": theme.ash[700],
  "inputOption.activeBorder": theme.ash[700],
  "inputOption.activeForeground": theme.ash,
  "inputOption.hoverBackground": theme.slate[400],
  "inputValidation.errorBackground": theme.red,
  "inputValidation.errorBorder": theme.red,
  "inputValidation.errorForeground": theme.ash,
  "inputValidation.infoBackground": theme.blue,
  "inputValidation.infoBorder": theme.blue,
  "inputValidation.infoForeground": theme.ash,
  "inputValidation.warningBackground": theme.yellow,
  "inputValidation.warningBorder": theme.yellow,
  "inputValidation.warningForeground": theme.slate,
};
