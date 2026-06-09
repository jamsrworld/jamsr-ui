import { CodeExampleV2 } from "@/components/code-example-v2";
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

const CheckboxGroupPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        component={CheckboxGroupUsage}
      />
    </DocsPage>
  );
};

export default CheckboxGroupPage;
