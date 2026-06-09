import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { MenubarUsage } from "./examples/usage";

const title = "Menubar";
const description =
  "A menu bar providing commands and options for your application.";

export const metadata: Metadata = {
  title,
  description,
};

const MenubarPage = () => {
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
        component={MenubarUsage}
      />
    </DocsPage>
  );
};

export default MenubarPage;
