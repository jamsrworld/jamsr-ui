import { type TabProps, type TabsProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    tab?: Partial<TabProps>;
    tabs?: Partial<TabsProps>;
  }
}
