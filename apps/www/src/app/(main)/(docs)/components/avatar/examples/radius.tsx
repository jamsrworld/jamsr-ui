import { Avatar, type AvatarProps } from "@jamsr-ui/react";
import { useId } from "react";

export const AvatarRadius = () => {
  const id = useId();
  const radii: AvatarProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "full",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {radii.map((radius) => (
        <Avatar
          alt="John Deo"
          key={radius}
          radius={radius}
          width={100}
          height={100}
          size="xl"
          src={`https://i.pravatar.cc/300?u=${id}`}
        />
      ))}
    </div>
  );
};
