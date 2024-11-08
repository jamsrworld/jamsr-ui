import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { TableAllowHover } from "./variants/allow-hover";
import { TableBordered } from "./variants/bordered";
import { TableDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Table",
};

const Table = () => {
  return (
    <VariantPage heading="Table">
    <VariantWrapper heading="Solid  (Default)">
      <TableDefault />
    </VariantWrapper>
      <VariantWrapper heading="Bordered">
        <TableBordered />
      </VariantWrapper>
      <VariantWrapper heading="Allow Hover">
        <TableAllowHover />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Table;
