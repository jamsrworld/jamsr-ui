import { Skeleton } from "@jamsr-ui/react";

export const SkeletonDefault = () => {
  return (
    <div className="w-[200px] space-y-5 p-4">
      <Skeleton className="rounded-lg">
        <div className="bg-default-300 h-24 rounded-lg" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="bg-default-200 h-3 w-3/5 rounded-lg" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="bg-default-200 h-3 w-4/5 rounded-lg" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="bg-default-300 h-3 w-2/5 rounded-lg" />
        </Skeleton>
      </div>
    </div>
  );
};
