import { VariantPage } from "@/components/docs/variant-page";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";

const title = "Slider";
const description =
  "A Slider is a UI component that allows users to adjust a value within a range by sliding a handle along a track. It's commonly used for selecting values like volume, brightness, or any other continuous range.";

  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["slider"][number]>(variant: T) =>
  readVariantCode("slider", variant);

const Page = () => {
  return <VariantPage heading={title} description={description}>Slider</VariantPage>;
};

export default Page;
