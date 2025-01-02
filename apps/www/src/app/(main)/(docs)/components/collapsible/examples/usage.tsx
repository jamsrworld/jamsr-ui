import {
  Card,
  CardContent,
  CardHeader,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@jamsr-ui/react";

export const CollapsibleUsage = () => {
  return (
    <Collapsible>
      <Card>
        <CollapsibleTrigger>
          <CardHeader gutterBottom heading="Can I use this in my project?" />
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
