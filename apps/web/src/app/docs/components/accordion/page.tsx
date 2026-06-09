import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { VariantOptions } from "@/types";
import { readMetaUrl } from "@/utils/code";
import { Accordion } from "jamsrui/accordion";
import { Metadata } from "next";
import { AccordionDisabled } from "./examples/disabled";
import { AccordionMultipleSelection } from "./examples/multiple-selection";
import { AccordionUsage } from "./examples/usage";
import { AccordionWithoutIcon } from "./examples/without-icon";

const title = "Accordion";
const description =
  "An accordion is a UI component that organizes content into collapsible sections.";

export const metadata: Metadata = {
  title,
  description,
};

const AccordionVariants: VariantOptions<Accordion.Variants> = {
  radius: {
    defaultValue: "md",
    options: ["sm", "md", "lg", "full", "none"],
  },
  variant: {
    defaultValue: "splitted",
    options: ["light", "splitted"],
  },
};

const AccordionPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={AccordionVariants}
        component={AccordionUsage}
      />
      <CodeExampleV2
        title="Disabled"
        url={resolvePath("disabled.tsx")}
        variants={AccordionVariants}
        component={AccordionDisabled}
      />
      <CodeExampleV2
        title="Multiple Selection"
        url={resolvePath("multiple-selection.tsx")}
        variants={AccordionVariants}
        component={AccordionMultipleSelection}
      />
      <CodeExampleV2
        title="Without Icon"
        url={resolvePath("without-icon.tsx")}
        variants={AccordionVariants}
        component={AccordionWithoutIcon}
      />
    </DocsPage>
  );
};

export default AccordionPage;
