import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { TextAreaControlled } from "./examples/controlled";
import { TextAreaDisabled } from "./examples/disabled";
import { TextAreaErrorState } from "./examples/error-state";
import { TextAreaPrefixSuffix } from "./examples/prefix-suffix";
import { TextAreaUsage } from "./examples/usage";
import { TextAreaWithDescription } from "./examples/with-description";
import { TextAreaWithIcon } from "./examples/with-icon";
import { TextAreaWithLabel } from "./examples/with-label";
import { VariantOptions } from "@/types";
import { TextArea } from "ui/textarea";

const title = "TextArea";
const description =
  "A form element that allows users to textarea and submit data, supporting various types such as text, numbers, and more for seamless data entry.";

export const metadata: Metadata = {
  title,
  description,
};

const TextAreaVariants: VariantOptions<TextArea.Variants> = {
  variant: {
    options: ["solid", "bordered"],
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

const TextAreaPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={TextAreaVariants}
        component={TextAreaUsage}
      />
      <CodeExampleV2
        title="With Label"
        url={resolvePath("with-label.tsx")}
        variants={TextAreaVariants}
        component={TextAreaWithLabel}
      />
      <CodeExampleV2
        title="With Description"
        url={resolvePath("with-description.tsx")}
        variants={TextAreaVariants}
        component={TextAreaWithDescription}
      />
      <CodeExampleV2
        title="Controlled"
        url={resolvePath("controlled.tsx")}
        variants={TextAreaVariants}
        component={TextAreaControlled}
      />
      <CodeExampleV2
        title="Error State"
        url={resolvePath("error-state.tsx")}
        variants={TextAreaVariants}
        component={TextAreaErrorState}
      />
      <CodeExampleV2
        title="Disabled"
        url={resolvePath("disabled.tsx")}
        variants={TextAreaVariants}
        component={TextAreaDisabled}
      />
      <CodeExampleV2
        title="Prefix & Suffix"
        url={resolvePath("prefix-suffix.tsx")}
        variants={TextAreaVariants}
        component={TextAreaPrefixSuffix}
      />
      <CodeExampleV2
        title="With Icon"
        url={resolvePath("with-icon.tsx")}
        variants={TextAreaVariants}
        component={TextAreaWithIcon}
      />
    </DocsPage>
  );
};

export default TextAreaPage;
