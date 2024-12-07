import { IconButton } from "@jamsr-ui/icon-button";
import { EditorIcon } from "./Icon";
import type { IconTypes } from "./Icon/icons";

export default function ToolbarItem({
  icon,
  title,
  onClick,
  isActive = () => false,
  isDisabled,
  ...props
}: {
  icon: IconTypes;
  title?: string;
  onClick?: () => void;
  isActive?: () => boolean;
  isDisabled?: () => boolean;
}) {
  return (
    <IconButton
      aria-label={title!}
      onClick={onClick}
      title={title}
      size="sm"
      variant={isActive() ? "solid" : "light"}
      disabled={isDisabled?.()}
      {...props}
      type="button"
    >
      <EditorIcon name={icon} />
    </IconButton>
  );
}
