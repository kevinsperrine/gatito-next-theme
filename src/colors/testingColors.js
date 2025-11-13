const theme = require("../theme");

// Testing Colors
// https://code.visualstudio.com/api/references/theme-color#testing-colors

module.exports = {
  "testing.iconErrored": theme.red,
  "testing.iconFailed": theme.red,
  "testing.iconPassed": theme.green,
  "testing.iconQueued": theme.yellow,
  "testing.iconSkipped": theme.ash[700],
  "testing.iconUnset": theme.ash[700],
  "testing.message.error.decorationForeground": theme.red,
  "testing.message.error.lineBackground": theme.red[900][30],
  "testing.message.info.decorationForeground": theme.blue,
  "testing.message.info.lineBackground": theme.blue[500][25],
  "testing.runAction": theme.green,
  "testing.message.hint.decorationForeground": theme.yellow,
  "testing.message.hint.lineBackground": theme.yellow,
  "testing.peekBorder": theme.blue,
  "testing.peekHeaderBackground": theme.slate[700],
  "testing.iconErrored.retired": theme.ash[700],
  "testing.iconFailed.retired": theme.ash[700],
  "testing.iconPassed.retired": theme.ash[700],
  "testing.iconQueued.retired": theme.ash[700],
  "testing.iconUnset.retired": theme.ash[700],
  "testing.iconSkipped.retired": theme.ash[700],
  "testing.message.error.badgeBackground": theme.red,
  "testing.message.error.badgeBorder": theme.red,
  "testing.message.error.badgeForeground": theme.slate,
  "testing.messagePeekBorder": theme.blue,
  "testing.messagePeekHeaderBackground": theme.slate[700],
  "testing.coveredBackground": theme.green[950][30],
  "testing.coveredBorder": theme.green,
  "testing.coveredGutterBackground": theme.green,
  "testing.uncoveredBranchBackground": theme.yellow,
  "testing.uncoveredBackground": theme.red[900][30],
  "testing.uncoveredBorder": theme.red,
  "testing.uncoveredGutterBackground": theme.red,
  "testing.coverCountBadgeBackground": theme.blue,
  "testing.coverCountBadgeForeground": theme.slate,
};

