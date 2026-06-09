import { Kbd } from "jamsrui/kbd";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { VariantOptions } from "@/types";
import { KbdUsage } from "./examples/usage";

const title = "Kbd";
const description =
  "A component that displays keyboard keys or key combinations, typically used to indicate shortcuts or key actions within an interface.";

export const metadata: Metadata = {
  title,
  description,
};

const kbdVariants: VariantOptions<Kbd.Variants> = {
  size: {
    options: ["sm", "md", "lg"],
    defaultValue: "md",
  },
};

const KbdPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={kbdVariants}
        component={KbdUsage}
      />
    </DocsPage>
  );
};

export default KbdPage;
