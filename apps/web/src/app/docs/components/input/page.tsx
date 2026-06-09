import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { VariantOptions } from "@/types";
import { readMetaUrl } from "@/utils/code";
import { Input } from "jamsrui/input";
import { Metadata } from "next";
import { InputControlled } from "./examples/controlled";
import { InputDisabled } from "./examples/disabled";
import { InputErrorState } from "./examples/error-state";
import { InputPasswordToggle } from "./examples/password-toggle";
import { InputPrefixSuffix } from "./examples/prefix-suffix";
import { InputUsage } from "./examples/usage";
import { InputWithDescription } from "./examples/with-description";
import { InputWithIcon } from "./examples/with-icon";
import { InputWithLabel } from "./examples/with-label";

const title = "Input";
const description =
  "A form element that allows users to input and submit data, supporting various types such as text, numbers, and more for seamless data entry.";

export const metadata: Metadata = {
  title,
  description,
};

const InputVariants: VariantOptions<Input.Variants> = {
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

const InputPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={InputVariants}
        component={InputUsage}
      />
      <CodeExampleV2
        title="With Label"
        url={resolvePath("with-label.tsx")}
        variants={InputVariants}
        component={InputWithLabel}
      />
      <CodeExampleV2
        title="With Description"
        url={resolvePath("with-description.tsx")}
        variants={InputVariants}
        component={InputWithDescription}
      />
      <CodeExampleV2
        title="Controlled"
        url={resolvePath("controlled.tsx")}
        variants={InputVariants}
        component={InputControlled}
      />
      <CodeExampleV2
        title="Error State"
        url={resolvePath("error-state.tsx")}
        variants={InputVariants}
        component={InputErrorState}
      />
      <CodeExampleV2
        title="Disabled"
        url={resolvePath("disabled.tsx")}
        variants={InputVariants}
        component={InputDisabled}
      />
      <CodeExampleV2
        title="Prefix & Suffix"
        url={resolvePath("prefix-suffix.tsx")}
        variants={InputVariants}
        component={InputPrefixSuffix}
      />
      <CodeExampleV2
        title="With Icon"
        url={resolvePath("with-icon.tsx")}
        variants={InputVariants}
        component={InputWithIcon}
      />
      <CodeExampleV2
        title="Password Toggle"
        url={resolvePath("password-toggle.tsx")}
        variants={InputVariants}
        component={InputPasswordToggle}
      />
    </DocsPage>
  );
};

export default InputPage;
