import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { VariantOptions } from "@/types";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { NumberField } from "ui/number-field";
import { NumberFieldControlled } from "./examples/controlled";
import { NumberFieldUsage } from "./examples/usage";

const title = "NumberField";
const description =
  "A Number Field component allows users to input numerical values. It typically includes controls for incrementing or decrementing values, providing a precise way to select a number within a defined range.";

export const metadata: Metadata = {
  title,
  description,
};

const numberFieldVariants: VariantOptions<NumberField.Variants> = {
  variant: {
    defaultValue: "solid",
    options: ["bordered", "solid"],
  },
};

const NumberFieldPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={numberFieldVariants}
        component={NumberFieldUsage}
      />
      <CodeExampleV2
        title="Controlled"
        url={resolvePath("controlled.tsx")}
        variants={numberFieldVariants}
        component={NumberFieldControlled}
      />
    </DocsPage>
  );
};

export default NumberFieldPage;
