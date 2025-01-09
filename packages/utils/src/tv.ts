import { removeAttrsFromObject } from "./object";

export type SlotsToClasses<S extends string> = {
  [key in S]?: string;
};

export const mapPropsVariants = <
  T extends object,
  R extends readonly (keyof T)[],
>(
  props: T,
  variantKeys: R,
): [Omit<T, R[number]>, Pick<T, R[number]>] => {
  const propsWithKeysRemoved = removeAttrsFromObject(props, [...variantKeys]);

  const removedKeys: Pick<T, R[number]> = {} as Pick<T, R[number]>;
  variantKeys.forEach((key) => {
    if (key in props) {
      removedKeys[key] = props[key];
    }
  });

  return [propsWithKeysRemoved, removedKeys];
};
