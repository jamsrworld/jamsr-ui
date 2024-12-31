/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { cloneElement } from "react";
import { useCollapsibleContext } from "./collapsible-context";

type Props = {
  children: React.ReactElement;
};

export const CollapsibleTrigger = (props: Props) => {
  const { children } = props;
  const { isOpen, setIsOpen } = useCollapsibleContext();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return cloneElement(children, {
    onClick: handleClick,
  } as any);
};
