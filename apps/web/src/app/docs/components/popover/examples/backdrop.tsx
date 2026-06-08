import { Button } from "jamsrui/button";
import { Popover } from "jamsrui/popover";
import { Text } from "jamsrui/text";

export const PopoverBackdrop = () => {
  const backdrops: Popover.Props["backdrop"][] = [
    "blur",
    "opaque",
    "transparent",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {backdrops.map((backdrop) => (
        <Popover
          key={backdrop}
          backdrop={backdrop}
        >
          <Popover.Trigger render={<Button>{backdrop}</Button>} />
          <Popover.Content>
            <Text>
              Popover is a non-modal dialog that floats around its disclosure.
              It's commonly used for displaying additional rich content on top
              of something.
            </Text>
          </Popover.Content>
        </Popover>
      ))}
    </div>
  );
};
