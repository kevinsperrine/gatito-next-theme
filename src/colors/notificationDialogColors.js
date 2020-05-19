const theme = require("../theme");

// Notification Dialog Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_notification-colors

module.exports = {
  "notificationCenter.border": theme.backgroundSlightLight,
  "notificationCenterHeader.foreground": theme.foreground,
  "notificationCenterHeader.background": theme.backgroundDark,
  "notificationToast.border": theme.backgroundSlightLight,
  "notifications.foreground": theme.foreground,
  "notifications.background": theme.backgroundDark,
  "notifications.border": theme.backgroundSlightLight,
  "notificationLink.foreground": theme.blue,
  "notificationsErrorIcon.foreground": theme.red,
  "notificationsWarningIcon.foreground": theme.yellow,
  "notificationsInfoIcon.foreground": theme.blue,
  "notification.background": theme.background,
  "notification.foreground": theme.foreground,
  "notification.buttonBackground": theme.missing,
  "notification.buttonForeground": theme.missing,
  "notification.buttonHoverBackground": theme.missing,
  "notification.errorBackground": theme.background,
  "notification.errorForeground": theme.red,
  "notification.infoBackground": theme.background,
  "notification.infoForeground": theme.blue,
  "notification.warningBackground": theme.background,
  "notification.warningForeground": theme.yellow,
};
