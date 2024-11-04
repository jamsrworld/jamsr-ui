import {
  type TableCellProps,
  type TableBodyProps,
  type TableProps,
  type TableColumnProps,
  type TableHeaderProps,
  type TableRowProps,
} from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    table?: Partial<TableProps>;
    tableBody?: Partial<TableBodyProps>;
    tableCell?: Partial<TableCellProps>;
    tableColumn?: Partial<TableColumnProps>;
    tableHead?: Partial<TableHeaderProps>;
    tableRow?: Partial<TableRowProps>;
  }
}
