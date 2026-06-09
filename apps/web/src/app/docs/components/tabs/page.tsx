import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { TabDisabled } from "./examples/disabled";
import { TabDisabledItem } from "./examples/disabled-item";
import { TabsUsage } from "./examples/usage";
import { TabWithIcons } from "./examples/with-icons";

const title = "Tabs";
const description =
  "Tabs structure content into organized sections, providing users with a streamlined way to navigate between them.";

export const metadata: Metadata = {
  title,
  description,
};

const tabsVariants = {
  variant: {
    options: ["solid", "light", "underlined", "bordered"],
    defaultValue: "solid",
  },
  color: {
    options: [
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ],
    defaultValue: "default",
  },
  size: {
    options: ["sm", "md", "lg"],
    defaultValue: "md",
  },
  radius: {
    options: ["none", "sm", "md", "lg", "full"],
    defaultValue: "md",
  },
};

const TabsPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={tabsVariants}
        component={TabsUsage}
      />
      <CodeExampleV2
        isCentered
        title="With Icons"
        url={resolvePath("with-icons.tsx")}
        variants={tabsVariants}
        component={TabWithIcons}
      />
      <CodeExampleV2
        isCentered
        title="Disabled All"
        url={resolvePath("disabled.tsx")}
        variants={tabsVariants}
        component={TabDisabled}
      />
      <CodeExampleV2
        isCentered
        title="Disabled Item"
        url={resolvePath("disabled-item.tsx")}
        variants={tabsVariants}
        component={TabDisabledItem}
      />
    </DocsPage>
  );
};

export default TabsPage;
