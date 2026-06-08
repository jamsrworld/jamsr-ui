import { Chip } from "jamsrui/chip";

export const ChipColors = () => {
  const colors: Chip.Props["color"][] = [
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
        <Chip
          color={color}
          key={color}
        >
          {color}
        </Chip>
      ))}
    </div>
  );
};
