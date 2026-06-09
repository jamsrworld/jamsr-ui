import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { VariantOptions } from "@/types";
import { readMetaUrl } from "@/utils/code";
import { ToggleGroup } from "jamsrui/toggle";
import { Metadata } from "next";
import { ToggleGroupUsage } from "./examples/usage";

const title = "Toggle Group";
const description =
  "A Toggle Group component allows users to group multiple toggle buttons together and manage their selection state, either as single-select or multi-select.";

export const metadata: Metadata = {
  title,
  description,
};

const toggleGroupVariants: VariantOptions<ToggleGroup.Variants> = {
  multiple: {
    options: ["true", "false"],
    defaultValue: "false",
  },
};

const ToggleGroupPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={toggleGroupVariants}
        component={ToggleGroupUsage}
      />
    </DocsPage>
  );
};

export default ToggleGroupPage;
