import { Calendar as CalendarRoot } from "./calendar";

import type { CalendarVariants } from "./styles";

export const Calendar = CalendarRoot;

export namespace Calendar {
  export type Variants = CalendarVariants;
  export type Props = CalendarRoot.Props;
}
