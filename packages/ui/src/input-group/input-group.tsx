"use client";

import { createContext, use, useMemo } from "react";

import { InputGroup as InputGroupUI } from "@jamsrui/react";

import { inputGroupStyles } from "./styles";

import { cn, type VariantProps } from "tailwind-variants";

type InputGroupVariants = VariantProps<typeof inputGroupStyles>;

const InputGroupContext = createContext<{
  styles: ReturnType<typeof inputGroupStyles>;
} | null>(null);

const useInputGroupContext = () => {
  const context = use(InputGroupContext);
  if (!context) {
    throw new Error("useInputGroupContext must be used within an InputGroup");
  }
  return context;
};

export const InputGroup = (props: InputGroup.Props) => {
  const { className, variant, ...restProps } = props;
  const styles = inputGroupStyles({ variant });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <InputGroupContext value={value}>
      <InputGroupUI {...restProps} className={styles.root({ className })} />
    </InputGroupContext>
  );
};

export namespace InputGroup {
  export interface Props extends InputGroupUI.Props, InputGroupVariants {}
}

export const InputGroupPrefix = (props: InputGroupPrefix.Props) => {
  const { styles } = useInputGroupContext();
  return (
    <InputGroupUI.Prefix
      {...props}
      className={styles.prefix({ className: props.className })}
    />
  );
};

export const InputGroupSuffix = (props: InputGroupSuffix.Props) => {
  const { styles } = useInputGroupContext();
  return (
    <InputGroupUI.Suffix
      {...props}
      className={styles.suffix({ className: props.className })}
    />
  );
};

export const InputGroupInput = (props: InputGroupUI.Input) => {
  const { styles } = useInputGroupContext();
  return (
    <InputGroupUI.Input
      {...props}
      className={styles.input({ className: cn(props.className) })}
    />
  );
};

export namespace InputGroupPrefix {
  export interface Props extends InputGroupUI.Prefix {}
}

export namespace InputGroupSuffix {
  export interface Props extends InputGroupUI.Suffix {}
}
