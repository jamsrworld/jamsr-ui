import clsx, { type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const tw = extendTailwindMerge({
  extend: {
    classGroups: {
      gap: ["gap-responsive"],
      "font-size": ["text-size-inherit"],
      shadow: ["shadow-card"],
    },
  },
});

export const cn = (...inputs: ClassValue[]) => {
  return tw(clsx(inputs));
};
