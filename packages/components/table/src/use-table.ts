"use client";
import { useCallback, useMemo } from "react";

import { mergeProps } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { Table } from "./table";
import type { TableBody } from "./table-body";
import type { TableCell } from "./table-cell";
import type { TableColumn } from "./table-column";
import type { TableFooter } from "./table-footer";
import type { TableHeader } from "./table-header";
import type { TableRoot } from "./table-root";
import type { TableRow } from "./table-row";
import type { TableWrapper } from "./table-wrapper";

export const useTable = (props: useTable.Props) => {
  const { className, ...elementProps } = props;

  const getRootProps: PropGetter<TableRoot.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "root",
      "data-component": "table",
    }),
    [],
  );

  const getWrapperProps: PropGetter<TableWrapper.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "wrapper",
    }),
    [],
  );

  const getTableProps: PropGetter<Table.Props> = useCallback(
    (props) => ({
      ...mergeProps(elementProps, props),
      "data-slot": "table",
      className,
    }),
    [className, elementProps],
  );

  const getHeaderProps: PropGetter<TableHeader.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "header",
    }),
    [],
  );

  const getColumnProps: PropGetter<TableColumn.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "column",
    }),
    [],
  );

  const getBodyProps: PropGetter<TableBody.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "body",
    }),
    [],
  );

  const getRowProps: PropGetter<TableRow.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "row",
    }),
    [],
  );

  const getCellProps: PropGetter<TableCell.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "cell",
    }),
    [],
  );

  const getFooterProps: PropGetter<TableFooter.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "footer",
    }),
    [],
  );

  return useMemo(
    () => ({
      getRootProps,
      getTableProps,
      getHeaderProps,
      getColumnProps,
      getBodyProps,
      getRowProps,
      getCellProps,
      getFooterProps,
      getWrapperProps,
    }),
    [
      getBodyProps,
      getCellProps,
      getColumnProps,
      getFooterProps,
      getHeaderProps,
      getRootProps,
      getRowProps,
      getTableProps,
      getWrapperProps,
    ],
  );
};

export namespace useTable {
  export interface Props extends UIProps<"table"> {}
}
