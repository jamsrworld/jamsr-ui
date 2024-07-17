import { useControlledState } from "@jamsr-ui/hooks";
import {
  cn,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import CharacterCount from "@tiptap/extension-character-count";
import { Color } from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import type { EditorOptions, JSONContent } from "@tiptap/react";
import { useEditor as useEditorBase } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import type { ComponentProps, ComponentPropsWithoutRef } from "react";
import { useCallback } from "react";
import ImageResize from 'tiptap-extension-resize-image';

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
    ...restProps
  } = props;

  const Component = as ?? "div";
  const [value = {}, setValue] = useControlledState({
    prop: propValue,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const editor = useEditorBase({
    extensions: [
      StarterKit.configure(),
      Highlight,
      TaskList,
      TaskItem,
      TextStyle,
      Color,
      Underline,
      Superscript,
      Link,
      ImageResize,
      Image.configure({
        inline: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Subscript,
      FontFamily,
      CharacterCount.configure({
        limit: 10000,
      }),
      Placeholder.configure({
        placeholder,
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

  // editor?.chain().focus()

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
