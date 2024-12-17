import { VariantPage } from "@/components/docs/variant-page";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";

const title = "Number Input";
const description =
  "A Number Input component allows users to input numerical values. It typically includes controls for incrementing or decrementing values, providing a precise way to select a number within a defined range.";

  export const metadata: Metadata = {
    title,
    description,
  };;
const code = <T extends VariantTypes["slider"][number]>(variant: T) =>
  readVariantCode("slider", variant);

const Page = () => {
  return <VariantPage heading={title} description={description}>Number Input</VariantPage>;
};

export default Page;
