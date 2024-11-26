"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Repeater,
} from "@jamsr-ui/react";

export const DrawerCustomize = () => {
  const { isOpen, onClose, setIsOpen, onOpen } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Click Me!</Button>
      <Drawer
        classNames={{
          header: "bg-red-500",
          body: "bg-content2",
          footer: "bg-content3",
          closeButton: "bg-red-900",
          base: "border-2 border-red-950",
          backdrop: "bg-gray-900/20",
        }}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        slotProps={{
          closeButton: {
            size: "sm",
          },
        }}
      >
        <DrawerHeader>Product Filter</DrawerHeader>
        <DrawerBody>
          <Repeater repeat={3}>
            <p className="mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              laborum optio quo reiciendis odio facilis quos adipisci unde eum
              vero perspiciatis, minima iste doloribus voluptatibus officia
              dicta, maxime, placeat qui.
            </p>
          </Repeater>
        </DrawerBody>
        <DrawerFooter>
          <Button onClick={onClose} variant="light">
            Cancel
          </Button>
          <Button onClick={onClose} color="success">
            Apply
          </Button>
        </DrawerFooter>
      </Drawer>
    </div>
  );
};
