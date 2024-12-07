"use client";

import { IconButton, TagsInput } from "@jamsr-ui/react";
import { TrashIcon } from "@jamsr-ui/shared-icons";
import { useState } from "react";

export const TagsInputControlled = () => {
  const [tags, setTags] = useState<string[]>([]);
  const handleClearValue = () => {
    setTags([]);
  };
  return (
    <TagsInput
      value={tags}
      onValueChange={setTags}
      helperText={`Tags are ${tags.join(",")}`}
      endContent={
        <IconButton
          aria-label="Clear Value"
          color="danger"
          onClick={handleClearValue}
        >
          <TrashIcon />
        </IconButton>
      }
    />
  );
};
