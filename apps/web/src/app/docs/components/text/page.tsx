import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { TextUsage } from "./examples/usage";

const title = "Text";
const description =
  "Text refers to the style, arrangement, and appearance of text. It is essential in design to ensure readability, hierarchy, and consistency in the presentation of written content across a user interface.";

export const metadata: Metadata = {
  title,
  description,
};

const textVariants = {
  variant: {
    options: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "lead",
      "caption",
      "paragraph2",
      "paragraph",
      "body1",
      "body2",
      "body3",
      "body4",
      "body5",
      "body6",
      "body7",
      "inherit",
    ],
    defaultValue: "paragraph",
  },
  leading: {
    options: ["none", "md"],
    defaultValue: "md",
  },
};

const TextPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        isCentered
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={textVariants}
        component={TextUsage}
      />
    </DocsPage>
  );
};

export default TextPage;
