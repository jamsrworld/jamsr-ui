import { IconButton } from "@jamsr-ui/icon-button";
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
    slots,
    classNames,
    getLegendProps,
    getErrorMessageProps,
    errorMessage,
    isInvalid,
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
        <IconButton
          label={showPassword ? "Show Password" : "Hide Password"}
          onClick={handleChangeInputType}
          variant="light"
          size="sm"
          radius="full"
        >
          {!showPassword
            ? (slots.eyeOpenIcon ?? (
                <EyeOpenIcon className={classNames?.icon} />
              ))
            : (slots.eyeClosedIcon ?? (
                <EyeClosedIcon className={classNames?.icon} />
              ))}
        </IconButton>
      )) ||
      endContent;

    const contents = [];
    if (content) contents.push(content);

    if (showClearButton ?? (isClearable && hasValue)) {
      contents.push(
        <IconButton
          label="Clear"
          variant="solid"
          size="xs"
          radius="full"
          {...getClearButtonProps()}
        >
          {slots.clearIcon ?? (
            <CloseIcon className={classNames?.icon} width={12} height={12} />
          )}
        </IconButton>,
      );
    }
    return !contents.length ? null : (
      <div {...getEndContentProps()}>
        {contents.map((item, idx) => (
          <React.Fragment key={idx}>{item}</React.Fragment>
        ))}
      </div>
    );
  }, [
    classNames?.icon,
    endContent,
    getClearButtonProps,
    getEndContentProps,
    handleChangeInputType,
    hasValue,
    isClearable,
    isSecuredText,
    showClearButton,
    showPassword,
    slots.clearIcon,
    slots.eyeClosedIcon,
    slots.eyeOpenIcon,
  ]);

  const getLabel = useMemo(() => {
    if (!label) return null;
    if (variant === "standard") {
      return (
        <div {...getLabelWrapperProps()}>
          <label htmlFor={id} {...getLabelProps()}>
            {label} {hasNotation && <span {...getNotationProps()}>*</span>}
          </label>
          {labelHelper}
        </div>
      );
    }
    return (
      <label htmlFor={id} {...getLabelProps()}>
        {label} {hasNotation && <span {...getNotationProps()}>*</span>}
      </label>
    );
  }, [
    getLabelProps,
    getLabelWrapperProps,
    getNotationProps,
    hasNotation,
    id,
    label,
    labelHelper,
    variant,
  ]);

  const Fieldset = (variant === "outlined"
    ? "fieldset"
    : "div") as unknown as "div";

  return (
    <Component data-component="input" {...getBaseProps()}>
      <div {...getMainWrapperProps()}>
        {variant === "standard" && getLabel}
        <Fieldset {...getInputWrapperProps()}>
          {(variant === "outlined" ||
            variant === "underlined" ||
            variant === "bordered") &&
            getLabel}
          {variant === "outlined" && (
            <legend {...getLegendProps()}>{label}</legend>
          )}
          <div {...getInnerWrapperProps()}>
            {getStartContent}
            <div {...getContentWrapperProps()}>
              {children}
              <InputComponent id={id} {...getInputProps()} />
            </div>
            {getEndContent}
          </div>
        </Fieldset>
      </div>
      {helperText && <div {...getHelperProps()}>{helperText}</div>}
      {isInvalid && <div {...getErrorMessageProps()}>{errorMessage}</div>}
    </Component>
  );
};
