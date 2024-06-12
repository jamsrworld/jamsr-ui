import { Button } from "@jamsr-ui/button";
import { EyeClosed, EyeOpen } from "@jamsr-ui/shared-icons";
import { forwardRefUI } from "@jamsr-ui/utils";
import React, { useId, useMemo, type ForwardedRef } from "react";
import { useInput, type UseInputProps } from "./use-input";

export type InputProps<T extends boolean> = UseInputProps<T>;

const InputInner = <T extends boolean>(
  props: InputProps<T>,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const {
    Component,
    InputComponent,
    label,
    helperText,
    startContent,
    endContent,
    isSecuredText,
    showPassword,
    mask,
    getBaseProps,
    getLabelWrapperProps,
    getLabelProps,
    labelHelper,
    getInputProps,
    getInputWrapperProps,
    getHelperProps,
    getInnerWrapperProps,
    handleChangeInputType,
    getMainWrapperProps,
  } = useInput(props);
  const id = useId();

  const getStartContent = useMemo(() => {
    const content = startContent;
    return !content ? null : (
      <div className="pl-2 text-foreground-muted empty:hidden">{content}</div>
    );
  }, [startContent]);

  const getEndContent = useMemo(() => {
    const content =
      (isSecuredText === true && (
        <Button
          isIconOnly
          onClick={handleChangeInputType}
          variant="link"
          rounded
        >
          {!showPassword ? <EyeOpen /> : <EyeClosed />}
        </Button>
      )) ||
      (mask === "percent" && "%") ||
      endContent;

    return !content ? null : (
      <div className="pr-2 text-foreground-muted">{content}</div>
    );
  }, [endContent, handleChangeInputType, isSecuredText, mask, showPassword]);

  return (
    <Component
      data-component="input"
      ref={ref}
      {...getBaseProps()}
    >
      <div {...getMainWrapperProps()}>
        <div {...getLabelWrapperProps()}>
          <label
            htmlFor={id}
            {...getLabelProps()}
          >
            {label}
          </label>
          {labelHelper}
        </div>
        <div {...getInputWrapperProps()}>
          <div {...getInnerWrapperProps()}>
            {getStartContent}
            <InputComponent
              id={id}
              {...getInputProps()}
            />
            {getEndContent}
          </div>
        </div>
      </div>
      <div {...getHelperProps()}>{helperText}</div>
    </Component>
  );
};

export const Input = forwardRefUI(InputInner) as <T extends boolean>(
  props: InputProps<T>,
) => React.ReactNode;