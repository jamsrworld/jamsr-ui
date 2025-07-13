"use client";

import {
  DataTable,
  UIConfigProvider,
  type DataTableProps,
} from "@jamsr-ui/react";
import { COLUMNS, USERS } from "./columns";

export const DataTableGlobalConfig = (props: Partial<DataTableProps>) => {
  return (
    <UIConfigProvider
      dataTable={{
        allowHover: true,
      }}
    >
      <DataTable
        columns={COLUMNS}
        sorting={{
          id: "registeredAt",
          desc: false,
        }}
        data={USERS}
        rowCount={USERS.length}
        {...props}
      />
    </UIConfigProvider>
  );
};
