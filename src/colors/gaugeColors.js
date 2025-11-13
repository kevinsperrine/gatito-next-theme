const theme = require("../theme");

// Gauge Colors
// https://code.visualstudio.com/api/references/theme-color#gauge-colors

module.exports = {
  "gauge.background": theme.slate[700],
  "gauge.foreground": theme.blue,
  "gauge.border": theme.slate[200],
  "gauge.warningBackground": theme.yellow,
  "gauge.warningForeground": theme.slate,
  "gauge.errorBackground": theme.red,
  "gauge.errorForeground": theme.slate,
};
