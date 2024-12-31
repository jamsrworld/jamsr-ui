"use client";

import { useControlledState } from "@jamsr-ui/hooks";
import { useMemo } from "react";
import {
  type CollapsibleContextType,
  CollapsibleProvider,
} from "./collapsible-context";

type Props = {
  children: React.ReactNode;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

export const Collapsible = (props: Props) => {
  const {
    children,
    defaultOpen = false,
    isOpen: $isOpen,
    onOpenChange,
  } = props;
  const [isOpen, setIsOpen] = useControlledState(
    defaultOpen,
    $isOpen,
    onOpenChange,
  );
  const value: CollapsibleContextType = useMemo(
    () => ({ isOpen, setIsOpen }),
    [isOpen, setIsOpen],
  );
  return <CollapsibleProvider value={value}>{children}</CollapsibleProvider>;
};
