"use client";
import { useMemo } from "react";

import type { Table as ReactTable } from "@tanstack/react-table";

export const useDataGrid = (props: useDataGrid.Props) => {
  const { table, isLoading } = props;
  const isEmpty = table.options.data.length === 0;

  return useMemo(
    () => ({
      table,
      isEmpty,
      isLoading,
    }),
    [isEmpty, isLoading, table],
  );
};

export namespace useDataGrid {
  export interface Props {
    table: ReactTable<any>;
    children: React.ReactNode;
    isLoading?: boolean;
  }
}
