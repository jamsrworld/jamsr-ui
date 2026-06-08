import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { CardUsage } from "./examples/usage";

const title = "Card";
const description =
  "A card presents focused content and actionable items related to a single subject .";

export const metadata: Metadata = {
  title,
  description,
};

const Card = () => {
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
        <CardUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Card;
