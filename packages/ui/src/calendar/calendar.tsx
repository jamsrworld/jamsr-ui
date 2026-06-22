"use client";

import { DayPicker } from "@daypicker/react";

import { calendarStyles } from "./styles";
import { cn } from "../utils/cn";

import type { ComponentProps } from "react";

type CalendarProps = ComponentProps<typeof DayPicker>;

const ChevronIcon = (props: { orientation?: string }) => {
  const isLeft = props.orientation === "left";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      {isLeft ? (
        <path d="m15 18-6-6 6-6" />
      ) : (
        <path d="m9 18 6-6-6-6" />
      )}
    </svg>
  );
};

export const Calendar = (props: CalendarProps) => {
  const { className, classNames, ...rest } = props;
  const styles = calendarStyles();

  return (
    <DayPicker
      className={cn(styles.root(), className)}
      classNames={{
        months: styles.months(),
        month: styles.month(),
        month_caption: styles.month_caption(),
        caption_label: styles.caption_label(),
        nav: styles.nav(),
        button_previous: styles.button_previous(),
        button_next: styles.button_next(),
        month_grid: styles.month_grid(),
        weekdays: styles.weekdays(),
        weekday: styles.weekday(),
        week: styles.week(),
        day: styles.day(),
        day_button: styles.day_button(),
        range_start: styles.range_start(),
        range_end: styles.range_end(),
        selected: styles.selected(),
        today: styles.today(),
        outside: styles.outside(),
        disabled: styles.disabled(),
        range_middle: styles.range_middle(),
        hidden: styles.hidden(),
        footer: styles.footer(),
        ...classNames,
      }}
      components={{
        Chevron: ChevronIcon,
      }}
      {...rest}
    />
  );
};

export namespace Calendar {
  export type Props = CalendarProps;
}
