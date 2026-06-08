import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { CheckboxGroupUsage } from "./examples/usage";

const title = "Checkbox Group";
const description = "Provides shared state to a series of checkboxes.";

export const metadata: Metadata = {
  title,
  description,
};

const Checkbox = () => {
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
        <CheckboxGroupUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Checkbox;
