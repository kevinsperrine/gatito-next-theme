const theme = require("../theme");

// Source Control Graph Colors
// https://code.visualstudio.com/api/references/theme-color#source-control-graph-colors

module.exports = {
  "scmGraph.historyItemHoverLabelForeground": theme.ash,
  "scmGraph.foreground1": theme.blue,
  "scmGraph.foreground2": theme.green,
  "scmGraph.foreground3": theme.yellow,
  "scmGraph.foreground4": theme.orange,
  "scmGraph.foreground5": theme.magenta,
  "scmGraph.historyItemHoverAdditionsForeground": theme.green,
  "scmGraph.historyItemHoverDeletionsForeground": theme.red,
  "scmGraph.historyItemRefColor": theme.blue,
  "scmGraph.historyItemRemoteRefColor": theme.cyan,
  "scmGraph.historyItemBaseRefColor": theme.ash[700],
  "scmGraph.historyItemHoverDefaultLabelForeground": theme.ash,
  "scmGraph.historyItemHoverDefaultLabelBackground": theme.slate[400],
  "scm.providerBorder": theme.slate[200],
};

