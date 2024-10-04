import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { TableDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Table",
};

const Table = () => {
  return (
    <VariantPage heading="Table">
      <VariantWrapper heading="Default">
        <TableDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Table;
