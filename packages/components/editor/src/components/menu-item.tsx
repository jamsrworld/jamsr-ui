import { Button } from "@jamsr-ui/button";
import { EditorIcon } from "./Icon";
import type { IconTypes } from "./Icon/icons";

export default function ToolbarItem({
  icon,
  title,
  onClick,
  isActive = () => false,
  ...props
}: {
  icon: IconTypes;
  title?: string;
  onClick?: () => void;
  isActive?: () => boolean;
}) {
  return (
    <Button
      isIconOnly
      type="button"
      onClick={onClick}
      title={title}
      aria-label={title}
      size="sm"
      variant={isActive() ? "solid" : "light"}
      {...props}
    >
      <EditorIcon name={icon} />
    </Button>
  );
}
