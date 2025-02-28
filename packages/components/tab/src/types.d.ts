import { type TabProps, type TabsProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    tab?: Partial<TabProps>;
    tabs?: Partial<TabsProps>;
  }
}
