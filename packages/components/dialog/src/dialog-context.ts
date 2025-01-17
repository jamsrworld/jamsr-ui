import { createContext } from "@jamsr-ui/utils";
import { type UseDialog } from "./use-dialog";

export type DialogContextType = ReturnType<typeof UseDialog>;

export const [DialogProvider, useDialogContext] =
  createContext<DialogContextType>({
    name: "DialogContext",
    strict: true,
    errorMessage: "useDialogContext must be used within a Dialog",
  });
