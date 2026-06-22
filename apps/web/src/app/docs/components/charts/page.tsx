import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "ui/text";
import { Metadata } from "next";

const title = "Charts";
const description = "Charts";

export const metadata: Metadata = {
  title,
  description,
};

const Charts = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default Charts;
