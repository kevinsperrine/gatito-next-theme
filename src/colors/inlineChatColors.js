const theme = require("../theme");

// Inline Chat Colors
// https://code.visualstudio.com/api/references/theme-color#inline-chat-colors

module.exports = {
  "inlineChat.background": theme.slate[400],
  "inlineChat.foreground": theme.ash,
  "inlineChat.border": theme.slate[500],
  "inlineChat.shadow": theme.slate[800],
  "inlineChatInput.border": theme.slate[500],
  "inlineChatInput.focusBorder": theme.blue,
  "inlineChatInput.placeholderForeground": theme.ash[700],
  "inlineChatInput.background": theme.slate,
  "inlineChatDiff.inserted": theme.green[600][20],
  "inlineChatDiff.removed": theme.red[400][10],
};
