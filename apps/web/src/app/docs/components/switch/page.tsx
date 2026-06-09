import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { SwitchControlled } from "./examples/controlled";
import { SwitchCustomization } from "./examples/customization";
import { SwitchDescription } from "./examples/description";
import { SwitchDisabled } from "./examples/disabled";
import { SwitchUsage } from "./examples/usage";
import { SwitchWithLabel } from "./examples/with-label";

const title = "Switch";
const description =
  "A Switch component allows users to toggle between two states, typically representing an on/off or active/inactive choice. It is commonly used for enabling or disabling features in a user interface.";

export const metadata: Metadata = {
  title,
  description,
};

const switchVariants = {
  color: {
    options: [
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ],
    defaultValue: "success",
  },
  size: {
    options: ["sm", "md", "lg"],
    defaultValue: "md",
  },
};

const SwitchPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        isCentered
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={switchVariants}
        component={SwitchUsage}
      />
      <CodeExampleV2
        isCentered
        title="With Label"
        url={resolvePath("with-label.tsx")}
        variants={switchVariants}
        component={SwitchWithLabel}
      />
      <CodeExampleV2
        isCentered
        title="Description"
        url={resolvePath("description.tsx")}
        variants={switchVariants}
        component={SwitchDescription}
      />
      <CodeExampleV2
        isCentered
        title="Disabled"
        url={resolvePath("disabled.tsx")}
        variants={switchVariants}
        component={SwitchDisabled}
      />
      <CodeExampleV2
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
        variants={switchVariants}
        component={SwitchControlled}
      />
      <CodeExampleV2
        isCentered
        title="Customization"
        url={resolvePath("customization.tsx")}
        variants={switchVariants}
        component={SwitchCustomization}
      />
    </DocsPage>
  );
};

export default SwitchPage;
