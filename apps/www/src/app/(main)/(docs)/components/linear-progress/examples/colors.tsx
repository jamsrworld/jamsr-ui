import { LinearProgress, type LinearProgressProps } from "@jamsr-ui/react";

export const LinearProgressColors = () => {
  const colors: LinearProgressProps["color"][] = [
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
  ];
  return (
    <div className="flex flex-col gap-6">
      {colors.map((color) => (
        <LinearProgress key={color} color={color} isIntermediate />
      ))}
    </div>
  );
};
