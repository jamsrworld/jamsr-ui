import { CodeExampleV2 } from "@/components/code-example-v2";
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
      <CodeExampleV2
        isCentered
        title="Usage"
        url={resolvePath("usage.tsx")}
        component={TimeFieldUsage}
      />
    </DocsPage>
  );
};

export default TimeFieldPage;
