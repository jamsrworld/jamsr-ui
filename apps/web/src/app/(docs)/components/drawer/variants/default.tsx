"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import { Button, Drawer, Repeater, type DrawerProps } from "@jamsr-ui/react";
import Link from "next/link";

export const DrawerDefault = (props: Partial<DrawerProps>) => {
  const { isOpen, onClose, setIsOpen, onOpen } = useDisclosure();
  const { size, anchor } = props;
  return (
    <div>
      <Button onClick={onOpen}>{size ?? anchor ?? "Click Me!"}</Button>
      <Drawer
        isOpen={isOpen}
        className="flex flex-col gap-4 p-8"
        onOpenChange={setIsOpen}
        {...props}
      >
        <Button onClick={onClose}>Close</Button>
        <Link href="/components/accordion">Home</Link>
        <Repeater count={10}>
          <p className="mb-2 text-gray-600">
            NATURAL AND RECYCLED MATERIALS R-LENO - Recycled wool Soft,
            comfortable and light Designed to last a long time Resistant and
            easily washable materials Waterproof To accompany you everywhere
            even in case of small showers Sole - Natural and recycled rubber
            Soft, non-slip and comfortable Insole - Removable Removable
            ergonomic Drytech™
          </p>
        </Repeater>
        <p className="mb-2 text-gray-600">
          This one specifically is the most simplest setup you can have, just a
          simple drawer with a trigger.
        </p>
      </Drawer>
    </div>
  );
};
