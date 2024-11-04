import { type DataTableProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    dataTable?: Partial<DataTableProps>;
  }
}
