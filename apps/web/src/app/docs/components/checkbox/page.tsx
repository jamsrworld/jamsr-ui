import { Checkbox } from "ui/checkbox";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { VariantOptions } from "@/types";
import { CheckboxControlled } from "./examples/controlled";
import { CheckboxCustomIndicator } from "./examples/custom-indicator";
import { CheckboxDescription } from "./examples/description";
import { CheckboxDisabled } from "./examples/disabled";
import { CheckboxIntermediate } from "./examples/intermediate";
import { CheckboxInvalid } from "./examples/invalid";
import { CheckboxUsage } from "./examples/usage";

const title = "Checkbox";
const description =
  "Checkboxes enable users to select multiple items from a list or to indicate a single item as selected.";

export const metadata: Metadata = {
  title,
  description,
};

const checkboxVariants: VariantOptions<Checkbox.Variants> = {
  variant: {
    options: ["bordered", "solid"],
    defaultValue: "solid",
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

const CheckboxPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={checkboxVariants}
        component={CheckboxUsage}
      />
      <CodeExampleV2
        title="Description"
        url={resolvePath("description.tsx")}
        variants={checkboxVariants}
        component={CheckboxDescription}
      />
      <CodeExampleV2
        title="Controlled"
        url={resolvePath("controlled.tsx")}
        variants={checkboxVariants}
        component={CheckboxControlled}
      />
      <CodeExampleV2
        title="Disabled"
        url={resolvePath("disabled.tsx")}
        variants={checkboxVariants}
        component={CheckboxDisabled}
      />
      <CodeExampleV2
        title="Invalid"
        url={resolvePath("invalid.tsx")}
        variants={checkboxVariants}
        component={CheckboxInvalid}
      />
      <CodeExampleV2
        title="Intermediate"
        url={resolvePath("intermediate.tsx")}
        variants={checkboxVariants}
        component={CheckboxIntermediate}
      />
      <CodeExampleV2
        title="Custom Indicator"
        url={resolvePath("custom-indicator.tsx")}
        variants={checkboxVariants}
        component={CheckboxCustomIndicator}
      />
    </DocsPage>
  );
};

export default CheckboxPage;
