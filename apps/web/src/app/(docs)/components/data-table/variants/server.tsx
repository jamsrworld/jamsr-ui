"use client";

import { DataTable } from "@jamsr-ui/react";
import { COLUMNS, USERS } from "./columns";

export const DataTableServer = () => {
  return (
    <DataTable
      columns={COLUMNS}
      isServer
      sorting={{
        id: "registeredAt",
        desc: false,
      }}
      data={USERS}
      rowCount={USERS.length}
    />
  );
};
