import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { DataTableDefault } from "./variants/default";
import { DataTableSolid } from "./variants/solid";
import { DataTableStickyHeader } from "./variants/sticky";
import { DataTableWithoutPagination } from "./variants/without-pagination";

export const metadata: Metadata = {
  title: "Data-table",
};

const DataTable = () => {
  return (
    <VariantPage heading="Data Table">
      <VariantWrapper heading="Outlined (Default)">
        <DataTableDefault />
      </VariantWrapper>
      <VariantWrapper heading="Solid">
        <DataTableSolid />
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