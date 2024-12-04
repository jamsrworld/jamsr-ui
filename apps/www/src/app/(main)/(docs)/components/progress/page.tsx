import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { CircularProgressUsage } from "./examples/circular-progress";
import { CircularProgressValue } from "./examples/circular-progress-value";
import { LinearProgressUsage } from "./examples/linear-progress";

export const metadata: Metadata = {
  title: "Progress",
};

const code = <T extends VariantTypes["progress"][number]>(variant: T) =>
  readVariantCode("progress", variant);

const Progress = () => {
  return (
    <VariantPage heading="Progress">
      <VariantWrapper
        heading="Circular Progress"
        code={code("circular-progress")}
      >
        <CircularProgressUsage />
      </VariantWrapper>
      <VariantWrapper
        heading="Circular Progress Value"
        code={code("circular-progress-value")}
      >
        <CircularProgressValue />
      </VariantWrapper>
      <VariantWrapper heading="Linear Progress" code={code("linear-progress")}>
        <LinearProgressUsage />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Progress;
