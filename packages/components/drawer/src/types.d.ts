import { type DrawerProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    drawer?: Partial<DrawerProps>;
  }
}
