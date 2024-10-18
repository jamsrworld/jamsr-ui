import { useCallback, useRef, useState } from "react";

type Props = {
  numberOfDigits?: number;
};

export const OTPInput = (props: Props) => {
  const { numberOfDigits = 4 } = props;
  const [otp, setOtp] = useState<string[]>(new Array(numberOfDigits).fill(""));
  const otpRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
  ) => {
    const newOtp = [...otp];
    newOtp[idx] = e.target.value;
    setOtp(newOtp);
    if (e.target.value) {
      const next = otpRefs.current[idx + 1];
      console.log("next:->", next);
      otpRefs.current[idx + 1]?.focus();
    }
  };

  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number,
  ) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;
    const targetValue = target.value;
    console.log("target:->", target);

    //
    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      return otpRefs.current[idx + 1]?.focus();
    }
    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      return otpRefs.current[idx - 1]?.focus();
    }

    // select all the text on focus
    target.setSelectionRange(0, targetValue.length);

    if (e.key !== "Backspace" || targetValue !== "") {
      // otpRefs.current[idx - 1]?.focus();
      // return;
    }

    return otpRefs.current[idx - 1]?.focus();
  };

  const ref = useCallback((el: HTMLInputElement | null, idx: number) => {
    if (el) otpRefs.current[idx] = el;
  }, []);
  return (
    <div className="flex gap-2">
      {otp.map((_, idx) => (
        <input
          key={idx}
          type="text"
          className="size-12 rounded border-2 border-divider text-center text-base outline-none hover:border-gray-400 focus:border-primary"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={numberOfDigits}
          ref={(el) => ref(el, idx)}
          value={otp[idx]}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleOnKeyDown(e, idx)}
        />
      ))}
    </div>
  );
};
