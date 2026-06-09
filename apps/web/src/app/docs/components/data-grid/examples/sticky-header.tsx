"use client";

import { DataGrid, useDataGridTable } from "ui/data-grid";
import { COLUMNS, USERS } from "./columns";

export const DataGridStickyHeader = (props: Partial<DataGrid.Props>) => {
  const table = useDataGridTable({ columns: COLUMNS, data: USERS });
  return (
    <DataGrid
      table={table}
      {...props}
    >
      <DataGrid.Table isHeaderSticky />
      <DataGrid.Pagination />
    </DataGrid>
  );
};
