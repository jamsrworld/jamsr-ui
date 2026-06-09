import type { VariantProps } from "tailwind-variants";
import { clipboardStyles } from "./styles";
import { Clipboard as ClipboardRoot, ClipboardIcon } from "./clipboard";

export const Clipboard = Object.assign(ClipboardRoot, {
  Icon: ClipboardIcon,
});

export namespace Clipboard {
  export type Variants = VariantProps<typeof clipboardStyles>;
  export interface Props extends ClipboardRoot.Props {}
  export interface Icon extends ClipboardIcon.Props {}
}
