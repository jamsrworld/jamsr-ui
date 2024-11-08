import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { LinkDefault } from "./variants/default";
import { LinkUnderline } from "./variants/hover";

export const metadata: Metadata = {
  title: "Link",
};

const Link = () => {
  return (
    <VariantPage heading="Link">
      <VariantWrapper heading="Default">
        <LinkDefault />
      </VariantWrapper>
      <VariantWrapper heading="Underline">
        <LinkUnderline />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Link;
