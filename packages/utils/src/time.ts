import { addMinutes } from "date-fns";

export const fDateTime = (date: Date | string) => addMinutes(new Date(date), 2);
