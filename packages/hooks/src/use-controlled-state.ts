import {
  useCallback,
  useState
} from "react";

export const useControlledState = <T>(
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
