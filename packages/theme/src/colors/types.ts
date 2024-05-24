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

export type BaseColors = {
  background: ColorScale & {
    paper: string;
    neutral: string;
  };
  divider: ColorScale;
  overlay: ColorScale;
  focus: ColorScale;
  content1: ColorScale;
  content2: ColorScale;
  content3: ColorScale;
  content4: ColorScale;
  action: {
    hover: string;
  };
  foreground: ColorScale & {
    secondary: string;
    muted: string;
  };
};

export type ThemeColors = BaseColors & {
  default: ColorScale;
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  error: ColorScale;
};

export type SemanticBaseColors = {
  light: BaseColors;
  dark: BaseColors;
};
