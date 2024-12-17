import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { SkeletonUsage } from "./examples/usage";

const title = "Skeleton";
const description =
  "A Skeleton component is a placeholder UI element that mimics the layout of content while it's loading. It provides a visual cue to users that content is being loaded, improving the user experience during delays.";

  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["skeleton"][number]>(variant: T) =>
  readVariantCode("skeleton", variant);

const Skeleton = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <SkeletonUsage />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Skeleton;
