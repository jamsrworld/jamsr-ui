import { Toggle } from "ui/toggle";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { VariantOptions } from "@/types";
import { ToggleUsage } from "./examples/usage";

const title = "Toggle";
const description =
  "A Toggle component allows users to switch between active and inactive states. It is useful for binary actions like text styling, filter states, or simple yes/no settings.";

export const metadata: Metadata = {
  title,
  description,
};

const toggleVariants: VariantOptions<Toggle.Variants> = {
  size: {
    options: ["sm", "md", "lg"],
    defaultValue: "md",
  },
  variant: {
    options: ["default", "outline"],
    defaultValue: "default",
  },
};

const TogglePage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={toggleVariants}
        component={ToggleUsage}
      />
    </DocsPage>
  );
};

export default TogglePage;
