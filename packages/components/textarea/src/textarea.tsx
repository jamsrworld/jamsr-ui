import { type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useId, useMemo } from "react";
import { useTextarea, type UseTextareaProps } from "./use-textarea";

export type TextareaProps = UseTextareaProps;

export const Textarea = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, TextareaProps>,
) => {
  const {
    Component,
    TextareaComponent,
    label,
    helperText,
    startContent,
    endContent,
    getBaseProps,
    getLabelWrapperProps,
    getLabelProps,
    labelHelperContent,
    getTextareaProps,
    getTextareaWrapperProps,
    getHelperProps,
    getInnerWrapperProps,
    getMainWrapperProps,
    getStartContentProps,
    getEndContentProps,
    variant,
  } = useTextarea(props);
  const id = useId();

  const getStartContent = useMemo(() => {
    const content = startContent;
    return !content ? null : <div {...getStartContentProps()}>{content}</div>;
  }, [getStartContentProps, startContent]);

  const getEndContent = useMemo(() => {
    return !endContent ? null : (
      <div {...getEndContentProps()}>{endContent}</div>
    );
  }, [endContent, getEndContentProps]);

  const getLabel = useMemo(() => {
    return (
      <div {...getLabelWrapperProps()}>
        <label htmlFor={id} {...getLabelProps()}>
          {label}
        </label>
        {labelHelperContent}
      </div>
    );
  }, [getLabelProps, getLabelWrapperProps, id, label, labelHelperContent]);

  return (
    <Component data-component="textarea" {...getBaseProps()}>
      <div {...getMainWrapperProps()}>
        {variant === "standard" && getLabel}
        <div {...getTextareaWrapperProps()}>
          {variant === "outlined" && getLabel}
          <div {...getInnerWrapperProps()}>
            {getStartContent}
            <TextareaComponent id={id} {...getTextareaProps()} />
            {getEndContent}
          </div>
        </div>
      </div>
      {helperText && <div {...getHelperProps()}>{helperText}</div>}
    </Component>
  );
};
