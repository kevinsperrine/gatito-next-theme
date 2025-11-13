const theme = require("../theme");

// Git Colors
// https://code.visualstudio.com/api/references/theme-color#git-colors

module.exports = {
  "gitDecoration.addedResourceForeground": theme.green,
  "gitDecoration.modifiedResourceForeground": theme.blue,
  "gitDecoration.deletedResourceForeground": theme.red,
  "gitDecoration.renamedResourceForeground": theme.cyan,
  "gitDecoration.stageModifiedResourceForeground": theme.blue,
  "gitDecoration.stageDeletedResourceForeground": theme.red,
  "gitDecoration.untrackedResourceForeground": theme.green,
  "gitDecoration.ignoredResourceForeground": theme.ash[700],
  "gitDecoration.conflictingResourceForeground": theme.red,
  "gitDecoration.submoduleResourceForeground": theme.ash[700],
  "git.blame.editorDecorationBackground": theme.slate,
  "git.blame.editorDecorationForeground": theme.ash[800],
};
