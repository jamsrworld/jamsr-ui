"use client";
import { useCallback, useMemo } from "react";

import {
  useControlledState,
  useFocusVisible,
  useHover,
  useMergeRefs,
} from "@jamsrui/hooks";
import { dataAttr, mergeProps } from "@jamsrui/utils";

import type { UIProps } from "@jamsrui/utils";

export const useTextArea = (props: useTextArea.Props) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange,
    ref,
    disabled: isDisabled = false,
    ...elementProps
  } = props;

  const { isHovered, ref: hoverRef } = useHover<HTMLTextAreaElement>({
    isDisabled,
  });
  const { isFocusVisible, ref: focusVisibleRef } =
    useFocusVisible<HTMLTextAreaElement>({
      isDisabled,
    });
  const refs = useMergeRefs([ref, hoverRef, focusVisibleRef]);

  const [value = "", setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: valueProp,
  });

  const handleTextAreaChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    [setValue],
  );

  const getTextAreaProps = useCallback(
    (): UIProps<"textarea"> => ({
      ...mergeProps(elementProps, { onChange: handleTextAreaChange }),
      value,
      ref: refs,
      "data-hovered": dataAttr(isHovered),
      "data-focus-visible": dataAttr(isFocusVisible),
    }),
    [
      elementProps,
      value,
      handleTextAreaChange,
      refs,
      isHovered,
      isFocusVisible,
    ],
  );

  return useMemo(
    () => ({
      getTextAreaProps,
    }),
    [getTextAreaProps],
  );
};

export namespace useTextArea {
  export interface Props extends UIProps<"textarea"> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
  }
}
