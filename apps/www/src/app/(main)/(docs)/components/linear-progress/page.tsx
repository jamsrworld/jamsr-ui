import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { LinearProgressControlled } from "./examples/controlled";
import { LinearProgressColors } from "./examples/colors";
import { LinearProgressUsage } from "./examples/usage";

const title = "Linear Progress";
const description =
  "A visual indicator that displays the progress of an ongoing task in a linear format, providing users with a clear understanding of task completion in real time.";

const code = <T extends VariantTypes["linear-progress"][number]>(variant: T) =>
  readVariantCode("linear-progress", variant);

const Progress = () => {
  return (
    <VariantPage heading={title} description={description}>
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
