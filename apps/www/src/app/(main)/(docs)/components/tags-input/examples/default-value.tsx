import { TagsInput } from "@jamsr-ui/react";

export const TagsInputDefaultValue = () => {
  const defaultValue = ["Tag 1", "Tag 2", "Tag 3"];
  return <TagsInput defaultValue={defaultValue} />;
};
