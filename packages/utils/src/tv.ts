import { type ClassNameValue } from "tailwind-merge";

export const mapPropsVariants = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends Record<string, any>,
  K extends keyof T,
>(
  props: T,
  variantKeys?: K[],
  removeVariantProps = true,
): readonly [Omit<T, K> | T, Pick<T, K> | object] => {
  if (!variantKeys) {
    return [props, {}];
  }

  const picked = variantKeys.reduce((acc, key) => {
    // Only include the key in `picked` if it exists in `props`
    if (key in props) {
      return { ...acc, [key]: props[key] };
    }
    return acc;
  }, {});

  if (removeVariantProps) {
    const omitted = Object.keys(props)
      .filter((key) => !variantKeys.includes(key as K))
      .reduce(
        (acc, key) => ({
          ...acc,
          [key]: props[key as keyof T],
        }),
        {},
      );

    return [omitted, picked] as [Omit<T, K>, Pick<T, K>];
  }
  return [props, picked] as [T, Pick<T, K>];
};

export type SlotsToClasses<S extends string> = {
  [key in S]?: ClassNameValue;
};

export * from "tailwind-variants";
