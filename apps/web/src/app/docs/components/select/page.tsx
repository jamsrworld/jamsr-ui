import { CodeExampleV2 } from "@/components/code-example-v2";
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

const selectVariants = {
  size: {
    options: ["sm", "md", "lg"],
    defaultValue: "md",
  },
  radius: {
    options: ["none", "sm", "md", "lg", "full"],
    defaultValue: "md",
  },
};

const SelectPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        isCentered
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={selectVariants}
        component={SelectUsage}
      />
      <CodeExampleV2
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
        variants={selectVariants}
        component={SelectControlled}
      />
      <CodeExampleV2
        isCentered
        title="Controlled Number"
        url={resolvePath("controlled-number.tsx")}
        variants={selectVariants}
        component={SelectControlledNumber}
      />
      <CodeExampleV2
        isCentered
        title="Placeholder"
        url={resolvePath("placeholder.tsx")}
        variants={selectVariants}
        component={SelectPlaceholder}
      />
      <CodeExampleV2
        isCentered
        title="Disabled"
        url={resolvePath("disabled.tsx")}
        variants={selectVariants}
        component={SelectDisabled}
      />
      <CodeExampleV2
        isCentered
        title="Disabled Items"
        url={resolvePath("disabled-items.tsx")}
        variants={selectVariants}
        component={SelectDisabledItems}
      />
      <CodeExampleV2
        isCentered
        title="Start & End Items"
        url={resolvePath("start-end-items.tsx")}
        variants={selectVariants}
        component={SelectStartEndItems}
      />
      <CodeExampleV2
        isCentered
        title="With Description"
        url={resolvePath("with-description.tsx")}
        variants={selectVariants}
        component={SelectWithDescription}
      />
      <CodeExampleV2
        isCentered
        title="With Error Message"
        url={resolvePath("with-error-message.tsx")}
        variants={selectVariants}
        component={SelectWithErrorMessage}
      />
      <CodeExampleV2
        isCentered
        title="With Icons"
        url={resolvePath("with-icons.tsx")}
        variants={selectVariants}
        component={SelectWithIcons}
      />
      <CodeExampleV2
        isCentered
        title="Custom Render Value"
        url={resolvePath("custom-render-value.tsx")}
        variants={selectVariants}
        component={SelectCustomRenderValue}
      />
      <CodeExampleV2
        isCentered
        title="Multiple"
        url={resolvePath("multiple.tsx")}
        variants={selectVariants}
        component={SelectMultiple}
      />
      <CodeExampleV2
        isCentered
        title="Multiple Controlled"
        url={resolvePath("multiple-controlled.tsx")}
        variants={selectVariants}
        component={SelectMultipleControlled}
      />
      <CodeExampleV2
        isCentered
        title="Custom Render Multiple"
        url={resolvePath("custom-render-multiple.tsx")}
        variants={selectVariants}
        component={SelectCustomRenderMultiple}
      />
    </DocsPage>
  );
};

export default SelectPage;
