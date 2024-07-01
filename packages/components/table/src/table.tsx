import { TableProvider } from "./table-context";
import { useTable, type UseTableProps } from "./use-table";

export type TableProps = UseTableProps;

export const Table = (props: TableProps) => {
  const context = useTable(props);
  const {
    Component,
    children,
    topContent,
    bottomContent,
    getBaseProps,
    getWrapperProps,
    getTableProps,
  } = context;
  return (
    <TableProvider value={context}>
      <div data-component="table" {...getBaseProps()}>
        {topContent}
        <div {...getWrapperProps()}>
          <Component {...getTableProps({})}>{children}</Component>
        </div>
        {bottomContent}
      </div>
    </TableProvider>
  );
};
