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
    labelHelper,
    getTextareaProps,
    getTextareaWrapperProps,
    getHelperProps,
    getInnerWrapperProps,
    getMainWrapperProps,
    getStartContentProps,
    getEndContentProps,
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

  return (
    <Component data-component="textarea" {...getBaseProps()}>
      <div {...getMainWrapperProps()}>
        <div {...getLabelWrapperProps()}>
          <label htmlFor={id} {...getLabelProps()}>
            {label}
          </label>
          {labelHelper}
        </div>
        <div {...getTextareaWrapperProps()}>
          <div {...getInnerWrapperProps()}>
            {getStartContent}
            <TextareaComponent id={id} {...getTextareaProps()} />
            {getEndContent}
          </div>
        </div>
      </div>
      <div {...getHelperProps()}>{helperText}</div>
    </Component>
  );
};
