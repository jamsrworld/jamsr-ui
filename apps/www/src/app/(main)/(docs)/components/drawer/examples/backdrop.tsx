"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Repeater,
  type DrawerProps,
} from "@jamsr-ui/react";

const DrawerItem = (props: Partial<DrawerProps> & { btnText: string }) => {
  const { isOpen, onClose, setIsOpen, onOpen } = useDisclosure();
  const { btnText, ...restProps } = props;
  return (
    <div>
      <Button onClick={onOpen}>{btnText}</Button>
      <Drawer {...restProps} isOpen={isOpen} onOpenChange={setIsOpen}>
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

export const DrawerBackdrop = () => {
  const backdrops: NonNullable<DrawerProps["backdrop"]>[] = [
    "transparent",
    "opaque",
    "blur",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {backdrops.map((backdrop) => (
        <DrawerItem
          btnText={`backdrop ${backdrop}`}
          key={backdrop}
          backdrop={backdrop}
        />
      ))}
    </div>
  );
};
