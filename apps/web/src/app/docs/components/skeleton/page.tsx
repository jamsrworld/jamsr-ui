import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { SkeletonUsage } from "./examples/usage";

const title = "Skeleton";
const description =
  "A Skeleton component is a placeholder UI element that mimics the layout of content while it's loading. It provides a visual cue to users that content is being loaded, improving the user experience during delays.";

export const metadata: Metadata = {
  title,
  description,
};

const Skeleton = () => {
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
        <SkeletonUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Skeleton;
