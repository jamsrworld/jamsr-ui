import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { DataTableBorder } from "./variants/bordered";
import { DataTableCustomization } from "./variants/customization";
import { DataTableStickyHeader } from "./variants/sticky-header";
import { DataTableUsage } from "./variants/usage";
import { DataTableWithoutPagination } from "./variants/without-pagination";

export const metadata: Metadata = {
  title: "Data-table",
};

const code = <T extends VariantTypes["data-table"][number]>(variant: T) =>
  readVariantCode("data-table", variant);

const DataTable = () => {
  return (
    <VariantPage heading="Data Table">
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
    </VariantPage>
  );
};
export default DataTable;
