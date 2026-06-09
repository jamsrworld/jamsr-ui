import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { CollapsibleUsage } from "./examples/usage";

const title = "Collapsible";
const description =
  "An interactive component which can be expanded or collapsed.";

export const metadata: Metadata = {
  title,
  description,
};

const CollapsiblePage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        component={CollapsibleUsage}
      />
    </DocsPage>
  );
};

export default CollapsiblePage;
