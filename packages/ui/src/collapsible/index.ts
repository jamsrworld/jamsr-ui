import {
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
} from "./collapsible";

import type { Collapsible as CollapsibleNamespace } from "./collapsible";

export const Collapsible = Object.assign(CollapsibleRoot, {
  Content: CollapsibleContent,
  Trigger: CollapsibleTrigger,
});

export namespace Collapsible {
  export interface Props extends CollapsibleNamespace.Props {}
}
