import { useControlledState } from "@jamsr-ui/hooks";
import { cn } from "@jamsr-ui/utils";
import CharacterCount from "@tiptap/extension-character-count";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import type { EditorOptions, JSONContent } from "@tiptap/react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useRef } from "react";
import MenuBar from "./components/menu-bar";
import "./styles/editor.css";

export type EditorProps = {
  value?: JSONContent;
  defaultValue?: JSONContent;
  onValueChange?: (content: JSONContent) => void;
  options: Partial<EditorOptions>;
  placeholder?: string;
  classNames?: {
    wrapper?: string;
    editor?: string;
  };
};

export const Editor = (props: EditorProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    defaultValue,
    onValueChange,
    value: propValue,
    options,
    placeholder = "Write something...",
    classNames,
  } = props;

  const [value = {}, setValue] = useControlledState({
    prop: propValue,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Highlight,
      TaskList,
      TaskItem,
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

  const handleOnClick = () => {
    editor?.commands.focus();
  };

  return (
    <div
      className={cn(
        "editor rounded-2xl border-2 border-divider p-2",
        classNames?.wrapper,
      )}
    >
      {editor && <MenuBar editor={editor} />}
      <EditorContent
        editor={editor}
        className={cn(
          "min-h-[200px] border-t border-divider py-2",
          classNames?.editor,
        )}
        ref={ref}
        onClick={handleOnClick}
      />
    </div>
  );
};
