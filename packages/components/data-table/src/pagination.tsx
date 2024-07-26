import { Button } from "@jamsr-ui/button";
import { Select, SelectItem } from "@jamsr-ui/select";
import {
  ChevronDoubleLeft,
  ChevronDoubleRight,
  ChevronLeft,
  ChevronRight,
} from "@jamsr-ui/shared-icons";
import { Typography } from "@jamsr-ui/typography";
import { type Table } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { rowPerPageOptions } from "./hooks/use-pagination";

type Props<T> = {
  table: Table<T>;
  take: number;
};

export const Pagination = <T,>({ table, take }: Props<T>) => {
  const [value, setValue] = useState(new Set([take.toString()]));

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

  return (
    <div className="flex flex-row items-center justify-between gap-4 border-t border-divider/10 p-3">
      <div className="flex grow items-center gap-2">
        <Typography as="p" className="_md:hidden">
          Rows Per Page:
        </Typography>
        <Select
          className="max-w-[80px]"
          value={value}
          onValueChange={setValue}
          size="sm"
        >
          {rowPerPageOptions.map((pageSize) => (
            <SelectItem key={pageSize.toString()} value={pageSize.toString()}>
              {pageSize.toString()}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex gap-1 md:gap-4">
        <div className="flex items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            isIconOnly
            onClick={onFirstPage}
            disabled={!table.getCanPreviousPage()}
            size="sm"
            className="_md:hidden"
          >
            <span className="sr-only">Go to first page</span>
            <ChevronDoubleLeft />
          </Button>
          <Button
            isIconOnly
            onClick={onPrevious}
            disabled={!table.getCanPreviousPage()}
            size="sm"
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft />
          </Button>
          <Button
            isIconOnly
            onClick={onNext}
            disabled={!table.getCanNextPage()}
            size="sm"
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight />
          </Button>
          <Button
            isIconOnly
            onClick={onEnd}
            disabled={!table.getCanNextPage()}
            size="sm"
            className="_md:hidden"
          >
            <span className="sr-only">Go to last page</span>
            <ChevronDoubleRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
