import { TagsInput as TagsInputRoot } from "./tags-input";

import type { VariantProps } from "tailwind-variants";

import type { tagsInputStyles } from "./styles";

export const TagsInput = Object.assign(TagsInputRoot, {});

export namespace TagsInput {
  export type Variants = VariantProps<typeof tagsInputStyles>;
  export interface Props extends TagsInputRoot.Props {}
}
