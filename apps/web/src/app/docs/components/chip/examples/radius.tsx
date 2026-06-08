import { Chip } from "jamsrui/chip";

export const ChipRadius = () => {
  const radii: Chip.Props["radius"][] = ["none", "sm", "md", "lg", "full"];
  return (
    <div className="flex flex-wrap gap-4">
      {radii.map((radius) => (
        <Chip
          key={radius}
          radius={radius}
        >
          {radius}
        </Chip>
      ))}
    </div>
  );
};
