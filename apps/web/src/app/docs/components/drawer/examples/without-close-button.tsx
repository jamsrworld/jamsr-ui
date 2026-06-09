"use client";

import { Button } from "jamsrui/button";
import { Drawer } from "jamsrui/drawer";

export const DrawerWithoutCloseButton = (props: Drawer.Props) => {
  return (
    <Drawer {...props}>
      <Drawer.Trigger render={<Button>Click Me!</Button>} />
      <Drawer.Content>
        <Drawer.Title>Product Filter</Drawer.Title>
        <Drawer.Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
          laborum optio quo reiciendis odio facilis quos adipisci unde eum vero
          perspiciatis, minima iste doloribus voluptatibus officia dicta,
          maxime, placeat qui.
        </Drawer.Description>
      </Drawer.Content>
    </Drawer>
  );
};
