import { LinearProgress } from "jamsrui/linear-progress";

export const LinearProgressColors = () => {
  const colors: LinearProgress.Props["color"][] = [
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
  ];
  return (
    <div className="flex w-full flex-col gap-6">
      {colors.map((color) => (
        <LinearProgress
          key={color}
          color={color}
          isIntermediate
        />
      ))}
    </div>
  );
};
