import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const sidebarStyles = tv({
  slots: {
    wrapper: "group/sidebar-wrapper flex min-h-svh w-full",
    sidebar: [
      "group w-(--sidebar-width) group-data-[state=collapsed]/sidebar-wrapper:w-0",
      "duration-300 ease-out transition-[width]",
    ],
    container: [
      "group fixed flex z-10 h-dvh max-h-dvh flex-col",
      "transition-[left] duration-300 ease-out",
      "w-(--sidebar-width) left-0",
      "group-data-[state=collapsed]:left-[calc((var(--sidebar-width))*-1)]",
    ],
    header: "py-2 px-4",
    content: "flex h-full flex-col bg-surface",
    body: "p-2 grow flex flex-col gap-4 overflow-auto",
    group: "flex flex-col gap-1",
    groupLabel: "px-2 text-xs font-medium text-foreground-secondary",
    menu: "",
    menuItem: "",
    footer: "py-2 px-4",
    menuItemButton: [
      "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-surface-secondary",
      "disabled:status-disabled",
    ],
    inset: [
      "relative flex-1 flex-col",
      "w-full",
      "md:group-data-[state=expanded]/sidebar-wrapper:w-[calc(100%-var(--sidebar-width))]",
      "duration-300 ease-out transition-[width,translate]",
    ],
    backdrop: [
      "inset-0 -z-10 fixed bg-black/30 backdrop-blur-md backdrop-saturate-150",
    ],
  },
});

export type SidebarVariants = VariantProps<typeof sidebarStyles>;
