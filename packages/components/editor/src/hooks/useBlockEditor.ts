import type { Editor } from "@tiptap/react";
import { useEditor } from "@tiptap/react";

import { ExtensionKit } from "@/extensions/extension-kit";
import type { TiptapProps } from "@/components/BlockEditor/types";
import { useSidebar } from "./useSidebar";

declare global {
  interface Window {
    editor: Editor | null;
  }
}

export const useBlockEditor = ({ content, onUpdate }: TiptapProps) => {
  const leftSidebar = useSidebar();

  const editor = useEditor(
    {
      autofocus: true,
      onCreate: ({ editor }) => {
        if (content) {
          editor.commands.setContent(content);
        }
      },
      onUpdate: ({ editor }) => {
        if (onUpdate) {
          onUpdate(editor.getJSON());
        }
      },
      extensions: [...ExtensionKit()],
      editorProps: {
        attributes: {
          autocomplete: "off",
          autocorrect: "off",
          autocapitalize: "off",
          class: "min-h-full",
        },
      },
    },
    [],
  );

  const characterCount = editor?.storage.characterCount || {
    characters: () => 0,
    words: () => 0,
  };
  window.editor = editor;

  return { editor, characterCount, leftSidebar };
};
