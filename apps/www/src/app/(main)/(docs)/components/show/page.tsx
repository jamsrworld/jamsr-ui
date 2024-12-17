import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { ShowUsage } from "./examples/usage";


const title = "Show";
const description =
  "The Show component is used to display content conditionally, often based on a user's interaction or other state changes. It allows for hiding or revealing elements within the UI without a page refresh.";

export const metadata: Metadata = {
  title,
  description,
};
const code = <T extends VariantTypes["show"][number]>(variant: T) =>
  readVariantCode("show", variant);

const Show = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <ShowUsage />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Show;
