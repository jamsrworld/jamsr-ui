import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { DataTableUsage } from "./variants/usage";
import { DataTableBorder } from "./variants/bordered";
import { DataTableStickyHeader } from "./variants/sticky-header";
import { DataTableWithoutPagination } from "./variants/without-pagination";

export const metadata: Metadata = {
  title: "Data-table",
};

const code = <T extends VariantTypes["data-table"][number]>(variant: T) =>
  readVariantCode("data-table", variant);

const DataTable = () => {
  return (
    <VariantPage heading="Data Table">
      <VariantWrapper heading="Solid (Default)" code={code("usage")}>
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
    </VariantPage>
  );
};
export default DataTable;
