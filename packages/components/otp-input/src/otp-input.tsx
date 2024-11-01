import { useControlledState } from "@jamsr-ui/hooks";
import { cn } from "@jamsr-ui/utils";
import {
  type InputHTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";

export type OtpInputProps = {
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  numberOfDigits?: number;
  autoFocus?: boolean;
  className?: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  isNumeric?: boolean;
  isInvalid?: boolean;
  onBlur?: InputHTMLAttributes<HTMLInputElement>["onBlur"];
  helperText?: string;
};

export const OtpInput = (props: OtpInputProps) => {
  const {
    numberOfDigits = 4,
    value: $value,
    onValueChange,
    className,
    placeholder,
    autoFocus,
    defaultValue,
    inputProps,
    isNumeric = true,
    helperText,
    isInvalid,
    label,
    onBlur,
  } = props;

  const [value = "", setValue] = useControlledState(
    defaultValue,
    $value,
    onValueChange,
  );
  const valueItems = useMemo(() => {
    const valueArray = value.split("");
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < numberOfDigits; i++) {
      const char = valueArray[i];
      if (!char) {
        valueArray[i] = "";
      } else if (char) {
        valueArray[i] = char.trim();
      }
    }
    return valueArray;
  }, [numberOfDigits, value]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, numberOfDigits);
  }, [numberOfDigits]);

  useEffect(() => {
    if (autoFocus) {
      inputRefs.current[0]?.focus();
    }
  }, [autoFocus]);
  const isNumInput = isNumeric;

  const isValidValueType = useCallback(
    (value: string) => {
      return isNumInput ? /^[0-9]*$/.test(value) : typeof value === "string";
    },
    [isNumInput],
  );

  const isInputValueValid = useCallback(
    (value: string) => {
      const isValidType = isValidValueType(value);
      return isValidType && value.length === 1;
    },
    [isValidValueType],
  );

  const focusInput = (idx: number) => {
    inputRefs.current[idx]?.focus();
  };

  const changeCodeAtIdx = (idx: number, str: string) => {
    const newOtp = [...value];
    newOtp[idx] = str || " ";
    const newValue = newOtp.join("");
    setValue(newValue);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
  ) => {
    const { value } = e.target;
    if (!isInputValueValid(value)) return;
    changeCodeAtIdx(idx, value);
    focusInput(idx + 1);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number,
  ) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;
    const targetValue = target.value;

    // React don't trigger on change when same value is entered so handle change onKeyDown
    if (key === value[idx]) {
      e.preventDefault();
      focusInput(idx + 1);
      return;
    }

    switch (key) {
      case "Delete":
      case "Backspace":
        if (targetValue === "") {
          changeCodeAtIdx(idx - 1, "");
          focusInput(idx - 1);
        } else {
          changeCodeAtIdx(idx, "");
        }
        break;
      case "ArrowRight":
      case "ArrowUp":
        e.preventDefault();
        focusInput(idx + 1);
        break;
      case "ArrowLeft":
      case "ArrowDown":
        e.preventDefault();
        focusInput(idx - 1);
        break;
      default:
        target.setSelectionRange(0, target.value.length);
        break;
    }
  };

  const ref = useCallback((el: HTMLInputElement | null, idx: number) => {
    if (el) inputRefs.current[idx] = el;
  }, []);

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData?.getData("text/plain");
    if (!text || !isValidValueType(text)) return;
    const newOtp = text.slice(0, numberOfDigits);
    setValue(newOtp);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>, idx: number) => {
    const prevValue = inputRefs.current[idx - 1]?.value;
    if (!prevValue) {
      focusInput(idx - 1);
    }
    e.target.setSelectionRange(0, e.target.value.length);
  };

  return (
    <div>
      {label && <div>{label}</div>}
      <div className="flex gap-2">
        {valueItems.map((digit, idx) => (
          <input
            {...inputProps}
            placeholder={placeholder}
            key={idx}
            className={cn(
              "size-12 rounded border-2 border-divider bg-transparent text-center text-base outline-none hover:border-gray-400 focus:border-primary",
              inputProps?.className,
              className,
            )}
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="\d{1}"
            maxLength={numberOfDigits}
            ref={(el) => ref(el, idx)}
            value={digit}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            onPaste={handlePaste}
            onFocus={(e) => handleFocus(e, idx)}
          />
        ))}
      </div>
      {helperText && <div>{helperText}</div>}
    </div>
  );
};
