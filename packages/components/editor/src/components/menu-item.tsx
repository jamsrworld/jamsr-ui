import { Button } from "@jamsr-ui/button";
import { Icons } from "./icons";

export default function MenuItem({
  icon,
  title,
  action,
  isActive = null,
}: {
  icon?: string;
  title?: string;
  action?: () => void;
  isActive?: (() => boolean) | null;
}) {
  const svgIcon = icon ? Icons[icon] : null;

  return (
    <Button
      isIconOnly
      type="button"
      onClick={action}
      title={title}
      aria-label={title}
      variant={isActive?.() ? "solid" : "light"}
    >
      {svgIcon}
    </Button>
  );
}
