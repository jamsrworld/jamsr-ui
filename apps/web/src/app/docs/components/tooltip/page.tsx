import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { TooltipAligns } from "./examples/aligns";
import { TooltipControlled } from "./examples/controlled";
import { TooltipOffset } from "./examples/offset";
import { TooltipRadius } from "./examples/radius";
import { TooltipSides } from "./examples/sides";
import { TooltipUsage } from "./examples/usage";
import { TooltipWithArrow } from "./examples/with-arrow";
import { TooltipWithGroup } from "./examples/with-group";

const title = "Tooltip";
const description =
  "A Tooltip component provides a small pop-up box that appears when a user hovers over an element. It is typically used to provide additional information or context about a UI element without cluttering the interface.";

export const metadata: Metadata = {
  title,
  description,
};

const Tooltip = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExample
        isCentered
        title="Usage"
        url={resolvePath("usage.tsx")}
      >
        <TooltipUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Arrow"
        url={resolvePath("with-arrow.tsx")}
      >
        <TooltipWithArrow />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radius"
        url={resolvePath("radius.tsx")}
      >
        <TooltipRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="Offset"
        url={resolvePath("offset.tsx")}
      >
        <TooltipOffset />
      </CodeExample>
      <CodeExample
        isCentered
        title="Aligns"
        url={resolvePath("aligns.tsx")}
      >
        <TooltipAligns />
      </CodeExample>
      <CodeExample
        isCentered
        title="Sides"
        url={resolvePath("sides.tsx")}
      >
        <TooltipSides />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <TooltipControlled />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Group"
        url={resolvePath("with-group.tsx")}
      >
        <TooltipWithGroup />
      </CodeExample>
    </DocsPage>
  );
};

export default Tooltip;
