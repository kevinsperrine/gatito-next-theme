const theme = require("../theme");

// Activity Bar
// https://code.visualstudio.com/api/references/theme-color#activity-bar

module.exports = {
  "activityBar.background": theme.slate,
  "activityBar.dropBorder": theme.slate[400],
  "activityBar.foreground": theme.ash,
  "activityBar.inactiveForeground": theme.ash[700],
  "activityBar.border": theme.slate[400],
  "activityBarBadge.background": theme.blue,
  "activityBarBadge.foreground": theme.slate[700],
  "activityBar.activeBorder": theme.ash,
  "activityBar.activeBackground": theme.slate[400],
  "activityBar.activeFocusBorder": theme.ash,
  "activityBarTop.foreground": theme.ash,
  "activityBarTop.activeBorder": theme.ash,
  "activityBarTop.inactiveForeground": theme.ash[700],
  "activityBarTop.dropBorder": theme.slate[400],
  "activityBarTop.background": theme.slate,
  "activityBarTop.activeBackground": theme.slate[400],
  "activityWarningBadge.foreground": theme.slate,
  "activityWarningBadge.background": theme.yellow,
  "activityErrorBadge.foreground": theme.slate,
  "activityErrorBadge.background": theme.red,
};
