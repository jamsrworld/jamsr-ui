import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { KbdUsage } from "./examples/usage";

const title = "Kbd";
const description =
  "A component that displays keyboard keys or key combinations, typically used to indicate shortcuts or key actions within an interface.";

export const metadata: Metadata = {
  title,
  description,
};

const Kbd = () => {
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
        <KbdUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Kbd;
