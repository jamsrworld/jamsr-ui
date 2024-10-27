"use client";

import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { SortItem } from "./sort-item";
import { SortableItem } from "./sortable-item";
import { restrictToWindowEdges } from "./utils";

const defaultItems = [
  {
    id: 2,
    imageUrl: `https://picsum.photos/id/2/300/200`,
  },
  {
    id: 15,
    imageUrl: `https://picsum.photos/id/15/300/200`,
  },
  {
    id: 20,
    imageUrl: `https://picsum.photos/id/20/300/200`,
  },
  {
    id: 24,
    imageUrl: `https://picsum.photos/id/24/300/200`,
  },
  {
    id: 32,
    imageUrl: `https://picsum.photos/id/13/300/200`,
  },
  {
    id: 35,
    imageUrl: `https://picsum.photos/id/48/300/200`,
  },
  {
    id: 39,
    imageUrl: `https://picsum.photos/id/40/300/200`,
  },
  {
    id: 43,
    imageUrl: `https://picsum.photos/id/43/300/200`,
  },
  {
    id: 46,
    imageUrl: `https://picsum.photos/id/46/300/200`,
  },
  {
    id: 52,
    imageUrl: `https://picsum.photos/id/52/300/200`,
  },
  {
    id: 56,
    imageUrl: `https://picsum.photos/id/60/300/200`,
  },
];

export type TItem = {
  id: number;
  imageUrl: string;
};

export const DndDefault = () => {
  const [items, setItems] = useState<TItem[]>(defaultItems);
  console.log("items:->", items);
  // for drag overlay
  const [activeItem, setActiveItem] = useState<TItem | null>(null);

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
    const activeItem = items.find((item) => item.id === active.id);
    setActiveItem(activeItem ?? null);
  };

  // triggered when dragging ends
  const handleDragEnd = (event: DragEndEvent) => {
    setActiveItem(null);
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
      setItems((prev) => arrayMove<TItem>(prev, activeIndex, overIndex));
    }
    setActiveItem(null);
  };

  const handleDragCancel = () => {
    setActiveItem(null);
  };

  const handleButtonClick = () => {
    const itemIds = items.map((item) => item.id);
    alert(itemIds);
  };

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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(4, 1fr)`,
            gridGap: 16,
            maxWidth: "800px",
            margin: "16px auto 48px",
          }}
        >
          {items.map((item) => (
            <SortableItem key={item.id} item={item} />
          ))}
        </div>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <button
            onClick={handleButtonClick}
            style={{
              appearance: "none",
              fontFamily: "inherit",
              display: "inline-block",
              border: "0",
              borderRadius: "5px",
              background: "#14af21",
              color: "#fff",
              padding: "10px 16px",
              fontSize: "1rem",
              textDecoration: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Save this order
          </button>
        </div>
      </SortableContext>
      <DragOverlay adjustScale style={{ transformOrigin: "0 0 " }}>
        {activeItem ? <SortItem handle item={activeItem} isDragging /> : null}
      </DragOverlay>
    </DndContext>
  );
};
