import { useControlledState } from "@jamsr-ui/hooks";
import {
  cn,
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
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Youtube from "@tiptap/extension-youtube";
import type { EditorOptions, JSONContent } from "@tiptap/react";
import { useEditor as useEditorBase } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { all, createLowlight } from "lowlight";
import type { ComponentProps, ComponentPropsWithoutRef } from "react";
import { useCallback } from "react";
import { ExtendedImage } from "../components/extensions/image";
import { ImageUpload } from "../components/extensions/image-upload";
import type { ImageUploadProps } from "../components/extensions/image-upload/view/image-upload";
import {
  editorVariants,
  type EditorVariantsProps,
  type EditorVariantsSlots,
} from "../style";

type Props = EditorVariantsProps & {
  value?: JSONContent;
  defaultValue?: JSONContent;
  onValueChange?: (content: JSONContent) => void;
  options?: Partial<EditorOptions>;
  placeholder?: string;
  classNames?: SlotsToClasses<EditorVariantsSlots>;
  helperText?: React.ReactNode;
  isInvalid?: boolean;
  extensionsProps?: {
    imageUpload?: Partial<ImageUploadProps>;
  };
};

export type UseEditorProps = Props & UIProps<"div", keyof Props>;
export const useEditor = (props: UseEditorProps) => {
  const {
    defaultValue,
    onValueChange,
    value: propValue,
    options,
    placeholder = "Write something...",
    classNames,
    helperText,
    isInvalid,
    as,
    className,
    extensionsProps,
    ...restProps
  } = props;

  const Component = as ?? "div";
  const [value = {}, setValue] = useControlledState(
    defaultValue,
    propValue,
    onValueChange,
  );
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
    onCreate({ editor }) {
      if (value) {
        editor.commands.setContent(value);
      }
    },
    onUpdate({ editor }) {
      setValue?.(editor.getJSON());
    },
    ...options,
  });

  const handleOnClick = useCallback(() => {
    editor?.commands.focus();
  }, [editor?.commands]);

  const styles = editorVariants({
    isInvalid,
    className,
  });

  const getBaseProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-component": "editor",
        "data-slot": "base",
        ...props,
        className: styles.base({
          className: cn(classNames?.base, className),
        }),
        ...restProps,
      };
    },
    [className, classNames?.base, restProps, styles],
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

  const getContentProps: PropGetter<ComponentPropsWithoutRef<"div">> =
    useCallback(
      (props = {}) => {
        return {
          "data-slot": "content",
          ...props,
          className: styles.content({
            className: cn(classNames?.content, props.className),
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

  return {
    editor,
    Component,
    getBaseProps,
    getEditorProps,
    getContentProps,
    getHelperTextProps,
    helperText,
  };
};
