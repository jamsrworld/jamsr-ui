import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { SeparatorUsage } from "./examples/usage";

const title = "Separator";
const description =
  "Separator is a component that separates content on a page, enhancing structure and visual hierarchy.";

export const metadata: Metadata = {
  title,
  description,
};

const Separator = () => {
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
        <SeparatorUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Separator;
