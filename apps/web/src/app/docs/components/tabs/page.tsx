import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { TabColors } from "./examples/colors";
import { TabRadius } from "./examples/radius";
import { TabSizes } from "./examples/sizes";
import { TabsUsage } from "./examples/usage";
import { TabVariants } from "./examples/variants";
import { TabWithIcons } from "./examples/with-icons";

const title = "Tabs";
const description =
  "Tabs structure content into organized sections, providing users with a streamlined way to navigate between them.";

export const metadata: Metadata = {
  title,
  description,
};

const Tabs = () => {
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
        <TabsUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Variants"
        url={resolvePath("variants.tsx")}
      >
        <TabVariants />
      </CodeExample>
      <CodeExample
        isCentered
        title="Colors"
        url={resolvePath("colors.tsx")}
      >
        <TabColors />
      </CodeExample>
      <CodeExample
        isCentered
        title="Sizes"
        url={resolvePath("sizes.tsx")}
      >
        <TabSizes />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radius"
        url={resolvePath("radius.tsx")}
      >
        <TabRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Icons"
        url={resolvePath("with-icons.tsx")}
      >
        <TabWithIcons />
      </CodeExample>
    </DocsPage>
  );
};

export default Tabs;
