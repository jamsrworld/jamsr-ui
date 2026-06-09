import type { VariantProps } from "tailwind-variants";
import { scrollAreaStyles } from "./styles";
import {
  ScrollArea as ScrollAreaRoot,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "./scroll-area";

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
