import { readableColor } from "color2k";
import { swapColorValues } from "../../utils";
import { commonColors as common } from "../common";
import { type ThemeColors } from "../../types";

export const themeColorsDark: ThemeColors = {
  background: {
    DEFAULT: "#000",
    secondary: "#030303",
    tertiary: "#010101",
    inverse: "#ffffff",
  },
  foreground: {
    DEFAULT: "#eaebec",
    link: "#0B84FF",
    secondary: "#9295a5",
    tertiary: "#8A8A8E",
    inverse: "#000000",
    ...swapColorValues(common.zinc),
  },
  divider: {
    light: "#070809",
    DEFAULT: "#25292d",
    dark: "#353b41",
  },
  focus: {
    DEFAULT: common.blue[500],
  },
  overlay: {
    DEFAULT: "#000000",
  },
  content1: {
    DEFAULT: common.zinc[900],
    foreground: common.zinc[50],
  },
  content2: {
    DEFAULT: common.zinc[800],
    foreground: common.zinc[100],
  },
  content3: {
    DEFAULT: common.zinc[700],
    foreground: common.zinc[200],
  },
  content4: {
    DEFAULT: common.zinc[600],
    foreground: common.zinc[300],
  },
  default: {
    ...swapColorValues(common.zinc),
    foreground: readableColor(common.zinc[700]),
    DEFAULT: common.zinc[700],
  },
  primary: {
    ...swapColorValues(common.blue),
    foreground: readableColor(common.blue[500]),
    DEFAULT: common.blue[500],
  },
  secondary: {
    ...swapColorValues(common.purple),
    foreground: readableColor(common.purple[400]),
    DEFAULT: common.purple[400],
  },
  success: {
    ...swapColorValues(common.green),
    foreground: readableColor(common.green[500]),
    DEFAULT: common.green[500],
  },
  warning: {
    ...swapColorValues(common.yellow),
    foreground: readableColor(common.yellow[500]),
    DEFAULT: common.yellow[500],
  },
  danger: {
    ...swapColorValues(common.red),
    foreground: common.white,
    DEFAULT: common.red[500],
  },
};
