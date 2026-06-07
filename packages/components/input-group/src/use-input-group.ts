"use client";

import { useCallback, useMemo } from "react";

import {
  useFocus,
  useFocusVisible,
  useHover,
  useMergeRefs,
} from "@jamsrui/hooks";
import { useFieldContext } from "@jamsrui/textfield";
import { dataAttr } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { InputGroupInput } from "./input-group-input";
import type { InputGroupPrefix } from "./input-group-prefix";
import type { InputGroupRoot } from "./input-group-root";
import type { InputGroupSuffix } from "./input-group-suffix";

export const useInputGroup = (props: useInputGroup.Props) => {
  const { ref, ...elementProps } = props;
  const ctx = useFieldContext();
  const isDisabled = ctx?.isDisabled ?? false;
  const isInvalid = ctx?.isInvalid ?? false;

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

  const getRootProps = useCallback(
    (): InputGroupRoot.Props => ({
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
      ...elementProps,
    }),
    [
      elementProps,
      isDisabled,
      isFocusVisible,
      isFocused,
      isHovered,
      isInvalid,
      refs,
    ],
  );

  const getPrefixProps: PropGetter<InputGroupPrefix.Props> = useCallback(
    (props) => ({
      "data-slot": "prefix",
      ...props,
    }),
    [],
  );

  const getSuffixProps: PropGetter<InputGroupSuffix.Props> = useCallback(
    (props) => ({
      "data-slot": "suffix",
      ...props,
    }),
    [],
  );

  const getInputProps: PropGetter<InputGroupInput.Props> = useCallback(
    (props) => ({
      "data-slot": "input",
      ref: inputRefs,
      ...props,
    }),
    [inputRefs],
  );

  return useMemo(
    () => ({
      getRootProps,
      getPrefixProps,
      getSuffixProps,
      getInputProps,
      inputRefs,
    }),
    [getRootProps, getPrefixProps, getSuffixProps, getInputProps, inputRefs],
  );
};

export namespace useInputGroup {
  export interface Props extends UIProps<"div"> {}
}
