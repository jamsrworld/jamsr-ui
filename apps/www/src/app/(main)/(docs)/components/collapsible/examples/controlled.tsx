"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@jamsr-ui/react";

export const CollapsibleControlled = () => {
  const { isOpen, setIsOpen, onToggle } = useDisclosure();
  return (
    <div className="grid gap-4">
      <div>
        <Button onClick={onToggle}>{isOpen ? "Close" : "Open"}</Button>
      </div>
      <Collapsible isOpen={isOpen} onOpenChange={setIsOpen}>
        <Card>
          <CollapsibleTrigger>
            <CardHeader heading="Can I use this in my project?" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              Yes. Free to use for personal and commercial projects. No
              attribution required.
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  );
};
