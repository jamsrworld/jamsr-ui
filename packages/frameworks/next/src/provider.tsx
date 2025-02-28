import { createContext, useContext } from "react";
import { LinkProps } from "./link";
import { AvatarProps } from "./avatar";

export type UINextConfigType = {
  link?: Partial<LinkProps>;
  avatar?: Partial<AvatarProps>;
};

const UINextConfigContext = createContext<UINextConfigType>(
  {} as unknown as UINextConfigType,
);

type Props = {
  children: React.ReactNode;
} & UINextConfigType;
export const UINextConfigProvider = (props: Props) => {
  const { children, ...restProps } = props;
  return (
    <UINextConfigContext.Provider value={restProps}>
      {children}
    </UINextConfigContext.Provider>
  );
};

export const useUINextConfig = (): UINextConfigType => {
  const context = useContext(UINextConfigContext);
  if (!context) {
    throw new Error(
      "useUINextConfig must be used within a UINextConfigProvider",
    );
  }
  return context;
};
