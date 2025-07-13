"use client";

import { DataTable, type DataTableProps } from "@jamsr-ui/react";
import { SortingState } from "@tanstack/react-table";
import { useState } from "react";
import { COLUMNS, USERS } from "./columns";

export const DataTableUsage = (props: Partial<DataTableProps>) => {
  const [sorting, setSorting] = useState<SortingState>([
    { desc: true, id: "registeredAt" },
  ]);

  return (
    <DataTable
      columns={COLUMNS}
      data={USERS}
      rowCount={USERS.length}
      onSortingChange={setSorting}
      state={{
        sorting,
      }}
      {...props}
    />
  );
};
