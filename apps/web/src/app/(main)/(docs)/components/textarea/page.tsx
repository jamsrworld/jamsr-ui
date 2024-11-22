import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { TextareaControlled } from "./variants/controlled";
import { TextareaUsage } from "./variants/usage";
import { TextareaDisabled } from "./variants/disabled";
import { TextareaErrorState } from "./variants/error-state";
import { TextareaHelperText } from "./variants/helper-text";
import { TextareaLabelHelper } from "./variants/label-helper";
import { TextareaPlaceholder } from "./variants/placeholder";
import { TextareaSizes } from "./variants/sizes";
import { TextareaVariants } from "./variants/variants";
import { TextareaWithEndContent } from "./variants/with-end-content";
import { TextareaWithIcon } from "./variants/with-icon";
import { TextareaWithPlaceholder } from "./variants/with-placeholder";
import { TextareaWithStartContent } from "./variants/with-start-content";
import { TextareaWithoutLabel } from "./variants/without-label";

export const metadata: Metadata = {
  title: "Textarea",
};

const code = <T extends VariantTypes["textarea"][number]>(variant: T) =>
  readVariantCode("textarea", variant);

const Textarea = () => {
  return (
    <VariantPage heading="Textarea">
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
