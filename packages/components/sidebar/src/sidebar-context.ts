import { createContext, type SlotsToClasses } from "@jamsr-ui/utils";
import { type SidebarSlots, type sidebar } from "./styles";

export type SidebarContextType = {
  styles: ReturnType<typeof sidebar>;
  classNames?: SlotsToClasses<SidebarSlots>;
};

export const [SidebarProvider, useSidebarContext] =
  createContext<SidebarContextType>({
    name: "SidebarContext",
    strict: true,
  });
