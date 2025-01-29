import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
} from "@jamsr-ui/react";

export const TableEmptyState = () => {
  return (
    <Table aria-label="Example static collection table" variant="solid">
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
