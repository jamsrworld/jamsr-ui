import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { TabIndicator } from "./indicator";
import { useTabsContext } from "./tabs-context";

type Props = {
  heading: React.ReactNode;
  value: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isDisabled?: boolean;
};

export type TabProps<T extends React.ElementType = "button"> =
  ComponentPropsWithAs<T, Props>;

export const Tab = <T extends React.ElementType = "button">(
  props: TabProps<T>,
) => {
  const {
    heading,
    value,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children,
    onClick,
    as,
    startContent,
    endContent,
    ...restProps
  } = props as TabProps;
  const { selectedValue, onValueChange, getTabProps, getTabContentProps } =
    useTabsContext();
  const isActive = value === selectedValue;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
    onValueChange(value);
  };
  const Component = as ?? "button";

  return (
    <Component
      {...getTabProps(restProps as TabProps)}
      onClick={handleClick}
    >
      {startContent}
      <div {...getTabContentProps()}>{heading}</div>
      {endContent}
      {isActive && <TabIndicator />}
    </Component>
  );
};
