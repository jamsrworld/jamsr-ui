import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { CircularProgressDefault } from "./variants/circular-progress";
import { CircularProgressValue } from "./variants/circular-progress-value";
import { LinearProgressDefault } from "./variants/linear-progress";

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
        <CircularProgressDefault />
      </VariantWrapper>
      <VariantWrapper
        heading="Circular Progress Value"
        code={code("circular-progress-value")}
      >
        <CircularProgressValue />
      </VariantWrapper>
      <VariantWrapper heading="Linear Progress" code={code("linear-progress")}>
        <LinearProgressDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Progress;
