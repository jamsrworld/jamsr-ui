import { Switch, type SwitchProps } from "@jamsr-ui/react";

export const SwitchColors = () => {
  const colors: SwitchProps["color"][] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {colors.map((color) => (
        <Switch key={color} color={color} label={color} />
      ))}
    </div>
  );
};
