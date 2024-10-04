import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { DataTableDefault } from "./variants/default";
import { DataTableServer } from "./variants/server";

export const metadata: Metadata = {
  title: "Data-table",
};

const DataTable = () => {
  return (
    <VariantPage heading="Data Table">
      <VariantWrapper heading="Client">
        <DataTableDefault />
      </VariantWrapper>
      <VariantWrapper heading="Server">
        <DataTableServer />
      </VariantWrapper>
    </VariantPage>
  );
};
export default DataTable;
