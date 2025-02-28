import { createContext, useContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UIConfigType {
  globalConfig?: {
    radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  };
}
const UIConfigContext = createContext<UIConfigType>(
  {} as unknown as UIConfigType,
);

type Props = {
  children: React.ReactNode;
} & UIConfigType;

export const UIConfigProvider = (props: Props) => {
  const { children, ...restProps } = props;
  return (
    <UIConfigContext.Provider value={restProps}>
      {children}
    </UIConfigContext.Provider>
  );
};

export const useUIConfig = (): UIConfigType => {
  const context = useContext(UIConfigContext);
  if (!context) {
    throw new Error("useUIConfig must be used within a UIConfigProvider");
  }
  return context;
};
