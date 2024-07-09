import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { Cursor } from "./cursor";
import { useTabsContext } from "./tabs-context";

type Props = {
  heading: React.ReactNode;
  value: string;
};

export type TabProps<T extends React.ElementType = "button"> =
  ComponentPropsWithAs<T, Props>;

export const Tab = <T extends React.ElementType = "button">(
  props: TabProps<T>,
) => {
  const { heading, value, children, onClick, as } = props as TabProps;
  const { selectedValue, onValueChange, getTabProps, getTabContentProps } =
    useTabsContext();
  const isActive = value === selectedValue;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
    onValueChange(value);
  };
  const Component = as ?? "button";

  return (
    <Component {...getTabProps(props as TabProps)} onClick={handleClick}>
      <div {...getTabContentProps()}>{heading}</div>
      {isActive && <Cursor />}
    </Component>
  );
};
