"use client";

import { DataGridContext } from "./data-grid-context";
import { useDataGrid } from "./use-data-grid";

import type { RowData } from "@tanstack/react-table";
import type { ReactNode } from "react";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    headerTitle?: string;
    headerClassName?: string;
    cellClassName?: string;
    expandedContent?: (row: TData) => ReactNode;
  }
}

export const DataGrid = (props: DataGrid.Props) => {
  const ctx = useDataGrid(props);
  return (
    <DataGridContext value={ctx}>
      <div className="data-grid-wrapper">{props.children}</div>
    </DataGridContext>
  );
};

export namespace DataGrid {
  export interface Props extends useDataGrid.Props {}
}
