import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { TextareaControlled } from "./examples/controlled";
import { TextareaDisabled } from "./examples/disabled";
import { TextareaErrorState } from "./examples/error-state";
import { TextareaHelperText } from "./examples/helper-text";
import { TextareaLabelHelper } from "./examples/label-helper";
import { TextareaPlaceholder } from "./examples/placeholder";
import { TextareaRadius } from "./examples/radius";
import { TextareaSizes } from "./examples/sizes";
import { TextareaUsage } from "./examples/usage";
import { TextareaVariants } from "./examples/variants";
import { TextareaWithEndContent } from "./examples/with-end-content";
import { TextareaWithIcon } from "./examples/with-icon";
import { TextareaWithPlaceholder } from "./examples/with-placeholder";
import { TextareaWithStartContent } from "./examples/with-start-content";
import { TextareaWithoutLabel } from "./examples/without-label";

const title = "Textarea";
const description =
  "A Textarea component allows users to input multi-line text. It is commonly used for capturing longer user input, such as comments, messages, or descriptions, and offers flexible height for better content management.";

  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["textarea"][number]>(variant: T) =>
  readVariantCode("textarea", variant);

const Textarea = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <TextareaUsage />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <TextareaControlled />
      </VariantWrapper>
      <VariantWrapper heading="Helper Text" code={code("helper-text")}>
        <TextareaHelperText />
      </VariantWrapper>
      <VariantWrapper heading="Error State" code={code("error-state")}>
        <TextareaErrorState />
      </VariantWrapper>
      <VariantWrapper heading="Disabled" code={code("disabled")}>
        <TextareaDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <TextareaRadius />
      </VariantWrapper>
      <VariantWrapper
        heading="With Placeholder"
        code={code("with-placeholder")}
      >
        <TextareaWithPlaceholder />
      </VariantWrapper>
      <VariantWrapper heading="WithoutLabel" code={code("without-label")}>
        <TextareaWithoutLabel />
      </VariantWrapper>
      <VariantWrapper
        heading="With Start Content"
        code={code("with-start-content")}
      >
        <TextareaWithStartContent />
      </VariantWrapper>
      <VariantWrapper
        heading="With End Content"
        code={code("with-end-content")}
      >
        <TextareaWithEndContent />
      </VariantWrapper>
      <VariantWrapper heading="WithIcon" code={code("with-icon")}>
        <TextareaWithIcon />
      </VariantWrapper>
      <VariantWrapper heading="Sizes" code={code("sizes")}>
        <TextareaSizes />
      </VariantWrapper>
      <VariantWrapper heading="Placeholder" code={code("placeholder")}>
        <TextareaPlaceholder />
      </VariantWrapper>
      <VariantWrapper heading="Variant" code={code("variants")}>
        <TextareaVariants />
      </VariantWrapper>
      <VariantWrapper heading="LabelHelper" code={code("label-helper")}>
        <TextareaLabelHelper />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Textarea;
