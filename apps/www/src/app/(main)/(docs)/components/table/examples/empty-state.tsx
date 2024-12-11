import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  type TableProps,
  TableRow,
} from "@jamsr-ui/react";

export const TableEmptyState = (props: Partial<TableProps>) => {
  return (
    <Table
      aria-label="Example static collection table"
      variant="solid"
      {...props}
    >
      <TableHeader>
        <TableRow>
          <TableColumn>Name</TableColumn>
          <TableColumn>Role</TableColumn>
          <TableColumn>Status</TableColumn>
        </TableRow>
      </TableHeader>
      <TableBody />
    </Table>
  );
};
