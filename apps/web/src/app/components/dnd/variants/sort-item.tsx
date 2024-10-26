import { ComponentProps, CSSProperties } from "react";
import { TItem } from "./default";

type Props = {
  item: TItem;
  isOpacityEnabled?: boolean;
  isDragging?: boolean;
} & ComponentProps<"div">;

export const SortItem = ({
  item,
  isOpacityEnabled,
  isDragging,
  style,
  ref,
  ...props
}: Props) => {
  const styles: CSSProperties = {
    opacity: isOpacityEnabled ? "0.4" : "1",
    cursor: isDragging ? "grabbing" : "grab",
    lineHeight: "0.5",
    transform: isDragging ? "scale(1.05)" : "scale(1)",
    ...style,
  };

  return (
    <div ref={ref} style={styles} {...props}>
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
  );
};
