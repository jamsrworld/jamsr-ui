import { Button, type ButtonProps } from "@jamsr-ui/react";

export const ButtonVariants = () => {
  const variants: ButtonProps["variant"][] = [
    "solid",
    "light",
    "outlined",
    "text",
    "flat",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Button color="primary" key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  );
};
