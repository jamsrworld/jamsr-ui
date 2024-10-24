import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  type TableProps,
  TableRow,
} from "@jamsr-ui/react";

export const TableDefault = (props: Partial<TableProps>) => {
  return (
    <Table aria-label="Example static collection table" {...props}>
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
};
