import plugin from "tailwindcss/plugin";
import { createThemes } from "tw-colors";
import { semanticColors } from "./colors";

export { createThemes, semanticColors };

export const jamsrui = () => [
  plugin(({ addBase, addUtilities, matchUtilities, addComponents }) => {
    addComponents({
      ".gap-responsive": {
        "@apply gap-1 md:gap-2 lg:gap-4": "",
      },
    });
    addUtilities({
      ".tap-highlight-color": {
        "-webkit-tap-highlight-color": "transparent",
      },
      ".hide-scrollbar": {
        "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
        "scrollbar-width": "none" /* Firefox */,
      },
      ".hide-scrollbar::-webkit-scrollbar ": {
        display: "none" /* Safari and Chrome */,
      },
    });
  }),
  createThemes(semanticColors, {
    strict: true,
    produceCssVariable(colorName) {
      return `--ui-${colorName}`;
    },
  }),
];
