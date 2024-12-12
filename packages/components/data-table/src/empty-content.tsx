import { TableCell, TableRow } from "@jamsr-ui/table";

export const EmptyContent = () => {
  return (
    <TableRow>
      <TableCell
        className="pointer-events-none h-24 !bg-transparent text-center text-foreground-400"
        colSpan={100}
        aria-label="No results found"
      >
        No Records Found
      </TableCell>
    </TableRow>
  );
};
