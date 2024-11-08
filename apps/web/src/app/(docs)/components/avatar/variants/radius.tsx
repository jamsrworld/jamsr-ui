import { type AvatarProps } from "@jamsr-ui/react";
import { AvatarDefault } from "./default";

export const AvatarRadius = () => {
  const radiuses: AvatarProps["radius"][] = ["none", "sm", "md", "lg", "full"];
  return (
    <div className="flex gap-4">
      {radiuses.map((radius) => (
        <AvatarDefault key={radius} radius={radius} />
      ))}
    </div>
  );
};
