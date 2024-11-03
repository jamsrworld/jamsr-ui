import { type TableProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    table?: Pick<TableProps, "className" | "classNames">;
  }
}
