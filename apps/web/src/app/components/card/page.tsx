import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { CardDefault } from "./variants/default";
import { CardStartEndContent } from "./variants/start-end-content";

export const metadata: Metadata = {
  title: "Card",
};

const Card = () => {
  return (
    <VariantPage heading="Card">
      <VariantWrapper heading="Default">
        <CardDefault />
      </VariantWrapper>
      <VariantWrapper heading="Start End Content">
        <CardStartEndContent />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Card;
