const theme = require("./theme");

// Semantic Token Colors
// https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#theming
// When semantic highlighting is enabled, these rules take precedence over TextMate scopes

module.exports = {
  namespace: {
    foreground: theme.ash[700],
  },
  
  type: {
    foreground: theme.yellow,
  },
  "type.defaultLibrary": {
    foreground: theme.yellow,
  },
  struct: {
    foreground: theme.yellow,
  },
  class: {
    foreground: theme.yellow,
  },
  "class.defaultLibrary": {
    foreground: theme.yellow,
  },
  interface: {
    foreground: theme.yellow,
  },
  enum: {
    foreground: theme.yellow,
  },
  
  function: {
    foreground: theme.blue,
  },
  "function.defaultLibrary": {
    foreground: theme.blue,
  },
  method: {
    foreground: theme.blue,
  },
  macro: {
    foreground: theme.blue,
  },
  
  variable: {
    foreground: theme.ash,
  },
  "variable.readonly": {
    foreground: theme.orange,
  },
  "variable.readonly.defaultLibrary": {
    foreground: theme.orange,
  },
  parameter: {
    foreground: theme.orange,
  },
  property: {
    foreground: theme.ash,
  },
  "property.readonly": {
    foreground: theme.orange,
  },
  enumMember: {
    foreground: theme.orange,
  },
  event: {
    foreground: theme.cyan,
  },
};

