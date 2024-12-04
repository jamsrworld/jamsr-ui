import { VariantPage } from "@/components/docs/variant-page";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";

const title = "Slider";

export const metadata: Metadata = {
  title,
};

const code = <T extends VariantTypes["slider"][number]>(variant: T) =>
  readVariantCode("slider", variant);

const Page = () => {
  return <VariantPage heading={title}>Slider</VariantPage>;
};

export default Page;
