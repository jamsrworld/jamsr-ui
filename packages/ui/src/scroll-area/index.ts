import {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "./scroll-area";

import type { VariantProps } from "tailwind-variants";

import type { scrollAreaStyles } from "./styles";

export const ScrollArea = Object.assign(ScrollAreaRoot, {
  Viewport: ScrollAreaViewport,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Corner: ScrollAreaCorner,
  Content: ScrollAreaContent,
});

export namespace ScrollArea {
  export type Variants = VariantProps<typeof scrollAreaStyles>;
  export interface Props extends ScrollAreaRoot.Props {}
}
