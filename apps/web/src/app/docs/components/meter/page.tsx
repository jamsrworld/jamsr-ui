import { CodeExampleV2 } from "@/components/code-example-v2";
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

const MeterPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        component={MeterUsage}
      />
    </DocsPage>
  );
};

export default MeterPage;
