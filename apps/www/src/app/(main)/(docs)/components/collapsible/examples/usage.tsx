import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@jamsr-ui/react";

export const CollapsibleUsage = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger>
        <div>Can I use this in my project?</div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
