import { create } from "zustand";
import { type ConfirmationProps } from "./confirmation";

type Options = {
  title: string;
  message: string;
  onCancel?: () => void;
  onConfirm: () => void;
} & ConfirmationProps;

type State = (
  | {
      isOpen: false;
      options: null;
    }
  | {
      isOpen: true;
      options: Options;
    }
) & {
  onClose: () => void;
  confirm: (confirmation: NonNullable<State["options"]>) => void;
};

export const useConfirmation = create<State>()((set) => {
  return {
    isOpen: false,
    options: null,
    onClose: () => set({ options: null }),
    confirm: (confirmation) => set({ isOpen: true, options: confirmation }),
  };
});
