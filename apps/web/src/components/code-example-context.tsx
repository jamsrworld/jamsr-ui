"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type CodeExampleContextType = {
  setProps: (props: Record<string, unknown>) => void;
  activeProps: Record<string, unknown>;
};

const CodeExampleContext = createContext<CodeExampleContextType | null>(null);

export const CodeExampleProvider = ({
  children,
  initialProps = {},
}: {
  children: ReactNode;
  initialProps?: Record<string, unknown>;
}) => {
  const [activeProps, setActiveProps] =
    useState<Record<string, unknown>>(initialProps);
  const setProps = useCallback((props: Record<string, unknown>) => {
    setActiveProps(props);
  }, []);

  return (
    <CodeExampleContext.Provider value={{ setProps, activeProps }}>
      {children}
    </CodeExampleContext.Provider>
  );
};

export const useCodeExample = () => {
  const context = useContext(CodeExampleContext);
  if (!context) {
    return {
      setProps: () => {},
      activeProps: {},
    };
  }
  return context;
};
