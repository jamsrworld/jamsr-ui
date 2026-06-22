"use client";

import { DataGrid, useDataGridTable } from "ui/data-grid";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { PaginationState } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { COLUMNS, fetchData } from "./columns";

export const DataGridServerSide = (props: Partial<DataGrid.Props>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const dataQuery = useQuery({
    queryKey: ["data", pagination],
    queryFn: () => fetchData(pagination),
    placeholderData: keepPreviousData,
  });
  const defaultData = useMemo(() => [], []);

  const table = useDataGridTable({
    columns: COLUMNS,
    data: dataQuery.data?.rows ?? defaultData,
    manualPagination: true,
    rowCount: dataQuery.data?.rowCount ?? 0,
    state: { pagination },
    onPaginationChange: setPagination,
  });

  return (
    <DataGrid
      table={table}
      {...props}
    >
      <DataGrid.Table />
      <DataGrid.Pagination />
    </DataGrid>
  );
};
