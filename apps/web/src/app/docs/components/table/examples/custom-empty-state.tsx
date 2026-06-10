"use client";

import { FileIcon, RefreshIcon } from "@jamsrui/icons";
import { Button } from "ui/button";
import { Table } from "ui/table";
import { Text } from "ui/text";

const CustomTableEmptyState = () => {
  return (
    <Table.Row>
      <Table.Cell colSpan={3}>
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
      </Table.Cell>
    </Table.Row>
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
      <Table.Header>
        <Table.Row>
          <Table.Column>Name</Table.Column>
          <Table.Column>Role</Table.Column>
          <Table.Column>Status</Table.Column>
        </Table.Row>
      </Table.Header>
      <Table.Body emptySlot={<CustomTableEmptyState />} />
    </Table>
  );
};
