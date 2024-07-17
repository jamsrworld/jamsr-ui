import { EditorContent } from "@tiptap/react";
import { EditorMenuBar } from "./components/menu-bar";
import type { UseEditorProps } from "./hooks/use-editor";
import { useEditor } from "./hooks/use-editor";
import "./styles/index.css";

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
