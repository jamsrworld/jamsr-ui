import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { FieldUsage } from "./examples/usage";

const title = "Field";
const description =
  "A component that provides labeling and validation for form controls.";

export const metadata: Metadata = {
  title,
  description,
};

const Input = () => {
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
        <FieldUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Input;
