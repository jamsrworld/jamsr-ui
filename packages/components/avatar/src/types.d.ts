import { type AvatarProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    avatar?: Partial<AvatarProps>;
  }
}
