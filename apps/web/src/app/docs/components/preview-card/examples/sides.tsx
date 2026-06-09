"use client";

import { Avatar } from "ui/avatar";
import { Button } from "ui/button";
import { PreviewCard } from "ui/preview-card";
import { Text } from "ui/text";

export const PreviewCardSides = (props: PreviewCard.Props) => {
  const sides: (
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "inline-end"
    | "inline-start"
  )[] = ["top", "right", "bottom", "left", "inline-end", "inline-start"];
  return (
    <div className="flex flex-wrap gap-4">
      {sides.map((side) => (
        <PreviewCard
          key={side}
          {...props}
        >
          <PreviewCard.Trigger render={<Button>{side}</Button>} />
          <PreviewCard.Content
            className="w-64"
            slotProps={{
              positioner: {
                side,
              },
            }}
          >
            <div className="flex gap-4">
              <Avatar className="size-10">
                <Avatar.Image
                  alt="Base UI"
                  src="https://github.com/mui.png"
                />
                <Avatar.Fallback>BUI</Avatar.Fallback>
              </Avatar>
              <div className="flex flex-col">
                <Text variant="h6">Base UI</Text>
                <Text className="text-sm">Unstyled React components.</Text>
              </div>
            </div>
          </PreviewCard.Content>
        </PreviewCard>
      ))}
    </div>
  );
};
