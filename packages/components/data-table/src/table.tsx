"use client";

import { useUIConfig } from "@jamsr-ui/config";
import { LinearProgress } from "@jamsr-ui/linear-progress";
import { Table, type TableProps } from "@jamsr-ui/table";
import { deepMergeProps, mergeGlobalProps } from "@jamsr-ui/utils";
import type { SortingState, TableOptions } from "@tanstack/react-table";
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Body } from "./body";
import { Header } from "./header";
import { usePagination } from "./hooks/use-pagination";
import { Pagination, PaginationProps } from "./pagination";

export type DataTableProps<TData> = Pick<
  TableOptions<TData>,
  "data" | "columns"
> &
  Partial<Omit<TableOptions<TData>, "data" | "columns">> &
  Pick<
    TableProps,
    | "variant"
    | "allowHover"
    | "radius"
    | "density"
    | "isHeaderSticky"
    | "classNames"
    | "className"
  > & {
    hidePagination?: boolean;
    tableProps?: Partial<TableProps>;
    isLoading?: boolean;
    paginationProps?: Pick<PaginationProps<any>, "className" | "classNames">;
  };

export const DataTable = <TData extends object>(
  $props: DataTableProps<TData>,
) => {
  const { dataTable: _globalProps = {} } = useUIConfig();
  const globalProps = mergeGlobalProps(_globalProps, $props);
  const props = deepMergeProps(globalProps, $props);
  const {
    columns,
    hidePagination = false,
    data,
    tableProps,
    variant,
    allowHover,
    radius,
    density = "standard",
    isHeaderSticky,
    className,
    classNames,
    isLoading,
    paginationProps,
    ...options
  } = props;

  const { pagination, take, onPaginationChange } = usePagination();
  const [sorting, onSortingChange] = useState<SortingState>([]);

  const table = useReactTable({
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange,
    onSortingChange,
    ...options,
    defaultColumn: {
      minSize: 100,
      size: 100,
      maxSize: 1e6,
      ...options?.defaultColumn,
    },
    state: {
      sorting,
      pagination,
      ...options?.state,
    },
    data,
    columns,
  });

  return (
    <div className="relative w-full overflow-hidden overflow-x-auto text-sm">
      {isLoading && <LinearProgress className="absolute top-0 left-0 z-1" />}
      <Table
        density={density}
        variant={variant}
        allowHover={allowHover}
        radius={radius}
        isHeaderSticky={isHeaderSticky}
        className={className}
        classNames={classNames}
        {...tableProps}
        bottomContent={
          <>
            {hidePagination ? null : (
              <Pagination take={take} table={table} {...paginationProps} />
            )}
            {tableProps?.bottomContent}
          </>
        }
      >
        <Header headerGroups={table.getHeaderGroups()} />
        <Body rows={table.getRowModel().rows} />
      </Table>
    </div>
  );
};
