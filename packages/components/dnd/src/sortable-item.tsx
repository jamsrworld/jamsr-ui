import {
  type DraggableAttributes,
  type DraggableSyntheticListeners,
} from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

export type SortableItemProps = {
  isDisabled?: boolean;
  styles?: React.CSSProperties;
  listeners?: DraggableSyntheticListeners;
  isDragging?: boolean;
  attributes?: DraggableAttributes;
  setNodeRef?: (node: HTMLElement | null) => void;
  setActivatorNodeRef?: (node: HTMLElement | null) => void;
};

type Props = {
  id: string;
  isDisabled?: boolean;
  children: (props: SortableItemProps) => React.ReactNode;
};

export const SortableItem = (props: Props) => {
  const { id, children, isDisabled = false } = props;
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({
    id,
    disabled: isDisabled,
  });
  const styles = {
    transform: CSS.Transform.toString(transform),
    transition: transition ?? undefined,
    opacity: isDragging ? "0.4" : "1",
    cursor: "default",
    lineHeight: "0.5",
  };
  return (
    <>
      {children({
        isDisabled,
        styles,
        isDragging,
        listeners,
        attributes,
        setNodeRef,
        setActivatorNodeRef,
      })}
    </>
  );
};
