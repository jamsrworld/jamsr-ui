import { LayoutGroup } from "framer-motion";
import { useId } from "react";
import { TabContext } from "./tabs-context";
import { useTabs, type UseTabsProps } from "./use-tabs";

export type TabsProps<T extends string = never> = UseTabsProps<T>;

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const {
    getBaseProps,
    getTabListProps,
    getPanelProps,
    selectedTabContent,
    Component,
    children,
    contextValue,
  } = useTabs(props);
  const id = useId();

  return (
    <Component {...getBaseProps()}>
      <div {...getTabListProps()}>
        <TabContext.Provider value={contextValue}>
          <LayoutGroup id={id}>{children}</LayoutGroup>
        </TabContext.Provider>
      </div>
      {selectedTabContent && (
        <div {...getPanelProps()}>{selectedTabContent}</div>
      )}
    </Component>
  );
};
