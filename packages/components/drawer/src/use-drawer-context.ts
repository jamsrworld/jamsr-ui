import { createContext } from "@jamsr-ui/utils";
import { type DrawerProps } from "./drawer";
import { type drawer } from "./styles";

export type DrawerContextType = {
  styles: ReturnType<typeof drawer>;
  classNames: DrawerProps["classNames"];
  slotProps: DrawerProps["slotProps"];
};

export const [DrawerProvider, useDrawerContext] =
  createContext<DrawerContextType>({
    name: "Drawer",
    strict: true,
  });
