import { createContext, useContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UIStylesType {}
const UIStyleContext = createContext<UIStylesType>(
  {} as unknown as UIStylesType,
);

type Props = {
  children: React.ReactNode;
} & UIStylesType;

export const UIStylesProvider = (props: Props) => {
  const { children, ...restProps } = props;
  return (
    <UIStyleContext.Provider value={restProps}>
      {children}
    </UIStyleContext.Provider>
  );
};

export const useUIStyle = (): UIStylesType => {
  const context = useContext(UIStyleContext);
  if (!context) {
    throw new Error("useUIStyle must be used within a UIStyleProvider");
  }
  return context;
};
