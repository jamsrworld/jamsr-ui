import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { HTMLAttributes } from "react";
import { TItem } from "./default";
import Item from "./Item";

type Props = {
  item: TItem;
} & HTMLAttributes<HTMLDivElement>;

export const SortableItem = ({ item, ...props }: Props) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: item.id,
  });

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  };

  return (
    <Item
      item={item}
      ref={setNodeRef}
      style={styles}
      isOpacityEnabled={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};
