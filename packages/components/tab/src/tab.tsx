import { useUIStyle } from "@jamsr-ui/styles";
import { deepMergeProps, type ComponentPropsWithAs } from "@jamsr-ui/utils";
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
  $props: TabProps<T>,
) => {
  const { tab: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const { heading, value, onClick, as, startContent, endContent } =
    props as TabProps;
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
      <div {...getTabContentProps()}>
        {startContent}
        {heading}
        {endContent}
      </div>
      {isActive && <TabIndicator />}
    </Component>
  );
};
