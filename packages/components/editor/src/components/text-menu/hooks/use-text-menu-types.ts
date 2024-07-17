import type { Editor } from "@tiptap/react";
import type { IconTypes } from "../../Icon/icons";

export type TextPickerOption = {
  label: string;
  id: string;
  type: "option";
  isDisabled: () => boolean;
  isActive: () => boolean;
  onClick: () => void;
  icon: IconTypes;
};

export type TextPickerCategory = {
  label: string;
  id: string;
  type: "category";
};

export type TextPickerOptions = Array<TextPickerOption | TextPickerCategory>;

export const useTextTypes = (editor: Editor) => {
  return [
    {
      type: "category",
      label: "Hierarchy",
      id: "hierarchy",
    },
    {
      type: "option",
      icon: "paragraph",
      onClick: () => editor.chain().focus().setParagraph().run(),
      label: "Paragraph",
      id: "paragraph",
      isDisabled: () => !editor.can().setParagraph(),
      isActive: () => editor.isActive("paragraph"),
    },
    {
      type: "option",
      icon: "h-1",
      onClick: () => editor.chain().focus().setHeading({ level: 1 }).run(),
      label: "Heading 1",
      id: "heading-1",
      isDisabled: () => !editor.can().setHeading({ level: 1 }),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      type: "option",
      icon: "h-2",
      onClick: () => editor.chain().focus().setHeading({ level: 2 }).run(),
      label: "Heading 2",
      id: "heading-2",
      isDisabled: () => !editor.can().setHeading({ level: 2 }),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      type: "option",
      icon: "h-3",
      onClick: () => editor.chain().focus().setHeading({ level: 3 }).run(),
      label: "Heading 3",
      id: "heading-3",
      isDisabled: () => !editor.can().setHeading({ level: 3 }),
      isActive: () => editor.isActive("heading", { level: 3 }),
    },
    {
      type: "option",
      icon: "h-4",
      onClick: () => editor.chain().focus().setHeading({ level: 4 }).run(),
      label: "Heading 4",
      id: "heading-4",
      isDisabled: () => !editor.can().setHeading({ level: 4 }),
      isActive: () => editor.isActive("heading", { level: 4 }),
    },
    {
      type: "option",
      icon: "h-5",
      onClick: () => editor.chain().focus().setHeading({ level: 5 }).run(),
      label: "Heading 5",
      id: "heading-5",
      isDisabled: () => !editor.can().setHeading({ level: 5 }),
      isActive: () => editor.isActive("heading", { level: 5 }),
    },
    {
      type: "option",
      icon: "h-6",
      onClick: () => editor.chain().focus().setHeading({ level: 6 }).run(),
      label: "Heading 6",
      id: "heading-6",
      isDisabled: () => !editor.can().setHeading({ level: 6 }),
      isActive: () => editor.isActive("heading", { level: 6 }),
    },
    {
      type: "category",
      label: "Lists",
      id: "lists",
    },
    {
      type: "option",
      icon: "list-unordered",
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      label: "Unordered List",
      id: "list-unordered",
      isDisabled: () => !editor.can().toggleBulletList(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      type: "option",
      icon: "list-ordered",
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      label: "Ordered List",
      id: "ordered-list",
      isDisabled: () => !editor.can().toggleOrderedList(),
      isActive: () => editor.isActive("orderedList"),
    },
    {
      type: "option",
      icon: "list-check-2",
      onClick: () => editor.chain().focus().toggleTaskList().run(),
      label: "Todo List",
      id: "todo-list",
      isDisabled: () => !editor.can().toggleTaskList(),
      isActive: () => editor.isActive("taskList"),
    },
  ] satisfies TextPickerOptions;
};
