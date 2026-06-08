import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "jamsrui/text";
import { Metadata } from "next";

const title = "Editor";
const description =
  "A robust and versatile component that provides an interactive interface for users to create, edit, and format content with rich-text and media support.";

export const metadata: Metadata = {
  title,
  description,
};

const Editor = () => {
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

export default Editor;
