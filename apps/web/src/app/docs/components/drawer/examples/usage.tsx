"use client";

import { Button } from "jamsrui/button";
import { Drawer } from "jamsrui/drawer";

export const DrawerUsage = (props: Drawer.Props) => {
  return (
    <Drawer
      swipeDirection="down"
      {...props}
    >
      <Drawer.Trigger render={<Button>Press Me!</Button>} />
      <Drawer.Content>
        <Drawer.Bar />
        <Drawer.Title>Product Filter</Drawer.Title>
        <Drawer.Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
          laborum optio quo reiciendis odio facilis quos adipisci unde eum vero
          perspiciatis, minima iste doloribus voluptatibus officia dicta,
          maxime, placeat qui.
        </Drawer.Description>
        <Drawer.Footer>
          <Drawer.Close render={<Button variant="light">Cancel</Button>} />
          <Drawer.Close render={<Button color="success">Apply</Button>} />
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
};
