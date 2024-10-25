import { tv, type VariantProps } from "@jamsr-ui/utils";

export const table = tv({
  slots: {
    base: "relative flex flex-col gap-2 overflow-hidden",
    wrapper: "grid w-full gap-2",
    table: "group/table w-full min-w-full",
    thead: "h-10",
    th: "h-10 grow items-center whitespace-nowrap px-3 text-left text-xs",
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
        th: "border-divider bg-background-tertiary first:rounded-l-lg last:rounded-r-lg",
        base: "rounded-2xl bg-background-secondary p-4",
      },
      outlined: {
        th: "border-b border-b-divider",
        td: "border-b border-divider-light",
        base: "bg-content1",
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
        thead: "sticky top-0 z-10 bg-content1 [&>tr]:shadow-sm",
        wrapper: "flex max-h-[400px] flex-col overflow-auto",
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
    separateRows: false,
    variant: "outlined",
  },
});

export type TableVariantProps = VariantProps<typeof table>;
export type TableSlots = keyof ReturnType<typeof table>;
export type TableReturnType = ReturnType<typeof table>;
