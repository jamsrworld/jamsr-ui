import { dirname, sep } from "node:path";
import { type Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import { semanticColors } from "./colors";
import { DeepPartial, ThemeColors } from "./colors/types";
import { jamsrUiPlugins } from "./plugin";

export { createThemes, semanticColors };

type Color = "light" | "dark";
// type Color = "light" | "dark" | (string & {});

export type UIThemeConfig = {
  colors?: Partial<Record<Color, DeepPartial<ThemeColors>>>;
};

export const withJamsrUI = (
  twConfig: Config,
  config?: UIThemeConfig,
): Config => {
  try {
    const resolved = require.resolve("@jamsr-ui/react", {
      paths: [...module.paths, process.cwd()],
    });
    const contentPath = dirname(resolved) + sep + "**";

    if (!contentPath) {
      // eslint-disable-next-line no-console
      console.warn(`
  [uploadthing]: Unable to resolve path for @jamsr-ui packages. As a workaround, you can manually add the paths to your content paths: 
      content: [
        // your other content paths
       './node_modules/@jamsr-ui/react/dist**' // <-- add this line
      ]
    `);
    }

    if (Array.isArray(twConfig.content)) {
      twConfig.content.push(contentPath);
    } else {
      twConfig.content.files.push(contentPath);
    }
  } catch {}

  if (!twConfig.plugins) twConfig.plugins = [];
  twConfig.plugins.push(...jamsrUiPlugins(config));
  return twConfig;
};
