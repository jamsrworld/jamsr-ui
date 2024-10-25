"use client";

import { DataTable, type DataTableProps } from "@jamsr-ui/react";
import { COLUMNS, USERS } from "./columns";

export const DataTableDefault = (props: Partial<DataTableProps>) => {
  return (
    <DataTable
      columns={COLUMNS}
      isServer={false}
      sorting={{
        id: "registeredAt",
        desc: false,
      }}
      data={USERS}
      rowCount={USERS.length}
      {...props}
    />
  );
};
