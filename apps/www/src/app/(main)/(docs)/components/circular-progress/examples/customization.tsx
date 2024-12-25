"use client";

import { CircularProgress } from "@jamsr-ui/react";

export const CircularProgressCustomization = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <CircularProgress value={30} size={100} strokeWidth={10} trackWidth={4} />
      <CircularProgress
        isIntermediate={false}
        size={200}
        strokeWidth={20}
        trackWidth={20}
        showLabel
        labelFormatter={(value) => `${value}KM`}
        classNames={{
          label: "text-xl font-bold",
        }}
      />
    </div>
  );
};
