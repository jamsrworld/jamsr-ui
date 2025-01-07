import { Switch, type SwitchProps } from "@jamsr-ui/react";

export const SwitchSizes = () => {
  const sizes: SwitchProps["size"][] = ["xs", "sm", "md", "lg"];
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => (
        <Switch key={size} label={size} size={size} />
      ))}
    </div>
  );
};
