import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { TableDefault } from "./variants/default";
import { TableOutlined } from "./variants/outlined";

export const metadata: Metadata = {
  title: "Table",
};

const Table = () => {
  return (
    <VariantPage heading="Table">
      <VariantWrapper heading="Solid">
        <TableDefault />
      </VariantWrapper>
      <VariantWrapper heading="Outlined">
        <TableOutlined />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Table;
