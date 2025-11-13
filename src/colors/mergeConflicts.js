const theme = require("../theme");

// Merge Conflicts
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_merge-conflicts

module.exports = {
  "merge.currentHeaderBackground": theme.blue[500][50],
  "merge.currentContentBackground": theme.blue[500][30],
  "merge.incomingHeaderBackground": theme.yellow[500][50],
  "merge.incomingContentBackground": theme.yellow[500][30],
  "merge.border": theme.slate[500],
  "merge.commonContentBackground": theme.slate[400][20],
  "merge.commonHeaderBackground": theme.slate[400][30],

  "editorOverviewRuler.currentContentForeground": theme.red[700],
  "editorOverviewRuler.incomingContentForeground": theme.red[700],
  "editorOverviewRuler.commonContentForeground": theme.slate[400],
  "editorOverviewRuler.commentForeground": theme.blue,
  "editorOverviewRuler.commentUnresolvedForeground": theme.yellow,
  "mergeEditor.change.background": theme.blue[500][30],
  "mergeEditor.change.word.background": theme.blue,
  "mergeEditor.conflict.unhandledUnfocused.border": theme.red,
  "mergeEditor.conflict.unhandledFocused.border": theme.red,
  "mergeEditor.conflict.handledUnfocused.border": theme.ash[700],
  "mergeEditor.conflict.handledFocused.border": theme.blue,
  "mergeEditor.conflict.handled.minimapOverViewRuler": theme.green,
  "mergeEditor.conflict.unhandled.minimapOverViewRuler": theme.red,
  "mergeEditor.conflictingLines.background": theme.slate[700],
  "mergeEditor.changeBase.background": theme.ash[700],
  "mergeEditor.changeBase.word.background": theme.ash[700],
  "mergeEditor.conflict.input1.background": theme.red[900][30],
  "mergeEditor.conflict.input2.background": theme.green[950][10],
};
