import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { LinearProgressColors } from "./examples/colors";
import { LinearProgressControlled } from "./examples/controlled";
import { LinearProgressUsage } from "./examples/usage";

const title = "LinearProgress";
const description =
  "A visual indicator that displays the progress of an ongoing task in a linear format, providing users with a clear understanding of task completion in real time.";

export const metadata: Metadata = {
  title,
  description,
};

const LinearProgress = () => {
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
        <LinearProgressUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Colors"
        url={resolvePath("colors.tsx")}
      >
        <LinearProgressColors />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <LinearProgressControlled />
      </CodeExample>
    </DocsPage>
  );
};

export default LinearProgress;
