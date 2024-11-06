import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { TagsInputControlled } from "./variants/controlled";
import { TagsInputDefault } from "./variants/default";
import { TagsInputDefaultValue } from "./variants/default-value";
import { TagsInputInvalidState } from "./variants/invalid-state";

export const metadata: Metadata = {
  title: "Editor",
};

const Editor = () => {
  return (
    <VariantPage heading="Tags Input">
      <VariantWrapper heading="Default">
        <TagsInputDefault />
      </VariantWrapper>
      <VariantWrapper heading="Default Value">
        <TagsInputDefaultValue />
      </VariantWrapper>
      <VariantWrapper heading="Controlled">
        <TagsInputControlled />
      </VariantWrapper>
      <VariantWrapper heading="Invalid State">
        <TagsInputInvalidState />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Editor;
