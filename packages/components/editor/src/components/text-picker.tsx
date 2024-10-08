import { Button } from "@jamsr-ui/button";
import { Menu, MenuItem } from "@jamsr-ui/menu";
import type { Editor } from "@tiptap/react";
import { useTextTypes } from "../hooks/use-text-menu-types";
import { EditorIcon } from "./Icon";

type Props = {
  editor: Editor;
};

export const TextPicker = (props: Props) => {
  const { editor } = props;
  const options = useTextTypes(editor);

  const activeItem = options.find(
    (item) => item.type === "option" && item.isActive(),
  );
  return (
    <Menu
      trigger={
        <Button isIconOnly size="sm" type="button" variant="light">
          <EditorIcon name={activeItem?.icon ?? "paragraph"} />
        </Button>
      }
      classNames={{
        popover: "!z-[999]",
      }}
    >
      {options.map((item) => {
        if (item.type === "category") {
          const { label } = item;
          return (
            <p
              className="text-[10px]  uppercase text-foreground-400"
              key={item.id}
            >
              {label}
            </p>
          );
        }
        if (item.type === "option") {
          const { onClick, icon, isActive, isDisabled, label } = item;
          return (
            <MenuItem
              key={item.id}
              onClick={onClick}
              disabled={isDisabled()}
              startContent={<EditorIcon name={icon} />}
              className={isActive() ? "bg-content2" : ""}
            >
              {label}
            </MenuItem>
          );
        }
        return null;
      })}
    </Menu>
  );
};
