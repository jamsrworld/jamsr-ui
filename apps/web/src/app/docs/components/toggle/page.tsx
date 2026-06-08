import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { ToggleOutlined } from "./examples/outlined";
import { ToggleUsage } from "./examples/usage";

const title = "Toggle";
const description = "Toggle";

export const metadata: Metadata = {
  title,
  description,
};

const Toggle = () => {
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
        <ToggleUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Outlined"
        url={resolvePath("outlined.tsx")}
      >
        <ToggleOutlined />
      </CodeExample>
    </DocsPage>
  );
};

export default Toggle;
