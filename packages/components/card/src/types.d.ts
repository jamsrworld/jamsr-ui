import {
  type CardContentProps,
  type CardFooterProps,
  type CardHeaderProps,
  type CardProps,
} from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    card?: Pick<CardProps, "className">;
    cardHeader?: Pick<CardHeaderProps, "className" | "classNames">;
    cardFooter?: Pick<CardFooterProps, "className">;
    cardContent?: Pick<CardContentProps, "className">;
  }
}
