import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { ComboboxUsage } from "./examples/usage";

const title = "Combobox";
const description =
  "An input combined with a list of predefined items to select from.";

export const metadata: Metadata = {
  title,
  description,
};

const ComboboxPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        component={ComboboxUsage}
      />
    </DocsPage>
  );
};

export default ComboboxPage;
