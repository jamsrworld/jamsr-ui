import { type AvatarProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    avatar?: Partial<AvatarProps>;
  }
}
