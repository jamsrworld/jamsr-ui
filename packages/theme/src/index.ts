import { type Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import { commonColors, semanticColors } from "./colors";
import { type DeepPartial, type ThemeColors } from "./colors/types";
import { jamsrUiPlugins } from "./plugin";

export { commonColors, createThemes, semanticColors };

type Color = "light" | "dark";
// type Color = "light" | "dark" | (string & {});

export type UIThemeConfig = {
  colors?: Partial<Record<Color, DeepPartial<ThemeColors>>>;
};

export const withJamsrUI = (
  twConfig: Config,
  config?: UIThemeConfig,
): Config => {
  if (!twConfig.plugins) twConfig.plugins = [];
  twConfig.plugins.push(...jamsrUiPlugins(config));
  return twConfig;
};
