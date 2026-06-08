import { Button } from "jamsrui/button";

export const ButtonVariants = () => {
  const variants: Button.Props["variant"][] = [
    "solid",
    "light",
    "bordered",
    "text",
    "soft",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Button
          key={variant}
          variant={variant}
        >
          {variant}
        </Button>
      ))}
    </div>
  );
};
