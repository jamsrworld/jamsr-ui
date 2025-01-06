/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

import { removeAttrsFromObject } from "./object";

export type SlotsToClasses<S extends string> = {
  [key in S]?: string;
};

export type PropsWithVariants<T extends Record<string, unknown>, P> = {
  [K in keyof T]: T[K] | ((props: P) => T[K]);
};

type RemovesFunction<T> = T extends (...args: any[]) => any ? never : T;
type RemoveFunctions<T> = {
  [K in keyof T]: RemovesFunction<T[K]>;
};

export const convertVariantsWithFn = <
  T extends Record<string, unknown>,
  P extends Record<string, unknown>,
>(
  variants: T,
  props: P,
): RemoveFunctions<T> => {
  const convertedVariants = {} as T;
  for (const key in variants) {
    const value = variants[key];
    // Check if the value is a function, if so, call it with props, else use the value directly
    convertedVariants[key] =
      typeof value === "function"
        ? (value as (p: P) => T[typeof key])(props)
        : value;
  }

  return convertedVariants;
};

export const mapPropsVariants = <
  T extends Record<string, unknown>,
  R extends readonly (keyof T)[],
>(
  props: T,
  variantKeys: R,
): [
  Omit<T, R[number] | "className" | "classNames"> &
    RemoveFunctions<{
      className: T["className"];
      classNames: T["classNames"];
    }>,
  RemoveFunctions<Pick<T, R[number]>>,
] => {
  const propsWithKeysRemoved = removeAttrsFromObject(props, [
    "className",
    "classNames",
    ...variantKeys,
  ]);

  const removedKeys: Pick<T, R[number]> = {} as Pick<T, R[number]>;
  variantKeys.forEach((key) => {
    if (key in props) {
      removedKeys[key] = props[key];
    }
  });

  const classes = {
    className: props.className,
    classNames: props.classNames,
  };

  return [
    {
      ...propsWithKeysRemoved,
      ...convertVariantsWithFn(classes, classes),
    } as any,
    convertVariantsWithFn(removedKeys, removedKeys),
  ];
};
