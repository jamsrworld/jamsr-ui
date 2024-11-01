import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { TagInputControlled } from "./variants/controlled";
import { TagInputDefault } from "./variants/default";
import { TagInputDefaultValue } from "./variants/default-value";

export const metadata: Metadata = {
  title: "Editor",
};

const Editor = () => {
  return (
    <VariantPage heading="Tags Input">
      <VariantWrapper heading="Default">
        <TagInputDefault />
      </VariantWrapper>
      <VariantWrapper heading="Default Value">
        <TagInputDefaultValue />
      </VariantWrapper>
      <VariantWrapper heading="Controlled">
        <TagInputControlled />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Editor;
