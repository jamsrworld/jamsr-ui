import { type TagsInputProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    tagsInput?: Partial<TagsInputProps>;
  }
}
