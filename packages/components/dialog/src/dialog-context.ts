import { createContext } from "@jamsr-ui/utils";
import { type UseDialog } from "./use-dialog";

type ContextType = ReturnType<typeof UseDialog>;

export const [DialogProvider, useDialogContext] = createContext<ContextType>({
  name: "DialogContext",
  strict: true,
  errorMessage: "useDialogContext must be used within a Dialog",
});
