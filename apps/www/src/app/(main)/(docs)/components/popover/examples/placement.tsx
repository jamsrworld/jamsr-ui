import {
  Button,
  Popover,
  type PopoverProps,
  Text,
} from "@jamsr-ui/react";

export const PopoverPlacement = () => {
  const placements: PopoverProps["placement"][] = [
    "top",
    "top-start",
    "top-end",
    "right",
    "right-start",
    "right-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "left",
    "left-start",
    "left-end",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {placements.map((placement) => (
        <Popover
          trigger={<Button>{placement}</Button>}
          className="p-2"
          showArrow
          key={placement}
          placement={placement}
          triggerOn="hover"
        >
          <Text as="p">This is a Popover content</Text>
        </Popover>
      ))}
    </div>
  );
};
