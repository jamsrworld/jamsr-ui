"use client";

import { TextArea } from "jamsrui/textarea";

export const TextAreaUsage = (props: TextArea.Props) => {
  return (
    <TextArea
      {...props}
      placeholder="Enter your name"
    />
  );
};
