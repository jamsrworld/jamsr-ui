export const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

export const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === "boolean";
};

export const isNumber = (value: unknown): value is number => {
  return typeof value === "number";
};

export const isEmpty = (value: unknown) => {
  if (typeof value === "object" && value !== null) {
    return Object.keys(value).length === 0;
  }
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if(typeof value === "number" && value === 0) return true;
  if (!value) return true;
  return false;
}