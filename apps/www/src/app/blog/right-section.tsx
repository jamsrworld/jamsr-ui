import { Text } from "@jamsr-ui/react";

const items = [
  "Getting Started",
  "Foundations",
  "Patterns",
  "Components",
  "Inputs",
  "Technologies",
];

export const RightSection = () => {
  return (
    <div className="sticky top-24 col-span-2 flex h-max">
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Text
              as="p"
              className="text-foreground-tertiary"
              variant="caption"
            >
              {item}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
};
