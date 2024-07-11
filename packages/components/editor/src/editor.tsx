import { EditorContent } from "@tiptap/react";
import MenuBar from "./components/menu-bar";
import "./index.css";
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
        {editor && <MenuBar editor={editor} />}
        <EditorContent editor={editor} {...getContentProps()} />
      </div>
      {helperText && <div {...getHelperTextProps()}>{helperText}</div>}
    </Component>
  );
};
