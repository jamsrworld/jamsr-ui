import { Button, type ButtonProps } from "@jamsr-ui/react";

export const ButtonSizes = () => {
  const sizes: ButtonProps["size"][] = ["sm", "md", "lg"];
  return (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <Button key={size} size={size}>
          Button
        </Button>
      ))}
    </div>
  );
};
