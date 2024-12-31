import { tv, type VariantProps } from "@jamsr-ui/utils";

export const text = "";
export const sidebar = tv({
  slots: {
    base: "p-2",
    header: "",
    content: "flex flex-col gap-4 py-4",
    group: "flex flex-col gap-1",
    groupLabel: "px-2 text-xs text-foreground-secondary",
    menu: "",
    menuItem: "",
    footer: "",
    menuItemButton:
      "flex w-full items-center gap-1 rounded-md px-2 py-1.5 text-sm hover:bg-content2",
  },
});

export type SidebarVariantProps = VariantProps<typeof sidebar>;
export type SidebarSlots = keyof ReturnType<typeof sidebar>;
