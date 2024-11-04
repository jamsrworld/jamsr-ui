import { type TabProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    tab?: Partial<TabProps>;
  }
}