"use client";

import { Avatar } from "ui/avatar";
import { Link } from "ui/link";
import { PreviewCard } from "ui/preview-card";
import { Text } from "ui/text";

export const PreviewCardWithArrow = (props: PreviewCard.Props) => {
  return (
    <PreviewCard
      showArrow
      {...props}
    >
      <PreviewCard.Trigger render={<Link href="#">@base-ui</Link>} />
      <PreviewCard.Content className="w-80 p-4">
        <PreviewCard.Arrow />
        <div className="flex justify-between space-x-4">
          <Avatar className="size-10">
            <Avatar.Image
              alt="Base UI"
              src="https://github.com/mui.png"
            />
            <Avatar.Fallback>BUI</Avatar.Fallback>
          </Avatar>
          <div className="space-y-1">
            <Text variant="h6">Base UI</Text>
            <Text className="text-sm text-foreground-secondary">
              Unstyled React components for building accessible web apps and
              design systems.
            </Text>
            <div className="flex items-center pt-2">
              <span className="text-xs text-foreground-secondary text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </PreviewCard.Content>
    </PreviewCard>
  );
};
