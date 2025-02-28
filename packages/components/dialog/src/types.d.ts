import {
  type DialogContentProps,
  type DialogFooterProps,
  type DialogBodyProps,
  type DialogHeaderProps,
  type DialogProps,
} from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    dialog?: Partial<DialogProps>;
    dialogHeader?: Partial<DialogHeaderProps>;
    dialogBody?: Partial<DialogBodyProps>;
    dialogContent?: Partial<DialogContentProps>;
    dialogFooter?: Partial<DialogFooterProps>;
  }
}
