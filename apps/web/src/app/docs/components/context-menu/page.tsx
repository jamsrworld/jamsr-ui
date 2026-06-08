import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { ContextMenuAligns } from "./examples/aligns";
import { ContextMenuCheckboxItemsExample } from "./examples/checkbox-items";
import { ContextMenuColors } from "./examples/colors";
import { ContextMenuGroupExample } from "./examples/group";
import { ContextMenuNested } from "./examples/nested";
import { ContextMenuOffset } from "./examples/offset";
import { ContextMenuRadioItemsExample } from "./examples/radio-items";
import { ContextMenuRadius } from "./examples/radius";
import { ContextMenuSides } from "./examples/sides";
import { ContextMenuStartEndContent } from "./examples/start-end-content";
import { ContextMenuUsage } from "./examples/usage";
import { ContextMenuWithArrow } from "./examples/with-arrow";

const title = "Context Menu";
const description =
  "A navigational component that displays a list of options or actions, allowing users to select from various choices within an interface in a structured manner.";

export const metadata: Metadata = {
  title,
  description,
};

const ContextMenu = () => {
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
        <ContextMenuUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Nested"
        url={resolvePath("nested.tsx")}
      >
        <ContextMenuNested />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radio Items"
        url={resolvePath("radio-items.tsx")}
      >
        <ContextMenuRadioItemsExample />
      </CodeExample>
      <CodeExample
        isCentered
        title="Checkbox Items"
        url={resolvePath("checkbox-items.tsx")}
      >
        <ContextMenuCheckboxItemsExample />
      </CodeExample>
      <CodeExample
        isCentered
        title="Group"
        url={resolvePath("group.tsx")}
      >
        <ContextMenuGroupExample />
      </CodeExample>
      <CodeExample
        title="Start & End Content"
        url={resolvePath("start-end-content.tsx")}
        isCentered
      >
        <ContextMenuStartEndContent />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Arrow"
        url={resolvePath("with-arrow.tsx")}
      >
        <ContextMenuWithArrow />
      </CodeExample>
      <CodeExample
        isCentered
        title="Sides"
        url={resolvePath("sides.tsx")}
      >
        <ContextMenuSides />
      </CodeExample>
      <CodeExample
        isCentered
        title="Aligns"
        url={resolvePath("aligns.tsx")}
      >
        <ContextMenuAligns />
      </CodeExample>
      <CodeExample
        isCentered
        title="Offset"
        url={resolvePath("offset.tsx")}
      >
        <ContextMenuOffset />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radius"
        url={resolvePath("radius.tsx")}
      >
        <ContextMenuRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="Colors"
        url={resolvePath("colors.tsx")}
      >
        <ContextMenuColors />
      </CodeExample>
    </DocsPage>
  );
};

export default ContextMenu;
