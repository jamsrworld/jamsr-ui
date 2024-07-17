import type { Editor } from "@tiptap/react";
import { useCallback } from "react";

export const useTextMenuCommands = (editor: Editor) => {
  const onBold = useCallback(
    () => editor.chain().focus().toggleBold().run(),
    [editor],
  );
  const onItalic = useCallback(
    () => editor.chain().focus().toggleItalic().run(),
    [editor],
  );
  const onStrike = useCallback(
    () => editor.chain().focus().toggleStrike().run(),
    [editor],
  );
  const onUnderline = useCallback(
    () => editor.chain().focus().toggleUnderline().run(),
    [editor],
  );
  const onCode = useCallback(
    () => editor.chain().focus().toggleCode().run(),
    [editor],
  );
  const onCodeBlock = useCallback(
    () => editor.chain().focus().toggleCodeBlock().run(),
    [editor],
  );

  const onSubscript = useCallback(
    () => editor.chain().focus().toggleSubscript().run(),
    [editor],
  );
  const onSuperscript = useCallback(
    () => editor.chain().focus().toggleSuperscript().run(),
    [editor],
  );
  const onAlignLeft = useCallback(
    () => editor.chain().focus().setTextAlign("left").run(),
    [editor],
  );
  const onAlignCenter = useCallback(
    () => editor.chain().focus().setTextAlign("center").run(),
    [editor],
  );
  const onAlignRight = useCallback(
    () => editor.chain().focus().setTextAlign("right").run(),
    [editor],
  );
  const onAlignJustify = useCallback(
    () => editor.chain().focus().setTextAlign("justify").run(),
    [editor],
  );

  const onChangeColor = useCallback(
    (color: string) => editor.chain().setColor(color).run(),
    [editor],
  );
  const onClearColor = useCallback(
    () => editor.chain().focus().unsetColor().run(),
    [editor],
  );

  const onChangeHighlight = useCallback(
    (color: string) => editor.chain().setHighlight({ color }).run(),
    [editor],
  );
  const onClearHighlight = useCallback(
    () => editor.chain().focus().unsetHighlight().run(),
    [editor],
  );

  const onLink = useCallback(
    (url: string, inNewTab?: boolean) =>
      editor
        .chain()
        .focus()
        .setLink({ href: url, target: inNewTab ? "_blank" : "" })
        .run(),
    [editor],
  );

  const onSetFont = useCallback(
    (font: string) => {
      if (!font || font.length === 0) {
        return editor.chain().focus().unsetFontFamily().run();
      }
      return editor.chain().focus().setFontFamily(font).run();
    },
    [editor],
  );

  const onHardBreak = useCallback(
    () => editor.chain().focus().setHardBreak().run(),
    [editor],
  );

  const onClearFormat = useCallback(
    () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
    [editor],
  );

  const onUndo = useCallback(
    () => editor.chain().focus().undo().run(),
    [editor],
  );
  const onRedo = useCallback(
    () => editor.chain().focus().redo().run(),
    [editor],
  );

  const onBlockquote = useCallback(
    () => editor.chain().focus().toggleBlockquote().run(),
    [editor],
  );

  const onHorizontalRule = useCallback(
    () => editor.chain().focus().setHorizontalRule().run(),
    [editor],
  );

  const onImage = useCallback(
    (options: { src: string }) =>
      editor
        .chain()
        .focus()
        .setImage({ ...options })
        .run(),
    [editor],
  );

  const onImageUpload = useCallback(() => {
    editor.chain().focus().setImageUpload().run();
  }, [editor]);

  return {
    onBold,
    onItalic,
    onStrike,
    onUnderline,
    onCode,
    onCodeBlock,
    onSubscript,
    onSuperscript,
    onAlignLeft,
    onAlignCenter,
    onAlignRight,
    onAlignJustify,
    onChangeColor,
    onClearColor,
    onChangeHighlight,
    onClearHighlight,
    onSetFont,
    onLink,
    onHardBreak,
    onClearFormat,
    onUndo,
    onRedo,
    onBlockquote,
    onHorizontalRule,
    onImage,
    onImageUpload,
  };
};
