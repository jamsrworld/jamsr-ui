import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "jamsrui/text";
import { Metadata } from "next";
import ScrollbarUsage from "./examples/usage";

const title = "ScrollArea";
const description = "ScrollArea";

export const metadata: Metadata = {
  title,
  description,
};

const ScrollArea = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <Text>Coming Soon!</Text>
      <CodeExample
        title="Usage"
        url={resolvePath("usage.tsx")}
      >
        <ScrollbarUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default ScrollArea;
