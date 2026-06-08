import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { AccordionDisabled } from "./examples/disabled";
import { AccordionMultipleSelection } from "./examples/multiple-selection";
import { AccordionRadius } from "./examples/radius";
import { AccordionUsage } from "./examples/usage";
import { AccordionVariants } from "./examples/variants";
import { AccordionWithoutIcon } from "./examples/without-icon";

const title = "Accordion";
const description =
  "An accordion is a UI component that organizes content into collapsible sections.";

export const metadata: Metadata = {
  title,
  description,
};

const Accordion = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExample
        title="Usage"
        url={resolvePath("usage.tsx")}
      >
        <AccordionUsage />
      </CodeExample>
      <CodeExample
        title="Disabled"
        url={resolvePath("disabled.tsx")}
      >
        <AccordionDisabled />
      </CodeExample>
      <CodeExample
        title="Multiple Selection"
        url={resolvePath("multiple-selection.tsx")}
      >
        <AccordionMultipleSelection />
      </CodeExample>
      <CodeExample
        title="Radius"
        url={resolvePath("radius.tsx")}
      >
        <AccordionRadius />
      </CodeExample>
      <CodeExample
        title="Variants"
        url={resolvePath("variants.tsx")}
      >
        <AccordionVariants />
      </CodeExample>
      <CodeExample
        title="Without Icon"
        url={resolvePath("without-icon.tsx")}
      >
        <AccordionWithoutIcon />
      </CodeExample>
    </DocsPage>
  );
};

export default Accordion;
