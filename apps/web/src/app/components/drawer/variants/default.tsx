"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import { Button, Drawer } from "@jamsr-ui/react";

export const DrawerDefault = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Click Me!</Button>
      <Drawer isOpen={isOpen} className="max-w-sm p-8" onOpenChange={onClose}>
        <p className="mb-2 text-gray-600">
          NATURAL AND RECYCLED MATERIALS R-LENO - Recycled wool Soft,
          comfortable and light Designed to last a long time Resistant and
          easily washable materials Waterproof To accompany you everywhere even
          in case of small showers Sole - Natural and recycled rubber Soft,
          non-slip and comfortable Insole - Removable Removable ergonomic
          Drytech™
        </p>
        <p className="mb-2 text-gray-600">
          This one specifically is the most simplest setup you can have, just a
          simple drawer with a trigger.
        </p>
      </Drawer>
    </div>
  );
};
