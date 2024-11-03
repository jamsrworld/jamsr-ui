import { type TagsInputProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    tagsInput?: Pick<TagsInputProps, "className" | "classNames">;
  }
}
