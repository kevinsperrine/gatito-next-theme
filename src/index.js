const fs = require("fs");
const colors = require("./colors");
const tokenColors = require("./tokenColors");
const semanticTokenColors = require("./semanticTokenColors");

const theme = {
  name: "Gatito Next Theme",
  colors: {
    ...colors.actionBarColors,
    ...colors.actionColors,
    ...colors.activityBar,
    ...colors.badge,
    ...colors.bannerColors,
    ...colors.baseColors,
    ...colors.breadcrumbs,
    ...colors.buttonControl,
    ...colors.chartColors,
    ...colors.chatColors,
    ...colors.commandCenterColors,
    ...colors.commentsViewColors,
    ...colors.debug,
    ...colors.debugIcons,
    ...colors.diffEditorColors,
    ...colors.dropdownControl,
    ...colors.editorColors,
    ...colors.editorGroupsAndTabs,
    ...colors.editorWidgetColors,
    ...colors.extensions,
    ...colors.gaugeColors,
    ...colors.gitColors,
    ...colors.inlineChatColors,
    ...require("./colors/extensions/gitLensColors"),
    ...colors.inputControl,
    ...colors.integratedTerminalColors,
    ...colors.keybindingLabelColors,
    ...colors.keyboardShortcutTableColors,
    ...colors.listsAndTrees,
    ...colors.markdownColors,
    ...colors.menuBarColors,
    ...colors.mergeConflicts,
    ...colors.minimap,
    ...colors.notebookColors,
    ...colors.notificationDialogColors,
    ...colors.panelChatColors,
    ...colors.panelColors,
    ...colors.peekViewColors,
    ...colors.portsColors,
    ...colors.profiles,
    ...colors.progressBar,
    ...colors.quickPicker,
    ...colors.scrollBarControl,
    ...colors.settingsEditor,
    ...colors.sideBar,
    ...colors.simpleFindWidgetColors,
    ...colors.snippets,
    ...colors.sourceControlGraphColors,
    ...colors.statusBarColors,
    ...colors.symbolIconsColors,
    ...colors.testingColors,
    ...colors.textColors,
    ...colors.titleBarColors,
    ...colors.welcomePage,
    ...colors.windowBorder,
  },
  tokenColors,
  semanticTokenColors,
};

/**
 * Handle Proxy objects in theme colors by calling toJSON if available
 * This ensures theme color accessors (e.g., theme.ash) serialize as strings, not objects
 */
function handleProxyObjects(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return obj;
  }

  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (
      typeof value === "object" &&
      value !== null &&
      typeof value.toJSON === "function"
    ) {
      result[key] = value.toJSON();
      continue;
    }

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      result[key] = handleProxyObjects(value);
    } else {
      result[key] = value;
    }
  }

  return result;
}

const cleanedTheme = {
  ...theme,
  colors: handleProxyObjects(theme.colors),
  tokenColors: theme.tokenColors
    ? theme.tokenColors.map((token) => ({
        ...token,
        settings: handleProxyObjects(token.settings),
      }))
    : [],
  semanticTokenColors: handleProxyObjects(theme.semanticTokenColors),
};

fs.writeFile(
  "themes/gatito-next-theme.json",
  JSON.stringify(cleanedTheme, null, 2),
  (error) => {
    const log = error
      ? {
          method: "error",
          message: error,
        }
      : {
          method: "log",
          message: "Theme created :-)",
        };

    console[log.method](log.message);
  }
);
