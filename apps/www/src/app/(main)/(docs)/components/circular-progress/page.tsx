import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { CircularProgressColors } from "./examples/colors";
import { CircularProgressSizes } from "./examples/sizes";
import { CircularProgressUsage } from "./examples/usage";
import { CircularProgressValue } from "./examples/with-value";

export const metadata: Metadata = {
  title: "Circular Progress",
};

const code = <T extends VariantTypes["circular-progress"][number]>(
  variant: T,
) => readVariantCode("circular-progress", variant);

const Progress = () => {
  return (
    <VariantPage heading="Circular Progress">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <CircularProgressUsage />
      </VariantWrapper>
      <VariantWrapper heading="Colors" code={code("colors")}>
        <CircularProgressColors />
      </VariantWrapper>
      <VariantWrapper heading="Sizes" code={code("sizes")}>
        <CircularProgressSizes />
      </VariantWrapper>
      <VariantWrapper heading="With Value" code={code("with-value")}>
        <CircularProgressValue />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Progress;
