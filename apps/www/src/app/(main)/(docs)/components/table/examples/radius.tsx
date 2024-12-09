"use client";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  type TableProps,
  TableRow,
} from "@jamsr-ui/react";
import { useState } from "react";

export const TableRadius = (props: Partial<TableProps>) => {
  const [radius, setRadius] = useState<TableProps["radius"]>();
  const radii: TableProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div>
      <div className="mb-5 flex gap-4">
        {radii.map((radius) => (
          <Button
            onClick={() => setRadius(radius)}
            key={radius}
            radius={radius}
          >
            {radius}
          </Button>
        ))}
      </div>
      <Table
        aria-label="Example static collection table"
        variant="solid"
        radius={radius}
        {...props}
      >
        <TableHeader>
          <TableRow>
            <TableColumn>Name</TableColumn>
            <TableColumn>Role</TableColumn>
            <TableColumn>Status</TableColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
