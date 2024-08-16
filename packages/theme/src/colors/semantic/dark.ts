import { readableColor } from "color2k";
import { swapColorValues } from "../../utils";
import { commonColors as common } from "../common";
import { themeColorsLight } from "./light";

export const themeColorsDark: typeof themeColorsLight = {
  background: {
    DEFAULT: "#000",
    secondary: "#141419",
    tertiary: "#36363f",
  },
  foreground: {
    ...common.zinc,
    DEFAULT: "#eaebec",
    link: "#0B84FF",
    secondary: "#9295a5",
    tertiary: "#F8F8FC",
  },
  divider: {
    DEFAULT: "#38383A",
    dark: "#98989B",
  },
  action: {
    hover: common.zinc[800],
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
