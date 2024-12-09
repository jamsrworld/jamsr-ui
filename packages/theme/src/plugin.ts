import deepMerge from "deepmerge";
import plugin from "tailwindcss/plugin";
import { type UIThemeConfig } from ".";
import { semanticColors } from "./colors";
import { type SemanticBaseColors } from "./colors/types";
import { createThemes } from "./tw-colors";

export const jamsrUiPlugins = (config?: UIThemeConfig) => {
  const finalColors = deepMerge(
    semanticColors,
    config?.colors ?? {},
  ) as SemanticBaseColors;
  return [
    plugin(
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ({ addUtilities, addVariant, addBase }) => {
        // fontSize
        addBase({
          ":root": {
            color: "hsl(var(--ui-foreground))",
            backgroundColor: "hsl(var(--ui-background))",
            "--fs-2xs": "clamp(0.66rem, -0.08vi + 0.68rem, 0.58rem)",
            "--fs-xs": "clamp(0.72rem, -0.03vi + 0.73rem, 0.69rem)",
            "--fs-sm": "clamp(0.8rem, 0.04vi + 0.79rem, 0.83rem)",
            "--fs-base": "clamp(0.82rem, 0.13vi + 0.84rem, 0.9rem)",
            "--fs-md": "clamp(0.9rem, 0.13vi + 0.84rem, 1.05rem)",
            "--fs-lg": "clamp(0.96rem, 0.25vi + 0.9rem, 1.2rem)",
            "--fs-xl": "clamp(1.06rem, 0.4vi + 0.96rem, 1.44rem)",
            "--fs-2xl": "clamp(1.16rem, 0.59vi + 1.02rem, 1.73rem)",
            "--fs-3xl": "clamp(1.28rem, 0.83vi + 1.07rem, 2.07rem)",
            "--fs-4xl": "clamp(1.41rem, 1.14vi + 1.13rem, 2.49rem)",
            "--fs-5xl": "clamp(1.55rem, 1.51vi + 1.17rem, 2.99rem)",
          },
          ":root, .light, [data-theme=light]": {
            "--ui-box-shadow-sm":
              "0px 0px 5px 0px rgba(0,0,0,.02),0px 2px 10px 0px rgba(0,0,0,.06),0px 0px 1px 0px rgba(0,0,0,.3)",
            "--ui-box-shadow-md":
              "0px 0px 15px 0px rgba(0,0,0,.03),0px 2px 30px 0px rgba(0,0,0,.08),0px 0px 1px 0px rgba(0,0,0,.3)",
            "--ui-box-shadow-lg":
              "0px 0px 30px 0px rgba(0,0,0,.04),0px 30px 60px 0px rgba(0,0,0,.12),0px 0px 1px 0px rgba(0,0,0,.3)",
          },
          ".dark, [data-theme=dark]": {
            "--ui-box-shadow-sm":
              "0px 0px 5px 0px rgba(0,0,0,.05),0px 2px 10px 0px rgba(0,0,0,.2),inset 0px 0px 1px 0px hsla(0,0%,100%,.15)",
            "--ui-box-shadow-md":
              "0px 0px 15px 0px rgba(0,0,0,.06),0px 2px 30px 0px rgba(0,0,0,.22),inset 0px 0px 1px 0px hsla(0,0%,100%,.15)",
            "--ui-box-shadow-lg":
              "0px 0px 30px 0px rgba(0,0,0,.07),0px 30px 60px 0px rgba(0,0,0,.26),inset 0px 0px 1px 0px hsla(0,0%,100%,.15)",
          },
        });
        // variants
        addVariant("ui-hover", "&[data-hovered=true]");
        addVariant("ui-group-hover", ":merge(.group)[data-hovered=true] &");
        addVariant("ui-selected", "&[data-selected=true]");
        addVariant("ui-group-selected", ":merge(.group)[data-selected=true] &");
        addVariant("ui-checked", "&[data-checked=true]");
        addVariant("ui-group-checked", ":merge(.group)[data-checked=true] &");
        addVariant("ui-focus", "&[data-focused=true]");
        addVariant("ui-group-focus", ":merge(.group)[data-focused=true] &");
        addVariant("ui-pressed", "&[data-pressed=true]");
        addVariant("ui-group-pressed", ":merge(.group)[data-pressed=true] &");
        addVariant("ui-active", "&[data-active=true]");
        addVariant("ui-group-active", ":merge(.group)[data-active=true] &");
        addVariant("ui-open", "&[data-open=true]");
        addVariant("ui-group-open", ":merge(.group)[data-open=true] &");
        addVariant("ui-interactive", "&[data-interactive=true]");
        addVariant(
          "ui-group-interactive",
          ":merge(.group)[data-interactive=true] &",
        );
        addVariant("ui-loaded", "&[data-loaded=true]");
        addVariant("ui-filled-within", "&[data-filled-within=true]");
        addVariant("ui-focus-visible", "&[data-focus-visible=true]");
        addVariant("ui-readonly", "&[data-readonly=true]");
        addVariant("ui-group-readonly", ":merge(.group)[data-readonly=true] &");
        addVariant("ui-disabled", "&[data-disabled=true]");
        addVariant("ui-group-disabled", ":merge(.group)[data-disabled=true] &");
        addUtilities({
          ".text-transform-inherit": {
            "text-transform": "inherit",
          },
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
              backdrop: "98",
              popover: "99",
              dialog: "99",
              header: "50",
              drawer: "60",
            },
            lineHeight: { 0: "0" },
            fontSize: {
              "size-inherit": "inherit",
              "2xs": "var(--fs-2xs)",
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
            boxShadow: {
              sm: "var(--ui-box-shadow-sm)",
              md: "var(--ui-box-shadow-md)",
              lg: "var(--ui-box-shadow-lg)",
            },
          },
        },
      },
    ),
    createThemes(
      ({ dark, light }) => ({
        light: light(finalColors.light),
        dark: dark(finalColors.dark),
      }),
      {
        defaultTheme: "light",
        strict: false,
        produceCssVariable(colorName) {
          return `--ui-${colorName}`;
        },
        produceThemeClass: (themeName) => themeName,
        produceThemeVariant: (themeName) => `theme-${themeName}`,
      },
    ),
  ];
};
