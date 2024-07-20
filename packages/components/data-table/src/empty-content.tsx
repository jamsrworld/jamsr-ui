import { TableCell, TableRow } from "@jamsr-ui/table";

export const EmptyContent = () => {
  return (
    <TableRow>
      <TableCell
        className="pointer-events-none !bg-transparent"
        colSpan={100}
        aria-label="No results found"
      >
        <div>No Records Found</div>
      </TableCell>
    </TableRow>
  );
};
