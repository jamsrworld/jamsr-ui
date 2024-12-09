import { Chip, type ChipProps } from "@jamsr-ui/react";

export const ChipBordered = () => {
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
        <Chip isBordered variant="flat" color={color} key={color}>
          {color}
        </Chip>
      ))}
    </div>
  );
};
