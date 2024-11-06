import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { EditorControlled } from "./variants/controlled";
import { EditorDefault } from "./variants/default";
import { EditorInvalid } from "./variants/invalid";

export const metadata: Metadata = {
  title: "Editor",
};

const Editor = () => {
  return (
    <VariantPage heading="Editor">
      <VariantWrapper heading="Default">
        <EditorDefault />
      </VariantWrapper>
      <VariantWrapper heading="Controlled">
        <EditorControlled />
      </VariantWrapper>
      <VariantWrapper heading="Invalid State">
        <EditorInvalid />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Editor;
