import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { CollapsibleUsage } from "./examples/usage";

const title = "Collapsible";
const description = "Collapsible";

export const metadata: Metadata = {
  title,
  description,
};

const Collapsible = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExample
        title="Usage"
        url={resolvePath("usage.tsx")}
      >
        <CollapsibleUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Collapsible;
