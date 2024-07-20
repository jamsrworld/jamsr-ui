"use client";

import { Table, type TableProps } from "@jamsr-ui/table";
import {
  type ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  RowData,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { Body } from "./body";
import { Header } from "./header";
import { usePagination } from "./hooks/use-pagination";
import { useSorting } from "./hooks/use-sorting";
import { Pagination } from "./pagination";

type Props = Partial<TableProps> & {
  sorting: {
    id: string;
    desc: boolean;
  };
  columns: ColumnDef<any>[];
  isServer?: boolean;
  pagination?: boolean;
  data: unknown[];
  rowCount: number;
  options?: TableOptions<RowData>;
};

export const DataTable = (props: Props) => {
  const {
    sorting: propSorting,
    columns,
    isServer = true,
    pagination: showPagination = true,
    bottomContent,
    topContent,
    data,
    rowCount,
    options,
    ...restProps
  } = props;

  const { pagination, skip, take, onPaginationChange } = usePagination();
  console.log("pagination:->", pagination)
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

  const pageCount = Math.round(rowCount / take);

  const table = useReactTable({
    data,
    debugTable: true,
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
      maxSize: 1e3,
    },
    // ...options,
  });

  return (
    <div className="relative w-full overflow-hidden overflow-x-auto text-sm">
      <Table
        density="standard"
        bottomContent={
          !showPagination ? null : (
            <Pagination
              take={take}
              table={table}
            />
          )
        }
        classNames={{
          wrapper: "overflow-x-scroll",
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
