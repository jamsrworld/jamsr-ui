import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { RippleAtCenter } from "./examples/center";
import { RippleUsage } from "./examples/usage";


const title = "Ripple";
const description =
  "Ripple is a visual effect that creates a wave-like animation when a user interacts with a UI element, such as a button or a link. It is often used to provide feedback to users, indicating that the element has been activated.";

  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["ripple"][number]>(variant: T) =>
  readVariantCode("ripple", variant);

const Ripple = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <RippleUsage />
      </VariantWrapper>
      <VariantWrapper heading="Center" code={code("center")}>
        <RippleAtCenter />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Ripple;
