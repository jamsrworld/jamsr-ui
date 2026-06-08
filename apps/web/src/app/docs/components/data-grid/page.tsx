import { CodeExample } from "@/components/code-example";
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

const DataGrid = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
      size="lg"
    >
      <CodeExample
        title="Usage"
        url={resolvePath("usage.tsx")}
      >
        <DataGridUsage />
      </CodeExample>
      <CodeExample
        title="Server Side"
        url={resolvePath("server.tsx")}
      >
        <DataGridServerSide />
      </CodeExample>
      <CodeExample
        title="Empty State"
        url={resolvePath("empty-state.tsx")}
      >
        <DataGridEmptyState />
      </CodeExample>
      <CodeExample
        title="Sticky Header"
        url={resolvePath("sticky-header.tsx")}
      >
        <DataGridStickyHeader />
      </CodeExample>
    </DocsPage>
  );
};

export default DataGrid;
