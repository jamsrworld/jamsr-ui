"use client";

import { DataTableUsage } from "./usage";

export const DataTableCustomization = () => {
  return (
    <DataTableUsage
      variant="bordered"
      classNames={{
        td: "border-dashed",
        th: "border-dashed uppercase text-xs",
      }}
    />
  );
};
