import {
  type TableCellProps,
  type TableBodyProps,
  type TableProps,
  type TableColumnProps,
  type TableHeaderProps,
  type TableRowProps,
} from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    table?: Partial<TableProps>;
    tableBody?: Partial<TableBodyProps>;
    tableCell?: Partial<TableCellProps>;
    tableColumn?: Partial<TableColumnProps>;
    tableHeader?: Partial<TableHeaderProps>;
    tableRow?: Partial<TableRowProps>;
  }
}
