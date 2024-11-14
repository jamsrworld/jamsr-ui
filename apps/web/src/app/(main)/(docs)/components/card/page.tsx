import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { CardDefault } from "./variants/default";
import { CardStartEndContent } from "./variants/start-end-content";

export const metadata: Metadata = {
  title: "Card",
};

const code = <T extends VariantTypes["card"][number]>(variant: T) =>
  readVariantCode("card", variant);

const Card = () => {
  return (
    <VariantPage heading="Card">
      <VariantWrapper heading="Default" code={code("default")}>
        <CardDefault />
      </VariantWrapper>
      <VariantWrapper heading="Start End Content" code={code("start-end-content")}>
        <CardStartEndContent />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Card;
