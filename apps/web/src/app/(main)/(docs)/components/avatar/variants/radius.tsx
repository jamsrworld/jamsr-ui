import { type AvatarProps } from "@jamsr-ui/react";
import { AvatarUsage } from "./usage";

export const AvatarRadius = () => {
  const radiuses: AvatarProps["radius"][] = ["none", "sm", "md", "lg", "full"];
  return (
    <div className="flex gap-4">
      {radiuses.map((radius) => (
        <AvatarUsage key={radius} radius={radius} />
      ))}
    </div>
  );
};
