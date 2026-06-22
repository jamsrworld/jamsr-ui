import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { VariantOptions } from "@/types";
import { readMetaUrl } from "@/utils/code";
import { RadioGroup } from "ui/radio-group";
import { Metadata } from "next";
import { RadioNumberUsage } from "./examples/number-usage";
import { RadioUsage } from "./examples/usage";

const title = "Radio Group";
const description =
  "Radio buttons are used for selecting one option from a set. They allow a single choice from a group of options, with only one option being selected at a time.";

export const metadata: Metadata = {
  title,
  description,
};

const radioGroupVariants: VariantOptions<RadioGroup.Variants> = {
  color: {
    options: [
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ],
    defaultValue: "primary",
  },
  size: {
    options: ["sm", "md", "lg"],
    defaultValue: "md",
  },
};

const RadioGroupPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={radioGroupVariants}
        component={RadioUsage}
      />
      <CodeExampleV2
        title="Number Usage"
        url={resolvePath("number-usage.tsx")}
        variants={radioGroupVariants}
        component={RadioNumberUsage}
      />
    </DocsPage>
  );
};

export default RadioGroupPage;
