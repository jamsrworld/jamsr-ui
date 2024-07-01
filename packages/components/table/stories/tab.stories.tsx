import { type Meta, type StoryObj } from "@storybook/react";
import type { TableProps } from "../src";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "../src";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof meta>;

const TableTemplate = (args: TableProps) => (
  <Table aria-label="Example static collection table">
    <TableHeader>
      <TableRow>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
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
);

export const Default: Story = {
  render: TableTemplate,
};
