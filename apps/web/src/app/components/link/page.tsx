import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { Metadata } from "next";
import { LinkDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Link",
};

const Link = () => {
  return (
    <VariantPage heading="Link">
      <VariantWrapper heading="Default">
        <LinkDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Link;
