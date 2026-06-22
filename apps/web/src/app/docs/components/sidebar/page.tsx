import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata, Route } from "next";

const title = "Sidebar";
const description =
  "A Sidebar is a UI element that typically appears on the left or right side of the screen, providing easy access to navigation links or additional content without taking up too much space on the main interface.";

export const metadata: Metadata = {
  title,
  description,
};

const Sidebar = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExample
        title="Usage"
        url={resolvePath("usage/index.tsx")}
      >
        <iframe
          src={"/examples/sidebar/usage" satisfies Route}
          className="min-h-[500px] w-full"
        />
      </CodeExample>
      {/* <CodeExample title="Nested" url={resolvePath("nested.tsx")}>
        <iframe
          src={"/examples/sidebar/nested" satisfies Route}
          className="min-h-[500px]"
        />
      </CodeExample> */}
    </DocsPage>
  );
};

export default Sidebar;
