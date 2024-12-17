import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { RepeaterUsage } from "./examples/usage";
import { RepeaterIndex } from "./examples";

const title = "Repeater";
const description =
  "A Repeater component is used to repeat a set of elements based on a data source. It allows for dynamic rendering of a collection of items, providing a flexible way to display lists, tables, or other repeated content.";


  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["repeater"][number]>(variant: T) =>
  readVariantCode("repeater", variant);

const Repeater = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <RepeaterUsage />
      </VariantWrapper>
      <VariantWrapper heading="Index" code={code("index")}>
        <RepeaterIndex />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Repeater;
