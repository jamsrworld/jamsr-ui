import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { TagInputDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Editor",
};

const Editor = () => {
  return (
    <VariantPage heading="Tag Input">
      <VariantWrapper heading="Default">
        <TagInputDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Editor;
