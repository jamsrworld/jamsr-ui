"use client";

import { createContext, use, useMemo } from "react";

import { Input as InputPrimitive } from "@base-ui/react/input";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps, useFocusRing, useHover } from "react-aria";

import { inputGroupStyles } from "./styles";
import { dataAttr } from "../utils/attr";

import type { ComponentProps, DOMAttributes } from "react";
import type { VariantProps } from "tailwind-variants";

type InputGroupVariants = VariantProps<typeof inputGroupStyles>;

interface InputGroupContextProps {
  styles: ReturnType<typeof inputGroupStyles>;
  focusProps: DOMAttributes<any>;
}

const InputGroupContext = createContext<InputGroupContextProps | null>(null);

const useInputGroupContext = () => {
  const context = use(InputGroupContext);
  if (!context) {
    throw new Error("useInputGroupContext must be used within an InputGroup");
  }
  return context;
};

export const InputGroup = (props: InputGroup.Props) => {
  const { className, variant, size, radius, render, ...restProps } = props;
  const styles = inputGroupStyles({ variant, size, radius });

  const { isFocused, focusProps, isFocusVisible } = useFocusRing({});
  const { isHovered, hoverProps } = useHover({});

  const handleOnMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    // return if direct clicked on input, textarea
    if (target.closest("input, textarea")) {
      return;
    }

    const input = e.currentTarget.querySelector<
      HTMLInputElement | HTMLTextAreaElement
    >("input, textarea");
    if (input) {
      input.focus();
      e.preventDefault();
    }
  };

  const rootProps = {
    "data-component": "input-group",
    "data-slot": "root",
    "data-focused": dataAttr(isFocused),
    "data-focus-visible": dataAttr(isFocusVisible),
    "data-hovered": dataAttr(isHovered),
    ...mergeProps(hoverProps, restProps, {
      onMouseDown: handleOnMouseDown,
    }),
    className: styles.root({ className }),
  };

  const renderElement = useRender({
    defaultTagName: "div",
    props: rootProps,
    render,
  });

  const value = useMemo(() => ({ styles, focusProps }), [focusProps, styles]);

  return <InputGroupContext value={value}>{renderElement}</InputGroupContext>;
};

export namespace InputGroup {
  export interface Props
    extends useRender.ComponentProps<"div">, InputGroupVariants {}
}

export const InputGroupPrefix = (props: InputGroupPrefix.Props) => {
  const { styles } = useInputGroupContext();
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      "data-slot": "prefix",
      className: styles.prefix({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace InputGroupPrefix {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const InputGroupSuffix = (props: InputGroupSuffix.Props) => {
  const { styles } = useInputGroupContext();
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      "data-slot": "suffix",
      className: styles.suffix({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace InputGroupSuffix {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const InputGroupInput = (
  props: Omit<InputPrimitive.Props, "size"> & { size?: "sm" | "md" | "lg" },
) => {
  const { styles, focusProps } = useInputGroupContext();
  const { className, size: _size, ...restProps } = props;
  return (
    <InputPrimitive
      className={styles.input({ className: className as string })}
      data-slot="input"
      {...mergeProps(focusProps, restProps)}
    />
  );
};

export const InputGroupTextArea = (props: InputGroupTextArea.Props) => {
  const { styles, focusProps } = useInputGroupContext();
  const { className, defaultValue, onValueChange, ...restProps } = props;
  return (
    <InputPrimitive
      className={styles.input({ className: className as string })}
      data-slot="textarea"
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      render={<textarea {...mergeProps(focusProps, restProps)} />}
    />
  );
};

export namespace InputGroupTextArea {
  export interface Props
    extends
      Omit<InputPrimitive.Props, keyof ComponentProps<"textarea"> | "size">,
      ComponentProps<"textarea"> {}
}
