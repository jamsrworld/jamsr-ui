import { Button, type ButtonProps } from "@jamsr-ui/react";

export const ButtonRadius = () => {
  const radii: ButtonProps["radius"][] = [
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
        <Button key={radius} radius={radius}>
          {radius}
        </Button>
      ))}
    </div>
  );
};
