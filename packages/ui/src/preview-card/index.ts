import {
  PreviewCard as PreviewCardRoot,
  PreviewCardArrow,
  PreviewCardContent,
  PreviewCardTrigger,
} from "./preview-card";

import type { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import type { VariantProps } from "tailwind-variants";

import type { previewCardStyles } from "./styles";

export const PreviewCard = Object.assign(PreviewCardRoot, {
  Arrow: PreviewCardArrow,
  Content: PreviewCardContent,
  Trigger: PreviewCardTrigger,
});

export namespace PreviewCard {
  export type Variants = VariantProps<typeof previewCardStyles>;
  export interface Props extends PreviewCardRoot.Props {}
  export interface Positioner extends PreviewCardPrimitive.Positioner.Props {}
}
