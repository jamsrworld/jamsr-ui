import { Tab, TabIndicator, TabList, TabPanel, Tabs as TabsRoot } from "./tabs";

import type { VariantProps } from "tailwind-variants";

import type { tabsStyles } from "./styles";

export const Tabs = Object.assign(TabsRoot, {
  List: TabList,
  Tab: Tab,
  Indicator: TabIndicator,
  Panel: TabPanel,
});

export namespace Tabs {
  export interface Props extends TabsRoot.Props {}
  export type Variants = VariantProps<typeof tabsStyles>;
}
