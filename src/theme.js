const colorUtils = require("./colorUtils");

const base = {
  slate: "#252B2E",
  red: "#E15A60",
  green: "#99C794",
  yellow: "#FAC863",
  blue: "#6699CC",
  magenta: "#C594C5",
  cyan: "#5FB3B3",
  orange: "#F99157",
};

/**
 * Generate Tailwind-style color scale with nested alpha variants
 * @param {string} baseColor - Base color in hex
 * @param {string} name - Color name (e.g., "red", "green")
 * @returns {Object} Object with nested scale structure (e.g., { red: { 900: { 10: "#...", 15: "#..." } } })
 */
function generateColorWithScale(baseColor, name) {
  const scale = colorUtils.generateColorScale(baseColor);
  if (!scale) return {};

  const result = {};

  const darkSteps = ["700", "800", "900", "950"];
  const mediumSteps = ["400", "500", "600"];
  const lightSteps = ["50", "100", "200", "300"];
  const alphaValues = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const allSteps = [...lightSteps, ...mediumSteps, ...darkSteps];

  allSteps.forEach((step) => {
    const alphaObj = {};
    alphaValues.forEach((alpha) => {
      alphaObj[alpha] = colorUtils.withAlpha(scale[step], alpha / 100);
    });
    if (Object.keys(alphaObj).length > 0) {
      result[`${name}${step}`] = alphaObj;
    }
  });

  Object.keys(scale).forEach((step) => {
    result[`${name}${step}_base`] = scale[step];
  });

  return result;
}

/**
 * Generate theme colors using Tailwind-style scales
 */
function generateTheme() {
  const slateScale = generateColorWithScale(base.slate, "slate");
  const originalForeground = "#D4D4D4";
  const ashScale = generateColorWithScale(originalForeground, "ash");

  const nestedTheme = {};
  Object.assign(nestedTheme, base);
  nestedTheme.transparent = "#FFFFFF00";
  nestedTheme.black = ashScale["ash500_base"] || originalForeground;
  nestedTheme.white = ashScale["ash500_base"] || originalForeground;

  const colorNames = [
    "red",
    "green",
    "blue",
    "yellow",
    "cyan",
    "magenta",
    "orange",
    "slate",
    "ash",
  ];
  const colorScales = {
    red: generateColorWithScale(base.red, "red"),
    green: generateColorWithScale(base.green, "green"),
    yellow: generateColorWithScale(base.yellow, "yellow"),
    blue: generateColorWithScale(base.blue, "blue"),
    cyan: generateColorWithScale(base.cyan, "cyan"),
    magenta: generateColorWithScale(base.magenta, "magenta"),
    orange: generateColorWithScale(base.orange, "orange"),
    slate: slateScale,
    ash: ashScale,
  };

  const flatTheme = { ...nestedTheme };

  colorNames.forEach((colorName) => {
    const scale = colorScales[colorName];
    nestedTheme[colorName] = {};

    Object.keys(scale).forEach((key) => {
      if (key.endsWith("_base")) {
        const step = key.replace(`${colorName}`, "").replace("_base", "");
        flatTheme[`${colorName}${step}`] = scale[key];
      } else {
        const step = key.replace(`${colorName}`, "");
        nestedTheme[colorName][step] = scale[key];

        const baseColorForScale =
          colorName === "slate"
            ? base.slate
            : colorName === "ash"
            ? originalForeground
            : base[colorName];
        const fullScale = colorUtils.generateColorScale(baseColorForScale);
        if (fullScale && fullScale[step]) {
          flatTheme[`${colorName}${step}`] = fullScale[step];
        }

        Object.keys(scale[key]).forEach((alpha) => {
          flatTheme[`${colorName}${step}-${alpha}`] = scale[key][alpha];
        });
      }
    });
  });

  /**
   * Create a color scale accessor (e.g., theme.slate.400)
   * Returns a Proxy that handles both the color value and alpha chaining
   */
  function createColorScale(colorName, scale) {
    return new Proxy(
      {},
      {
        get(target, prop) {
          if (typeof prop === "string" && /^\d+$/.test(prop)) {
            const key = `${colorName}${scale}-${prop}`;
            return flatTheme[key] || undefined;
          }

          if (prop === "toJSON") {
            return () => flatTheme[`${colorName}${scale}`] || "";
          }

          if (
            prop === Symbol.toPrimitive ||
            prop === "valueOf" ||
            prop === "toString"
          ) {
            return () => flatTheme[`${colorName}${scale}`] || "";
          }

          return undefined;
        },

        ownKeys() {
          const alphas = ["10", "15", "25", "30", "40", "50", "80"];
          return alphas.filter(
            (alpha) => flatTheme[`${colorName}${scale}-${alpha}`]
          );
        },

        getOwnPropertyDescriptor(target, prop) {
          if (this.ownKeys().includes(prop)) {
            return {
              enumerable: true,
              configurable: true,
              value: this.get(target, prop),
            };
          }
          return undefined;
        },

        has(target, prop) {
          return this.ownKeys().includes(prop);
        },
      }
    );
  }

  /**
   * Create a chained color accessor
   * Allows:
   *   - theme.slate (alias to theme.slate500)
   *   - theme.slate.400 (returns color scale accessor)
   *   - theme.slate.400.30 (returns alpha variant)
   */
  function createColorChain(colorName) {
    return new Proxy(
      {},
      {
        get(target, prop) {
          if (typeof prop === "string" && /^\d+$/.test(prop)) {
            return createColorScale(colorName, prop);
          }

          if (prop === "toJSON") {
            return () => flatTheme[`${colorName}500`] || "";
          }

          if (
            prop === Symbol.toPrimitive ||
            prop === "valueOf" ||
            prop === "toString"
          ) {
            return () => flatTheme[`${colorName}500`] || "";
          }

          return undefined;
        },

        ownKeys() {
          const scales = [
            "50",
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900",
            "950",
          ];
          return scales.filter((scale) => flatTheme[`${colorName}${scale}`]);
        },

        getOwnPropertyDescriptor(target, prop) {
          if (this.ownKeys().includes(prop)) {
            return {
              enumerable: true,
              configurable: true,
              value: this.get(target, prop),
            };
          }
          return undefined;
        },

        has(target, prop) {
          return this.ownKeys().includes(prop);
        },
      }
    );
  }

  const theme = new Proxy(
    {},
    {
      get(target, prop) {
        if (colorNames.includes(prop)) {
          return createColorChain(prop);
        }

        return nestedTheme[prop];
      },

      ownKeys() {
        return Object.keys(nestedTheme);
      },

      getOwnPropertyDescriptor(target, prop) {
        if (
          colorNames.includes(prop) ||
          Object.prototype.hasOwnProperty.call(nestedTheme, prop)
        ) {
          return {
            enumerable: true,
            configurable: true,
            value: this.get(target, prop),
          };
        }
        return undefined;
      },

      has(target, prop) {
        return (
          colorNames.includes(prop) ||
          Object.prototype.hasOwnProperty.call(nestedTheme, prop)
        );
      },
    }
  );

  return theme;
}

module.exports = generateTheme();
