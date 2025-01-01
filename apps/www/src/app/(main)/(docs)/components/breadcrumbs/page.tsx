import { VariantPage } from "@/components/docs/variant-page";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";

const title = "Breadcrumbs";
const description = "";

export const metadata: Metadata = {
  title,
  description,
};
const code = <T extends VariantTypes["breadcrumbs"][number]>(variant: T) =>
  readVariantCode("breadcrumbs", variant);

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      Breadcrumbs
    </VariantPage>
  );
};

export default Page;
