import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { SkeletonDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Skeleton",
};

const code = <T extends VariantTypes["skeleton"][number]>(variant: T) =>
  readVariantCode("skeleton", variant);

const Skeleton = () => {
  return (
    <VariantPage heading="Skeleton">
      <VariantWrapper heading="Default" code={code("default")}>
        <SkeletonDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Skeleton;
