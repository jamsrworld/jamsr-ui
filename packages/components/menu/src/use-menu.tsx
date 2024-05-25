import { createContext, useContext } from "react";

export const MenuContext = createContext<{
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}>({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => {},
  setHasFocusInside: () => {},
  isOpen: false,
});

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("MenuItem component must be wrapped inside <Menu />");
  }
  return context;
};
