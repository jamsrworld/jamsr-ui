"use client";
import { flexRender } from "@tanstack/react-table";

import { IconButton } from "../icon-button";
import {
  ArrowDownIcon,
  ArrowLeftToLineIcon,
  ArrowRightToLineIcon,
  ArrowUpIcon,
  ChevronsUpDownIcon,
  EllipsisVerticalIcon,
  EyeClosedIcon,
} from "../icons";
import { Menu } from "../menu";
import { Table } from "../table";
import { useDataGridContext } from "./data-grid-context";
import { getPinningStyles } from "./utils";
import { cn } from "../utils/cn";

import type { Column, Header } from "@tanstack/react-table";

export const DataGridHeader = () => {
  const { table } = useDataGridContext();
  const headerGroups = table.getHeaderGroups();
  return (
    <Table.Header>
      {headerGroups.map((headerGroup) => {
        return (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <Table.Column
                  key={header.id}
                  className="relative"
                  colSpan={header.colSpan}
                  data-pinned={header.column.getIsPinned() || undefined}
                  style={{
                    width: header.getSize(),
                    ...getPinningStyles(header.column),
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </Table.Column>
              );
            })}
          </Table.Row>
        );
      })}
    </Table.Header>
  );
};

export namespace DataGridHeader {
  export interface Props {}
}

const DataGridColumnHeaderDropdown = ({
  column,
}: {
  column: Column<any, any>;
}) => {
  return (
    <Menu>
      <Menu.Trigger
        render={
          <IconButton
            className="invisible group-hover/th:visible"
            label="More"
            size="sm"
            variant="light"
          >
            <EllipsisVerticalIcon className="size-4" />
          </IconButton>
        }
      />
      <Menu.Content>
        <Menu.Group>
          <Menu.RadioGroup value={column.getIsSorted() || ""}>
            <Menu.RadioItem
              disabled={!column.getCanSort()}
              value="asc"
              onClick={() => {
                if (column.getIsSorted() === "asc") {
                  column.clearSorting();
                } else {
                  column.toggleSorting(false);
                }
              }}
            >
              <ArrowUpIcon />
              Asc
              <Menu.RadioItemIndicator className="ml-auto" />
            </Menu.RadioItem>
            <Menu.RadioItem
              disabled={!column.getCanSort()}
              value="desc"
              onClick={() => {
                if (column.getIsSorted() === "desc") {
                  column.clearSorting();
                } else {
                  column.toggleSorting(true);
                }
              }}
            >
              <ArrowDownIcon />
              Desc
              <Menu.RadioItemIndicator className="ml-auto" />
            </Menu.RadioItem>
          </Menu.RadioGroup>
        </Menu.Group>
        <Menu.Separator />
        <Menu.Item
          disabled={!column.getCanHide()}
          onClick={column.getToggleVisibilityHandler()}
        >
          <EyeClosedIcon />
          Hide Column
        </Menu.Item>
        <Menu.Separator />
        <Menu.Group>
          <Menu.RadioGroup value={column.getIsPinned() || ""}>
            <Menu.RadioItem
              value="left"
              onClick={() => {
                column.pin(column.getIsPinned() === "left" ? false : "left");
              }}
            >
              <ArrowLeftToLineIcon />
              Pin To Left
              <Menu.RadioItemIndicator className="ml-auto" />
            </Menu.RadioItem>
            <Menu.RadioItem
              value="right"
              onClick={() =>
                column.pin(column.getIsPinned() === "right" ? false : "right")
              }
            >
              <ArrowRightToLineIcon />
              Pin To Right
              <Menu.RadioItemIndicator className="ml-auto" />
            </Menu.RadioItem>
          </Menu.RadioGroup>
        </Menu.Group>
      </Menu.Content>
    </Menu>
  );
};

const DataGridHeaderResizer = ({
  header,
}: {
  header: Header<any, unknown>;
}) => {
  return (
    <span
      aria-label="resize"
      data-slot="data-grid-header-resizer"
      onDoubleClick={() => header.column.resetSize()}
      onMouseDown={header.getResizeHandler()}
      onTouchStart={header.getResizeHandler()}
      role="presentation"
      className={cn(
        "absolute right-0 top-1/2  h-3/5 w-0.5 -translate-y-1/2 cursor-ew-resize bg-slate-300/30 transition-all duration-500 select-none touch-none",
        "invisible group-hover/table:visible",
        {
          "isResizing cursor-ew-resize": header.column.getIsResizing(),
        },
      )}
    />
  );
};

export const DataGridHeaderColumn = (props: DataGridHeaderColumn.Props) => {
  const { header, children, hideResizer = false, hideDropdown = false } = props;
  return (
    <div
      className="flex"
      data-slot="data-grid-header-column"
      data-sort={header.column.getIsSorted()}
    >
      <button
        onClick={header.column.getToggleSortingHandler()}
        type="button"
        className={cn(
          "flex w-full cursor-default select-none gap-1 overflow-hidden pr-1 text-transform-inherit",
          {
            "": header.column.getCanSort(),
          },
        )}
      >
        <span className="flex w-full  grow items-center overflow-hidden font-medium">
          {children}
          {
            {
              asc: <ArrowUpIcon className="size-3 shrink-0" />,
              desc: <ArrowDownIcon className="size-3 shrink-0" />,
              empty: <ChevronsUpDownIcon className="size-3 shrink-0" />,
            }[header.column.getIsSorted() || "empty"]
          }
        </span>
      </button>
      {!hideDropdown && <DataGridColumnHeaderDropdown column={header.column} />}
      {!hideResizer && <DataGridHeaderResizer header={header} />}
    </div>
  );
};

export namespace DataGridHeaderColumn {
  export interface Props {
    header: Header<any, unknown>;
    children: React.ReactNode;
    hideResizer?: boolean;
    hideDropdown?: boolean;
  }
}
