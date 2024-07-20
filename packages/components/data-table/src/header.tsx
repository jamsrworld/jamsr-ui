import { ChevronDown, ChevronUp } from "@jamsr-ui/shared-icons";
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
        <TableRow
          className="flex w-full"
          key={headerGroup.id}
        >
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
                  <span
                    className={cn({
                      "flex w-full cursor-pointer  select-none gap-1 overflow-hidden pr-1 text-[11px] uppercase":
                        header.column.getCanSort(),
                    })}
                    onClick={header.column.getToggleSortingHandler()}
                    onKeyDown={header.column.getToggleSortingHandler()}
                    role="presentation"
                  >
                    <span className="flex w-full grow items-center overflow-hidden">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: <ChevronUp className="size-5" />,
                        desc: <ChevronDown className="size-5" />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </span>
                  </span>
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
