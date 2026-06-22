export type VariantOptions<T> = {
  [K in keyof T]: {
    options: (Exclude<T[K], undefined> extends boolean
      ? "true" | "false"
      : Exclude<T[K], undefined | boolean>)[];
    defaultValue: Exclude<T[K], undefined> extends boolean
      ? "true" | "false"
      : Exclude<T[K], undefined | boolean>;
    label?: string;
  };
};
