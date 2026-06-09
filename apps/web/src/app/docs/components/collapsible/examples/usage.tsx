"use client";

import { Card } from "jamsrui/card";
import { Collapsible } from "jamsrui/collapsible";
import { type ComponentProps } from "react";

export const CollapsibleUsage = (props: ComponentProps<typeof Collapsible>) => {
  return (
    <Collapsible {...props}>
      <Card>
        <Collapsible.Trigger>
          <Card.Header className="pb-3">
            <Card.Title>Can I use this in my project?</Card.Title>
          </Card.Header>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Card.Content>
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </Card.Content>
        </Collapsible.Content>
      </Card>
    </Collapsible>
  );
};
