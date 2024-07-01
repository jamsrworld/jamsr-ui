import { FloatingTree, useFloatingParentNodeId } from "@floating-ui/react";
import { MenuComponent, type MenuProps } from "./menu-component";

export const Menu = (props: MenuProps) => {
  const parentId = useFloatingParentNodeId();
  if (parentId === null) {
    return (
      <FloatingTree>
        <MenuComponent {...props} />
      </FloatingTree>
    );
  }
  return <MenuComponent {...props} />;
};
