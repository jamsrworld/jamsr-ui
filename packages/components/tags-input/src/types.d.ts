import { type TagsInputProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    tagsInput?: Partial<TagsInputProps>;
  }
}
