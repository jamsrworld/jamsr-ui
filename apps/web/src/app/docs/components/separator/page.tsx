import { Separator } from "ui/separator";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { VariantOptions } from "@/types";
import { SeparatorUsage } from "./examples/usage";

const title = "Separator";
const description =
  "Separator is a component that separates content on a page, enhancing structure and visual hierarchy.";

export const metadata: Metadata = {
  title,
  description,
};

const separatorVariants: VariantOptions<Separator.Variants> = {
  variant: {
    options: ["default", "light", "dark"],
    defaultValue: "default",
  },
  orientation: {
    options: ["horizontal", "vertical"],
    defaultValue: "horizontal",
  },
};

const SeparatorPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={separatorVariants}
        component={SeparatorUsage}
      />
    </DocsPage>
  );
};

export default SeparatorPage;
