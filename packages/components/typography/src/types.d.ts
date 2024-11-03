import { type TypographyProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    typography?: Pick<TypographyProps, "className" | "classNames">;
  }
}
