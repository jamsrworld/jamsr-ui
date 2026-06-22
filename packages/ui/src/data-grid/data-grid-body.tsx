"use client";
import { flexRender } from "@tanstack/react-table";

import { Table } from "../table";
import { useDataGridContext } from "./data-grid-context";
import { DataGridEmpty } from "./data-grid-empty";
import { getPinningStyles } from "./utils";

import type { Row } from "@tanstack/react-table";

const DataGridSkeleton = () => {
  const { table } = useDataGridContext();
  const rows = Array.from({ length: 8 }).map((_, i) => {
    return {
      id: i,
    };
  });
  return rows.map((row) => {
    return (
      <Table.Row key={row.id}>
        {table.getVisibleFlatColumns().map((column) => {
          return (
            <Table.Cell
              key={column.id}
              style={{
                width: column.getSize(),
              }}
            >
              {column.columnDef.meta?.skeleton}
            </Table.Cell>
          );
        })}
      </Table.Row>
    );
  });
};

export const DataGridBody = () => {
  const { table, isEmpty, isLoading } = useDataGridContext();
  return (
    <Table.Body>
      {isEmpty ? isLoading ? <DataGridSkeleton /> : <DataGridEmpty /> : null}
      {table.getRowModel().rows.map((row) => {
        return (
          <Table.Row key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <Table.Cell
                  key={cell.id}
                  data-pinned={cell.column.getIsPinned() || undefined}
                  style={{
                    width: cell.column.getSize(),
                    ...getPinningStyles(cell.column),
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              );
            })}
          </Table.Row>
        );
      })}
    </Table.Body>
  );
};

export interface DataGridBodyProps<T> {
  rows: Row<T>[];
}
