import { Button } from "@jamsr-ui/button";
import { CloseIcon, EyeClosedIcon, EyeOpenIcon } from "@jamsr-ui/shared-icons";
import { type ComponentPropsWithAs } from "@jamsr-ui/utils";
import React, { useId, useMemo } from "react";
import { useInput, type UseInputProps } from "./use-input";

export type InputProps = UseInputProps;
export const Input = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, InputProps>,
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
    getStartContentProps,
    getEndContentProps,
    children,
    getNotationProps,
    hasNotation,
    variant,
    getContentWrapperProps,
    getClearButtonProps,
    isClearable,
    hasValue,
    showClearButton,
  } = useInput(props);
  const id = useId();

  const getStartContent = useMemo(() => {
    return !startContent ? null : (
      <div {...getStartContentProps()}>{startContent}</div>
    );
  }, [getStartContentProps, startContent]);

  const getEndContent = useMemo(() => {
    const content =
      (isSecuredText === true && (
        <Button
          isIconOnly
          onClick={handleChangeInputType}
          variant="light"
          size="sm"
          isRounded
        >
          {!showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </Button>
      )) ||
      endContent;

    const contents = [];
    if (showClearButton ?? (isClearable && hasValue)) {
      contents.push(
        <Button
          isIconOnly
          variant="light"
          size="xs"
          isRounded
          {...getClearButtonProps()}
        >
          <CloseIcon width={12} height={12} />
        </Button>,
      );
    }
    contents.push(content);

    return !contents.length ? null : (
      <div {...getEndContentProps()}>
        {contents.map((item, idx) => (
          <React.Fragment key={idx}>{item}</React.Fragment>
        ))}
      </div>
    );
  }, [
    endContent,
    getClearButtonProps,
    getEndContentProps,
    handleChangeInputType,
    hasValue,
    isClearable,
    isSecuredText,
    showClearButton,
    showPassword,
  ]);

  const getLabel = useMemo(() => {
    return !label ? null : (
      <div {...getLabelWrapperProps()}>
        <label htmlFor={id} {...getLabelProps()}>
          {label} {hasNotation && <span {...getNotationProps()}>*</span>}
        </label>
        {labelHelper}
      </div>
    );
  }, [
    getLabelProps,
    getLabelWrapperProps,
    getNotationProps,
    hasNotation,
    id,
    label,
    labelHelper,
  ]);

  return (
    <Component data-component="input" {...getBaseProps()}>
      <div {...getMainWrapperProps()}>
        {variant === "standard" && getLabel}
        <div {...getInputWrapperProps()}>
          {variant === "outlined" && getLabel}
          <div {...getInnerWrapperProps()}>
            {getStartContent}
            <div {...getContentWrapperProps()}>
              {children}
              <InputComponent id={id} {...getInputProps()} />
            </div>
            {getEndContent}
          </div>
        </div>
      </div>
      {helperText && <div {...getHelperProps()}>{helperText}</div>}
    </Component>
  );
};
