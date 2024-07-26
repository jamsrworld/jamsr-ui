import plugin from "tailwindcss/plugin";
import { createThemes } from "tw-colors";
import { semanticColors } from "./colors";

export { createThemes, semanticColors };

export const jamsrui = () => [
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
            "caret-blink": {
              "0%,70%,100%": { opacity: "1" },
              "20%,50%": { opacity: "0" },
            },
          },
          opacity: {
            disabled: "50%",
          },
        },
      },
    },
  ),
  createThemes(semanticColors, {
    strict: true,
    produceCssVariable(colorName) {
      return `--ui-${colorName}`;
    },
  }),
];
