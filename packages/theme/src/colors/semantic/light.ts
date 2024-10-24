import { readableColor } from "color2k";
import { commonColors as common } from "../common";
import { ThemeColors } from "../types";

export const themeColorsLight: ThemeColors = {
  background: {
    DEFAULT: "#ffffff",
    secondary: "#fafafa",
    tertiary: "#f4f5f7",
  },
  foreground: {
    DEFAULT: "#1d1d1f",
    link: "#0066cc",
    secondary: "#6e6e73",
    tertiary: "#86868B",
    ...common.zinc,
  },
  divider: {
    light: "#c9c8c9",
    DEFAULT: "#bebdbe",
    dark: "#b4b2b4",
  },
  focus: {
    DEFAULT: common.blue[500],
  },
  overlay: {
    DEFAULT: "#000000",
  },
  content1: {
    DEFAULT: "#FFFFFF",
    foreground: "#11181C",
  },
  content2: {
    DEFAULT: common.zinc[100],
    foreground: common.zinc[800],
  },
  content3: {
    DEFAULT: common.zinc[200],
    foreground: common.zinc[700],
  },
  content4: {
    DEFAULT: common.zinc[300],
    foreground: common.zinc[600],
  },
  default: {
    ...common.zinc,
    foreground: readableColor(common.zinc[300]),
    DEFAULT: common.zinc[200],
  },
  primary: {
    ...common.blue,
    foreground: readableColor(common.blue[500]),
    DEFAULT: common.blue[500],
  },
  secondary: {
    ...common.purple,
    foreground: readableColor(common.purple[500]),
    DEFAULT: common.purple[500],
  },
  success: {
    ...common.green,
    foreground: readableColor(common.green[500]),
    DEFAULT: common.green[500],
  },
  warning: {
    ...common.yellow,
    foreground: readableColor(common.yellow[500]),
    DEFAULT: common.yellow[500],
  },
  danger: {
    ...common.red,
    foreground: common.white,
    DEFAULT: common.red[500],
  },
};
