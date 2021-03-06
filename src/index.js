const fs = require("fs");
const colors = require("./colors");
const tokenColors = require("./tokenColors");

const theme = {
  name: "Gatito Next Theme",
  colors: {
    ...colors.baseColors,
    ...colors.textColors,
    ...colors.buttonControl,
    ...colors.dropdownControl,
    ...colors.inputControl,
    ...colors.scrollBarControl,
    ...colors.badge,
    ...colors.progressBar,
    ...colors.listsAndTrees,
    ...colors.activityBar,
    ...colors.sideBar,
    ...colors.editorGroupsAndTabs,
    ...colors.editorColors,
    ...colors.diffEditorColors,
    ...colors.editorWidgetColors,
    ...colors.peekViewColors,
    ...colors.mergeConflicts,
    ...colors.panelColors,
    ...colors.statusBarColors,
    ...colors.titleBarColors,
    ...colors.notificationDialogColors,
    ...colors.extensions,
    ...colors.quickPicker,
    ...colors.integratedTerminalColors,
    ...colors.welcomePage,
    ...colors.gitColors,
    ...colors.settingsEditor,
    ...colors.breadcrumbs,
    ...colors.snippets,
    ...colors.debug,
    ...colors.menuBarColors,
    ...colors.debugIcons,
  },
  tokenColors,
};

fs.writeFile(
  "themes/gatito-next-theme.json",
  JSON.stringify(theme, null, 2),
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
