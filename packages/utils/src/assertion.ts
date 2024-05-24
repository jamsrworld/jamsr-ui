type Booleanish = boolean | "true" | "false";
export const dataAttr = (condition: boolean | undefined) =>
  (condition ? "true" : undefined) as Booleanish;

export const isString = (value: unknown): value is string => typeof value === "string";

export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === "boolean";
};

export const isTrue = (value: boolean) => value === true;

export const isEmpty = (value: unknown) => {
  if (typeof value === "object" && value !== null) {
    return Object.keys(value).length === 0;
  }
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (!value) return true;
  return false;
};

export const getBoolean = (value: boolean) => value;

export const isDecNum = (t: string | number) => /^\d+(\.\d+)?$/.test(t.toString());
