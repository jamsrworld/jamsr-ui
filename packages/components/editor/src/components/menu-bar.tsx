import { Divider } from "@jamsr-ui/divider";
import { type Editor } from "@tiptap/react";
import React from "react";
import { useTextMenuCommands } from "../hooks/use-text-menu-commands";
import { useTextMenuState } from "../hooks/use-text-menu-state";
import { CodeBlockPicker } from "./code-block-picker";
import type { IconTypes } from "./Icon/icons";
import { ImagePicker } from "./image-picker";
import { LinkMenuBarItem } from "./link-item";
import ToolbarItem from "./menu-item";
import { TextPicker } from "./text-picker";
import { YoutubeMenuitem } from "./youtube-menuitem";

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
      isDisabled?: () => boolean;
    }
  | { type: "divider" }
  | { type: "custom"; component: React.ReactNode }
)[] => [
  {
    type: "custom",
    component: <TextPicker editor={editor} />,
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
    type: "custom",
    component: (
      <ImagePicker
        isDisabled={() => state.isDisabled}
        onImage={commands.onImageUpload}
      />
    ),
  },
  {
    type: "option",
    icon: "code-view",
    onClick: commands.onCode,
    title: "Code",
    isActive: () => state.isCode,
  },
  {
    type: "custom",
    component: (
      <CodeBlockPicker
        onClick={commands.onCodeBlock}
        isActive={() => state.isCodeBlock}
        isDisabled={() => state.isDisabled}
      />
    ),
  },
  {
    type: "divider",
  },
  {
    type: "custom",
    component: (
      <LinkMenuBarItem
        onLink={commands.onLink}
        isDisabled={() => state.isDisabled}
      />
    ),
  },
  {
    type: "option",
    icon: "unlink",
    isActive: () => false,
    onClick: commands.onUnlink,
    title: "Unlink",
    isDisabled: () => !editor.isActive("link"),
  },
  {
    type: "custom",
    component: (
      <YoutubeMenuitem
        isDisabled={() => state.isDisabled}
        onYoutube={commands.onYoutubeVideo}
      />
    ),
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
  const isDisabled = !editor.isEditable;

  return (
    <div className="flex flex-wrap gap-1 pb-2">
      {menuItems.map((item, idx) => {
        return (
          <React.Fragment key={idx}>
            {item.type === "divider" && <Divider orientation="vertical" />}
            {item.type === "custom" && item.component}
            {item.type === "option" && (
              <ToolbarItem isDisabled={() => isDisabled} {...item} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
