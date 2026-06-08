import { CodeExample } from "@/components/code-example";
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

const Progress = () => {
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
        <ProgressUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Progress;
