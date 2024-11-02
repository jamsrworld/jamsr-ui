import { TagsInput } from "@jamsr-ui/react";

export const TagsInputInvalidState = () => {
  return (
    <TagsInput
      placeholder="Write your tags here...."
      label="Tags"
      isInvalid
      helperText="Tags are required"
    />
  );
};
