import { CodeExample } from "@/components/code-example";
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

const ToolbarPage = () => {
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
        <ToolbarUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default ToolbarPage;
