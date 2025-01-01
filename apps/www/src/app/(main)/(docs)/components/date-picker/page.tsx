import { VariantPage } from "@/components/docs/variant-page";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";

const title = "Date Picker";
const description = "";

export const metadata: Metadata = {
  title,
  description,
};
const code = <T extends VariantTypes["date-picker"][number]>(variant: T) =>
  readVariantCode("date-picker", variant);

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      Date Picker
    </VariantPage>
  );
};

export default Page;
