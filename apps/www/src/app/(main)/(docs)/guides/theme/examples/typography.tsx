import { Text } from "@jamsr-ui/react";
import React from "react";

export const ThemeText = () => {
  const classNames = [
    {
      name: "Foreground",
      className: "text-foreground",
    },
    {
      name: "Foreground Secondary",
      className: "text-foreground-secondary",
    },
    {
      name: "Foreground Tertiary",
      className: "text-foreground-tertiary",
    },
    {
      name: "Link",
      className: "text-foreground-link",
    },
    {
      name: "Primary",
      className: "text-primary",
    },
  ];

  return (
    <div>
      {classNames.map(({ className, name }, idx) => {
        return (
          <Text as="p" key={idx} className={className}>
            {name}
          </Text>
        );
      })}
    </div>
  );
};
