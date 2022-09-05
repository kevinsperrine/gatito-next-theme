const fs = require("fs");
const colors = require("./colors");
const tokenColors = require("./tokenColors");

const theme = {
  name: "Gatito Next Theme",
  colors: {
    ...colors.activityBar,
    ...colors.badge,
    ...colors.baseColors,
    ...colors.breadcrumbs,
    ...colors.buttonControl,
    ...colors.debug,
    ...colors.debugIcons,
    ...colors.diffEditorColors,
    ...colors.dropdownControl,
    ...colors.editorColors,
    ...colors.editorGroupsAndTabs,
    ...colors.editorWidgetColors,
    ...colors.extensions,
    ...colors.gitColors,
    ...colors.inputControl,
    ...colors.integratedTerminalColors,
    ...colors.listsAndTrees,
    ...colors.menuBarColors,
    ...colors.menuColors,
    ...colors.mergeConflicts,
    ...colors.notificationDialogColors,
    ...colors.panelColors,
    ...colors.peekViewColors,
    ...colors.progressBar,
    ...colors.quickPicker,
    ...colors.scrollBarControl,
    ...colors.settingsEditor,
    ...colors.sideBar,
    ...colors.snippets,
    ...colors.statusBarColors,
    ...colors.textColors,
    ...colors.titleBarColors,
    ...colors.welcomePage,
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
