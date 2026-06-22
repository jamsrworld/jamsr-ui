"use client";

import { DataGrid, useDataGridTable } from "ui/data-grid";
import { useMemo } from "react";
import { COLUMNS } from "./columns";

export const DataGridEmptyState = (props: Partial<DataGrid.Props>) => {
  const emptyData = useMemo(() => [], []);
  const table = useDataGridTable({ columns: COLUMNS, data: emptyData });
  return (
    <DataGrid
      table={table}
      {...props}
    >
      <DataGrid.Table />
    </DataGrid>
  );
};
