import {
  Card as CardRoot,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

import type { VariantProps } from "tailwind-variants";

import type { cardStyles } from "./styles";

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});

export namespace Card {
  export type Variants = VariantProps<typeof cardStyles>;
  export interface Props extends CardRoot.Props {}
}
