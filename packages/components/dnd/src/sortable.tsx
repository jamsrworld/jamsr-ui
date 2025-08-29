"use client";

import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  type UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { SortableItem, type SortableItemProps } from "./sortable-item";

type Props<T> = {
  items: T[];
  setItems: React.Dispatch<React.SetStateAction<T[]>>;
  children: (_: SortableItemProps & { item: T }) => React.ReactNode;
  isDisabled?: boolean;
  onReorder?: () => void;
};

export const Sortable = <T extends { id: UniqueIdentifier }>(
  props: Props<T>,
) => {
  const { items, children, setItems, isDisabled, onReorder } = props;
  // for drag overlay
  const [activeId, setActiveId] = useState<null | string | number>(null);

  // for input methods detection
  const pointerSensor = useSensor(PointerSensor, {});
  const touchSensor = useSensor(TouchSensor, {});
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });
  const sensors = useSensors(pointerSensor, touchSensor, keyboardSensor);

  // triggered when dragging starts
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id);
  };

  // triggered when dragging ends
  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = event;
    if (!over) return;

    const activeItem = items.find((item) => item.id === active.id);
    const overItem = items.find((item) => item.id === over.id);

    if (!activeItem || !overItem) {
      return;
    }

    const activeIndex = items.findIndex((item) => item.id === active.id);
    const overIndex = items.findIndex((item) => item.id === over.id);

    if (activeIndex !== overIndex) {
      setItems((prev) => {
        const newData = arrayMove<T>(prev, activeIndex, overIndex);
        return newData;
      });
      onReorder?.();
    }
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  const activeItem = items.find((item) => item.id === activeId);
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
      modifiers={[restrictToWindowEdges]}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        {items.map((item) => (
          <SortableItem key={item.id} id={item.id} isDisabled={isDisabled}>
            {(props) => children({ item, ...props })}
          </SortableItem>
        ))}
      </SortableContext>
      <DragOverlay adjustScale style={{ transformOrigin: "0 0 " }}>
        {!!activeItem && children({ item: activeItem })}
      </DragOverlay>
    </DndContext>
  );
};
