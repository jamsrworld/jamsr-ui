import { Kbd, type KbdProps } from "@jamsr-ui/react";

export const KbdRadius = () => {
  const radii: KbdProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "2xl",
    "3xl",
    "full",
  ];
  return (
    <div className="flex gap-4">
      {radii.map((radius) => (
        <Kbd key={radius} keys={["command"]} radius={radius}>
          K
        </Kbd>
      ))}
    </div>
  );
};
