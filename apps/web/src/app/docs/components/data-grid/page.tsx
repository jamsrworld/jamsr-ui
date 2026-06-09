import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { DataGridEmptyState } from "./examples/empty-state";
import { DataGridServerSide } from "./examples/server";
import { DataGridStickyHeader } from "./examples/sticky-header";
import { DataGridUsage } from "./examples/usage";

const title = "Data Grid";
const description =
  "A powerful and intuitive component for displaying and managing large datasets in a tabular format, with features such as sorting, filtering, and pagination.";

export const metadata: Metadata = {
  title,
  description,
};

const DataGridPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
      size="lg"
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        component={DataGridUsage}
      />
      <CodeExampleV2
        title="Server Side"
        url={resolvePath("server.tsx")}
        component={DataGridServerSide}
      />
      <CodeExampleV2
        title="Empty State"
        url={resolvePath("empty-state.tsx")}
        component={DataGridEmptyState}
      />
      <CodeExampleV2
        title="Sticky Header"
        url={resolvePath("sticky-header.tsx")}
        component={DataGridStickyHeader}
      />
    </DocsPage>
  );
};

export default DataGridPage;
