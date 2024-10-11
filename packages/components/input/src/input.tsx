import { Button } from "@jamsr-ui/button";
import { EyeClosedIcon, EyeOpenIcon } from "@jamsr-ui/shared-icons";
import { type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useId, useMemo } from "react";
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
    getStartContentProps,
    getEndContentProps,
    children,
    getNotationProps,
    hasNotation,
    labelPlacement,
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
          rounded
          size="sm"
        >
          {!showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </Button>
      )) ||
      (mask === "percent" && "%") ||
      endContent;

    return !content ? null : <div {...getEndContentProps()}>{content}</div>;
  }, [
    endContent,
    getEndContentProps,
    handleChangeInputType,
    isSecuredText,
    mask,
    showPassword,
  ]);

  const getLabel = useMemo(() => {
    return (
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
        {labelPlacement !== "inside" && getLabel}
        <div {...getInputWrapperProps()}>
          {labelPlacement === "inside" && getLabel}
          <div {...getInnerWrapperProps()}>
            {getStartContent}
            {children}
            <InputComponent id={id} {...getInputProps()} />
            {getEndContent}
          </div>
        </div>
      </div>
      <div {...getHelperProps()}>{helperText}</div>
    </Component>
  );
};
