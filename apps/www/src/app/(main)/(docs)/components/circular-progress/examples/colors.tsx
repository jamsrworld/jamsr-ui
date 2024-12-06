import { CircularProgress, type CircularProgressProps } from "@jamsr-ui/react";

export const CircularProgressColors = () => {
  const colors: CircularProgressProps["color"][] = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  return (
    <div className="flex flex-col gap-6">
      {colors.map((color) => (
        <CircularProgress key={color} color={color} />
      ))}
    </div>
  );
};
