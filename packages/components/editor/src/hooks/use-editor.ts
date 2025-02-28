import { useControlledState, useHover, useIsDisabled } from "@jamsr-ui/hooks";
import { useUIConfig } from "@jamsr-ui/config";
import {
  cn,
  dataAttr,
  deepMergeProps,
  formLabelProps,
  mapPropsVariants,
  mergeGlobalProps,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import CodeBlock from "@tiptap/extension-code-block-lowlight";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Youtube from "@tiptap/extension-youtube";
import type { EditorOptions, JSONContent, HTMLContent } from "@tiptap/react";
import { useEditor as useEditorBase } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { all, createLowlight } from "lowlight";
import type { ComponentProps } from "react";
import { useCallback, useEffect } from "react";
import { ExtendedImage } from "../components/extensions/image";
import { ImageUpload } from "../components/extensions/image-upload";
import type { ImageUploadProps } from "../components/extensions/image-upload/view/image-upload";
import {
  editorVariants,
  type EditorVariantsProps,
  type EditorVariantsSlots,
} from "../styles";
import Typography from "@tiptap/extension-typography";

type Props = EditorVariantsProps & {
  value?: JSONContent | HTMLContent;
  defaultValue?: JSONContent | HTMLContent;
  onValueChange?: (content: JSONContent | HTMLContent) => void;
  options?: Partial<EditorOptions>;
  placeholder?: string;
  classNames?: SlotsToClasses<EditorVariantsSlots>;
  helperText?: React.ReactNode;
  isInvalid?: boolean;
  extensionsProps?: {
    imageUpload?: Partial<ImageUploadProps>;
  };
  label?: string;
  disabled?: boolean;
  isDisabled?: boolean;
  isFormControl?: boolean;
  contentType?: "json" | "html" | "text";
};

export type UseEditorProps = UIProps<"div", Props>;
export const useEditor = ($props: UseEditorProps) => {
  const { editor: _globalProps = {}, globalConfig } = useUIConfig();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    editorVariants.variantKeys,
  );

  const {
    defaultValue,
    onValueChange,
    value: propValue,
    options,
    placeholder = "Write something...",
    classNames,
    helperText,
    as,
    className,
    extensionsProps,
    label,
    disabled = false,
    isDisabled: propIsDisabled = false,
    isFormControl = false,
    contentType = "json",
    ...restProps
  } = props;

  const Component = as ?? "div";
  const [value = {}, setValue] = useControlledState(
    defaultValue,
    propValue,
    onValueChange,
  );
  const { isDisabled, ref: disableRef } = useIsDisabled<HTMLInputElement>({
    isDisabled: propIsDisabled || disabled,
    isFormControl,
  });
  const { isHovered, ref: hoverRef } = useHover<HTMLDivElement>({
    isDisabled,
  });
  const lowlight = createLowlight(all);

  const editor = useEditorBase({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      TaskList,
      TaskItem,
      Underline,
      Superscript,
      Text,
      Typography,
      Link.configure({
        openOnClick: false,
      }),
      ExtendedImage.configure({
        inline: true,
      }),
      ImageUpload.configure({
        props: extensionsProps?.imageUpload,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Subscript,
      Placeholder.configure({
        placeholder,
      }),
      CodeBlock.configure({
        lowlight,
      }),
      Youtube.configure({
        controls: false,
        nocookie: true,
      }),
    ],
    immediatelyRender: false,
    onCreate({ editor }) {
      if (value) {
        editor.commands.setContent(value);
      }
    },
    onUpdate({ editor }) {
      const value =
        (contentType === "json" && editor.getJSON()) ||
        (contentType === "html" && editor.getHTML()) ||
        editor.getText();
      setValue?.(value);
    },
    ...options,
  });

  useEffect(() => {
    editor?.setEditable(!isDisabled);
  }, [isDisabled]);

  const handleOnClick = useCallback(() => {
    editor?.commands.focus();
  }, [editor?.commands]);

  const styles = editorVariants({
    ...variantProps,
    className,
  });

  const getBaseProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "base",
        "data-component": "editor",
        "data-disabled": dataAttr(isDisabled),
        "aria-disabled": dataAttr(isDisabled),
        "data-focused": dataAttr(editor?.isFocused),
        "data-hovered": dataAttr(isHovered),
        ...props,
        className: styles.base({
          className: cn(classNames?.base, className),
        }),
        ref: hoverRef,
        ...restProps,
      };
    },
    [
      className,
      classNames?.base,
      editor?.isFocused,
      hoverRef,
      isDisabled,
      isHovered,
      restProps,
      styles,
    ],
  );

  const getEditorProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props = {}) => {
      return {
        "data-slot": "editor",
        ...props,
        className: styles.editor({
          className: cn(classNames?.editor, props.className),
        }),
        ...restProps,
      };
    },
    [classNames?.editor, restProps, styles],
  );

  const getContentProps: PropGetter = useCallback(
    (props = {}) => {
      return {
        "data-slot": "content",
        ...props,
        className: styles.content({
          className: cn(classNames?.content),
        }),
        ...restProps,
        onClick: handleOnClick,
      };
    },
    [classNames?.content, handleOnClick, restProps, styles],
  );

  const getHelperTextProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props = {}) => {
      return {
        "data-slot": "helper-text",
        ...props,
        className: styles.helperText({
          className: cn(classNames?.helperText, props.className),
        }),
        ...restProps,
      };
    },
    [classNames?.helperText, restProps, styles],
  );

  const getLabelProps: PropGetter<ComponentProps<"label">> = useCallback(
    (props = {}) => {
      return {
        "data-slot": "label",
        ...formLabelProps(),
        ...props,
        className: styles.label({
          className: cn(classNames?.label, props.className),
        }),
        onClick: handleOnClick,
      };
    },
    [classNames?.label, handleOnClick, styles],
  );

  const getInputProps: PropGetter<ComponentProps<"input">> = useCallback(
    (props) => {
      return {
        ...props,
        ref: disableRef,
      };
    },
    [disableRef],
  );

  return {
    label,
    editor,
    Component,
    getBaseProps,
    getEditorProps,
    getContentProps,
    getHelperTextProps,
    getLabelProps,
    helperText,
    getInputProps,
    isDisabled,
  };
};
