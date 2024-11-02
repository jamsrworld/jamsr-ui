import { useCallback, useEffect, useRef, useState } from "react";
import { useCallbackRef } from "./use-callback-ref";

export const useControlledState2 = <T>(
  defaultValue?: T,
  value?: T,
  onValueChange?: (value: T) => void,
): [T, (newValue: T | ((prevState: T) => T)) => void] => {
  // Internal state for uncontrolled value
  const [uncontrolledValue, setUncontrolledValue] = useState<T>(
    defaultValue ?? (undefined as any),
  );

  // The value is either controlled or falls back to the internal uncontrolled value
  const currentValue = value !== undefined ? value : uncontrolledValue;

  // Setter function that supports both functional updates and direct value assignment
  const setValue = useCallback(
    (newValue: T | ((prevState: T) => T)) => {
      // If onValueChange is provided (controlled), call it
      if (onValueChange) {
        // If newValue is a function, calculate the next state based on the current value
        if (typeof newValue === "function") {
          onValueChange(newValue as any);
          // onValueChange((newValue as (prevState: T) => T)(currentValue));
        } else {
          onValueChange(newValue);
        }
      }
      // If the component is uncontrolled, update the internal state
      if (value === undefined) {
        // Handle functional update or direct assignment for uncontrolled state
        if (typeof newValue === "function") {
          setUncontrolledValue((prevValue: T) =>
            (newValue as (prevState: T) => T)(prevValue),
          );
        } else {
          setUncontrolledValue(newValue);
        }
      }
    },
    [value, currentValue], // Depend on these values to update correctly
  );

  return [currentValue, setValue];
};

type UseControllableStateParams<T> = {
  prop?: T | undefined;
  defaultProp?: T | undefined;
  onChange?: (state: T) => void;
};

type SetStateFn<T> = (prevState?: T) => T;

function useUncontrolledState<T>({
  defaultProp,
  onChange,
}: Omit<UseControllableStateParams<T>, "prop">) {
  const uncontrolledState = useState<T | undefined>(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = useRef(value);
  const handleChange = useCallbackRef(onChange);

  useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value as T);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);

  return uncontrolledState;
}

export function useControlledState<T>(
  defaultProp?: T | undefined,
  prop?: T | undefined,
  onChange?: (state: T) => void,
) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
    defaultProp,
    onChange,
  });
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef(onChange);

  const setValue: React.Dispatch<React.SetStateAction<T | undefined>> =
    useCallback(
      (nextValue) => {
        if (isControlled) {
          const setter = nextValue as SetStateFn<T>;
          const value =
            typeof nextValue === "function" ? setter(prop) : nextValue;
          if (value !== prop) handleChange(value as T);
        } else {
          setUncontrolledProp(nextValue);
        }
      },
      [isControlled, prop, setUncontrolledProp, handleChange],
    );

  return [
    value as T,
    setValue as React.Dispatch<React.SetStateAction<T>>,
  ] as const;
}
