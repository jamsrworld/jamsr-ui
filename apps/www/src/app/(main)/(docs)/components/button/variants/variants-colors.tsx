import { Button, type ButtonProps } from "@jamsr-ui/react";

export const ButtonVariantsColors = () => {
  const variants: ButtonProps["variant"][] = [
    "solid",
    "light",
    "outlined",
    "text",
    "flat",
  ];
  const colors: ButtonProps["color"][] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  return (
    <div className="flex flex-col flex-wrap gap-4">
      {variants.map((variant) => (
        <div key={variant} className="flex flex-wrap gap-4">
          {colors.map((color) => (
            <Button key={`${variant}-${color}`} variant={variant} color={color}>
              {variant} - {color}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};
