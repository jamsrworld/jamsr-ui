"use client";

import { Table } from "jamsrui/table";
import React from "react";

export const TableEmptyState = (props: any) => {
  const { allowHover, separateRows, isHeaderSticky, ...rest } = props;
  const allowHoverBool = allowHover === "true";
  const separateRowsBool = separateRows === "true";
  const isHeaderStickyBool = isHeaderSticky === "true";

  return (
    <Table
      aria-label="Example static collection table"
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
      <Table.Body />
    </Table>
  );
};
