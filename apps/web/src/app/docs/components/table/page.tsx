import { Table } from "ui/table";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { VariantOptions } from "@/types";
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

const tableVariants: VariantOptions<Table.Variants> = {
  variant: {
    options: ["solid", "bordered"],
    defaultValue: "bordered",
  },
  radius: {
    options: ["none", "sm", "md", "lg", "full"],
    defaultValue: "md",
  },
  density: {
    options: ["compact", "standard", "comfortable"],
    defaultValue: "compact",
  },
  allowHover: {
    options: ["true", "false"],
    defaultValue: "false",
  },
  separateRows: {
    options: ["true", "false"],
    defaultValue: "false",
  },
};

const TablePage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={tableVariants}
        component={TableUsage}
      />
      <CodeExampleV2
        title="Sticky Header"
        url={resolvePath("sticky-header.tsx")}
        variants={tableVariants}
        component={TableStickyHeader}
      />
      <CodeExampleV2
        title="Empty State"
        url={resolvePath("empty-state.tsx")}
        variants={tableVariants}
        component={TableEmptyState}
      />
      <CodeExampleV2
        title="Custom Empty State"
        url={resolvePath("custom-empty-state.tsx")}
        variants={tableVariants}
        component={TableCustomEmptyState}
      />
    </DocsPage>
  );
};

export default TablePage;
