import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { DateInputUsage } from "./examples/usage";

const title = "Date Field";
const description =
  "Date Field allows users to enter and edit date and time values using a keyboard.";

export const metadata: Metadata = {
  title,
  description,
};

const DateFieldPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        component={DateInputUsage}
      />
    </DocsPage>
  );
};

export default DateFieldPage;
