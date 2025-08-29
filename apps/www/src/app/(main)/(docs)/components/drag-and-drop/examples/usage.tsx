"use client";

import {
  Card,
  CardContent,
  IconButton,
  Sortable,
  type SortableItemProps,
} from "@jamsr-ui/react";
import { useState } from "react";

const defaultItems = [
  {
    id: "2",
    imageUrl: `https://picsum.photos/id/2/300/200`,
  },
  {
    id: "15",
    imageUrl: `https://picsum.photos/id/15/300/200`,
  },
  {
    id: "20",
    imageUrl: `https://picsum.photos/id/20/300/200`,
  },
  {
    id: "24",
    imageUrl: `https://picsum.photos/id/24/300/200`,
  },
  {
    id: "32",
    imageUrl: `https://picsum.photos/id/13/300/200`,
  },
  {
    id: "35",
    imageUrl: `https://picsum.photos/id/48/300/200`,
  },
  {
    id: "39",
    imageUrl: `https://picsum.photos/id/40/300/200`,
  },
  {
    id: "43",
    imageUrl: `https://picsum.photos/id/43/300/200`,
  },
  {
    id: "46",
    imageUrl: `https://picsum.photos/id/46/300/200`,
  },
  {
    id: "52",
    imageUrl: `https://picsum.photos/id/52/300/200`,
  },
  {
    id: "56",
    imageUrl: `https://picsum.photos/id/60/300/200`,
  },
];

export type SortItem = {
  id: string;
  imageUrl: string;
};

type ItemProps = SortableItemProps & { item: SortItem };

const Item = (props: ItemProps) => {
  const {
    attributes,
    isDragging,
    listeners,
    setActivatorNodeRef,
    setNodeRef,
    styles,
    item,
    isDisabled,
  } = props;
  return (
    <div className="group relative">
      <div
        suppressHydrationWarning
        ref={setNodeRef}
        style={styles}
        {...attributes}
      >
        {/*  eslint-disable-next-line @next/next/no-img-element */}
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
      <IconButton
        label="Reorder"
        className="absolute left-2 top-2 hidden group-hover:flex"
        size="xs"
        ref={setActivatorNodeRef}
        isDisabled={isDisabled}
        {...listeners}
      >
        <svg viewBox="0 0 20 20" width="12" color="currentColor">
          <path
            fill="currentColor"
            d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"
          />
        </svg>
      </IconButton>
    </div>
  );
};

type Props = {
  isDisabled?: boolean;
};

export const DndGrid = (props: Props) => {
  const { isDisabled = false } = props;
  const [items, setItems] = useState<SortItem[]>(defaultItems);

  const onValueChange = (items: SortItem[]) => {
    setItems(items);
    console.log("🚀 ~ items:->", items);
  };
  return (
    <Card>
      <CardContent className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Sortable
          value={items}
          onValueChange={onValueChange}
          isDisabled={isDisabled}
        >
          {(props) => <Item {...props} />}
        </Sortable>
      </CardContent>
    </Card>
  );
};
