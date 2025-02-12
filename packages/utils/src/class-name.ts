/* eslint-disable */
import clsx, { type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { removeAttrsFromObject } from "./object";

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

export function deepMergeProps<T extends object, U extends object>(
  obj1: T,
  obj2: U,
  globalConfig?: Partial<T>,
): U {
  const result = { ...obj1 } as any;
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (key === "className") {
        // For className (string), concatenate the Tailwind classes
        result[key] = cn(result[key], obj2[key] as string);
      } else if (
        key === "classNames" &&
        typeof obj2[key] === "object" &&
        !Array.isArray(obj2[key])
      ) {
        // For classNames (object), merge the properties
        result[key] = { ...result[key] }; // Ensure classNames exists in result
        for (const subKey in obj2[key]) {
          if (obj2[key].hasOwnProperty(subKey)) {
            // Concatenate Tailwind classes for each key
            result[key][subKey] = cn(
              result[key][subKey],
              obj2[key][subKey] as string,
            );
          }
        }
      } else {
        // Otherwise, directly assign obj2's value
        result[key] = obj2[key];
      }
    }
  }
  const output = { ...globalConfig, ...result };
  return output;
}

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

export const mergeGlobalProps = <T extends Record<string, any>>(
  globalProps: Partial<T>,
  props: T,
): T => {
  return deepMergeProps(
    removeAttrsFromObject(globalProps, ["props"]),
    globalProps?.props?.(props),
  );
};

export const renderGlobalChildren = <T extends Record<string, any>>(
  globalProps: T,
  props: T,
) => {
  return globalProps?.children ?? globalProps?.props?.(props);
};
