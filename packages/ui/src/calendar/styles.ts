import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const calendarStyles = tv({
  slots: {
    root: "p-3 bg-surface rounded-xl",
    months: "flex flex-col gap-4 relative",
    month: "flex flex-col gap-4",
    month_caption: "flex justify-center pt-1 relative items-center",
    caption_label: "text-sm font-medium",
    nav: "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1 z-1",
    button_previous:
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:pointer-events-none disabled:opacity-50 size-7",
    button_next:
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:pointer-events-none disabled:opacity-50 size-7",
    month_grid: "w-full border-collapse",
    weekdays: "flex",
    weekday:
      "text-foreground-tertiary rounded-md w-9 font-normal text-[0.8rem]",
    week: "flex w-full mt-2",
    day: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-primary-soft [&:has([aria-selected].day-outside)]:bg-primary-soft/50 [&:has([aria-selected].day-range-end)]:rounded-r-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
    day_button:
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-default-soft hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:pointer-events-none disabled:opacity-50 size-9",
    range_start: "day-range-start rounded-l-md",
    range_end: "day-range-end rounded-r-md",
    selected:
      "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-md",
    today: "bg-default-soft text-foreground rounded-md",
    outside: "day-outside text-foreground-tertiary opacity-50",
    disabled: "text-foreground-tertiary opacity-50",
    range_middle: "aria-selected:bg-primary-soft aria-selected:text-foreground",
    hidden: "invisible",
    footer: "pt-3 text-sm text-foreground-secondary",
  },
});

export type CalendarVariants = VariantProps<typeof calendarStyles>;
