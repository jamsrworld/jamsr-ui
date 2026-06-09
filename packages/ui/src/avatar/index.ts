import type { VariantProps } from "tailwind-variants";
import { avatarStyles } from "./styles";
import {
  Avatar as AvatarRoot,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
} from "./avatar";

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
  Indicator: AvatarIndicator,
});

export namespace Avatar {
  export type Variants = VariantProps<typeof avatarStyles>;
  export interface Props extends AvatarRoot.Props {}
}
