import { Switch, SwitchProps } from "@jamsr-ui/react";

export const SwitchLabelPlacement = () => {
  const placements: SwitchProps["labelPlacement"][] = [
    "bottom",
    "end",
    "start",
    "top",
  ];

  return (
    <div className="flex flex-col gap-8">
      {placements.map((placement) => {
        return (
          <Switch
            key={placement}
            labelPlacement={placement}
            label={`I am positioned at ${placement}`}
          />
        );
      })}
    </div>
  );
};
