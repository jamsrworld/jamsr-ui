import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { LinearProgressControlled } from "./examples/controlled";
import { LinearProgressColors } from "./examples/colors";
import { LinearProgressUsage } from "./examples/usage";

export const metadata: Metadata = {
  title: "Linear Progress",
};

const code = <T extends VariantTypes["linear-progress"][number]>(variant: T) =>
  readVariantCode("linear-progress", variant);

const Progress = () => {
  return (
    <VariantPage heading="Linear Progress">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <LinearProgressUsage />
      </VariantWrapper>
      <VariantWrapper heading="Colors" code={code("colors")}>
        <LinearProgressColors />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <LinearProgressControlled />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Progress;
