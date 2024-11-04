import {
  type CardContentProps,
  type CardFooterProps,
  type CardHeaderProps,
  type CardProps,
} from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    card?: CardProps;
    cardHeader?: CardHeaderProps;
    cardFooter?: CardFooterProps;
    cardContent?: CardContentProps;
  }
}
