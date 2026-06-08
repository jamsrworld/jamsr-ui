import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { IFrameExample } from "@/components/iframe-example";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";

const title = "Header";
const description =
  "A prominent and customizable component that displays key information, navigation elements, or branding at the top of a page or section, providing a clear structure to the layout.";

export const metadata: Metadata = {
  title,
  description,
};

const Header = () => {
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
        <IFrameExample src="/examples/header/usage" />
      </CodeExample>
      <CodeExample
        title="Static"
        url={resolvePath("static.tsx")}
      >
        <IFrameExample src="/examples/header/static" />
      </CodeExample>
      <CodeExample
        title="Bordered"
        url={resolvePath("bordered.tsx")}
      >
        <IFrameExample src="/examples/header/bordered" />
      </CodeExample>
      <CodeExample
        title="Hide On Scroll"
        url={resolvePath("hide-on-scroll.tsx")}
      >
        <IFrameExample src="/examples/header/hide-on-scroll" />
      </CodeExample>
    </DocsPage>
  );
};

export default Header;
