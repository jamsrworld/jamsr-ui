export type ColorScale =
  | Partial<{
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      foreground: string;
      DEFAULT: string;
      light: string;
      dark: string;
    }>
  | string;

type Background = ColorScale & {
  secondary: string;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  muted: string;
};

export type BaseColors = {
  background: Background;
  divider: ColorScale;
  action: {
    hover: string;
  };
  foreground: Background;
};

export type ThemeColors = BaseColors & {
  default: ColorScale;
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
};

export type SemanticBaseColors = {
  light: BaseColors;
  dark: BaseColors;
};
