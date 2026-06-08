import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "jamsrui/text";
import { Metadata } from "next";

const title = "Pagination";
const description =
  "A Pagination component helps break large sets of content into smaller, more manageable pages. It allows users to navigate through multiple pages of content using controls like next, previous, or page numbers.";

export const metadata: Metadata = {
  title,
  description,
};

const Pagination = () => {
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

export default Pagination;
