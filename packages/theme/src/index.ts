import deepMerge from "deepmerge";
import plugin from "tailwindcss/plugin";
import { createThemes } from "tw-colors";
import { semanticColors } from "./colors";
import { DeepPartial, SemanticBaseColors, ThemeColors } from "./colors/types";

export { createThemes, semanticColors };

type Color = "light" | "dark";
// type Color = "light" | "dark" | (string & {});

export type UIThemeConfig = {
  colors?: Partial<Record<Color, DeepPartial<ThemeColors>>>;
};

export const jamsrui = (config?: UIThemeConfig) => {
  const finalColors = deepMerge(
    semanticColors,
    config?.colors ?? {},
  ) as SemanticBaseColors;

  return [
    plugin(
      ({ addUtilities, addComponents }) => {
        addComponents({
          ".gap-responsive": {
            "@apply gap-1 md:gap-2 lg:gap-4": "",
          },
        });
        addUtilities({
          ".tap-highlight-transparent": {
            "-webkit-tap-highlight-color": "transparent",
          },
          ".scrollbar-hide": {
            "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
            "scrollbar-width": "none" /* Firefox */,
          },
          ".scrollbar-hide::-webkit-scrollbar ": {
            display: "none" /* Safari and Chrome */,
          },
        });
      },
      {
        theme: {
          extend: {
            borderRadius: {
              inherit: "inherit",
            },
            zIndex: {
              "1": "1",
              "-1": "-1",
              backdrop: "98",
              popover: "99",
              dialog: "99",
              header: "50",
              drawer: "60",
            },
            boxShadow: {
              card: "inset 0 0 90px rgba(255,255,255,.15)",
            },
            fontSize: {
              "size-inherit": "inherit",
              xs: "var(--fs-xs)",
              sm: "var(--fs-sm)",
              base: "var(--fs-base)",
              md: "var(--fs-md)",
              lg: "var(--fs-lg)",
              xl: "var(--fs-xl)",
              "2xl": "var(--fs-2xl)",
              "3xl": "var(--fs-3xl)",
              "4xl": "var(--fs-4xl)",
              "5xl": "var(--fs-5xl)",
            },
            animation: {
              progress: "progress 1s infinite linear",
              ripple: "ripple 1s linear",
            },
            keyframes: {
              progress: {
                "0%": {
                  transform: "translateX(-50%) scaleX(0.2)",
                },
                "100%": {
                  transform: "translateX(100%) scaleX(1)",
                },
              },
              ripple: {
                "0%": {
                  transform: "scale(0)",
                },
                "100%": {
                  transform: "scale(4)",
                  opacify: "0",
                },
              },
              shimmer: {
                "100%": {
                  transform: "translateX(100%)",
                },
              },
            },
            opacity: {
              disabled: "50%",
            },
          },
        },
        plugins: [],
      },
    ),
    createThemes(
      ({ dark, light }) => ({
        light: light(finalColors.light),
        dark: dark(finalColors.dark),
      }),
      {
        strict: true,
        produceCssVariable(colorName) {
          return `--ui-${colorName}`;
        },
        produceThemeClass: (themeName) => `theme-${themeName}`,
        produceThemeVariant: (themeName) => `theme-${themeName}`,
      },
    ),
  ];
};
