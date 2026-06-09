"use client";

import { FileIcon, RefreshIcon } from "@jamsrui/icons";
import { Button } from "jamsrui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "jamsrui/table";
import { Text } from "jamsrui/text";
import React from "react";

const CustomTableEmptyState = () => {
  return (
    <TableRow>
      <TableCell colSpan={3}>
        <div className="py-12 text-center flex flex-col gap-2 items-center">
          <div className="bg-default p-2 rounded-lg">
            <FileIcon className="size-6" />
          </div>
          <Text>No data found</Text>
          <Text className="text-foreground-secondary max-w-md text-center">
            Any assets used in projects will live here. Start creating by
            uploading your files.
          </Text>
          <Button size="sm">
            <RefreshIcon className="size-4" />
            Refresh Page
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export const TableCustomEmptyState = (props: any) => {
  const { allowHover, separateRows, isHeaderSticky, ...rest } = props;
  const allowHoverBool = allowHover === "true";
  const separateRowsBool = separateRows === "true";
  const isHeaderStickyBool = isHeaderSticky === "true";

  return (
    <Table
      allowHover={allowHoverBool}
      separateRows={separateRowsBool}
      isHeaderSticky={isHeaderStickyBool}
      {...rest}
    >
      <TableHeader>
        <TableRow>
          <TableColumn>Name</TableColumn>
          <TableColumn>Role</TableColumn>
          <TableColumn>Status</TableColumn>
        </TableRow>
      </TableHeader>
      <TableBody emptySlot={<CustomTableEmptyState />} />
    </Table>
  );
};
