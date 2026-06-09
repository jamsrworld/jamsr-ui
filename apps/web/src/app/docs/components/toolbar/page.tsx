import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { ToolbarUsage } from "./examples/usage";

const title = "Toolbar";
const description = "A container for grouping a set of buttons and controls.";

export const metadata: Metadata = {
  title,
  description,
};

const toolbarVariants = {
  orientation: {
    options: ["horizontal", "vertical"],
    defaultValue: "horizontal",
  },
};

const ToolbarPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        isCentered
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={toolbarVariants}
        component={ToolbarUsage}
      />
    </DocsPage>
  );
};

export default ToolbarPage;
