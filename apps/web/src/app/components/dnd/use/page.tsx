"use client";

import { Repeater } from "@jamsr-ui/react";
import { useState } from "react";

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

const Page = () => {
  const [items, setItems] = useState<TItem[]>(defaultItems);
  console.log("items:->", items);
  return (
    <div className="grid grid-cols-5 gap-4 w-max">
      <Repeater count={20}>
        <div className="size-32 bg-gray-300" />
      </Repeater>
    </div>
  );
};

export default Page;
