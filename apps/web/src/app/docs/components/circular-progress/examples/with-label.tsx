"use client";

import { CircularProgress } from "jamsrui/circular-progress";

export const CircularProgressWithLabel = (props: CircularProgress.Props) => {
  return (
    <CircularProgress
      value={50}
      isIntermediate={false}
      size={100}
      strokeWidth={16}
      {...props}
    >
      <CircularProgress.Track />
      <CircularProgress.Progress />
      <CircularProgress.Label className="font-medium">
        20%
      </CircularProgress.Label>
    </CircularProgress>
  );
};
