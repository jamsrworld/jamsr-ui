import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { Code } from "@/components/code";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { CardDefault } from "./variants/default";
import { CardStartEndContent } from "./variants/start-end-content";

const title = "Card";
const description =
  "A card presents focused content and actionable items related to a single subject .";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["card"][number]>(variant: T) =>
  readVariantCode("card", variant);

const Card = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Default" code={code("default")}>
        <CardDefault />
      </VariantWrapper>

      <VariantWrapper
        heading="Start End Content"
        code={code("start-end-content")}
        description={
          <div>
            Use the <Code>startContent</Code>and<Code>endContent</Code> prop to change the visual style of the Card.
          </div>
        }
      >
        <CardStartEndContent />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Card;
