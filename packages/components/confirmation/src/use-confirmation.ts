import { create } from "zustand";

type State = (
  | {
      isOpen: false;
      options: null;
    }
  | {
      isOpen: true;
      options: {
        title: string;
        message: string;
        onCancel?: () => void;
        onConfirm: () => void;
      };
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
