const theme = require("../theme");

// Minimap
// https://code.visualstudio.com/api/references/theme-color#minimap

module.exports = {
  "minimap.background": theme.slate,
  "minimap.errorHighlight": theme.red,
  "minimap.warningHighlight": theme.yellow,
  "minimap.selectionHighlight": theme.ash[50][20],
  "minimap.findMatchHighlight": theme.yellow[500][70],
  "minimap.selectionOccurrenceHighlight": theme.ash[50][20],
  "minimapGutter.addedBackground": theme.green,
  "minimapGutter.deletedBackground": theme.red,
  "minimapGutter.modifiedBackground": theme.blue,
  "minimapSlider.activeBackground": theme.ash[500][50],
  "minimapSlider.background": theme.ash[500][30],
  "minimapSlider.hoverBackground": theme.ash[500][40],
  "minimap.foregroundOpacity": theme.ash[500][50], // White with 50% opacity
  "minimap.infoHighlight": theme.blue,
  "minimap.chatEditHighlight": theme.cyan,
  "editorMinimap.inlineChatInserted": theme.green,
};
