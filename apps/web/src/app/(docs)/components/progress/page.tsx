import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import {
  CircularProgressDefault,
  CircularProgressValue,
  LinearProgressDefault,
} from "./variants/default";

export const metadata: Metadata = {
  title: "Progress",
};

const Progress = () => {
  return (
    <VariantPage heading="Progress">
      <VariantWrapper heading="Circular Progress">
        <CircularProgressDefault />
      </VariantWrapper>
      <VariantWrapper heading="Circular Progress Value">
        <CircularProgressValue />
      </VariantWrapper>
      <VariantWrapper heading="Linear Progress">
        <LinearProgressDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Progress;
