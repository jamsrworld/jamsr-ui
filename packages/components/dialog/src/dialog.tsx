import React from "react";
import { DialogProvider } from "./dialog-context";
import { UseDialog, type UseDialogProps } from "./use-dialog";

export type DialogProps = UseDialogProps & {
  children: React.ReactNode;
};

export const Dialog = (props: DialogProps) => {
  const { children, ...restProps } = props;
  const context = UseDialog({ ...restProps });
  return <DialogProvider value={context}>{children}</DialogProvider>;
};
