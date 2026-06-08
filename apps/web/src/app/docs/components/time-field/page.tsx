import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { TimeFieldUsage } from "./examples/usage";

const title = "Time Field";
const description =
  "Time Field allows users to enter and edit time values using a keyboard.";

export const metadata: Metadata = {
  title,
  description,
};

const TimeFieldPage = () => {
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
        <TimeFieldUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default TimeFieldPage;
