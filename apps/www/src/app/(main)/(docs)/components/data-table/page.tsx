import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { DataTableBorder } from "./examples/bordered";
import { DataTableCustomization } from "./examples/customization";
import { DataTableEmptyState } from "./examples/empty-state";
import { DataTableGlobalConfig } from "./examples/global-config";
import { DataTableStickyHeader } from "./examples/sticky-header";
import { DataTableUsage } from "./examples/usage";
import { DataTableWithoutPagination } from "./examples/without-pagination";

const title = "Data Table";
const description =
  "A powerful and intuitive component for displaying and managing large datasets in a tabular format, with features such as sorting, filtering, and pagination.";

export const metadata: Metadata = {
  title,
  description,
};
const code = <T extends VariantTypes["data-table"][number]>(variant: T) =>
  readVariantCode("data-table", variant);

const DataTable = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <DataTableUsage />
      </VariantWrapper>
      <VariantWrapper heading="Bordered" code={code("bordered")}>
        <DataTableBorder />
      </VariantWrapper>
      <VariantWrapper
        heading="Without Pagination"
        code={code("without-pagination")}
      >
        <DataTableWithoutPagination />
      </VariantWrapper>
      <VariantWrapper heading="Sticky Header" code={code("sticky-header")}>
        <DataTableStickyHeader />
      </VariantWrapper>
      <VariantWrapper heading="Customization" code={code("customization")}>
        <DataTableCustomization />
      </VariantWrapper>
      <VariantWrapper heading="Empty State" code={code("empty-state")}>
        <DataTableEmptyState />
      </VariantWrapper>
      <VariantWrapper heading="Global Config" code={code("global-config")}>
        <DataTableGlobalConfig />
      </VariantWrapper>
    </VariantPage>
  );
};
export default DataTable;
