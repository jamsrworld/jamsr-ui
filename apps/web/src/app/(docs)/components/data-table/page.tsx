import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { DataTableDefault } from "./variants/default";
import { DataTableBorder } from "./variants/solid";
import { DataTableStickyHeader } from "./variants/sticky";
import { DataTableWithoutPagination } from "./variants/without-pagination";

export const metadata: Metadata = {
  title: "Data-table",
};

const DataTable = () => {
  return (
    <VariantPage heading="Data Table">
      <VariantWrapper heading="Solid (Default)">
        <DataTableDefault />
      </VariantWrapper>
      <VariantWrapper heading="Bordered">
        <DataTableBorder />
      </VariantWrapper>
      <VariantWrapper heading="Without Pagination">
        <DataTableWithoutPagination />
      </VariantWrapper>
      <VariantWrapper heading="Sticky Header">
        <DataTableStickyHeader />
      </VariantWrapper>
    </VariantPage>
  );
};
export default DataTable;
