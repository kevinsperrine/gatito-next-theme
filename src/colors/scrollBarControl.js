const theme = require("../theme");

// Scroll Bar Control
// https://code.visualstudio.com/api/references/theme-color#scrollbar-control

module.exports = {
  "scrollbar.background": theme.transparent,
  "scrollbar.shadow": theme.transparent,
  "scrollbarSlider.activeBackground": theme.slate[400],
  "scrollbarSlider.background": theme.ash[500][10],
  "scrollbarSlider.hoverBackground": theme.ash[500][15],
};
