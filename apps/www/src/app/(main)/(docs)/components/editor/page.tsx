import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { EditorControlled } from "./examples/controlled";
import { EditorUsage } from "./examples/usage";
import { EditorInvalid } from "./examples/invalid";

const title = "Editor";
const description =
  "A robust and versatile component that provides an interactive interface for users to create, edit, and format content with rich-text and media support.";

const code = <T extends VariantTypes["editor"][number]>(variant: T) =>
  readVariantCode("editor", variant);

const Editor = () => {
  return (
    <VariantPage heading={title} description={description}>
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
