"use client";
import { Button } from "../button";
import { AnimatedTickIcon, Settings2Icon } from "../icons";
import { Menu } from "../menu";
import { useDataGridContext } from "./data-grid-context";

export const DataGridColumnVisibility = () => {
  const { table } = useDataGridContext();
  return (
    <Menu>
      <Menu.Trigger
        render={
          <Button size="sm" variant="soft">
            <Settings2Icon />
            Column Visibility
          </Button>
        }
      />
      <Menu.Content>
        {table
          .getAllLeafColumns()
          .filter((col) => col.getCanHide())
          .map((column) => {
            const headerTitle = column.columnDef.meta?.headerTitle ?? column.id;
            return (
              <Menu.Item
                key={column.id}
                className="capitalize"
                disabled={!column.getCanHide()}
                onClick={column.getToggleVisibilityHandler()}
              >
                <AnimatedTickIcon
                  className="text-primary"
                  isSelected={column.getIsVisible()}
                />
                {headerTitle}
              </Menu.Item>
            );
          })}
      </Menu.Content>
    </Menu>
  );
};

export namespace DataGridColumnVisibility {
  export interface Props {}
}
