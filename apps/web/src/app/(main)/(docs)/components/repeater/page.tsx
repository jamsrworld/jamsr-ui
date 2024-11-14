import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { RepeaterDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Repeater",
};

const code = <T extends VariantTypes["repeater"][number]>(variant: T) =>
  readVariantCode("repeater", variant);

const Repeater = () => {
  return (
    <VariantPage heading="Repeater">
      <VariantWrapper heading="Default" code={code("default")}>
        <RepeaterDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Repeater;
