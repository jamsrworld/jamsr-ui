import {
  type CardContentProps,
  type CardFooterProps,
  type CardHeaderProps,
  type CardProps,
} from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    card?: Partial<CardProps>;
    cardHeader?: Partial<CardHeaderProps>;
    cardFooter?: Partial<CardFooterProps>;
    cardContent?: Partial<CardContentProps>;
  }
}
