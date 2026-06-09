"use client";

import { Skeleton } from "jamsrui/skeleton";
import React from "react";

export const SkeletonUsage = (props: Record<string, unknown>) => {
  const isLoading = props.isLoading === "true" || props.isLoading === undefined;
  const disableAnimation = props.disableAnimation === "true";
  return (
    <div className="w-50 space-y-5 p-4">
      <Skeleton
        className="rounded-lg"
        isLoading={isLoading}
        disableAnimation={disableAnimation}
      >
        <div className="h-24 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton
          className="w-3/5 rounded-lg"
          isLoading={isLoading}
          disableAnimation={disableAnimation}
        >
          <div className="h-3 rounded-lg bg-default-300" />
        </Skeleton>
        <Skeleton
          className="w-4/5 rounded-lg"
          isLoading={isLoading}
          disableAnimation={disableAnimation}
        >
          <div className="h-3 rounded-lg bg-default-300" />
        </Skeleton>
        <Skeleton
          className="w-2/5 rounded-lg"
          isLoading={isLoading}
          disableAnimation={disableAnimation}
        >
          <div className="h-3 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </div>
  );
};
