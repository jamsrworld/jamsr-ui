import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "jamsrui/text";
import { Metadata } from "next";

const title = "Breadcrumb";
const description = "Breadcrumb";

export const metadata: Metadata = {
  title,
  description,
};

const Breadcrumb = () => {
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

export default Breadcrumb;
