import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { Cursor } from "./cursor";
import { useTabsContext } from "./tabs-context";

export type TabProps = ComponentPropsWithAs<
  "button",
  {
    title: string;
    value: string;
  }
>;

export const Tab = (props: TabProps) => {
  const { title, value, children: _, onClick, as } = props;
  const { selectedValue, onValueChange, getTabProps, getTabContentProps } =
    useTabsContext();
  const isActive = value === selectedValue;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
    onValueChange(value);
  };
  const Component = as ?? "button";

  return (
    <Component {...getTabProps(props)} onClick={handleClick}>
      <div {...getTabContentProps()}>{title}</div>
      {isActive && <Cursor />}
    </Component>
  );
};
