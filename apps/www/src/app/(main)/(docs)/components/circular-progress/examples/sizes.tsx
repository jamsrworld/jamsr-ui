import { CircularProgress, type CircularProgressProps } from "@jamsr-ui/react";

export const CircularProgressSizes = () => {
  const sizes: CircularProgressProps["size"][] = ["sm", "md", "lg"];
  return (
    <div className="flex flex-col gap-6">
      {sizes.map((size) => (
        <CircularProgress key={size} size={size} />
      ))}
    </div>
  );
};
