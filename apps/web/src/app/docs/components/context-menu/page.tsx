import { ContextMenu } from "jamsrui/context-menu";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { VariantOptions } from "@/types";
import { ContextMenuAligns } from "./examples/aligns";
import { ContextMenuCheckboxItemsExample } from "./examples/checkbox-items";
import { ContextMenuGroupExample } from "./examples/group";
import { ContextMenuNested } from "./examples/nested";
import { ContextMenuOffset } from "./examples/offset";
import { ContextMenuRadioItemsExample } from "./examples/radio-items";
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

const contextMenuVariants: VariantOptions<ContextMenu.Variants> = {
  radius: {
    options: ["none", "sm", "md", "lg"],
    defaultValue: "md",
  },
  color: {
    options: [
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ],
    defaultValue: "default",
  },
};

const ContextMenuPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={contextMenuVariants}
        component={ContextMenuUsage}
      />
      <CodeExampleV2
        title="Nested"
        url={resolvePath("nested.tsx")}
        variants={contextMenuVariants}
        component={ContextMenuNested}
      />
      <CodeExampleV2
        title="Radio Items"
        url={resolvePath("radio-items.tsx")}
        variants={contextMenuVariants}
        component={ContextMenuRadioItemsExample}
      />
      <CodeExampleV2
        title="Checkbox Items"
        url={resolvePath("checkbox-items.tsx")}
        variants={contextMenuVariants}
        component={ContextMenuCheckboxItemsExample}
      />
      <CodeExampleV2
        title="Group"
        url={resolvePath("group.tsx")}
        variants={contextMenuVariants}
        component={ContextMenuGroupExample}
      />
      <CodeExampleV2
        title="Start & End Content"
        url={resolvePath("start-end-content.tsx")}
        variants={contextMenuVariants}
        component={ContextMenuStartEndContent}
      />
      <CodeExampleV2
        title="With Arrow"
        url={resolvePath("with-arrow.tsx")}
        variants={contextMenuVariants}
        component={ContextMenuWithArrow}
      />
      <CodeExampleV2
        title="Sides"
        url={resolvePath("sides.tsx")}
        variants={contextMenuVariants}
        component={ContextMenuSides}
      />
      <CodeExampleV2
        title="Aligns"
        url={resolvePath("aligns.tsx")}
        variants={contextMenuVariants}
        component={ContextMenuAligns}
      />
      <CodeExampleV2
        title="Offset"
        url={resolvePath("offset.tsx")}
        variants={contextMenuVariants}
        component={ContextMenuOffset}
      />
    </DocsPage>
  );
};

export default ContextMenuPage;
