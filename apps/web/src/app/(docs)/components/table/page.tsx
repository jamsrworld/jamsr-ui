import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { TableAllowHover } from "./variants/allow-hover";
import { TableBordered } from "./variants/bordered";
import { TableDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Table",
};

const code = <T extends VariantTypes["table"][number]>(variant: T) =>
  readVariantCode("table", variant);

const Table = () => {
  return (
    <VariantPage heading="Table">
      <VariantWrapper heading="Solid  (Default)" code={code("default")}>
        <TableDefault />
      </VariantWrapper>
      <VariantWrapper heading="Bordered" code={code("bordered")}>
        <TableBordered />
      </VariantWrapper>
      <VariantWrapper heading="Allow Hover" code={code("allow-hover")}>
        <TableAllowHover />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Table;
