import { ScrollArea } from "ui/scroll-area";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { VariantOptions } from "@/types";
import { ScrollAreaUsage } from "./examples/usage";

const title = "ScrollArea";
const description =
  "ScrollArea is a custom scrollbar component that provides customizable, smooth scrolling capabilities with fallback to native scrolling when necessary.";

export const metadata: Metadata = {
  title,
  description,
};

const scrollAreaVariants: VariantOptions<ScrollArea.Variants> = {
  isScrollable: {
    options: ["true", "false"],
    defaultValue: "true",
  },
};

const ScrollAreaPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={scrollAreaVariants}
        component={ScrollAreaUsage}
      />
    </DocsPage>
  );
};

export default ScrollAreaPage;
