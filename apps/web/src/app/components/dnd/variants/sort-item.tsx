import { DraggableSyntheticListeners } from "@dnd-kit/core";
import { Button } from "@jamsr-ui/react";
import { ComponentProps, CSSProperties } from "react";
import { TItem } from "./default";

type Props = {
  item: TItem;
  isOpacityEnabled?: boolean;
  isDragging?: boolean;
  listeners?: DraggableSyntheticListeners;
  handle?: boolean;
  handleProps?: any;
} & ComponentProps<"div">;

export const SortItem = ({
  item,
  isOpacityEnabled,
  isDragging,
  style,
  ref,
  handle,
  listeners,
  handleProps,
  ...props
}: Props) => {
  const styles: CSSProperties = {
    opacity: isOpacityEnabled ? "0.4" : "1",
    // cursor: isDragging ? "grabbing" : "grab",
    cursor: "default",
    lineHeight: "0.5",
    transform: isDragging ? "scale(1.05)" : "scale(1)",
    ...style,
  };

  return (
    <div className="relative group">
      <div
        suppressHydrationWarning
        ref={ref}
        style={styles}
        {...props}
        {...(handle ? {} : listeners)}
      >
        Hiii there
        <Button>Here i am </Button>
        <img
          src={item.imageUrl}
          alt={`${item.id}`}
          style={{
            borderRadius: "8px",
            boxShadow: isDragging
              ? "none"
              : "rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px",
            maxWidth: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      {handle && (
        <Button
          className="absolute top-2 left-2 hidden group-hover:flex"
          isIconOnly
          size="sm"
          {...handleProps}
          {...listeners}
        >
          <svg viewBox="0 0 20 20" width="12">
            <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
          </svg>
        </Button>
      )}
    </div>
  );
};
