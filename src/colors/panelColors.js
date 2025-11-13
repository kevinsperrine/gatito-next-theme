const theme = require("../theme");

// Panel Colors
// https://code.visualstudio.com/api/references/theme-color#panel-colors

module.exports = {
  "panel.background": theme.slate,
  "panel.border": theme.slate[500],
  "panel.dropBackground": theme.slate[700][50],
  "panelTitle.activeBorder": theme.slate[500],
  "panelTitle.activeForeground": theme.ash,
  "panelTitle.inactiveForeground": theme.ash[700],
  "panelTitle.border": theme.slate[500],
  "panelTitleBadge.background": theme.blue,
  "panelTitleBadge.foreground": theme.slate,
  "panelInput.border": theme.transparent,
  "panelSection.border": theme.slate[500],
  "panelSection.dropBackground": theme.slate[700][50],
  "panelSectionHeader.background": theme.slate[400],
  "panelSectionHeader.foreground": theme.ash,
  "panelSectionHeader.border": theme.slate[500],
  "panelStickyScroll.background": theme.slate[400],
  "panelStickyScroll.border": theme.slate[500],
  "panelStickyScroll.shadow": theme.slate[800],
  "outputView.background": theme.slate,
  "outputViewStickyScroll.background": theme.slate[400],
};
