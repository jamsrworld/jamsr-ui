import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { AutocompleteUsage } from "./examples/usage";

const title = "Autocomplete";
const description =
  "An input that suggests options as you type for search-like behavior.";

export const metadata: Metadata = {
  title,
  description,
};

const AutocompletePage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        component={AutocompleteUsage}
      />
    </DocsPage>
  );
};

export default AutocompletePage;
