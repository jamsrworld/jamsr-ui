import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { TableAllowHover } from "./examples/allow-hover";
import { TableBordered } from "./examples/bordered";
import { TableCustomEmptyState } from "./examples/custom-empty-state";
import { TableEmptyState } from "./examples/empty-state";
import { TableStickyHeader } from "./examples/sticky-header";
import { TableUsage } from "./examples/usage";

const title = "Table";
const description =
  "A Table component is used to organize and display data in rows and columns. It provides a structured way to present large datasets, with features like sorting, filtering, and pagination for better data management.";

export const metadata: Metadata = {
  title,
  description,
};

const Table = () => {
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
        <TableUsage />
      </CodeExample>
      <CodeExample
        title="Bordered"
        url={resolvePath("bordered.tsx")}
      >
        <TableBordered />
      </CodeExample>
      <CodeExample
        title="Allow Hover"
        url={resolvePath("allow-hover.tsx")}
      >
        <TableAllowHover />
      </CodeExample>
      <CodeExample
        title="Sticky Header"
        url={resolvePath("sticky-header.tsx")}
      >
        <TableStickyHeader />
      </CodeExample>
      <CodeExample
        title="Empty State"
        url={resolvePath("empty-state.tsx")}
      >
        <TableEmptyState />
      </CodeExample>
      <CodeExample
        title="Custom Empty State"
        url={resolvePath("custom-empty-state.tsx")}
      >
        <TableCustomEmptyState />
      </CodeExample>
    </DocsPage>
  );
};

export default Table;
