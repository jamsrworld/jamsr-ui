"use client";

import { TextArea } from "ui/textarea";

export const TextAreaUsage = (props: TextArea.Props) => {
  return (
    <TextArea
      {...props}
      placeholder="Enter your name"
    />
  );
};
