import { tv, type VariantProps } from "@jamsr-ui/utils";

export const table = tv({
  slots: {
    base: "relative flex flex-col gap-2 overflow-hidden rounded-2xl",
    wrapper: "grid w-full gap-2",
    table: "group/table w-full min-w-full",
    thead: "h-10",
    th: "h-10 grow items-center whitespace-nowrap px-3 text-left text-xs uppercase text-foreground-secondary first:rounded-l-lg last:rounded-r-lg",
    tbody: "",
    tr: "group/tr",
    td: "overflow-hidden whitespace-nowrap px-3 text-sm",
    tfoot: "",
    sortIcon: "",
    emptyWrapper: "",
    loadingWrapper: "",
  },
  variants: {
    variant: {
      solid: {
        th: "border-divider bg-background-tertiary",
        base: "bg-background-secondary p-4",
      },
      outlined: {
        th: "border-b border-b-black",
        td: "border-b",
      },
    },
    density: {
      compact: {
        td: "py-2",
      },
      standard: {
        td: "py-4",
      },
      comfortable: {
        td: "py-6",
      },
    },
    isHeaderSticky: {
      true: {
        thead: "sticky top-0 z-10 [&>tr]:first:shadow-sm",
      },
    },
    allowHover: {
      true: {
        td: "md:group-hover/tr:bg-content2",
      },
      false: {
        td: "",
      },
    },
    isMobileMode: {
      true: {
        td: "rounded-none border-b border-divider",
      },
      false: {
        td: "first:rounded-l-lg last:rounded-r-lg",
      },
    },
    separateRows: {
      true: {
        tr: "border-b-2 border-transparent",
        td: "border-none bg-background-secondary",
        base: "border-none bg-transparent p-0",
      },
    },
  },
  defaultVariants: {
    isHeaderSticky: false,
    density: "compact",
    allowHover: false,
    isMobileMode: false,
    separateRows: false,
    variant: "solid",
  },
});

export type TableVariantProps = VariantProps<typeof table>;
export type TableSlots = keyof ReturnType<typeof table>;
export type TableReturnType = ReturnType<typeof table>;
