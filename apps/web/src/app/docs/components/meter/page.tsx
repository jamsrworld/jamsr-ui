import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { MeterUsage } from "./examples/usage";

const title = "Meter";
const description = "A graphical display of a numeric value within a range.";

export const metadata: Metadata = {
  title,
  description,
};

const Meter = () => {
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
        <MeterUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Meter;
