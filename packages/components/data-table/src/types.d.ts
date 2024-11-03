import { type DataTableProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    datatable?: Pick<DataTableProps, "className" | "classNames">;
  }
}
