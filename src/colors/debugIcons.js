const theme = require("../theme");

module.exports = {
  "debugIcon.breakpointForeground": theme.red,
  "debugIcon.breakpointDisabledForeground": theme.red[500][50],
  "debugIcon.breakpointUnverifiedForeground": theme.yellow,
  "debugIcon.breakpointCurrentStackframeForeground": theme.red,
  "debugIcon.breakpointStackframeForeground": theme.ash,
  "debugIcon.startForeground": theme.green,
  "debugIcon.pauseForeground": theme.yellow,
  "debugIcon.stopForeground": theme.red,
  "debugIcon.disconnectForeground": theme.red,
  "debugIcon.restartForeground": theme.blue,
  "debugIcon.stepOverForeground": theme.blue,
  "debugIcon.stepIntoForeground": theme.blue,
  "debugIcon.stepOutForeground": theme.blue,
  "debugIcon.continueForeground": theme.green,
  "debugIcon.stepBackForeground": theme.blue,
};
