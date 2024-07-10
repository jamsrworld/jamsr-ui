// @ts-expect-error err
import remixiconUrl from "remixicon/fonts/remixicon.symbol.svg";
import { Button } from "@jamsr-ui/button";

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
  return (
    <Button
      isIconOnly
      type="button"
      onClick={action}
      title={title}
      aria-label={title}
      variant={isActive?.() ? "solid" : "light"}
    >
      <svg fill="currentColor">
        <use xlinkHref={`${remixiconUrl}#ri-${icon}`} />
      </svg>
    </Button>
  );
}
