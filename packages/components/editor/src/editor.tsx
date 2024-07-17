import { EditorContent } from "@tiptap/react";
import { EditorMenuBar } from "./components/menu-bar";
import "./styles/index.css";
import type { UseEditorProps } from "./use-editor";
import { useEditor } from "./use-editor";

export type EditorProps = UseEditorProps;

export const Editor = (props: EditorProps) => {
  const {
    Component,
    getBaseProps,
    getEditorProps,
    getContentProps,
    getHelperTextProps,
    editor,
    helperText,
  } = useEditor(props);

  return (
    <Component {...getBaseProps()}>
      <div {...getEditorProps()}>
        {editor && <EditorMenuBar editor={editor} />}
        <EditorContent editor={editor} {...getContentProps()} />
      </div>
      {helperText && <div {...getHelperTextProps()}>{helperText}</div>}
    </Component>
  );
};
