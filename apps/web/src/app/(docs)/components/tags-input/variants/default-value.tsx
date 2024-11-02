import { TagsInput } from "@jamsr-ui/react";

export const TagInputDefaultValue = () => {
  const defaultValue = new Set(["Tag 1", "Tag 2", "Tag 3"]);
  return <TagsInput defaultValue={defaultValue} />;
};
