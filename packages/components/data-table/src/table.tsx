"use client";

import { Table, type TableProps } from "@jamsr-ui/table";
import type { ColumnDef, RowData, TableOptions } from "@tanstack/react-table";
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { Body } from "./body";
import { Header } from "./header";
import { usePagination } from "./hooks/use-pagination";
import { useSorting } from "./hooks/use-sorting";
import { Pagination } from "./pagination";

export type DataTableProps = Partial<TableProps> & {
  sorting: {
    id: string;
    desc: boolean;
  };
  columns: ColumnDef<any>[];
  isServer?: boolean;
  pagination?: boolean;
  data: unknown[];
  rowCount?: number;
  options?: TableOptions<RowData>;
};

export const DataTable = (props: DataTableProps) => {
  const {
    sorting: propSorting,
    columns,
    isServer = false,
    pagination: showPagination = true,
    bottomContent,
    data,
    rowCount,
    options,
    ...restProps
  } = props;

  const { pagination, take, onPaginationChange } = usePagination();
  const { sorting, field, order, onSortingChange } =
    useSorting<string>(propSorting);

  const allColumns = useMemo(() => {
    return [
      {
        header: "#",
        accessorKey: "#",
        size: 50,
        maxSize: 50,
        cell: ({ row, table }) =>
          (table
            .getSortedRowModel()
            ?.flatRows?.findIndex((flatRow) => flatRow.id === row.id) || 0) + 1,
      },
      ...columns,
    ];
  }, [columns]);

  const pageCount = rowCount ? Math.round(rowCount / take) : 0;

  const table = useReactTable({
    data,
    // @ts-ignore
    columns: allColumns,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
      pagination,
    },
    ...(isServer
      ? {
          manualPagination: true,
          manualSorting: true,
          pageCount,
        }
      : {
          getSortedRowModel: getSortedRowModel(),
          getPaginationRowModel: getPaginationRowModel(),
        }),
    onPaginationChange,
    onSortingChange,
    defaultColumn: {
      minSize: 100,
      size: 100,
      maxSize: 1e6,
    },
    ...options,
  });

  return (
    <div className="relative w-full overflow-hidden overflow-x-auto text-sm">
      <Table
        density="standard"
        bottomContent={
          <>
            {!showPagination ? null : <Pagination take={take} table={table} />}
            {bottomContent}
          </>
        }
        classNames={{
          wrapper: "overflow-x-auto",
          base: "overflow-hidden",
        }}
        {...restProps}
      >
        <Header headerGroups={table.getHeaderGroups()} />
        <Body rows={table.getRowModel().rows} />
      </Table>
    </div>
  );
};
