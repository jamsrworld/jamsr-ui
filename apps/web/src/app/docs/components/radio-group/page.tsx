import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { RadioUsage } from "./examples/usage";
import { RadioColors } from "./examples/colors";
import { RadioNumberUsage } from "./examples/number-usage";

const title = "Radio Group";
const description =
  "Radio buttons are used for selecting one option from a set. They allow a single choice from a group of options, with only one option being selected at a time.";

export const metadata: Metadata = {
  title,
  description,
};

const RadioGroup = () => {
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
        <RadioUsage />
      </CodeExample>
      <CodeExample
        title="Number Usage"
        url={resolvePath("number-usage.tsx")}
      >
        <RadioNumberUsage />
      </CodeExample>
      <CodeExample
        title="Colors"
        url={resolvePath("colors.tsx")}
      >
        <RadioColors />
      </CodeExample>
    </DocsPage>
  );
};

export default RadioGroup;
