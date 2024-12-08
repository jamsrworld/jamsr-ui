import { Chip, type ChipProps } from "@jamsr-ui/react";

export const ChipRadius = () => {
  const radii: ChipProps["radius"][] = [
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
        <Chip key={radius} radius={radius}>
          {radius}
        </Chip>
      ))}
    </div>
  );
};
