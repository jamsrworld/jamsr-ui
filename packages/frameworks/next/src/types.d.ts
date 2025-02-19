import { type AvatarProps } from "./avatar";
import { LinkProps } from "./link";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    next?: {
      avatar?: Partial<AvatarProps>;
      link?: Partial<LinkProps>;
    };
  }
}
