import { createContext, useContext } from "react";

export type UIRHFConfigType = {
  provider?: {
    slotProps?: {
      form?: React.ComponentProps<"form">;
      fieldset?: React.ComponentProps<"fieldset">;
    };
    classNames?: {
      form?: string;
      fieldset: string;
    };
  };
};

const UIRHFConfigContext = createContext<UIRHFConfigType>(
  {} as unknown as UIRHFConfigType,
);

type Props = {
  children: React.ReactNode;
} & UIRHFConfigType;

export const UIRHFConfigProvider = (props: Props) => {
  const { children, ...restProps } = props;
  return (
    <UIRHFConfigContext.Provider value={restProps}>
      {children}
    </UIRHFConfigContext.Provider>
  );
};

export const useUIRHFConfig = (): UIRHFConfigType => {
  const context = useContext(UIRHFConfigContext);
  if (!context) {
    throw new Error("useUIRHFConfig must be used within a UIRHFConfigProvider");
  }
  return context;
};
