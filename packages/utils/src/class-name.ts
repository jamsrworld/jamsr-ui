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

export const mergeClassNames = <T extends Record<string, any>>(
  left?: T,
  right?: T,
) => {
  if (!left && !right) return {} as T;
  if (!left) return right;
  if (!right) return left;
  const merged: T = {} as T;

  for (const key in left) {
    if (right.hasOwnProperty(key)) {
      // @ts-ignore
      merged[key] = cn(left[key], right[key]);
    } else {
      merged[key] = left[key];
    }
  }

  for (const key in right) {
    if (!left.hasOwnProperty(key)) {
      merged[key] = right[key];
    }
  }

  return merged;
};
