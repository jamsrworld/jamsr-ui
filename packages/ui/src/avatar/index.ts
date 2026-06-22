import {
  Avatar as AvatarRoot,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
} from "./avatar";

import type { VariantProps } from "tailwind-variants";

import type { avatarStyles } from "./styles";

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
  Indicator: AvatarIndicator,
});

export namespace Avatar {
  export type Variants = VariantProps<typeof avatarStyles>;
  export interface Props extends AvatarRoot.Props {}
}
