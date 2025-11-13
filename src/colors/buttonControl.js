const theme = require("../theme");

// Button Control
// https://code.visualstudio.com/api/references/theme-color#button-control

module.exports = {
  "button.background": theme.blue,
  "button.foreground": theme.slate,
  "button.border": theme.transparent,
  "button.separator": theme.slate[200],
  "button.hoverBackground": theme.blue[500][50],
  "button.secondaryForeground": theme.ash,
  "button.secondaryBackground": theme.slate[400],
  "button.secondaryHoverBackground": theme.slate[200],
  "checkbox.background": theme.slate[700],
  "checkbox.foreground": theme.ash,
  "checkbox.disabled.background": theme.slate,
  "checkbox.disabled.foreground": theme.ash[700],
  "checkbox.border": theme.slate[200],
  "checkbox.selectBackground": theme.blue,
  "checkbox.selectBorder": theme.blue,
  "radio.activeForeground": theme.blue,
  "radio.activeBorder": theme.blue,
  "radio.foreground": theme.ash,
  "radio.border": theme.slate[200],
};
