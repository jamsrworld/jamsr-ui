import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "ui/text";
import { Metadata } from "next";

const title = "TagsInput";
const description =
  "A Tags Input component allows users to input multiple tags or keywords by typing and separating them with commas or pressing enter. It is commonly used for adding labels, categories, or keywords to items or content.";

export const metadata: Metadata = {
  title,
  description,
};

const TagsInput = () => {
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

export default TagsInput;
