import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { VariantOptions } from "@/types";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { SkeletonUsage } from "./examples/usage";

const title = "Skeleton";
const description =
  "A skeleton component is used to show a placeholder while data is loading.";

export const metadata: Metadata = {
  title,
  description,
};

const skeletonVariants: VariantOptions<{
  isLoading: "true" | "false";
  disableAnimation: "true" | "false";
}> = {
  isLoading: {
    options: ["true", "false"],
    defaultValue: "true",
  },
  disableAnimation: {
    options: ["true", "false"],
    defaultValue: "false",
  },
};

const SkeletonPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={skeletonVariants}
        component={SkeletonUsage}
      />
    </DocsPage>
  );
};

export default SkeletonPage;
