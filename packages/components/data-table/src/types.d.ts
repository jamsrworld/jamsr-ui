import { type DataTableProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    dataTable?: Partial<DataTableProps>;
  }
}
