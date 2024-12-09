"use client";

import { TagsInput } from "@jamsr-ui/react";
import { useState } from "react";

export const TagsInputControlled = () => {
  const [tags, setTags] = useState<string[]>([]);
  return (
    <TagsInput
      value={tags}
      onValueChange={setTags}
      helperText={`Tags are ${tags.join(",")}`}
      isClearable
    />
  );
};
