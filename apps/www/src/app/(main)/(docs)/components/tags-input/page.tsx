import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { TagsInputControlled } from "./examples/controlled";
import { TagsInputDefaultValue } from "./examples/default-value";
import { TagsInputInvalidState } from "./examples/invalid-state";
import { TagsInputRadius } from "./examples/radius";
import { TagsInputUsage } from "./examples/usage";

export const metadata: Metadata = {
  title: "Editor",
};

const code = <T extends VariantTypes["tags-input"][number]>(variant: T) =>
  readVariantCode("tags-input", variant);

const Editor = () => {
  return (
    <VariantPage heading="Tags Input">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <TagsInputUsage />
      </VariantWrapper>
      <VariantWrapper heading="Default Value" code={code("default-value")}>
        <TagsInputDefaultValue />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <TagsInputControlled />
      </VariantWrapper>
      <VariantWrapper heading="Invalid State" code={code("invalid-state")}>
        <TagsInputInvalidState />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <TagsInputRadius />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Editor;
