import { type AvatarProps } from "./avatar";
import { LinkProps } from "./link";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    next?: {
      avatar?: Partial<AvatarProps>;
      link?: Partial<LinkProps>;
    };
  }
}
