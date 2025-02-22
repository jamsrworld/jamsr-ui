import { Switch } from "@jamsr-ui/react";

export const SwitchCustomized = () => {
  return (
    <Switch
      label="Press me here"
      classNames={{
        label: "text-primary",
        thumb: "bg-primary-500 uig-checked:bg-red-600",
        switch: "bg-primary-100 uig-checked:bg-red-200",
      }}
    />
  );
};
