import { type PaginationState } from "@tanstack/react-table";
import { useState } from "react";

export const rowPerPageOptions = [10, 20, 50, 100];

export const usePagination = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageSize: rowPerPageOptions[0]!,
    pageIndex: 0,
  });

  const { pageIndex, pageSize } = pagination;
  return {
    take: pageSize,
    onPaginationChange: setPagination,
    pagination,
    skip: pageSize * pageIndex,
  };
};
