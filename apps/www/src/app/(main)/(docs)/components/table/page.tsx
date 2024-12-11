import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { TableAllowHover } from "./examples/allow-hover";
import { TableBordered } from "./examples/bordered";
import { TableEmptyState } from "./examples/empty-state";
import { TableRadius } from "./examples/radius";
import { TableUsage } from "./examples/usage";

export const metadata: Metadata = {
  title: "Table",
};

const code = <T extends VariantTypes["table"][number]>(variant: T) =>
  readVariantCode("table", variant);

const Table = () => {
  return (
    <VariantPage heading="Table">
      <VariantWrapper heading="Solid  (Default)" code={code("usage")}>
        <TableUsage />
      </VariantWrapper>
      <VariantWrapper heading="Bordered" code={code("bordered")}>
        <TableBordered />
      </VariantWrapper>
      <VariantWrapper heading="Allow Hover" code={code("allow-hover")}>
        <TableAllowHover />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <TableRadius />
      </VariantWrapper>
      <VariantWrapper heading="Empty State" code={code("empty-state")}>
        <TableEmptyState />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Table;
