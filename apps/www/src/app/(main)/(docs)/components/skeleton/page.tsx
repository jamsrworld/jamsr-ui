import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { SkeletonUsage } from "./examples/usage";

export const metadata: Metadata = {
  title: "Skeleton",
};

const code = <T extends VariantTypes["skeleton"][number]>(variant: T) =>
  readVariantCode("skeleton", variant);

const Skeleton = () => {
  return (
    <VariantPage heading="Skeleton">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <SkeletonUsage />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Skeleton;
