import {
  Button,
  Popover,
  type PopoverProps,
  Typography,
} from "@jamsr-ui/react";

export const PopoverRadius = () => {
  const radii: PopoverProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {radii.map((radius) => (
        <Popover
          trigger={<Button>{radius}</Button>}
          className="p-2"
          showArrow
          key={radius}
          radius={radius}
          triggerOn="hover"
        >
          <Typography as="p">This is a Popover content</Typography>
        </Popover>
      ))}
    </div>
  );
};
