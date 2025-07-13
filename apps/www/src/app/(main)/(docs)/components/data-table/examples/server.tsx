"use client";

import { DataTable, Input } from "@jamsr-ui/react";
import { SearchIcon } from "@jamsr-ui/shared-icons";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { PaginationState, SortingState } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { COLUMNS, fetchData } from "./columns";

export const DataTableServer = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { desc: true, id: "registeredAt" },
  ]);
  const [keyword, setKeyword] = useState("");

  const dataQuery = useQuery({
    queryKey: ["data", pagination, sorting, keyword],
    queryFn: () => fetchData({ ...pagination, sorting, keyword }),
    placeholderData: keepPreviousData,
  });
  const defaultData = useMemo(() => [], []);
  const data = dataQuery.data?.rows ?? defaultData;
  return (
    <DataTable
      columns={COLUMNS}
      data={data}
      manualPagination
      rowCount={dataQuery.data?.rowCount ?? 0}
      onSortingChange={setSorting}
      onPaginationChange={setPagination}
      isLoading={dataQuery.isFetching}
      manualSorting
      state={{ pagination, sorting }}
      tableProps={{
        topContent: (
          <div className="flex justify-end">
            <Input
              placeholder="Search..."
              isFilled
              startContent={<SearchIcon />}
              value={keyword}
              onValueChange={setKeyword}
            />
          </div>
        ),
      }}
    />
  );
};
