"use client";

import { DataTable, type DataTableProps } from "@jamsr-ui/react";
import { COLUMNS } from "./columns";

export const DataTableEmptyState = (props: Partial<DataTableProps>) => {
  return (
    <DataTable
      columns={COLUMNS}
      sorting={{
        id: "registeredAt",
        desc: false,
      }}
      data={[]}
      rowCount={0}
      {...props}
    />
  );
};
