import { TableBody, TableCell, TableRow } from "@jamsr-ui/table";
import { flexRender, type Row } from "@tanstack/react-table";
import { EmptyContent } from "./empty-content";
import { LoadingSkeleton } from "./loading-skeleton";

type Props<T> = {
  rows: Row<T>[];
  isLoading?: boolean;
};

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData, TValue> {
    cellClassName: string;
  }
}

export const Body = <T,>({ rows, isLoading = false }: Props<T>) => {
  const isEmpty = rows.length === 0;

  const body = rows.map((row) => (
    <TableRow key={row.id}>
      {row.getVisibleCells().map((cell) => {
        const width = cell.column.getSize();
        const { maxSize } = cell.column.columnDef;
        return (
          <TableCell
            className={cell.column.columnDef?.meta?.cellClassName}
            key={cell.id}
            style={{
              width,
              flexBasis: width,
              maxWidth: maxSize,
            }}
          >
            <div className="overflow-hidden">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </div>
          </TableCell>
        );
      })}
    </TableRow>
  ));

  const getContent = () => {
    if (isLoading && isEmpty) return <LoadingSkeleton />;
    if (isEmpty) return <EmptyContent />;
    if (isLoading && !isEmpty)
      return (
        <>
          <LoadingSkeleton linear />
          {body}
        </>
      );
    return body;
  };

  return <TableBody>{getContent()}</TableBody>;
};
