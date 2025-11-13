/**
 * Color utility functions for generating systematic color variations
 * Based on OKLCH color space (like Tailwind v4) for perceptual uniformity
 * 
 * References:
 * - https://bottosson.github.io/posts/oklab/
 * - https://tailwindcss.com/docs/colors
 */

/**
 * Convert hex to RGB
 */
function hexToRgb(hex) {
  if (hex.length === 4) {
    const r = parseInt(hex[1], 16);
    const g = parseInt(hex[2], 16);
    const b = parseInt(hex[3], 16);
    return {
      r: (r << 4) | r,
      g: (g << 4) | g,
      b: (b << 4) | b,
    };
  }
  
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Convert RGB to hex
 */
function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map((x) => Math.round(x).toString(16).padStart(2, "0")).join("");
}

/**
 * Convert linear RGB to Oklab
 * Based on Björn Ottosson's Oklab color space
 * https://bottosson.github.io/posts/oklab/
 */
function linearRgbToOklab(r, g, b) {
  const lr = r <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  const lg = g <= 0.04045 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  const lb = b <= 0.04045 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  const l = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
  const m = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
  const s = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  return {
    L: 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_,
    a: 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
    b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_,
  };
}

/**
 * Convert Oklab to linear RGB
 */
function oklabToLinearRgb(L, a, b) {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;

  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;

  return {
    r: +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    g: -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    b: -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
  };
}

/**
 * Convert linear RGB to sRGB (0-255)
 */
function linearRgbToSrgb(r, g, b) {
  const toSrgb = (c) => {
    if (c <= 0.0031308) {
      return 12.92 * c;
    }
    return 1.055 * Math.pow(c, 1.0 / 2.4) - 0.055;
  };

  return {
    r: Math.max(0, Math.min(1, toSrgb(r))),
    g: Math.max(0, Math.min(1, toSrgb(g))),
    b: Math.max(0, Math.min(1, toSrgb(b))),
  };
}

/**
 * Convert RGB to OKLCH
 * @param {number} r - Red (0-255)
 * @param {number} g - Green (0-255)
 * @param {number} b - Blue (0-255)
 * @returns {Object} {L, C, H} where L is 0-1, C is 0-0.4, H is 0-360
 */
function rgbToOklch(r, g, b) {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const lab = linearRgbToOklab(rNorm, gNorm, bNorm);

  const L = lab.L;
  const C = Math.sqrt(lab.a * lab.a + lab.b * lab.b);
  const H = Math.atan2(lab.b, lab.a) * (180 / Math.PI);
  const H_normalized = H < 0 ? H + 360 : H;

  return { L, C, H: H_normalized };
}

/**
 * Convert OKLCH to RGB
 * @param {number} L - Lightness (0-1)
 * @param {number} C - Chroma (0-0.4)
 * @param {number} H - Hue (0-360)
 * @returns {Object} {r, g, b} where values are 0-255
 */
function oklchToRgb(L, C, H) {
  const H_rad = (H * Math.PI) / 180;
  const a = C * Math.cos(H_rad);
  const b = C * Math.sin(H_rad);

  const linearRgb = oklabToLinearRgb(L, a, b);
  const srgb = linearRgbToSrgb(linearRgb.r, linearRgb.g, linearRgb.b);

  return {
    r: Math.round(srgb.r * 255),
    g: Math.round(srgb.g * 255),
    b: Math.round(srgb.b * 255),
  };
}

/**
 * Generate a Tailwind-style color scale from a base color
 * Scale: 50 (lightest), 100, 200, 300, 400, 500 (base), 600, 700, 800, 900, 950 (darkest)
 * 
 * Based on Tailwind's approach: adjust lightness while preserving chroma and hue
 * @param {string} baseColor - Base color in hex format (#RRGGBB)
 * @returns {Object} Object with keys 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
 */
function generateColorScale(baseColor) {
  const rgb = hexToRgb(baseColor);
  if (!rgb) return null;

  const baseOklch = rgbToOklch(rgb.r, rgb.g, rgb.b);
  const baseLightness = baseOklch.L;
  
  const lightnessValues = {
    50: Math.min(0.98, baseLightness + (1 - baseLightness) * 0.6),
    100: Math.min(0.96, baseLightness + (1 - baseLightness) * 0.5),
    200: Math.min(0.92, baseLightness + (1 - baseLightness) * 0.4),
    300: Math.min(0.85, baseLightness + (1 - baseLightness) * 0.3),
    400: Math.min(0.75, baseLightness + (1 - baseLightness) * 0.2),
    500: baseLightness,
    600: Math.max(0.15, baseLightness * 0.75),
    700: Math.max(0.12, baseLightness * 0.60),
    800: Math.max(0.10, baseLightness * 0.45),
    900: Math.max(0.08, baseLightness * 0.30),
    950: Math.max(0.05, baseLightness * 0.20),
  };

  const scale = {};
  
  for (const [step, lightness] of Object.entries(lightnessValues)) {
    // Reduce chroma for very light/dark colors to prevent oversaturation
    let chroma = baseOklch.C;
    if (lightness > 0.9) {
      chroma = baseOklch.C * (1 - (lightness - 0.9) * 2);
    } else if (lightness < 0.3) {
      chroma = baseOklch.C * (0.5 + (lightness / 0.3) * 0.5);
    }

    const rgb = oklchToRgb(lightness, chroma, baseOklch.H);
    scale[step] = rgbToHex(rgb.r, rgb.g, rgb.b);
  }

  return scale;
}

/**
 * Generate alpha variants of a color
 * @param {string} color - Hex color
 * @param {Array<number>} alphas - Array of alpha values (0-1)
 * @returns {Object} Object with keys like "80", "50", "30", etc.
 */
function generateAlphaVariants(color, alphas = [80, 50, 30, 25, 15, 10]) {
  const variants = {};
  alphas.forEach((alpha) => {
    const alphaHex = Math.round(alpha / 100 * 255)
      .toString(16)
      .padStart(2, "0")
      .toUpperCase();
    variants[alpha] = color + alphaHex;
  });
  return variants;
}

/**
 * Blend a color with another color or background
 * @param {string} color - Hex color to blend
 * @param {string} base - Base color to blend with (usually background)
 * @param {number} amount - Blend amount (0-1, where 0 = full base, 1 = full color)
 */
function blend(color, base, amount) {
  const c = hexToRgb(color);
  const b = hexToRgb(base);
  if (!c || !b) return color;

  const r = Math.round(c.r * amount + b.r * (1 - amount));
  const g = Math.round(c.g * amount + b.g * (1 - amount));
  const bl = Math.round(c.b * amount + b.b * (1 - amount));

  return rgbToHex(r, g, bl);
}

/**
 * Generate alpha variants (for use with CSS rgba or hex with alpha)
 * Returns hex with alpha channel (#RRGGBBAA)
 */
function withAlpha(color, alpha) {
  const c = hexToRgb(color);
  if (!c) return color;
  const alphaHex = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0");
  return color + alphaHex.toUpperCase();
}

module.exports = {
  hexToRgb,
  rgbToHex,
  rgbToOklch,
  oklchToRgb,
  generateColorScale,
  generateAlphaVariants,
  blend,
  withAlpha,
};
