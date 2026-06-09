"use client";

import { Avatar } from "jamsrui/avatar";
import { Button } from "jamsrui/button";
import { PreviewCard } from "jamsrui/preview-card";
import { Text } from "jamsrui/text";

export const PreviewCardAligns = (props: PreviewCard.Props) => {
  const aligns: ("start" | "center" | "end")[] = ["start", "center", "end"];
  return (
    <div className="flex flex-wrap gap-4">
      {aligns.map((align) => (
        <PreviewCard
          key={align}
          {...props}
        >
          <PreviewCard.Trigger render={<Button>{align}</Button>} />
          <PreviewCard.Content
            className="w-64"
            slotProps={{
              positioner: {
                align,
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
