import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { SkeletonDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Skeleton",
};

const Skeleton = () => {
  return (
    <VariantPage heading="Skeleton">
      <VariantWrapper heading="Default">
        <SkeletonDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Skeleton;
