import { useEffect, useRef } from "react";

/**
 * Custom hook that returns the previous value of a state or prop.
 *
 * @param value - The current value you want to track.
 * @returns The previous value of the provided state or prop.
 */
export const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T>(value);
  useEffect(() => {
    ref.current = value; // Update the ref with the current value
  }, [value]);
  return ref.current; // Return the previous value
};
