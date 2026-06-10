import {
  Table as TableRoot,
  TableBody,
  TableCell,
  TableColumn,
  TableFooter,
  TableHeader,
  TableRow,
} from "./table";

import type { VariantProps } from "tailwind-variants";

import type { tableStyles } from "./styles";

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Column: TableColumn,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  Footer: TableFooter,
});

export namespace Table {
  export type Variants = VariantProps<typeof tableStyles>;
  export interface Props extends TableRoot.Props {}
  export interface Header extends TableHeader.Props {}
  export interface Column extends TableColumn.Props {}
  export interface Body extends TableBody.Props {}
  export interface Row extends TableRow.Props {}
  export interface Cell extends TableCell.Props {}
  export interface Footer extends TableFooter.Props {}
}
