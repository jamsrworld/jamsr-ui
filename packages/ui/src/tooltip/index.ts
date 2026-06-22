import {
  Tooltip as TooltipRoot,
  TooltipArrow,
  TooltipContent,
  TooltipGroup,
  TooltipTrigger,
} from "./tooltip";

import type { TooltipPositionerProps } from "@base-ui/react";
import type { VariantProps } from "tailwind-variants";

import type { tooltipStyles } from "./styles";

export const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Arrow: TooltipArrow,
  Group: TooltipGroup,
});

export namespace Tooltip {
  export type Variants = VariantProps<typeof tooltipStyles>;
  export interface Props extends TooltipRoot.Props {}
  export interface Positioner extends TooltipPositionerProps {}
}
