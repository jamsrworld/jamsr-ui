import { useUIStyle } from "@jamsr-ui/styles";
import { deepMergeProps } from "@jamsr-ui/utils";
import React from "react";
import { DialogProvider } from "./dialog-context";
import { UseDialog, type UseDialogProps } from "./use-dialog";

export type DialogProps = UseDialogProps & {
  children: React.ReactNode;
};

export const Dialog = ($props: DialogProps) => {
  const { dialog: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const { children, ...restProps } = props;
  const context = UseDialog({ ...restProps });
  return <DialogProvider value={context}>{children}</DialogProvider>;
};
