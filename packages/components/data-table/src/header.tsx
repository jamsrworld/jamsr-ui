import { ChevronDownIcon, ChevronUpIcon } from "@jamsr-ui/shared-icons";
import { TableColumn, TableHeader, TableRow } from "@jamsr-ui/table";
import { cn } from "@jamsr-ui/utils";
import { flexRender, type HeaderGroup } from "@tanstack/react-table";

type Props<T> = {
  headerGroups: HeaderGroup<T>[];
};

export const Header = <T,>({ headerGroups }: Props<T>) => {
  return (
    <TableHeader>
      {headerGroups.map((headerGroup) => (
        <TableRow className="flex w-full" key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableColumn
              key={header.id}
              style={{
                width: header.getSize(),
                maxWidth: header.column.columnDef.maxSize,
              }}
              className="relative flex"
            >
              {header.isPlaceholder ? null : (
                <>
                  <button
                    type="button"
                    className={cn(
                      "flex w-full cursor-pointer select-none gap-1 overflow-hidden pr-1 text-transform-inherit",
                      {
                        "": header.column.getCanSort(),
                      },
                    )}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <span className="flex w-full  grow items-center overflow-hidden font-medium">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: <ChevronUpIcon className="size-4 shrink-0" />,
                        desc: <ChevronDownIcon className="size-4 shrink-0" />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </span>
                  </button>
                  <span
                    role="presentation"
                    aria-label="resize"
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    className={cn(
                      "absolute right-0 top-1/2  h-3/5 w-[2px] -translate-y-1/2 cursor-ew-resize bg-slate-300/30 opacity-0 transition-all duration-500 group-hover/table:opacity-100",
                      {
                        "isResizing cursor-ew-resize":
                          header.column.getIsResizing(),
                      },
                    )}
                  />
                </>
              )}
            </TableColumn>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
};
