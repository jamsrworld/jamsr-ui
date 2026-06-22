import {
  Dialog as DialogRoot,
  DialogBody,
  DialogCancel,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./dialog";

import type { VariantProps } from "tailwind-variants";

import type { dialogStyles } from "./styles";

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
  Close: DialogClose,
  Cancel: DialogCancel,
});

export namespace Dialog {
  export type Variants = VariantProps<typeof dialogStyles>;
  export interface Props extends DialogRoot.Props {}
}
