import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "ui/text";
import { Metadata } from "next";

const title = "Rating";
const description =
  "A Rating component allows users to provide feedback by selecting a value from a predefined range, typically represented by stars, numbers, or other visual indicators.";

export const metadata: Metadata = {
  title,
  description,
};

const Rating = () => {
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

export default Rating;
