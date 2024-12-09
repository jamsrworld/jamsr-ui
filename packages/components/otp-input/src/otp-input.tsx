import {
  useControlledState,
  useIsDisabled,
  useMergeRefs,
} from "@jamsr-ui/hooks";
import { useUIStyle } from "@jamsr-ui/styles";
import { dataAttr, deepMergeProps, type SlotsToClasses } from "@jamsr-ui/utils";
import {
  type InputHTMLAttributes,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
} from "react";
import {
  otpInput,
  type OtpInputSlots,
  type OtpInputVariantProps,
} from "./styles";

export type OtpInputProps = OtpInputVariantProps & {
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  numberOfDigits?: number;
  autoFocus?: boolean;
  className?: string;
  classNames?: SlotsToClasses<OtpInputSlots>;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  isNumeric?: boolean;
  isInvalid?: boolean;
  onBlur?: InputHTMLAttributes<HTMLInputElement>["onBlur"];
  helperText?: string;
  isDisabled?: boolean;
  disabled?: boolean;
};

export const OtpInput = ($props: OtpInputProps) => {
  const { otpInput:  Props = {}, globalConfig } = useUIStyle();
  const props = deepMergeProps(Props, $props, globalConfig);

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
    classNames,
    disabled = false,
    isDisabled: propIsDisabled = false,
    radius,
  } = props;

  const { isDisabled, ref: disableRef } = useIsDisabled<HTMLInputElement>({
    isDisabled: propIsDisabled || disabled,
  });

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

  const refs = useMergeRefs([disableRef]);
  const ref = useCallback(
    (el: HTMLInputElement | null, idx: number) => {
      if (el) {
        inputRefs.current[idx] = el;
        refs?.(el);
      }
    },
    [refs],
  );

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

  const styles = otpInput({
    className,
    isInvalid,
    radius,
  });

  const id = useId();
  return (
    <div
      data-component="otp-input"
      data-disabled={dataAttr(isDisabled)}
      aria-disabled={dataAttr(isDisabled)}
      data-slot="base"
      className={styles?.base({ className: classNames?.base })}
      onBlur={onBlur}
    >
      <div className={styles.wrapper({ className: classNames?.wrapper })}>
        {label && (
          <label
            htmlFor={id}
            className={styles?.label({ className: classNames?.label })}
            data-slot="label"
          >
            {label}
          </label>
        )}
        <div
          className={styles.inputsWrapper({
            className: classNames?.inputsWrapper,
          })}
        >
          {valueItems.map((digit, idx) => (
            <input
              data-disabled={dataAttr(isDisabled)}
              aria-disabled={dataAttr(isDisabled)}
              disabled={isDisabled}
              {...inputProps}
              placeholder={placeholder}
              key={idx}
              className={styles?.input({ className: classNames?.input })}
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
      </div>
      {helperText && (
        <div
          className={styles?.helperText({ className: classNames?.helperText })}
          data-slot="helper-text"
        >
          {helperText}
        </div>
      )}
    </div>
  );
};
