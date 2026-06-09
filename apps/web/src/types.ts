export type VariantOptions<T> = {
  [K in keyof T]: {
    options: Exclude<T[K], undefined | boolean>[];
    defaultValue: Exclude<T[K], undefined | boolean>;
  };
};
