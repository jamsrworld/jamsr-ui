import { IconButton } from "@jamsr-ui/icon-button";
import { Select, SelectItem, SelectValue } from "@jamsr-ui/select";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@jamsr-ui/shared-icons";
import { type Table } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { rowPerPageOptions } from "./hooks/use-pagination";

type Props<T> = {
  table: Table<T>;
  take: number;
};

export const Pagination = <T,>({ table, take }: Props<T>) => {
  const [value, setValue] = useState<SelectValue[]>([take.toString()]);

  useEffect(() => {
    table.setPageSize(Number(Array.from(value)[0] ?? rowPerPageOptions[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

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
      data-slot="pagination"
      className="flex flex-col justify-between gap-4 md:flex-row md:items-center"
    >
      <Select
        classNames={{
          base: "w-max",
          mainWrapper: "items-center flex flex-row gap-2",
          label: "shrink-0",
          trigger: "max-w-[60px]",
        }}
        value={value}
        onValueChange={setValue}
        size="sm"
        label="Rows Per Page:"
        returnFocus={false}
      >
        {rowPerPageOptions.map((pageSize) => (
          <SelectItem key={pageSize.toString()} value={pageSize.toString()}>
            {pageSize.toString()}
          </SelectItem>
        ))}
      </Select>
      <div className="flex gap-1 md:gap-4">
        <div className="flex items-center justify-center text-sm font-medium">
          Page {currentPageIndex} of {totalPageCount}
        </div>
        <div className="flex items-center">
          <IconButton
            label="First Page"
            onClick={onFirstPage}
            isDisabled={!table.getCanPreviousPage()}
            size="sm"
            variant="light"
            radius="full"
          >
            <span className="sr-only">Go to first page</span>
            <ChevronDoubleLeftIcon width={20} height={20} />
          </IconButton>
          <IconButton
            label="Previous Page"
            onClick={onPrevious}
            isDisabled={!table.getCanPreviousPage()}
            size="sm"
            variant="light"
            radius="full"
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon width={20} height={20} />
          </IconButton>
          <IconButton
            label="Next Page"
            onClick={onNext}
            isDisabled={!table.getCanNextPage()}
            size="sm"
            variant="light"
            radius="full"
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon width={20} height={20} />
          </IconButton>
          <IconButton
            label="Last Page"
            onClick={onEnd}
            isDisabled={!table.getCanNextPage()}
            size="sm"
            variant="light"
            radius="full"
          >
            <span className="sr-only">Go to last page</span>
            <ChevronDoubleRightIcon width={20} height={20} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
