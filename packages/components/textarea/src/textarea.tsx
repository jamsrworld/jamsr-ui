import { forwardRefUI } from "@jamsr-ui/utils";
import { useId, useMemo } from "react";
import { useTextarea, type UseTextareaProps } from "./use-textarea";

export type TextareaProps = UseTextareaProps;

export const Textarea = forwardRefUI<"textarea", TextareaProps>(
  (props, ref) => {
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
    } = useTextarea(props);
    const id = useId();

    const getStartContent = useMemo(() => {
      const content = startContent;
      return !content ? null : (
        <div className="text-foreground-muted pl-2 empty:hidden">{content}</div>
      );
    }, [startContent]);

    const getEndContent = useMemo(() => {
      return !endContent ? null : (
        <div className="text-foreground-muted pr-2">{endContent}</div>
      );
    }, [endContent]);

    return (
      <Component
        data-component="textarea"
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
          <div {...getTextareaWrapperProps()}>
            <div {...getInnerWrapperProps()}>
              {getStartContent}
              <TextareaComponent
                id={id}
                {...getTextareaProps()}
              />
              {getEndContent}
            </div>
          </div>
        </div>
        <div {...getHelperProps()}>{helperText}</div>
      </Component>
    );
  },
);
Textarea.displayName = "UI.Textarea";
