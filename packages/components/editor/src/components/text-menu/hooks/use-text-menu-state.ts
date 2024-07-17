import type { Editor } from "@tiptap/react";

export const useTextMenuState = (editor: Editor) => {
  return {
    isBold: editor.isActive("bold"),
    isItalic: editor.isActive("italic"),
    isStrike: editor.isActive("strike"),
    isUnderline: editor.isActive("underline"),
    isCode: editor.isActive("code"),
    isSubscript: editor.isActive("subscript"),
    isSuperscript: editor.isActive("superscript"),
    isAlignLeft: editor.isActive({ textAlign: "left" }),
    isAlignCenter: editor.isActive({ textAlign: "center" }),
    isAlignRight: editor.isActive({ textAlign: "right" }),
    isAlignJustify: editor.isActive({ textAlign: "justify" }),
    currentColor:
      (editor.getAttributes("textStyle")?.color as string) || undefined,
    currentHighlight:
      (editor.getAttributes("highlight")?.color as string) || undefined,
    currentFont:
      (editor.getAttributes("textStyle")?.fontFamily as string) || undefined,
    currentSize:
      (editor.getAttributes("textStyle")?.fontSize as string) || undefined,
  };
};
