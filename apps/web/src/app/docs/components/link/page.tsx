import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { LinkUsage } from "./examples/usage";

const title = "Link";
const description =
  "A component that provides a clickable text or element, directing users to another page or section within an application or external source.";

export const metadata: Metadata = {
  title,
  description,
};

const linkVariants = {
  underline: {
    options: ["always", "hover", "never"],
    defaultValue: "hover",
  },
};

const LinkPage = () => {
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
        variants={linkVariants}
        component={LinkUsage}
      />
    </DocsPage>
  );
};

export default LinkPage;
