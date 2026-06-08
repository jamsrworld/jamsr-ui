import { CircularProgress } from "jamsrui/circular-progress";

export const CircularProgressColors = () => {
  const colors: CircularProgress.Props["color"][] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  return (
    <div className="flex flex-col gap-6">
      {colors.map((color) => (
        <CircularProgress
          key={color}
          color={color}
        />
      ))}
    </div>
  );
};
