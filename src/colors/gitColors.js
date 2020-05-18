const theme = require("../theme");

// Git Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_git-colors

module.exports = {
  "gitDecoration.conflictingResourceForeground": theme.red,
  "gitDecoration.deletedResourceForeground": theme.red,
  "gitDecoration.ignoredResourceForeground": theme.foregroundDark,
  "gitDecoration.modifiedResourceForeground": theme.blue,
  "gitDecoration.untrackedResourceForeground": theme.green,
};
