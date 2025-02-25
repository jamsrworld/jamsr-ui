import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { TagsInputControlled } from "./examples/controlled";
import { TagsInputCustomized } from "./examples/customized";
import { TagsInputDefaultValue } from "./examples/default-value";
import { TagsInputInvalidState } from "./examples/invalid-state";
import { TagsInputRadius } from "./examples/radius";
import { TagsInputUsage } from "./examples/usage";

const title = "Tags Input";
const description =
  "A Tags Input component allows users to input multiple tags or keywords by typing and separating them with commas or pressing enter. It is commonly used for adding labels, categories, or keywords to items or content.";

export const metadata: Metadata = {
  title,
  description,
};
const code = <T extends VariantTypes["tags-input"][number]>(variant: T) =>
  readVariantCode("tags-input", variant);

const TagsInput = () => {
  return (
    <VariantPage heading={title} description={description}>
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
      <VariantWrapper heading="Customized" code={code("customized")}>
        <TagsInputCustomized />
      </VariantWrapper>
    </VariantPage>
  );
};
export default TagsInput;
