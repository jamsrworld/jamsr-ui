import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { CheckboxControlled } from "./examples/controlled";
import { CheckboxCustomIndicator } from "./examples/custom-indicator";
import { CheckboxDescription } from "./examples/description";
import { CheckboxDisabled } from "./examples/disabled";
import { CheckboxIntermediate } from "./examples/intermediate";
import { CheckboxInvalid } from "./examples/invalid";
import { CheckboxRadius } from "./examples/radius";
import { CheckboxSizes } from "./examples/sizes";
import { CheckboxUsage } from "./examples/usage";

const title = "Checkbox";
const description =
  "Checkboxes enable users to select multiple items from a list or to indicate a single item as selected.";

export const metadata: Metadata = {
  title,
  description,
};

const Checkbox = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExample
        isCentered
        title="Usage"
        url={resolvePath("usage.tsx")}
      >
        <CheckboxUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Description"
        url={resolvePath("description.tsx")}
      >
        <CheckboxDescription />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <CheckboxControlled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Sizes"
        url={resolvePath("sizes.tsx")}
      >
        <CheckboxSizes />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radius"
        url={resolvePath("radius.tsx")}
      >
        <CheckboxRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="Disabled"
        url={resolvePath("disabled.tsx")}
      >
        <CheckboxDisabled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Invalid"
        url={resolvePath("invalid.tsx")}
      >
        <CheckboxInvalid />
      </CodeExample>
      <CodeExample
        isCentered
        title="Intermediate"
        url={resolvePath("intermediate.tsx")}
      >
        <CheckboxIntermediate />
      </CodeExample>
      <CodeExample
        isCentered
        title="Custom Indicator"
        url={resolvePath("custom-indicator.tsx")}
      >
        <CheckboxCustomIndicator />
      </CodeExample>
    </DocsPage>
  );
};

export default Checkbox;
