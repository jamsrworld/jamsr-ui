import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { ToggleGroupMultiple } from "./examples/multiple";
import { ToggleGroupUsage } from "./examples/usage";

const title = "Toggle Group";
const description = "Provides a shared state to a series of toggle buttons.";

export const metadata: Metadata = {
  title,
  description,
};

const Toggle = () => {
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
        <ToggleGroupUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Multiple"
        url={resolvePath("multiple.tsx")}
      >
        <ToggleGroupMultiple />
      </CodeExample>
    </DocsPage>
  );
};

export default Toggle;
