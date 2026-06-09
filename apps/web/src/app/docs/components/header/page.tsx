import { Header } from "ui/header";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { VariantOptions } from "@/types";
import { HeaderUsage } from "./examples/usage";

const title = "Header";
const description =
  "A prominent and customizable component that displays key information, navigation elements, or branding at the top of a page or section, providing a clear structure to the layout.";

export const metadata: Metadata = {
  title,
  description,
};

const headerVariants: VariantOptions<Header.Variants> = {
  isBorder: {
    options: ["true", "false"],
    defaultValue: "false",
  },
};

const HeaderPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        component={HeaderUsage}
        variants={headerVariants}
      />
    </DocsPage>
  );
};

export default HeaderPage;
