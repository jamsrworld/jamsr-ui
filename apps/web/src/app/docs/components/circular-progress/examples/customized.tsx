"use client";

import { CircularProgress } from "jamsrui/circular-progress";

export const CircularProgressCustomized = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <CircularProgress
        value={30}
        size={100}
        strokeWidth={10}
        trackWidth={4}
      />
      <CircularProgress
        isIntermediate={false}
        size={200}
        trackWidth={20}
        progressWidth={16}
        value={30}
        startAngle={180}
      >
        <CircularProgress.Track />
        <CircularProgress.Progress />
        <CircularProgress.Label className="text-4xl font-black">
          30KM
        </CircularProgress.Label>
      </CircularProgress>
    </div>
  );
};
