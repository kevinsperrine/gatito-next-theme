const theme = require("../theme");

// Side Bar
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_side-bar

module.exports = {
  "sideBar.background": theme.slate[600][40],
  "sideBar.foreground": theme.ash,
  "sideBar.border": theme.ash[800],
  "sideBar.dropBackground": theme.slate[700][50],
  "sideBarTitle.foreground": theme.ash,
  "sideBarSectionHeader.background": theme.slate[400],
  "sideBarSectionHeader.foreground": theme.ash,
  "sideBarSectionHeader.border": theme.transparent,
  "sideBarActivityBarTop.border": theme.slate[200],
  "sideBarTitle.background": theme.slate[600][40],
  "sideBarTitle.border": theme.slate[600][40],
  "sideBarStickyScroll.background": theme.slate[700],
  "sideBarStickyScroll.border": theme.ash[800],
  "sideBarStickyScroll.shadow": theme.slate[800],
};
