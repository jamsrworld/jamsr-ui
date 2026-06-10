"use client";

import { createContext, use, useMemo } from "react";

import {
  OTPInput,
  OTPInputContext,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "input-otp";

import { otpInputStyles } from "./styles";
import { dataAttr } from "../utils/attr";

import type { OTPInputProps, SlotProps } from "input-otp";
import type { VariantProps } from "tailwind-variants";

type OtpInputVariants = VariantProps<typeof otpInputStyles>;

const OtpInputContext = createContext<{
  styles: ReturnType<typeof otpInputStyles>;
  isDisabled?: boolean;
  isInvalid?: boolean;
} | null>(null);

const useOtpInputContext = () => {
  const ctx = use(OtpInputContext);
  if (!ctx) {
    throw new Error("useOtpInputContext must be used within an OtpInput");
  }
  return ctx;
};

export type OtpInputRootProps = Omit<OTPInputProps, "render"> &
  OtpInputVariants & {
    maxLength: number;
    ref?: React.Ref<HTMLInputElement>;
    value?: string;
    onChange?: (value: string) => void;
    onValueChange?: (value: string) => void;
    onComplete?: (...args: unknown[]) => unknown;
    isInvalid?: boolean;
  };

export const OtpInput = (props: OtpInputRootProps) => {
  const {
    radius,
    size,
    containerClassName,
    onValueChange,
    onChange,
    disabled,
    children,
    ref,
    variant,
    isInvalid,
    className,
    ...rest
  } = props;
  const styles = otpInputStyles({ variant, radius, size });
  const ctxValue = useMemo(
    () => ({ styles, isDisabled: disabled, isInvalid }),
    [disabled, isInvalid, styles],
  );

  const rootClassName = styles.root({ className: containerClassName });
  const inputClassName = styles.input({ className });

  return (
    <OtpInputContext value={ctxValue}>
      <OTPInput
        {...rest}
        ref={ref}
        className={inputClassName}
        containerClassName={rootClassName}
        data-disabled={dataAttr(disabled)}
        disabled={disabled}
        onChange={(newValue) => {
          onChange?.(newValue);
          onValueChange?.(newValue);
        }}
      >
        {children}
      </OTPInput>
    </OtpInputContext>
  );
};

export namespace OtpInput {
  export interface Props extends OtpInputRootProps {}
}

export const OtpInputGroup = (props: OtpInputGroup.Props) => {
  const { styles } = useOtpInputContext();
  const { className, ...rest } = props;
  return <div {...rest} className={styles.group({ className })} />;
};

export namespace OtpInputGroup {
  export interface Props extends React.ComponentProps<"div"> {}
}

const SlotContent = (props: SlotProps) => {
  const { char, isActive, placeholderChar, hasFakeCaret } = props;
  const { styles } = useOtpInputContext();
  if (char) return char;
  if (placeholderChar) return placeholderChar;
  if (hasFakeCaret || isActive) {
    return <div className={styles.caret()} />;
  }
  return null;
};

export const OtpInputSlot = (props: OtpInputSlot.Props) => {
  const { styles, isDisabled, isInvalid } = useOtpInputContext();
  const { index, className, ...rest } = props;
  const inputContext = use(OTPInputContext);
  const slot = inputContext.slots[index];
  if (!slot) return null;

  return (
    <div
      {...rest}
      className={styles.slot({ className })}
      data-disabled={dataAttr(isDisabled)}
      data-focus-visible={dataAttr(slot.isActive)}
      data-invalid={dataAttr(isInvalid)}
    >
      <SlotContent
        char={slot.char}
        hasFakeCaret={slot.hasFakeCaret}
        isActive={slot.isActive}
        placeholderChar={slot.placeholderChar}
      />
    </div>
  );
};

export namespace OtpInputSlot {
  export interface Props extends React.ComponentProps<"div"> {
    index: number;
  }
}

export const OtpInputSeparator = (props: OtpInputSeparator.Props) => {
  const { styles } = useOtpInputContext();
  const { className, ...rest } = props;
  return <div {...rest} className={styles.separator({ className })} />;
};

export namespace OtpInputSeparator {
  export interface Props extends React.ComponentProps<"div"> {}
}

export { REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS };
