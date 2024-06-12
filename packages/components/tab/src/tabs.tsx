import { useControlledState } from "@jamsr-ui/hooks";
import { cn } from "@jamsr-ui/utils";
import {
  isValidElement,
  useEffect,
  useMemo,
  type ComponentPropsWithoutRef,
  type ReactElement,
} from "react";
import { type TabProps } from "./tab";
import { TabContext, type TabContextType } from "./use-tabs";

export type TabsProps<T extends string> = {
  children: React.ReactNode[];
  value?: T;
  onValueChange?: (value: T) => void;
  defaultValue?: T;
  classNames?: { wrapper?: string; tabList?: string };
  overflowScroll?: boolean;
} & ComponentPropsWithoutRef<"div">;

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const {
    children,
    defaultValue,
    className,
    classNames,
    value: propValue,
    onValueChange,
    overflowScroll,
    ...restProps
  } = props;

  const [value, setValue] = useControlledState({
    defaultProp: defaultValue,
    prop: propValue,
    onChange: onValueChange,
  });

  const contextValue = useMemo(
    () =>
      ({
        selectedValue: value,
        onValueChange: setValue,
      }) satisfies TabContextType<T>,
    [setValue, value],
  );

  const selectedTabContent = useMemo(() => {
    const selected = children.find((child) => {
      if (!isValidElement<TabProps>(child)) return null;
      return child.props.value === value;
    }) as ReactElement<TabProps> | null;

    return selected?.props.children;
  }, [children, value]);

  useEffect(() => {
    if (defaultValue) setValue(defaultValue);
  }, [defaultValue, setValue]);

  return (
    // @ts-expect-error Error
    <TabContext.Provider value={contextValue}>
      <div
        data-component="tab"
        className={cn(
          "flex flex-col gap-0.5 md:gap-1",
          classNames?.wrapper,
          className,
        )}
        {...restProps}
      >
        <div
          data-slot="tab-list"
          className={cn(
            "flex gap-1 rounded-full bg-content2 p-1",
            overflowScroll && "overflow-auto [&>*]:shrink-0",
            classNames?.tabList,
          )}
        >
          {children}
        </div>
        {selectedTabContent}
      </div>
    </TabContext.Provider>
  );
};
