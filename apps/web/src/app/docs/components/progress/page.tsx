import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { ProgressUsage } from "./examples/usage";

const title = "Progress";
const description = "A graphical display of a numeric value within a range.";

export const metadata: Metadata = {
  title,
  description,
};

const ProgressPage = () => {
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
        component={ProgressUsage}
      />
    </DocsPage>
  );
};

export default ProgressPage;
