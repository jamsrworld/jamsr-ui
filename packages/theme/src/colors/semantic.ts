import { readableColor } from "color2k";
import { commonColors as common } from "./common";
import { type SemanticBaseColors, type ThemeColors } from "./types";

function swapColorValues<T extends object>(colors: T) {
  const swappedColors = {};
  const keys = Object.keys(colors);
  const { length } = keys;

  for (let i = 0; i < length / 2; i++) {
    const key1 = keys[i];
    const key2 = keys[length - 1 - i];

    // @ts-expect-error noError
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    swappedColors[key1] = colors[key2];
    // @ts-expect-error noError
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    swappedColors[key2] = colors[key1];
  }
  if (length % 2 !== 0) {
    const middleKey = keys[Math.floor(length / 2)];
    // @ts-expect-error noError
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    swappedColors[middleKey] = colors[middleKey];
  }

  return swappedColors;
}

const base: SemanticBaseColors = {
  light: {
    background: {
      DEFAULT: "#FFFFFF",
      secondary: "#fff",
      muted: "hsl(240, 8.5%, 23.1%)",
      content1: "#FFFFFF",
      content2: common.zinc[100],
      content3: common.zinc[200],
      content4: common.zinc[300],
    },
    foreground: {
      ...common.zinc,
      DEFAULT: "#000",
      secondary: "hsl(231, 10%, 61%)",
      muted: "#fff",
      content1: "#11181C",
      content2: common.zinc[800],
      content3: common.zinc[700],
      content4: common.zinc[600],
    },
    divider: {
      DEFAULT: "#454545",
      dark: "#454545",
    },
    action: {
      hover: "hsl(240, 20%, 10%)",
    },
  },
  dark: {
    background: {
      DEFAULT: "rgb(0,0,0)",
      secondary: "hsl(240, 11%, 9%)",
      muted: "hsl(240, 8.5%, 23.1%)",
      content1: "#181818",
      content2: common.zinc[800],
      content3: common.zinc[700],
      content4: common.zinc[600],
    },
    foreground: {
      ...common.zinc,
      DEFAULT: "hsl(210, 5.6%, 92.9%)",
      secondary: "hsl(231, 10.1%, 61.2%)",
      muted: "#888",
      content1: "rgb(119,119,119)",
      content2: common.zinc[100],
      content3: common.zinc[200],
      content4: common.zinc[300],
    },
    divider: {
      DEFAULT: "hsla(0, 0%, 100%, 0.2)",
      dark: "hsla(0, 0%, 100%, 0.3)",
    },
    action: {
      hover: common.zinc[800],
    },
  },
};

export const themeColorsLight: ThemeColors = {
  ...base.light,
  default: {
    ...common.zinc,
    foreground: readableColor(common.zinc[300]),
    DEFAULT: common.zinc[300],
  },
  primary: {
    ...common.blue,
    foreground: readableColor(common.blue[500]),
    light: common.blue[400],
    DEFAULT: common.blue[500],
    dark: common.blue[600],
  },
  secondary: {
    ...common.purple,
    foreground: readableColor(common.purple[500]),
    light: common.purple[400],
    DEFAULT: common.purple[500],
    dark: common.purple[600],
  },
  success: {
    ...common.green,
    foreground: readableColor(common.green[500]),
    light: common.green[400],
    DEFAULT: common.green[500],
    dark: common.green[600],
  },
  warning: {
    ...common.yellow,
    foreground: readableColor(common.yellow[500]),
    light: common.yellow[400],
    DEFAULT: common.yellow[500],
    dark: common.yellow[600],
  },
  danger: {
    ...common.red,
    foreground: common.white,
    light: common.red[400],
    DEFAULT: common.red[500],
    dark: common.red[600],
  },
};

export const themeColorsDark: ThemeColors = {
  ...base.dark,
  default: {
    ...swapColorValues(common.zinc),
    foreground: readableColor(common.zinc[700]),
    light: common.zinc[600],
    DEFAULT: common.zinc[700],
    dark: common.zinc[800],
  },
  primary: {
    ...swapColorValues(common.blue),
    foreground: readableColor(common.blue[500]),
    light: common.blue[400],
    DEFAULT: common.blue[500],
    dark: common.blue[600],
  },
  secondary: {
    ...swapColorValues(common.purple),
    foreground: readableColor(common.purple[400]),
    light: common.purple[300],
    DEFAULT: common.purple[400],
    dark: common.purple[500],
  },
  success: {
    ...swapColorValues(common.green),
    foreground: readableColor(common.green[500]),
    light: common.green[400],
    DEFAULT: common.green[500],
    dark: common.green[600],
  },
  warning: {
    ...swapColorValues(common.yellow),
    foreground: readableColor(common.yellow[500]),
    light: common.yellow[400],
    DEFAULT: common.yellow[500],
    dark: common.yellow[600],
  },
  danger: {
    ...swapColorValues(common.red),
    foreground: common.white,
    light: common.red[400],
    DEFAULT: common.red[500],
    dark: common.red[600],
  },
};

export const semanticColors = {
  light: themeColorsLight,
  dark: themeColorsDark,
};
