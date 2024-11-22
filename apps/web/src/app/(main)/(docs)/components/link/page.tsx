import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { LinkUsage } from "./variants/usage";
import { LinkUnderline } from "./variants/underline";

export const metadata: Metadata = {
  title: "Link",
};

const code = <T extends VariantTypes["link"][number]>(variant: T) =>
  readVariantCode("link", variant);

const Link = () => {
  return (
    <VariantPage heading="Link">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <LinkUsage />
      </VariantWrapper>
      <VariantWrapper heading="Underline" code={code("underline")}>
        <LinkUnderline />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Link;
