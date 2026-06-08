import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { TextUsage } from "./examples/usage";
import { TextVariants } from "./examples/variants";

const title = "Text";
const description =
  "Text refers to the style, arrangement, and appearance of text. It is essential in design to ensure readability, hierarchy, and consistency in the presentation of written content across a user interface.";

export const metadata: Metadata = {
  title,
  description,
};

const Text = () => {
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
        <TextUsage />
      </CodeExample>
      <CodeExample
        title="Variants"
        url={resolvePath("variants.tsx")}
      >
        <TextVariants />
      </CodeExample>
    </DocsPage>
  );
};

export default Text;
