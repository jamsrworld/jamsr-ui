import { VariantPage } from "@/components/docs/variant-page";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";

const title = "Sidebar";
const description =
  "A Sidebar is a UI element that typically appears on the left or right side of the screen, providing easy access to navigation links or additional content without taking up too much space on the main interface.";

  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["slider"][number]>(variant: T) =>
  readVariantCode("slider", variant);

const Page = () => {
  return <VariantPage heading={title} description={description}>Sidebar</VariantPage>;
};

export default Page;
