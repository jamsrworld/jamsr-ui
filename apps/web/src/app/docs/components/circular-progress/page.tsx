import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { CircularProgressColors } from "./examples/colors";
import { CircularProgressCustomized } from "./examples/customized";
import { CircularProgressSizes } from "./examples/sizes";
import { CircularProgressUsage } from "./examples/usage";
import { CircularProgressWithLabel } from "./examples/with-label";

const title = "Circular Progress";
const description =
  "A visually engaging component that provides a clear indication of ongoing processes or tasks, allowing users to track progress in real time with a circular animation.";

export const metadata: Metadata = {
  title,
  description,
};

const CircularProgress = () => {
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
        <CircularProgressUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Label"
        url={resolvePath("with-label.tsx")}
      >
        <CircularProgressWithLabel />
      </CodeExample>
      <CodeExample
        isCentered
        title="Colors"
        url={resolvePath("colors.tsx")}
      >
        <CircularProgressColors />
      </CodeExample>
      <CodeExample
        isCentered
        title="Sizes"
        url={resolvePath("sizes.tsx")}
      >
        <CircularProgressSizes />
      </CodeExample>
      <CodeExample
        isCentered
        title="Customized"
        url={resolvePath("customized.tsx")}
      >
        <CircularProgressCustomized />
      </CodeExample>
    </DocsPage>
  );
};

export default CircularProgress;
