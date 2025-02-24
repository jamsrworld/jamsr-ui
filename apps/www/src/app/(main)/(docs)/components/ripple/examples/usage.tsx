import { Ripple } from "@jamsr-ui/react";

export const RippleUsage = () => {
  return (
    <div className="relative grid h-full place-items-center">
      <div className="h-[500px]">
        <Ripple />
        Click anywhere
      </div>
    </div>
  );
};
