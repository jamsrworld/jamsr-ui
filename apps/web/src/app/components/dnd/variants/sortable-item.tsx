import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { HTMLAttributes } from "react";
import { TItem } from "./default";
import { SortItem } from "./sort-item";

type Props = {
  item: TItem;
  isDisabled?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const SortableItem = ({ item, isDisabled, ...props }: Props) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({
    id: item.id,
    disabled: isDisabled,
  });

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  };

  return (
    <SortItem
      item={item}
      ref={setNodeRef}
      style={styles}
      isOpacityEnabled={isDragging}
      {...props}
      {...attributes}
      listeners={listeners}
      handle
      handleProps={{
        ref: setActivatorNodeRef,
      }}
    />
  );
};
