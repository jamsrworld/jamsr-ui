import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { EditorControlled } from "./variants/controlled";
import { EditorUsage } from "./variants/usage";
import { EditorInvalid } from "./variants/invalid";

export const metadata: Metadata = {
  title: "Editor",
};

const code = <T extends VariantTypes["editor"][number]>(variant: T) =>
  readVariantCode("editor", variant);

const Editor = () => {
  return (
    <VariantPage heading="Editor">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <EditorUsage />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <EditorControlled />
      </VariantWrapper>
      <VariantWrapper heading="Invalid State" code={code("invalid")}>
        <EditorInvalid />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Editor;
