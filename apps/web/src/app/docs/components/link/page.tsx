import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { LinkUnderline } from "./examples/underline";
import { LinkUsage } from "./examples/usage";

const title = "Link";
const description =
  "A component that provides a clickable text or element, directing users to another page or section within an application or external source.";

export const metadata: Metadata = {
  title,
  description,
};

const Link = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExample
        isCentered
        title="Usage"
        url={resolvePath("usage.tsx")}
      >
        <LinkUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Underline"
        url={resolvePath("underline.tsx")}
      >
        <LinkUnderline />
      </CodeExample>
    </DocsPage>
  );
};

export default Link;
