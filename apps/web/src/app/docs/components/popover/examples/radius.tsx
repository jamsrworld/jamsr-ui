import { Button } from "jamsrui/button";
import { Popover } from "jamsrui/popover";

export const PopoverRadius = () => {
  const radii: Popover.Props["radius"][] = ["none", "sm", "md", "lg"];
  return (
    <div className="flex flex-wrap gap-4">
      {radii.map((radius) => (
        <Popover
          key={radius}
          radius={radius}
        >
          <Popover.Trigger render={<Button>{radius}</Button>} />
          <Popover.Content>
            Popover is a non-modal dialog that floats around its disclosure.
            It's commonly used for displaying additional rich content on top of
            something.
          </Popover.Content>
        </Popover>
      ))}
    </div>
  );
};
