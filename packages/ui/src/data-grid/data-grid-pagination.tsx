"use client";

import { useState } from "react";

import { useRender } from "@base-ui/react/use-render";

import { Field } from "../field";
import { IconButton } from "../icon-button";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../icons";
import { Select } from "../select";
import { useDataGridContext } from "./data-grid-context";
import { cn } from "../utils/cn";

export const DataGridPaginationSelector = () => {
  const { table } = useDataGridContext();
  const [value, setValue] = useState<number>(
    table.getState().pagination.pageSize,
  );

  const onValueChange = (value: number | null) => {
    if (value === null) return;
    table.setPageSize(value);
    setValue(value);
  };
  return (
    <Field className="grow max-w-40" orientation="horizontal">
      <Field.Label className="whitespace-nowrap grid place-content-center">
        Rows Per Page:
      </Field.Label>
      <Select
        className="flex flex-row items-center gap-2"
        data-slot="pagination-selector"
        onValueChange={onValueChange}
        size="sm"
        value={value}
      >
        <Select.Trigger className="px-1" />
        <Select.Content>
          {[10, 20, 50, 100, 500].map((pageSize) => (
            <Select.Item key={pageSize.toString()} value={pageSize}>
              {pageSize.toString()}
            </Select.Item>
          ))}
        </Select.Content>
      </Select>
    </Field>
  );
};

export const DataGridPaginationControls = (
  props: DataGridPaginationControls.Props,
) => {
  const { className, ...restProps } = props;
  const { table } = useDataGridContext();
  const onNext = () => {
    table.nextPage();
  };
  const onPrevious = () => {
    table.previousPage();
  };
  const onFirstPage = () => {
    table.setPageIndex(0);
  };
  const onEnd = () => {
    table.setPageIndex(table.getPageCount() - 1);
  };

  const totalPageCount = table.getPageCount();
  const currentPageIndex = totalPageCount
    ? table.getState().pagination.pageIndex + 1
    : 0;

  return (
    <div
      className={cn("flex gap-1 md:gap-4", className)}
      data-slot="pagination-controls"
      {...restProps}
    >
      <div className="flex items-center justify-center text-sm font-medium">
        Page {currentPageIndex} of {totalPageCount}
      </div>
      <div className="flex items-center">
        <IconButton
          disabled={!table.getCanPreviousPage()}
          label="Go to first page"
          onClick={onFirstPage}
          radius="full"
          size="sm"
          variant="light"
        >
          <ChevronDoubleLeftIcon height={20} width={20} />
        </IconButton>
        <IconButton
          disabled={!table.getCanPreviousPage()}
          label="Go to previous page"
          onClick={onPrevious}
          radius="full"
          size="sm"
          variant="light"
        >
          <ChevronLeftIcon height={20} width={20} />
        </IconButton>
        <IconButton
          disabled={!table.getCanNextPage()}
          label="Go to next page"
          onClick={onNext}
          radius="full"
          size="sm"
          variant="light"
        >
          <ChevronRightIcon height={20} width={20} />
        </IconButton>
        <IconButton
          disabled={!table.getCanNextPage()}
          label="Go to last page"
          onClick={onEnd}
          radius="full"
          size="sm"
          variant="light"
        >
          <ChevronDoubleRightIcon height={20} width={20} />
        </IconButton>
      </div>
    </div>
  );
};

export namespace DataGridPaginationControls {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const DataGridPagination = (props: DataGridPagination.Props) => {
  const { isEmpty } = useDataGridContext();

  const {
    children = (
      <>
        <DataGridPaginationSelector />
        <DataGridPaginationControls />
      </>
    ),
    render,
    ...restProps
  } = props;

  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...restProps,
      className: cn(
        "flex flex-col w-full justify-between gap-4 md:flex-row md:items-center mt-2",
        restProps.className,
      ),
      "data-slot": "pagination",
      children,
    },
    render,
  });
  if (isEmpty) return null;
  return <>{renderElement}</>;
};

export namespace DataGridPagination {
  export interface Props extends useRender.ComponentProps<"div"> {}
}
