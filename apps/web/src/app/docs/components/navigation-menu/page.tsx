import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { NavigationMenuUsage } from "./examples/usage";

const title = "Navigation Menu";
const description = "A collection of links and menus for website navigation.";

export const metadata: Metadata = {
  title,
  description,
};

const NavigationMenuPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        component={NavigationMenuUsage}
      />
    </DocsPage>
  );
};

export default NavigationMenuPage;
