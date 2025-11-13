const theme = require("../theme");

// Notebook Colors
// https://code.visualstudio.com/api/references/theme-color#notebook-colors

module.exports = {
  "notebook.editorBackground": theme.slate,
  "notebook.cellBorderColor": theme.slate[200],
  "notebook.cellHoverBackground": theme.slate[400],
  "notebook.cellInsertionIndicator": theme.blue,
  "notebook.cellStatusBarItemHoverBackground": theme.slate[400],
  "notebook.cellToolbarSeparator": theme.slate[200],
  "notebook.cellEditorBackground": theme.slate,
  "notebook.focusedCellBackground": theme.slate[700],
  "notebook.focusedCellBorder": theme.blue,
  "notebook.focusedEditorBorder": theme.blue,
  "notebook.inactiveFocusedCellBorder": theme.slate[200],
  "notebook.inactiveSelectedCellBorder": theme.slate[200],
  "notebook.outputContainerBackgroundColor": theme.slate[700],
  "notebook.outputContainerBorderColor": theme.slate[200],
  "notebook.selectedCellBackground": theme.slate[700],
  "notebook.selectedCellBorder": theme.slate[200],
  "notebook.symbolHighlightBackground": theme.slate[400][50],
  "notebookScrollbarSlider.activeBackground": theme.ash[50],
  "notebookScrollbarSlider.background": theme.ash[500][30],
  "notebookScrollbarSlider.hoverBackground": theme.ash[500][40],
  "notebookStatusErrorIcon.foreground": theme.red,
  "notebookStatusRunningIcon.foreground": theme.blue,
  "notebookStatusSuccessIcon.foreground": theme.green,
  "notebookEditorOverviewRuler.runningCellForeground": theme.blue,
};
