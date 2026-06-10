"use client";

import { createContext, use, useMemo } from "react";

import { useRender } from "@base-ui/react/use-render";
import {
  useFocus,
  useFocusVisible,
  useHover,
  useMergeRefs,
} from "@jamsrui/hooks";
import { dataAttr } from "@jamsrui/utils";

import { Input as LocalInput } from "../input";
import { TextArea as LocalTextArea } from "../textarea";
import { inputGroupStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type InputGroupVariants = VariantProps<typeof inputGroupStyles>;

interface InputGroupContextProps {
  styles: ReturnType<typeof inputGroupStyles>;
  inputRefs: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
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
  const { className, variant, size, radius, ref, render, ...restProps } = props;
  const styles = inputGroupStyles({ variant, size, radius });

  const isDisabled = false;
  const isInvalid = false;
  const { isFocused, ref: focusRef } = useFocus<HTMLInputElement>({
    isDisabled,
  });
  const { isFocusVisible, ref: focusVisibleRef } =
    useFocusVisible<HTMLInputElement>({
      isDisabled,
    });
  const { isHovered, ref: hoverRef } = useHover<HTMLDivElement>({
    isDisabled,
  });
  const refs = useMergeRefs([ref, hoverRef]);
  const inputRefs = useMergeRefs([focusRef, focusVisibleRef]);

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
    "data-disabled": dataAttr(isDisabled),
    "data-invalid": dataAttr(isInvalid),
    "aria-disabled": dataAttr(isDisabled),
    "aria-invalid": dataAttr(isInvalid),
    onMouseDown: handleOnMouseDown,
    ref: refs,
    ...restProps,
    className: styles.root({ className }),
  };

  const renderElement = useRender({
    defaultTagName: "div",
    props: rootProps,
    render,
  });

  const value = useMemo(() => ({ styles, inputRefs }), [styles, inputRefs]);

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

export const InputGroupInput = (props: LocalInput.Props) => {
  const { styles, inputRefs } = useInputGroupContext();
  const { ref, className, ...rest } = props;
  const mergedRefs = useMergeRefs([
    ref,
    inputRefs as React.Ref<HTMLInputElement>,
  ]);
  return (
    <LocalInput
      ref={mergedRefs}
      className={styles.input({ className: className as string })}
      data-slot="input"
      {...rest}
    />
  );
};

export const InputGroupTextArea = (props: LocalTextArea.Props) => {
  const { styles, inputRefs } = useInputGroupContext();
  const { ref, className, ...rest } = props;
  const mergedRefs = useMergeRefs([
    ref,
    inputRefs as React.Ref<HTMLTextAreaElement>,
  ]);
  return (
    <LocalTextArea
      ref={mergedRefs}
      className={styles.input({ className: className as string })}
      data-slot="input"
      {...rest}
    />
  );
};
