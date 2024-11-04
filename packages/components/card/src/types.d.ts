import {
  type CardContentProps,
  type CardFooterProps,
  type CardHeaderProps,
  type CardProps,
} from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    card?: Partial<CardProps>;
    cardHeader?: Partial<CardHeaderProps>;
    cardFooter?: Partial<CardFooterProps>;
    cardContent?: Partial<CardContentProps>;
  }
}
