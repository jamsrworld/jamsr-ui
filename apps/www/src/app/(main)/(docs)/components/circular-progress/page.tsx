import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { CircularProgressColors } from "./examples/colors";
import { CircularProgressSizes } from "./examples/sizes";
import { CircularProgressUsage } from "./examples/usage";
import { CircularProgressValue } from "./examples/with-value";

const title = "Circular Progress";
const description =
  "A visually engaging component that provides a clear indication of ongoing processes or tasks, allowing users to track progress in real time with a circular animation.";

  export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["circular-progress"][number]>(
  variant: T,
) => readVariantCode("circular-progress", variant);

const Progress = () => {
  return (
    <VariantPage heading={title} description={description}>
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
