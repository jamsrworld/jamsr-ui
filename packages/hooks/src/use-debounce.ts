import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, debounce = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, debounce);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, debounce]);
  return debouncedValue;
};
