import type { VariantProps } from "tailwind-variants";
import { dialogStyles } from "./styles";
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
