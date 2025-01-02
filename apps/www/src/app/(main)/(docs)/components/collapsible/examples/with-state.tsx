"use client";

import {
  Card,
  CardContent,
  CardHeader,
  Collapsible,
  CollapsibleContent,
  CollapsibleState,
  CollapsibleTrigger,
} from "@jamsr-ui/react";
import { ChevronDownIcon } from "@jamsr-ui/shared-icons";

export const CollapsibleWithState = () => {
  return (
    <Collapsible>
      <Card className="group/collapsible">
        <CollapsibleTrigger>
          <CardHeader
            heading="Can I use this in my project?"
            endContent={
              <ChevronDownIcon className="transition-transform duration-200 group-data-[expanded=true]/collapsible:rotate-180" />
            }
            subHeading={
              <CollapsibleState>
                {({ isOpen }) => {
                  return <div>{isOpen ? "open" : "closed"}</div>;
                }}
              </CollapsibleState>
            }
            gutterBottom
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent>
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};
