"use client";

import { DataGrid, useDataGridTable } from "jamsrui/data-grid";
import { COLUMNS, USERS } from "./columns";

export const DataGridUsage = (props: Partial<DataGrid.Props>) => {
  const table = useDataGridTable({
    columns: COLUMNS,
    data: USERS,
  });
  return (
    <DataGrid
      table={table}
      {...props}
    >
      <div className="flex justify-end mb-2">
        <DataGrid.ColumnVisibility />
      </div>
      <DataGrid.Table />
      <DataGrid.Pagination />
    </DataGrid>
  );
};
