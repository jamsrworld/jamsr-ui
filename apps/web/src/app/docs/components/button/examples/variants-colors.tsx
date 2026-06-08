import { Button } from "jamsrui/button";

export const ButtonVariantsColors = () => {
  const variants: Button.Props["variant"][] = [
    "solid",
    "light",
    "bordered",
    "text",
    "soft",
  ];
  const colors: Button.Props["color"][] = [
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
        <div
          key={variant}
          className="flex flex-wrap gap-4"
        >
          {colors.map((color) => (
            <Button
              key={`${variant}-${color}`}
              variant={variant}
              color={color}
            >
              {variant} - {color}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};
