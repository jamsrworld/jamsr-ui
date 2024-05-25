import { createContext } from "@jamsr-ui/utils";

export type SelectContextType = {
  multiple?: boolean;
  value?: string | string[];
  setValue: (value?: string | string[]) => void;
  setOpen: (open: boolean) => void;
  closeOnSelection?: boolean;
};

export const [SelectProvider, useSelectContext] =
  createContext<SelectContextType>({
    name: "Select",
    strict: true,
  });
