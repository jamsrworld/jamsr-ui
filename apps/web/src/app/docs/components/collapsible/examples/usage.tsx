"use client";

import { Card } from "ui/card";
import { Collapsible } from "ui/collapsible";

export const CollapsibleUsage = (props: Collapsible.Props) => {
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
