import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { EditorDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Editor",
};

const Editor = () => {
  return (
    <VariantPage heading="Editor">
      <VariantWrapper heading="Default">
        <EditorDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Editor;