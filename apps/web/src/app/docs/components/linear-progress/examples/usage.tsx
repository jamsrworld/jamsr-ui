"use client";

import { LinearProgress } from "ui/linear-progress";

export const LinearProgressUsage = (props: LinearProgress.Props) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <LinearProgress {...props} />
    </div>
  );
};
