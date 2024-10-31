import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Props = {
  inputType?: "tel" | "text" | "password" | "number";
  placeholder?: string;
  className?: string;
  value?: string;
  numberOfDigits?: number;
  onValueChange: (value: string) => void;
  autoFocus?: boolean;
};

export const OTPInput = (props: Props) => {
  const {
    numberOfDigits = 4,
    inputType = "text",
    value,
    onValueChange,
    className,
    placeholder,
    autoFocus,
  } = props;

  const [otp, setOtp] = useState<string>("");
  console.log("otp:->", otp);
  const valueItems = useMemo(() => {
    const valueArray = otp.split("");
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
  }, [numberOfDigits, otp]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, numberOfDigits);
  }, [numberOfDigits]);

  useEffect(() => {
    if (autoFocus) {
      inputRefs.current[0]?.focus();
    }
  }, [autoFocus]);

  const isNumInput = inputType === "number" || inputType === "tel";

  const isInputValueValid = useCallback(
    (value: string) => {
      const isValidType = isNumInput
        ? /^[0-9]*$/.test(value)
        : typeof value === "string";
      return isValidType && value.length === 1;
    },
    [isNumInput],
  );

  const focusInput = (idx: number) => {
    inputRefs.current[idx]?.focus();
  };

  const changeCodeAtIdx = (idx: number, value: string) => {
    const newOtp = [...otp];
    newOtp[idx] = value || " ";
    const newValue = newOtp.join("");
    setOtp(newValue);
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
    const { code, key } = e;
    const target = e.target as HTMLInputElement;
    const targetValue = target.value;

    // React don't trigger on change when same value is entered so handle change onKeyDown
    if (key === otp[idx]) {
      e.preventDefault();
      focusInput(idx + 1);
      return;
    }

    switch (code) {
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

    // when user input new char it overwrite the current char
    target.setSelectionRange(0, target.value.length);
  };

  const ref = useCallback((el: HTMLInputElement | null, idx: number) => {
    if (el) inputRefs.current[idx] = el;
  }, []);

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData?.getData("text/plain");
    if (!text) return;
    const newOtp = text.slice(0, numberOfDigits);
    setOtp(newOtp);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>, idx: number) => {
    const prevValue = inputRefs.current[idx - 1]?.value;
    if (!prevValue) {
      focusInput(idx - 1);
    }
    e.target.setSelectionRange(0, e.target.value.length);
  };

  return (
    <div className="flex gap-2">
      {valueItems.map((digit, idx) => (
        <input
          key={idx}
          type="text"
          className="size-12 rounded border-2 border-divider text-center text-base outline-none hover:border-gray-400 focus:border-primary"
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
  );
};
