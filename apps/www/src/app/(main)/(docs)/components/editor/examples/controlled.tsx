"use client";

import { Editor } from "@jamsr-ui/editor";
import { useState } from "react";

export const EditorControlled = () => {
  const [value, setValue] = useState({});
  return (
    <div>
      <Editor value={value} onValueChange={setValue} />
      {JSON.stringify(value, null, 2)}
    </div>
  );
};
