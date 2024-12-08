import { createContext, useContext } from "react";
import { type MenuProps } from "./menu-component";
import { type menuVariants } from "./styles";

export type MenuContextType = {
  getItemProps: (
    userProps?: React.HTMLProps<HTMLElement>,
  ) => Record<string, unknown>;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  classNames?: MenuProps["classNames"];
  styles: ReturnType<typeof menuVariants>;
};
export const MenuContext = createContext<MenuContextType>({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => {},
  setHasFocusInside: () => {},
  isOpen: false,
  styles: {} as unknown as MenuContextType["styles"],
});

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("MenuItem component must be wrapped inside <Menu />");
  }
  return context;
};
