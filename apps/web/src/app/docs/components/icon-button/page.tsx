import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { IconButtonColors } from "./examples/colors";
import { IconButtonDisabled } from "./examples/disabled";
import { IconButtonLoading } from "./examples/loading";
import { IconButtonRadius } from "./examples/radius";
import { IconButtonSizes } from "./examples/sizes";
import { IconButtonUsage } from "./examples/usage";
import { IconButtonVariants } from "./examples/variants";
import { IconButtonVariantsColors } from "./examples/variants-colors";

const title = "IconButton";
const description =
  "A compact and interactive button that uses an icon to trigger actions, providing a visually efficient way to execute tasks without cluttering the interface.";

export const metadata: Metadata = {
  title,
  description,
};

const IconButton = () => {
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
        <IconButtonUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Disabled"
        url={resolvePath("disabled.tsx")}
      >
        <IconButtonDisabled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Loading"
        url={resolvePath("loading.tsx")}
      >
        <IconButtonLoading />
      </CodeExample>
      <CodeExample
        isCentered
        title="Sizes"
        url={resolvePath("sizes.tsx")}
      >
        <IconButtonSizes />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radius"
        url={resolvePath("radius.tsx")}
      >
        <IconButtonRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="Colors"
        url={resolvePath("colors.tsx")}
      >
        <IconButtonColors />
      </CodeExample>
      <CodeExample
        isCentered
        title="Variants Colors"
        url={resolvePath("variants-colors.tsx")}
      >
        <IconButtonVariantsColors />
      </CodeExample>
      <CodeExample
        isCentered
        title="Variants"
        url={resolvePath("variants.tsx")}
      >
        <IconButtonVariants />
      </CodeExample>
    </DocsPage>
  );
};

export default IconButton;
