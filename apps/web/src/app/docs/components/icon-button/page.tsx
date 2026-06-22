import { IconButton } from "ui/icon-button";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { VariantOptions } from "@/types";
import { IconButtonDisabled } from "./examples/disabled";
import { IconButtonLoading } from "./examples/loading";
import { IconButtonUsage } from "./examples/usage";

const title = "IconButton";
const description =
  "A compact and interactive button that uses an icon to trigger actions, providing a visually efficient way to execute tasks without cluttering the interface.";

export const metadata: Metadata = {
  title,
  description,
};

const iconButtonVariants: VariantOptions<IconButton.Variants> = {
  variant: {
    options: ["solid", "bordered", "text", "light", "soft"],
    defaultValue: "solid",
  },
  color: {
    options: [
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ],
    defaultValue: "default",
  },
  size: {
    options: ["sm", "md", "lg"],
    defaultValue: "md",
  },
  radius: {
    options: ["none", "sm", "md", "lg", "full"],
    defaultValue: "md",
  },
};

const IconButtonPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={iconButtonVariants}
        component={IconButtonUsage}
      />
      <CodeExampleV2
        title="Disabled"
        url={resolvePath("disabled.tsx")}
        variants={iconButtonVariants}
        component={IconButtonDisabled}
      />
      <CodeExampleV2
        title="Loading"
        url={resolvePath("loading.tsx")}
        variants={iconButtonVariants}
        component={IconButtonLoading}
      />
    </DocsPage>
  );
};

export default IconButtonPage;
