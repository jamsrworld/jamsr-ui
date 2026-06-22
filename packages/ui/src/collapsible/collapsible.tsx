import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";

import { cn } from "../utils/cn";

const Collapsible = (props: CollapsiblePrimitive.Root.Props) => {
  return <CollapsiblePrimitive.Root {...props} />;
};

export namespace Collapsible {
  export interface Props extends CollapsiblePrimitive.Root.Props {}
}

const CollapsibleTrigger = (props: CollapsiblePrimitive.Trigger.Props) => {
  const { className, ...restProps } = props;
  return (
    <CollapsiblePrimitive.Trigger
      className={cn("text-start", className)}
      {...restProps}
    />
  );
};

export namespace CollapsibleTrigger {
  export interface Props extends CollapsiblePrimitive.Trigger.Props {}
}

const CollapsibleContent = (props: CollapsiblePrimitive.Panel.Props) => {
  const { className, ...restProps } = props;
  return (
    <CollapsiblePrimitive.Panel
      className={cn(
        "[&[hidden]:not([hidden='until-found'])]:hidden h-(--collapsible-panel-height) overflow-hidden",
        "transition-all ease-out data-ending-style:h-0 data-starting-style:h-0 duration-150",
        className,
      )}
      {...restProps}
    />
  );
};

export namespace CollapsibleContent {
  export interface Props extends CollapsiblePrimitive.Panel.Props {}
}

export {
  Collapsible as CollapsibleRoot,
  CollapsibleContent,
  CollapsibleTrigger,
};
