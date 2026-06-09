"use client";

import { Button } from "jamsrui/button";
import { Table } from "jamsrui/table";
import React from "react";

export const TableUsage = (props: any) => {
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
      <Table.Body>
        <Table.Row>
          <Table.Cell>Tony Reichert</Table.Cell>
          <Table.Cell>CEO</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Zoey Lang</Table.Cell>
          <Table.Cell>Technical Lead</Table.Cell>
          <Table.Cell>Paused</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jane Fisher</Table.Cell>
          <Table.Cell>Senior Developer</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>William Howard</Table.Cell>
          <Table.Cell>Community Manager</Table.Cell>
          <Table.Cell>Vacation</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={3}>
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground-secondary">
                Showing 4 of 4 employees
              </span>
              <Button
                color="primary"
                size="sm"
              >
                View All
              </Button>
            </div>
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};
