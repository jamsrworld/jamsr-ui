import { readableColor } from "color2k";
import { commonColors as common } from "../common";

export const themeColorsLight = {
  background: {
    DEFAULT: "#FFFFFF",
    secondary: "#F2F2F7",
    tertiary: "#E9E9EA"
  },
  foreground: {
    ...common.zinc,
    DEFAULT: "#000000",
    link: "#007AFF",
    secondary: "#3C3C43",
    tertiary: "#fff",
  },
  divider: {
    DEFAULT: "#f5f5f7",
    dark: "#f5f5f7",
  },
  action: {
    hover: "#f5f5f7",
  },
  default: {
    ...common.zinc,
    foreground: readableColor(common.zinc[300]),
    DEFAULT: common.zinc[300],
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
