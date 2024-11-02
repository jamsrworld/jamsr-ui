"use client";

import { Button, TagsInput } from "@jamsr-ui/react";
import { TrashIcon } from "@jamsr-ui/shared-icons";
import { useState } from "react";

export const TagsInputControlled = () => {
  const [tags, setTags] = useState<Set<string>>(new Set([]));
  const handleClearValue = () => {
    setTags(new Set([]));
  };
  return (
    <TagsInput
      value={tags}
      onValueChange={setTags}
      helperText={`Tags are ${[...tags]}`}
      endContent={
        <Button isIconOnly color="danger" onClick={handleClearValue}>
          <TrashIcon />
        </Button>
      }
    />
  );
};