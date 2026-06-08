import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { NumberFieldControlled } from "./examples/controlled";
import { NumberFieldUsage } from "./examples/usage";

const title = "NumberField";
const description =
  "A Number Field component allows users to input numerical values. It typically includes controls for incrementing or decrementing values, providing a precise way to select a number within a defined range.";

export const metadata: Metadata = {
  title,
  description,
};

const NumberInput = () => {
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
        <NumberFieldUsage />
      </CodeExample>
      <CodeExample
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <NumberFieldControlled />
      </CodeExample>
    </DocsPage>
  );
};

export default NumberInput;
