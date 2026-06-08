import { CodeExample } from "@/components/code-example";
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
      <CodeExample
        title="Usage"
        url={resolvePath("usage.tsx")}
      >
        <DateInputUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default DateFieldPage;
