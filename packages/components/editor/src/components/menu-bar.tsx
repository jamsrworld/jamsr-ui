import { Divider } from "@jamsr-ui/divider";
import { type Editor } from "@tiptap/react";
import { useTextMenuCommands } from "../hooks/use-text-menu-commands";
import { useTextMenuState } from "../hooks/use-text-menu-state";
import { FontColorPicker } from "./font-color-picker";
import { FontFamilyPicker } from "./font-family-picker";
import { FontHighlightPicker } from "./font-highlight-picker";
import type { IconTypes } from "./Icon/icons";
import ToolbarItem from "./menu-item";
import { TextPicker } from "./text-picker";

type Props = {
  editor: Editor;
};

const items = (
  editor: Editor,
  state: ReturnType<typeof useTextMenuState>,
  commands: ReturnType<typeof useTextMenuCommands>,
): (
  | {
      type: "option";
      icon: IconTypes;
      onClick: () => void;
      title: string;
      isActive: () => boolean;
    }
  | { type: "divider" }
  | { type: "custom"; component: React.ReactNode }
)[] => [
  {
    type: "custom",
    component: <TextPicker editor={editor} />,
  },
  {
    type: "custom",
    component: (
      <FontFamilyPicker
        value={state.currentFont ?? ""}
        onChange={commands.onSetFont}
      />
    ),
  },
  {
    type: "option",
    icon: "bold",
    onClick: commands.onBold,
    title: "Bold",
    isActive: () => state.isBold,
  },
  {
    type: "option",
    icon: "italic",
    onClick: commands.onItalic,
    title: "Italic",
    isActive: () => state.isItalic,
  },
  {
    type: "option",
    icon: "underline",
    onClick: commands.onUnderline,
    title: "Underline",
    isActive: () => state.isUnderline,
  },
  {
    type: "option",
    icon: "strikethrough",
    onClick: commands.onStrike,
    title: "Strikethrough",
    isActive: () => state.isStrike,
  },
  { type: "divider" },
  {
    type: "option",
    icon: "code-view",
    onClick: commands.onCode,
    title: "Code",
    isActive: () => state.isCode,
  },
  {
    type: "option",
    icon: "code-box-line",
    onClick: commands.onCodeBlock,
    title: "Code Block",
    isActive: () => state.isCode,
  },
  {
    type: "custom",
    component: (
      <FontColorPicker
        value={state.currentColor ?? ""}
        onChange={commands.onChangeColor}
      />
    ),
  },
  {
    type: "custom",
    component: (
      <FontHighlightPicker
        value={state.currentHighlight ?? ""}
        onChange={commands.onChangeHighlight}
      />
    ),
  },
  {
    type: "divider",
  },
  {
    type: "option",
    icon: "subscript",
    title: "Subscript",
    onClick: commands.onSubscript,
    isActive: () => state.isSubscript,
  },
  {
    type: "option",
    icon: "superscript",
    title: "Superscript",
    onClick: commands.onSuperscript,
    isActive: () => state.isSuperscript,
  },
  {
    type: "divider",
  },
  {
    type: "option",
    icon: "align-left",
    title: "Align Left",
    onClick: commands.onAlignLeft,
    isActive: () => state.isAlignLeft,
  },
  {
    type: "option",
    icon: "align-center",
    title: "Align Center",
    onClick: commands.onAlignCenter,
    isActive: () => state.isAlignCenter,
  },
  {
    type: "option",
    icon: "align-right",
    title: "Align Right",
    onClick: commands.onAlignRight,
    isActive: () => state.isAlignRight,
  },
  {
    type: "option",
    icon: "align-justify",
    title: "Align Justify",
    onClick: commands.onAlignJustify,
    isActive: () => state.isAlignJustify,
  },
  {
    type: "divider",
  },
  {
    type: "option",
    icon: "double-quotes-l",
    title: "Blockquote",
    onClick: commands.onBlockquote,
    isActive: () => false,
  },
  {
    type: "option",
    icon: "separator",
    isActive: () => false,
    title: "Separator",
    onClick: commands.onHorizontalRule,
  },
  {
    type: "option",
    icon: "text-wrap",
    isActive: () => false,
    onClick: commands.onHardBreak,
    title: "Hard Break",
  },
  {
    type: "option",
    icon: "format-clear",
    isActive: () => false,
    onClick: commands.onClearFormat,
    title: "Clear Format",
  },
  {
    type: "divider",
  },
  {
    type: "option",
    icon: "arrow-go-back-line",
    onClick: commands.onUndo,
    title: "Undo",
    isActive: () => false,
  },
  {
    type: "option",
    icon: "arrow-go-forward-line",
    onClick: commands.onRedo,
    title: "Redo",
    isActive: () => false,
  },
];

export const EditorMenuBar = (props: Props) => {
  const { editor } = props;
  const commands = useTextMenuCommands(editor);
  const state = useTextMenuState(editor);

  const menuItems = items(editor, state, commands);

  return (
    <div className="flex flex-wrap gap-1 pb-2">
      {menuItems.map((item) => {
        if (item.type === "divider") {
          return <Divider orientation="vertical" />;
        }

        if (item.type === "custom") {
          return item.component;
        }

        return <ToolbarItem {...item} />;
      })}
    </div>
  );
};
