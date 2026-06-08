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

export const DrawerSize = () => {
  const sizes: NonNullable<Drawer.Props["size"]>[] = [
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "full",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => (
        <DrawerItem
          btnText={`Size ${size}`}
          key={size}
          size={size}
        />
      ))}
    </div>
  );
};
