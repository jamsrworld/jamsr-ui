import { TagsInput } from "@jamsr-ui/react";

export const TagsInputCustomized = () => {
  return (
    <TagsInput
      placeholder="Write your tags here...."
      label="Tags"
      slotProps={{
        chip: {
          variant: "outlined",
        },
      }}
    />
  );
};
