import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { VariantOptions } from "@/types";
import { readMetaUrl } from "@/utils/code";
import { Field } from "ui/field";
import { Metadata } from "next";
import { FieldUsage } from "./examples/usage";

const title = "Field";
const description =
  "A component that provides labeling and validation for form controls.";

export const metadata: Metadata = {
  title,
  description,
};

const fieldVariants: VariantOptions<Field.Variants> = {
  orientation: {
    options: ["vertical", "horizontal"],
    defaultValue: "vertical",
  },
};

const FieldPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={fieldVariants}
        component={FieldUsage}
      />
    </DocsPage>
  );
};

export default FieldPage;
