import type { VariantProps } from "tailwind-variants";
import { tagsInputStyles } from "./styles";
import { TagsInput as TagsInputRoot } from "./tags-input";

export const TagsInput = Object.assign(TagsInputRoot, {});

export namespace TagsInput {
  export type Variants = VariantProps<typeof tagsInputStyles>;
  export interface Props extends TagsInputRoot.Props {}
}
