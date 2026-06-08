import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { TextareaControlled } from "./examples/controlled";
import { TextareaDisabled } from "./examples/disabled";
import { TextareaErrorState } from "./examples/error-state";
import { TextareaPrefixSuffix } from "./examples/prefix-suffix";
import { TextareaRadius } from "./examples/radius";
import { TextareaSizes } from "./examples/sizes";
import { TextareaUsage } from "./examples/usage";
import { TextareaVariants } from "./examples/variants";
import { TextareaWithDescription } from "./examples/with-description";
import { TextareaWithIcon } from "./examples/with-icon";
import { TextareaWithLabel } from "./examples/with-label";

const title = "Textarea";
const description =
  "A form element that allows users to textarea and submit data, supporting various types such as text, numbers, and more for seamless data entry.";

export const metadata: Metadata = {
  title,
  description,
};

const Textarea = () => {
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
        <TextareaUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Label"
        url={resolvePath("with-label.tsx")}
      >
        <TextareaWithLabel />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Description"
        url={resolvePath("with-description.tsx")}
      >
        <TextareaWithDescription />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <TextareaControlled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Variants"
        url={resolvePath("variants.tsx")}
      >
        <TextareaVariants />
      </CodeExample>
      <CodeExample
        isCentered
        title="Sizes"
        url={resolvePath("sizes.tsx")}
      >
        <TextareaSizes />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radius"
        url={resolvePath("radius.tsx")}
      >
        <TextareaRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="Error State"
        url={resolvePath("error-state.tsx")}
      >
        <TextareaErrorState />
      </CodeExample>
      <CodeExample
        isCentered
        title="Disabled"
        url={resolvePath("disabled.tsx")}
      >
        <TextareaDisabled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Prefix & Suffix"
        url={resolvePath("prefix-suffix.tsx")}
      >
        <TextareaPrefixSuffix />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Icon"
        url={resolvePath("with-icon.tsx")}
      >
        <TextareaWithIcon />
      </CodeExample>
    </DocsPage>
  );
};

export default Textarea;
