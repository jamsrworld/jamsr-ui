import { VariantPage } from "@/components/docs/variant-page";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";

const title = "Pagination";
const description =
  "A Pagination component helps break large sets of content into smaller, more manageable pages. It allows users to navigate through multiple pages of content using controls like next, previous, or page numbers.";

  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["pagination"][number]>(variant: T) =>
  readVariantCode("pagination", variant);

const Page = () => {
  return <VariantPage heading={title} description={description}>Pagination</VariantPage>;
};

export default Page;
