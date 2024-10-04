"use client";

import { DataTable } from "@jamsr-ui/react";
import { COLUMNS, USERS } from "./columns";

export const DataTableDefault = () => {
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
    />
  );
};
