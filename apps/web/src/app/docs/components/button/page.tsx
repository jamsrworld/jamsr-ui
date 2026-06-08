import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { ButtonColors } from "./examples/colors";
import { ButtonDisabled } from "./examples/disabled";
import { ButtonLoading } from "./examples/loading";
import { ButtonSizes } from "./examples/sizes";
import { ButtonUsage } from "./examples/usage";
import { ButtonVariants } from "./examples/variants";
import { ButtonVariantsColors } from "./examples/variants-colors";
import { ButtonWithIcons } from "./examples/with-icons";

const title = "Button";
const description =
  "Buttons allow users to take actions, and make choices, with a single tap.";

export const metadata: Metadata = {
  title,
  description,
};

const Button = () => {
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
        <ButtonUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Colors"
        url={resolvePath("colors.tsx")}
      >
        <ButtonColors />
      </CodeExample>
      <CodeExample
        isCentered
        title="Variants"
        url={resolvePath("variants.tsx")}
      >
        <ButtonVariants />
      </CodeExample>
      <CodeExample
        isCentered
        title="Sizes"
        url={resolvePath("sizes.tsx")}
      >
        <ButtonSizes />
      </CodeExample>
      <CodeExample
        isCentered
        title="Loading"
        url={resolvePath("loading.tsx")}
      >
        <ButtonLoading />
      </CodeExample>
      <CodeExample
        isCentered
        title="Disabled"
        url={resolvePath("disabled.tsx")}
      >
        <ButtonDisabled />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Icons"
        url={resolvePath("with-icons.tsx")}
      >
        <ButtonWithIcons />
      </CodeExample>
      <CodeExample
        isCentered
        title="Variants Colors"
        url={resolvePath("variants-colors.tsx")}
      >
        <ButtonVariantsColors />
      </CodeExample>
    </DocsPage>
  );
};

export default Button;
