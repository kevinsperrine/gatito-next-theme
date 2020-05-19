const theme = require("../theme");

// Merge Conflicts
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_merge-conflicts

module.exports = {
  "merge.currentHeaderBackground": theme.backgroundDark,
  "merge.currentContentBackground": theme.backgroundDark,
  "merge.incomingHeaderBackground": theme.backgroundDark,
  "merge.incomingContentBackground": theme.backgroundDark,
  "merge.border": theme.backgroundSlightLight,
  "merge.commonContentBackground": theme.missing,
  "merge.commonHeaderBackground": theme.missing,

  "editorOverviewRuler.currentContentForeground": "#A94348",
  "editorOverviewRuler.incomingContentForeground": "#A94348",
  "editorOverviewRuler.commonContentForeground": theme.missing,
};
