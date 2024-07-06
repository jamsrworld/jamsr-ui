import { useControlledState } from "@jamsr-ui/hooks";
import {
  cn,
  dataAttr,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import type { ComponentProps, ReactElement } from "react";
import { Children, isValidElement, useCallback, useMemo } from "react";
import type { TabVariants, TabsSlots } from "./style";
import { tabsVariant } from "./style";
import type { TabProps } from "./tab";
import type { TabContextType } from "./tabs-context";

type Props<T extends string = string> = {
  classNames?: SlotsToClasses<TabsSlots>;
  children: React.ReactNode[];
  value?: T;
  onValueChange?: (value: T) => void;
  defaultValue?: T;
};

export type UseTabsProps = UIProps<"div"> & TabVariants & Props;

export const useTabs = (props: UseTabsProps) => {
  const {
    classNames,
    className,
    value: propValue,
    defaultValue,
    onValueChange,
    children,
    as,
    color,
    fullWidth,
    isDisabled,
    placement,
    radius,
    size,
    variant,
    ...restProps
  } = props;

  const Component = as ?? "div";

  const [value = "", setValue] = useControlledState({
    defaultProp: defaultValue,
    prop: propValue,
    onChange: onValueChange,
  });

  const selectedTabContent = useMemo(() => {
    const childrenArray = Children.toArray(children);
    console.log("childrenArray:->", childrenArray)
    const selected = !value
      ? (childrenArray[0] as ReactElement<TabProps>)
      : (childrenArray.find((child) => {
          if (!isValidElement<TabProps>(child)) return null;
          return child.props.value === value;
        }) as ReactElement<TabProps> | null);
    console.log("selected:->", selected);

    return selected?.props.children as React.ReactElement;
  }, [children, value]);

  const styles = tabsVariant({
    color,
    fullWidth,
    isDisabled,
    placement,
    radius,
    size,
    variant,
  });

  const getBaseProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-component": "tabs",
        "data-slot": "base",
        ...props,
        className: styles.base({
          className: cn(classNames?.base, props?.className, className),
        }),
        ...restProps,
      };
    },
    [className, classNames?.base, restProps, styles],
  );

  const getTabListProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "tabList",
        className: styles.tabList({
          className: cn(classNames?.tabList, props?.className),
        }),
        ...props,
      };
    },
    [classNames?.tabList, styles],
  );

  const getTabProps: PropGetter<Partial<TabProps>> = useCallback(
    (props) => {
      return {
        "data-slot": "tab",
        "data-selected": dataAttr(props?.value === value),
        "data-disabled": dataAttr(props?.disabled),
        disabled: props?.disabled,
        "aria-disabled": props?.disabled,
        ...props,
        className: styles.tab({
          className: cn(classNames?.tab, props?.className),
        }),
      };
    },
    [classNames?.tab, styles, value],
  );

  const getPanelProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "panel",
        ...props,
        className: styles.panel({
          className: cn(classNames?.panel, props?.className),
        }),
      };
    },
    [classNames?.panel, styles],
  );

  const getCursorProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "cursor",
        ...props,
        className: styles.cursor({
          className: cn(classNames?.cursor, props?.className),
        }),
      };
    },
    [classNames?.cursor, styles],
  );

  const getTabContentProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "tabContent",
        ...props,
        className: styles.tabContent({
          className: cn(classNames?.tabContent, props?.className),
        }),
      };
    },
    [classNames?.tabContent, styles],
  );

  const contextValue: TabContextType = useMemo(
    () => ({
      selectedValue: value,
      onValueChange: setValue,
      getCursorProps,
      getTabContentProps,
      getTabProps,
    }),
    [getCursorProps, getTabContentProps, getTabProps, setValue, value],
  );

  return {
    getBaseProps,
    getTabListProps,
    getTabProps,
    getPanelProps,
    getCursorProps,
    getTabContentProps,
    selectedTabContent,
    Component,
    children,
    contextValue,
  };
};
