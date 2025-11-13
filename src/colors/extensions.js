const theme = require("../theme");

// Extensions
// https://code.visualstudio.com/api/references/theme-color#extensions-colors

module.exports = {
  "extensionButton.prominentForeground": theme.ash,
  "extensionButton.prominentBackground": theme.red[700],
  "extensionButton.prominentHoverBackground": theme.red[700],
  "extensionButton.background": theme.slate[400],
  "extensionButton.foreground": theme.ash,
  "extensionButton.hoverBackground": theme.slate[200],
  "extensionButton.separator": theme.slate[200],
  "extensionBadge.remoteBackground": theme.blue,
  "extensionBadge.remoteForeground": theme.slate,
  "extensionIcon.starForeground": theme.yellow,
  "extensionIcon.verifiedForeground": theme.green,
  "extensionIcon.preReleaseForeground": theme.orange,
  "extensionIcon.sponsorForeground": theme.magenta,
  "extensionIcon.privateForeground": theme.ash[700],
  "mcpIcon.starForeground": theme.yellow,
};
