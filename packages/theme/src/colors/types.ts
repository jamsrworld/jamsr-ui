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
    }>
  | string;

export type BaseColors = {
  background: {
    DEFAULT: string;
    secondary: string;
    tertiary: string;
  };
  foreground: {
    DEFAULT: string;
    secondary: string;
    tertiary: string;
    link: string;
  };
  divider: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  overlay: {
    DEFAULT: string;
  };
  focus: {
    DEFAULT: string;
  };
  content1: {
    DEFAULT: string;
    foreground: string;
  };
  content2: {
    DEFAULT: string;
    foreground: string;
  };
  content3: {
    DEFAULT: string;
    foreground: string;
  };
  content4: {
    DEFAULT: string;
    foreground: string;
  };
};

export type DefaultColors = {
  default: ColorScale;
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
};

export type ThemeColors = BaseColors & DefaultColors;

export type SemanticBaseColors = {
  light: BaseColors;
  dark: BaseColors;
};

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
