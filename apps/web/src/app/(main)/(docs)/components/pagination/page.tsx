import { VariantPage } from "@/components/docs/variant-page";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";

const title = "Pagination";

export const metadata: Metadata = {
  title,
};

const code = <T extends VariantTypes["pagination"][number]>(variant: T) =>
  readVariantCode("pagination", variant);

const Page = () => {
  return <VariantPage heading={title}>Pagination</VariantPage>;
};

export default Page;
