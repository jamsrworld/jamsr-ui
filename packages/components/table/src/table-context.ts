import { createContext } from "@jamsr-ui/utils";
import { type useTable } from "./use-table";

type ContextType = ReturnType<typeof useTable>;

export const [TableProvider, useTableContext] = createContext<ContextType>({
  name: "TableContext",
  strict: false,
});
