"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import { Button, Drawer } from "@jamsr-ui/react";

export const DrawerDefault = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Click Me!</Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onClose}
      >
        HIi i am drawer
      </Drawer>
    </div>
  );
};
