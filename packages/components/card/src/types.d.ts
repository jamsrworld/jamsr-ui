import { CardProps } from "./card";
import { CardContentProps } from "./card-content";
import { CardFooterProps } from "./card-footer";
import { CardHeaderProps } from "./card-header";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    card?: Pick<CardProps, "className">;
    cardContent?: Pick<CardContentProps, "className">;
    cardFooter?: Pick<CardFooterProps, "className">;
    cardHeader?: Pick<CardHeaderProps, "className" | "classNames">;
  }
}
