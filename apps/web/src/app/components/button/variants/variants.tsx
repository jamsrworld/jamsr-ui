import { Button, type ButtonProps } from "@jamsr-ui/react";

export const ButtonVariants = () => {
  const variants: ButtonProps["variant"][] = [
    "light",
    "link",
    "outlined",
    "shadow",
    "solid",
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
    <div className="flex flex-col gap-4">
      {variants.map((variant) => {
        return (
          <div key={variant} className="flex gap-4">
            {colors.map((color) => (
              <Button
                key={`${variant}-${color}`}
                variant={variant}
                color={color}
                className="capitalize"
                disableRipple={variant === "link"}
              >
                {variant}
              </Button>
            ))}
          </div>
        );
      })}
    </div>
  );
};
