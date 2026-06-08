import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { SelectControlled } from "./examples/controlled";
import { SelectControlledNumber } from "./examples/controlled-number";
import { SelectCustomRenderMultiple } from "./examples/custom-render-multiple";
import { SelectCustomRenderValue } from "./examples/custom-render-value";
import { SelectDisabled } from "./examples/disabled";
import { SelectDisabledItems } from "./examples/disabled-items";
import { SelectMultiple } from "./examples/multiple";
import { SelectMultipleControlled } from "./examples/multiple-controlled";
import { SelectPlaceholder } from "./examples/placeholder";
import { SelectRadius } from "./examples/radius";
import { SelectSizes } from "./examples/sizes";
import { SelectStartEndItems } from "./examples/start-end-items";
import { SelectUsage } from "./examples/usage";
import { SelectWithDescription } from "./examples/with-description";
import { SelectWithErrorMessage } from "./examples/with-error-message";
import { SelectWithIcons } from "./examples/with-icons";

const title = "Select";
const description =
  "The Select component provides a dropdown menu that allows users to choose one or more options from a list. It is commonly used for form inputs, offering a compact way to present multiple choices.";

export const metadata: Metadata = {
  title,
  description,
};

const Select = () => {
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
        <SelectUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radius"
        url={resolvePath("radius.tsx")}
      >
        <SelectRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <SelectControlled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled Number"
        url={resolvePath("controlled-number.tsx")}
      >
        <SelectControlledNumber />
      </CodeExample>
      <CodeExample
        isCentered
        title="Placeholder"
        url={resolvePath("placeholder.tsx")}
      >
        <SelectPlaceholder />
      </CodeExample>
      <CodeExample
        isCentered
        title="Disabled"
        url={resolvePath("disabled.tsx")}
      >
        <SelectDisabled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Disabled Items"
        url={resolvePath("disabled-items.tsx")}
      >
        <SelectDisabledItems />
      </CodeExample>
      <CodeExample
        isCentered
        title="Start & End Items"
        url={resolvePath("start-end-items.tsx")}
      >
        <SelectStartEndItems />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Description"
        url={resolvePath("with-description.tsx")}
      >
        <SelectWithDescription />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Error Message"
        url={resolvePath("with-error-message.tsx")}
      >
        <SelectWithErrorMessage />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Icons"
        url={resolvePath("with-icons.tsx")}
      >
        <SelectWithIcons />
      </CodeExample>
      <CodeExample
        isCentered
        title="Sizes"
        url={resolvePath("sizes.tsx")}
      >
        <SelectSizes />
      </CodeExample>
      <CodeExample
        isCentered
        title="Custom Render Value"
        url={resolvePath("custom-render-value.tsx")}
      >
        <SelectCustomRenderValue />
      </CodeExample>
      <CodeExample
        isCentered
        title="Multiple"
        url={resolvePath("multiple.tsx")}
      >
        <SelectMultiple />
      </CodeExample>
      <CodeExample
        isCentered
        title="Multiple Controlled"
        url={resolvePath("multiple-controlled.tsx")}
      >
        <SelectMultipleControlled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Custom Render Multiple"
        url={resolvePath("custom-render-multiple.tsx")}
      >
        <SelectCustomRenderMultiple />
      </CodeExample>
    </DocsPage>
  );
};

export default Select;
