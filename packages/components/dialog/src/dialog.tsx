import { useUIConfig } from "@jamsr-ui/config";
import { deepMergeProps, mergeGlobalProps } from "@jamsr-ui/utils";
import React from "react";
import { DialogProvider } from "./dialog-context";
import { UseDialog, type UseDialogProps } from "./use-dialog";

export type DialogProps = UseDialogProps & {
  children: React.ReactNode;
};

export const Dialog = ($props: DialogProps) => {
  const { dialog: _globalProps = {}, globalConfig } = useUIConfig();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props, globalConfig);
  const { children, ...restProps } = props;
  const context = UseDialog({ ...restProps });
  return <DialogProvider value={context}>{children}</DialogProvider>;
};
