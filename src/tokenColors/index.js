const theme = require("../theme");

module.exports = [
  {
    name: "Comments",
    scope: "comment, punctuation.definition.comment",
    settings: {
      foreground: theme.slate[200],
      fontStyle: "italic",
    },
  },
  {
    name: "Variable",
    scope: "variable",
    settings: {
      // No foreground specified so variables change color when selected/highlighted
    },
  },
  {
    name: "Keyword, Storage",
    scope: "keyword, storage.type, storage.modifier",
    settings: {
      foreground: theme.magenta,
    },
  },
  {
    name: "Operators",
    scope:
      "keyword.operator, constant.other.color, keyword.other.template, keyword.other.substitution",
    settings: {
      foreground: theme.cyan,
    },
  },
  {
    name: "Punctuation",
    scope:
      "punctuation, punctuation.definition.tag, punctuation.separator.inheritance.php, punctuation.definition.tag.html, punctuation.definition.tag.begin.html, punctuation.definition.tag.end.html, punctuation.section.embedded",
    settings: {
      // No foreground specified so punctuation changes color when selected/highlighted
    },
  },
  {
    name: "Tag",
    scope: "entity.name.tag, meta.tag.sgml, markup.deleted.git_gutter",
    settings: {
      foreground: theme.red,
    },
  },
  {
    name: "Function, Special Method, Block Level",
    scope:
      "entity.name.function, meta.function-call, variable.function, support.function, keyword.other.special-method, meta.block-level",
    settings: {
      foreground: theme.blue,
    },
  },
  {
    name: "Other Variable, String Link",
    scope: "support.other.variable, string.other.link",
    settings: {
      foreground: theme.red[400],
    },
  },
  {
    name: "Number, Constant, Function Argument, Tag Attribute, Embedded",
    scope:
      "constant.numeric, constant.language, support.constant, constant.character, variable.parameter, keyword.other.unit",
    settings: {
      foreground: theme.orange,
    },
  },
  {
    name: "String, Symbols, Inherited Class, Markup Heading",
    scope:
      "string, constant.other.symbol, constant.other.key, entity.other.inherited-class, markup.heading, markup.inserted.git_gutter, meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
    settings: {
      foreground: theme.green,
    },
  },
  {
    name: "Class, Support",
    scope:
      "entity.name.class, entity.name.type.class, support.type, support.class, support.orther.namespace.use.php, meta.use.php, support.other.namespace.php, markup.changed.git_gutter",
    settings: {
      foreground: theme.yellow,
    },
  },
  {
    name: "Sub-methods",
    scope:
      "entity.name.module.js, variable.import.parameter.js, variable.other.class.js",
    settings: {
      foreground: theme.red,
    },
  },
  {
    name: "Language methods",
    scope: "variable.language",
    settings: {
      fontStyle: "italic",
      foreground: theme.red,
    },
  },
  {
    name: "entity.name.method.js",
    scope: "entity.name.method.js",
    settings: {
      foreground: theme.ash[200],
    },
  },
  {
    name: "meta.method.js",
    scope:
      "meta.class-method.js entity.name.function.js, variable.function.constructor",
    settings: {
      foreground: theme.ash[200],
    },
  },
  {
    name: "Attributes",
    scope: "entity.other.attribute-name",
    settings: {
      foreground: theme.magenta,
    },
  },
  {
    name: "Inserted",
    scope: "markup.inserted",
    settings: {
      foreground: theme.green,
    },
  },
  {
    name: "Deleted",
    scope: "markup.deleted",
    settings: {
      foreground: theme.red,
    },
  },
  {
    name: "Changed",
    scope: "markup.changed",
    settings: {
      foreground: theme.magenta,
    },
  },
  {
    name: "Regular Expressions",
    scope: "string.regexp",
    settings: {
      foreground: theme.cyan,
    },
  },
  {
    name: "Escape Characters",
    scope: "constant.character.escape",
    settings: {
      foreground: theme.cyan,
    },
  },
  {
    name: "URL",
    scope: "*url*, *link*, *uri*",
    settings: {
      fontStyle: "underline",
    },
  },
  {
    name: "Search Results Nums",
    scope: "constant.numeric.line-number.find-in-files - match",
    settings: {
      foreground: theme.orange[600],
    },
  },
  {
    name: "Search Results Lines",
    scope: "entity.name.filename.find-in-files",
    settings: {
      foreground: theme.green,
    },
  },
  {
    name: "Decorators",
    scope:
      "tag.decorator.js entity.name.tag.js, tag.decorator.js punctuation.definition.tag.js",
    settings: {
      fontStyle: "italic",
      foreground: theme.blue,
    },
  },
  {
    name: "ES7 Bind Operator",
    scope: "source.js constant.other.object.key.js string.unquoted.label.js",
    settings: {
      fontStyle: "italic",
      foreground: theme.red,
    },
  },
  {
    scope: "token.info-token",
    settings: {
      foreground: theme.blue,
    },
  },
  {
    scope: "token.warn-token",
    settings: {
      foreground: theme.yellow,
    },
  },
  {
    scope: "token.error-token",
    settings: {
      foreground: theme.red,
    },
  },
  {
    scope: "token.debug-token",
    settings: {
      foreground: theme.magenta[400],
    },
  },
  {
    scope: "source.js entity.other.attribute-name.js",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    scope: "text.html.basic entity.other.attribute-name.html",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "Entity Name Type",
    scope: "entity.name.type",
    settings: {
      foreground: theme.yellow,
    },
  },
  {
    name: "Entity Name Namespace",
    scope: "entity.name.namespace",
    settings: {
      foreground: theme.ash[700],
    },
  },
  {
    name: "Support Type",
    scope: "support.type",
    settings: {
      foreground: theme.yellow,
    },
  },
  {
    name: "Support Class",
    scope: "support.class",
    settings: {
      foreground: theme.yellow,
    },
  },
  {
    name: "Support Function",
    scope: "support.function",
    settings: {
      foreground: theme.blue,
    },
  },
  {
    name: "Support Constant",
    scope: "support.constant",
    settings: {
      foreground: theme.orange,
    },
  },
  {
    name: "Entity Name Function Member",
    scope: "entity.name.function.member",
    settings: {
      foreground: theme.blue,
    },
  },
  {
    name: "Variable Other Constant",
    scope: "variable.other.constant",
    settings: {
      foreground: theme.orange,
    },
  },
  {
    name: "Variable Other Property",
    scope: "variable.other.property",
    settings: {
      foreground: theme.ash,
    },
  },
  {
    name: "Variable Other Enummember",
    scope: "variable.other.enummember",
    settings: {
      foreground: theme.orange,
    },
  },
  {
    name: "Variable Other Event",
    scope: "variable.other.event",
    settings: {
      foreground: theme.cyan,
    },
  },
  {
    name: "Storage Type Struct",
    scope: "storage.type.struct",
    settings: {
      foreground: theme.yellow,
    },
  },
  {
    name: "Entity Name Type Interface",
    scope: "entity.name.type.interface",
    settings: {
      foreground: theme.yellow,
    },
  },
  {
    name: "Entity Name Type Enum",
    scope: "entity.name.type.enum",
    settings: {
      foreground: theme.yellow,
    },
  },
  {
    name: "Entity Name Function Preprocessor",
    scope: "entity.name.function.preprocessor",
    settings: {
      foreground: theme.blue,
    },
  },
];
