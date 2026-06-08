import { Button } from "jamsrui/button";
import { Drawer } from "jamsrui/drawer";

const DrawerItem = (props: Partial<Drawer.Props> & { btnText: string }) => {
  const { btnText, ...restProps } = props;
  return (
    <Drawer {...restProps}>
      <Drawer.Trigger render={<Button>{btnText}</Button>} />
      <Drawer.Content>
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

export const DrawerAnchors = () => {
  const anchors: NonNullable<Drawer.Props["swipeDirection"]>[] = [
    "left",
    "right",
    "up",
    "down",
  ];
  return (
    <div className="flex gap-4">
      {anchors.map((anchor) => (
        <DrawerItem
          key={anchor}
          swipeDirection={anchor}
          btnText={anchor}
        />
      ))}
    </div>
  );
};
