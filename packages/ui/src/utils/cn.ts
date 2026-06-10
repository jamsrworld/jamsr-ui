import clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

const tw = extendTailwindMerge({});

export const cn = (...inputs: ClassValue[]) => {
  return tw(clsx(inputs));
};
