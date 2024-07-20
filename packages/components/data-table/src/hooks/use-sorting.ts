import { type SortingState } from "@tanstack/react-table";
import { useState } from "react";

type Props<K extends string> = {
  desc: boolean;
  id: K;
};

export const useSorting = <K extends string>(props: Props<K>) => {
  const { desc = true, id } = props;
  const [sorting, setSorting] = useState<SortingState>([{ desc, id }]);
  const col = sorting[0];

  return {
    sorting,
    onSortingChange: setSorting,
    // eslint-disable-next-line no-nested-ternary
    order: !col ? null : col.desc ? ("desc" as const) : ("asc" as const),
    field: col?.id ? (col.id as K) : null,
  };
};
