"use client";

import { createContext, use, useMemo } from "react";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";

import { tabsStyles } from "./styles";
import { cn } from "../utils/cn";

import type { TabsVariants } from "./styles";

const TabsContext = createContext<{
  styles: ReturnType<typeof tabsStyles>;
} | null>(null);

const useTabsContext = () => {
  const ctx = use(TabsContext);
  if (!ctx) {
    throw new Error("useTabsContext must be used within a TabsContext");
  }
  return ctx;
};

export const Tabs = (props: Tabs.Props) => {
  const {
    variant,
    color,
    size,
    radius,
    fullWidth,
    disableAnimation,
    className,
    ...restProps
  } = props;
  const styles = tabsStyles({
    variant,
    color,
    size,
    radius,
    fullWidth,
    disableAnimation,
  });

  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <TabsContext.Provider value={value}>
      <TabsPrimitive.Root
        {...restProps}
        className={styles.root({ className: cn(className) })}
      />
    </TabsContext.Provider>
  );
};
export namespace Tabs {
  export interface Props extends TabsPrimitive.Root.Props, TabsVariants {}
}

export const TabList = (props: TabsPrimitive.List.Props) => {
  const { styles } = useTabsContext();
  return (
    <TabsPrimitive.List
      {...props}
      className={styles.list({ className: cn(props.className) })}
    />
  );
};

export const Tab = (props: TabsPrimitive.Tab.Props) => {
  const { styles } = useTabsContext();
  return (
    <TabsPrimitive.Tab
      {...props}
      className={styles.tab({ className: cn(props.className) })}
    />
  );
};

export const TabIndicator = (props: TabsPrimitive.Indicator.Props) => {
  const { styles } = useTabsContext();
  return (
    <TabsPrimitive.Indicator
      {...props}
      className={styles.indicator({ className: cn(props.className) })}
    />
  );
};

export const TabPanel = (props: TabsPrimitive.Panel.Props) => {
  const { styles } = useTabsContext();
  return (
    <TabsPrimitive.Panel
      {...props}
      className={styles.panel({ className: cn(props.className) })}
    />
  );
};
