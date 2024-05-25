import { FloatingTree, useFloatingParentNodeId } from "@floating-ui/react";
import { forwardRef } from "react";
import { MenuComponent, type MenuProps } from "./menu-component";

export const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const parentId = useFloatingParentNodeId();
  if (parentId === null) {
    return (
      <FloatingTree>
        <MenuComponent
          {...props}
          ref={ref}
        />
      </FloatingTree>
    );
  }
  return (
    <MenuComponent
      {...props}
      ref={ref}
    />
  );
});

Menu.displayName = "UI.Menu";
