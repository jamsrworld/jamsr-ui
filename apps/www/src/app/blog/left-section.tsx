import { Typography } from "@jamsr-ui/react";
import { ChevronRightIcon } from "@jamsr-ui/shared-icons";

const items = [
  "Getting Started",
  "Foundations",
  "Patterns",
  "Components",
  "Inputs",
  "Technologies",
];

export const LeftSection = () => {
  return (
    <div className="sticky top-24 col-span-2 flex h-max">
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRightIcon className="size-4" />
            <Typography
              as="p"
              className="text-foreground-secondary"
              variant="paragraph2"
            >
              {item}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
