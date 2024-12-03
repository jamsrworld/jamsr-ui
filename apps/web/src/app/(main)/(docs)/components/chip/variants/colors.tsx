import { Chip, type ChipProps } from "@jamsr-ui/react";

export const ChipColors = () => {
  const colors: ChipProps["color"][] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {colors.map((color) => (
        <Chip color={color} key={color}>
          {color}
        </Chip>
      ))}
    </div>
  );
};
